// Checkout attribution bridge for GA4/server-side purchase reconciliation.
// Safe-by-default: if anything fails, existing Stripe/Paddle checkouts continue unchanged.
(function () {
  'use strict';

  var GA4_MEASUREMENT_ID = window.GA4_MEASUREMENT_ID || 'G-DV5BH9XVVS';
  var ATTRIBUTION_VERSION = '2026-06-07';
  var WRAPPED_FLAG = '__checkoutAttributionWrapped';
  var EMAIL_ATTRIBUTION_KEY = 'docgpt_email_attribution_v1';
  var EMAIL_ATTRIBUTION_TTL_DAYS = 30;
  var PADDLE_CLICK_BOUND_ATTR = 'data-checkout-attribution-paddle-bound';

  var PRODUCT_CONFIGS = [
    { match: /^\/$/, product: 'home', surface: 'home', provider: null },
    { match: /gpt-for-sheets-upgrade/, product: 'gpt_for_sheets', surface: 'upgrade_page', provider: 'paddle' },
    { match: /gpt-for-sheets/, product: 'gpt_for_sheets', surface: 'seo_product_page', provider: 'paddle' },
    { match: /mail-merge-for-gmail-and-sheets/, product: 'mail_merge', surface: 'seo_product_page', provider: 'stripe' },
    { match: /ai-email-assistant/, product: 'ai_email_assistant', surface: 'seo_product_page', provider: 'paddle' },
    { match: /google-slide-ai/, product: 'slides_ai', surface: 'seo_product_page', provider: 'paddle' },
    { match: /quiz-maker-ai/, product: 'quiz_maker', surface: 'seo_product_page', provider: 'paddle' },
    { match: /form-timer-and-form-scheduler/, product: 'form_timer', surface: 'seo_product_page', provider: 'paddle' },
    { match: /translate-slides-with-ai-gpt/, product: 'slides_translator', surface: 'seo_product_page', provider: 'paddle' },
    { match: /slides-translator-ai-powered/, product: 'slides_translator', surface: 'seo_product_page', provider: 'paddle' },
    { match: /google-doc-ai/, product: 'google_doc_ai', surface: 'seo_product_page', provider: 'paddle' },
    { match: /cold-outreach-messages-linkedin/, product: 'linkedin_outreach', surface: 'seo_product_page', provider: 'paddle' },
    { match: /qr-code-generator-pricing/, product: 'qr_code_generator', surface: 'pricing_page', provider: 'stripe' }
  ];

  function readCookie(name) {
    try {
      var match = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/[.$?*|{}()\[\]\\\/\+^]/g, '\\$&') + '=([^;]*)'));
      return match ? decodeURIComponent(match[1]) : null;
    } catch (error) {
      return null;
    }
  }

  function getGAClientId() {
    var gaCookie = readCookie('_ga');
    if (!gaCookie) return null;
    var parts = gaCookie.split('.');
    if (parts.length >= 4) return parts[2] + '.' + parts[3];
    return gaCookie;
  }

  function getGASessionId() {
    var streamCookieName = '_ga_' + String(GA4_MEASUREMENT_ID).replace('G-', '');
    var streamCookie = readCookie(streamCookieName);
    if (!streamCookie) return null;
    var match = streamCookie.match(/(?:^|\.)s(\d+)/);
    return match ? match[1] : null;
  }

  function getPostHogDistinctId() {
    try {
      if (window.posthog && typeof window.posthog.get_distinct_id === 'function') return window.posthog.get_distinct_id();
    } catch (error) {}
    return null;
  }

  function getPostHogSessionId() {
    try {
      if (window.posthog && typeof window.posthog.get_session_id === 'function') return window.posthog.get_session_id();
    } catch (error) {}
    return null;
  }

  function getParam(name) {
    try {
      var params = new URLSearchParams(window.location.search);
      var value = params.get(name);
      if (!value && name === 'utm_source') value = params.get('utm_souce');
      return value || null;
    } catch (error) {
      return null;
    }
  }

  function firstValue() {
    for (var i = 0; i < arguments.length; i += 1) {
      if (arguments[i] !== undefined && arguments[i] !== null && arguments[i] !== '') return arguments[i];
    }
    return null;
  }

  function parseJson(value) {
    if (!value || typeof value !== 'string') return null;
    try {
      var parsed = JSON.parse(value);
      return parsed && typeof parsed === 'object' ? parsed : null;
    } catch (error) {
      return null;
    }
  }

  function readStorage(key) {
    try {
      if (window.localStorage && window.localStorage.getItem) return window.localStorage.getItem(key);
    } catch (error) {}
    return null;
  }

  function writeStorage(key, value) {
    try {
      if (window.localStorage && window.localStorage.setItem) window.localStorage.setItem(key, value);
    } catch (error) {}
  }

  function compact(obj) {
    var out = {};
    Object.keys(obj || {}).forEach(function (key) {
      var value = obj[key];
      if (value !== undefined && value !== null && value !== '') out[key] = value;
    });
    return out;
  }

  function safeLower(value) {
    return String(value || '').toLowerCase();
  }

  var SENSITIVE_QUERY_KEYS = ['email', 'e', 'token', 'access_token', 'refresh_token', 'api_key', 'password', 'secret'];

  function isSensitiveKey(key) {
    key = String(key || '').toLowerCase();
    return SENSITIVE_QUERY_KEYS.indexOf(key) !== -1;
  }

  function sanitizeUrl(url) {
    try {
      var parsed = new URL(url || window.location.href, window.location.origin);
      SENSITIVE_QUERY_KEYS.forEach(function (key) {
        parsed.searchParams.delete(key);
      });
      return parsed.origin + parsed.pathname + (parsed.search ? parsed.search : '') + (parsed.hash ? parsed.hash : '');
    } catch (error) {
      return window.location.pathname || null;
    }
  }

  function getConfig() {
    var path = window.location.pathname || '';
    for (var i = 0; i < PRODUCT_CONFIGS.length; i += 1) {
      if (PRODUCT_CONFIGS[i].match.test(path || '/')) return PRODUCT_CONFIGS[i];
    }
    return {
      product: path.replace(/^\//, '').replace(/\/$/, '').replace(/\.html$/, '').replace(/[^a-z0-9]+/gi, '_').toLowerCase() || 'docgpt',
      surface: 'seo_product_page',
      provider: null
    };
  }

  function inferTrafficType() {
    var source = safeLower(getParam('utm_source'));
    var medium = safeLower(getParam('utm_medium'));
    var campaign = safeLower(getParam('utm_campaign'));
    var content = safeLower(getParam('utm_content'));
    var reason = safeLower(getParam('reason'));
    var referrer = safeLower(document.referrer);
    var path = safeLower(window.location.pathname);

    if (source === 'sheets_addon' || source === 'addon' || source.indexOf('addon') !== -1 || medium.indexOf('addon') !== -1 || campaign.indexOf('addon') !== -1 || content.indexOf('addon') !== -1 || reason.indexOf('addon') !== -1 || referrer.indexOf('script.google.com') !== -1 || referrer.indexOf('script.googleusercontent.com') !== -1) return 'addon';
    if (source === 'email' || source === 'ses' || medium === 'email' || campaign.indexOf('hello_') !== -1) return 'email';
    if (medium === 'cpc' || medium === 'ppc' || source === 'adwords' || source === 'google_ads' || !!getParam('gclid') || !!getParam('gbraid') || !!getParam('wbraid') || !!getParam('fbclid') || !!getParam('msclkid')) return 'paid';
    if (source === 'tolt' || !!getParam('via') || !!getParam('ref') || !!getParam('tolt_referral')) return 'referral';
    if (referrer.indexOf('docgpt.ai') !== -1 && path !== '/') return 'home';
    if (source === 'google' || referrer.indexOf('google.') !== -1 || referrer.indexOf('bing.com') !== -1 || referrer.indexOf('duckduckgo.com') !== -1 || referrer.indexOf('yandex.') !== -1) return 'seo';
    if (!document.referrer && !source && !medium) return 'direct';
    return 'other';
  }

  function inferPageVariant(cfg) {
    cfg = cfg || getConfig();
    if (cfg.product !== 'gpt_for_sheets') return null;
    return cfg.surface === 'upgrade_page' ? 'upgrade' : 'main';
  }

  function experimentName(cfg) {
    cfg = cfg || getConfig();
    return cfg.product === 'gpt_for_sheets' ? 'gpt_sheets_addon_upgrade_page' : null;
  }

  function pageVersion(cfg, pageVariant) {
    cfg = cfg || getConfig();
    return [cfg.product, cfg.surface, pageVariant || 'default', ATTRIBUTION_VERSION].join('_');
  }

  function redirectedFrom(cfg) {
    cfg = cfg || getConfig();
    if (getParam('redirected_from')) return getParam('redirected_from');
    if (cfg.product === 'gpt_for_sheets' && cfg.surface === 'upgrade_page' && getParam('reason') === 'addon_upgrade') return '/gpt-for-sheets/';
    return null;
  }

  function normalizeEmailProduct(value) {
    if (value === undefined || value === null || value === '') return null;
    value = String(value).toLowerCase();
    if (value.indexOf('gmail') !== -1) return 'gmail';
    if (value.indexOf('slides') !== -1 || value.indexOf('presentation') !== -1) return 'slides';
    if (value.indexOf('forms') !== -1 || value.indexOf('form') !== -1 || value.indexOf('quiz') !== -1) return 'forms';
    if (value.indexOf('sheets') !== -1 || value.indexOf('sheet') !== -1) return 'sheets';
    if (value.indexOf('mail_merge') !== -1 || value.indexOf('mail-merge') !== -1 || value.indexOf('mailmerge') !== -1) return 'mail-merge';
    if (value.indexOf('linkedin') !== -1 || value.indexOf('crm') !== -1) return 'linkedin-crm';
    if (value.indexOf('docgpt') !== -1 || value.indexOf('docs') !== -1 || value === '/' || value === '') return 'docs';
    return value.replace(/^\//, '').replace(/\/$/, '').replace(/\.html$/, '') || null;
  }

  function inferEmailStep(value) {
    value = String(value || '').toLowerCase();
    if (value.indexOf('discount') !== -1 || value.indexOf('offer') !== -1) return 'discount';
    if (value.indexOf('step_3') !== -1 || value.indexOf('step-3') !== -1 || value.indexOf('step3') !== -1 || value.indexOf('upgrade') !== -1) return 'step3';
    if (value.indexOf('step_2') !== -1 || value.indexOf('step-2') !== -1 || value.indexOf('step2') !== -1) return 'step2';
    if (value.indexOf('step_1') !== -1 || value.indexOf('step-1') !== -1 || value.indexOf('step1') !== -1) return 'step1';
    if (value.indexOf('hello') !== -1 || value.indexOf('start') !== -1) return 'hello';
    return null;
  }

  function inferEmailProduct() {
    return firstValue(
      normalizeEmailProduct(getParam('email_product')),
      normalizeEmailProduct(getParam('utm_campaign')),
      normalizeEmailProduct(getParam('utm_content')),
      normalizeEmailProduct(window.location.pathname || '')
    );
  }

  function inferEmailStepFromParams() {
    return firstValue(
      getParam('email_step'),
      inferEmailStep(getParam('utm_content')),
      inferEmailStep(getParam('utm_campaign'))
    );
  }

  function readPersistedEmailAttribution() {
    var stored = parseJson(readStorage(EMAIL_ATTRIBUTION_KEY));
    if (!stored) return {};
    if (stored.email_expires_at && Date.now() > Number(stored.email_expires_at)) return {};
    return stored;
  }

  function persistEmailAttributionIfPresent() {
    try {
      var source = getParam('utm_source');
      var medium = getParam('utm_medium');
      var campaign = getParam('utm_campaign');
      var content = getParam('utm_content');
      var isEmailClick = String(source || '').toLowerCase() === 'ses' || String(medium || '').toLowerCase() === 'email';
      if (!isEmailClick || !campaign) return readPersistedEmailAttribution();
      var now = Date.now();
      var attribution = compact({
        email_source: source || 'ses',
        email_medium: medium || 'email',
        email_campaign: campaign,
        email_content: content,
        email_term: getParam('utm_term'),
        email_product: inferEmailProduct(),
        email_step: inferEmailStepFromParams(),
        email_landing_page: sanitizeUrl(window.location.href),
        email_referrer: document.referrer ? sanitizeUrl(document.referrer) : null,
        email_attributed_at: new Date(now).toISOString(),
        email_expires_at: now + EMAIL_ATTRIBUTION_TTL_DAYS * 24 * 60 * 60 * 1000
      });
      writeStorage(EMAIL_ATTRIBUTION_KEY, JSON.stringify(attribution));
      return attribution;
    } catch (error) {
      return readPersistedEmailAttribution();
    }
  }

  function buildAttribution(extra) {
    extra = extra || {};
    var cfg = getConfig();
    var pageVariant = inferPageVariant(cfg);
    var emailAttribution = readPersistedEmailAttribution();
    return compact({
      attribution_version: ATTRIBUTION_VERSION,
      ga_client_id: getGAClientId(),
      ga_session_id: getGASessionId(),
      posthog_distinct_id: getPostHogDistinctId(),
      posthog_session_id: getPostHogSessionId(),
      utm_source: firstValue(getParam('utm_source'), extra.utm_source, emailAttribution.email_source),
      utm_medium: firstValue(getParam('utm_medium'), extra.utm_medium, emailAttribution.email_medium),
      utm_campaign: firstValue(getParam('utm_campaign'), extra.utm_campaign, emailAttribution.email_campaign),
      utm_content: firstValue(getParam('utm_content'), extra.utm_content, emailAttribution.email_content),
      utm_term: firstValue(getParam('utm_term'), extra.utm_term, emailAttribution.email_term),
      gclid: firstValue(getParam('gclid'), extra.gclid),
      gbraid: firstValue(getParam('gbraid'), extra.gbraid),
      wbraid: firstValue(getParam('wbraid'), extra.wbraid),
      fbclid: firstValue(getParam('fbclid'), extra.fbclid),
      msclkid: firstValue(getParam('msclkid'), extra.msclkid),
      email_source: emailAttribution.email_source,
      email_medium: emailAttribution.email_medium,
      email_campaign: emailAttribution.email_campaign,
      email_content: emailAttribution.email_content,
      email_term: emailAttribution.email_term,
      email_product: emailAttribution.email_product,
      email_step: emailAttribution.email_step,
      email_landing_page: emailAttribution.email_landing_page ? sanitizeUrl(emailAttribution.email_landing_page) : null,
      email_referrer: emailAttribution.email_referrer ? sanitizeUrl(emailAttribution.email_referrer) : null,
      email_attributed_at: emailAttribution.email_attributed_at,
      page_url_sanitized: sanitizeUrl(window.location.href),
      landing_page: sanitizeUrl(window.location.href),
      referrer: document.referrer ? sanitizeUrl(document.referrer) : null,
      page: window.location.pathname,
      source_page: window.location.pathname,
      product: firstValue(extra.product, cfg.product),
      surface: firstValue(extra.surface, cfg.surface),
      provider: firstValue(extra.provider, cfg.provider),
      traffic_type: firstValue(extra.traffic_type, inferTrafficType()),
      page_variant: firstValue(extra.page_variant, pageVariant),
      page_version: firstValue(extra.page_version, pageVersion(cfg, pageVariant)),
      experiment_name: firstValue(extra.experiment_name, experimentName(cfg)),
      experiment_variant: firstValue(extra.experiment_variant, pageVariant),
      release_version: ATTRIBUTION_VERSION,
      redirected_from: firstValue(extra.redirected_from, redirectedFrom(cfg)),
      redirect_reason: firstValue(extra.redirect_reason, getParam('reason')),
      plan: firstValue(extra.plan, extra.product_id),
      plan_id: firstValue(extra.plan_id, extra.product_id, extra.plan),
      tolt_referral: firstValue(window.tolt_referral, extra.tolt_referral)
    });
  }

  function parseData(value) {
    if (!value) return {};
    if (typeof value === 'object') return value;
    if (typeof value !== 'string') return {};
    try {
      var parsedJson = JSON.parse(value);
      return parsedJson && typeof parsedJson === 'object' ? parsedJson : {};
    } catch (jsonError) {
      var params = new URLSearchParams(value);
      var out = {};
      params.forEach(function (paramValue, key) { out[key] = paramValue; });
      return out;
    }
  }

  function stringifyForPaddle(value) {
    return JSON.stringify(compact(value || {}));
  }

  function sanitizeAttributionData(value) {
    if (!value || typeof value !== 'object') return value;
    if (Array.isArray(value)) {
      return value.map(function (item) { return sanitizeAttributionData(item); });
    }
    var out = {};
    Object.keys(value).forEach(function (key) {
      if (isSensitiveKey(key)) return;
      var item = value[key];
      if ((key === 'ref' || key === 'page' || key === 'landing_page' || key === 'email_landing_page' || key === 'referrer' || key === 'email_referrer' || /url/i.test(key)) && typeof item === 'string') {
        out[key] = sanitizeUrl(item);
        return;
      }
      if (key === 'params' && item && typeof item === 'object') {
        out[key] = sanitizeAttributionData(item);
        return;
      }
      out[key] = sanitizeAttributionData(item);
    });
    return out;
  }

  function mergeAttribution(existing, extra) {
    return compact(Object.assign({}, sanitizeAttributionData(parseData(existing)), buildAttribution(extra)));
  }

  function augmentPaddleOptions(options) {
    try {
      if (!options || typeof options !== 'object') return options;
      var extra = {
        product_id: options.product,
        plan_id: firstValue(options.plan_id, options.product),
        plan: options.product,
        provider: 'paddle',
        coupon: options.coupon
      };
      var merged = mergeAttribution(options.customData || options.passthrough, extra);
      options.customData = merged;
      options.passthrough = stringifyForPaddle(merged);
    } catch (error) {
      if (window.console && console.warn) console.warn('Paddle attribution merge failed; using original checkout options', error);
    }
    return options;
  }

  function wrapPaddle(Paddle) {
    try {
      if (!Paddle || !Paddle.Checkout || !Paddle.Checkout.open || Paddle.Checkout.open[WRAPPED_FLAG]) return Paddle;
      var originalOpen = Paddle.Checkout.open;
      Paddle.Checkout.open = function (options) {
        return originalOpen.call(this, augmentPaddleOptions(options));
      };
      Paddle.Checkout.open[WRAPPED_FLAG] = true;
    } catch (error) {
      if (window.console && console.warn) console.warn('Paddle checkout wrapper failed', error);
    }
    return Paddle;
  }

  function installPaddleWrapper() {
    try {
      if (window.Paddle) wrapPaddle(window.Paddle);
      var currentPaddle = window.Paddle;
      var descriptor = Object.getOwnPropertyDescriptor(window, 'Paddle');
      if (!descriptor || descriptor.configurable) {
        Object.defineProperty(window, 'Paddle', {
          configurable: true,
          get: function () { return currentPaddle; },
          set: function (value) {
            currentPaddle = wrapPaddle(value);
          }
        });
        if (currentPaddle) window.Paddle = currentPaddle;
      }
      var attempts = 0;
      var interval = window.setInterval(function () {
        attempts += 1;
        if (window.Paddle && window.Paddle.Checkout && window.Paddle.Checkout.open) wrapPaddle(window.Paddle);
        if (attempts > 200 || (window.Paddle && window.Paddle.Checkout && window.Paddle.Checkout.open && window.Paddle.Checkout.open[WRAPPED_FLAG])) {
          window.clearInterval(interval);
        }
      }, 50);
    } catch (error) {
      if (window.console && console.warn) console.warn('Paddle wrapper installation failed', error);
    }
  }

  function applyPaddleButtonAttribution() {
    function refreshButton(button) {
      var extra = {
        product_id: button.getAttribute('data-product'),
        plan_id: firstValue(button.getAttribute('data-plan-id'), button.getAttribute('data-product'), button.getAttribute('data-plan')),
        plan: button.getAttribute('data-product'),
        provider: 'paddle'
      };
      var customData = mergeAttribution(button.getAttribute('data-custom-data'), extra);
      var passthrough = mergeAttribution(button.getAttribute('data-passthrough'), extra);
      button.setAttribute('data-custom-data', stringifyForPaddle(customData));
      button.setAttribute('data-passthrough', stringifyForPaddle(passthrough));
    }

    try {
      var buttons = document.querySelectorAll('.paddle_button');
      buttons.forEach(function (button) {
        refreshButton(button);
        if (button.getAttribute(PADDLE_CLICK_BOUND_ATTR) === 'true') return;
        button.setAttribute(PADDLE_CLICK_BOUND_ATTR, 'true');
        button.addEventListener('click', function () {
          refreshButton(button);
        }, true);
      });
    } catch (error) {
      if (window.console && console.warn) console.warn('Paddle button attribution failed; buttons left unchanged', error);
    }
  }

  function trackCheckoutStarted(provider, link, plan) {
    try {
      if (typeof window.dataLayer !== 'undefined') {
        window.dataLayer.push({
          event: provider + '_checkout_started',
          plan_name: plan || null,
          checkout_url: link && link.href ? link.href : null
        });
      }
    } catch (error) {}
  }

  function enhanceStripeLink(event, link) {
    try {
      if (!link || !link.href || link.href.indexOf('buy.stripe.com') === -1) return true;
      var plan = link.getAttribute('data-plan') || link.textContent.trim() || null;
      trackCheckoutStarted('stripe', link, plan);
      var attribution = buildAttribution({ plan: plan });
      var url = new URL(link.href);
      if (attribution.ga_client_id) url.searchParams.set('client_reference_id', 'ga:' + attribution.ga_client_id);
      Object.keys(attribution).forEach(function (key) {
        if (attribution[key]) url.searchParams.set(key, attribution[key]);
      });
      event.preventDefault();
      window.open(url.toString(), link.target || '_self');
      return false;
    } catch (error) {
      if (window.console && console.warn) console.warn('Stripe attribution failed; using original checkout link', error);
      return true;
    }
  }

  function applyStripeLinks() {
    try {
      var links = document.querySelectorAll('a[href*="buy.stripe.com"]');
      links.forEach(function (link) {
        if (link.getAttribute('data-checkout-attribution-bound') === 'true') return;
        // Some legacy pages already call CheckoutAttribution/enhanceStripeCheckoutLink inline.
        // Do not attach a second listener there, otherwise checkout can open twice.
        if (link.getAttribute('onclick')) return;
        link.setAttribute('data-checkout-attribution-bound', 'true');
        link.addEventListener('click', function (event) { enhanceStripeLink(event, link); });
      });
    } catch (error) {
      if (window.console && console.warn) console.warn('Stripe link attribution binding failed', error);
    }
  }

  function applyAll() {
    applyStripeLinks();
    applyPaddleButtonAttribution();
  }

  window.CheckoutAttribution = {
    build: buildAttribution,
    merge: mergeAttribution,
    augmentPaddleOptions: augmentPaddleOptions,
    applyPaddleButtons: applyPaddleButtonAttribution,
    enhanceStripeLink: enhanceStripeLink,
    applyStripeLinks: applyStripeLinks,
    applyAll: applyAll,
    readEmailAttribution: readPersistedEmailAttribution,
    persistEmailAttribution: persistEmailAttributionIfPresent
  };

  persistEmailAttributionIfPresent();

  installPaddleWrapper();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyAll);
  } else {
    applyAll();
  }
})();

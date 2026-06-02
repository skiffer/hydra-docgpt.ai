// Checkout attribution bridge for GA4/server-side purchase reconciliation.
// Safe-by-default: if anything fails, existing Stripe/Paddle checkouts continue unchanged.
(function () {
  'use strict';

  var GA4_MEASUREMENT_ID = window.GA4_MEASUREMENT_ID || 'G-DV5BH9XVVS';
  var WRAPPED_FLAG = '__checkoutAttributionWrapped';
  var EMAIL_ATTRIBUTION_KEY = 'docgpt_email_attribution_v1';
  var EMAIL_ATTRIBUTION_TTL_DAYS = 30;

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

  function getParam(name) {
    try {
      return new URLSearchParams(window.location.search).get(name) || null;
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

  function inferProduct() {
    var path = window.location.pathname || '';
    return path.replace(/^\//, '').replace(/\/$/, '').replace(/\.html$/, '') || 'docgpt';
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
        email_landing_page: window.location.href,
        email_referrer: document.referrer || null,
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
    var emailAttribution = readPersistedEmailAttribution();
    return compact({
      ga_client_id: getGAClientId(),
      ga_session_id: getGASessionId(),
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
      email_landing_page: emailAttribution.email_landing_page,
      email_referrer: emailAttribution.email_referrer,
      email_attributed_at: emailAttribution.email_attributed_at,
      landing_page: window.location.href,
      referrer: document.referrer || null,
      page: window.location.pathname,
      product: firstValue(extra.product, inferProduct()),
      plan: firstValue(extra.plan, extra.product_id),
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

  function mergeAttribution(existing, extra) {
    return compact(Object.assign({}, buildAttribution(extra), parseData(existing)));
  }

  function augmentPaddleOptions(options) {
    try {
      if (!options || typeof options !== 'object') return options;
      var extra = {
        product_id: options.product,
        plan: options.product,
        coupon: options.coupon
      };
      var merged = mergeAttribution(options.customData || options.passthrough, extra);
      options.customData = Object.assign({}, merged, parseData(options.customData));
      options.passthrough = stringifyForPaddle(Object.assign({}, merged, parseData(options.passthrough)));
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
    try {
      var buttons = document.querySelectorAll('.paddle_button');
      buttons.forEach(function (button) {
        var extra = {
          product_id: button.getAttribute('data-product'),
          plan: button.getAttribute('data-product')
        };
        var customData = mergeAttribution(button.getAttribute('data-custom-data'), extra);
        var passthrough = mergeAttribution(button.getAttribute('data-passthrough'), extra);
        button.setAttribute('data-custom-data', stringifyForPaddle(customData));
        button.setAttribute('data-passthrough', stringifyForPaddle(passthrough));
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

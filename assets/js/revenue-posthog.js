// Generic PostHog revenue funnel tracking for DocGPT product/pricing/home pages.
// Fail-open: if PostHog/Paddle/Stripe/DOM parsing fails, checkout and page behavior continue unchanged.
(function () {
  'use strict';

  var VERSION = '2026-06-05';
  var SCROLL_BUCKETS = [25, 50, 75, 100];
  var QUEUE_FLUSH_INTERVAL_MS = 200;
  var QUEUE_FLUSH_TIMEOUT_MS = 10000;
  var firedScrollBuckets = {};
  var seenEventKeys = {};
  var PADDLE_WRAPPED_FLAG = '__docgptRevenueWrapped';
  var STRIPE_BOUND_FLAG = 'data-revenue-stripe-bound';
  var CLICK_BOUND_FLAG = 'data-revenue-posthog-bound';
  var captureQueue = window.__docgptPosthogQueue = window.__docgptPosthogQueue || [];
  var queueInterval = null;
  var queueStartedAt = Date.now();

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

  function compact(obj) {
    var out = {};
    Object.keys(obj || {}).forEach(function (key) {
      var value = obj[key];
      if (value !== undefined && value !== null && value !== '') out[key] = value;
    });
    return out;
  }

  function getParam(name) {
    try {
      return new URLSearchParams(window.location.search).get(name) || null;
    } catch (error) {
      return null;
    }
  }

  function safeLower(value) {
    return String(value || '').toLowerCase();
  }

  function sanitizeUrl(url) {
    try {
      var parsed = new URL(url || window.location.href, window.location.origin);
      ['email', 'e', 'token', 'access_token', 'refresh_token', 'api_key', 'password', 'secret'].forEach(function (key) {
        parsed.searchParams.delete(key);
      });
      return parsed.origin + parsed.pathname + (parsed.search ? parsed.search : '') + (parsed.hash ? parsed.hash : '');
    } catch (error) {
      return window.location.pathname || null;
    }
  }

  function referrerDomain() {
    try {
      return document.referrer ? new URL(document.referrer).hostname.replace(/^www\./, '') : null;
    } catch (error) {
      return null;
    }
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

  function getConfig() {
    var path = window.location.pathname || '/';
    for (var i = 0; i < PRODUCT_CONFIGS.length; i += 1) {
      if (PRODUCT_CONFIGS[i].match.test(path)) return PRODUCT_CONFIGS[i];
    }
    return {
      product: path.replace(/^\//, '').replace(/\/$/, '').replace(/\.html$/, '').replace(/[^a-z0-9]+/gi, '_').toLowerCase() || 'docgpt',
      surface: 'seo_product_page',
      provider: null
    };
  }

  function productForPath(path) {
    path = path || '/';
    for (var i = 0; i < PRODUCT_CONFIGS.length; i += 1) {
      if (PRODUCT_CONFIGS[i].match.test(path)) return PRODUCT_CONFIGS[i].product;
    }
    return String(path).replace(/^\//, '').replace(/\/$/, '').replace(/\.html$/, '').replace(/[^a-z0-9]+/gi, '_').toLowerCase() || null;
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
    return [cfg.product, cfg.surface, pageVariant || 'default', VERSION].join('_');
  }

  function redirectedFrom(cfg) {
    cfg = cfg || getConfig();
    if (getParam('redirected_from')) return getParam('redirected_from');
    if (cfg.product === 'gpt_for_sheets' && cfg.surface === 'upgrade_page' && getParam('reason') === 'addon_upgrade') return '/gpt-for-sheets/';
    return null;
  }

  function baseProps(extra) {
    var cfg = getConfig();
    var pageVariant = inferPageVariant(cfg);
    return compact(Object.assign({
      revenue_tracking_version: VERSION,
      release_version: VERSION,
      product: cfg.product,
      surface: cfg.surface,
      provider: cfg.provider,
      traffic_type: inferTrafficType(),
      page_variant: pageVariant,
      page_version: pageVersion(cfg, pageVariant),
      experiment_name: experimentName(cfg),
      experiment_variant: pageVariant,
      redirected_from: redirectedFrom(cfg),
      redirect_reason: getParam('reason') || null,
      page_path: window.location.pathname || null,
      source_page: window.location.pathname || null,
      page_url_sanitized: sanitizeUrl(window.location.href),
      referrer_domain: referrerDomain(),
      posthog_distinct_id: getPostHogDistinctId(),
      posthog_session_id: getPostHogSessionId(),
      utm_source: getParam('utm_source'),
      utm_medium: getParam('utm_medium'),
      utm_campaign: getParam('utm_campaign'),
      utm_content: getParam('utm_content'),
      utm_term: getParam('utm_term'),
      has_email: !!getParam('email'),
      reason: getParam('reason') || getParam('utm_medium') || getParam('utm_campaign')
    }, extra || {}));
  }

  function posthogReady() {
    return !!(window.posthog && typeof window.posthog.capture === 'function');
  }

  function runtimePostHogProps(props) {
    return compact(Object.assign({}, props || {}, {
      posthog_distinct_id: props && props.posthog_distinct_id ? props.posthog_distinct_id : getPostHogDistinctId(),
      posthog_session_id: props && props.posthog_session_id ? props.posthog_session_id : getPostHogSessionId()
    }));
  }

  function dedupeKey(eventName, props) {
    if (!props || !props.checkout_id) return null;
    if (eventName === 'checkout_loaded' || eventName === 'checkout_customer_created' || eventName === 'checkout_complete_frontend') {
      return eventName + ':' + props.checkout_id;
    }
    return null;
  }

  function shouldSkipDuplicate(eventName, props) {
    var key = dedupeKey(eventName, props);
    if (!key) return false;
    if (seenEventKeys[key]) return true;
    seenEventKeys[key] = true;
    return false;
  }

  function sendCapture(item) {
    try {
      if (!posthogReady()) return false;
      window.posthog.capture(item.eventName, runtimePostHogProps(item.props));
      return true;
    } catch (error) {
      if (window.console && console.warn) console.warn('Revenue PostHog capture failed: ' + item.eventName, error);
      return true;
    }
  }

  function flushQueue() {
    if (!posthogReady()) {
      if (Date.now() - queueStartedAt > QUEUE_FLUSH_TIMEOUT_MS && queueInterval) {
        window.clearInterval(queueInterval);
        queueInterval = null;
      }
      return;
    }
    while (captureQueue.length) {
      if (!sendCapture(captureQueue[0])) break;
      captureQueue.shift();
    }
    if (!captureQueue.length && queueInterval) {
      window.clearInterval(queueInterval);
      queueInterval = null;
    }
  }

  function scheduleFlush() {
    if (queueInterval) return;
    queueStartedAt = Date.now();
    queueInterval = window.setInterval(flushQueue, QUEUE_FLUSH_INTERVAL_MS);
  }

  function capture(eventName, props) {
    var fullProps = baseProps(props);
    if (shouldSkipDuplicate(eventName, fullProps)) {
      flushQueue();
      return;
    }
    var item = { eventName: eventName, props: fullProps };
    if (sendCapture(item)) return;
    captureQueue.push(item);
    if (captureQueue.length > 200) captureQueue.shift();
    scheduleFlush();
  }

  function captureRevenueAndPricing(revenueEventName, pricingEventName, props) {
    capture(revenueEventName, props);
    capture(pricingEventName, props);
  }

  function isLandingSurface(cfg) {
    cfg = cfg || getConfig();
    return cfg.surface === 'home' || cfg.surface === 'seo_product_page';
  }

  function isPricingSurface(cfg) {
    cfg = cfg || getConfig();
    return cfg.surface === 'pricing_page' || cfg.surface === 'upgrade_page';
  }

  function parseMoney(text) {
    var match = String(text || '').replace(',', '.').match(/(?:[$€£]\s*)?([0-9]+(?:\.[0-9]+)?)/);
    return match ? Number(match[1]) : null;
  }

  function inferBillingPeriod(button, planCard) {
    var value = button && (button.getAttribute('data-billing-period') || button.getAttribute('data-period'));
    if (value) return value;
    var haystack = safeLower(((button && button.textContent) || '') + ' ' + ((planCard && planCard.textContent) || ''));
    if (haystack.indexOf('month') !== -1 || haystack.indexOf('/mo') !== -1) return 'monthly';
    if (haystack.indexOf('year') !== -1 || haystack.indexOf('annual') !== -1 || haystack.indexOf('/yr') !== -1) return 'annual';
    if (haystack.indexOf('lifetime') !== -1 || haystack.indexOf('one time') !== -1) return 'lifetime';
    return null;
  }

  function nearestSectionName(el) {
    try {
      var node = el;
      while (node && node !== document.body) {
        if (node.id) return node.id;
        node = node.parentElement;
      }
    } catch (error) {}
    return null;
  }

  function inferCtaLocation(el, planCard) {
    var explicit = el && el.getAttribute('data-cta-location');
    if (explicit) return explicit;
    if (planCard) return 'plan_card';
    var section = safeLower(nearestSectionName(el));
    if (section.indexOf('hero') !== -1) return 'hero';
    if (section.indexOf('pricing') !== -1) return 'pricing';
    if (section.indexOf('footer') !== -1) return 'footer';
    if (section.indexOf('comparison') !== -1) return 'comparison';
    if (getConfig().surface === 'home') return 'home_card';
    return section || 'page';
  }

  function getPlanProps(el) {
    var planCard = el && el.closest ? el.closest('.upgrade-plan-card, .pricing-card, .card, .price-card, .pricing-box, .box, [class*="plan"]') : null;
    var plan = el ? (el.getAttribute('data-plan') || el.getAttribute('data-plan-name') || el.getAttribute('data-product')) : null;
    if (!plan && planCard) {
      var heading = planCard.querySelector('h2, h3, h4, .h5, .h6, .plan-name, .title, [class*="title"]');
      plan = heading ? heading.textContent.trim().replace(/\s+/g, ' ') : null;
    }
    var priceText = el ? (el.getAttribute('data-price') || '') : '';
    if (!priceText && planCard) {
      var priceNode = planCard.querySelector('.price, .plan-price, [class*="price"]');
      priceText = priceNode ? priceNode.textContent.trim() : '';
    }
    var href = el && el.href ? el.href : (el ? el.getAttribute('href') : null);
    var inferredProvider = href && /buy\.stripe\.com/i.test(href) ? 'stripe' : (el && el.classList && el.classList.contains('paddle_button') ? 'paddle' : null);
    return compact({
      provider: inferredProvider,
      product_id: el ? el.getAttribute('data-product') : null,
      plan_id: el ? (el.getAttribute('data-plan-id') || el.getAttribute('data-product') || el.getAttribute('data-plan')) : null,
      plan: plan,
      billing_period: inferBillingPeriod(el, planCard),
      price: parseMoney(priceText),
      currency: priceText && priceText.indexOf('€') !== -1 ? 'EUR' : (priceText && priceText.indexOf('£') !== -1 ? 'GBP' : (priceText && priceText.indexOf('$') !== -1 ? 'USD' : null)),
      coupon: getParam('coupon') || (el ? el.getAttribute('data-coupon') : null),
      cta_text: el ? (el.textContent || '').trim().replace(/\s+/g, ' ') : null,
      cta_location: inferCtaLocation(el, planCard),
      is_recommended: !!(planCard && planCard.classList && (planCard.classList.contains('is-recommended') || planCard.classList.contains('popular') || planCard.classList.contains('recommended'))),
      href_domain: href ? (function () { try { return new URL(href, window.location.origin).hostname.replace(/^www\./, ''); } catch (error) { return null; } })() : null,
      href_path: href ? (function () { try { return new URL(href, window.location.origin).pathname; } catch (error) { return href; } })() : null
    });
  }

  function isInstallLink(el, href, text) {
    return /workspace\.google\.com|chromewebstore\.google\.com|marketplace|install/i.test((href || '') + ' ' + (text || ''));
  }

  function isCheckoutLink(el, href, text) {
    return (el && el.classList && el.classList.contains('paddle_button')) || /buy\.stripe\.com|checkout|upgrade|buy now|purchase|subscribe|pro annual|business/i.test((href || '') + ' ' + (text || '')) || !!(el && el.getAttribute('data-product'));
  }

  function bindClicks() {
    try {
      document.querySelectorAll('a, button').forEach(function (el) {
        if (el.getAttribute(CLICK_BOUND_FLAG) === 'true') return;
        var text = (el.textContent || '').trim().replace(/\s+/g, ' ');
        var href = el.getAttribute('href') || '';
        var install = isInstallLink(el, href, text);
        var checkout = isCheckoutLink(el, href, text);
        var cfg = getConfig();
        var internalProductClick = cfg.surface === 'home' && href && href.charAt(0) !== '#' && href.indexOf('mailto:') !== 0;
        var ctaIntent = install || checkout || /pricing|get started|try free|start free|learn more/i.test(text + ' ' + href) || internalProductClick;
        if (!ctaIntent) return;
        el.setAttribute(CLICK_BOUND_FLAG, 'true');
        el.addEventListener('click', function () {
          var props = getPlanProps(el);
          captureRevenueAndPricing('revenue_cta_click', 'pricing_cta_click', props);
          if (isLandingSurface(cfg)) capture('landing_cta_click', props);
          if (isPricingSurface(cfg)) capture('pricing_surface_cta_click', props);
          if (install) capture('install_click', props);
          if (checkout) captureRevenueAndPricing('revenue_plan_click', 'pricing_plan_click', props);
          if (internalProductClick) capture('home_product_click', Object.assign({}, props, { target_path: props.href_path, target_product: productForPath(props.href_path) }));
          if (/buy\.stripe\.com/i.test(href)) {
            capture('checkout_loaded', Object.assign({}, props, { provider: 'stripe', checkout_open_method: 'stripe_link_click' }));
          }
        });
      });
    } catch (error) {}
  }

  function computeMaxScrollPct() {
    try {
      var doc = document.documentElement;
      var body = document.body;
      var scrollTop = window.pageYOffset || doc.scrollTop || body.scrollTop || 0;
      var height = Math.max(body.scrollHeight, doc.scrollHeight, body.offsetHeight, doc.offsetHeight, body.clientHeight, doc.clientHeight);
      var viewport = window.innerHeight || doc.clientHeight || 1;
      if (height <= viewport) return 100;
      return Math.max(0, Math.min(100, Math.round(((scrollTop + viewport) / height) * 100)));
    } catch (error) {
      return 0;
    }
  }

  function bindScrollDepth() {
    function checkScroll() {
      var pct = computeMaxScrollPct();
      SCROLL_BUCKETS.forEach(function (bucket) {
        if (pct >= bucket && !firedScrollBuckets[bucket]) {
          firedScrollBuckets[bucket] = true;
          capture('pricing_scroll_depth', { max_scroll_bucket: bucket, max_scroll_pct: pct });
        }
      });
    }
    window.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('load', checkScroll);
    setTimeout(checkScroll, 1000);
  }

  function paddlePropsFromEvent(data) {
    var checkout = data && data.eventData && data.eventData.checkout ? data.eventData.checkout : {};
    var customer = checkout.customer || {};
    var prices = checkout.prices && checkout.prices.customer ? checkout.prices.customer : {};
    var product = checkout.product || {};
    var coupon = checkout.coupon || {};
    return compact({
      checkout_id: checkout.id,
      product_id: product.id,
      plan_id: product.id,
      plan: product.name || product.id,
      billing_period: product.billing_type || product.subscription_interval || null,
      price: prices.total,
      currency: prices.currency,
      coupon: coupon.coupon_code,
      has_email: !!(customer.email || getParam('email')),
      provider: 'paddle'
    });
  }

  function trackPaddleEvent(data) {
    try {
      if (!data || !data.event) return;
      var props = paddlePropsFromEvent(data);
      props.checkout_event_name = data.event;
      if (data.event === 'Checkout.Loaded') capture('checkout_loaded', props);
      if (data.event === 'Checkout.Customer.Created') capture('checkout_customer_created', props);
      if (data.event === 'Checkout.Complete') capture('checkout_complete_frontend', props);
    } catch (error) {}
  }

  function wrapPaddle(Paddle) {
    try {
      if (!Paddle) return Paddle;
      if (Paddle.Setup && !Paddle.Setup[PADDLE_WRAPPED_FLAG]) {
        var originalSetup = Paddle.Setup;
        Paddle.Setup = function (options) {
          try {
            if (options && typeof options === 'object') {
              var originalCallback = options.eventCallback;
              if (!originalCallback || !originalCallback[PADDLE_WRAPPED_FLAG]) {
                options.eventCallback = function (data) {
                  trackPaddleEvent(data);
                  if (typeof originalCallback === 'function') return originalCallback.apply(this, arguments);
                };
                options.eventCallback[PADDLE_WRAPPED_FLAG] = true;
              }
            }
          } catch (error) {}
          return originalSetup.apply(this, arguments);
        };
        Paddle.Setup[PADDLE_WRAPPED_FLAG] = true;
      }
    } catch (error) {}
    return Paddle;
  }

  function installPaddleSetupWrapper() {
    try {
      if (window.Paddle) wrapPaddle(window.Paddle);
      var currentPaddle = window.Paddle;
      var descriptor = Object.getOwnPropertyDescriptor(window, 'Paddle');
      if (!descriptor || descriptor.configurable) {
        Object.defineProperty(window, 'Paddle', {
          configurable: true,
          get: function () { return currentPaddle; },
          set: function (value) { currentPaddle = wrapPaddle(value); }
        });
        if (currentPaddle) window.Paddle = currentPaddle;
      }
      var attempts = 0;
      var interval = window.setInterval(function () {
        attempts += 1;
        if (window.Paddle) wrapPaddle(window.Paddle);
        if (attempts > 200 || (window.Paddle && window.Paddle.Setup && window.Paddle.Setup[PADDLE_WRAPPED_FLAG])) window.clearInterval(interval);
      }, 50);
    } catch (error) {}
  }

  function bindStripeLinks() {
    try {
      document.querySelectorAll('a[href*="buy.stripe.com"]').forEach(function (link) {
        if (link.getAttribute(STRIPE_BOUND_FLAG) === 'true') return;
        link.setAttribute(STRIPE_BOUND_FLAG, 'true');
        link.addEventListener('click', function () {
          capture('checkout_loaded', Object.assign({}, getPlanProps(link), { provider: 'stripe', checkout_open_method: 'stripe_link_click' }));
        });
      });
    } catch (error) {}
  }

  function init() {
    var cfg = getConfig();
    var pageViewProps = {
      page_title: document.title,
      initial_scroll_pct: computeMaxScrollPct()
    };
    captureRevenueAndPricing('revenue_page_view', 'pricing_page_view', pageViewProps);
    if (isLandingSurface(cfg)) capture('landing_page_view', pageViewProps);
    if (isPricingSurface(cfg)) capture('pricing_surface_view', pageViewProps);
    bindClicks();
    bindScrollDepth();
  }

  installPaddleSetupWrapper();

  window.DocGPTRevenue = {
    capture: capture,
    baseProps: baseProps,
    trafficType: inferTrafficType,
    pageVariant: inferPageVariant,
    trackPaddleEvent: trackPaddleEvent,
    bindClicks: bindClicks,
    bindStripeLinks: bindStripeLinks,
    config: getConfig,
    flushQueue: flushQueue,
    queue: captureQueue
  };

  // Backward compatibility for existing inline GPT for Sheets callbacks.
  window.DocGPTPostHog = window.DocGPTPostHog || window.DocGPTRevenue;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  window.addEventListener('load', flushQueue);
})();

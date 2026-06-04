// Named PostHog events for GPT for Sheets pricing/upgrade funnels.
// Fail-open: if PostHog is blocked or not initialized, checkout and page behavior continue unchanged.
(function () {
  'use strict';

  var SCROLL_BUCKETS = [25, 50, 75, 100];
  var firedScrollBuckets = {};

  function getParam(name) {
    try {
      return new URLSearchParams(window.location.search).get(name) || null;
    } catch (error) {
      return null;
    }
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

  function inferTrafficType() {
    var source = safeLower(getParam('utm_source'));
    var medium = safeLower(getParam('utm_medium'));
    var campaign = safeLower(getParam('utm_campaign'));
    var content = safeLower(getParam('utm_content'));
    var reason = safeLower(getParam('reason'));
    var referrer = safeLower(document.referrer);

    if (
      source === 'sheets_addon' ||
      source === 'addon' ||
      source.indexOf('addon') !== -1 ||
      medium.indexOf('addon') !== -1 ||
      campaign.indexOf('sheets_addon') !== -1 ||
      content.indexOf('sheets_addon') !== -1 ||
      reason.indexOf('addon') !== -1 ||
      referrer.indexOf('script.google.com') !== -1 ||
      referrer.indexOf('script.googleusercontent.com') !== -1
    ) {
      return 'addon';
    }

    if (source === 'email' || source === 'ses' || medium === 'email' || campaign.indexOf('hello_sheets') !== -1) {
      return 'email';
    }

    if (source === 'google' || referrer.indexOf('google.') !== -1 || referrer.indexOf('bing.com') !== -1) {
      return 'seo';
    }

    return 'other';
  }

  function inferPageVariant() {
    return (window.location.pathname || '').indexOf('gpt-for-sheets-upgrade') !== -1 ? 'upgrade' : 'main';
  }

  function baseProps(extra) {
    return compact(Object.assign({
      product: 'gpt_for_sheets',
      traffic_type: inferTrafficType(),
      page_variant: inferPageVariant(),
      source_page: window.location.pathname,
      landing_page: window.location.href,
      referrer: document.referrer || null,
      utm_source: getParam('utm_source'),
      utm_medium: getParam('utm_medium'),
      utm_campaign: getParam('utm_campaign'),
      utm_content: getParam('utm_content'),
      utm_term: getParam('utm_term'),
      has_email: !!getParam('email'),
      reason: getParam('reason') || getParam('utm_medium') || getParam('utm_campaign')
    }, extra || {}));
  }

  function capture(eventName, props) {
    try {
      if (window.posthog && typeof window.posthog.capture === 'function') {
        window.posthog.capture(eventName, baseProps(props));
      }
    } catch (error) {
      if (window.console && console.warn) console.warn('PostHog capture failed: ' + eventName, error);
    }
  }

  function parseMoney(text) {
    var match = String(text || '').replace(',', '.').match(/([0-9]+(?:\.[0-9]+)?)/);
    return match ? Number(match[1]) : null;
  }

  function inferBillingPeriod(button, planCard) {
    var value = button && button.getAttribute('data-billing-period');
    if (value) return value;
    var text = ((planCard && planCard.textContent) || '').toLowerCase();
    if (text.indexOf('month') !== -1) return 'monthly';
    if (text.indexOf('year') !== -1 || text.indexOf('annual') !== -1) return 'annual';
    if (text.indexOf('lifetime') !== -1) return 'lifetime';
    return null;
  }

  function getPlanProps(button) {
    var planCard = button && button.closest ? button.closest('.upgrade-plan-card, .pricing-card, .card, .price-card, .pricing-box, .box') : null;
    var plan = button ? (button.getAttribute('data-plan') || button.getAttribute('data-plan-name')) : null;
    if (!plan && planCard) {
      var heading = planCard.querySelector('h2, h3, h4, .h5, .h6, .plan-name, .title');
      plan = heading ? heading.textContent.trim() : null;
    }
    var priceText = button ? (button.getAttribute('data-price') || '') : '';
    if (!priceText && planCard) {
      var priceNode = planCard.querySelector('.price, .plan-price, [class*="price"]');
      priceText = priceNode ? priceNode.textContent.trim() : '';
    }
    return compact({
      plan: plan,
      product_id: button ? button.getAttribute('data-product') : null,
      billing_period: inferBillingPeriod(button, planCard),
      price: parseMoney(priceText),
      coupon: getParam('coupon') || (button ? button.getAttribute('data-coupon') : null),
      cta_text: button ? button.textContent.trim().replace(/\s+/g, ' ') : null,
      cta_location: planCard ? 'plan_card' : 'page',
      is_recommended: !!(planCard && planCard.classList && planCard.classList.contains('is-recommended'))
    });
  }

  function bindClicks() {
    try {
      document.querySelectorAll('a, button').forEach(function (el) {
        if (el.getAttribute('data-pricing-posthog-bound') === 'true') return;
        var text = (el.textContent || '').trim().replace(/\s+/g, ' ');
        var href = el.getAttribute('href') || '';
        var isPaddle = el.classList && el.classList.contains('paddle_button');
        var isPricingIntent = isPaddle || /pricing|upgrade|started|try free|install free|checkout|business|pro annual|lead enrichment/i.test(text + ' ' + href);
        if (!isPricingIntent) return;
        el.setAttribute('data-pricing-posthog-bound', 'true');
        el.addEventListener('click', function () {
          var props = Object.assign({ href: href || null }, getPlanProps(el));
          capture('pricing_cta_click', props);
          if (isPaddle || props.product_id || props.plan) capture('pricing_plan_click', props);
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

  function trackPaddleEvent(data) {
    try {
      if (!data || !data.event) return;
      var checkout = data.eventData && data.eventData.checkout ? data.eventData.checkout : {};
      var customer = checkout.customer || {};
      var prices = checkout.prices && checkout.prices.customer ? checkout.prices.customer : {};
      var product = checkout.product || {};
      var coupon = checkout.coupon || {};
      var props = compact({
        checkout_id: checkout.id,
        product_id: product.id,
        plan: product.name || product.id,
        billing_period: product.billing_type || null,
        price: prices.total,
        currency: prices.currency,
        coupon: coupon.coupon_code,
        has_email: !!(customer.email || getParam('email')),
        provider: 'paddle'
      });
      if (data.event === 'Checkout.Loaded') capture('checkout_loaded', props);
      if (data.event === 'Checkout.Customer.Created') capture('checkout_customer_created', props);
      if (data.event === 'Checkout.Complete') capture('checkout_complete_frontend', props);
    } catch (error) {}
  }

  function init() {
    capture('pricing_page_view', {
      page_title: document.title,
      initial_scroll_pct: computeMaxScrollPct()
    });
    bindClicks();
    bindScrollDepth();
  }

  window.DocGPTPostHog = {
    capture: capture,
    baseProps: baseProps,
    trafficType: inferTrafficType,
    pageVariant: inferPageVariant,
    trackPaddleEvent: trackPaddleEvent,
    bindClicks: bindClicks
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

#!/usr/bin/env node
/* Regression checks for persisted email attribution in checkout payloads. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

const ROOT = path.resolve(__dirname, '..');
const SCRIPT_PATH = path.join(ROOT, 'assets/js/checkout-attribution.js');
const SOURCE = fs.readFileSync(SCRIPT_PATH, 'utf8');

function createStorage(initial) {
  const store = Object.assign({}, initial || {});
  return {
    getItem(key) { return Object.prototype.hasOwnProperty.call(store, key) ? store[key] : null; },
    setItem(key, value) { store[key] = String(value); },
    removeItem(key) { delete store[key]; },
    dump() { return Object.assign({}, store); }
  };
}

function runCheckoutScript({ href, referrer = 'https://google.com/', storage }) {
  const url = new URL(href);
  const localStorage = storage || createStorage();
  const window = {
    GA4_MEASUREMENT_ID: 'G-DV5BH9XVVS',
    location: {
      href,
      search: url.search,
      pathname: url.pathname
    },
    localStorage,
    setInterval() { return 1; },
    clearInterval() {},
    open(urlToOpen) { window.lastOpenedUrl = urlToOpen; },
    dataLayer: [],
    console: { warn() {} }
  };
  const document = {
    cookie: '_ga=GA1.1.123.456; _ga_DV5BH9XVVS=GS2.1.s987654321$o1',
    referrer,
    readyState: 'complete',
    addEventListener() {},
    querySelectorAll() { return []; }
  };
  const context = vm.createContext({
    window,
    document,
    URL,
    URLSearchParams,
    RegExp,
    JSON,
    Object,
    String,
    Date,
    console: window.console,
    setInterval: window.setInterval,
    clearInterval: window.clearInterval
  });
  vm.runInContext(SOURCE, context, { filename: SCRIPT_PATH });
  return { window, document, storage: localStorage };
}

function readStored(storage) {
  const raw = storage.getItem('docgpt_email_attribution_v1');
  assert(raw, 'email attribution should be persisted to localStorage');
  return JSON.parse(raw);
}

function testPersistsEmailAttributionOnSesLanding() {
  const storage = createStorage();
  runCheckoutScript({
    href: 'https://docgpt.ai/gpt-for-gmail/?utm_source=ses&utm_medium=email&utm_campaign=gpt_gmail_onboarding_v1&utm_content=gmail_step2_followup',
    storage
  });
  const stored = readStored(storage);
  assert.strictEqual(stored.email_source, 'ses');
  assert.strictEqual(stored.email_medium, 'email');
  assert.strictEqual(stored.email_campaign, 'gpt_gmail_onboarding_v1');
  assert.strictEqual(stored.email_content, 'gmail_step2_followup');
  assert.strictEqual(stored.email_product, 'gmail');
  assert.strictEqual(stored.email_step, 'step2');
  assert.ok(stored.email_landing_page.includes('/gpt-for-gmail/'));
  assert.ok(stored.email_attributed_at, 'email_attributed_at should be set');
}

function testStoredEmailAttributionFlowsIntoCheckoutAfterNavigation() {
  const storage = createStorage();
  runCheckoutScript({
    href: 'https://docgpt.ai/gpt-for-slides/?utm_source=ses&utm_medium=email&utm_campaign=ai_slides_onboarding_v1&utm_content=slides_step3_upgrade',
    storage
  });

  const secondPage = runCheckoutScript({
    href: 'https://docgpt.ai/pricing/',
    referrer: 'https://docgpt.ai/gpt-for-slides/',
    storage
  });
  const attribution = secondPage.window.CheckoutAttribution.build({ product: 'slides', plan: 'yearly' });
  assert.strictEqual(attribution.utm_source, 'ses');
  assert.strictEqual(attribution.utm_medium, 'email');
  assert.strictEqual(attribution.utm_campaign, 'ai_slides_onboarding_v1');
  assert.strictEqual(attribution.utm_content, 'slides_step3_upgrade');
  assert.strictEqual(attribution.email_product, 'slides');
  assert.strictEqual(attribution.email_step, 'step3');
  assert.strictEqual(attribution.product, 'slides');
  assert.strictEqual(attribution.plan, 'yearly');
}

function testStripeCheckoutUrlReceivesStoredEmailAttribution() {
  const storage = createStorage({
    docgpt_email_attribution_v1: JSON.stringify({
      email_source: 'ses',
      email_medium: 'email',
      email_campaign: 'docgpt_onboarding_v1',
      email_content: 'docs_step3_upgrade',
      email_product: 'docs',
      email_step: 'step3',
      email_landing_page: 'https://docgpt.ai/?utm_source=ses',
      email_attributed_at: '2026-06-02T00:00:00.000Z'
    })
  });
  const { window } = runCheckoutScript({ href: 'https://docgpt.ai/pricing/', storage });
  const link = {
    href: 'https://buy.stripe.com/test_checkout',
    target: '_self',
    textContent: 'Yearly',
    getAttribute(name) { return name === 'data-plan' ? 'yearly' : null; }
  };
  let prevented = false;
  window.CheckoutAttribution.enhanceStripeLink({ preventDefault() { prevented = true; } }, link);
  assert.strictEqual(prevented, true);
  const opened = new URL(window.lastOpenedUrl);
  assert.strictEqual(opened.searchParams.get('email_source'), 'ses');
  assert.strictEqual(opened.searchParams.get('email_campaign'), 'docgpt_onboarding_v1');
  assert.strictEqual(opened.searchParams.get('email_content'), 'docs_step3_upgrade');
  assert.strictEqual(opened.searchParams.get('email_product'), 'docs');
  assert.strictEqual(opened.searchParams.get('email_step'), 'step3');
}

const tests = [
  testPersistsEmailAttributionOnSesLanding,
  testStoredEmailAttributionFlowsIntoCheckoutAfterNavigation,
  testStripeCheckoutUrlReceivesStoredEmailAttribution
];

for (const test of tests) {
  test();
  console.log(`PASS ${test.name}`);
}

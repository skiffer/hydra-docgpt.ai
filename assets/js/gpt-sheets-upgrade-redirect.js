// Redirect installed add-on and welcome-email upgrade traffic from the generic GPT for Sheets page
// to the installed-user upgrade page. SEO/direct visitors stay on the main page.
(function () {
  'use strict';

  function getParam(params, name) {
    return String(params.get(name) || '').toLowerCase();
  }

  function shouldRedirectToUpgrade() {
    try {
      var path = window.location.pathname || '';
      if (path.indexOf('/gpt-for-sheets-upgrade') !== -1) return false;
      if (path.indexOf('/gpt-for-sheets') === -1) return false;

      var params = new URLSearchParams(window.location.search || '');
      var source = getParam(params, 'utm_source');
      var legacySourceTypo = getParam(params, 'utm_souce');
      var medium = getParam(params, 'utm_medium');
      var campaign = getParam(params, 'utm_campaign');
      var content = getParam(params, 'utm_content');
      var reason = getParam(params, 'reason');
      var referrer = String(document.referrer || '').toLowerCase();
      var hasEmail = !!params.get('email');

      var addonUpgradeMediums = [
        'upgrade_plan',
        'add_credits',
        'upgrade_premium',
        'go_premium',
        'chat_basic_premium_notice',
        'chat_upgrade'
      ];

      var isAddon =
        source === 'sheets_addon' ||
        (source === 'sheets' && medium === 'addon') ||
        source === 'addon' ||
        legacySourceTypo === 'promo' ||
        source.indexOf('addon') !== -1 ||
        medium.indexOf('addon') !== -1 ||
        addonUpgradeMediums.indexOf(medium) !== -1 ||
        campaign.indexOf('sheets_addon') !== -1 ||
        content.indexOf('sheets_addon') !== -1 ||
        reason.indexOf('addon') !== -1 ||
        referrer.indexOf('script.google.com') !== -1 ||
        referrer.indexOf('script.googleusercontent.com') !== -1;

      var isWelcomeEmailUpgrade =
        source === 'email' ||
        source === 'ses' ||
        medium === 'email' ||
        campaign.indexOf('hello_sheets') !== -1 ||
        content.indexOf('welcome') !== -1;

      return isAddon || hasEmail || (isWelcomeEmailUpgrade && campaign.indexOf('sheets') !== -1);
    } catch (error) {
      return false;
    }
  }

  if (shouldRedirectToUpgrade()) {
    var target = new URL('/gpt-for-sheets-upgrade/', window.location.origin);
    target.search = window.location.search;
    if (!target.searchParams.get('utm_source') && target.searchParams.get('utm_souce')) {
      target.searchParams.set('utm_source', target.searchParams.get('utm_souce'));
    }
    target.searchParams.set('page_variant', 'upgrade');
    target.searchParams.set('redirected_from', window.location.pathname || '/gpt-for-sheets/');
    if (!target.searchParams.get('reason')) target.searchParams.set('reason', 'addon_upgrade');
    target.hash = window.location.hash || '';
    window.location.replace(target.toString());
  }
})();

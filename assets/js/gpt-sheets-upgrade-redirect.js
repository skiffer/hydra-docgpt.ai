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
      var medium = getParam(params, 'utm_medium');
      var campaign = getParam(params, 'utm_campaign');
      var content = getParam(params, 'utm_content');
      var reason = getParam(params, 'reason');
      var referrer = String(document.referrer || '').toLowerCase();
      var hasEmail = !!params.get('email');

      var isAddon =
        source === 'sheets_addon' ||
        source === 'addon' ||
        source.indexOf('addon') !== -1 ||
        medium.indexOf('addon') !== -1 ||
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

      return isAddon || (hasEmail && isWelcomeEmailUpgrade) || (isWelcomeEmailUpgrade && campaign.indexOf('sheets') !== -1);
    } catch (error) {
      return false;
    }
  }

  if (shouldRedirectToUpgrade()) {
    var target = new URL('/gpt-for-sheets-upgrade/', window.location.origin);
    target.search = window.location.search;
    target.searchParams.set('page_variant', 'upgrade');
    if (!target.searchParams.get('reason')) target.searchParams.set('reason', 'addon_upgrade');
    window.location.replace(target.toString());
  }
})();

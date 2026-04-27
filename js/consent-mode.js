(function () {
  var STORAGE_KEY = 'newsPulseConsentMode';
  var VERSION = 1;

  function getStoredConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      return parsed && parsed.version === VERSION ? parsed : null;
    } catch (error) {
      return null;
    }
  }

  function saveConsent(settings) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        version: VERSION,
        updatedAt: new Date().toISOString(),
        analytics: !!settings.analytics,
        ads: !!settings.ads
      }));
    } catch (error) {
      return;
    }
  }

  function applyConsent(settings) {
    if (typeof window.gtag !== 'function') return;

    window.gtag('consent', 'update', {
      analytics_storage: settings.analytics ? 'granted' : 'denied',
      ad_storage: settings.ads ? 'granted' : 'denied',
      ad_user_data: settings.ads ? 'granted' : 'denied',
      ad_personalization: settings.ads ? 'granted' : 'denied'
    });
  }

  function injectStyles() {
    if (document.getElementById('news-pulse-consent-style')) return;

    var style = document.createElement('style');
    style.id = 'news-pulse-consent-style';
    style.textContent = [
      '.np-consent{position:fixed;left:18px;right:18px;bottom:18px;z-index:99999;display:none;}',
      '.np-consent.is-visible{display:block;}',
      '.np-consent__panel{max-width:980px;margin:0 auto;padding:18px;border:1px solid rgba(255,255,255,.16);border-radius:18px;background:#07111f;color:#f5f8fc;box-shadow:0 18px 60px rgba(0,0,0,.38);font-family:Inter,Arial,sans-serif;}',
      '.np-consent__top{display:flex;gap:18px;align-items:flex-start;justify-content:space-between;}',
      '.np-consent h2{margin:0 0 8px;font-size:1.02rem;line-height:1.25;}',
      '.np-consent p{margin:0;color:#b6c5d8;line-height:1.55;font-size:.92rem;}',
      '.np-consent a{color:#9be8ff;text-decoration:none;font-weight:700;}',
      '.np-consent__actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px;}',
      '.np-consent button{min-height:42px;border:1px solid rgba(255,255,255,.16);border-radius:999px;padding:0 16px;background:rgba(255,255,255,.07);color:#fff;font:700 .9rem Inter,Arial,sans-serif;cursor:pointer;}',
      '.np-consent button:hover{background:rgba(255,255,255,.12);}',
      '.np-consent .np-consent__primary{border-color:#7bd1ff;background:#7bd1ff;color:#03111f;}',
      '.np-consent__settings{display:none;margin-top:16px;padding-top:14px;border-top:1px solid rgba(255,255,255,.12);}',
      '.np-consent.is-managing .np-consent__settings{display:grid;gap:12px;}',
      '.np-consent__option{display:flex;align-items:flex-start;justify-content:space-between;gap:18px;padding:12px;border:1px solid rgba(255,255,255,.12);border-radius:14px;background:rgba(255,255,255,.035);}',
      '.np-consent__option strong{display:block;margin-bottom:4px;}',
      '.np-consent__option input{width:22px;height:22px;accent-color:#7bd1ff;flex-shrink:0;}',
      '@media (max-width:640px){.np-consent{left:10px;right:10px;bottom:10px}.np-consent__top{display:block}.np-consent__actions{display:grid}.np-consent button{width:100%}.np-consent__panel{padding:16px;border-radius:16px}}'
    ].join('');
    document.head.appendChild(style);
  }

  function buildBanner() {
    if (document.getElementById('news-pulse-consent')) return document.getElementById('news-pulse-consent');

    var banner = document.createElement('section');
    banner.id = 'news-pulse-consent';
    banner.className = 'np-consent';
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.innerHTML = [
      '<div class="np-consent__panel">',
      '  <div class="np-consent__top">',
      '    <div>',
      '      <h2>Cookies and privacy choices</h2>',
      '      <p>NewsPulse+ uses essential cookies for site features. With your permission, we also use analytics and advertising cookies, including Google AdSense and Google Analytics, to understand readership and support the site. Read our <a href="cookie-policy.html">Cookie Policy</a>.</p>',
      '    </div>',
      '  </div>',
      '  <div class="np-consent__settings" aria-label="Cookie settings">',
      '    <label class="np-consent__option">',
      '      <span><strong>Analytics cookies</strong><span>Help measure page visits and improve content performance.</span></span>',
      '      <input type="checkbox" data-consent-analytics>',
      '    </label>',
      '    <label class="np-consent__option">',
      '      <span><strong>Advertising cookies</strong><span>Allow Google AdSense and partners to measure and personalise ads.</span></span>',
      '      <input type="checkbox" data-consent-ads>',
      '    </label>',
      '  </div>',
      '  <div class="np-consent__actions">',
      '    <button type="button" class="np-consent__primary" data-consent-accept>Accept all</button>',
      '    <button type="button" data-consent-reject>Reject non-essential</button>',
      '    <button type="button" data-consent-manage>Manage choices</button>',
      '    <button type="button" data-consent-save style="display:none">Save choices</button>',
      '  </div>',
      '</div>'
    ].join('');

    document.body.appendChild(banner);
    return banner;
  }

  function showBanner() {
    injectStyles();

    var banner = buildBanner();
    var analyticsInput = banner.querySelector('[data-consent-analytics]');
    var adsInput = banner.querySelector('[data-consent-ads]');
    var manageButton = banner.querySelector('[data-consent-manage]');
    var saveButton = banner.querySelector('[data-consent-save]');

    function closeWith(settings) {
      saveConsent(settings);
      applyConsent(settings);
      banner.classList.remove('is-visible');
    }

    banner.querySelector('[data-consent-accept]').addEventListener('click', function () {
      closeWith({ analytics: true, ads: true });
    });

    banner.querySelector('[data-consent-reject]').addEventListener('click', function () {
      closeWith({ analytics: false, ads: false });
    });

    manageButton.addEventListener('click', function () {
      banner.classList.add('is-managing');
      manageButton.style.display = 'none';
      saveButton.style.display = '';
    });

    saveButton.addEventListener('click', function () {
      closeWith({
        analytics: analyticsInput.checked,
        ads: adsInput.checked
      });
    });

    banner.classList.add('is-visible');
  }

  function init() {
    var stored = getStoredConsent();
    if (stored) {
      applyConsent(stored);
      return;
    }

    showBanner();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

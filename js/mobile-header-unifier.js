(function () {
  var styleId = 'news-pulse-mobile-header-unifier';
  var languages = {
    en: 'English',
    bg: '\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438',
    fr: 'Fran\u00e7ais',
    de: 'Deutsch',
    es: 'Espa\u00f1ol'
  };

  function installHeaderStyle() {
    if (document.getElementById(styleId)) return;

    var style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
@media (max-width: 760px) {
  html body header,
  html body header.topbar,
  html body header#siteHeader {
    background: #07111f !important;
    border-bottom: 1px solid rgba(255,255,255,.08) !important;
  }

  html body header > .container.navbar,
  html body header#siteHeader > .container.topbar-inner {
    width: min(var(--max-width, var(--max, 1240px)), calc(100% - 56px)) !important;
    min-height: 0 !important;
    display: grid !important;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important;
    gap: 12px 14px !important;
    align-items: start !important;
    padding: 18px 0 !important;
  }

  html body header > .container.navbar > .brand,
  html body header#siteHeader > .container.topbar-inner > .brand {
    grid-column: 1 / -1 !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    margin: 0 !important;
    display: flex !important;
    flex-direction: column !important;
    gap: 4px !important;
  }

  html body header > .container.navbar > .brand > .logo,
  html body header#siteHeader > .container.topbar-inner > .brand h1,
  html body header#siteHeader > .container.topbar-inner > .brand h1 > a {
    display: inline-block !important;
    max-width: 100% !important;
    margin: 0 !important;
    color: #f4f8fd !important;
    font-size: clamp(2.25rem, 9vw, 3.3rem) !important;
    font-weight: 900 !important;
    letter-spacing: -0.055em !important;
    line-height: .92 !important;
    white-space: normal !important;
    overflow-wrap: anywhere !important;
  }

  html body header > .container.navbar > .brand > .site-tagline,
  html body header#siteHeader > .container.topbar-inner > .brand > p {
    display: block !important;
    max-width: 100% !important;
    margin: 0 !important;
    color: #f4f8fd !important;
    font-size: clamp(.92rem, 3.5vw, 1.08rem) !important;
    font-weight: 800 !important;
    letter-spacing: 0 !important;
    line-height: 1.12 !important;
    white-space: normal !important;
  }

  html body header > .container.navbar > .header-language-switcher,
  html body header#siteHeader > .container.topbar-inner > .header-language-switcher {
    grid-column: 1 !important;
    grid-row: 2 !important;
    display: block !important;
    width: 100% !important;
    min-width: 0 !important;
    max-width: none !important;
    height: auto !important;
    margin: 0 !important;
  }

  html body header > .container.navbar > .nav-toggle,
  html body header > .container.navbar > .menu-toggle + .nav-toggle,
  html body header#siteHeader > .container.topbar-inner > .nav-toggle,
  html body header#siteHeader > .container.topbar-inner > .menu-toggle + .nav-toggle {
    grid-column: 2 !important;
    grid-row: 2 !important;
    width: 100% !important;
    min-width: 0 !important;
    max-width: none !important;
    height: 52px !important;
    min-height: 52px !important;
    max-height: 52px !important;
    margin: 0 !important;
    padding: 0 10px !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    border-radius: 999px !important;
    box-sizing: border-box !important;
    background: rgba(9,22,38,.92) !important;
    border: 1px solid rgba(155,232,255,.34) !important;
    color: #f7fbff !important;
    font-size: clamp(.88rem, 3.4vw, 1rem) !important;
    font-weight: 900 !important;
    letter-spacing: 0 !important;
    line-height: 1 !important;
    white-space: nowrap !important;
  }

  html body header > .container.navbar > .header-language-switcher > .language-current,
  html body header#siteHeader > .container.topbar-inner > .header-language-switcher > .language-current {
    width: 100% !important;
    height: 52px !important;
    min-height: 52px !important;
    max-height: 52px !important;
    padding: 0 10px !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    border-radius: 999px !important;
    box-sizing: border-box !important;
    background: rgba(9,22,38,.92) !important;
    border: 1px solid rgba(155,232,255,.34) !important;
    color: #f7fbff !important;
    font-size: clamp(.88rem, 3.4vw, 1rem) !important;
    font-weight: 900 !important;
    letter-spacing: 0 !important;
    line-height: 1 !important;
    text-align: center !important;
    white-space: nowrap !important;
  }

  html body header > .container.navbar > #site-nav.nav-links,
  html body header#siteHeader > .container.topbar-inner > #site-nav.nav-links {
    grid-column: 1 / -1 !important;
    width: 100% !important;
    margin: 0 !important;
  }

  html body header > .container.navbar > .header-language-switcher > .language-menu,
  html body header#siteHeader > .container.topbar-inner > .header-language-switcher > .language-menu {
    position: absolute !important;
    top: calc(100% + 10px) !important;
    left: 0 !important;
    right: auto !important;
    width: min(220px, calc(100vw - 32px)) !important;
    min-width: 0 !important;
    display: flex !important;
    flex-direction: column !important;
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
    transform: translateY(8px) !important;
  }

  html body header > .container.navbar > .header-language-switcher.language-open > .language-menu,
  html body header#siteHeader > .container.topbar-inner > .header-language-switcher.language-open > .language-menu {
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
    transform: translateY(0) !important;
  }
}

@media (max-width: 430px) {
  html body header > .container.navbar,
  html body header#siteHeader > .container.topbar-inner {
    width: min(var(--max-width, var(--max, 1240px)), calc(100% - 32px)) !important;
    gap: 10px !important;
    padding: 16px 0 !important;
  }

  html body header > .container.navbar > .brand > .logo,
  html body header#siteHeader > .container.topbar-inner > .brand h1,
  html body header#siteHeader > .container.topbar-inner > .brand h1 > a {
    font-size: clamp(2.1rem, 10.5vw, 2.75rem) !important;
  }

  html body header > .container.navbar > .brand > .site-tagline,
  html body header#siteHeader > .container.topbar-inner > .brand > p {
    font-size: clamp(.86rem, 3.7vw, .98rem) !important;
  }

  html body header > .container.navbar > .nav-toggle,
  html body header > .container.navbar > .menu-toggle + .nav-toggle,
  html body header#siteHeader > .container.topbar-inner > .nav-toggle,
  html body header#siteHeader > .container.topbar-inner > .menu-toggle + .nav-toggle,
  html body header > .container.navbar > .header-language-switcher > .language-current,
  html body header#siteHeader > .container.topbar-inner > .header-language-switcher > .language-current {
    height: 50px !important;
    min-height: 50px !important;
    max-height: 50px !important;
    padding: 0 9px !important;
    font-size: clamp(.82rem, 3.6vw, .94rem) !important;
  }
}`;

    document.head.appendChild(style);
  }

  function closeLanguageMenus(exceptSwitcher) {
    document.querySelectorAll('header .header-language-switcher.language-open').forEach(function (switcher) {
      if (switcher !== exceptSwitcher) {
        switcher.classList.remove('language-open');
        var button = switcher.querySelector('.language-current');
        if (button) button.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function wireLanguageMenus() {
    document.querySelectorAll('header .header-language-switcher').forEach(function (switcher) {
      var button = switcher.querySelector('.language-current');
      var menu = switcher.querySelector('.language-menu');
      if (!button || !menu || switcher.getAttribute('data-mobile-language-wired') === 'true') return;

      switcher.setAttribute('data-mobile-language-wired', 'true');
      button.setAttribute('aria-haspopup', 'true');
      button.setAttribute('aria-expanded', 'false');

      button.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        var shouldOpen = !switcher.classList.contains('language-open');
        closeLanguageMenus(switcher);
        switcher.classList.toggle('language-open', shouldOpen);
        button.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
      });

      menu.addEventListener('click', function () {
        switcher.classList.remove('language-open');
        button.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.addEventListener('click', function (event) {
    if (!event.target.closest('header .header-language-switcher')) {
      closeLanguageMenus();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeLanguageMenus();
  });

  function isWebPage() {
    return location.protocol === 'http:' || location.protocol === 'https:';
  }

  function savedLanguage() {
    try {
      return localStorage.getItem('preferredLang') || 'en';
    } catch (error) {
      return 'en';
    }
  }

  function setSavedLanguage(lang) {
    try {
      localStorage.setItem('preferredLang', lang);
    } catch (error) {}
  }

  function cookieDomains() {
    var domains = [''];
    var host = location.hostname;
    if (host && host.indexOf('.') !== -1 && !/^\d+\.\d+\.\d+\.\d+$/.test(host)) {
      domains.push(host);
      domains.push('.' + host.replace(/^www\./, ''));
    }
    return domains;
  }

  function writeCookie(name, value, expires) {
    cookieDomains().forEach(function (domain) {
      var cookie = name + '=' + value + '; expires=' + expires + '; path=/; SameSite=Lax';
      if (location.protocol === 'https:') cookie += '; Secure';
      if (domain) cookie += '; domain=' + domain;
      document.cookie = cookie;
    });
  }

  function setTranslateCookie(lang) {
    var expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
    writeCookie('googtrans', '/en/' + lang, expires);
  }

  function clearTranslateCookie() {
    writeCookie('googtrans', '', 'Thu, 01 Jan 1970 00:00:00 GMT');
  }

  function updateLanguageButtons(lang) {
    var label = languages[lang] || languages.en;
    document.querySelectorAll('.language-current').forEach(function (button) {
      button.innerHTML = '&#127760; ' + label;
    });
    document.documentElement.lang = lang === 'en' ? 'en' : lang;
  }

  function ensureTranslateContainer() {
    if (document.getElementById('google_translate_element')) return;
    var node = document.createElement('div');
    node.id = 'google_translate_element';
    node.style.display = 'none';
    document.body.appendChild(node);
  }

  function ensureTranslateScript() {
    if (!isWebPage()) return;
    ensureTranslateContainer();
    if (document.querySelector('script[data-news-pulse-translate]')) return;

    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = function () {
        if (window.google && google.translate && google.translate.TranslateElement) {
          new google.translate.TranslateElement(
            { pageLanguage: 'en', includedLanguages: 'en,bg,fr,de,es', autoDisplay: false },
            'google_translate_element'
          );
        }
      };
    }

    var script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    script.setAttribute('data-news-pulse-translate', 'true');
    document.head.appendChild(script);
  }

  function triggerGoogleDropdown(lang, attempt) {
    var select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event('change', { bubbles: true }));
      return true;
    }

    if ((attempt || 0) < 12) {
      setTimeout(function () {
        triggerGoogleDropdown(lang, (attempt || 0) + 1);
      }, 150);
    }
    return false;
  }

  function applyLanguage(lang) {
    lang = languages[lang] ? lang : 'en';
    setSavedLanguage(lang);
    updateLanguageButtons(lang);
    closeLanguageMenus();

    if (!isWebPage()) return;

    if (lang === 'en') {
      clearTranslateCookie();
    } else {
      setTranslateCookie(lang);
      ensureTranslateScript();
      triggerGoogleDropdown(lang, 0);
    }

    setTimeout(function () {
      window.location.reload();
    }, 180);
  }

  function wireSafariLanguageLinks() {
    if (document.documentElement.getAttribute('data-safari-language-wired') === 'true') return;
    document.documentElement.setAttribute('data-safari-language-wired', 'true');

    updateLanguageButtons(savedLanguage());
    if (isWebPage() && savedLanguage() !== 'en') {
      setTranslateCookie(savedLanguage());
      ensureTranslateScript();
    }

    window.newsPulseChooseLanguage = applyLanguage;

    document.addEventListener('click', function (event) {
      var link = event.target.closest('.language-menu a[data-lang]');
      if (!link) return;

      event.preventDefault();
      event.stopImmediatePropagation();
      applyLanguage(link.getAttribute('data-lang') || 'en');
    }, true);
  }

  installHeaderStyle();
  wireLanguageMenus();
  wireSafariLanguageLinks();
  document.addEventListener('DOMContentLoaded', function () {
    installHeaderStyle();
    wireLanguageMenus();
    wireSafariLanguageLinks();
  });
})();

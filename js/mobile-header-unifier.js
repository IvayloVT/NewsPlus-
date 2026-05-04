(function () {
  var styleId = 'news-pulse-mobile-header-unifier';
  var languages = {
    en: 'English',
    bg: '\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438',
    fr: 'Fran\u00e7ais',
    de: 'Deutsch',
    es: 'Espa\u00f1ol'
  };
  var languageFlags = {
    en: 'flag-uk',
    bg: 'flag-bg',
    fr: 'flag-fr',
    de: 'flag-de',
    es: 'flag-es'
  };

  function pageUsesStaticDesktopHeader() {
    var file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    return file === 'index.html' || file.indexOf('trending') === 0;
  }

  if (pageUsesStaticDesktopHeader()) {
    document.documentElement.classList.add('news-pulse-static-desktop-header');
  }

  if ((location.pathname.split('/').pop() || 'index.html').toLowerCase() === 'index.html') {
    document.documentElement.classList.add('news-pulse-home-page');
  }

  function installHeaderStyle() {
    if (document.getElementById(styleId)) return;

    var style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
@media (min-width: 761px) {
  html.news-pulse-static-desktop-header body > .topbar,
  html.news-pulse-static-desktop-header body > header,
  html.news-pulse-static-desktop-header body > header.topbar,
  html.news-pulse-static-desktop-header body > header#siteHeader {
    position: static !important;
    top: auto !important;
    bottom: auto !important;
    left: auto !important;
    right: auto !important;
    z-index: auto !important;
    transform: none !important;
    transition: none !important;
  }

  html body header,
  html body header.topbar,
  html body header#siteHeader {
    width: 100% !important;
    max-width: none !important;
    margin: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    overflow: visible !important;
  }

  html body header > .container.navbar,
  html body header#siteHeader > .container.topbar-inner,
  html body header .container.navbar,
  html body header .container.topbar-inner {
    display: flex !important;
    position: relative !important;
    align-items: center !important;
    justify-content: flex-start !important;
    gap: clamp(10px, 1.1vw, 18px) !important;
    width: 100% !important;
    max-width: var(--max-width, var(--max, 1240px)) !important;
    margin-left: auto !important;
    margin-right: auto !important;
    padding-left: 20px !important;
    padding-right: 20px !important;
    box-sizing: border-box !important;
    min-height: 76px !important;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    overflow: visible !important;
  }

  html body header > .container.navbar > .brand,
  html body header#siteHeader > .container.topbar-inner > .brand,
  html body header .container.navbar > .brand,
  html body header .container.topbar-inner > .brand {
    order: 1 !important;
    flex: 0 0 280px !important;
    min-width: 0 !important;
    width: 280px !important;
    max-width: 280px !important;
    overflow: visible !important;
  }

  html body header > .container.navbar > .brand > .logo,
  html body header#siteHeader > .container.topbar-inner > .brand h1,
  html body header#siteHeader > .container.topbar-inner > .brand h1 > a,
  html body header .container.navbar > .brand > .logo,
  html body header .container.topbar-inner > .brand h1,
  html body header .container.topbar-inner > .brand h1 > a {
    max-width: 100% !important;
    font-size: clamp(1.8rem, 2.25vw, 2.35rem) !important;
    line-height: .92 !important;
    white-space: nowrap !important;
  }

  html body header > .container.navbar > .brand > .site-tagline,
  html body header#siteHeader > .container.topbar-inner > .brand > p,
  html body header .container.navbar > .brand > .site-tagline,
  html body header .container.topbar-inner > .brand > p {
    max-width: 100% !important;
    color: #bfd3ee !important;
    font-size: clamp(.9rem, 1.08vw, 1.05rem) !important;
    line-height: 1.12 !important;
    white-space: nowrap !important;
  }

  html body header > .container.navbar > #site-nav.nav-links,
  html body header#siteHeader > .container.topbar-inner > #site-nav.nav-links,
  html body header .container.navbar > #site-nav.nav-links,
  html body header .container.topbar-inner > #site-nav.nav-links {
    order: 2 !important;
    flex: 0 1 auto !important;
    position: static !important;
    right: auto !important;
    top: auto !important;
    transform: none !important;
    min-width: 0 !important;
    width: auto !important;
    margin: 0 0 0 auto !important;
    display: flex !important;
    flex-wrap: nowrap !important;
    align-items: center !important;
    justify-content: flex-end !important;
    gap: clamp(4px, .45vw, 8px) !important;
  }

  html body header > .container.navbar > #site-nav.nav-links > a,
  html body header#siteHeader > .container.topbar-inner > #site-nav.nav-links > a,
  html body header .container.navbar > #site-nav.nav-links > a,
  html body header .container.topbar-inner > #site-nav.nav-links > a {
    flex: 0 0 auto !important;
    min-width: max-content !important;
    padding: 9px clamp(6px, .58vw, 10px) !important;
    font-size: clamp(.86rem, .9vw, .98rem) !important;
    line-height: 1 !important;
    white-space: nowrap !important;
  }

  html body header > .container.navbar > .header-language-switcher,
  html body header#siteHeader > .container.topbar-inner > .header-language-switcher,
  html body header .container.navbar > .header-language-switcher,
  html body header .container.topbar-inner > .header-language-switcher {
    order: 3 !important;
    display: block !important;
    flex: 0 0 50px !important;
    position: relative !important;
    right: auto !important;
    top: auto !important;
    transform: none !important;
    width: auto !important;
    min-width: 50px !important;
    max-width: 50px !important;
    margin: 0 !important;
    align-self: center !important;
    z-index: 50 !important;
  }

  html body header #site-nav.nav-links > .language-switcher {
    display: none !important;
  }

  html body header .language-switcher > .language-menu {
    display: flex !important;
    position: absolute !important;
    top: calc(100% + 10px) !important;
    right: 0 !important;
    left: auto !important;
    min-width: 220px !important;
    flex-direction: column !important;
    gap: 8px !important;
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
    transform: translateY(8px) !important;
    z-index: 99999 !important;
  }

  html body header .language-switcher.language-open > .language-menu,
  html body header .language-switcher:hover > .language-menu,
  html body header .language-switcher:focus-within > .language-menu {
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
    transform: translateY(0) !important;
  }

  html body header > .container.navbar > .header-language-switcher > .language-current,
  html body header#siteHeader > .container.topbar-inner > .header-language-switcher > .language-current,
  html body header .container.navbar > .header-language-switcher > .language-current,
  html body header .container.topbar-inner > .header-language-switcher > .language-current {
    width: 100% !important;
    height: 34px !important;
    min-height: 34px !important;
    max-height: 34px !important;
    padding: 0 10px !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    vertical-align: middle !important;
    margin: 0 !important;
    position: relative !important;
    top: 0 !important;
    transform: none !important;
    box-sizing: border-box !important;
    font-size: clamp(.84rem, .95vw, .96rem) !important;
    line-height: 1 !important;
    white-space: nowrap !important;
  }

  html body header .language-switcher > .language-current .flag-icon {
    display: inline-block !important;
    width: 20px !important;
    height: 13px !important;
    flex: 0 0 20px !important;
    margin: 0 !important;
    vertical-align: middle !important;
    position: static !important;
    transform: none !important;
    border-radius: 2px !important;
    box-shadow: 0 0 0 1px rgba(255,255,255,.18), 0 2px 6px rgba(0,0,0,.24) !important;
    overflow: hidden !important;
  }

  html body header .language-current .flag-uk {
    background:
      linear-gradient(33deg,transparent 42%,#fff 42%,#fff 48%,#c8102e 48%,#c8102e 54%,#fff 54%,#fff 60%,transparent 60%),
      linear-gradient(147deg,transparent 42%,#fff 42%,#fff 48%,#c8102e 48%,#c8102e 54%,#fff 54%,#fff 60%,transparent 60%),
      linear-gradient(90deg,transparent 38%,#fff 38%,#fff 45%,#c8102e 45%,#c8102e 55%,#fff 55%,#fff 62%,transparent 62%),
      linear-gradient(0deg,transparent 34%,#fff 34%,#fff 43%,#c8102e 43%,#c8102e 57%,#fff 57%,#fff 66%,transparent 66%),
      #012169 !important;
  }

  html body header .language-current .flag-bg {
    background: linear-gradient(to bottom,#fff 0 33.33%,#00966e 33.33% 66.66%,#d62612 66.66% 100%) !important;
  }

  html body header .language-current .flag-fr {
    background: linear-gradient(to right,#0055a4 0 33.33%,#fff 33.33% 66.66%,#ef4135 66.66% 100%) !important;
  }

  html body header .language-current .flag-de {
    background: linear-gradient(to bottom,#000 0 33.33%,#dd0000 33.33% 66.66%,#ffce00 66.66% 100%) !important;
  }

  html body header .language-current .flag-es {
    background: linear-gradient(to bottom,#aa151b 0 25%,#f1bf00 25% 75%,#aa151b 75% 100%) !important;
  }

  html body header .language-switcher > .language-current .language-current-label {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    overflow: hidden !important;
    clip: rect(0 0 0 0) !important;
    white-space: nowrap !important;
  }


  html body header > .container.navbar > .menu-toggle,
  html body header#siteHeader > .container.topbar-inner > .menu-toggle,
  html body header > .container.navbar > .nav-toggle,
  html body header#siteHeader > .container.topbar-inner > .nav-toggle {
    display: none !important;
  }
}

@media (min-width: 761px) and (max-width: 1180px) {
  html body header > .container.navbar,
  html body header#siteHeader > .container.topbar-inner,
  html body header .container.navbar,
  html body header .container.topbar-inner {
    gap: 8px !important;
  }

  html body header > .container.navbar > #site-nav.nav-links,
  html body header#siteHeader > .container.topbar-inner > #site-nav.nav-links,
  html body header .container.navbar > #site-nav.nav-links,
  html body header .container.topbar-inner > #site-nav.nav-links {
    right: auto !important;
  }

  html body header > .container.navbar > .brand,
  html body header#siteHeader > .container.topbar-inner > .brand,
  html body header .container.navbar > .brand,
  html body header .container.topbar-inner > .brand {
    flex-basis: 250px !important;
    width: 250px !important;
    max-width: 250px !important;
  }

  html body header > .container.navbar > .brand > .logo,
  html body header#siteHeader > .container.topbar-inner > .brand h1,
  html body header#siteHeader > .container.topbar-inner > .brand h1 > a,
  html body header .container.navbar > .brand > .logo,
  html body header .container.topbar-inner > .brand h1,
  html body header .container.topbar-inner > .brand h1 > a {
    font-size: clamp(1.75rem, 2.2vw, 2.2rem) !important;
  }

  html body header > .container.navbar > #site-nav.nav-links,
  html body header#siteHeader > .container.topbar-inner > #site-nav.nav-links,
  html body header .container.navbar > #site-nav.nav-links,
  html body header .container.topbar-inner > #site-nav.nav-links {
    gap: 4px !important;
  }

  html body header > .container.navbar > #site-nav.nav-links > a,
  html body header#siteHeader > .container.topbar-inner > #site-nav.nav-links > a,
  html body header .container.navbar > #site-nav.nav-links > a,
  html body header .container.topbar-inner > #site-nav.nav-links > a {
    padding-left: 4px !important;
    padding-right: 4px !important;
    font-size: .72rem !important;
  }
}

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
    color: #bfd3ee !important;
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
    document.querySelectorAll('header .language-switcher.language-open').forEach(function (switcher) {
      if (switcher !== exceptSwitcher) {
        setLanguageMenuOpen(switcher, false);
      }
    });
  }

  function setLanguageMenuOpen(switcher, isOpen) {
    if (!switcher) return;
    var button = switcher.querySelector('.language-current');
    var menu = switcher.querySelector('.language-menu');

    switcher.classList.toggle('language-open', isOpen);
    if (button) button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    setStyles(menu, {
      display: 'flex',
      opacity: isOpen ? '1' : '0',
      visibility: isOpen ? 'visible' : 'hidden',
      'pointer-events': isOpen ? 'auto' : 'none',
      transform: isOpen ? 'translateY(0)' : 'translateY(8px)'
    });
  }

  function wireLanguageMenus() {
    document.querySelectorAll('header .language-switcher').forEach(function (switcher) {
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
        setLanguageMenuOpen(switcher, shouldOpen);
      });

      menu.addEventListener('click', function () {
        setLanguageMenuOpen(switcher, false);
      });

      setStyles(menu, {
        display: 'flex',
        position: 'absolute',
        top: 'calc(100% + 10px)',
        right: '0',
        left: 'auto',
        'min-width': '220px',
        'flex-direction': 'column',
        gap: '8px',
        'z-index': '99999'
      });
    });
  }

  document.addEventListener('click', function (event) {
    var button = event.target.closest && event.target.closest('header .language-current');
    if (!button) return;
    var switcher = button.closest('.language-switcher');
    if (!switcher) return;

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    var shouldOpen = !switcher.classList.contains('language-open');
    closeLanguageMenus(switcher);
    setLanguageMenuOpen(switcher, shouldOpen);
  }, true);

  document.addEventListener('click', function (event) {
    if (!event.target.closest('header .language-switcher')) {
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
    var flagClass = languageFlags[lang] || languageFlags.en;
    var desktop = window.matchMedia && window.matchMedia('(min-width: 761px)').matches;
    document.querySelectorAll('.language-current').forEach(function (button) {
      if (desktop && button.closest('header .language-switcher')) {
        if (!button.querySelector('.flag-icon.' + flagClass) || !button.querySelector('.language-current-label')) {
          button.innerHTML = '<span class="flag-icon ' + flagClass + '" aria-hidden="true"></span><span class="language-current-label">' + label + '</span>';
        }
        button.setAttribute('aria-label', label);
        button.setAttribute('title', label);
      } else {
        if (button.textContent.replace(/\s+/g, ' ').trim() !== label && button.textContent.indexOf(label) === -1) {
          button.innerHTML = '&#127760; ' + label;
        }
        button.setAttribute('aria-label', label);
        button.setAttribute('title', label);
      }
    });
    document.documentElement.lang = lang === 'en' ? 'en' : lang;
  }

  var languageButtonTimer;
  function scheduleLanguageButtonUpdate() {
    clearTimeout(languageButtonTimer);
    languageButtonTimer = setTimeout(function () {
      updateLanguageButtons(savedLanguage());
    }, 40);
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
    setTimeout(function () { updateLanguageButtons(lang); }, 100);
    setTimeout(function () { updateLanguageButtons(lang); }, 500);
    setTimeout(function () { updateLanguageButtons(lang); }, 1200);
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

  function setStyles(node, styles) {
    if (!node) return;
    Object.keys(styles).forEach(function (name) {
      node.style.setProperty(name, styles[name], 'important');
    });
  }

  function directChild(parent, selector) {
    if (!parent) return null;
    for (var i = 0; i < parent.children.length; i += 1) {
      if (parent.children[i].matches(selector)) return parent.children[i];
    }
    return null;
  }

  function directChildren(parent, selector) {
    var children = [];
    if (!parent) return children;
    for (var i = 0; i < parent.children.length; i += 1) {
      if (parent.children[i].matches(selector)) children.push(parent.children[i]);
    }
    return children;
  }

  function applyDesktopHeaderLayout() {
    if (!window.matchMedia || !window.matchMedia('(min-width: 761px)').matches) return;

    document.querySelectorAll('header > .container.navbar, header#siteHeader > .container.topbar-inner, header .container.navbar, header .container.topbar-inner').forEach(function (headerInner) {
      var header = headerInner.closest('header');
      var brand = directChild(headerInner, '.brand');
      var logo = brand && (directChild(brand, '.logo') || brand.querySelector('h1'));
      var logoLink = brand && brand.querySelector('h1 > a');
      var tagline = brand && (directChild(brand, '.site-tagline') || directChild(brand, 'p'));
      var nav = directChild(headerInner, '#site-nav.nav-links');
      var language = directChild(headerInner, '.header-language-switcher');
      var languageButton = language && directChild(language, '.language-current');
      var menuButton = directChild(headerInner, '.nav-toggle');
      var menuInput = directChild(headerInner, '.menu-toggle');
      var narrow = window.matchMedia('(max-width: 1180px)').matches;
      var brandWidth = narrow ? '250px' : '280px';
      var languageWidth = '50px';
      var languageHeight = '34px';
      var languagePadding = '0 10px';

      setStyles(header, {
        width: '100%',
        'max-width': 'none',
        margin: '0',
        'padding-left': '0',
        'padding-right': '0',
        overflow: 'visible'
      });

      if (pageUsesStaticDesktopHeader()) {
        setStyles(header, {
          position: 'static',
          top: 'auto',
          bottom: 'auto',
          left: 'auto',
          right: 'auto',
          'z-index': 'auto',
          transform: 'none',
          transition: 'none'
        });

        var topbar = header && header.previousElementSibling && header.previousElementSibling.classList.contains('topbar')
          ? header.previousElementSibling
          : null;
        setStyles(topbar, {
          position: 'static',
          top: 'auto',
          bottom: 'auto',
          left: 'auto',
          right: 'auto',
          'z-index': 'auto',
          transform: 'none',
          transition: 'none'
        });
      }

      setStyles(headerInner, {
        display: 'flex',
        position: 'relative',
        'align-items': 'center',
        'justify-content': 'flex-start',
        gap: narrow ? '8px' : '12px',
        width: '100%',
        'max-width': 'var(--max-width, var(--max, 1240px))',
        'margin-left': 'auto',
        'margin-right': 'auto',
        'padding-left': '20px',
        'padding-right': '20px',
        'box-sizing': 'border-box',
        'min-height': '76px',
        'padding-top': '0',
        'padding-bottom': '0',
        overflow: 'visible'
      });

      setStyles(brand, {
        order: '1',
        flex: '0 0 ' + brandWidth,
        width: brandWidth,
        'min-width': brandWidth,
        'max-width': brandWidth,
        overflow: 'visible',
        margin: '0',
        display: 'flex',
        'flex-direction': 'column',
        gap: '2px'
      });

      setStyles(logo, {
        display: 'block',
        width: brandWidth,
        'max-width': brandWidth,
        margin: '0',
        'font-size': narrow ? '2.1rem' : '2.35rem',
        'line-height': '.92',
        'white-space': 'nowrap',
        overflow: 'visible'
      });

      setStyles(logoLink, {
        display: 'inline-block',
        'white-space': 'nowrap'
      });

      setStyles(tagline, {
        width: brandWidth,
        'max-width': brandWidth,
        margin: '0',
        color: '#bfd3ee',
        'font-size': narrow ? '.82rem' : '.92rem',
        'line-height': '1.12',
        'white-space': 'nowrap',
        overflow: 'visible'
      });

      setStyles(nav, {
        order: '2',
        flex: '0 1 auto',
        position: 'static',
        right: 'auto',
        top: 'auto',
        transform: 'none',
        display: 'flex',
        'flex-wrap': 'nowrap',
        'align-items': 'center',
        'justify-content': 'flex-end',
        gap: narrow ? '4px' : '6px',
        width: 'auto',
        'min-width': '0',
        margin: '0 0 0 auto',
        overflow: 'hidden'
      });

      if (nav) {
        directChildren(nav, 'a').forEach(function (link) {
          setStyles(link, {
            flex: '0 0 auto',
            'min-width': 'max-content',
            padding: narrow ? '9px 4px' : '9px 8px',
            'font-size': narrow ? '.82rem' : '.94rem',
            'line-height': '1',
            'white-space': 'nowrap'
          });
        });
      }

      setStyles(language, {
        order: '3',
        flex: '0 0 ' + languageWidth,
        position: 'relative',
        right: 'auto',
        top: 'auto',
        transform: 'none',
        width: languageWidth,
        'min-width': languageWidth,
        'max-width': languageWidth,
        margin: '0',
        'align-self': 'center',
        'z-index': '50'
      });

      setStyles(languageButton, {
        width: '100%',
        height: languageHeight,
        'min-height': languageHeight,
        'max-height': languageHeight,
        padding: languagePadding,
        display: 'inline-flex',
        'align-items': 'center',
        'justify-content': 'center',
        'vertical-align': 'middle',
        margin: '0',
        position: 'relative',
        top: '0',
        transform: 'none',
        'box-sizing': 'border-box',
        'font-size': narrow ? '.8rem' : '.88rem',
        'line-height': '1',
        'white-space': 'nowrap'
      });

      if (nav) {
        directChildren(nav, '.language-switcher').forEach(function (switcher) {
          setStyles(switcher, {
            display: 'none'
          });
        });
      }

      setStyles(menuButton, { display: 'none' });
      setStyles(menuInput, { display: 'none' });
    });
  }

  var desktopLayoutTimer;
  function scheduleDesktopHeaderLayout() {
    clearTimeout(desktopLayoutTimer);
    desktopLayoutTimer = setTimeout(applyDesktopHeaderLayout, 30);
  }

  function watchHeaderChanges() {
    if (!window.MutationObserver || document.documentElement.getAttribute('data-desktop-header-observed') === 'true') return;
    document.documentElement.setAttribute('data-desktop-header-observed', 'true');
    new MutationObserver(scheduleDesktopHeaderLayout).observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true
    });
    window.addEventListener('resize', scheduleDesktopHeaderLayout);
    window.addEventListener('resize', function () {
      updateLanguageButtons(savedLanguage());
    });

    new MutationObserver(scheduleLanguageButtonUpdate).observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true
    });
  }

  installHeaderStyle();
  wireLanguageMenus();
  wireSafariLanguageLinks();
  applyDesktopHeaderLayout();
  watchHeaderChanges();
  document.addEventListener('DOMContentLoaded', function () {
    installHeaderStyle();
    wireLanguageMenus();
    wireSafariLanguageLinks();
    applyDesktopHeaderLayout();
    watchHeaderChanges();
  });
})();

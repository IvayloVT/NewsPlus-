(function () {
  function getParts() {
    return {
      nav: document.getElementById('site-nav'),
      button: document.querySelector('.nav-toggle')
    };
  }

  window.toggleMenu = function () {
    var parts = getParts();
    if (!parts.nav || !parts.button) return;

    var isOpen = !parts.nav.classList.contains('nav-open');

    parts.nav.classList.toggle('nav-open', isOpen);
    parts.button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    parts.button.textContent = isOpen ? 'Close' : 'Menu';
  };

  document.addEventListener('DOMContentLoaded', function () {
    var parts = getParts();
    if (!parts.nav || !parts.button) return;

    parts.button.onclick = function (event) {
      event.preventDefault();
      window.toggleMenu();
    };
  });
})();

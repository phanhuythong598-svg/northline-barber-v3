(() => {
  const body = document.body;
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');
  const header = document.querySelector('[data-header]');
  const navLinks = document.querySelectorAll('[data-nav] a');

  if (!toggle || !nav) return;

  const setMenu = (isOpen) => {
    toggle.classList.toggle('is-open', isOpen);
    nav.classList.toggle('is-open', isOpen);
    body.classList.toggle('menu-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  };

  toggle.addEventListener('click', () => {
    setMenu(!nav.classList.contains('is-open'));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      setMenu(false);
      toggle.focus();
    }
  });

  const onScroll = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 32);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');
  const toTop = document.getElementById('toTop');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    root.setAttribute('data-bs-theme', theme);
    if (icon) {
      icon.classList.toggle('fa-moon', theme === 'light');
      icon.classList.toggle('fa-sun', theme === 'dark');
    }
  }

  applyTheme(root.getAttribute('data-theme') || 'light');

  if (toggle) {
    toggle.addEventListener('click', function () {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  if (toTop) {
    window.addEventListener('scroll', function () {
      toTop.classList.toggle('show', window.scrollY > 300);
    });
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  document.querySelectorAll('.navbar .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      const nav = document.getElementById('navMenu');
      if (nav && nav.classList.contains('show') && window.bootstrap) {
        const collapse = window.bootstrap.Collapse.getOrCreateInstance(nav);
        collapse.hide();
      }
    });
  });
})();

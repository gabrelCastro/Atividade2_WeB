document.addEventListener('DOMContentLoaded', function () {
  if (window.M) {
    M.Sidenav.init(document.querySelectorAll('.sidenav'));
  }

  const root = document.documentElement;
  const icon = document.getElementById('themeIcon');
  const iconMobile = document.getElementById('themeIconMobile');
  const toggle = document.getElementById('themeToggle');
  const toggleMobile = document.getElementById('themeToggleMobile');
  const toTop = document.getElementById('toTop');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    [icon, iconMobile].forEach(function (el) {
      if (!el) return;
      el.classList.toggle('fa-moon', theme === 'light');
      el.classList.toggle('fa-sun', theme === 'dark');
    });
  }

  applyTheme(root.getAttribute('data-theme') || 'light');

  function handleToggle(e) {
    if (e) e.preventDefault();
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('theme', next); } catch (err) {}
  }

  if (toggle) toggle.addEventListener('click', handleToggle);
  if (toggleMobile) toggleMobile.addEventListener('click', handleToggle);

  if (toTop) {
    window.addEventListener('scroll', function () {
      toTop.classList.toggle('show', window.scrollY > 300);
    });
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

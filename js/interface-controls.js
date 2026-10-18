(function (app) {
  'use strict';
  const { year, elements, THEME_STORAGE_KEY } = app;

  function setMenuOpen(open) {
    elements.menuPanel.hidden = !open;
    elements.menuToggle.setAttribute('aria-expanded', String(open));
  }

  function setTheme(theme, persist = false) {
    const dark = theme === 'dark';
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    elements.themeToggle.setAttribute('aria-pressed', String(dark));
    elements.themeToggle.setAttribute(
      'aria-label',
      dark ? 'Switch to light mode' : 'Switch to dark mode',
    );
    elements.themeToggle.querySelector('.theme-icon').textContent = dark ? '☀' : '☾';
    elements.themeToggle.querySelector('.theme-label').textContent = dark
      ? 'Light mode'
      : 'Dark mode';
    if (persist) {
      try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
      } catch {
        /* This view still uses the chosen theme. */
      }
    }
  }
  Object.assign(app, { setMenuOpen, setTheme });
  elements.menuPanel.querySelectorAll('a').forEach((link) => {
    if (link.dataset.year === year) link.setAttribute('aria-current', 'page');
  });
  elements.menuToggle.addEventListener('click', () => app.setMenuOpen(elements.menuPanel.hidden));
  document.addEventListener('click', (event) => {
    if (!elements.menuPanel.contains(event.target) && !elements.menuToggle.contains(event.target))
      app.setMenuOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !elements.menuPanel.hidden) {
      app.setMenuOpen(false);
      elements.menuToggle.focus();
    }
  });
  elements.themeToggle.addEventListener('click', () =>
    app.setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark', true),
  );
  let theme = 'light';
  try {
    theme = localStorage.getItem(THEME_STORAGE_KEY) === 'dark' ? 'dark' : 'light';
  } catch {
    /* Use light mode without storage. */
  }
  app.setTheme(theme);
})((window.IPreview = window.IPreview || {}));

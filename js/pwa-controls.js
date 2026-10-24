(function () {
  'use strict';
  const button = document.getElementById('pwa-toggle');
  const panel = document.getElementById('pwa-panel');
  const installButton = document.getElementById('pwa-install');
  const instructions = document.getElementById('pwa-instructions');
  const status = document.getElementById('pwa-status');
  const retry = document.getElementById('pwa-retry');
  const standalone = window.matchMedia?.('(display-mode: standalone)');
  let deferredPrompt = null;
  let offlineReady = false;
  let setupError = false;
  let installed = standalone?.matches || navigator.standalone === true;

  function setOpen(open) {
    panel.hidden = !open;
    button.setAttribute('aria-expanded', String(open));
  }

  function updateInstall() {
    button.setAttribute('aria-label', installed ? 'IPreview offline status' : 'Install IPreview');
    button.title = installed ? 'Offline status' : 'Install IPreview';
    document.getElementById('pwa-heading').textContent = installed
      ? 'IPreview installed'
      : 'Install IPreview';
    installButton.hidden = installed || !deferredPrompt;
    const ios =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    instructions.textContent = installed
      ? 'Open IPreview from your home screen or app launcher, even without internet.'
      : deferredPrompt
        ? 'Install IPreview to open your quizzes from your home screen or desktop.'
        : ios
          ? 'In Safari, tap Share, then Add to Home Screen. Enable Open as Web App if shown.'
          : 'Use your browser menu to install IPreview or add it to your home screen. If unavailable, open this site in Chrome or Edge.';
  }

  function updateStatus(message) {
    status.textContent =
      message ||
      (setupError
        ? 'Offline setup could not finish. Connect to the internet and try again.'
        : offlineReady
          ? navigator.onLine
            ? 'Ready offline · All 500 questions and diagrams are saved on this device.'
            : 'Offline · All five quizzes are available. Your answers still save on this device.'
          : 'Saving quizzes for offline use… Keep this page open until ready.');
    status.dataset.ready = String(offlineReady);
  }

  function setupFailed() {
    offlineReady = false;
    setupError = true;
    updateStatus();
    retry.hidden = false;
  }

  async function registerWorker(repair = false) {
    setupError = false;
    retry.hidden = true;
    updateStatus();
    try {
      const baseUrl = new URL('../', document.baseURI);
      const registration = await navigator.serviceWorker.register(
        new URL('service-worker.js', baseUrl),
        { scope: baseUrl.pathname, updateViaCache: 'none' },
      );
      const watch = (worker) => {
        if (!worker) return;
        worker.addEventListener('statechange', () => {
          if (worker.state === 'redundant' && !offlineReady) setupFailed();
        });
      };
      watch(registration.installing);
      registration.addEventListener('updatefound', () => watch(registration.installing));
      const ready = await navigator.serviceWorker.ready;
      ready.active?.postMessage({ type: repair ? 'REPAIR_OFFLINE' : 'CHECK_OFFLINE' });
    } catch {
      setupFailed();
    }
  }

  button.addEventListener('click', () => setOpen(panel.hidden));
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.pwa-menu')) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !panel.hidden) {
      setOpen(false);
      button.focus();
    }
  });
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    updateInstall();
  });
  installButton.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    const prompt = deferredPrompt;
    deferredPrompt = null;
    installButton.disabled = true;
    try {
      await prompt.prompt();
      await prompt.userChoice;
    } catch {
      // Browser menu instructions remain available if the prompt is refused.
    } finally {
      installButton.disabled = false;
      updateInstall();
    }
  });
  window.addEventListener('appinstalled', () => {
    installed = true;
    deferredPrompt = null;
    updateInstall();
  });
  standalone?.addEventListener('change', (event) => {
    installed = event.matches || navigator.standalone === true;
    updateInstall();
  });
  updateInstall();
  if (!window.isSecureContext || !('serviceWorker' in navigator)) {
    updateStatus('Offline installation needs HTTPS or localhost. You can still practice here.');
    return;
  }
  navigator.serviceWorker.addEventListener('message', (event) => {
    if (event.data?.type !== 'OFFLINE_STATUS') return;
    offlineReady = event.data.ready === true;
    setupError = !offlineReady;
    retry.hidden = offlineReady;
    if (offlineReady) updateStatus();
    else setupFailed();
  });
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    navigator.serviceWorker.controller?.postMessage({ type: 'CHECK_OFFLINE' });
  });
  ['online', 'offline'].forEach((type) => window.addEventListener(type, () => updateStatus()));
  retry.addEventListener('click', () => registerWorker(true));
  registerWorker();
})();

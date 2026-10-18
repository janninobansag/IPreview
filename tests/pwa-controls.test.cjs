'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM } = require('jsdom');
const root = path.resolve(__dirname, '../dist');
const script = fs.readFileSync(path.join(root, 'js/pwa-controls.js'), 'utf8');
const tick = () => new Promise((resolve) => setImmediate(resolve));

function page({ ios = false, installed = false, fail = false, supported = true } = {}) {
  const dom = new JSDOM(fs.readFileSync(path.join(root, 'html/2025.html'), 'utf8'), {
    url: 'https://quiz.test/IPreview/html/2025.html',
    runScripts: 'outside-only',
  });
  const { window } = dom;
  const calls = [];
  const serviceWorker = new window.EventTarget();
  const registration = new window.EventTarget();
  registration.active = {
    postMessage(message) {
      calls.push(message);
    },
  };
  serviceWorker.ready = Promise.resolve(registration);
  serviceWorker.register = async (url, options) => {
    calls.push({ url: url.href, options });
    if (fail) throw new Error('Installation failed');
    return registration;
  };
  window.matchMedia = () => Object.assign(new window.EventTarget(), { matches: installed });
  Object.defineProperty(window, 'isSecureContext', { value: supported });
  Object.defineProperty(window.navigator, 'serviceWorker', { value: serviceWorker });
  if (ios) Object.defineProperty(window.navigator, 'userAgent', { value: 'iPhone' });
  window.eval(script);
  return { dom, window, document: window.document, calls, serviceWorker };
}

(async () => {
  const app = page();
  await tick();
  assert.equal(app.calls[0].url, 'https://quiz.test/IPreview/service-worker.js');
  assert.equal(app.calls[0].options.scope, '/IPreview/');
  assert.equal(app.calls[1].type, 'CHECK_OFFLINE');
  app.document.querySelector('#pwa-toggle').click();
  assert.equal(app.document.querySelector('#pwa-panel').hidden, false);
  app.document.dispatchEvent(new app.window.KeyboardEvent('keydown', { key: 'Escape' }));
  assert.equal(app.document.querySelector('#pwa-panel').hidden, true);
  let prompts = 0;
  const install = new app.window.Event('beforeinstallprompt', { cancelable: true });
  install.prompt = async () => {
    prompts++;
  };
  install.userChoice = Promise.resolve({ outcome: 'dismissed' });
  app.window.dispatchEvent(install);
  assert.equal(install.defaultPrevented, true);
  assert.equal(app.document.querySelector('#pwa-install').hidden, false);
  app.document.querySelector('#pwa-install').click();
  await tick();
  assert.equal(prompts, 1);
  assert.equal(app.document.querySelector('#pwa-install').hidden, true);
  app.serviceWorker.dispatchEvent(
    new app.window.MessageEvent('message', {
      data: { type: 'OFFLINE_STATUS', ready: true },
    }),
  );
  assert.match(app.document.querySelector('#pwa-status').textContent, /Ready offline/);
  Object.defineProperty(app.window.navigator, 'onLine', { value: false });
  app.window.dispatchEvent(new app.window.Event('offline'));
  assert.match(app.document.querySelector('#pwa-status').textContent, /^Offline/);
  app.serviceWorker.dispatchEvent(
    new app.window.MessageEvent('message', {
      data: { type: 'OFFLINE_STATUS', ready: false },
    }),
  );
  assert.equal(app.document.querySelector('#pwa-retry').hidden, false);
  app.document.querySelector('#pwa-retry').click();
  await tick();
  assert.equal(app.calls.at(-1).type, 'REPAIR_OFFLINE');
  app.window.dispatchEvent(new app.window.Event('appinstalled'));
  assert.match(app.document.querySelector('#pwa-heading').textContent, /installed/);
  app.dom.window.close();

  for (const options of [
    { ios: true },
    { installed: true },
    { fail: true },
    { supported: false },
  ]) {
    const test = page(options);
    await tick();
    if (options.ios)
      assert.match(test.document.querySelector('#pwa-instructions').textContent, /Safari/);
    if (options.installed) assert.equal(test.document.querySelector('#pwa-install').hidden, true);
    if (options.fail) assert.equal(test.document.querySelector('#pwa-retry').hidden, false);
    if (!options.supported && options.supported !== undefined) {
      assert.equal(test.calls.length, 0);
      assert.match(test.document.querySelector('#pwa-status').textContent, /HTTPS or localhost/);
    }
    test.dom.window.close();
  }
  console.log('Install prompt, manual instructions, offline readiness and repair controls passed.');
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

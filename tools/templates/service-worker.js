'use strict';

const CACHE_VERSION = 'BUILD_VERSION';
const OFFLINE_ASSETS = /* OFFLINE_ASSETS */ [];
const BASE_URL = self.registration.scope;
const CACHE_PREFIX = 'ipreview:' + BASE_URL + ':';
const CACHE_NAME = CACHE_PREFIX + CACHE_VERSION;
const ASSET_URLS = OFFLINE_ASSETS.map((asset) => new URL(asset, BASE_URL).href);
const KNOWN_URLS = new Set(ASSET_URLS);

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(CACHE_NAME);
        await cache.addAll(ASSET_URLS.map((url) => new Request(url, { cache: 'reload' })));
      } catch (error) {
        await caches.delete(CACHE_NAME);
        throw error;
      }
      // Updates wait for old tabs to close, keeping each quiz on one complete version.
    })(),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
          .map((key) => caches.delete(key)),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener('message', (event) => {
  if (!['CHECK_OFFLINE', 'REPAIR_OFFLINE'].includes(event.data?.type)) return;
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      if (event.data.type === 'REPAIR_OFFLINE') {
        try {
          await cache.addAll(ASSET_URLS.map((url) => new Request(url, { cache: 'reload' })));
        } catch {
          event.source?.postMessage({ type: 'OFFLINE_STATUS', ready: false });
          return;
        }
      }
      const entries = await Promise.all(ASSET_URLS.map((url) => cache.match(url)));
      event.source?.postMessage({ type: 'OFFLINE_STATUS', ready: entries.every(Boolean) });
    })(),
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (!url.href.startsWith(BASE_URL)) return;
  url.search = '';
  url.hash = '';
  if (url.href === BASE_URL) url.pathname += 'index.html';
  if (url.href === new URL('html/', BASE_URL).href) url.pathname += 'index.html';
  if (!KNOWN_URLS.has(url.href)) return;
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(url.href);
      if (cached) return cached;
      const response = await fetch(event.request);
      if (response.ok && !response.redirected) await cache.put(url.href, response.clone());
      return response;
    })(),
  );
});

'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '../dist');
const workerSource = fs.readFileSync(path.join(root, 'service-worker.js'), 'utf8');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.webmanifest'), 'utf8'));
assert.equal(manifest.display, 'standalone');
assert.equal(manifest.scope, './');
assert.ok(fs.existsSync(path.join(root, manifest.start_url)));
for (const icon of manifest.icons) {
  const data = fs.readFileSync(path.join(root, icon.src));
  assert.equal(data.subarray(1, 4).toString(), 'PNG');
  const dimension = Number(icon.sizes.split('x')[0]);
  assert.equal(data.readUInt32BE(16), dimension);
  assert.equal(data.readUInt32BE(20), dimension);
}

function createWorker(scope, failDownload = false) {
  const handlers = {};
  const stores = new Map();
  const cacheStorage = {
    async open(name) {
      if (!stores.has(name)) stores.set(name, new Map());
      const store = stores.get(name);
      return {
        async addAll(requests) {
          for (const request of requests) {
            const relative = new URL(request.url).pathname.slice(new URL(scope).pathname.length);
            assert.ok(
              fs.existsSync(path.join(root, relative)),
              'Cached asset must exist: ' + relative,
            );
            if (failDownload && relative === 'html/2022.html') throw new Error('Network failed');
            store.set(request.url, new Response('cached: ' + relative));
          }
        },
        async match(url) {
          return store.get(url);
        },
        async put(url, response) {
          store.set(url, response);
        },
      };
    },
    async keys() {
      return [...stores.keys()];
    },
    async delete(name) {
      return stores.delete(name);
    },
  };
  let claimed = false;
  const context = vm.createContext({
    URL,
    Request,
    Response,
    Set,
    caches: cacheStorage,
    fetch() {
      throw new Error('Offline: network access is forbidden in this check');
    },
    self: {
      registration: { scope },
      clients: {
        async claim() {
          claimed = true;
        },
      },
      addEventListener(type, handler) {
        handlers[type] = handler;
      },
    },
  });
  vm.runInContext(workerSource, context);
  async function dispatch(type, extra = {}) {
    let pending;
    let response;
    handlers[type]({
      waitUntil(value) {
        pending = value;
      },
      respondWith(value) {
        response = value;
      },
      ...extra,
    });
    await pending;
    return response;
  }
  return { dispatch, stores, context, claimed: () => claimed };
}

(async () => {
  for (const scope of ['https://quiz.test/', 'https://quiz.test/IPreview/']) {
    const worker = createWorker(scope);
    await worker.dispatch('install');
    const [name] = worker.stores.keys();
    const cache = worker.stores.get(name);
    const expected = [];
    function list(directory) {
      for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        const filename = path.join(directory, entry.name);
        if (entry.isDirectory()) list(filename);
        else if (!['.nojekyll', 'service-worker.js'].includes(entry.name))
          expected.push(
            new URL(path.relative(root, filename).split(path.sep).join('/'), scope).href,
          );
      }
    }
    list(root);
    assert.deepEqual(
      [...cache.keys()].sort(),
      expected.sort(),
      'Every deployed asset must be cached',
    );
    assert.equal([...cache.keys()].filter((url) => url.endsWith('.webp')).length, 173);
    const old = 'ipreview:' + scope + ':old';
    worker.stores.set(old, new Map());
    worker.stores.set('another-app', new Map());
    await worker.dispatch('activate');
    assert.equal(worker.claimed(), true);
    assert.equal(worker.stores.has(old), false);
    assert.equal(worker.stores.has('another-app'), true);
    for (const asset of expected) {
      const response = await worker.dispatch('fetch', { request: new Request(asset + '?test=1') });
      assert.ok(response?.ok, 'Asset must work without a network: ' + asset);
    }
    const home = await worker.dispatch('fetch', { request: new Request(scope) });
    assert.equal(await home.text(), 'cached: index.html');
    assert.equal(
      await worker.dispatch('fetch', {
        request: new Request('https://external.test/file'),
      }),
      undefined,
      'External requests must not be intercepted',
    );
    const messages = [];
    const message = (type) =>
      worker.dispatch('message', {
        data: { type },
        source: {
          postMessage(value) {
            messages.push(value);
          },
        },
      });
    await message('CHECK_OFFLINE');
    assert.equal(messages.at(-1).ready, true);
    cache.delete(new URL('html/2022.html', scope).href);
    await message('CHECK_OFFLINE');
    assert.equal(messages.at(-1).ready, false);
    await message('REPAIR_OFFLINE');
    assert.equal(messages.at(-1).ready, true);
  }
  const failed = createWorker('https://quiz.test/', true);
  await assert.rejects(failed.dispatch('install'), /Network failed/);
  assert.equal(failed.stores.size, 0, 'Failed installation must delete its partial cache');
  console.log(
    'PWA manifest, icons, full offline cache, scope isolation and failed downloads passed.',
  );
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

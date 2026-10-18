'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');

function listAssets(directory, prefix = '') {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const relative = prefix + entry.name;
    if (entry.name.startsWith('.')) return [];
    return entry.isDirectory()
      ? listAssets(path.join(directory, entry.name), relative + '/')
      : [relative];
  });
}

function buildOfflineWorker(outputDirectory) {
  const template = fs.readFileSync(path.join(__dirname, 'templates/service-worker.js'), 'utf8');
  const assets = listAssets(outputDirectory).sort();
  const hash = createHash('sha256').update(template);
  for (const asset of assets) {
    hash.update(asset).update(fs.readFileSync(path.join(outputDirectory, asset)));
  }
  const worker = template
    .replace('BUILD_VERSION', hash.digest('hex').slice(0, 16))
    .replace('/* OFFLINE_ASSETS */ []', JSON.stringify(assets, null, 2));
  fs.writeFileSync(path.join(outputDirectory, 'service-worker.js'), worker);
}

module.exports = { buildOfflineWorker };

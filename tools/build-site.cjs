'use strict';

const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { buildOfflineWorker } = require('./build-offline.cjs');

const projectRoot = path.resolve(__dirname, '..');
const outputDirectory = path.join(projectRoot, 'dist');
const pendingDirectory = path.join(projectRoot, '.cache', 'site-build');
const staticDirectories = ['html', 'css', 'js', 'data/quizzes', 'icons'];
const staticFiles = ['index.html', '.nojekyll', 'manifest.webmanifest'];

function assertInsideProject(directory) {
  const relative = path.relative(projectRoot, path.resolve(directory));
  if (!relative || relative.startsWith('..') || path.isAbsolute(relative)) {
    throw new Error('Build path is outside the project: ' + directory);
  }
}

function resetGeneratedDirectory(directory) {
  assertInsideProject(directory);
  if (fs.existsSync(directory)) {
    // Delete only our generated directory; input source folders are never targets.
    fs.rmSync(directory, { recursive: true, force: true });
  }
  fs.mkdirSync(directory, { recursive: true });
}

function copyStaticFile(relativePath) {
  const source = path.join(projectRoot, relativePath);
  const destination = path.join(pendingDirectory, relativePath);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
}

function copyStaticDirectory(relativePath) {
  const source = path.join(projectRoot, relativePath);
  const destination = path.join(pendingDirectory, relativePath);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.cpSync(source, destination, {
    recursive: true,
    filter: (filename) => !path.basename(filename).startsWith('.'),
  });
}

function copyReferencedDiagrams() {
  const imagePaths = new Set();
  for (const filename of fs.readdirSync(path.join(projectRoot, 'data/quizzes'))) {
    if (!/^quiz-\d{4}\.js$/.test(filename)) continue;
    const context = { window: {} };
    vm.runInNewContext(
      fs.readFileSync(path.join(projectRoot, 'data/quizzes', filename), 'utf8'),
      context,
    );
    for (const quiz of Object.values(context.window.ITPEC_QUIZZES)) {
      for (const question of quiz.questions) {
        question.images.forEach((imagePath) => {
          if (!/^questions\/\d{4}\/[\w-]+\.webp$/.test(imagePath)) {
            throw new Error('Unexpected diagram path: ' + imagePath);
          }
          imagePaths.add(imagePath);
        });
      }
    }
  }
  [...imagePaths].sort().forEach(copyStaticFile);
  return imagePaths.size;
}

function buildSite() {
  resetGeneratedDirectory(pendingDirectory);
  staticFiles.forEach(copyStaticFile);
  staticDirectories.forEach(copyStaticDirectory);
  const imageCount = copyReferencedDiagrams();
  buildOfflineWorker(pendingDirectory);

  // The allowlist above keeps documentation, tools, tests and source data out of dist.
  assertInsideProject(outputDirectory);
  if (fs.existsSync(outputDirectory)) fs.rmSync(outputDirectory, { recursive: true, force: true });
  fs.renameSync(pendingDirectory, outputDirectory);
  console.log('Built dist with 4 quizzes and ' + imageCount + ' referenced diagrams.');
}

if (require.main === module) buildSite();
module.exports = { buildSite, projectRoot, outputDirectory };

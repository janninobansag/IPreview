'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { JSDOM } = require('jsdom');

const projectRoot = path.resolve(__dirname, '..');
const outputDirectory = path.join(projectRoot, 'dist');

function listFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filename = path.join(directory, entry.name);
    return entry.isDirectory() ? listFiles(filename) : [filename];
  });
}

function assertLocalFile(filename) {
  const relative = path.relative(outputDirectory, filename);
  assert.ok(!relative.startsWith('..'), 'Reference must remain inside dist: ' + filename);
  assert.ok(fs.statSync(filename).isFile(), 'Referenced file must exist: ' + filename);
}

const builtFiles = listFiles(outputDirectory);
for (const filename of builtFiles) {
  const relative = path.relative(outputDirectory, filename).split(path.sep).join('/');
  assert.ok(
    /^(index\.html|\.nojekyll|manifest\.webmanifest|service-worker\.js|icons\/|html\/|css\/|js\/|data\/quizzes\/|questions\/)/.test(
      relative,
    ),
    'Unexpected file in the Vercel output: ' + relative,
  );
  assert.ok(!relative.endsWith('.pdf'), 'Reference PDFs must stay outside the deployment.');
}
for (const filename of builtFiles.filter((name) => name.endsWith('.html'))) {
  const document = new JSDOM(fs.readFileSync(filename, 'utf8')).window.document;
  if (document.body.dataset.quizYear) {
    const shortcut = document.querySelector('.mobile-map-link');
    assert.ok(shortcut, 'Quiz must offer a shortcut to the map on small screens.');
    assert.ok(
      document.querySelector(shortcut.getAttribute('href')),
      'Map shortcut target must exist.',
    );
  }
  for (const element of document.querySelectorAll('[src], link[href], a[href]')) {
    const reference = element.getAttribute('src') || element.getAttribute('href');
    if (!reference || /^(https?:|#)/.test(reference)) continue;
    assertLocalFile(path.resolve(path.dirname(filename), reference));
  }
}
for (const filename of builtFiles.filter((name) => name.endsWith('.css'))) {
  const css = fs.readFileSync(filename, 'utf8');
  for (const match of css.matchAll(/@import\s+url\(["']?([^"')]+)["']?\)/g)) {
    assertLocalFile(path.resolve(path.dirname(filename), match[1]));
  }
}
for (const filename of builtFiles.filter((name) => /quiz-\d{4}\.js$/.test(name))) {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(filename, 'utf8'), context);
  for (const quiz of Object.values(context.window.ITPEC_QUIZZES)) {
    assert.equal(quiz.questions.length, 100);
    for (const question of quiz.questions) {
      for (const imagePath of question.images) {
        assertLocalFile(path.join(outputDirectory, imagePath));
      }
    }
  }
}
const documentFiles = listFiles(path.join(projectRoot, 'doc'));
assert.ok(
  documentFiles.every((filename) => {
    const relative = path
      .relative(path.join(projectRoot, 'doc'), filename)
      .split(path.sep)
      .join('/');
    return (
      /\.(md|pdf|txt)$/i.test(filename) ||
      (/^portfolio\//i.test(relative) && /\.(png|jpe?g|webp)$/i.test(filename))
    );
  }),
  'doc must contain documentation, references, and portfolio image files only.',
);
const configuration = JSON.parse(fs.readFileSync(path.join(projectRoot, 'vercel.json'), 'utf8'));
assert.equal(configuration.outputDirectory, 'dist');
console.log('Deployment allowlist, page links, CSS imports, diagrams and doc contents passed.');

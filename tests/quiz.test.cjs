// Run with npm test; the build output is the same directory Vercel publishes.
const { JSDOM } = require(process.argv[2] || 'jsdom');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '../dist');

function page(year, stored = {}, storageAvailable = true) {
  const dom = new JSDOM(fs.readFileSync(path.join(root, `html/${year}.html`), 'utf8'), {
    url: `https://quiz.test/html/${year}.html`,
    runScripts: 'outside-only',
  });
  dom.window.HTMLElement.prototype.scrollIntoView = function () {};
  dom.window.confirm = () => true;
  for (const [key, value] of Object.entries(stored)) dom.window.localStorage.setItem(key, value);
  if (!storageAvailable) {
    Object.defineProperty(dom.window, 'localStorage', {
      get() {
        throw new dom.window.DOMException('Storage is disabled.', 'SecurityError');
      },
    });
  }
  for (const script of dom.window.document.querySelectorAll('script[src]')) {
    const scriptPath = path.resolve(root, 'html', script.getAttribute('src'));
    dom.window.eval(fs.readFileSync(scriptPath, 'utf8'));
  }
  return dom;
}
function clickAnswer(dom, index) {
  dom.window.document.querySelectorAll('#answer-options input')[index].click();
}
function stored(dom) {
  return Object.fromEntries(
    Object.keys(dom.window.localStorage).map((key) => [key, dom.window.localStorage.getItem(key)]),
  );
}

const first = page('2025');
const doc = first.window.document;
const menuLinks = [...doc.querySelectorAll('#quiz-menu-panel a')];
assert.deepEqual(
  menuLinks.map((a) => a.textContent),
  [
    '2026 practice quiz',
    '2025 practice quiz',
    '2024 practice quiz',
    '2023 practice quiz',
    '2022 practice quiz',
  ],
);
assert.equal(menuLinks.filter((a) => a.getAttribute('aria-current') === 'page').length, 1);
doc.querySelector('#quiz-menu-toggle').click();
assert.equal(doc.querySelector('#quiz-menu-panel').hidden, false);
doc.dispatchEvent(new first.window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
assert.equal(doc.querySelector('#quiz-menu-panel').hidden, true);
clickAnswer(first, 3); // 2025 Q1: correct D
doc.querySelector('#next-button').click();
clickAnswer(first, 0); // 2025 Q2: wrong A
doc.querySelector('#submit-button').click();
const buttons = doc.querySelectorAll('#question-grid button');
assert.ok(buttons[0].classList.contains('correct'));
assert.ok(buttons[1].classList.contains('incorrect'));
assert.ok(buttons[2].classList.contains('unanswered'));
assert.equal(doc.querySelector('#progress-count').textContent, 'Question 2 of 100');
assert.ok(doc.querySelector('#question-feedback').textContent.includes('110111'));
assert.equal(doc.querySelector('#question-feedback').hidden, false);
buttons[99].click();
assert.equal(doc.querySelector('#progress-count').textContent, 'Question 100 of 100');
assert.equal(doc.querySelector('#next-button').disabled, true);
doc.querySelector('#theme-toggle').click();
assert.equal(doc.documentElement.dataset.theme, 'dark');
const shared = stored(first);
const restored = page('2025', shared);
assert.equal(
  restored.window.document.querySelector('#progress-count').textContent,
  'Question 100 of 100',
);
assert.equal(restored.window.document.querySelector('#answer-options input').disabled, true);
const anotherYear = page('2024', shared);
assert.equal(
  anotherYear.window.document.querySelector('#answered-count').textContent,
  '0 answered',
);
clickAnswer(anotherYear, 1);
assert.equal(
  anotherYear.window.localStorage.getItem('itpec-ip-2025S-progress-v1'),
  shared['itpec-ip-2025S-progress-v1'],
);
assert.ok(anotherYear.window.localStorage.getItem('itpec-ip-2024S-progress-v1'));
const autumn = page('2022', shared);
assert.equal(autumn.window.document.querySelector('#answered-count').textContent, '0 answered');
clickAnswer(autumn, 2);
assert.ok(autumn.window.localStorage.getItem('itpec-ip-2022A-progress-v1'));
assert.equal(
  autumn.window.localStorage.getItem('itpec-ip-2025S-progress-v1'),
  shared['itpec-ip-2025S-progress-v1'],
);
const newest = page('2026', shared);
assert.equal(newest.window.document.querySelector('#answered-count').textContent, '0 answered');
clickAnswer(newest, 1);
assert.ok(newest.window.localStorage.getItem('itpec-ip-2026S-progress-v1'));
assert.equal(
  newest.window.localStorage.getItem('itpec-ip-2025S-progress-v1'),
  shared['itpec-ip-2025S-progress-v1'],
);
const home = page('index');
assert.equal(home.window.document.body.dataset.quizYear, '2026');
for (const dom of [first, restored, anotherYear, autumn, newest, home]) dom.window.close();
console.log(
  'Menu, correct/wrong/skipped map states, inline feedback, persistence, year isolation and dark mode passed.',
);

const corrupted = page('2025', { 'itpec-ip-2025S-progress-v1': '{invalid json' });
assert.equal(corrupted.window.document.querySelector('#answered-count').textContent, '0 answered');
corrupted.window.close();
const withoutStorage = page('2025', {}, false);
clickAnswer(withoutStorage, 3);
assert.equal(
  withoutStorage.window.document.querySelector('#answered-count').textContent,
  '1 answered',
);
assert.equal(
  withoutStorage.window.document.querySelector('#save-label').textContent,
  'Progress stays in this tab',
);
withoutStorage.window.document.querySelector('#theme-toggle').click();
assert.equal(withoutStorage.window.document.documentElement.dataset.theme, 'dark');
withoutStorage.window.close();
console.log('Corrupted saved data and disabled browser storage are handled.');

for (const year of ['2026', '2025', '2024', '2023', '2022']) {
  const dom = page(year);
  const qs = dom.window.ITPEC_QUIZZES[year].questions;
  const document = dom.window.document;
  qs.forEach((q, index) => {
    assert.equal(
      document.querySelector('#source-label').textContent,
      `(${year}${year === '2022' ? 'A' : 'S'}, IP, Q${index + 1})`,
    );
    assert.equal(document.querySelectorAll('#answer-options input').length, 4);
    if (q.images.length) {
      assert.ok(
        document
          .querySelector('#source-images img')
          .getAttribute('src')
          .startsWith(`../questions/${year}/`),
      );
      assert.equal(document.querySelector('#source-question').hidden, false);
    } else {
      assert.equal(document.querySelector('#source-question').hidden, true);
    }
    clickAnswer(dom, q.answer);
    if (index < 99) document.querySelector('#next-button').click();
  });
  assert.equal(document.querySelector('#answered-count').textContent, '100 answered');
  document.querySelector('#submit-button').click();
  assert.equal(document.querySelector('#result-score').textContent, '100%');
  assert.equal(document.querySelectorAll('#question-grid button.correct').length, 100);
  document.querySelector('#retry-button').click();
  assert.equal(document.querySelector('#answered-count').textContent, '0 answered');
  assert.equal(document.querySelector('#question-feedback').hidden, true);
  dom.window.close();
  console.log(`${year}: all 100 questions render, grade correctly, and reset successfully.`);
}

const review2022 = page('2022');
clickAnswer(review2022, 0); // Q1: wrong A; official answer C
review2022.window.document.querySelector('#submit-button').click();
assert.ok(
  review2022.window.document.querySelector('#question-grid button').classList.contains('incorrect'),
);
assert.match(
  review2022.window.document.querySelector('#question-feedback').textContent,
  /16 \+ 8 = 24/,
);
assert.match(review2022.window.document.querySelector('#question-feedback').textContent, /2022A/);
review2022.window.close();

const imagePage = page('2025');
const imageDocument = imagePage.window.document;
const viewer = imageDocument.querySelector('#image-viewer');
viewer.showModal = function () {
  this.setAttribute('open', '');
};
viewer.close = function () {
  this.removeAttribute('open');
  this.dispatchEvent(new imagePage.window.Event('close'));
};
const imageApp = imagePage.window.IPreview;
const secondImage = imageApp.questions.find(
  (question, index) => index > 0 && question.images.length,
).images[0];
imageApp.questions[0].images.push(secondImage);
imageApp.renderQuestion();
clickAnswer(imagePage, 3);
const selectedAnswer = imageApp.state.answers[0];
const thumbnails = imageDocument.querySelectorAll('#source-images a');
assert.equal(thumbnails.length, 2);
thumbnails[0].click();
assert.equal(viewer.open, true);
assert.equal(imageDocument.activeElement.id, 'image-viewer-close');
assert.equal(
  imageDocument.querySelector('#image-viewer-title').textContent,
  'Question 1 image, part 1',
);
imageDocument.querySelector('#image-viewer-zoom').click();
assert.equal(viewer.classList.contains('is-zoomed'), true);
assert.equal(imageDocument.querySelector('#image-viewer-zoom').textContent, 'Fit screen');
imageDocument.querySelector('#image-viewer-close').click();
assert.equal(viewer.open, false);
assert.equal(imageDocument.activeElement, thumbnails[0]);
thumbnails[1].click();
assert.equal(
  imageDocument.querySelector('#image-viewer-image').getAttribute('src'),
  thumbnails[1].href,
);
viewer.dispatchEvent(new imagePage.window.Event('cancel', { cancelable: true }));
assert.equal(viewer.open, false);
thumbnails[1].click();
viewer.click();
assert.equal(viewer.open, false);
assert.equal(imageApp.state.answers[0], selectedAnswer);
assert.equal(imageDocument.querySelector('#answered-count').textContent, '1 answered');
imageDocument.querySelector('#theme-toggle').click();
thumbnails[0].click();
assert.equal(imageDocument.documentElement.dataset.theme, 'dark');
assert.equal(viewer.open, true);
viewer.close();
imagePage.window.close();
console.log('Image viewer close, zoom, multiple parts, focus, quiz state, and dark mode passed.');

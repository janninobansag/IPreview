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
  ['2025 practice quiz', '2024 practice quiz', '2023 practice quiz'],
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
for (const dom of [first, restored, anotherYear]) dom.window.close();
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

for (const year of ['2025', '2024', '2023']) {
  const dom = page(year);
  const qs = dom.window.ITPEC_QUIZZES[year].questions;
  const document = dom.window.document;
  qs.forEach((q, index) => {
    assert.equal(
      document.querySelector('#source-label').textContent,
      `(${year}S, IP, Q${index + 1})`,
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

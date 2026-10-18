const year = document.body.dataset.quizYear;
const quiz = window.ITPEC_QUIZZES[year];
const questions = quiz.questions;
const STORAGE_KEY = `itpec-ip-${year}S-progress-v1`;
const THEME_KEY = 'itpec-practice-theme-v1';
const letters = ['A', 'B', 'C', 'D'];
const state = { answers: {}, current: 0, submitted: false };
const el = id => document.getElementById(id);
const refs = {
  menuToggle: el('quiz-menu-toggle'), menu: el('quiz-menu-panel'),
  theme: el('theme-toggle'), save: el('save-label'), reset: el('reset-button'),
  number: el('question-number'), source: el('source-label'), text: el('question-text'),
  sourceQuestion: el('source-question'), images: el('source-images'),
  transcript: el('question-transcript'), transcriptText: el('transcript-text'),
  options: el('answer-options'), feedback: el('question-feedback'),
  previous: el('previous-button'), next: el('next-button'),
  progress: el('progress-count'), answered: el('answered-count'), fill: el('progress-fill'),
  progressBar: document.querySelector('.progress-track'), grid: el('question-grid'),
  legend: el('question-legend'), help: el('navigator-help'), submit: el('submit-button'),
  submitRow: el('submit-row'), hint: el('submit-hint'), results: el('results-panel'),
  score: el('result-score'), title: el('result-title'), summary: el('result-summary'),
  missed: el('missed-button'), retry: el('retry-button')
};

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    refs.save.textContent = `Progress saved for ${year}`;
  } catch {
    refs.save.textContent = 'Progress stays in this tab';
  }
}

function load() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (stored.answers && typeof stored.answers === 'object') {
      for (const [index, answer] of Object.entries(stored.answers)) {
        if (/^\d+$/.test(index) && +index < questions.length && Number.isInteger(answer) && answer >= 0 && answer < 4) {
          state.answers[index] = answer;
        }
      }
    }
    if (Number.isInteger(stored.current) && stored.current >= 0 && stored.current < questions.length) state.current = stored.current;
    state.submitted = stored.submitted === true;
  } catch { /* Invalid or unavailable storage starts a fresh session. */ }
}

function status(index) {
  if (state.answers[index] === undefined) return 'unanswered';
  return state.answers[index] === questions[index].answer ? 'correct' : 'incorrect';
}

function answerText(q, index) {
  if (index === undefined) return 'No answer selected';
  const choice = q.choices[index];
  return choice === `Option ${letters[index]}` ? letters[index] : `${letters[index]}. ${choice}`;
}

function paragraph(label, text) {
  const p = document.createElement('p');
  const strong = document.createElement('strong');
  strong.textContent = `${label} `;
  p.append(strong, document.createTextNode(text));
  return p;
}

function renderQuestion() {
  const q = questions[state.current];
  refs.number.textContent = `QUESTION ${String(q.number).padStart(2, '0')}`;
  refs.source.textContent = q.source;
  refs.text.textContent = q.preferOriginal ? 'Choose the correct answer.' : q.text;
  refs.sourceQuestion.hidden = !q.images.length;
  refs.sourceQuestion.open = q.preferOriginal;
  refs.images.replaceChildren();
  q.images.forEach((src, i) => {
    const link = document.createElement('a');
    link.href = `../${src}`; link.target = '_blank'; link.rel = 'noopener';
    link.setAttribute('aria-label', `Enlarge original question ${q.number}${q.images.length > 1 ? `, part ${i+1}` : ''}`);
    const image = document.createElement('img');
    image.src = `../${src}`;
    image.alt = `Original ${year}S IP question ${q.number}${q.images.length > 1 ? `, part ${i+1}` : ''}, including its diagrams and options`;
    image.decoding = 'async';
    link.append(image); refs.images.append(link);
  });
  refs.transcript.hidden = !q.preferOriginal;
  refs.transcript.open = false;
  refs.transcriptText.textContent = q.originalText;
  refs.options.replaceChildren();
  q.choices.forEach((choice, choiceIndex) => {
    const label = document.createElement('label');
    label.className = 'answer-choice';
    if (state.answers[state.current] === choiceIndex) label.classList.add('selected');
    if (state.submitted && choiceIndex === q.answer) label.classList.add('correct');
    if (state.submitted && state.answers[state.current] === choiceIndex && choiceIndex !== q.answer) label.classList.add('wrong');
    const input = document.createElement('input');
    input.type = 'radio'; input.name = 'answer'; input.value = String(choiceIndex);
    input.checked = state.answers[state.current] === choiceIndex;
    input.disabled = state.submitted;
    input.addEventListener('change', () => {
      state.answers[state.current] = choiceIndex;
      save();
      for (const item of refs.options.children) item.classList.toggle('selected', item.querySelector('input').checked);
      renderSession();
    });
    const letter = document.createElement('span'); letter.className = 'option-letter'; letter.textContent = letters[choiceIndex];
    const text = document.createElement('span'); text.textContent = choice;
    label.append(input, letter, text); refs.options.append(label);
  });
  refs.previous.disabled = state.current === 0;
  refs.next.disabled = state.current === questions.length - 1;
  refs.next.textContent = state.current === questions.length - 1 ? 'Last question ✓' : 'Next question →';
  renderFeedback();
  renderSession();
}

function renderFeedback() {
  refs.feedback.hidden = !state.submitted;
  refs.feedback.replaceChildren();
  if (!state.submitted) return;
  const q = questions[state.current];
  const result = status(state.current);
  refs.feedback.className = `question-feedback ${result === 'correct' ? 'is-correct' : result === 'incorrect' ? 'is-wrong' : 'is-unanswered'}`;
  const heading = document.createElement('h3');
  heading.textContent = result === 'correct' ? 'Correct!' : result === 'incorrect' ? 'Review this answer' : 'No answer selected';
  refs.feedback.append(heading, paragraph('Your answer:', answerText(q, state.answers[state.current])), paragraph('Correct answer:', answerText(q, q.answer)));
  const explanation = document.createElement('p'); explanation.className = 'feedback-explanation';
  explanation.textContent = q.explanation;
  refs.feedback.append(explanation);
  if (q.recallVisual) {
    const visual = document.createElement('figure'); visual.className = 'recall-solution';
    visual.setAttribute('role', 'img');
    visual.setAttribute('aria-label', 'Of ten actually defective products, five were detected and five were missed.');
    const boxes = document.createElement('div'); boxes.className = 'recall-boxes';
    for (let i = 0; i < 10; i++) {
      const box = document.createElement('span'); box.className = i < 5 ? 'detected' : 'missed';
      box.textContent = i < 5 ? '✓' : '×'; boxes.append(box);
    }
    const caption = document.createElement('figcaption'); caption.textContent = '5 detected + 5 missed = 10 actually defective';
    visual.append(boxes, caption); refs.feedback.append(visual);
  }
  if (q.steps && q.steps.length) {
    const steps = document.createElement('ol'); steps.className = 'solution-steps';
    q.steps.forEach(text => { const li = document.createElement('li'); li.textContent = text; steps.append(li); });
    refs.feedback.append(steps);
  }
  if (q.equation) {
    const equation = document.createElement('div'); equation.className = 'solution-equation'; equation.textContent = q.equation;
    refs.feedback.append(equation);
  }
  const source = document.createElement('p'); source.className = 'feedback-source';
  source.textContent = `Official answer key: ${q.source}`;
  refs.feedback.append(source);
}

function renderSession() {
  const answered = Object.keys(state.answers).length;
  refs.progress.textContent = `Question ${state.current + 1} of ${questions.length}`;
  refs.answered.textContent = `${answered} answered`;
  const percentage = Math.round(answered / questions.length * 100);
  refs.fill.style.width = `${percentage}%`;
  refs.progressBar.setAttribute('aria-valuenow', String(percentage));
  refs.grid.replaceChildren();
  questions.forEach((q, index) => {
    const button = document.createElement('button'); button.type = 'button'; button.textContent = String(q.number);
    if (index === state.current) { button.classList.add('current'); button.setAttribute('aria-current', 'step'); }
    if (state.answers[index] !== undefined) button.classList.add('answered');
    if (state.submitted) button.classList.add(status(index));
    button.setAttribute('aria-label', `Question ${q.number}, ${state.submitted ? status(index) : state.answers[index] !== undefined ? 'answered' : 'unanswered'}`);
    button.addEventListener('click', () => goTo(index, true)); refs.grid.append(button);
  });
  refs.help.textContent = state.submitted ? 'Select a number to see its answer and solution.' : 'Select a number to jump to that question.';
  refs.legend.replaceChildren();
  const legend = state.submitted ? [['correct','Correct'],['incorrect','Wrong'],['unanswered','Skipped']] : [['current','Current'],['answered','Answered']];
  legend.forEach(([name, text]) => {
    const item = document.createElement('span'); const icon = document.createElement('i'); icon.className = `legend-${name}`;
    item.append(icon, document.createTextNode(text)); refs.legend.append(item);
  });
  refs.hint.textContent = answered === questions.length ? 'All questions answered.' : `${questions.length - answered} unanswered; you can still submit.`;
  refs.submitRow.hidden = state.submitted;
  refs.results.hidden = !state.submitted;
  if (state.submitted) {
    const correct = questions.filter((q, i) => status(i) === 'correct').length;
    refs.score.textContent = `${Math.round(correct / questions.length * 100)}%`;
    refs.title.textContent = correct === 100 ? 'Perfect score.' : correct >= 75 ? 'Strong work.' : 'Keep practicing.';
    refs.summary.textContent = `${correct} of ${questions.length} correct · ${questions.length - answered} unanswered`;
    refs.missed.disabled = correct === questions.length;
  }
}

function goTo(index, scroll = false) {
  state.current = index; save(); renderQuestion();
  if (scroll) {
    (state.submitted ? refs.feedback : el('question-card')).scrollIntoView({ behavior: 'smooth', block: state.submitted ? 'center' : 'start' });
    refs.text.focus({ preventScroll: true });
  }
}

function reset() {
  state.answers = {}; state.current = 0; state.submitted = false;
  save(); renderQuestion();
  el('question-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function setMenu(open) {
  refs.menu.hidden = !open;
  refs.menuToggle.setAttribute('aria-expanded', String(open));
}

function setTheme(theme, persist = false) {
  const dark = theme === 'dark';
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  refs.theme.setAttribute('aria-pressed', String(dark));
  refs.theme.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  refs.theme.querySelector('.theme-icon').textContent = dark ? '☀' : '☾';
  refs.theme.querySelector('.theme-label').textContent = dark ? 'Light mode' : 'Dark mode';
  if (persist) { try { localStorage.setItem(THEME_KEY, theme); } catch { /* This view still uses the chosen theme. */ } }
}

refs.menu.querySelectorAll('a').forEach(link => {
  if (link.dataset.year === year) link.setAttribute('aria-current', 'page');
});
refs.menuToggle.addEventListener('click', () => setMenu(refs.menu.hidden));
document.addEventListener('click', event => {
  if (!refs.menu.contains(event.target) && !refs.menuToggle.contains(event.target)) setMenu(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !refs.menu.hidden) { setMenu(false); refs.menuToggle.focus(); }
});
refs.theme.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark', true));
refs.previous.addEventListener('click', () => { if (state.current > 0) goTo(state.current - 1, true); });
refs.next.addEventListener('click', () => { if (state.current < questions.length - 1) goTo(state.current + 1, true); });
refs.submit.addEventListener('click', () => {
  state.submitted = true;
  const missed = questions.findIndex((q, i) => status(i) !== 'correct');
  goTo(missed === -1 ? state.current : missed, true);
});
refs.missed.addEventListener('click', () => {
  for (let offset = 1; offset <= questions.length; offset++) {
    const index = (state.current + offset) % questions.length;
    if (status(index) !== 'correct') { goTo(index, true); return; }
  }
});
refs.retry.addEventListener('click', reset);
refs.reset.addEventListener('click', () => {
  if (Object.keys(state.answers).length && !window.confirm(`Clear saved answers for the ${year} quiz?`)) return;
  reset();
});
let theme = 'light';
try { theme = localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light'; } catch { /* Use light mode without storage. */ }
setTheme(theme);
load();
renderQuestion();

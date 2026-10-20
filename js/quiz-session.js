(function (app) {
  'use strict';
  const year = document.body.dataset.quizYear;
  const quiz = window.ITPEC_QUIZZES[year];
  const questions = quiz.questions;
  const sessionCode = quiz.sessionCode || 'S';
  const PROGRESS_STORAGE_KEY = `itpec-ip-${year}${sessionCode}-progress-v1`;
  const THEME_STORAGE_KEY = 'itpec-practice-theme-v1';
  const ANSWER_LETTERS = ['A', 'B', 'C', 'D'];
  const state = { answers: {}, current: 0, submitted: false };
  const getElement = (id) => document.getElementById(id);
  const elements = {
    menuToggle: getElement('quiz-menu-toggle'),
    menuPanel: getElement('quiz-menu-panel'),
    themeToggle: getElement('theme-toggle'),
    saveLabel: getElement('save-label'),
    resetButton: getElement('reset-button'),
    questionNumber: getElement('question-number'),
    questionSource: getElement('source-label'),
    questionText: getElement('question-text'),
    sourceQuestion: getElement('source-question'),
    sourceImages: getElement('source-images'),
    imageViewer: getElement('image-viewer'),
    imageViewerTitle: getElement('image-viewer-title'),
    imageViewerImage: getElement('image-viewer-image'),
    imageViewerScroll: getElement('image-viewer-scroll'),
    imageViewerZoom: getElement('image-viewer-zoom'),
    imageViewerClose: getElement('image-viewer-close'),
    transcript: getElement('question-transcript'),
    transcriptText: getElement('transcript-text'),
    answerOptions: getElement('answer-options'),
    answerFeedback: getElement('question-feedback'),
    previousButton: getElement('previous-button'),
    nextButton: getElement('next-button'),
    progressCount: getElement('progress-count'),
    answeredCount: getElement('answered-count'),
    progressFill: getElement('progress-fill'),
    progressBar: document.querySelector('.progress-track'),
    questionGrid: getElement('question-grid'),
    questionLegend: getElement('question-legend'),
    navigatorHelp: getElement('navigator-help'),
    submitButton: getElement('submit-button'),
    submitRow: getElement('submit-row'),
    submitHint: getElement('submit-hint'),
    resultsPanel: getElement('results-panel'),
    resultScore: getElement('result-score'),
    resultTitle: getElement('result-title'),
    resultSummary: getElement('result-summary'),
    missedButton: getElement('missed-button'),
    retryButton: getElement('retry-button'),
  };

  function saveSession() {
    try {
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(state));
      elements.saveLabel.textContent = `Progress saved for ${year}`;
    } catch {
      elements.saveLabel.textContent = 'Progress stays in this tab';
    }
  }

  function restoreSession() {
    try {
      const stored = JSON.parse(localStorage.getItem(PROGRESS_STORAGE_KEY) || '{}');
      if (stored.answers && typeof stored.answers === 'object') {
        for (const [index, answer] of Object.entries(stored.answers)) {
          if (
            /^\d+$/.test(index) &&
            +index < questions.length &&
            Number.isInteger(answer) &&
            answer >= 0 &&
            answer < 4
          ) {
            state.answers[index] = answer;
          }
        }
      }
      if (
        Number.isInteger(stored.current) &&
        stored.current >= 0 &&
        stored.current < questions.length
      )
        state.current = stored.current;
      state.submitted = stored.submitted === true;
    } catch {
      /* Invalid or unavailable storage starts a fresh session. */
    }
  }

  function getAnswerStatus(index) {
    if (state.answers[index] === undefined) return 'unanswered';
    return state.answers[index] === questions[index].answer ? 'correct' : 'incorrect';
  }

  function formatAnswer(question, index) {
    if (index === undefined) return 'No answer selected';
    const choice = question.choices[index];
    return choice === `Option ${ANSWER_LETTERS[index]}`
      ? ANSWER_LETTERS[index]
      : `${ANSWER_LETTERS[index]}. ${choice}`;
  }

  function createLabeledParagraph(label, text) {
    const paragraphElement = document.createElement('p');
    const strong = document.createElement('strong');
    strong.textContent = `${label} `;
    paragraphElement.append(strong, document.createTextNode(text));
    return paragraphElement;
  }
  Object.assign(app, {
    year,
    sessionCode,
    quiz,
    questions,
    state,
    elements,
    ANSWER_LETTERS,
    getElement,
    THEME_STORAGE_KEY,
    saveSession,
    restoreSession,
    getAnswerStatus,
    formatAnswer,
    createLabeledParagraph,
  });
})((window.IPreview = window.IPreview || {}));

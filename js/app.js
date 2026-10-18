(function (app) {
  'use strict';
  const { year, questions, state, elements, getElement } = app;

  function navigateToQuestion(index, scroll = false) {
    state.current = index;
    app.saveSession();
    app.renderQuestion();
    if (scroll) {
      (state.submitted ? elements.answerFeedback : getElement('question-card')).scrollIntoView({
        behavior: 'smooth',
        block: state.submitted ? 'center' : 'start',
      });
      elements.questionText.focus({ preventScroll: true });
    }
  }

  function resetQuiz() {
    state.answers = {};
    state.current = 0;
    state.submitted = false;
    app.saveSession();
    app.renderQuestion();
    getElement('question-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  Object.assign(app, { navigateToQuestion, resetQuiz });
  elements.previousButton.addEventListener('click', () => {
    if (state.current > 0) app.navigateToQuestion(state.current - 1, true);
  });
  elements.nextButton.addEventListener('click', () => {
    if (state.current < questions.length - 1) app.navigateToQuestion(state.current + 1, true);
  });
  elements.submitButton.addEventListener('click', () => {
    state.submitted = true;
    const missed = questions.findIndex(
      (question, index) => app.getAnswerStatus(index) !== 'correct',
    );
    app.navigateToQuestion(missed === -1 ? state.current : missed, true);
  });
  elements.missedButton.addEventListener('click', () => {
    for (let offset = 1; offset <= questions.length; offset++) {
      const index = (state.current + offset) % questions.length;
      if (app.getAnswerStatus(index) !== 'correct') {
        app.navigateToQuestion(index, true);
        return;
      }
    }
  });
  elements.retryButton.addEventListener('click', app.resetQuiz);
  elements.resetButton.addEventListener('click', () => {
    if (
      Object.keys(state.answers).length &&
      !window.confirm(`Clear saved answers for the ${year} quiz?`)
    )
      return;
    app.resetQuiz();
  });

  app.restoreSession();
  app.renderQuestion();
})((window.IPreview = window.IPreview || {}));

(function (app) {
  'use strict';
  const { questions, state, elements } = app;

  function renderSession() {
    const answered = Object.keys(state.answers).length;
    elements.progressCount.textContent = `Question ${state.current + 1} of ${questions.length}`;
    elements.answeredCount.textContent = `${answered} answered`;
    const percentage = Math.round((answered / questions.length) * 100);
    elements.progressFill.style.width = `${percentage}%`;
    elements.progressBar.setAttribute('aria-valuenow', String(percentage));
    elements.questionGrid.replaceChildren();
    questions.forEach((question, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = String(question.number);
      if (index === state.current) {
        button.classList.add('current');
        button.setAttribute('aria-current', 'step');
      }
      if (state.answers[index] !== undefined) button.classList.add('answered');
      if (state.submitted) button.classList.add(app.getAnswerStatus(index));
      button.setAttribute(
        'aria-label',
        `Question ${question.number}, ${state.submitted ? app.getAnswerStatus(index) : state.answers[index] !== undefined ? 'answered' : 'unanswered'}`,
      );
      button.addEventListener('click', () => app.navigateToQuestion(index, true));
      elements.questionGrid.append(button);
    });
    elements.navigatorHelp.textContent = state.submitted
      ? 'Select a number to see its answer and solution.'
      : 'Select a number to jump to that question.';
    elements.questionLegend.replaceChildren();
    const legend = state.submitted
      ? [
          ['correct', 'Correct'],
          ['incorrect', 'Wrong'],
          ['unanswered', 'Skipped'],
        ]
      : [
          ['current', 'Current'],
          ['answered', 'Answered'],
        ];
    legend.forEach(([name, text]) => {
      const item = document.createElement('span');
      const icon = document.createElement('i');
      icon.className = `legend-${name}`;
      item.append(icon, document.createTextNode(text));
      elements.questionLegend.append(item);
    });
    elements.submitHint.textContent =
      answered === questions.length
        ? 'All questions answered.'
        : `${questions.length - answered} unanswered; you can still submit.`;
    elements.submitRow.hidden = state.submitted;
    elements.resultsPanel.hidden = !state.submitted;
    if (state.submitted) {
      const correct = questions.filter(
        (question, index) => app.getAnswerStatus(index) === 'correct',
      ).length;
      elements.resultScore.textContent = `${Math.round((correct / questions.length) * 100)}%`;
      elements.resultTitle.textContent =
        correct === 100 ? 'Perfect score.' : correct >= 75 ? 'Strong work.' : 'Keep practicing.';
      elements.resultSummary.textContent = `${correct} of ${questions.length} correct · ${questions.length - answered} unanswered`;
      elements.missedButton.disabled = correct === questions.length;
    }
  }
  Object.assign(app, { renderSession });
})((window.IPreview = window.IPreview || {}));

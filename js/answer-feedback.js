(function (app) {
  'use strict';
  const { questions, state, elements } = app;

  function renderAnswerFeedback() {
    elements.answerFeedback.hidden = !state.submitted;
    elements.answerFeedback.replaceChildren();
    if (!state.submitted) return;
    const question = questions[state.current];
    const result = app.getAnswerStatus(state.current);
    elements.answerFeedback.className = `question-feedback ${result === 'correct' ? 'is-correct' : result === 'incorrect' ? 'is-wrong' : 'is-unanswered'}`;
    const heading = document.createElement('h3');
    heading.textContent =
      result === 'correct'
        ? 'Correct!'
        : result === 'incorrect'
          ? 'Review this answer'
          : 'No answer selected';
    elements.answerFeedback.append(
      heading,
      app.createLabeledParagraph(
        'Your answer:',
        app.formatAnswer(question, state.answers[state.current]),
      ),
      app.createLabeledParagraph('Correct answer:', app.formatAnswer(question, question.answer)),
    );
    const explanation = document.createElement('p');
    explanation.className = 'feedback-explanation';
    explanation.textContent = question.explanation;
    elements.answerFeedback.append(explanation);
    if (question.recallVisual) {
      const visual = document.createElement('figure');
      visual.className = 'recall-solution';
      visual.setAttribute('role', 'img');
      visual.setAttribute(
        'aria-label',
        'Of ten actually defective products, five were detected and five were missed.',
      );
      const boxes = document.createElement('div');
      boxes.className = 'recall-boxes';
      for (let index = 0; index < 10; index++) {
        const box = document.createElement('span');
        box.className = index < 5 ? 'detected' : 'missed';
        box.textContent = index < 5 ? '✓' : '×';
        boxes.append(box);
      }
      const caption = document.createElement('figcaption');
      caption.textContent = '5 detected + 5 missed = 10 actually defective';
      visual.append(boxes, caption);
      elements.answerFeedback.append(visual);
    }
    if (question.steps && question.steps.length) {
      const steps = document.createElement('ol');
      steps.className = 'solution-steps';
      question.steps.forEach((text) => {
        const li = document.createElement('li');
        li.textContent = text;
        steps.append(li);
      });
      elements.answerFeedback.append(steps);
    }
    if (question.equation) {
      const equation = document.createElement('div');
      equation.className = 'solution-equation';
      equation.textContent = question.equation;
      elements.answerFeedback.append(equation);
    }
    const source = document.createElement('p');
    source.className = 'feedback-source';
    source.textContent = `Official answer key: ${question.source}`;
    elements.answerFeedback.append(source);
  }
  Object.assign(app, { renderAnswerFeedback });
})((window.IPreview = window.IPreview || {}));

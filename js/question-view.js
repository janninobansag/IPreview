(function (app) {
  'use strict';
  const { year, questions, state, elements, ANSWER_LETTERS } = app;

  function renderQuestion() {
    const question = questions[state.current];
    elements.questionNumber.textContent = `QUESTION ${String(question.number).padStart(2, '0')}`;
    elements.questionSource.textContent = question.source;
    elements.questionText.textContent = question.preferOriginal
      ? 'Choose the correct answer.'
      : question.text;
    elements.sourceQuestion.hidden = !question.images.length;
    elements.sourceQuestion.open = question.preferOriginal;
    elements.sourceImages.replaceChildren();
    question.images.forEach((src, index) => {
      const link = document.createElement('a');
      link.href = `../${src}`;
      link.target = '_blank';
      link.rel = 'noopener';
      link.setAttribute(
        'aria-label',
        `Enlarge original question ${question.number}${question.images.length > 1 ? `, part ${index + 1}` : ''}`,
      );
      const image = document.createElement('img');
      image.src = `../${src}`;
      image.alt = `Original ${year}S IP question ${question.number}${question.images.length > 1 ? `, part ${index + 1}` : ''}, including its diagrams and options`;
      image.decoding = 'async';
      link.append(image);
      elements.sourceImages.append(link);
    });
    elements.transcript.hidden = !question.preferOriginal;
    elements.transcript.open = false;
    elements.transcriptText.textContent = question.originalText;
    elements.answerOptions.replaceChildren();
    question.choices.forEach((choice, choiceIndex) => {
      const label = document.createElement('label');
      label.className = 'answer-choice';
      if (state.answers[state.current] === choiceIndex) label.classList.add('selected');
      if (state.submitted && choiceIndex === question.answer) label.classList.add('correct');
      if (
        state.submitted &&
        state.answers[state.current] === choiceIndex &&
        choiceIndex !== question.answer
      )
        label.classList.add('wrong');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'answer';
      input.value = String(choiceIndex);
      input.checked = state.answers[state.current] === choiceIndex;
      input.disabled = state.submitted;
      input.addEventListener('change', () => {
        state.answers[state.current] = choiceIndex;
        app.saveSession();
        for (const item of elements.answerOptions.children)
          item.classList.toggle('selected', item.querySelector('input').checked);
        app.renderSession();
      });
      const letter = document.createElement('span');
      letter.className = 'option-letter';
      letter.textContent = ANSWER_LETTERS[choiceIndex];
      const text = document.createElement('span');
      text.textContent = choice;
      label.append(input, letter, text);
      elements.answerOptions.append(label);
    });
    elements.previousButton.disabled = state.current === 0;
    elements.nextButton.disabled = state.current === questions.length - 1;
    elements.nextButton.textContent =
      state.current === questions.length - 1 ? 'Last question ✓' : 'Next question →';
    app.renderAnswerFeedback();
    app.renderSession();
  }
  Object.assign(app, { renderQuestion });
})((window.IPreview = window.IPreview || {}));

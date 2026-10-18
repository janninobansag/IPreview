# ITPEC Practice Quiz

A static IT Passport practice site with 100 questions each for the 2025, 2024, and 2023 papers. The home page forwards to the 2025 quiz.

## Folder layout

- `html/` contains the three year pages and the 2025 home page.
- `css/` contains the site styles.
- `js/` contains the quiz behavior and question data.
- `questions/` contains the diagrams used by the quizzes.
- `index.html` at the repository root forwards visitors to `html/index.html` so static hosts can use the site as their home page.

## Deploy with Vercel

Import this GitHub repository in Vercel. Use **Other** as the Framework Preset, leave the Build Command blank, and serve the repository root.

## Run locally

Open `index.html` in a browser. No server or build step is required.

Answers and progress are stored in the visitor's browser. Correct answers are included in the client-side quiz data, as expected for a self-study practice reviewer. Every question has an ITPEC source citation; study explanations are custom reviewer content.

# IPreview

ITPEC IT Passport practice quizzes with 100 questions each for April 2025, 2024
and 2023. The root home page opens the 2025 quiz.

## Develop

- Open index.html for a local preview, or serve the project with a static server.
- Edit pages in html/, styles in css/, and browser behavior in js/.
- Shared page markup is generated from tools/templates/quiz-page.html.
- Browser question banks are in data/quizzes/; editable source content is in data/source/.
- Documentation and reference PDFs belong in doc/. It contains no application code.

Run npm install once to install the development formatter and test library.

| Command              | Purpose                                                |
| -------------------- | ------------------------------------------------------ |
| npm run build        | Build the deployable website into dist/                |
| npm test             | Build and verify quiz behavior and deployment contents |
| npm run format       | Format the application, tools and documentation        |
| npm run format:check | Check formatting                                       |
| npm run package      | Create artifacts/ipreview-tiiny-host.zip               |

After changing question source data or shared page markup, run
python tools/compile_quizzes.py and npm run format.

## Deploy on Vercel

Import this repository and keep its Root Directory at the repository root.
The included vercel.json sets the build command and publishes only dist/.
The production build uses Node's built-in libraries and needs no package installation.

For Tiiny.host, upload artifacts/ipreview-tiiny-host.zip after npm run package.

## Quiz behavior

Progress is saved separately for each year in the visitor's browser.
The question map links to inline explanations after grading. Correct answers
are included in the browser data because this is a self-study reviewer.
Question citations link the material to ITPEC's past papers; study explanations
are added reviewer content.

See [project architecture](doc/architecture.md) for module responsibilities,
naming conventions and the deployment boundary.

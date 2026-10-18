# Project structure

The project root is the single editable source for the website.

| Location      | Purpose                                                          | Published by Vercel    |
| ------------- | ---------------------------------------------------------------- | ---------------------- |
| html/         | Quiz pages for 2025, 2024 and 2023                               | Yes                    |
| css/          | Styles grouped by component, theme and screen layout             | Yes                    |
| js/           | Browser behavior grouped by responsibility                       | Yes                    |
| data/quizzes/ | One browser question bank per year                               | Yes                    |
| questions/    | Source diagrams referenced by the question banks                 | Referenced images only |
| data/source/  | Editable imported questions, explanations and solution overrides | No                     |
| tools/        | Build, packaging and optional PDF-import scripts                 | No                     |
| tests/        | Quiz behavior and deployment checks                              | No                     |
| doc/          | Markdown documentation and local reference PDFs                  | No                     |
| artifacts/    | Generated Tiiny.host ZIP files                                   | No                     |
| .cache/       | Working extracts and the original project backup                 | No                     |
| dist/         | Generated deployment output                                      | This is the deployment |

## Browser modules

- quiz-session.js owns saved answers, progress validation and answer status.
- question-view.js renders the question, diagrams, transcript and choices.
- answer-feedback.js renders explanations, equations and worked solutions.
- session-view.js renders the question map, progress and score.
- interface-controls.js owns the year menu and remembered theme.
- app.js connects navigation, submission and restart actions.
- pwa-controls.js handles installation, offline readiness and download retries.

Each module uses the IPreview namespace instead of adding unrelated globals.
Classic browser scripts preserve local file preview without a development server.
The question-bank script loads first, followed by session state, views, interface
controls and the app entry point. Existing storage keys are preserved so saved
answers and theme preferences survive the refactor.

## Naming and file size

Browser script and CSS filenames use kebab-case. JavaScript functions and variables
use camelCase, and constants use UPPER_SNAKE_CASE. Python tools use snake_case.
Year page filenames remain 2025.html, 2024.html and 2023.html to preserve links.
Files are split at responsibility boundaries, usually below 250 lines. Static
question data may be longer because each year is a cohesive dataset.

## Editing and rebuilding

Edit CSS and JavaScript directly in their root folders. Edit shared page markup
in tools/templates/quiz-page.html. Question content is maintained in data/source/.
After changing question content or the page template, run Python with
tools/compile_quizzes.py, then run npm run format.

Run npm test to build the site and verify all 300 questions, grading, navigation,
saved progress, dark mode and local asset links. Run npm run format:check to
check formatting. Run npm run package to build artifacts/ipreview-tiiny-host.zip.

The optional PDF importer needs pdfplumber, pypdf, Pillow and a PDF rendering
backend. It reads doc/exam-papers/ and doc/answer-keys/, and writes intermediate
extracts under .cache/extracted-questions/.

## Deployment boundary

### Offline application

manifest.webmanifest defines the installable IPreview app. icons/ contains PNG
install icons based on the existing four-square brand; tools/generate_icons.py
can regenerate them using Pillow.

tools/build-offline.cjs creates dist/service-worker.js from
tools/templates/service-worker.js. It includes every deployed quiz, diagram,
stylesheet, script and icon in a precache list. A content hash versions the cache
whenever a deployed file or worker changes. Installation completes only after
all assets download; failed downloads delete the partial cache. The worker serves
known assets from its own version's cache, supports root and subdirectory hosting,
and leaves external URLs alone. Google Fonts are optional; device fonts work offline.

Updates wait for existing tabs to close before activating, then remove only
IPreview caches for that scope. Saved answers remain in the existing localStorage
keys. The UI verifies cached files before displaying Ready offline. Browser storage
can be cleared by the user, so offline readiness is checked on each launch.

PWA testing requires the built dist/ directory served through HTTPS or localhost.
Run npm test for manifest, asset completeness, worker lifecycle and install controls.

Vercel runs the Node build tool and publishes only dist/, as configured in
vercel.json. The build copies an explicit list of browser asset directories and
the referenced question images. Documentation, tooling, tests, PDFs, source
question data, dependencies and ZIP files are not copied into dist/.
The deployment check rejects unexpected files or broken local references.

See [Vercel configuration](https://vercel.com/docs/project-configuration/vercel-json)
for the buildCommand and outputDirectory settings.

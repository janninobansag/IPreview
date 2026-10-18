# Repository Guidelines

## Project Structure & Module Organization

- `html/` contains year pages; edit shared markup in `tools/templates/quiz-page.html`.
- `js/` groups browser behavior by responsibility under the `IPreview` namespace. `css/styles.css` imports component, theme, and responsive styles; preserve their cascade order.
- `data/source/` holds editable questions and explanations; `data/quizzes/` contains generated browser banks. `questions/` stores diagrams.
- `tools/` contains build and import scripts; `tests/` contains automated checks. Keep documentation and reference PDFs in `doc/`, and working extracts in `.cache/`.

## Build, Test, and Development Commands

- `npm ci`: install the locked development dependencies.
- Open `index.html` directly, or run `python -m http.server 8000` from the repository root for local preview.
- `npm run build`: generate the deployable site in `dist/`.
- `npm test`: build, then run quiz behavior and deployment checks.
- `npm run format` / `npm run format:check`: apply or verify Prettier formatting.
- `python tools/compile_quizzes.py`: regenerate year banks and pages after editing source data or the template; run formatting afterward.
- `npm run package`: build `artifacts/ipreview-tiiny-host.zip`.

## Coding Style & Naming Conventions

Use UTF-8, LF endings, two-space indentation, and four spaces for Python. Prettier specifies a 100-character print width, single quotes, and trailing commas. Use kebab-case for browser filenames, camelCase for JavaScript identifiers, UPPER_SNAKE_CASE for constants, and snake_case for Python tools.

Keep modules focused and preferably below 250 lines; shorter files are fine. Cohesive question datasets and generated lockfiles may exceed this limit.

## Testing Guidelines

Tests use Node's strict assertions and jsdom. Name tests `tests/*.test.cjs` and add new test files to the `npm test` script. Cover changed behavior, including grading, navigation, saved progress, dark mode, and asset references. Preserve the checks for all 300 questions and deployment exclusions. No numeric coverage threshold is configured.

## Commit & Pull Request Guidelines

Follow the existing concise, imperative commit style, such as `Organize static site assets`. Keep each commit focused.

PRs should explain the change, reference relevant issues, and report verification commands and results. Include mobile and light/dark screenshots for visible UI changes.

## Deployment Boundaries

Vercel publishes only `dist/` through `vercel.json`. Never put deployable code in `doc/` or hand-edit generated build output. Preserve existing year-page URLs, question citations, and browser-storage keys.

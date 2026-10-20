"""Compile editable question data and page templates into browser assets."""
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]
SOURCE_DATA = ROOT / "data" / "source"
QUIZ_DATA = ROOT / "data" / "quizzes"
PAGE_DIRECTORY = ROOT / "html"
TEMPLATE = ROOT / "tools" / "templates" / "quiz-page.html"


def load_question_bank():
    bank = json.loads((SOURCE_DATA / "paper-bank.json").read_text(encoding="utf-8"))
    solutions = json.loads(
        (SOURCE_DATA / "worked-solutions.json").read_text(encoding="utf-8")
    )
    for year, quiz in bank.items():
        explanations = (SOURCE_DATA / f"explanations-{year}.txt").read_text(
            encoding="utf-8"
        ).splitlines()
        if len(explanations) != len(quiz["questions"]):
            raise ValueError(f"Explanation count does not match questions for {year}")
        for question, explanation in zip(quiz["questions"], explanations):
            if not explanation.strip():
                raise ValueError(f"Missing explanation for {year} Q{question['number']}")
            question["explanation"] = explanation
            question.update(solutions.get(year, {}).get(str(question["number"]), {}))
            if question["preferOriginal"]:
                question["choices"] = [f"Option {letter}" for letter in "ABCD"]
            else:
                question["images"] = []
    return bank


def render_quiz_page(template, year, quiz):
    month = quiz["session"].split()[0]
    values = {
        "{{YEAR}}": year,
        "{{SESSION_CODE}}": quiz.get("sessionCode", "S"),
        "{{SESSION_MONTH}}": month,
        "{{SESSION_MONTH_UPPER}}": month.upper(),
    }
    for token, value in values.items():
        template = template.replace(token, value)
    return template


def compile_quizzes():
    bank = load_question_bank()
    template = TEMPLATE.read_text(encoding="utf-8")
    QUIZ_DATA.mkdir(parents=True, exist_ok=True)
    PAGE_DIRECTORY.mkdir(parents=True, exist_ok=True)
    for year, quiz in bank.items():
        script = (
            "window.ITPEC_QUIZZES = window.ITPEC_QUIZZES || {};\n"
            f'window.ITPEC_QUIZZES["{year}"] = '
            + json.dumps(quiz, ensure_ascii=False, indent=2)
            + ";\n"
        )
        (QUIZ_DATA / f"quiz-{year}.js").write_text(script, encoding="utf-8", newline="\n")
        (PAGE_DIRECTORY / f"{year}.html").write_text(
            render_quiz_page(template, year, quiz), encoding="utf-8", newline="\n"
        )
    (PAGE_DIRECTORY / "index.html").write_text(
        render_quiz_page(template, "2025", bank["2025"]), encoding="utf-8", newline="\n"
    )
    print(f"Compiled {len(bank)} question banks and {len(bank) + 1} quiz pages.")


if __name__ == "__main__":
    compile_quizzes()

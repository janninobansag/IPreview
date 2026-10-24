"""Import the selected ITPEC IP papers and their official answer keys."""
from pathlib import Path
import json
import re
import sys
import pdfplumber
from pypdf import PdfReader
from PIL import Image, ImageChops

ROOT = Path(__file__).resolve().parents[1]
EXAM_PAPER_DIRECTORY = ROOT / 'doc' / 'exam-papers'
ANSWER_KEY_DIRECTORY = ROOT / 'doc' / 'answer-keys'
EXTRACT_DIRECTORY = ROOT / '.cache' / 'extracted-questions'
EXTRACT_DIRECTORY.mkdir(parents=True, exist_ok=True)
QUIZ_YEARS = ['2026', '2025', '2024', '2023', '2022']
EXAM_SESSIONS = {
    year: ('A', 'October') if year == '2022' else ('S', 'April')
    for year in QUIZ_YEARS
}


def normalize_whitespace(text):
    return re.sub(r'\s+', ' ', text).strip()


def import_year(year):
    session_code, _ = EXAM_SESSIONS[year]
    key_file = next(ANSWER_KEY_DIRECTORY.glob(f'{year}{session_code}_IP_Answer*.pdf'))
    key_text = '\n'.join(page.extract_text() for page in PdfReader(key_file).pages)
    answers = {int(number): ord(answer) - 97 for number, answer in re.findall(r'\b(\d{1,3})\s+([a-d])\b', key_text)}
    assert set(answers) == set(range(1, 101)), (year, 'Incomplete answer key')
    image_dir = ROOT / 'questions' / year
    image_dir.mkdir(parents=True, exist_ok=True)
    questions = []
    paper_filename = (
        f'{year}{session_code}_IP_Question.pdf'
        if year == '2022'
        else f'{year}S_IP_Questions.pdf'
    )
    page_bottom = 740 if year == '2022' else 792
    with pdfplumber.open(EXAM_PAPER_DIRECTORY / paper_filename) as pdf:
        headings = []
        for page_index, page in enumerate(pdf.pages[2:], 2):
            for word in page.extract_words():
                if word['x0'] < 105 and re.fullmatch(r'Q\d{1,3}\.?', word['text']):
                    number = int(re.search(r'\d+', word['text'])[0])
                    headings.append((number, page_index, word['top']))
        assert [heading[0] for heading in headings] == list(range(1, 101)), (year, headings)
        for question_index, (number, page_index, top) in enumerate(headings):
            next_head = headings[question_index + 1] if question_index < 99 else None
            end = page_bottom
            if next_head and next_head[1] == page_index:
                end = min(next_head[2] - 13, page_bottom)
            regions = [(page_index, top - 5, end)]
            if next_head and next_head[1] > page_index:
                for extra in range(page_index + 1, next_head[1] + 1):
                    end = min(next_head[2] - 13, page_bottom) if extra == next_head[1] else page_bottom
                    if end > 80:
                        regions.append((extra, 60, end))
            texts, images, graphic_count = [], [], 0
            for segment, (page_index, y0, y1) in enumerate(regions):
                page = pdf.pages[page_index]
                crop = page.crop((55, y0, 555, y1))
                text = crop.extract_text() or ''
                section_heading = re.fullmatch(
                    r'Answer questions Q\d+ through Q\d+ concerning [^.]+\.',
                    normalize_whitespace(text),
                )
                if not text.strip() or section_heading:
                    continue
                texts.append(text)
                graphic_count += sum(1 for obj in page.lines + page.rects + page.curves + page.images
                                     if obj.get('top', -1) >= y0 and obj.get('bottom', 9999) <= y1
                                     and (obj.get('width', 0) > 3 or obj.get('height', 0) > 3))
                image = crop.to_image(resolution=144, antialias=True).original.convert('RGB')
                difference = ImageChops.difference(image, Image.new('RGB', image.size, 'white'))
                bbox = difference.point(lambda v: 255 if v > 40 else 0).getbbox()
                if bbox:
                    image = image.crop((max(0, bbox[0]-12), max(0, bbox[1]-12),
                                        min(image.width, bbox[2]+12), min(image.height, bbox[3]+12)))
                filename = f'q{number:03d}-{segment+1}.webp'
                image.save(image_dir / filename, 'WEBP', lossless=True, method=6)
                images.append(f'questions/{year}/{filename}')
            raw_text = '\n'.join(texts)
            raw_text = re.sub(r'^Q\d{1,3}\.?\s*', '', raw_text)
            markers = list(re.finditer(r'(?<!\w)([a-d])\)', raw_text))
            ordered = len(markers) == 4 and ''.join(choice_match[1] for choice_match in markers) == 'abcd'
            question_text = raw_text[:markers[0].start()] if ordered else raw_text
            choices = []
            if ordered:
                for choice_index, choice_match in enumerate(markers):
                    end = markers[choice_index+1].start() if choice_index < 3 else len(raw_text)
                    choices.append(normalize_whitespace(raw_text[choice_match.end():end]))
            clean_choices = ordered and all(choice_text and '\ufffd' not in choice_text and '(cid:' not in choice_text for choice_text in choices)
            if not clean_choices:
                choices = [f'Option {letter}' for letter in 'ABCD']
            prefer_original = (
                year == '2022' or graphic_count > 0 or not clean_choices
                or '\ufffd' in question_text or '(cid:' in question_text
            )
            questions.append({
                'number': number,
                'text': normalize_whitespace(question_text),
                'choices': choices,
                'answer': answers[number],
                'source': f'({year}{session_code}, IP, Q{number})',
                'images': images,
                'originalText': raw_text,
                'preferOriginal': prefer_original,
                'explanation': '',
            })
    print(year, len(questions), 'questions;', sum(question['preferOriginal'] for question in questions), 'use source layout')
    (EXTRACT_DIRECTORY / f'{year}-extracted.json').write_text(json.dumps(questions, ensure_ascii=False, indent=2), encoding='utf-8', newline='\n')
    (EXTRACT_DIRECTORY / f'{year}-study.txt').write_text('\n\n'.join(
        f"Q{question['number']} [Answer {'ABCD'[question['answer']]}]\n{question['originalText']}" for question in questions), encoding='utf-8', newline='\n')
    return questions


if __name__ == '__main__':
    bank_path = ROOT / 'data/source/paper-bank.json'
    bank = json.loads(bank_path.read_text(encoding='utf-8')) if bank_path.exists() else {}
    for year in sys.argv[1:] or QUIZ_YEARS:
        session_code, month = EXAM_SESSIONS[year]
        bank[year] = {
            'year': year, 'session': f'{month} {year}', 'sessionCode': session_code,
            'questions': import_year(year),
        }
    bank_path.write_text(json.dumps(bank, ensure_ascii=False, indent=2), encoding='utf-8', newline='\n')

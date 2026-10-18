"""Import the three April ITPEC IP papers and their official answer keys."""
from pathlib import Path
import json
import re
import pdfplumber
from pypdf import PdfReader
from PIL import Image, ImageChops

ROOT = Path(__file__).resolve().parents[1]
EXAM_PAPER_DIRECTORY = ROOT / 'doc' / 'exam-papers'
ANSWER_KEY_DIRECTORY = ROOT / 'doc' / 'answer-keys'
EXTRACT_DIRECTORY = ROOT / '.cache' / 'extracted-questions'
EXTRACT_DIRECTORY.mkdir(parents=True, exist_ok=True)
QUIZ_YEARS = ['2025', '2024', '2023']


def normalize_whitespace(text):
    return re.sub(r'\s+', ' ', text).strip()


def import_year(year):
    key_file = next(ANSWER_KEY_DIRECTORY.glob(f'{year}S_IP_Answer*.pdf'))
    key_text = '\n'.join(page.extract_text() for page in PdfReader(key_file).pages)
    answers = {int(number): ord(answer) - 97 for number, answer in re.findall(r'\b(\d{1,3})\s+([a-d])\b', key_text)}
    assert set(answers) == set(range(1, 101)), (year, 'Incomplete answer key')
    image_dir = ROOT / 'questions' / year
    image_dir.mkdir(parents=True, exist_ok=True)
    questions = []
    with pdfplumber.open(EXAM_PAPER_DIRECTORY / f'{year}S_IP_Questions.pdf') as pdf:
        headings = []
        for page_index, page in enumerate(pdf.pages[2:], 2):
            for word in page.extract_words():
                if word['x0'] < 105 and re.fullmatch(r'Q\d{1,3}\.?', word['text']):
                    number = int(re.search(r'\d+', word['text'])[0])
                    headings.append((number, page_index, word['top']))
        assert [heading[0] for heading in headings] == list(range(1, 101)), (year, headings)
        for question_index, (number, page_index, top) in enumerate(headings):
            next_head = headings[question_index + 1] if question_index < 99 else None
            regions = [(page_index, top - 5, next_head[2] - 13 if next_head and next_head[1] == page_index else 792)]
            if next_head and next_head[1] > page_index:
                for extra in range(page_index + 1, next_head[1] + 1):
                    end = next_head[2] - 13 if extra == next_head[1] else 792
                    if end > 80:
                        regions.append((extra, 60, end))
            texts, images, graphic_count = [], [], 0
            for segment, (page_index, y0, y1) in enumerate(regions):
                page = pdf.pages[page_index]
                crop = page.crop((55, y0, 555, y1))
                text = crop.extract_text() or ''
                if not text.strip():
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
            prefer_original = graphic_count > 0 or not clean_choices or '\ufffd' in question_text or '(cid:' in question_text
            questions.append({
                'number': number,
                'text': normalize_whitespace(question_text),
                'choices': choices,
                'answer': answers[number],
                'source': f'({year}S, IP, Q{number})',
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
    bank = {year: {'year': year, 'session': f'April {year}', 'questions': import_year(year)} for year in QUIZ_YEARS}
    (ROOT / 'data/source/paper-bank.json').write_text(json.dumps(bank, ensure_ascii=False, indent=2), encoding='utf-8', newline='\n')

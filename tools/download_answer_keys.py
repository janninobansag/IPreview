"""Download official answer-key PDFs into the local reference-document folder."""
from pathlib import Path
import io
import urllib.request
import zipfile

ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIRECTORY = ROOT / "doc" / "answer-keys"
QUIZ_YEARS = ("2025", "2024", "2023")


def download_answer_keys():
    OUTPUT_DIRECTORY.mkdir(parents=True, exist_ok=True)
    for year in QUIZ_YEARS:
        url = f"https://itpec.org/pastexamqa/ip/{year}S_IP.zip"
        with urllib.request.urlopen(url, timeout=45) as response:
            archive_data = response.read()
        with zipfile.ZipFile(io.BytesIO(archive_data)) as archive:
            for name in archive.namelist():
                if "answer" in name.lower() and name.lower().endswith(".pdf"):
                    target = OUTPUT_DIRECTORY / Path(name).name
                    target.write_bytes(archive.read(name))
                    print(target.name, target.stat().st_size)


if __name__ == "__main__":
    download_answer_keys()

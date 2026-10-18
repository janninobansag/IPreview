"""Regenerate install icons from the site's four-square brand mark (requires Pillow)."""
from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
ICON_DIRECTORY = ROOT / "icons"


def generate_icons():
    ICON_DIRECTORY.mkdir(exist_ok=True)
    size = 2048
    image = Image.new("RGB", (size, size), "#101a21")
    drawing = ImageDraw.Draw(image)
    block, gap = 420, 100
    start = (size - block * 2 - gap) // 2
    for row in range(2):
        for column in range(2):
            x, y = start + column * (block + gap), start + row * (block + gap)
            color = "#32b8a7" if row == column else "#83d4c9"
            drawing.rounded_rectangle((x, y, x + block, y + block), radius=70, fill=color)
    for filename, dimension in [
        ("icon-192.png", 192),
        ("icon-512.png", 512),
        ("icon-maskable-512.png", 512),
        ("apple-touch-icon.png", 180),
    ]:
        image.resize((dimension, dimension), Image.Resampling.LANCZOS).save(
            ICON_DIRECTORY / filename, optimize=True
        )


if __name__ == "__main__":
    generate_icons()

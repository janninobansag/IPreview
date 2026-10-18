"""Create the Tiiny.host ZIP from the exact Vercel deployment output."""
from pathlib import Path
import zipfile

ROOT = Path(__file__).resolve().parents[1]
BUILD_DIRECTORY = ROOT / "dist"
ARTIFACT_DIRECTORY = ROOT / "artifacts"


def package_site():
    if not (BUILD_DIRECTORY / "index.html").is_file():
        raise FileNotFoundError("Run npm run build before packaging the site.")
    ARTIFACT_DIRECTORY.mkdir(exist_ok=True)
    target = ARTIFACT_DIRECTORY / "ipreview-tiiny-host.zip"
    files = sorted(path for path in BUILD_DIRECTORY.rglob("*") if path.is_file())
    with zipfile.ZipFile(target, "w", zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
        for path in files:
            archive.write(path, path.relative_to(BUILD_DIRECTORY).as_posix())
    with zipfile.ZipFile(target) as archive:
        if archive.testzip() is not None:
            raise ValueError("The generated archive failed its integrity check.")
    print(f"Packaged {len(files)} site files: {target}")


if __name__ == "__main__":
    package_site()

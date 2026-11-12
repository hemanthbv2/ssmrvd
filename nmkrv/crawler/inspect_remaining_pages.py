import json
import urllib.request
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
HEADERS = {'User-Agent': 'Mozilla/5.0'}

with open("c:/Users/HP/Downloads/SSMRVD/nmkrv/nmkrv_clean_pages.json", "r", encoding="utf-8") as f:
    pages = json.load(f)

slugs = [
    'b-a-bed', 'bsc-bed', 'iqac', 'sports', 'ncc', 'grievences',
    'examination', 'examinations', 'alumni', 'achievements',
    'value-added-courses', 'e-content', 'organogram', 'outreach', 'green-initiatives', 'public-cell', 'ethics'
]

for u, info in sorted(pages.items()):
    if any(s in u for s in slugs):
        print(f"\n=== {u} ({info['title']}) ===")
        print("\n".join(info['body_lines'][:60]))
        if info['pdfs']:
            print("PDFS:", info['pdfs'][:6])

# Download NMKRV logo and copy rv-logo.png
def download_file(url, dest):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, context=ctx, timeout=20) as resp:
        with open(dest, 'wb') as out:
            out.write(resp.read())

download_file("https://nmkrv.edu.in/wp-content/uploads/2022/12/Asset-1.png", "c:/Users/HP/Downloads/SSMRVD/nmkrv/assets/logo.png")
download_file("https://nmkrv.edu.in/wp-content/uploads/2022/12/Asset-1.png", "c:/Users/HP/Downloads/SSMRVD/nmkrv/logo.png")
import shutil
shutil.copyfile("c:/Users/HP/Downloads/SSMRVD/assets/rv-logo.png", "c:/Users/HP/Downloads/SSMRVD/nmkrv/assets/rv-logo.png")
shutil.copyfile("c:/Users/HP/Downloads/SSMRVD/assets/rv-logo.png", "c:/Users/HP/Downloads/SSMRVD/nmkrv/rv-logo.png")
print("\nDownloaded NMKRV logo and copied RV crest!")

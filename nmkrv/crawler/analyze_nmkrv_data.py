import json
import re

with open("c:/Users/HP/Downloads/SSMRVD/nmkrv/nmkrv_master_knowledge.json", "r", encoding="utf-8") as f:
    data = json.load(f)

print(f"Total crawled entries: {len(data)}")
valid_pages = {u: p for u, p in data.items() if 'error' not in p}
error_pages = {u: p for u, p in data.items() if 'error' in p}
print(f"Valid pages: {len(valid_pages)}, Error pages: {len(error_pages)}")

print("\n--- KEY PAGES OVERVIEW ---")
key_slugs = [
    'https://nmkrv.edu.in/',
    'https://nmkrv.edu.in/about-college/',
    'https://nmkrv.edu.in/about-us/',
    'https://nmkrv.edu.in/about-vision-mission/',
    'https://nmkrv.edu.in/about-principal-message/',
    'https://nmkrv.edu.in/board-of-management/',
    'https://nmkrv.edu.in/contact-us/',
    'https://nmkrv.edu.in/faculty/',
    'https://nmkrv.edu.in/research-faculty/',
    'https://nmkrv.edu.in/training-and-placement-centre/',
    'https://nmkrv.edu.in/placement-report/',
    'https://nmkrv.edu.in/scholarship/',
    'https://nmkrv.edu.in/rsst-girls-hostel/',
    'https://nmkrv.edu.in/infrastructure/',
    'https://nmkrv.edu.in/library/',
    'https://nmkrv.edu.in/sports/',
    'https://nmkrv.edu.in/clubs/',
    'https://nmkrv.edu.in/pg-programmes/',
    'https://nmkrv.edu.in/b-ed-integrated-course/',
    'https://nmkrv.edu.in/phd-programme/',
    'https://nmkrv.edu.in/nirf/',
    'https://nmkrv.edu.in/naac-4th-cycle/',
    'https://nmkrv.edu.in/ncte-mandatory-disclosure-2/'
]

for u in key_slugs:
    if u in valid_pages:
        p = valid_pages[u]
        print(f"\n=== {u} ({p['title']}) ===")
        print("Headings:", p['headings'][:15])
        # print snippet of text excluding header/footer menu
        lines = p['text'].splitlines()
        print("Total lines:", len(lines))
        print("Sample text:\n" + "\n".join(lines[:35]))
        if p['pdfs']:
            print("PDFs:", p['pdfs'][:10])
    else:
        print(f"\n=== {u} NOT IN VALID PAGES ===")

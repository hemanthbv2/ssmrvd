import glob
import json
import os

files = sorted(glob.glob('crawler/extracted_pages/academics_teaching_faculty_*.json'))
print(f"Count: {len(files)}")
for i, f in enumerate(files, 1):
    with open(f, 'r', encoding='utf-8') as fp:
        d = json.load(fp)
    h2s = [h.replace('H2: ', '').strip() for h in d.get('headings', []) if h.startswith('H2:')]
    first_h2 = h2s[0] if h2s else ''
    print(f"{i:2d}. {os.path.basename(f):55s} -> {first_h2}")

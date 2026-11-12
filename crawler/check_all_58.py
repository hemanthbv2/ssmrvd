import glob
import json
import os
import re

faculty_files = sorted(glob.glob('crawler/extracted_pages/academics_teaching_faculty_*.json'))

for i, fpath in enumerate(faculty_files, 1):
    fname = os.path.basename(fpath)
    if fname in ('academics_teaching_faculty_avinash-k-v.json', 'academics_teaching_faculty_malini-n.json'):
        continue
    with open(fpath, 'r', encoding='utf-8') as fp:
        d = json.load(fp)
    text = d.get('textSample', '')
    idx = text.rfind('Contact Us')
    body = text[idx + len('Contact Us'):].strip() if idx != -1 else text[550:].strip()
    body = re.sub(r'^Quick Links\s+IQAC\s+NIRF\s+AICTE\s+Mandatory Disclosure 2025-26\s*', '', body).strip()
    end_idx = body.find('Stay Connected With Us At')
    if end_idx != -1:
        body = body[:end_idx].strip()
    body = re.sub(r'\s*Back to Faculty\s*$', '', body).strip()
    h2s = [h.replace('H2: ', '').strip() for h in d.get('headings', []) if h.startswith('H2:')]
    person_name = h2s[0] if h2s else ''
    print(f"[{i:2d}] {fname} | {person_name}")
    print("   ", body[:250])

import glob
import json
import os
import re

with open('crawler/deep_faculty_catalog.json', 'r', encoding='utf-8') as f:
    catalog = json.load(f)

def norm(s):
    s = re.sub(r'^(Dr\.|Mr\.|Mrs\.|Ms\.|Sri\.|Smt\.|Prof\.)\s*', '', s, flags=re.I)
    s = s.replace('(h.c.)', '')
    return re.sub(r'[^a-z0-9]', '', s.lower())

cat_norms = [norm(p['name']) for p in catalog]
cat_urls = [p['url'] for p in catalog]

with open('crawler/parsed_live_faculty.json', 'r', encoding='utf-8') as f:
    live = json.load(f)

missing_live = []
for item in live:
    n = norm(item['name'])
    if not any(n in cn or cn in n for cn in cat_norms):
        missing_live.append(item['name'])

print("Missing from live_scraped_faculty_cards:", missing_live)

files = sorted(glob.glob('crawler/extracted_pages/academics_teaching_faculty_*.json'))
missing_files = []
for fpath in files:
    fname = os.path.basename(fpath)
    if fname in ('academics_teaching_faculty_avinash-k-v.json', 'academics_teaching_faculty_malini-n.json'):
        continue
    with open(fpath, 'r', encoding='utf-8') as fp:
        d = json.load(fp)
    u = d.get('url', '')
    if u not in cat_urls:
        missing_files.append((fname, u))

print("Missing from 58 individual files:", missing_files)

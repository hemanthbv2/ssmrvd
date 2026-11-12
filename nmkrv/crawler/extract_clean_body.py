import json

with open("c:/Users/HP/Downloads/SSMRVD/nmkrv/nmkrv_master_knowledge.json", "r", encoding="utf-8") as f:
    data = json.load(f)

valid_pages = {u: p for u, p in data.items() if 'error' not in p}

# Find common header/footer lines by checking what lines appear in >80% of pages
from collections import Counter
line_counts = Counter()
for u, p in valid_pages.items():
    for l in set(p['text'].splitlines()):
        line_counts[l] += 1

threshold = len(valid_pages) * 0.65
boilerplate = {l for l, c in line_counts.items() if c >= threshold}
print(f"Identified {len(boilerplate)} boilerplate header/footer lines.")

def get_body_lines(p):
    lines = p['text'].splitlines()
    # Keep first line (page title) and any non-boilerplate lines
    res = [lines[0]] if lines else []
    for l in lines[1:]:
        if l not in boilerplate:
            res.append(l)
    return res

# Dump a clean summary file of all valid pages and their unique body content
clean_summary = {}
for u in sorted(valid_pages.keys()):
    p = valid_pages[u]
    body = get_body_lines(p)
    clean_summary[u] = {
        'title': p['title'],
        'body_lines': body,
        'pdfs': [pdf for pdf in p['pdfs'] if 'Terms-conditions.pdf' not in pdf]
    }

with open("c:/Users/HP/Downloads/SSMRVD/nmkrv/nmkrv_clean_pages.json", "w", encoding="utf-8") as f:
    json.dump(clean_summary, f, indent=2, ensure_ascii=False)

# Print key pages
for u, info in clean_summary.items():
    if any(k in u for k in [
        'about', 'board-of-management', 'contact', 'faculty', 'placement',
        'commerce', 'management', 'bca', 'science', 'humanities', 'language',
        'pg-programmes', 'm-com', 'm-sc', 'ma-journalism', 'b-a-bed', 'bsc-bed',
        'phd', 'doctoral', 'scholarship', 'hostel', 'library', 'sports', 'infrastructure', 'clubs'
    ]):
        if 'feedback' in u:
            continue
        print(f"\n==================== {u} ====================")
        print("TITLE:", info['title'])
        print("\n".join(info['body_lines'][:60]))
        if info['pdfs']:
            print("PDFS:", info['pdfs'][:6])

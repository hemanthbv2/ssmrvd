import json

with open("c:/Users/HP/Downloads/SSMRVD/nmkrv/nmkrv_clean_pages.json", "r", encoding="utf-8") as f:
    pages = json.load(f)

for u, info in sorted(pages.items()):
    lines = info['body_lines']
    # Find 'FACULTY' or 'GOVERNING' or 'BOARD' or 'COORDINATOR'
    for idx, l in enumerate(lines):
        if l.strip().upper() in ('FACULTY', 'CO-ORDINATORS', 'COORDINATOR:', 'COORDINATOR & MEMBERS:'):
            print(f"\n=== {u} (line {idx}: {l}) ===")
            for j in range(idx, min(len(lines), idx + 80)):
                print(f"  {lines[j]}")

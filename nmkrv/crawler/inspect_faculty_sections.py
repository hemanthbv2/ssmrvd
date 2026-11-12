import json
import re

with open("c:/Users/HP/Downloads/SSMRVD/nmkrv/nmkrv_clean_pages.json", "r", encoding="utf-8") as f:
    pages = json.load(f)

for u, info in sorted(pages.items()):
    lines = info['body_lines']
    # Find where FACULTY or faculty names appear
    fac_indices = [i for i, l in enumerate(lines) if re.search(r'\b(FACULTY|Dr\.|Dr\s|Prof\.|Mrs\.|Ms\.|Mr\.|Assistant Professor|Associate Professor|HOD|Principal|Coordinator)\b', l, re.I)]
    if fac_indices:
        print(f"\n=== {u} ===")
        # Print window around faculty lines
        printed = set()
        for idx in fac_indices:
            for j in range(max(0, idx - 1), min(len(lines), idx + 6)):
                if j not in printed:
                    print(f"  [{j}] {lines[j]}")
                    printed.add(j)

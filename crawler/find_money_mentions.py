import re

files = [
    r"c:\Users\HP\Downloads\SSMRVD\chatbot-data.js",
    r"c:\Users\HP\Downloads\SSMRVD\script.js",
    r"c:\Users\HP\Downloads\SSMRVD\index.html"
]

patterns = [
    r'₹\s*[\d,]+',
    r'Rs\.?\s*[\d,]+',
    r'[\d,]+\s*(?:LPA|lpa|lakh|crore)',
    r'5000',
    r'₹'
]

combined = "|".join(patterns)

for fpath in files:
    print(f"\nScanning: {fpath}")
    with open(fpath, "r", encoding="utf-8") as f:
        lines = f.readlines()
    matches_count = 0
    for idx, line in enumerate(lines):
        if re.search(combined, line, re.IGNORECASE):
            print(f"  Line {idx+1}: {line.strip()[:140]}")
            matches_count += 1
    print(f"Total matches in {fpath}: {matches_count}")

import re

with open(r"c:\Users\HP\Downloads\SSMRVD\chatbot-data.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    if re.search(r'₹|Rs\.?|\b(?:crore|lakh|lpa)\b', line, re.IGNORECASE):
        print(f"Line {idx+1}: {line.strip()[:140]}")

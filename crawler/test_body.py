import glob
import json
import re

files = glob.glob(r"c:\Users\HP\Downloads\SSMRVD\crawler\extracted_pages\academics_teaching_faculty_*.json")

def get_body_text(text, name):
    # Find the last occurrence of the name or find after "2025-26"
    idx2 = text.rfind("2025-26")
    if idx2 != -1:
        return text[idx2 + len("2025-26"):]
    return text

for fpath in files[:5]:
    with open(fpath, "r", encoding="utf-8") as fp:
        d = json.load(fp)
    title = d.get("title", "")
    text = d.get("textSample", "")
    body = get_body_text(text, title)
    print("FILE:", title)
    print("BODY SAMPLE:", body[:200])
    print("-" * 50)

import glob
import json
import os

files = sorted(glob.glob('crawler/extracted_pages/academics_teaching_faculty_*.json'))
print(f"Total faculty files: {len(files)}")

for f in files[:15]:
    with open(f, 'r', encoding='utf-8') as fp:
        data = json.load(fp)
    print("="*60)
    print("FILE:", os.path.basename(f))
    print("URL:", data.get('url'))
    print("HEADINGS:", data.get('headings'))
    print("TEXT SAMPLE:", data.get('textSample', '')[:600])

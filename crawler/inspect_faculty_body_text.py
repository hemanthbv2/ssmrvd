import glob
import json
import os

files = sorted(glob.glob('crawler/extracted_pages/academics_teaching_faculty_*.json'))

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        data = json.load(fp)
    text = data.get('textSample', '')
    # Strip nav prefix up to "Contact Us"
    idx = text.rfind('Contact Us')
    if idx != -1:
        body = text[idx + len('Contact Us'):].strip()
    else:
        body = text[550:].strip()
    # Strip footer starting at "Stay Connected With Us At" or "Back to Faculty"
    end_idx = body.find('Stay Connected With Us At')
    if end_idx != -1:
        body = body[:end_idx].strip()
    print(f"=== {os.path.basename(f)} | {data.get('url')} ===")
    print("HEADINGS:", [h for h in data.get('headings', []) if not any(x in h for x in ['Stay Connected', 'Quick Links', 'About SSMRV', 'Programmes', 'Placement', 'Policies', 'Address', '#17', 'Email ID', 'office.ssmrv', 'Contact Numbers', 'Landline', 'For Admission', '97395', 'Find Us At', 'Designed by'])])
    print("BODY:", body[:1200])
    print()

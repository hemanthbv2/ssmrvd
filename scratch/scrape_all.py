import urllib.request
import re
import json

headers = {'User-Agent': 'Mozilla/5.0'}
urls = [
    'https://www.ssmrv.edu.in/about_us/about_college/',
    'https://www.ssmrv.edu.in/about_us/achievements_affiliations/',
    'https://www.ssmrv.edu.in/about_us/board_of_management/',
    'https://www.ssmrv.edu.in/academics/programmes/',
    'https://www.ssmrv.edu.in/academics/programmes/master_of_commerce/',
    'https://www.ssmrv.edu.in/admission_procedure/',
    'https://www.ssmrv.edu.in/admission_cancellation_process/',
    'https://www.ssmrv.edu.in/campus_life/infrastructure/',
    'https://www.ssmrv.edu.in/campus_life/placement/',
    'https://www.ssmrv.edu.in/campus_life/clubs_and_associations/',
    'https://www.ssmrv.edu.in/contact_us/',
    'https://www.ssmrv.edu.in/faq/'
]

data = {}

for u in urls:
    try:
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req, timeout=12) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            # remove scripts, styles
            clean = re.sub(r'<(script|style|nav|footer)[^>]*>.*?</\1>', ' ', html, flags=re.S | re.I)
            text = re.sub(r'<[^>]+>', ' ', clean)
            text = ' '.join(text.split())
            key = u.rstrip('/').split('/')[-1]
            data[key] = {
                'url': u,
                'text': text
            }
            print(f"Scraped {key}: {len(text)} chars")
    except Exception as e:
        print(f"Error scraping {u}: {e}")

with open(r'c:\Users\HP\Downloads\SSMRVD\ssmrv_all_scraped.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
print("Saved to ssmrv_all_scraped.json")

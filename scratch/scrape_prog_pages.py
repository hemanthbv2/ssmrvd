import urllib.request
import re
import json

headers = {'User-Agent': 'Mozilla/5.0'}
urls = [
    'https://www.ssmrv.edu.in/academics/programmes/bachelor_of_commerce/',
    'https://www.ssmrv.edu.in/academics/programmes/bachelors_of_business_administration/',
    'https://www.ssmrv.edu.in/academics/programmes/bachelors_of_computer_application/',
    'https://www.ssmrv.edu.in/academics/programmes/bba-_aviation_management/'
]

with open(r'c:\Users\HP\Downloads\SSMRVD\ssmrv_all_scraped.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for u in urls:
    try:
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req, timeout=12) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
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
print("Updated ssmrv_all_scraped.json successfully!")

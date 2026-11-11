import urllib.request
import re
import json

base_url = 'https://www.ssmrv.edu.in/'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

urls_to_check = [
    'https://www.ssmrv.edu.in/',
    'https://www.ssmrv.edu.in/about-us/',
    'https://www.ssmrv.edu.in/about-college/',
    'https://www.ssmrv.edu.in/board-of-management/',
    'https://www.ssmrv.edu.in/programmes/',
    'https://www.ssmrv.edu.in/b-com/',
    'https://www.ssmrv.edu.in/bba/',
    'https://www.ssmrv.edu.in/bca/',
    'https://www.ssmrv.edu.in/m-com/',
    'https://www.ssmrv.edu.in/admission-procedure/',
    'https://www.ssmrv.edu.in/placements/',
    'https://www.ssmrv.edu.in/infrastructure/',
    'https://www.ssmrv.edu.in/contact-us/'
]

results = {}

for u in urls_to_check:
    try:
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            content = resp.read().decode('utf-8', errors='ignore')
            # Extract plain text content inside main / article / body
            # remove scripts, styles, nav, footer tags
            clean = re.sub(r'<(script|style|nav|footer)[^>]*>.*?</\1>', ' ', content, flags=re.S | re.I)
            text = re.sub(r'<[^>]+>', ' ', clean)
            text = ' '.join(text.split())
            results[u] = {
                'status': resp.status,
                'length': len(content),
                'sample': text[:2000]
            }
            print(f"OK: {u} (text len: {len(text)})")
    except Exception as e:
        print(f"Failed {u}: {e}")

with open(r'c:\Users\HP\Downloads\SSMRVD\scraped_content.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2, ensure_ascii=False)
print("Saved to scraped_content.json")

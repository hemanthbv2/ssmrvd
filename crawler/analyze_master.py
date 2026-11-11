import json

with open(r'c:\Users\HP\Downloads\SSMRVD\ssmrv_master_knowledge.json', 'r', encoding='utf-8') as f:
    items = json.load(f)

faculty = []
clubs = []
policies = []

for item in items:
    if 'error' in item: continue
    url = item.get('url', '')
    title = item.get('title', '')
    headings = item.get('headings', [])
    text = item.get('textSample', '')

    if 'teaching_faculty' in url and url.rstrip('/') != 'https://www.ssmrv.edu.in/academics/teaching_faculty':
        name = title.replace('– SSMRV College', '').replace('- SSMRV College', '').strip()
        faculty.append({'name': name, 'url': url, 'headings': headings[:3]})

    if 'clubs_and_associations' in url and url.rstrip('/') != 'https://www.ssmrv.edu.in/campus_life/clubs_and_associations':
        clubs.append({'title': title, 'url': url})

    if 'policies' in url:
        policies.append({'title': title, 'url': url})

print(f"Total Faculty profiles captured: {len(faculty)}")
print("Sample Faculty (first 8):")
for f in faculty[:8]:
    print(f"  • {f['name']} ({f['url'].split('/')[-2]})")

print(f"\nTotal Specialized Club & Centre pages: {len(clubs)}")
for c in clubs:
    print(f"  • {c['title']} ({c['url']})")

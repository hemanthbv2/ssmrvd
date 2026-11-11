import urllib.request
import re

url = 'https://www.ssmrv.edu.in/academics/programmes/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as r:
    h = r.read().decode('utf-8', errors='ignore')

all_links = re.findall(r'href=["\'](https?://[^"\']+)["\']', h)
rel = [l for l in set(all_links) if any(x in l.lower() for x in ['com', 'bba', 'bca', 'program'])]
for l in sorted(rel):
    print(l)

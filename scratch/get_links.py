import urllib.request
import re

url = 'https://www.ssmrv.edu.in/'
headers = {'User-Agent': 'Mozilla/5.0'}
req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

links = re.findall(r'href=["\'](https?://(?:www\.)?ssmrv\.edu\.in/[^"\'#]*)["\']', html)
clean_links = sorted(list(set(links)))
print(f"Total unique links found on homepage: {len(clean_links)}")
for l in clean_links:
    print(f"  {l}")

import urllib.request
import ssl
import re
import json
from urllib.parse import urljoin, urlparse

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

def fetch(url):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, context=ctx, timeout=20) as resp:
        return resp.read().decode('utf-8', errors='replace'), resp.geturl()

base = "https://nmkrv.edu.in/"
print("Fetching homepage:", base)
html, final_url = fetch(base)
print("Final URL:", final_url, "HTML len:", len(html))

# Try sitemaps
sitemaps = [
    "https://nmkrv.edu.in/sitemap.xml",
    "https://nmkrv.edu.in/sitemap_index.xml",
    "https://nmkrv.edu.in/wp-sitemap.xml",
    "https://www.nmkrv.edu.in/sitemap.xml",
    "https://www.nmkrv.edu.in/wp-sitemap.xml"
]

sitemap_urls = set()
for sm in sitemaps:
    try:
        sm_xml, _ = fetch(sm)
        locs = re.findall(r'<loc>(.*?)</loc>', sm_xml)
        print(f"Sitemap {sm}: {len(locs)} locs")
        for loc in locs:
            if loc.endswith('.xml'):
                try:
                    sub_xml, _ = fetch(loc)
                    sub_locs = re.findall(r'<loc>(.*?)</loc>', sub_xml)
                    print(f"  Sub-sitemap {loc}: {len(sub_locs)} locs")
                    for sl in sub_locs:
                        sitemap_urls.add(sl.strip())
                except Exception as e:
                    print("  Sub error:", e)
            else:
                sitemap_urls.add(loc.strip())
    except Exception as e:
        print(f"Sitemap {sm} failed: {e}")

# Extract all links from homepage
hrefs = re.findall(r'href=["\'](.*?)["\']', html, re.I)
for h in hrefs:
    full = urljoin(final_url, h.split('#')[0].strip())
    if 'nmkrv.edu.in' in urlparse(full).netloc:
        sitemap_urls.add(full)

sorted_urls = sorted(sitemap_urls)
print(f"Total discovered URLs so far: {len(sorted_urls)}")
with open("c:/Users/HP/Downloads/SSMRVD/nmkrv/all_sitemap_urls.txt", "w", encoding="utf-8") as f:
    for u in sorted_urls:
        f.write(u + "\n")

# Print sample URLs and images
imgs = re.findall(r'<img[^>]+src=["\'](.*?)["\']', html, re.I)
print("Sample images on homepage:")
for im in imgs[:25]:
    print(" ", urljoin(final_url, im))

print("\nFirst 80 discovered URLs:")
for u in sorted_urls[:80]:
    print(" ", u)

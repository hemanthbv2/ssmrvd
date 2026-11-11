import urllib.request
import re
import xml.etree.ElementTree as ET

sitemap_urls = [
    'https://www.ssmrv.edu.in/sitemap_index.xml',
    'https://www.ssmrv.edu.in/sitemap.xml',
    'https://www.ssmrv.edu.in/wp-sitemap.xml',
    'https://www.ssmrv.edu.in/wp-sitemap-posts-page-1.xml',
    'https://www.ssmrv.edu.in/wp-sitemap-posts-post-1.xml'
]

headers = {'User-Agent': 'Mozilla/5.0'}
found_urls = set()

for s_url in sitemap_urls:
    try:
        req = urllib.request.Request(s_url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as r:
            xml_data = r.read().decode('utf-8', errors='ignore')
            locs = re.findall(r'<loc>(https?://[^<]+)</loc>', xml_data)
            print(f"{s_url} -> {len(locs)} links")
            for l in locs:
                if l.endswith('.xml'):
                    # Sub-sitemap
                    try:
                        req_sub = urllib.request.Request(l, headers=headers)
                        with urllib.request.urlopen(req_sub, timeout=10) as sub_r:
                            sub_xml = sub_r.read().decode('utf-8', errors='ignore')
                            sub_locs = re.findall(r'<loc>(https?://[^<]+)</loc>', sub_xml)
                            print(f"  Sub {l} -> {len(sub_locs)} links")
                            for sl in sub_locs:
                                found_urls.add(sl)
                    except Exception as sub_e:
                        print(f"  Failed sub {l}: {sub_e}")
                else:
                    found_urls.add(l)
    except Exception as e:
        print(f"Failed {s_url}: {e}")

all_urls = sorted(list(found_urls))
print(f"Total Unique URLs discovered via XML Sitemaps: {len(all_urls)}")
with open(r'c:\Users\HP\Downloads\SSMRVD\all_sitemap_urls.txt', 'w', encoding='utf-8') as f:
    for u in all_urls:
        f.write(u + '\n')

import urllib.request
import re
import json

url = 'https://www.ssmrv.edu.in/'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

try:
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=15) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        print(f"Page fetched! Total chars: {len(html)}")

        # Extract title
        title_m = re.search(r'<title>(.*?)</title>', html, re.I | re.S)
        if title_m:
            print(f"Title: {title_m.group(1).strip()}")

        # Extract meta description
        meta_m = re.search(r'<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"\']*)["\']', html, re.I)
        if meta_m:
            print(f"Meta Description: {meta_m.group(1).strip()}")

        # Find all logo URLs
        img_tags = re.findall(r'<img[^>]+src=["\']([^"\']+)["\'][^>]*>', html, re.I)
        logos = [img for img in img_tags if 'logo' in img.lower() or 'ssmrv' in img.lower()]
        print(f"Logos found ({len(logos)}):")
        for l in logos[:6]:
            print(f"  - {l}")

        # Find colors in styles
        hex_colors = re.findall(r'#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b', html)
        unique_colors = sorted(list(set(['#' + c.lower() for c in hex_colors])))
        print(f"Found {len(unique_colors)} hex colors:")
        print(unique_colors[:15])

        # Find CSS stylesheets
        css_links = re.findall(r'<link[^>]+href=["\']([^"\']+\.css[^"\']*)["\']', html, re.I)
        print(f"Found {len(css_links)} stylesheets:")
        for c in css_links[:5]:
            print(f"  - {c}")

        # Check navigation / menu items
        menu_items = re.findall(r'<a[^>]+>([^<]{3,30})</a>', html)
        print(f"Sample menu items:")
        sample_menu = [m.strip() for m in menu_items if len(m.strip()) > 3]
        print(list(dict.fromkeys(sample_menu))[:20])

except Exception as err:
    print(f"Error fetching: {err}")

import urllib.request
import re

css_urls = [
    'https://www.ssmrv.edu.in/wp-content/uploads/elementor/css/post-8.css',
    'https://www.ssmrv.edu.in/wp-content/uploads/elementor/css/post-18158.css',
    'https://www.ssmrv.edu.in/wp-content/themes/hello-elementor/assets/css/theme.css'
]

headers = {'User-Agent': 'Mozilla/5.0'}
for u in css_urls:
    try:
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as r:
            css = r.read().decode('utf-8', errors='ignore')
            print(f"=== CSS: {u.split('/')[-1]} ===")
            colors = re.findall(r'#[0-9a-fA-F]{3,6}\b', css)
            print("Colors:", sorted(list(set(colors)))[:12])
            fonts = re.findall(r'font-family:[^;]+', css)
            print("Fonts:", sorted(list(set(fonts)))[:6])
    except Exception as e:
        print(f"Error {u}: {e}")

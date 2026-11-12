import urllib.request
import ssl
import json
import re
from html import unescape

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
HEADERS = {'User-Agent': 'Mozilla/5.0'}

def fetch(url):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, context=ctx, timeout=20) as resp:
        return resp.read().decode('utf-8', errors='replace')

for u in [
    'https://nmkrv.edu.in/b-a-bed/',
    'https://nmkrv.edu.in/bsc-bed/',
    'https://nmkrv.edu.in/doctoral-degree/',
    'https://nmkrv.edu.in/equipments/',
    'https://nmkrv.edu.in/research/',
    'https://nmkrv.edu.in/projects/'
]:
    try:
        html = fetch(u)
        html = re.sub(r'<(script|style|noscript)[^>]*>.*?</\1>', ' ', html, flags=re.S | re.I)
        text = unescape(re.sub(r'<[^>]+>', '\n', html))
        lines = [re.sub(r'\s+', ' ', l).strip() for l in text.splitlines() if l.strip()]
        print(f"\n=== {u} ===")
        print("\n".join(lines[70:160]))
    except Exception as e:
        print(f"Error {u}: {e}")

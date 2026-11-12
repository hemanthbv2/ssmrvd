import urllib.request, ssl, re
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
html = urllib.request.urlopen(urllib.request.Request('https://nmkrv.edu.in/', headers={'User-Agent':'Mozilla/5.0'}), context=ctx).read().decode('utf-8','replace')
for m in re.finditer(r'<a[^>]+href=["\'](.*?)["\'][^>]*>(.*?)</a>', html, re.S | re.I):
    href = m.group(1).strip()
    label = re.sub(r'<[^>]+>', ' ', m.group(2)).strip()
    label = re.sub(r'\s+', ' ', label)
    if ('nmkrv.edu.in' not in href and href.startswith('http')) or any(w in label.lower() for w in ['admi', 'ug', 'pg', 'bed', 'b.ed', 'aicte', 'nirf', 'ncte', 'apply', 'magazine', 'vartha']):
        print(f"{label:40s} -> {href}")

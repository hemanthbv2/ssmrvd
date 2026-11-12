import urllib.request
import ssl
import re
import json
import concurrent.futures
from urllib.parse import urljoin, urlparse
from html import unescape

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

def clean_html_to_text(html):
    # Remove script/style
    html = re.sub(r'<(script|style|noscript)[^>]*>.*?</\1>', ' ', html, flags=re.S | re.I)
    # Replace block tags with newlines
    html = re.sub(r'</?(p|div|br|li|tr|h[1-6]|section|article|header|footer|td|th)[^>]*>', '\n', html, flags=re.I)
    # Remove all other tags
    text = re.sub(r'<[^>]+>', ' ', html)
    text = unescape(text)
    lines = []
    for line in text.splitlines():
        s = re.sub(r'\s+', ' ', line).strip()
        if s:
            lines.append(s)
    return '\n'.join(lines)

def crawl_page(url):
    try:
        html, final_url = fetch(url)
        title_m = re.search(r'<title>(.*?)</title>', html, re.S | re.I)
        title = unescape(title_m.group(1).strip()) if title_m else url
        headings = [unescape(re.sub(r'<[^>]+>', '', h).strip()) for h in re.findall(r'<h[1-4][^>]*>(.*?)</h[1-4]>', html, re.S | re.I)]
        headings = [re.sub(r'\s+', ' ', h) for h in headings if h.strip()]
        text = clean_html_to_text(html)
        links = []
        pdfs = []
        for href in re.findall(r'href=["\'](.*?)["\']', html, re.I):
            full = urljoin(final_url, href.split('#')[0].strip())
            if full.lower().endswith('.pdf'):
                pdfs.append(full)
            elif 'nmkrv.edu.in' in urlparse(full).netloc:
                links.append(full)
        return {
            'url': url,
            'final_url': final_url,
            'title': title,
            'headings': headings[:40],
            'text': text,
            'pdfs': sorted(set(pdfs)),
            'links': sorted(set(links))
        }
    except Exception as e:
        return {'url': url, 'error': str(e)}

def main():
    page_sm, _ = fetch("https://nmkrv.edu.in/page-sitemap.xml")
    post_sm, _ = fetch("https://nmkrv.edu.in/post-sitemap.xml")
    urls = set(re.findall(r'<loc>(.*?)</loc>', page_sm) + re.findall(r'<loc>(.*?)</loc>', post_sm))
    # Filter out dummy pages if needed, or crawl everything and inspect
    urls = sorted(urls)
    print(f"Crawling {len(urls)} sitemap pages in parallel...")

    results = {}
    discovered = set()
    with concurrent.futures.ThreadPoolExecutor(max_workers=12) as ex:
        futs = {ex.submit(crawl_page, u): u for u in urls}
        for fut in concurrent.futures.as_completed(futs):
            res = fut.result()
            results[res['url']] = res
            for lk in res.get('links', []):
                if not any(lk.lower().endswith(ext) for ext in ('.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.xml', '.pdf', '.zip')):
                    if 'wp-json' not in lk and 'wp-content' not in lk and 'xmlrpc' not in lk and '?' not in lk:
                        discovered.add(lk)

    extra_urls = sorted(discovered - set(results.keys()))
    print(f"Discovered {len(extra_urls)} additional internal page URLs. Crawling them...")
    if extra_urls:
        with concurrent.futures.ThreadPoolExecutor(max_workers=12) as ex:
            futs = {ex.submit(crawl_page, u): u for u in extra_urls}
            for fut in concurrent.futures.as_completed(futs):
                res = fut.result()
                results[res['url']] = res

    with open("c:/Users/HP/Downloads/SSMRVD/nmkrv/nmkrv_master_knowledge.json", "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)

    print(f"Saved {len(results)} pages to nmkrv_master_knowledge.json!")

if __name__ == '__main__':
    main()

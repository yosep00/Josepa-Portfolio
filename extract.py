import re
import json

try:
    with open('site.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all image URLs from figweb CDN
    urls = list(set(re.findall(r'https://[a-zA-Z0-9\.\-]+\.figweb\.site/cdn-cgi/imagedelivery/[a-zA-Z0-9\-_]+/[a-zA-Z0-9\-_]+/public', content)))

    print("Found URLs:")
    for i, url in enumerate(urls):
        print(f"[{i}] {url}")
        
except Exception as e:
    print("Error:", e)

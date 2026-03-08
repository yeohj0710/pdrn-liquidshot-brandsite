# SEO Launch Checklist

## 1. Deploy with the real domain

Set the production domain before deployment.

```bash
NEXT_PUBLIC_SITE_URL=https://your-real-domain.com
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-verification-token
```

Without the real domain, canonical URLs and the sitemap will point to the placeholder URL.

## 2. Verify the site in Google Search Console

- Add the production domain to Google Search Console.
- Use the HTML meta tag verification token through `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
- Submit `https://your-real-domain.com/sitemap.xml`.

## 3. Request indexing for key pages

Submit these pages first:

- `/`
- `/product`
- `/brand`
- `/formula`
- `/faq`

## 4. Keep these pages out of search

Already handled in code:

- `/order-complete` is `noindex`
- `/api/*` is blocked in `robots`

## 5. Monitor after launch

- Check Search Console Coverage / Indexing
- Check Search Console Performance
- Check Core Web Vitals and mobile usability
- Re-submit sitemap when domain changes

## Reference

- Google Search Central: SEO Starter Guide
- Google Search Central: Managing your sitemaps
- Google Search Central: Introduction to structured data
- Google Search Central: Control crawling and indexing

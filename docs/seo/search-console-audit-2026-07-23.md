# Search Console audit — Video Converter 1-Click

Date: 2026-07-23

Property: `sc-domain:docgpt.ai`

Stable-data cutoff: 2026-07-20 (three-day Search Console lag)

## Executive summary

DocGPT.ai has no reported Search Analytics rows for the Video Converter query cluster in the stable 90-day window. The existing Video Converter privacy page received only negligible search exposure and the App Store marketing URL points to the generic DocGPT.ai homepage, which does not describe the Mac app.

The broader site also lost search visibility and clicks versus the preceding comparable 90-day window, while recent click-through rate was broadly flat and average position weakened. Because this repository is public, exact property-level query and performance figures are intentionally omitted.

## Evidence

- Search Analytics query/page sample for a case-insensitive cluster covering `video converter`, MKV/WEBM/MOV-to-MP4, video compression and audio extraction: **0 returned rows** for 2026-04-22 through 2026-07-20.
- The submitted sitemap at `https://docgpt.ai/sitemap.xml` was fetched successfully and reported no sitemap errors or warnings.
- The only dedicated public URL was a privacy policy, not a product or task page.
- Google Autocomplete currently exposes demand-shaped variants around WebM/MKV/MOV to MP4 on Mac, MP4 to MP3/audio extraction and offline Mac compression.
- Brave result samples show weaker or mixed intent coverage for WebM-to-MP4 and batch MKV-to-MP4 long tails than for the broad `video converter for Mac` head term.

Search Analytics does not guarantee every underlying row, so a zero-row sample is evidence of no reported visibility in the returned dataset—not proof that no impression occurred anywhere.

## Changes prepared

- Added a canonical product hub at `/video-converter-mac/`.
- Added focused, useful guides for WebM-to-MP4, batch MKV-to-MP4, MOV-to-MP4, MP4-to-MP3 and offline video compression.
- Added a real product support page.
- Added SoftwareApplication, FAQPage and HowTo structured data without duplicating the site's Organization/WebSite entities.
- Added internal links from the footer and `llms.txt`.
- Prepared the App Store marketing and support URLs to point to the dedicated pages.

## Keyword priorities and expectations

1. WebM to MP4 on Mac — best near-term long-tail opportunity in the sampled result sets.
2. Batch MKV to MP4 on Mac — strong product fit and relatively fragmented results.
3. MP4 to MP3 / extract audio from video on Mac — clear demand, moderate competition.
4. MOV to MP4 on Mac — clear demand but stronger competition.
5. Compress video on Mac offline — useful commercial/problem-solving cluster; avoid unsupported exact-size claims.
6. Offline video converter for Mac — hub and conversion page, but a much more competitive head term.

No ranking position can be guaranteed. A top 1–2 result is most plausible first on narrow long-tail queries after the pages are published, indexed and earn engagement or links.

## Validation

After publication:

1. Request indexing for the hub and five task pages in Search Console.
2. Confirm their canonical URL and rendered structured data.
3. Compare impressions, clicks, CTR and average position after at least 28 stable days.
4. Split performance by page and query; expand only pages that earn impressions.
5. Review App Store product-page sessions and purchases separately to validate whether organic visits produce revenue.

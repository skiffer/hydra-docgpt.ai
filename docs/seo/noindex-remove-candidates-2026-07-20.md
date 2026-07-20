# Noindex/remove candidates — 2026-07-20

**Property:** `sc-domain:docgpt.ai`

**Evidence window:** 2026-04-19 through 2026-07-17, Google Web Search, stable cutoff.

**Status:** partially implemented on 2026-07-20. Nineteen source pages were removed; the English o1 page was restored after a page-level Search Console review. No Render redirect was deployed.

## Decision summary

This quality-remediation list started with 23 URLs. The first cleanup pass implemented the following:

- The English OpenAI o1 page was restored because it had high search visibility despite zero clicks; it is not classified as spam.
- 4 translated OpenAI o1 duplicates were removed and now fall through to the site's real HTTP 404 response.
- 15 visibly malformed, zero-click programmatic landing pages were removed; internal links were repointed to the selected topical hubs.
- 3 malformed pages were retained: 2 had clicks and 1 is an exact duplicate with a clear redirect target. They require working Render redirect rules before source removal.
- 21 of the 23 had zero clicks in the stable window.
- 2 malformed pages had one click each and require extra conversion/backlink review before any index change.

Exact raw Search Console metrics and query strings are omitted because the repository is public.

## Candidate table

The action column records the current recommendation. The implementation status above identifies the 19 removed pages and the restored exception.

| URL | Source file | Proposed final action | Proposed target | Evidence/reason |
| --- | --- | --- | --- | --- |
| https://docgpt.ai/chatgpt-introducing-o1-preview-and-o1-mini-september-2024/ | `chatgpt-introducing-o1-preview-and-o1-mini-2024.md` | restore → improve/monitor | — | Zero clicks, but high search visibility; retain as a non-spam exception and reassess its snippet and freshness. |
| https://docgpt.ai/chatgpt-presente-o1-preview-et-o1-mini-septembre-2024/ | `chatgpt-introducing-o1-preview-and-o1-mini-2024-french.md` | noindex → remove/410 | — | Translated duplicate of stale, off-topic news page. |
| https://docgpt.ai/chatgpt-stellt-o1-preview-und-o1-mini-vor-september-2024/ | `chatgpt-introducing-o1-preview-and-o1-mini-2024-germany.md` | noindex → remove/410 | — | Translated duplicate of stale, off-topic news page. |
| https://docgpt.ai/chatgpt-wprowadza-o1-preview-i-o1-mini-wrzesien-2024/ | `chatgpt-introducing-o1-preview-and-o1-mini-2024-poland.md` | noindex → remove/410 | — | Translated duplicate of stale, off-topic news page. |
| https://docgpt.ai/chatgpt-presenta-o1-preview-y-o1-mini-septiembre-2024/ | `chatgpt-introducing-o1-preview-and-o1-mini-2024-spanish.md` | noindex → remove/410 | — | Translated duplicate of stale, off-topic news page. |
| https://docgpt.ai/agency-lead-research-google-sheets-ai/ | `agency-lead-research-google-sheets-ai.md` | redirect after review | /google-sheets-ai-account-research-buyers-guide/ | Malformed template copy and truncated metadata. |
| https://docgpt.ai/ai-lead-enrichment-car-dealerships-google-sheets/ | `ai-lead-enrichment-car-dealerships-google-sheets.md` | redirect after review | /ai-lead-enrichment-google-sheets-guide/ | Malformed template copy and truncated metadata. |
| https://docgpt.ai/ai-lead-enrichment-real-estate-agents-google-sheets/ | `ai-lead-enrichment-real-estate-agents-google-sheets.md` | redirect after review | /ai-lead-enrichment-google-sheets-guide/ | Malformed template; low-click rather than zero-click, so preserve useful material first. |
| https://docgpt.ai/apollo-export-enrichment-google-sheets-ai/ | `apollo-export-enrichment-google-sheets-ai.md` | redirect after review | /ai-lead-enrichment-google-sheets-guide/ | Malformed template copy and truncated metadata. |
| https://docgpt.ai/b2b-sales-account-research-google-sheets-ai/ | `b2b-sales-account-research-google-sheets-ai.md` | redirect after review | /google-sheets-ai-account-research-buyers-guide/ | Malformed template copy and truncated metadata. |
| https://docgpt.ai/bulk-meta-descriptions-ai-google-sheets/ | `bulk-meta-descriptions-ai-google-sheets.md` | redirect after review | /bulk-meta-descriptions-google-sheets-ai/ | Malformed direct duplicate with a stronger existing page. |
| https://docgpt.ai/clay-alternative-google-sheets-lead-enrichment/ | `clay-alternative-google-sheets-lead-enrichment.md` | redirect after review | /clay-alternative-google-sheets/ | Malformed Clay landing page with unnatural hero copy. |
| https://docgpt.ai/clay-in-sheets-account-research/ | `clay-in-sheets-account-research.md` | redirect after review | /google-sheets-ai-account-research-buyers-guide/ | Malformed template copy and truncated metadata. |
| https://docgpt.ai/cold-email-personalization-from-google-sheets-ai/ | `cold-email-personalization-from-google-sheets-ai.md` | redirect after review | /gpt-for-sheets-for-b2b-sales/ | Malformed template copy and truncated metadata. |
| https://docgpt.ai/competitive-intelligence-tracker-google-sheets-ai/ | `competitive-intelligence-tracker-google-sheets-ai.md` | redirect after review | /google-sheets-ai-account-research-buyers-guide/ | Malformed template copy and truncated metadata. |
| https://docgpt.ai/crm-cleanup-deduping-google-sheets-ai/ | `crm-cleanup-deduping-google-sheets-ai.md` | redirect after review | /gpt-for-sheets-for-b2b-sales/ | Malformed template copy and truncated metadata. |
| https://docgpt.ai/ecommerce-product-data-enrichment-google-sheets-ai/ | `ecommerce-product-data-enrichment-google-sheets-ai.md` | redirect after review | /gpt-for-sheets-for-ecommerce/ | Malformed template copy and truncated metadata. |
| https://docgpt.ai/google-maps-business-enrichment-google-sheets-ai/ | `google-maps-business-enrichment-google-sheets-ai.md` | redirect after review | /ai-lead-enrichment-google-sheets-guide/ | Malformed template copy and truncated metadata. |
| https://docgpt.ai/icp-scoring-formulas-google-sheets-ai/ | `icp-scoring-formulas-google-sheets-ai.md` | redirect after review | /icp-fit-scoring-google-sheets-ai/ | Malformed direct intent duplicate. |
| https://docgpt.ai/local-business-prospecting-google-sheets-ai/ | `local-business-prospecting-google-sheets-ai.md` | redirect after review | /ai-lead-enrichment-google-sheets-guide/ | Malformed template copy and truncated metadata. |
| https://docgpt.ai/programmatic-seo-content-briefs-google-sheets-ai/ | `programmatic-seo-content-briefs-google-sheets-ai.md` | redirect after review | /gpt-for-sheets-for-seo-teams/ | Malformed template; low-click rather than zero-click, so preserve useful material first. |
| https://docgpt.ai/recruiter-candidate-research-google-sheets-ai/ | `recruiter-candidate-research-google-sheets-ai.md` | redirect after review | /google-sheets-ai-account-research-buyers-guide/ | Malformed template copy and truncated metadata. |
| https://docgpt.ai/seo-keyword-clustering-google-sheets-ai/ | `seo-keyword-clustering-google-sheets-ai.md` | redirect after review | /gpt-for-sheets-for-seo-teams/ | Malformed template copy and truncated metadata. |

## Required preflight before implementation

1. Confirm the URL has no conversions, valuable referral traffic, or backlinks.
2. Confirm the proposed target is live, indexable, canonical, and satisfies the same intent.
3. Copy any unique useful material into the target before redirecting.
4. Use a 301 only when the target is a genuine replacement; use `noindex,follow` or 410 when no equivalent page exists.
5. Remove retired URLs from the sitemap only when the corresponding index action is deployed.
6. Re-run URL Inspection when SearchConsole.ai inspection is available; the inspection endpoint returned HTTP 503 during this review.
7. Record deployment date and recheck indexing plus qualified clicks after a complete stable Search Console window.

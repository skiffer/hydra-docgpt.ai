---
layout: docs_layouts/default
title: "SERP function in Google Sheets \u2014 =SERP() reference"
parent: GPT for Sheets
nav_order: 55
permalink: /docs/gpt-for-sheets/serp-function
description: "Get search results directly in Google Sheets with =SERP(). Syntax, default limits and examples for SEO research, competitor analysis and lead lists."
---

# =SERP() — Google search results in Google Sheets

`=SERP()` fetches live Google search results for a query and returns them into your sheet — titles, links and snippets. It is the workhorse behind SEO research, competitor monitoring and list building in <a href="/gpt-for-sheets/">GPT for Sheets</a>.

## Syntax

```
=SERP(query, [limit])
```

| Parameter | Required | Description |
|---|---|---|
| `query` | yes | The search query, string or cell reference. At least 3 characters. |
| `limit` | no | How many results to return. Default: 20. |

## Examples

Top results for a keyword in `A2`:

```
=SERP(A2, 10)
```

Who ranks for your money keyword, then summarize angles with GPT:

```
=SERP("gpt for google sheets", 10)
=GPT("Based on these titles, what content angle is missing?", B2:B11)
```

Monitor brand mentions — search your brand name from `A2`:

```
=SERP(A2&" review", 20)
```

## Common errors

- `Query not provided or too short.` — the query must be at least 3 characters.
- `Function can only be called once every 20 seconds.` — SERP is rate-limited; wait between calls instead of recalculating the whole sheet at once.
- Results spill into multiple cells — keep the area below the formula empty or Sheets shows `#REF!`.

## Related

```
=GOOGLE_SEARCH_API(query, contextId, apiKey, [pages])
```

The same idea through the **official Google Custom Search API** with your own key — for higher volumes and stable quotas.

## Related functions

- <a href="/docs/gpt-for-sheets/gpt-web-search">=GPT_WEB_SEARCH()</a> — a synthesized answer instead of raw results
- <a href="/docs/gpt-for-sheets/perplexity-function">=PERPLEXITY()</a> — web-aware research answers
- <a href="/docs/gpt-for-sheets/gpt-function">=GPT()</a> — process the results you fetched

## Try it

<a href="https://docs.google.com/spreadsheets/d/1aZY-8V478qfIDWFZTzbTejldEzk3Bnd5ZtGAPcDI4PU/template/preview">Copy the template</a> or <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">install GPT for Sheets</a>. Guide: <a href="/docs/gpt-for-sheets/search-the-web-from-google-sheets-in-2024">Search the web from Google Sheets</a>.

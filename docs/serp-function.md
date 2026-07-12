---
layout: docs_layouts/default
title: "SERP function in Google Sheets \u2014 =SERP() reference"
parent: GPT for Sheets
nav_order: 55
permalink: /docs/gpt-for-sheets/serp-function
description: "Get Google search results directly in Google Sheets with =SERP(). Syntax, examples for SEO research, competitor analysis and lead lists."
---

# =SERP() — Google search results in Google Sheets

`=SERP()` fetches live Google search results for a query and returns them into your sheet — titles, links and snippets. It is the workhorse behind SEO research, competitor monitoring and list building in <a href="/gpt-for-sheets/">GPT for Sheets</a>.

## Syntax

```
=SERP(query, [limit])
```

| Parameter | Required | Description |
|---|---|---|
| `query` | yes | The search query, string or cell reference. |
| `limit` | no | How many results to return. |

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

## Related

```
=GOOGLE_SEARCH_API(query, contextId, apiKey, [pages])
```

The same idea through the **official Google Custom Search API** with your own key — for higher volumes and stable quotas.

## Try it

<a href="https://docs.google.com/spreadsheets/d/1aZY-8V478qfIDWFZTzbTejldEzk3Bnd5ZtGAPcDI4PU/template/preview">Copy the template</a> or <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">install GPT for Sheets</a>. Guide: <a href="/docs/gpt-for-sheets/search-the-web-from-google-sheets-in-2024">Search the web from Google Sheets</a>.

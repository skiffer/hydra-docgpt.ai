---
layout: docs_layouts/default
title: "GPT_WEB_SEARCH function — live web answers in Google Sheets"
parent: GPT for Sheets
nav_order: 69
permalink: /docs/gpt-for-sheets/gpt-web-search
description: "Get web-grounded answers with =GPT_WEB_SEARCH() in Google Sheets — current prices, news and company facts via search-enabled GPT models. Syntax, examples."
---

# =GPT_WEB_SEARCH() — answers grounded in a live web search

`=GPT_WEB_SEARCH()` runs your prompt through a search-enabled GPT model, so the answer draws on current web results instead of training data alone. Use it where a plain `=GPT()` would be out of date: prices, news, people, companies. Part of <a href="/gpt-for-sheets/">GPT for Sheets</a>.

## Syntax

```
=GPT_WEB_SEARCH(prompt, [value])
```

| Parameter | Required | Description |
|---|---|---|
| `prompt` | yes | The question or research instruction — a string or a cell reference. |
| `value` | no | Extra input appended to the prompt — e.g. a company name or domain from your data. |

## Examples

Enrich a lead list — company description from a domain in `A2`:

```
=GPT_WEB_SEARCH("What does this company do? One sentence:", A2)
```

Check current pricing for competitor research:

```
=GPT_WEB_SEARCH("What is the current starting price of "&A2&"? Answer as: $X/month")
```

Find who holds a role right now (training data goes stale, search does not):

```
=GPT_WEB_SEARCH("Who is the current CEO of", A2)
```

Monitor recent coverage for a brand:

```
=GPT_WEB_SEARCH("Summarize the most recent news about "&A2&" in two sentences")
```

## Tips

- Ask for a fixed answer format ("Answer as: Name — Year") so the column stays splittable and sortable.
- Web answers can still be wrong — spot-check a sample before building reports on them.
- Uses OpenAI's search-enabled models; by default the add-on falls back to `gpt-4o-mini-search-preview` if no search model is chosen in settings.
- Need raw result links instead of a synthesized answer? Use <a href="/docs/gpt-for-sheets/serp-function">=SERP()</a>.

## Related functions

- <a href="/docs/gpt-for-sheets/perplexity-function">=PERPLEXITY()</a> — another web-aware model, same idea
- <a href="/docs/gpt-for-sheets/serp-function">=SERP()</a> — raw search results with titles and links
- <a href="/docs/gpt-for-sheets/gpt-function">=GPT()</a> — no web access, pure model knowledge

## Try it

`=GPT_WEB_SEARCH()` ships with <a href="/gpt-for-sheets/">GPT for Sheets</a> — no API keys needed. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install the add-on from the Google Workspace Marketplace</a>.

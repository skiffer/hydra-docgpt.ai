---
layout: docs_layouts/default
title: "GPT_CLASSIFY function — categorize data in Google Sheets"
parent: GPT for Sheets
nav_order: 61
permalink: /docs/gpt-for-sheets/gpt-classify
description: "Classify text into your own categories with =GPT_CLASSIFY() in Google Sheets — sentiment analysis, ticket routing, product taxonomy. Syntax and examples."
---

# =GPT_CLASSIFY() — put each row into one category

`=GPT_CLASSIFY()` reads a text and returns exactly one of the categories you define. It replaces manual triage: sentiment analysis, support-ticket routing, product taxonomy — drag it down a column and every row gets sorted. Part of <a href="/gpt-for-sheets/">GPT for Sheets</a>.

## Syntax

```
=GPT_CLASSIFY(value, categories)
```

| Parameter | Required | Description |
|---|---|---|
| `value` | yes | The text to classify — a string or a cell reference. |
| `categories` | yes | The allowed categories, e.g. `"fruit, vegetable"`. Comma-separated values or a range. |

## Examples

Sentiment analysis on customer reviews in `A2`:

```
=GPT_CLASSIFY(A2, "positive, negative, neutral")
```

Route support tickets by topic:

```
=GPT_CLASSIFY(A2, "billing, bug, feature request, other")
```

Sort products into your shop's taxonomy kept in `F1:F20` (a range works as categories):

```
=GPT_CLASSIFY(A2, $F$1:$F$20)
```

Qualify inbound leads from a "How did you hear about us?" answer:

```
=GPT_CLASSIFY(A2, "search, social media, referral, ads, unknown")
```

## Tips

- Always include a catch-all like `other` or `unknown` — otherwise borderline rows get forced into a wrong bucket.
- Keep category names short and distinct; overlapping labels ("sales" vs "business") produce inconsistent picks.
- Drag the formula down for bulk runs — up to 10,000 results per hour — then use **Replace all GPT formulas with results** in the sidebar to freeze the answers.
- Need multiple labels per row instead of one? Use <a href="/docs/gpt-for-sheets/gpt-tag">=GPT_TAG()</a>.

## Related functions

- <a href="/docs/gpt-for-sheets/gpt-tag">=GPT_TAG()</a> — several labels per text instead of one category
- <a href="/docs/gpt-for-sheets/gpt-extract">=GPT_EXTRACT()</a> — pull values out of text
- <a href="/docs/gpt-for-sheets/gpt-summarize">=GPT_SUMMARIZE()</a> — condense long text before classifying

## Try it

`=GPT_CLASSIFY()` ships with <a href="/gpt-for-sheets/">GPT for Sheets</a> — no API keys needed. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install the add-on from the Google Workspace Marketplace</a>.

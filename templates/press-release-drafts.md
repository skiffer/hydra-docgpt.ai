---
layout: page
title: "Press Release Drafts — Google Sheets AI Template"
heading: "Press Release Drafts Template"
permalink: /templates/press-release-drafts/
description: "Draft press releases from launch facts with AI in Google Sheets. Free =GPT() template: headline, dateline, lead, quote and boilerplate in AP-style order."
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Will the draft invent quotes for my spokesperson?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It drafts one quote attributed to the person you name in the sheet — that's standard PR practice, but it means the named spokesperson must approve the wording before distribution. Never send a release with an unapproved quote."
      }
    },
    {
      "@type": "Question",
      "name": "What structure does the generated release follow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The classic wire format: headline under 100 characters, subheadline, dateline (CITY, Month Day, Year), a lead paragraph covering who/what/when/where/why, supporting detail, one attributed quote, closing paragraph and your boilerplate."
      }
    },
    {
      "@type": "Question",
      "name": "Why draft press releases in a spreadsheet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Because launches rarely come one at a time: multiple products, markets or language versions each get a row. Facts stay in columns where they're easy to verify, and =GPT_TRANSLATE() localizes approved drafts for regional media."
      }
    }
  ]
}
</script>
Turn a row of verified launch facts into a wire-ready draft: the sheet keeps who/what/when/where/why in columns you can check, and the formula assembles them into standard press release form.

## What you need in your sheet

| Column | Content |
|---|---|
| A | Announcement (what's launching) |
| B | Key facts (date, price, availability, numbers) |
| C | Quote source (name and title) |
| D | Company boilerplate |
| E | Generated draft |

## The formula

In `E2`, then drag down:

```
=GPT("Write a press release in standard format: headline under 100 characters, one-line subheadline, dateline (CITY, Month Day, Year), lead paragraph answering who/what/when/where/why, one supporting paragraph, one quote attributed to "&C2&", a closing paragraph, then the boilerplate verbatim. 350-450 words. Use only the facts provided — no superlatives, no invented numbers.", "Announcement: "&A2&". Facts: "&B2&". Boilerplate: "&D2)
```

For regional distribution, localize the approved draft in `F2`:

```
=GPT_TRANSLATE(E2, "french")
```

Variations: add a column for embargo date and target outlet type ("trade press", "local business media") to slant the angle, or generate a 3-sentence pitch email per row to send alongside the release.

## Get started

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install GPT for Sheets</a> from the Google Workspace Marketplace (free tier included, no API keys needed).
2. Fill one row per announcement — verified facts in B, real spokesperson in C, standing boilerplate in D.
3. Drag the formula down, get quote sign-off, then use **Replace all GPT formulas with results** in the sidebar.

Full guide: <a href="/docs/gpt-for-sheets">GPT for Sheets documentation</a>.

## FAQ

**Will the draft invent quotes for my spokesperson?**

It drafts one quote attributed to the person you name in the sheet — that's standard PR practice, but it means the named spokesperson must approve the wording before distribution. Never send a release with an unapproved quote.

**What structure does the generated release follow?**

The classic wire format: headline under 100 characters, subheadline, dateline (CITY, Month Day, Year), a lead paragraph covering who/what/when/where/why, supporting detail, one attributed quote, closing paragraph and your boilerplate.

**Why draft press releases in a spreadsheet?**

Because launches rarely come one at a time: multiple products, markets or language versions each get a row. Facts stay in columns where they're easy to verify, and `=GPT_TRANSLATE()` localizes approved drafts for regional media.

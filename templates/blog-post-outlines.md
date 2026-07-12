---
layout: page
title: "Blog Post Outlines — Google Sheets AI Template"
heading: "Blog Post Outlines Template"
permalink: /templates/blog-post-outlines/
description: "Turn a keyword list into blog post outlines with AI in Google Sheets. Free =GPT() template: H2/H3 structures, intent-matched angles and intro paragraphs."
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I outline 100 keywords at once?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. GPT for Sheets processes up to 10,000 results per hour, so a 100-keyword content plan outlines in minutes — drag the formula down the column and results fill in as they complete."
      }
    },
    {
      "@type": "Question",
      "name": "How do I make outlines match search intent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "That's what column B is for. Label each keyword how-to, listicle, comparison or informational, and the prompt structures the H2s accordingly — a comparison keyword gets criteria sections, a how-to gets steps."
      }
    },
    {
      "@type": "Question",
      "name": "Can the sheet write the full posts too?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The template ships with an intro-paragraph column that reads the finished outline. Add more columns that expand each H2 the same way, chaining =GPT() calls — many teams outline in the sheet and draft in their CMS."
      }
    }
  ]
}
</script>
Go from keyword list to writer-ready briefs in one drag: every row becomes an H2/H3 outline matched to search intent, plus an intro paragraph so drafts never start from zero.

## What you need in your sheet

| Column | Content |
|---|---|
| A | Target keyword |
| B | Search intent (how-to, listicle, comparison, informational) |
| C | Audience |
| D | Generated outline |
| E | Generated intro paragraph |

## The formula

In `D2`, then drag down:

```
=GPT("Create a blog post outline for the keyword '"&A2&"' as a markdown list: one H1, then 5-7 H2 sections with 2-3 H3s each. Structure it for this search intent: "&B2&". Audience: "&C2&". No filler sections like 'Conclusion: final thoughts'.")
```

In `E2`, reading the outline it just produced:

```
=GPT("Write a 60-80 word intro for the blog post outlined below, targeting '"&A2&"'. First sentence answers the query directly. No 'In today's fast-paced world' openers.", D2)
```

Variations: add a column asking for "5 questions this post must answer (from People Also Ask style queries)" to enrich each brief, or ask for a suggested meta title and description per row while you're at it.

## Get started

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install GPT for Sheets</a> from the Google Workspace Marketplace (free tier included, no API keys needed).
2. Paste your keyword list into column A, tag intent in B, and add the formulas.
3. Drag them down the list, then use **Replace all GPT formulas with results** in the sidebar and hand the briefs to your writers.

Full guide: <a href="/docs/ai-prompts/improved-content-outlines-2024">Improved content outlines</a>.

## FAQ

**Can I outline 100 keywords at once?**

Yes. GPT for Sheets processes up to 10,000 results per hour, so a 100-keyword content plan outlines in minutes — drag the formula down the column and results fill in as they complete.

**How do I make outlines match search intent?**

That's what column B is for. Label each keyword how-to, listicle, comparison or informational, and the prompt structures the H2s accordingly — a comparison keyword gets criteria sections, a how-to gets steps.

**Can the sheet write the full posts too?**

The template ships with an intro-paragraph column that reads the finished outline. Add more columns that expand each H2 the same way, chaining `=GPT()` calls — many teams outline in the sheet and draft in their CMS.

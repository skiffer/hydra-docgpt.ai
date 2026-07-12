---
layout: page
title: "Cold Email Personalization — Google Sheets AI Template"
heading: "Cold Email Personalization Template"
permalink: /templates/cold-email-personalization/
description: "Write personalized cold email first lines at scale with AI in Google Sheets. Free =GPT() template turning prospect research columns into one-off openers."
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where do the research notes come from?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You supply them — a recent LinkedIn post, funding news, a hiring page, their tech stack. The formula turns a note into a natural opener; it can't research prospects it knows nothing about. Pair it with a lead-enrichment workflow to fill that column faster."
      }
    },
    {
      "@type": "Question",
      "name": "Won't 500 openers all sound alike?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each row sends a different prospect and a different research detail, so no two openers share source material. The prompt also bans the clichés — 'impressive growth', 'I hope this finds you well' — that make merge-field emails smell templated."
      }
    },
    {
      "@type": "Question",
      "name": "How fast can it work through my prospect list?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GPT for Sheets processes up to 10,000 results per hour, so a 1,000-row list gets first lines in minutes. There's a free tier and no API keys — GPT, Claude, Gemini, Mistral and Perplexity models are built in."
      }
    }
  ]
}
</script>
The first line decides whether a cold email gets read, and it's the one part you can't template. This sheet writes a specific, research-based opener for every prospect row, so your sequence tool only has to handle the rest.

## What you need in your sheet

| Column | Content |
|---|---|
| A | First name |
| B | Company |
| C | Research note (recent post, news, hiring, tech stack) |
| D | Your offer, in one line |
| E | Generated first line |

## The formula

In `E2`, then drag down:

```
=GPT("Write a one-sentence cold email opener to "&A2&" at "&B2&", under 25 words, referencing this specific detail: "&C2&". Sound like a person who actually read it. No flattery clichés, no 'I hope this email finds you well'.")
```

Want the whole email drafted? Add in `F2`:

```
=GPT("Write a 60-90 word cold email. Start with this opener: "&E2&". Then bridge to the offer in one sentence and end with a low-friction question, not a meeting demand.", "Offer: "&D2&". Prospect: "&A2&" at "&B2)
```

Variations: add a column that scores each research note "specific enough / too generic" before you spend sends on it, or vary column D per segment so the bridge sentence matches what each vertical cares about. Filling column C is the slow part — the <a href="/templates/lead-enrichment/">lead enrichment template</a> automates it.

## Get started

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install GPT for Sheets</a> from the Google Workspace Marketplace (free tier included, no API keys needed).
2. Export your prospect list with a research-note column filled in.
3. Drag the formula down, skim the output, then use **Replace all GPT formulas with results** in the sidebar and sync to your sequencer.

Full guide: <a href="/docs/ai-prompts/engaging-cold-emails-for-prospects-2024">Engaging cold emails for prospects</a>.

## FAQ

**Where do the research notes come from?**

You supply them — a recent LinkedIn post, funding news, a hiring page, their tech stack. The formula turns a note into a natural opener; it can't research prospects it knows nothing about. Pair it with a lead-enrichment workflow to fill that column faster.

**Won't 500 openers all sound alike?**

Each row sends a different prospect and a different research detail, so no two openers share source material. The prompt also bans the clichés — "impressive growth", "I hope this finds you well" — that make merge-field emails smell templated.

**How fast can it work through my prospect list?**

GPT for Sheets processes up to 10,000 results per hour, so a 1,000-row list gets first lines in minutes. There's a free tier and no API keys — GPT, Claude, Gemini, Mistral and Perplexity models are built in.

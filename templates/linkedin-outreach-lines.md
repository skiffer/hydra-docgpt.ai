---
layout: page
title: "LinkedIn Outreach Lines — Google Sheets AI Template"
heading: "LinkedIn Outreach Lines Template"
permalink: /templates/linkedin-outreach-lines/
description: "Write personalized LinkedIn connection notes and InMail openers in bulk with Google Sheets AI. =GPT() formulas that stay under 300 characters. Free template."
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does this scrape LinkedIn profiles for me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — you bring the profile data (name, headline, company, a recent post or bio line) from your own prospecting export. The template turns that data into personalized lines. Respect LinkedIn's terms and applicable privacy laws for your data source."
      }
    },
    {
      "@type": "Question",
      "name": "Will 500 notes all sound the same?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each row sends its own prospect data to the model, so every note is generated individually from that person's details. The fastest way to kill sameness is feeding a specific hook per row — a post, a career move, a shared interest — not a fancier prompt."
      }
    },
    {
      "@type": "Question",
      "name": "How do I keep connection notes under LinkedIn's limit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Put the constraint in the prompt — 'maximum 280 characters' — and verify with =LEN() in the next column. Regenerate the few that run over."
      }
    }
  ]
}
</script>
Personalization at merge-field level ("Hi {first_name}!") fools no one. This template writes an individual first line per prospect from their actual headline, company and recent activity — 500 rows at a time.

## Layout

| Column | Content | Formula |
|---|---|---|
| A | First name | — |
| B | Headline / title | — |
| C | Company | — |
| D | Hook (recent post, news, shared ground) | — |
| E | Connection note | see below |
| F | Length check | `=LEN(E2)` |

## The formulas

Connection note (LinkedIn caps these at 300 characters), in `E2`:

```
=GPT("Write a LinkedIn connection note. Max 280 characters. Casual, specific, no flattery, no pitch, one reference to the hook. Sign off without a name.", "Name: "&A2&". Role: "&B2&" at "&C2&". Hook: "&D2)
```

InMail opener — first two sentences only, the rest stays human:

```
=GPT("Write the first two sentences of an InMail. Reference the hook naturally, then bridge to why I'm reaching out about "&$H$1&". No 'I hope this finds you well'.", "Name: "&A2&". Role: "&B2&" at "&C2&". Hook: "&D2)
```

Put your one-line value proposition in `H1` so you can rewrite the whole batch's angle by editing a single cell.

## Variations

- **No hook available?** Derive one: `=PERPLEXITY("One recent notable fact about "&C2&", one line")` fills column D when all you have is the company.
- **Follow-up line** — *"Write a 1-sentence follow-up referencing my earlier note, no guilt-tripping"* keeps sequences consistent with the opener.
- **Tone control** — append *"Tone: peer-to-peer, slightly dry"* or whatever matches your voice; test on 10 rows before running 500.

## Get started

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install GPT for Sheets</a> from the Google Workspace Marketplace (free tier included, no API keys needed).
2. Fill columns A–D from your prospect list and paste the formulas.
3. Drag the formulas down your rows, then use **Replace all GPT formulas with results** in the sidebar.

Related guides: <a href="/docs/ai-prompts/linkedin-connection-message-tips-2024">LinkedIn connection message tips</a>, <a href="/docs/gpt-for-sheets/how-to-extract-emails-from-linkedin-into-google-sheets-2024-guide">extract emails from LinkedIn</a>.

## FAQ

**Does this scrape LinkedIn profiles for me?**

No — you bring the profile data (name, headline, company, a recent post or bio line) from your own prospecting export. The template turns that data into personalized lines. Respect LinkedIn's terms and applicable privacy laws for your data source.

**Will 500 notes all sound the same?**

Each row sends its own prospect data to the model, so every note is generated individually from that person's details. The fastest way to kill sameness is feeding a specific hook per row — a post, a career move, a shared interest — not a fancier prompt.

**How do I keep connection notes under LinkedIn's limit?**

Put the constraint in the prompt — "maximum 280 characters" — and verify with =LEN() in the next column. Regenerate the few that run over.

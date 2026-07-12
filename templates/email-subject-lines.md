---
layout: page
title: "Email Subject Lines — Google Sheets AI Template"
heading: "Email Subject Lines Template"
permalink: /templates/email-subject-lines/
description: "Generate A/B test email subject lines with AI in Google Sheets. Free =GPT() template: five variants per email under 50 characters, plus preview text."
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why five variants per email?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Because the point is testing, not a single 'perfect' line. Five variants on different angles — curiosity, benefit, urgency — give you a real A/B pool per campaign; keep the two you like and let your ESP split-test them."
      }
    },
    {
      "@type": "Question",
      "name": "Will the subject lines get past spam filters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No tool can guarantee deliverability — sender reputation and list quality matter far more than wording. What the prompt does do is avoid the classic trigger patterns: ALL CAPS, stacked exclamation marks and shouty 'FREE!!!' phrasing."
      }
    },
    {
      "@type": "Question",
      "name": "Why the 50-character cap?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mobile inboxes truncate subject lines at roughly 30–40 characters, and desktop clients around 60. Fifty keeps the whole line visible almost everywhere; the prompt front-loads the key words so even a hard cut still reads."
      }
    }
  ]
}
</script>
Stop shipping campaigns with one untested subject line: each row takes an email's offer and audience and returns five distinct variants plus matching preview text, ready for your ESP's A/B slot.

## What you need in your sheet

| Column | Content |
|---|---|
| A | Email body or offer summary |
| B | Audience segment |
| C | Angle to test (curiosity, urgency, benefit, social proof) |
| D | Generated subject line variants |
| E | Generated preview text |

## The formula

In `D2`, then drag down:

```
=GPT("Write 5 email subject lines, numbered, each under 50 characters with the key words first. Angle: "&C2&". Sentence case, no ALL CAPS, no stacked punctuation, no spam-bait words like 'FREE!!!'.", "Email: "&A2&". Audience: "&B2)
```

In `E2` for the preview text:

```
=GPT("Write email preview text under 90 characters that extends — not repeats — the subject line's idea and gives one concrete reason to open.", A2)
```

Variations: duplicate the row with a different angle in `C` to test curiosity vs. benefit across the same email, or keep your brand-voice rules in `$G$1` and prepend them with `=GPT($G$1&" "&C2, A2)`.

## Get started

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install GPT for Sheets</a> from the Google Workspace Marketplace (free tier included, no API keys needed).
2. Paste each campaign's offer summary into column A and pick an angle in C.
3. Drag the formulas down, then use **Replace all GPT formulas with results** in the sidebar and load your favorites into the A/B test.

Full guide: <a href="/docs/gpt-for-sheets">GPT for Sheets documentation</a>.

## FAQ

**Why five variants per email?**

Because the point is testing, not a single "perfect" line. Five variants on different angles — curiosity, benefit, urgency — give you a real A/B pool per campaign; keep the two you like and let your ESP split-test them.

**Will the subject lines get past spam filters?**

No tool can guarantee deliverability — sender reputation and list quality matter far more than wording. What the prompt does do is avoid the classic trigger patterns: ALL CAPS, stacked exclamation marks and shouty "FREE!!!" phrasing.

**Why the 50-character cap?**

Mobile inboxes truncate subject lines at roughly 30–40 characters, and desktop clients around 60. Fifty keeps the whole line visible almost everywhere; the prompt front-loads the key words so even a hard cut still reads.

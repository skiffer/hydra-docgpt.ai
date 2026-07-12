---
layout: page
title: "UTM Campaign Builder — Google Sheets AI Template"
heading: "UTM Campaign Builder Template"
permalink: /templates/utm-campaign-builder/
description: "Build consistent UTM parameters and final tracking URLs in Google Sheets: AI normalizes campaign names, sheet formulas assemble the links. Free template."
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why does UTM naming consistency matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Analytics tools treat 'Facebook', 'facebook' and 'fb' as three different sources, splitting one channel's data three ways. Normalizing every value to one convention keeps reports aggregatable."
      }
    },
    {
      "@type": "Question",
      "name": "Which part is AI and which part is a plain formula?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "=GPT() handles the judgment calls — turning 'Summer Sale FR (July)' into 'summer-sale-fr-jul' and mapping messy source names to your canonical list. The final URL is assembled by a plain concatenation formula, so it's deterministic and auditable."
      }
    },
    {
      "@type": "Question",
      "name": "Can it clean up UTM values in an existing campaign export?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — paste the export and use the same normalization formula per column to map legacy values onto your convention, then find-and-replace in your analytics annotations going forward."
      }
    }
  ]
}
</script>
Every marketing team ends up with `Facebook`, `facebook` and `FB Paid` as three "different" sources in analytics. This template fixes it at the origin: AI normalizes names to one convention, a plain formula assembles the final URL, and every link your team ships follows the same scheme.

## Layout

| Column | Content |
|---|---|
| A | Destination URL |
| B | Source (as typed by the requester) |
| C | Medium |
| D | Campaign name (free text) |
| E | Normalized campaign slug (generated) |
| F | Final tagged URL (formula) |

## The formulas

Normalize the campaign name (`E2`):

```
=GPT("Convert this campaign name into a slug: lowercase, hyphen-separated, ASCII only, max 40 characters, keep language/region codes. Return only the slug.", D2)
```

Map sources to your canonical list — keep it in `$H$1` (e.g. `google, facebook, linkedin, newsletter, x`):

```
=GPT("Map this traffic source to the closest value from this list: "&$H$1&". Return only the value.", B2)
```

Assemble the final URL (`F2`) — no AI here, just a formula that handles existing query strings:

```
=A2&IF(ISNUMBER(FIND("?",A2)),"&","?")&"utm_source="&LOWER(B2)&"&utm_medium="&LOWER(C2)&"&utm_campaign="&E2
```

## Variations

- **Content and term parameters**: extend the concatenation with `&"&utm_content="&G2` for ad-variant tracking; normalize those values with the same slug prompt.
- **Convention doc from your data**: `=GPT("From these campaign slugs, write the naming convention they follow as 5 short rules: "&TEXTJOIN(", ",TRUE,E2:E50))` — turns practice into documentation for the next hire.
- **Audit mode**: paste last quarter's UTM export and add `=GPT("Flag anything inconsistent with the convention '"&$H$2&"' in this value. Return OK or the issue.", E2)`.

## Get started

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install GPT for Sheets</a> from the Google Workspace Marketplace (free tier included, no API keys needed).
2. Copy the template or paste the formulas into your own sheet.
3. Drag the formula down your rows, then use **Replace all GPT formulas with results** in the sidebar.

Related: <a href="/docs/gpt-for-sheets/gpt-functions">GPT functions reference</a>, <a href="/templates/data-cleaning/">data cleaning template</a>.

## FAQ

**Why does UTM naming consistency matter?**

Analytics tools treat 'Facebook', 'facebook' and 'fb' as three different sources, splitting one channel's data three ways. Normalizing every value to one convention keeps reports aggregatable.

**Which part is AI and which part is a plain formula?**

=GPT() handles the judgment calls — turning 'Summer Sale FR (July)' into 'summer-sale-fr-jul' and mapping messy source names to your canonical list. The final URL is assembled by a plain concatenation formula, so it's deterministic and auditable.

**Can it clean up UTM values in an existing campaign export?**

Yes — paste the export and use the same normalization formula per column to map legacy values onto your convention, then find-and-replace in your analytics annotations going forward.

---
layout: page
title: "Contact Data Cleaning — Google Sheets AI Template"
heading: "Contact Data Cleaning Template"
permalink: /templates/contact-data-cleaning/
description: "Clean contact lists in Google Sheets with AI: split full names, fix casing, normalize job titles and phone numbers with =GPT_EXTRACT() and =GPT() formulas."
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why use AI instead of SPLIT() and PROPER()?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SPLIT() breaks on 'Mary Jane van der Berg' and PROPER() mangles 'McDonald' and 'CTO'. The AI functions understand names and titles as language, not delimiters, so edge cases that wreck formula chains just work."
      }
    },
    {
      "@type": "Question",
      "name": "Will it invent data for empty or garbage cells?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tell it not to: add 'If not present, return nothing' to extraction prompts. =GPT_EXTRACT() pulls only what is in the cell — it does not look anything up."
      }
    },
    {
      "@type": "Question",
      "name": "Is my contact data sent anywhere?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cell content in the formula is sent to the selected AI model to compute the answer, same as any AI add-on. See the privacy policy for details, and follow your own data-handling rules for personal data."
      }
    }
  ]
}
</script>
CRM exports and event lists arrive with names in one cell, titles in seventeen spellings, and phone numbers in every format on earth. Fix all of it with drag-down formulas instead of an afternoon of manual edits.

## Common fixes

| Problem | Formula |
|---|---|
| Full name in one cell | `=GPT_EXTRACT(A2, "first name")` and `=GPT_EXTRACT(A2, "last name")` |
| SHOUTING or lowercase names | `=GPT("Fix the casing of this person's name. Return the name only.", A2)` |
| Job title chaos ("VP Sales", "V.P., Sales") | `=GPT("Normalize this job title to a standard form, e.g. 'VP of Sales'. Title only.", B2)` |
| Seniority bucketing | `=GPT_CLASSIFY(B2, "C-level, VP, Director, Manager, Individual contributor")` |
| Mixed phone formats | `=GPT("Reformat this phone number as +1 (XXX) XXX-XXXX. If it is not a valid number, return nothing.", C2)` |
| Company name in email signature dump | `=GPT_EXTRACT(D2, "company name")` |

## Tips

- Clean into **new columns** and keep the originals; compare with a quick `=A2=B2` check column before deleting anything.
- Add *"If not present, return nothing"* to every extraction prompt — blanks are better than guesses in a contact list.
- Salutation column for mail merge: `=GPT("Return the short first name to use in 'Hi <name>,'. Name only.", A2)`.

## Get started

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252">Install GPT for Sheets</a> from the Google Workspace Marketplace (free tier included, no API keys needed).
2. Paste the formulas into your own sheet next to the messy columns.
3. Drag the formulas down your rows, then use **Replace all GPT formulas with results** in the sidebar.

Function reference: <a href="/docs/gpt-for-sheets/data-cleaning-functions">data cleaning functions</a>. Duplicate rows too? Continue with the <a href="/templates/deduplication-normalization/">deduplication template</a>.

## FAQ

**Why use AI instead of SPLIT() and PROPER()?**

SPLIT() breaks on "Mary Jane van der Berg" and PROPER() mangles "McDonald" and "CTO". The AI functions understand names and titles as language, not delimiters, so edge cases that wreck formula chains just work.

**Will it invent data for empty or garbage cells?**

Tell it not to: add "If not present, return nothing" to extraction prompts. =GPT_EXTRACT() pulls only what is in the cell — it does not look anything up.

**Is my contact data sent anywhere?**

Cell content in the formula is sent to the selected AI model to compute the answer, same as any AI add-on. See the privacy policy for details, and follow your own data-handling rules for personal data.

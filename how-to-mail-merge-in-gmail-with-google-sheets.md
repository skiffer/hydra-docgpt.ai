---
title: "How to Mail Merge in Gmail with Google Sheets (Step-by-Step)"
permalink: /how-to-mail-merge-in-gmail-with-google-sheets/
description: "Learn how to mail merge in Gmail using Google Sheets: compare Gmail's built-in option, Apps Script, and a one-click add-on that personalizes, tracks, and follows up."
---

# How to Mail Merge in Gmail with Google Sheets (Step-by-Step)

Want to send personalized emails to a list without pasting names one at a time? A mail merge pulls each recipient's details from a Google Sheet and sends an individual, personalized message through Gmail. **Mail Merge for Gmail and Google Sheets** turns your spreadsheet into a send list in a few clicks — with personalization, attachments, open tracking, and automatic follow-ups.

[Try Mail Merge for Gmail and Sheets →](/mail-merge-for-gmail-and-sheets/)

## What "mail merge in Gmail" actually means

A mail merge combines a *template* (your subject and body, with placeholders like `{{first_name}}`) with a *data source* (your Google Sheet, where each row is one recipient). The merge sends one separate email per row, so every person gets a message addressed only to them — never a giant group blast where everyone sees the list.

## What you need before you start

- A **Google Sheet** with one row per recipient and clear column headers (e.g. `email`, `first_name`, `company`).
- A **Gmail or Google Workspace account** to send from.
- An **email template** with placeholders that match your column headers.

## Method 1 — Gmail's built-in mail merge

Gmail offers a native "multi-send" / mail merge mode in the compose window. It is convenient but **plan-gated**: it is available on eligible Google Workspace plans (such as Workspace Individual and Business/Enterprise Standard and Plus tiers, and eligible Education plans). Free `@gmail.com` accounts cannot use the built-in mail merge, and the native feature offers limited personalization, no built-in attachments per row, and no open tracking or automated follow-ups.

## Method 2 — Google Apps Script (free but technical)

You can script a mail merge with Google Apps Script that reads your Sheet and sends through Gmail. It is free, but you write and maintain code, handle authorization scopes yourself, and stay within Gmail's normal sending quotas. It is a fine path for developers and a poor fit if you just want to send today.

## Method 3 — Mail Merge add-on for Sheets + Gmail (fastest)

A dedicated add-on reads your Sheet and sends through your own Gmail, adding the things the native option lacks: rich personalization across many fields, per-row attachments, open and click tracking, scheduled sends, and automatic follow-ups to non-openers. This is the practical Sheets-native path for people on free Gmail or any Workspace plan.

[Start your first merge →](/mail-merge-for-gmail-and-sheets/)

## Step-by-step: mail merge with the add-on

1. **Build your Sheet.** Put one recipient per row, with a column for each piece of data you want to personalize (`email`, `first_name`, `company`, anything else).
2. **Write your template** in the tool, using placeholders that match your headers, e.g. `Hi {{first_name}}, quick note about {{company}}…`.
3. **Map your columns** so each placeholder pulls from the right column.
4. **Add attachments or tracking** if you need them — a per-row file column, open tracking, and follow-ups.
5. **Send a test to yourself** and check that every placeholder resolves and nothing shows raw `{{tags}}`.
6. **Send**, then watch opens, clicks, and replies, and let follow-ups go out to people who did not respond.

## Test send and preview before going live

Always send yourself (or a colleague) a real test first. Confirm the subject and body read naturally, every merge field fills in, links work, and any attachment is the right file. A two-minute test prevents an embarrassing `Hi {{first_name}}` going out to hundreds of people.

## Sending limits and deliverability basics

Gmail enforces daily sending limits — directionally around 500 recipients per day on free Gmail and up to roughly 2,000 per day on Google Workspace (figures vary by account and can change). To protect your sender reputation: only email people who expect to hear from you, include a clear way to opt out, avoid spammy subject lines and link-heavy blasts, and spread large lists across days. Respecting consent rules such as CAN-SPAM and GDPR is your responsibility as the sender.

## Related Mail Merge resources

- [Mail Merge for Gmail and Google Sheets](/mail-merge-for-gmail-and-sheets/)
- [Gmail mail merge from Google Sheets](/gmail-mail-merge-from-google-sheets/)
- [CSV mail merge in Gmail and Google Sheets](/csv-mail-merge-gmail-google-sheets/)
- [Mail merge with attachments](/mail-merge-with-attachments-gmail-google-sheets/)
- [Mail merge tracking for Gmail campaigns](/mail-merge-tracking-gmail-campaigns/)

## How to mail merge in Gmail FAQ

### Can I mail merge in Gmail for free?

You can use Google Apps Script for free, and free `@gmail.com` accounts can use a Sheets-based add-on (subject to its own free-tier limits). Gmail's built-in mail merge, however, requires an eligible Google Workspace plan.

### Do I need Google Workspace to use Gmail's built-in mail merge?

Yes. Gmail's native multi-send / mail merge is available only on eligible Workspace plans. Free Gmail users can mail merge with an add-on or Apps Script instead.

### How many emails can I send in a Gmail mail merge?

Gmail limits daily recipients — directionally around 500 per day on free Gmail and up to about 2,000 per day on Workspace. These numbers vary by account and change over time, so check your account and spread large sends across days.

### How is a mail merge different from a group email?

A mail merge sends a separate, personalized message to each recipient, so people never see each other's addresses. A group email puts everyone on one message, exposing the list and feeling impersonal.

## Send your first personalized merge

Keep your recipients in Google Sheets, write one template, and let Mail Merge for Gmail and Sheets handle the personalized sending, tracking, and follow-ups.

[Try Mail Merge for Gmail and Sheets →](/mail-merge-for-gmail-and-sheets/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "Can I mail merge in Gmail for free?", "acceptedAnswer": {"@type": "Answer", "text": "You can use Google Apps Script for free, and free Gmail accounts can use a Sheets-based add-on subject to its own free-tier limits. Gmail's built-in mail merge requires an eligible Google Workspace plan."}},
    {"@type": "Question", "name": "Do I need Google Workspace to use Gmail's built-in mail merge?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Gmail's native multi-send / mail merge is available only on eligible Workspace plans. Free Gmail users can mail merge with an add-on or Apps Script instead."}},
    {"@type": "Question", "name": "How many emails can I send in a Gmail mail merge?", "acceptedAnswer": {"@type": "Answer", "text": "Gmail limits daily recipients, directionally around 500 per day on free Gmail and up to about 2,000 per day on Workspace. These numbers vary by account and change over time, so spread large sends across days."}},
    {"@type": "Question", "name": "How is a mail merge different from a group email?", "acceptedAnswer": {"@type": "Answer", "text": "A mail merge sends a separate, personalized message to each recipient, so people never see each other's addresses. A group email puts everyone on one message, exposing the list and feeling impersonal."}}
  ]
}
</script>

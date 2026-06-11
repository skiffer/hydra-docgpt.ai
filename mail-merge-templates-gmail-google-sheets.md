---
title: "Mail Merge Email Templates for Gmail and Google Sheets"
permalink: /mail-merge-templates-gmail-google-sheets/
description: "Copy-and-personalize mail merge templates for Gmail and Google Sheets: sales, follow-up, recruiting, event, and update emails with merge fields that map to your columns."
---

# Mail Merge Email Templates for Gmail and Google Sheets (Copy & Personalize)

Want proven email copy you can fill in and send today? These mail merge templates use merge fields like `{{first_name}}` that map straight to your Google Sheet columns, so each recipient gets a personalized message. **Mail Merge for Gmail and Google Sheets** turns any of these templates into a personalized campaign in a few clicks.

[Try Mail Merge for Gmail and Sheets →](/mail-merge-for-gmail-and-sheets/)

## How templates and Sheet columns work together

A merge field is a placeholder wrapped in double braces, like `{{first_name}}` or `{{company}}`. When you send, the tool replaces each placeholder with the matching value from that recipient's row in your Sheet. So a template stays one piece of copy, but every recipient sees their own details.

## Set up your Sheet columns first

Add one column per placeholder you want to use. A common starter set:

| Column header | Used for | Example value |
|---|---|---|
| `email` | recipient address | jordan@example.com |
| `first_name` | greeting + personalization | Jordan |
| `company` | context | Northwind |
| `role` | relevance | Operations Lead |
| `custom_line` | a tailored sentence | we loved your recent launch |

Match your placeholders to these headers exactly and every template below will personalize automatically.

[Map your Sheet and send →](/mail-merge-for-gmail-and-sheets/)

## Template pack (copy and personalize)

**Sales outreach**

Subject: `Quick idea for {{company}}`

Hi {{first_name}}, I noticed {{custom_line}} and thought it might be worth a quick conversation. We help teams like {{company}} send personalized outreach from a simple spreadsheet. Open to a short call next week? — {{sender_name}}

**Follow-up (no reply)**

Subject: `Re: {{company}}`

Hi {{first_name}}, just floating this back to the top of your inbox in case it slipped by. Happy to share a one-line summary if that is easier. — {{sender_name}}

**Recruiting outreach**

Subject: `{{role}} role at {{company}}`

Hi {{first_name}}, your background stood out for a {{role}} opening we are hiring for. Would you be open to a quick chat about it this week? — {{sender_name}}

**Event / webinar invite**

Subject: `You're invited: {{event_name}}`

Hi {{first_name}}, we are hosting {{event_name}} on {{event_date}} and thought it would be relevant to you at {{company}}. Save your spot here: {{event_link}}. — {{sender_name}}

**Customer update**

Subject: `{{company}} — what's new this month`

Hi {{first_name}}, a quick update on what changed this month: {{custom_line}}. Reply any time with questions. — {{sender_name}}

**Light newsletter**

Subject: `{{topic}} — a short note`

Hi {{first_name}}, here is one useful thing on {{topic}} this week: {{custom_line}}. You can unsubscribe any time using the link below. — {{sender_name}}

## Personalization tags that boost replies

Beyond `{{first_name}}`, a single tailored line (`{{custom_line}}`) referencing something specific to the recipient lifts reply rates more than any other tweak. Keep subjects short, lead with relevance, and avoid stuffing every field just because you can.

## Test send, then track and follow up

Send a test to yourself first and confirm every placeholder resolves — no raw `{{tags}}` should appear. Then send, watch opens and clicks, and let follow-ups go to people who did not reply.

## Sending-quality cautions

Templates are a starting point, not a license to blast. Only email people who have consented to hear from you, include a working unsubscribe/opt-out and a real sign-off, keep examples generic (no impersonating real people or brands), and respect Gmail's daily sending limits and laws like CAN-SPAM and GDPR. No template guarantees results.

## Related Mail Merge resources

- [Mail Merge for Gmail and Google Sheets](/mail-merge-for-gmail-and-sheets/)
- [Sales outreach mail merge](/sales-outreach-mail-merge-gmail-google-sheets/)
- [Recruiting outreach mail merge](/recruiting-outreach-mail-merge-google-sheets/)
- [Mail merge follow-up emails](/mail-merge-follow-up-emails-google-sheets/)
- [Personalized email from Google Sheets](/personalized-email-from-google-sheets/)

## Mail merge templates FAQ

### How do merge fields in a template work?

A merge field like `{{first_name}}` is a placeholder. When you send, it is replaced with the matching value from each recipient's row in your Google Sheet, so one template produces many personalized emails.

### Do my Sheet column names have to match the template tags?

Yes. Each placeholder must match a column header so the tool knows which value to insert. Keep them identical, for example a `company` column for a `{{company}}` tag.

### Can I add my own custom personalization line?

Yes. Add a column such as `custom_line` with a tailored sentence per recipient and reference it as `{{custom_line}}`. A specific, relevant line is the single biggest driver of replies.

### Are these templates safe to send as-is?

Treat them as starting copy. Edit for your voice, email only consented contacts, include an unsubscribe option, and run a test send first. Following anti-spam rules is the sender's responsibility.

## Grab the templates and send

Keep recipients in Google Sheets, drop in a template, map your columns, and let Mail Merge for Gmail and Sheets personalize and send each message.

[Try Mail Merge for Gmail and Sheets →](/mail-merge-for-gmail-and-sheets/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "How do merge fields in a template work?", "acceptedAnswer": {"@type": "Answer", "text": "A merge field like {{first_name}} is a placeholder. When you send, it is replaced with the matching value from each recipient's row in your Google Sheet, so one template produces many personalized emails."}},
    {"@type": "Question", "name": "Do my Sheet column names have to match the template tags?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Each placeholder must match a column header so the tool knows which value to insert. Keep them identical, for example a company column for a {{company}} tag."}},
    {"@type": "Question", "name": "Can I add my own custom personalization line?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Add a column such as custom_line with a tailored sentence per recipient and reference it as {{custom_line}}. A specific, relevant line is the single biggest driver of replies."}},
    {"@type": "Question", "name": "Are these templates safe to send as-is?", "acceptedAnswer": {"@type": "Answer", "text": "Treat them as starting copy. Edit for your voice, email only consented contacts, include an unsubscribe option, and run a test send first. Following anti-spam rules is the sender's responsibility."}}
  ]
}
</script>

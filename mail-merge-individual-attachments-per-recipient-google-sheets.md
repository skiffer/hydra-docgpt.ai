---
title: "Mail Merge Individual Attachments per Recipient"
permalink: /mail-merge-individual-attachments-per-recipient-google-sheets/
description: "Send a different file to each recipient with a Gmail + Google Sheets mail merge — unique invoices, certificates, payslips, or contracts keyed from a Drive-link column, step by step."
---

{% raw %}
# Mail Merge with Individual Attachments per Recipient (Gmail + Google Sheets)

Need every recipient to get their *own* file — a unique invoice, certificate, payslip, or contract — instead of one shared attachment? That is a different job from a normal mail merge, and it is exactly where a **per-recipient attachment workflow** earns its keep. With **Mail Merge for Gmail and Google Sheets**, you keep a Drive link to each person's file in a spreadsheet column, and each row gets the right file paired with a personalized message.

[Send everyone their own file from Google Sheets — start free →](/mail-merge-for-gmail-and-sheets/)

Google Sheets, Google Drive, and Gmail are trademarks of Google LLC, used here descriptively; this page implies no affiliation or endorsement.

## When you need a different file for each recipient

A standard mail merge attaches the *same* file to everyone. Many real tasks need the opposite — a unique document per person:

- **Invoices and receipts** — each client gets only their own invoice.
- **Certificates and diplomas** — each participant receives their named certificate.
- **Payslips and statements** — each employee gets their own confidential document.
- **Contracts and agreements** — each signer receives their specific copy.
- **Per-client reports** — each account gets its own results PDF.

The defining trait: the attachment changes row by row, keyed to the recipient. Doing that by hand is slow and error-prone, which is precisely what pushes people to a dedicated workflow.

## Setting up an attachment-link column in Google Sheets

1. **Store the files in Google Drive.** Put each recipient's file in a Drive folder (one file per person).
2. **Get a link per file.** Copy each file's Drive link.
3. **Add an "Attachment" column** to your recipient sheet and paste each person's file link into their row.
4. **Check permissions.** Ensure the files are accessible for the send (and that you are not exposing one person's document to another).

| Email | First name | Invoice no. | Attachment (Drive link) |
|---|---|---|---|
| ada@example.com | Ada | INV-1042 | drive.google.com/…/inv1042 |
| ben@example.com | Ben | INV-1043 | drive.google.com/…/inv1043 |

## Step-by-step: personalized per-row attachments

1. **Prepare the sheet** with email, personalization columns, and the Attachment link column above.
2. **Open Mail Merge for Gmail and Sheets** on that sheet.
3. **Write your template**, merging fields like {{First name}} and {{Invoice no.}} into the body and subject.
4. **Map the attachment column** so each send pulls that row's file.
5. **Preview a few rows** and confirm the right file is paired with the right person.
6. **Send a test to yourself**, open the attachment, and verify it is correct.
7. **Send the campaign**, then spot-check delivery.

## Common cases: invoices, certificates, payslips, contracts

- **Invoices:** merge the invoice number and amount into the body; attach the matching PDF per row.
- **Certificates:** personalize "Congratulations, {{First name}}" and attach each named certificate.
- **Payslips:** keep files strictly one-per-employee; double-check the email-to-file pairing before sending confidential pay data.
- **Contracts:** reference the agreement name in the body and attach the recipient's specific copy.

## Combining per-recipient files with personalized body & subject

The attachment is only half the personalization. Pair it with merge fields in the subject and body so the whole message feels individual: "Hi {{First name}}, your invoice {{Invoice no.}} for {{Amount}} is attached." A consistent, accurate message plus the correct file builds trust — especially for finance and HR documents.

## Deliverability, file-size & sending-limit tips

- Keep attachments within Gmail's per-message size limits; link to Drive for very large files.
- Respect Gmail/Workspace daily sending limits — batch large runs across the day.
- Use permissioned, accurate recipient data and send a test before the full run.
- Avoid spammy subject lines; document-delivery emails should be plain and clear.

## Troubleshooting (wrong file, broken link, permissions)

- **Wrong file attached:** re-check that each Drive link sits on the correct recipient row; sort/filter carefully so rows don't shift.
- **Broken or empty link:** confirm the file still exists and the link cell isn't blank.
- **Permission errors:** ensure the files are reachable for the send and that recipients only receive their own document — never expose another person's file.

[Pair the right file with the right person — start free →](/mail-merge-for-gmail-and-sheets/)

## Related Mail Merge resources

- [Mail Merge for Gmail and Google Sheets](/mail-merge-for-gmail-and-sheets/)
- [Mail merge with attachments (Gmail + Sheets)](/mail-merge-with-attachments-gmail-google-sheets/)
- [Invoice payment reminder mail merge (Gmail + Sheets)](/invoice-payment-reminder-mail-merge-gmail-sheets/)
- [Mail merge personalization tags (Google Sheets)](/mail-merge-personalization-tags-google-sheets/)
- [Mail merge preview & test send (Gmail + Sheets)](/mail-merge-preview-test-send-gmail-google-sheets/)

## Individual attachments FAQ

### Can a mail merge send a different attachment to each recipient?

Yes. Keep a Drive link to each person's file in an attachment column on your Google Sheet, map that column in Mail Merge for Gmail and Sheets, and each row's email pulls its own file.

### How do I set up per-recipient files?

Store each file in Google Drive, paste each file's link into the matching recipient row, then map the attachment column when you build the merge. Preview and test before sending.

### Is this safe for confidential documents like payslips?

It can be, with care. Keep one file per person, verify the email-to-file pairing, ensure recipients only receive their own document, and never expose another person's file. Send a test first.

### What if a file is too large to attach?

Keep within Gmail's per-message size limits, or share very large files via a Drive link in the body instead of a direct attachment.

### Why did the wrong file go out?

Usually a row mismatch — a sort or filter shifted the link column out of alignment, or a link cell was blank. Re-verify the pairing and preview a few rows before sending.

## Send everyone the right file

Per-recipient attachments turn a tedious manual task into a clean, repeatable send. Set up the Drive-link column, test carefully, and use Mail Merge for Gmail and Sheets to deliver each person their own document at scale.

[Try Mail Merge for Gmail and Sheets →](/mail-merge-for-gmail-and-sheets/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "Can a mail merge send a different attachment to each recipient?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Keep a Drive link to each person's file in an attachment column on your Google Sheet, map that column in Mail Merge for Gmail and Sheets, and each row's email pulls its own file."}},
    {"@type": "Question", "name": "How do I set up per-recipient files?", "acceptedAnswer": {"@type": "Answer", "text": "Store each file in Google Drive, paste each file's link into the matching recipient row, then map the attachment column when you build the merge. Preview and test before sending."}},
    {"@type": "Question", "name": "Is this safe for confidential documents like payslips?", "acceptedAnswer": {"@type": "Answer", "text": "It can be, with care. Keep one file per person, verify the email-to-file pairing, ensure recipients only receive their own document, and never expose another person's file. Send a test first."}},
    {"@type": "Question", "name": "What if a file is too large to attach?", "acceptedAnswer": {"@type": "Answer", "text": "Keep within Gmail's per-message size limits, or share very large files via a Drive link in the body instead of a direct attachment."}},
    {"@type": "Question", "name": "Why did the wrong file go out?", "acceptedAnswer": {"@type": "Answer", "text": "Usually a row mismatch — a sort or filter shifted the link column out of alignment, or a link cell was blank. Re-verify the pairing and preview a few rows before sending."}}
  ]
}
</script>

{% endraw %}

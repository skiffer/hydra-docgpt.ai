---
title: "Mail Merge from Excel Using Gmail and Google Sheets"
permalink: /mail-merge-from-excel-gmail-google-sheets/
description: "Want to mail merge from Excel to Gmail? Import your .xlsx into Google Sheets, then send personalized Gmail campaigns with merge fields, attachments, and tracking."
---

# How to Mail Merge from Excel Using Gmail and Google Sheets

Your contact list is in an Excel file, and you want to send each person a personalized email from Gmail. The catch: Gmail does not read `.xlsx` files directly. The reliable path is to **import your Excel data into Google Sheets, then run a Sheets-native mail merge**. **Mail Merge for Gmail and Google Sheets** handles the sending side once your list is in Sheets.

[Try Mail Merge for Gmail and Sheets →](/mail-merge-for-gmail-and-sheets/)

## Can you mail merge from Excel directly in Gmail?

Not directly. Gmail has no native connection to an Excel workbook on your computer. Google Workspace does offer a built-in mail merge feature, but it is plan-gated (available on Workspace Individual, Business Standard and above, Enterprise, and Education tiers) and it reads from Google Sheets or contacts — not from a local `.xlsx` file.

So whichever tool you use, the first step is the same: get your Excel data into Google Sheets. The good news is that import takes under a minute, and from there your spreadsheet becomes a live, reusable list for every future campaign.

## Step 1: Import your Excel file into Google Sheets

1. Open [Google Sheets](https://sheets.google.com) and create a blank spreadsheet.
2. Choose **File → Import → Upload** and select your `.xlsx` file.
3. Pick **Replace spreadsheet** (or **Insert new sheet**) and confirm the import.
4. Check that your headers landed in row 1 and the data lines up underneath.

## Step 2: Clean up your columns and merge fields

A clean sheet makes for clean emails. Before you send:

- Keep clear header names like `email`, `first_name`, `company`, and any personalization fields.
- Remove blank rows and obvious duplicates.
- Split combined fields (for example, separate full names into `first_name` and `last_name`) if you want to greet people by first name.
- Add a `status` column to track draft, tested, sent, replied, and bounced rows.

## Step 3: Draft your personalized Gmail campaign

1. Install and open **Mail Merge for Gmail and Google Sheets** from your spreadsheet.
2. Write a Gmail template and insert merge tags such as `{{first_name}}` and `{{company}}`.
3. Keep the copy natural so it reads well once each field is filled in.

A simple example:

> Hi {{first_name}}, I saw {{company}} is hiring and wanted to share a quick idea...

## Step 4: Test send and check personalization

Always send a **test message** to yourself and one colleague first. Open it and confirm every merge tag resolves — no stray `{{first_name}}` placeholders, no blank greetings from empty cells. Fix any gaps in the Sheet, then re-test.

## Step 5: Send and track from Gmail

Send in small batches at first, then scale while you watch replies and bounces. Because messages go from your own Gmail or Workspace mailbox, replies come straight back to you, and tracking (where supported) shows opens and clicks.

[Bring your Excel list into Sheets and start sending →](/mail-merge-for-gmail-and-sheets/)

## Excel vs Google Sheets for mail merge

| Consideration | Excel (.xlsx) | Google Sheets |
|---|---|---|
| Gmail mail merge support | Not direct — must import first | Works with Sheets-native mail merge |
| Live, shareable list | File-based, manual sharing | Cloud-based, shareable link |
| Reuse across campaigns | Re-import each time | One sheet, reused anytime |
| Collaboration | Limited | Real-time, multi-user |

Excel is fine for storing and preparing data. For sending personalized Gmail campaigns, Google Sheets is the working surface.

## Tips for clean data before you send

- Standardize email formatting and trim trailing spaces.
- Verify addresses look valid; remove obvious typos.
- Keep one recipient per row and one field per column.
- Use consistent capitalization in names so greetings read naturally.

## Related resources

- [Mail Merge for Gmail and Google Sheets](/mail-merge-for-gmail-and-sheets/)
- [CSV mail merge in Gmail and Google Sheets](/csv-mail-merge-gmail-google-sheets/)
- [Mail merge personalization tags from Google Sheets](/mail-merge-personalization-tags-google-sheets/)
- [Gmail mail merge from Google Sheets](/gmail-mail-merge-from-google-sheets/)
- [Send bulk email with Gmail and Google Sheets](/send-bulk-email-gmail-google-sheets-mail-merge/)

## Mail merge from Excel FAQ

### Can Gmail mail merge directly from an Excel file?

No. Gmail cannot read a local `.xlsx` file. Import the Excel file into Google Sheets first (File → Import), then run a Sheets-native mail merge.

### Does importing Excel into Google Sheets change my original file?

No. Importing creates a copy of the data in Google Sheets. Your original Excel file stays unchanged on your computer.

### Is Gmail's built-in mail merge free?

Google Workspace's built-in mail merge is plan-gated (Individual, Business Standard and above, Enterprise, and Education tiers). A dedicated mail merge add-on can work across more Gmail accounts; check current details before relying on either.

### How many emails can I send?

Sending is bounded by your Gmail or Google Workspace daily limits. Pace larger campaigns and split them across days if needed rather than exceeding your account's limit.

### Will personalized emails land in the inbox?

No tool can guarantee inbox placement. Genuine personalization, a clean list, sensible pacing, and a test send all improve your odds.

## Start with the list you already have

You do not need to rebuild your data — your Excel list is ready to go. Import it into Google Sheets, add your merge fields, and send personalized Gmail campaigns from the spreadsheet you already maintain.

[Try Mail Merge for Gmail and Sheets →](/mail-merge-for-gmail-and-sheets/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "Can Gmail mail merge directly from an Excel file?", "acceptedAnswer": {"@type": "Answer", "text": "No. Gmail cannot read a local .xlsx file. Import the Excel file into Google Sheets first (File → Import), then run a Sheets-native mail merge."}},
    {"@type": "Question", "name": "Does importing Excel into Google Sheets change my original file?", "acceptedAnswer": {"@type": "Answer", "text": "No. Importing creates a copy of the data in Google Sheets. Your original Excel file stays unchanged on your computer."}},
    {"@type": "Question", "name": "Is Gmail's built-in mail merge free?", "acceptedAnswer": {"@type": "Answer", "text": "Google Workspace's built-in mail merge is plan-gated (Individual, Business Standard and above, Enterprise, and Education tiers). A dedicated mail merge add-on can work across more Gmail accounts; check current details before relying on either."}},
    {"@type": "Question", "name": "How many emails can I send?", "acceptedAnswer": {"@type": "Answer", "text": "Sending is bounded by your Gmail or Google Workspace daily limits. Pace larger campaigns and split them across days if needed rather than exceeding your account's limit."}},
    {"@type": "Question", "name": "Will personalized emails land in the inbox?", "acceptedAnswer": {"@type": "Answer", "text": "No tool can guarantee inbox placement. Genuine personalization, a clean list, sensible pacing, and a test send all improve your odds."}}
  ]
}
</script>

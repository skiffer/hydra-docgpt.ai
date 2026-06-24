---
title: "Mail Merge with Inline Images (Gmail & Google Sheets)"
permalink: /mail-merge-inline-images-gmail-google-sheets/
description: "Add inline images to a Gmail mail merge from Google Sheets. Embed a logo or banner, vary images per recipient, keep emails light, and test rendering."
---

{% raw %}
# How to Add Inline Images to a Mail Merge in Gmail and Google Sheets

Sometimes a campaign needs more than text and attachments — it needs a logo, a banner, or a product image shown right inside the email. With **Mail Merge for Gmail and Google Sheets**, you can include inline images in your personalized sends and even vary the image per recipient using a column in your Sheet.

[Try Mail Merge for Gmail and Sheets →](/mail-merge-for-gmail-and-sheets/)

## Inline images vs attachments: what's the difference?

An **attachment** is a file the recipient downloads (a PDF, an image file). An **inline image** is displayed directly in the body of the email, so the reader sees it without opening anything.

Use inline images for on-brand visuals — a logo, a header banner, a product shot — that should be seen immediately. Use attachments when the recipient needs to keep or print a file. Many campaigns use both.

## Preparing your images

Get your images ready before you build the template:

- **Use owned or licensed images only.** Do not reuse images you do not have the rights to.
- **Keep them light.** Large images slow loading and can hurt deliverability; resize to a sensible width for email.
- **Decide hosting vs embedding.** A stable, public image URL is convenient for per-recipient images; an embedded image travels with the message. Choose based on how your tool inserts images and whether images vary per row.
- **Add alt text** so the message still makes sense if images do not load.

## Adding a shared image to your template

For a single image that everyone receives — a logo or banner — insert it once into your Gmail template where you want it to appear. Every recipient gets the same visual, personalized only in the text around it. This is the most common setup for newsletters and announcements.

[Send on-brand, image-rich emails from your Sheet →](/mail-merge-for-gmail-and-sheets/)

## Personalizing images per recipient with a Sheets column

To vary the image by recipient, add a column to your Google Sheet that holds an image URL per row — for example `image_url`:

| first_name | image_url |
|---|---|
| Maria | https://example.com/img/north.png |
| Sam | https://example.com/img/south.png |

Then reference that column in your template so each recipient receives their own image. This is useful for region-specific banners, per-customer product shots, or personalized graphics. Make sure every URL is public, stable, and points to an image you are licensed to use.

## Keeping emails light for deliverability and mobile

Heavy, image-only emails are a known deliverability risk and load slowly on phones. Keep a healthy balance of text and images, compress files, avoid embedding many large pictures, and remember that some clients hide images until the reader clicks "display images" — so your message should still read well with images off.

## Test send and check rendering

Before the full send, send a **test message** to yourself and a colleague, then check:

- images appear where you intend, at a reasonable size;
- per-recipient images pull the correct row's URL;
- the email looks right on both desktop and mobile;
- alt text shows when images are blocked;
- no merge tags are left unresolved.

## Frequently asked questions

### Can I embed an image inside a Gmail mail merge instead of attaching it?

Yes. You can place an inline image in your template so it shows in the body of the email, separately from any file attachments.

### Can each recipient get a different image?

Yes. Add an image-URL column to your Google Sheet and reference it in your template, so each row's image is used for that recipient.

### Should I host images or embed them?

Both work. A stable public URL is convenient for per-recipient images; an embedded image travels with the message. Pick based on how your tool inserts images and whether the image varies per row.

### Will inline images hurt deliverability?

They can if emails are heavy or image-only. Keep a balance of text and images, compress files, add alt text, and test send before sending to your list.

### Do I need rights to the images I use?

Yes. Use only images you own or are licensed to use, and add alt text so the email still makes sense if images do not load.

## Make your next campaign more visual

Inline images turn a plain merge into an on-brand email your readers actually want to look at. Prepare your images, add them to your template (or a column per recipient), test send, and go.

[Try Mail Merge for Gmail and Sheets →](/mail-merge-for-gmail-and-sheets/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "Can I embed an image inside a Gmail mail merge instead of attaching it?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. You can place an inline image in your template so it shows in the body of the email, separately from any file attachments."}},
    {"@type": "Question", "name": "Can each recipient get a different image?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Add an image-URL column to your Google Sheet and reference it in your template, so each row's image is used for that recipient."}},
    {"@type": "Question", "name": "Should I host images or embed them?", "acceptedAnswer": {"@type": "Answer", "text": "Both work. A stable public URL is convenient for per-recipient images; an embedded image travels with the message. Pick based on how your tool inserts images and whether the image varies per row."}},
    {"@type": "Question", "name": "Will inline images hurt deliverability?", "acceptedAnswer": {"@type": "Answer", "text": "They can if emails are heavy or image-only. Keep a balance of text and images, compress files, add alt text, and test send before sending to your list."}},
    {"@type": "Question", "name": "Do I need rights to the images I use?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Use only images you own or are licensed to use, and add alt text so the email still makes sense if images do not load."}}
  ]
}
</script>

{% endraw %}

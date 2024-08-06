---
layout: docs_layouts/default
title: Indexing pages for search results in Google Sheets
nav_order: 2
parent: GPT for Sheets
permalink: /docs/gpt-for-sheets/indexing-pages-for-search-results-in-google-sheets
description: Easily manage and index your web pages directly from Google Sheets with our advanced indexing feature. Simplify the process of notifying Google when your pages are added or updated, ensuring your content is always visible and up-to-date in search results.
---

# <a href="/gpt-for-sheets/">Indexing pages for search results in Google Sheets</a>

> Learn how to index your web pages for search results using Google Sheets. This tutorial will guide you through the steps to install the necessary add-on, generate SEO-optimized content, and use the GOOGLE_INDEXING function to notify Google of new or updated pages.


## Before starting
### Links:
- <a href="https://workspace.google.com/marketplace/app/gpt_for_docs_sheets_forms_slides/466607203252?utm_source=pricing_section&utm_medium=landing_page&utm_campaign=email_assistant_gpt_campaign">Install the GPT for Sheets, Docs, Slides, Forms</a> add-on
- <a href="/gpt-for-sheets/">Upgrade to Premium</a>
- Optional -> RECOMMENDATION: The best way to ensure optimal performance with Google Add-Ons is by using the Google Chrome browser. This helps bypass any potential issues that may arise from compatibility with other browsers.

### Example of use
<iframe width="560" height="315" src="https://www.youtube.com/embed/V4IRVKBHJy4?si=3qoBVoXAddHTg7qR" title="How to use GPT for Sheets" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


> To generate SEO-optimized content that you can push to your site, use the =SEO_BLOG() function or the =GPT() function in Google Sheets.

## Using the SEO_BLOG Function

Generate a fully optimized blog post with a specific title, writing tone, and language:

> =SEO_BLOG("blog title", "writing tone", "language")

For example:

> =SEO_BLOG("The Benefits of Organic Coffee", "friendly", "English")

### Using the GPT Function

Alternatively, you can use the =GPT() function to generate content for your site. This function allows for more general content creation:

> =GPT("write an article about the benefits of organic coffee")

## Indexing Pages with the GOOGLE_INDEXING Function
The GOOGLE_INDEXING function allows site owners to directly notify Google when pages are added or updated. This function is available for 'User Pro' plans.

### Authorize Application
Launch the sidebar of the add-on: <a href="/gpt-for-sheets/">GPT for Sheets</a>

### Open GOOGLE_INDEX() function with description and click on **Authorize Application**

### Function Syntax
=GOOGLE_INDEXING(url)
- url (required): The URL to notify Google for indexing. 
 
#### Example Usage
To notify Google of a new or updated page, use the following function call in Google Sheets:

=GOOGLE_INDEXING("https://docgpt.ai/docs/")

Conclusion
By following this tutorial, you can easily manage and index your web pages directly from Google Sheets. With the GOOGLE_INDEXING function, you can ensure that your content is always up-to-date in search results. Start optimizing and indexing your pages today to improve your site's visibility and SEO performance.
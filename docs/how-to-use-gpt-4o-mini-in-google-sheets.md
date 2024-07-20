---
layout: docs_layouts/default
title: How to use GPT-4o-mini in Google Sheets
nav_order: 3
parent: GPT for Sheets
permalink: /docs/gpt-for-sheets/how-to-use-gpt-4o-mini-in-google-sheets
description: Explore tutorials, API docs, and dynamic examples to get gpt-4o-mini in Google Sheets
---

# How to use [GPT-4o-mini for Sheets](/gpt-for-sheets/)

To use the GPT-4-Mini AI assistant in Google Sheets, follow these steps:

1. **Install the GPT for Sheets Add-On** from the [GPT-4o-mini for Sheets](https://workspace.google.com/marketplace/app/gpt_for_docs_sheets_forms_slides/466607203252).

2. **Upgrade your subscription to the Pro User plan** for the GPT for Sheets Add-On by visiting [GPT-4o-mini for Sheets](/gpt-for-sheets/).

3. **Create an OpenAI API key** by:
   - Logging into the [OpenAI platform](https://platform.openai.com/account/api-keys){:target="_blank" rel="nofollow"}
   - Clicking "Create new secret key".
   - Copying the generated key.

4. **Open a Google Sheet** with the GPT for Sheets Add-On installed. Launch the sidebar by going to `Extensions > GPT for Docs, Sheets, Forms, Slides > Launch`.

5. **Remove any other add-ons** that provide GPT functions to avoid conflicts.

6. **Click the "Refresh account" button**, then the "Set Up OpenAI Key" button that appears.

7. **Paste your OpenAI API key** where indicated, click "Check", then "Save".
8. **Select GPT-4o-mini in select box**

9. **Type a simple formula in a cell** to get a response from GPT, for example:
   ```plaintext
   =GPT("Write a title for coffee shop")
   ```

10. After getting the result, click "Replace All GPTs" or "Replace Selected" to replace the formula with the AI-generated text. This is important to avoid the sheet re-executing the formulas frequently, which could impact your OpenAI credits.

By following these steps, you can leverage the power of GPT-4-Mini within Google Sheets to generate text, summarize data, and more. Remember to manage your OpenAI API credits and replace GPT formulas with the results to optimize performance.

---
layout: docs_layouts/default
title: Extract Instagram Emails to Google Sheets in 2024 Best Practices
nav_order: 3
parent: GPT for Sheets
permalink: /docs/gpt-for-sheets/how-to-extract-emails-from-instagram-into-google-sheets-2024-guide
description: Extract Instagram Emails to Google Sheets in 2024 Best Practices
---

# Extract Instagram Emails to Google Sheets in 2024 Best Practices

## Introduction

In the realm of digital marketing and data extraction, having the ability to collect specific information efficiently is crucial. This tutorial will guide you through the process of extracting emails from Instagram profiles using GPT for Sheets. This method is particularly useful for targeting yoga influencers or any other niche you might be interested in.

## Prerequisites

Before diving into the tutorial, ensure you have the following:

- **GPT for Sheets, Docs, Slides, Forms Add-on**: Installed from the [GPT for Google Sheets](https://workspace.google.com/u/0/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252).

## Enabling GPT Functions

If you cannot see the GPT functions in your spreadsheet, follow these steps to enable them:

1. Go to **Extensions** in the menu.
2. Navigate to **GPT for Sheets, Docs, Slides, Forms**.
3. Select **Launch**.

## Step-by-Step Guide


## Use this ready template for extracting emails from Instagram using ChatGPT, Google Search results and Google Sheets  

<a rel="nofollow" target="_blank" href="https://docs.google.com/spreadsheets/d/1NGwuIUOJxdWUsFvXqtpQczZ8uaAEY4ZvwS68OV-1_wg/template/preview">
          <img src="https://github.com/skiffer/hydra-docgpt.ai/blob/main/images/prev-extract-emails.png?raw=true" alt="gpt for sheets">
</a>


### 1. Extract Emails Using the SERP() Function

The `SERP()` function allows you to extract emails from Instagram profiles by performing a search query. Here’s how to do it:

**Prompt:**

> =SERP("site:instagram.com Yoga gmail.com", 40)

![Extract emails from Instagram in Google Sheets](https://github.com/skiffer/hydra-docgpt.ai/blob/main/images/article-extract-emails-instagram.png?raw=true)

**Instructions:**

- Remove the backticks (`) at the beginning and end of the prompt to execute the function.
- This function will returns 40 pages from Search Engine for Instagram profiles related to yoga influences and has emails.


### 1.1 Alternative: Using GOOGLE_SEARCH_API()

For a more robust solution, you can use the `GOOGLE_SEARCH_API()` function, which utilizes the official Google API Search. Note that this requires an API Key but offers 100 free requests per day.

**Prompt:**

> =GOOGLE_SEARCH_API("site:instagram.com/ 'Yoga' AND ('gmail.com' OR 'hotmail.com' OR 'outlook.com')", "contextId", "API_KEY", 10)

**Instructions:**

- Replace `"contextId"` with your specific context identifier.
- Replace `"API_KEY"` with your actual Google API key.
- This function allows you to bypass the limitations of the `SERP()` function and can fetch more extensive results.

### 2. Extract Emails from Descriptions Using GPT

After retrieving search results, you can use the `GPT()` function to extract emails from the descriptions of the profiles.

**Prompt:**

> =GPT("Extract emails from the description", D16)

**Instructions:**

- Replace `D16` with the cell reference containing the descriptions from which you want to extract emails.
- This function processes the text in the specified cell and extracts any email addresses it finds.

### 3. Apply the Formula to All Relevant Cells

Once you have entered the formula, you need to apply it to all cells that require processing:

1. Click on the cell containing the formula.
2. Drag the fill handle (a small square at the bottom-right corner of the cell) down to apply the formula to additional cells.

### 4. Replace GPT Formulas with Text Results

To finalize your data extraction, replace the GPT formulas with the actual text results:

1. Select the column with GPT functions.
2. Click on **Replace All GPT** or **Replace Selected GPTs** to convert formulas into text results.

### 5. Completion

Congratulations! You have successfully extracted emails from Instagram profiles. If you have any questions or need further assistance, feel free to reach out:

- **Online Chat**: [https://docgpt.ai](https://docgpt.ai)
- **Email**: yaro@docgpt.ai

## Conclusion

Efficient data extraction can significantly enhance your marketing strategies and outreach efforts. By following this tutorial, you can easily collect and utilize email addresses from Instagram profiles related to specific interests, such as yoga influencers. Utilize the `SERP()` and `GOOGLE_SEARCH_API()` functions to tailor your data extraction needs and leverage GPT functionalities for more precise results.



### RECOMMENDATION:
- Optimal performance with Google Add-Ons is by using the Google Chrome browser.
- If you use multiple accounts in the same Google Chrome Profile, please create a separated Google Chrome Profile for this account. (Google sometime unstable with multi-accounts cookies)
- If you use company email - sometime company emails have restrictions with installation add-ons. It could require asking admin of the company email to configure for allowing installation add-ons or USE a PERSONAL ACCOUNT. (if needed to move subscription, please write to support chat or email — yaroslav91@gmail.com)

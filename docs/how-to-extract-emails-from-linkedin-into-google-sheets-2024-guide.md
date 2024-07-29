---
layout: docs_layouts/default
title: Set Up OpenAI API Keys
nav_order: 3
parent: GPT for Sheets
permalink: /docs/gpt-for-sheets/how-to-extract-emails-from-linkedin-into-google-sheets-2024-guide
description: Extract Instagram Emails to Google Sheets in 2024 Best Practices
---

# Extract LinkedIn Emails to Google Sheets in 2024 Best Practices

## Introduction

This tutorial will guide you through the process of extracting emails from LinkedIn profiles using GPT for Sheets. This method is particularly useful for targeting professionals B2B in various industries or any other niche you might be interested in.

## Prerequisites

Before diving into the tutorial, ensure you have the following:

- **GPT for Sheets, Docs, Slides, Forms Add-on**: Installed from the [GPT for Google Sheets](https://workspace.google.com/u/0/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252).

## Enabling GPT Functions

If you cannot see the GPT functions in your spreadsheet, follow these steps to enable them:

1. Go to **Extensions** in the menu.
2. Navigate to **GPT for Sheets, Docs, Slides, Forms**.
3. Select **Launch**.

## Step-by-Step Guide

## Use this ready template for extracting emails from LinkedIn using ChatGPT, Google Search results, and Google Sheets

<a rel="nofollow" target="_blank" href="https://docs.google.com/spreadsheets/d/1NGwuIUOJxdWUsFvXqtpQczZ8uaAEY4ZvwS68OV-1_wg/template/preview">
  <img src="https://github.com/skiffer/hydra-docgpt.ai/blob/main/images/prev-extract-emails.png?raw=true" alt="gpt for sheets">
</a>

### 1. Extract Emails Using the SERP() Function

The `SERP()` function allows you to extract emails from LinkedIn profiles by performing a search query. Here’s how to do it:

**Prompt:**

> =SERP("site:linkedin.com Yoga gmail.com", 50)

![Extract emails from LinkedIn in Google Sheets](https://github.com/skiffer/hydra-docgpt.ai/blob/main/images/article-extract-emails-linkedin.png?raw=true)

**Instructions:**

- Remove the backticks (`) at the beginning and end of the prompt to execute the function.
- This function will return up to 40 search results from LinkedIn profiles related to yoga, including emails if available.

### 1.1 Alternative: Using GOOGLE_SEARCH_API()

For a more robust solution, you can use the `GOOGLE_SEARCH_API()` function, which utilizes the official Google API Search. 

Note that this requires an API Key but offers 100 free requests per day.

**Prompt:**

> =GOOGLE_SEARCH_API("site:linkedin.com 'Yoga' AND ('gmail.com' OR 'hotmail.com' OR 'outlook.com')", "contextId", "API_KEY", 10)

**Instructions:**

- Replace `"contextId"` with your specific context identifier.
- Replace `"API_KEY"` with your actual Google API key.
- This function allows you to bypass the limitations of the `SERP()` function and can fetch more extensive results.

### 2. Extract Emails from Descriptions Using GPT

After retrieving search results, you can use the `GPT()` function to extract emails from the descriptions of the profiles.

**Prompt:**

> =GPT("Extract only email", D16)

## Alternative Functions

In addition to the GPT and SERP functions, consider using these alternative functions for a more versatile data extraction process:

### Claude

> =CLAUDE("Extract emails from LinkedIn profiles", D16)

Claude is another AI model that can help extract information from text. This function works similarly to GPT but uses the Claude model to process and extract email addresses from the specified cell.

### Perplexity

> =PERPLEXITY("Extract emails from LinkedIn", 20)

Perplexity is a powerful search and data extraction tool. Use this function to perform a search query on LinkedIn and retrieve up to 20 profiles related to yoga, including email addresses if available.

### Mistral

> =MISTRAL("Extract emails from LinkedIn profile descriptions", D16)

Mistral is an AI-driven text processing tool. This function extracts email addresses from the text within the specified cell, similar to GPT but leveraging the Mistral model for processing.

### Gemini

> =GEMINI("Extract emails from LinkedIn profile descriptions", 20)

Gemini is a robust search function designed for comprehensive data extraction. Use this function to search LinkedIn profiles related to yoga and retrieve up to 20 profiles with email addresses included.


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

Congratulations! You have successfully extracted emails from LinkedIn profiles. If you have any questions or need further assistance, feel free to reach out:

- **Online Chat**: [https://docgpt.ai](https://docgpt.ai)
- **Email**: yaro@docgpt.ai

## Conclusion

By following this tutorial, you can easily collect and utilize email addresses from LinkedIn profiles related to specific interests, such as yoga professionals. 
Utilize the `SERP()` and `GOOGLE_SEARCH_API()` functions to tailor your data extraction needs and leverage GPT functionalities for more precise results.

Install GPT, Gemini, Claude, Perplexity for Google Sheets:
- **GPT for Sheets, Docs, Slides, Forms Add-on**: Installed from the [GPT for Google Sheets](https://workspace.google.com/u/0/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252).

### RECOMMENDATION:

- Optimal performance with Google Add-Ons is achieved using the Google Chrome browser.
- If you use multiple accounts in the same Google Chrome Profile, create a separate Google Chrome Profile for this account. (Google is sometimes unstable with multi-account cookies)
- If you use a company email, there might be restrictions with installing add-ons. You may need to ask the admin of the company email to configure permissions to allow add-on installation or use a personal account. (If you need to move the subscription, please write to support chat or email — yaroslav91@gmail.com)
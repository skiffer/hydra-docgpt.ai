---
layout: docs_layouts/default
title: Get list of competitors from the web search in Google Sheets
nav_order: 15
parent: GPT for Sheets
permalink: /docs/gpt-for-sheets/get-list-of-competitors-from-the-web-search-in-google-sheets
description: Get list of competitors from the web search in Google Sheets
---

# Get list of competitors from the web search in Google Sheets

## Introduction

Staying informed about your competitors is crucial for effective business strategy and market positioning. This SEO-optimized tutorial will guide you through the process of extracting a list of competitors from web searches using GPT for Sheets. This method is ideal for gaining insights into your industry landscape directly within Google Sheets.

## Prerequisites
- **GPT for Sheets Add-on**: Install it from the [GPT for Google Sheets](https://workspace.google.com/u/0/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252).

This add-on also supports other models such as:
    - Claude
    - Mistral
    - Gemini
    - Perplexity
    - OpenRoute integration to access over 180+ AI models

## Enabling GPT Functions

If you cannot see the GPT functions in your spreadsheet, follow these steps:

1. Go to **Extensions** in the menu.
2. Navigate to **GPT for Sheets, Docs, Slides, Forms**.
3. Click **Launch**.

## Step-by-Step Guide

### 1. Use the SERP() Function to Search for Competitors

The `SERP()` function allows you to search the web for competitor information. Here’s how to use it:

**Prompt Example:**

> =SERP("competitors of [Your Industry/Business]", 10)

**Instructions:**

- Replace `[Your Industry/Business]` with your specific industry or business type.
- This function will retrieve up to 10 search results related to your competitors.

### 1.1 Alternative: Using GOOGLE_SEARCH_API()

For more comprehensive results, use the `GOOGLE_SEARCH_API()` function. This method requires an API Key but offers 100 free requests per day.

**Prompt Example:**

> =GOOGLE_SEARCH_API("top competitors of [Your Industry/Business]", "contextId", "API_KEY", 10)

**Instructions:**

- Replace `[Your Industry/Business]` with your specific industry or business type.
- Replace `"contextId"` with your specific context identifier.
- Replace `"API_KEY"` with your actual Google API key.
- This function provides a more extensive set of results without the limitations of `SERP()`.

### 2. Extract Competitor Names Using GPT

Once you have the search results, use the `GPT()` function to extract the names of competitors.

**Prompt Example:**

> =GPT("Extract competitor names from the following list: ", D16)

**Instructions:**

- Replace `D16` with the cell reference that contains the search results from which you want to extract competitor names.
- This function will process the text in the specified cell and extract the names of competitors.

### 3. Apply the Formula to All Relevant Cells

To apply the formula across multiple cells:

1. Click on the cell with the formula.
2. Drag the fill handle (a small square at the bottom-right corner of the cell) down to fill additional cells.

### 4. Replace Formulas with Text Results

After extracting the data, replace the GPT formulas with the actual text results:

1. Select the column containing the GPT functions.
2. Click on **Replace All GPT** or **Replace Selected GPTs** to convert formulas into text results.

## Alternative Functions

In addition to the GPT and SERP functions, consider using these alternative functions for a more versatile data extraction process:

### Claude

> =CLAUDE("List competitor names from this text: ", D16)

Claude is another AI model that can help extract information from text. This function works similarly to GPT but uses the Claude model to process and extract competitor names from the specified cell.

### Perplexity

> =PERPLEXITY("Find competitor names in the text: ", D16)

Perplexity is a powerful search and data extraction tool. Use this function to extract competitor names from the specified cell's text using the Perplexity model.

### Mistral

> =MISTRAL("Identify competitor names in the following text: ", D16)

Mistral is an AI-driven text processing tool. This function extracts competitor names from the text within the specified cell, similar to GPT but leveraging the Mistral model for processing.

### Gemini

> =GEMINI("Extract competitor names from the provided text: ", D16)

Gemini is another robust AI model that can extract competitor names from text. This function processes the specified cell's content using the Gemini model to identify competitor names.

## Completion

Congratulations! You’ve successfully extracted a list of competitors from web searches into Google Sheets. For any questions or further assistance, feel free to contact us:

- **Online Chat**: [https://docgpt.ai](https://docgpt.ai)
- **Email**: yaro@docgpt.ai

## Conclusion

Efficiently extracting competitor data is crucial for staying ahead in your market. By following this tutorial, you can easily gather a list of competitors from web searches directly into Google Sheets. Utilize the `SERP()` and `GOOGLE_SEARCH_API()` functions to meet your data extraction needs and leverage GPT functionalities for more accurate results.

### RECOMMENDATION:
- Optimal performance with Google Add-Ons is by using the Google Chrome browser.
- If you use multiple accounts in the same Google Chrome Profile, please create a separate Google Chrome Profile for this account. (Google sometimes becomes unstable with multi-account cookies)
- If you use a company email, sometimes company emails have restrictions with installing add-ons. It might require asking the admin of the company email to configure for allowing installation add-ons or USE a PERSONAL ACCOUNT. (if needed to move the subscription, please write to support chat or email — yaroslav91@gmail.com)









ChatGPT can make mistakes. Check important info.
---
layout: docs_layouts/default
title:  Extract Facebook Emails to Google Sheets in 2024 Best Practices
nav_order: 3
parent: GPT for Sheets
permalink: /docs/gpt-for-sheets/how-to-extract-emails-from-facebook-into-google-sheets-2024-guide
description: Extract Facebook Emails to Google Sheets in 2024 Best Practices
---


# Extract Twitter Emails to Google Sheets in 2024 Best Practices

## Introduction

This tutorial will guide you through the process of extracting email addresses from Twitter profiles using GPT for Sheets. This technique is ideal for reaching out to specific audiences, such as yoga enthusiasts or other niche groups.

## Prerequisites

Before you start, make sure you have the following:
- **GPT for Sheets Add-on**: Install it from the [GPT for Google Sheets](https://workspace.google.com/u/0/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252).

This add-on also supports other models like Claude, Mistral, Gemini, Perplexity!
+ OpenRoute integration that can help you use over 180+++ AI models.

## Enabling GPT Functions

If you cannot see the GPT functions in your spreadsheet, follow these steps:

1. Go to **Extensions** in the menu.
2. Navigate to **GPT for Sheets, Docs, Slides, Forms**.
3. Click **Launch**.

## Use this ready template for extracting emails from Twitter using GPT, Google Search results, and Google Sheets

<a rel="nofollow" target="_blank" href="https://docs.google.com/spreadsheets/d/1NGwuIUOJxdWUsFvXqtpQczZ8uaAEY4ZvwS68OV-1_wg/template/preview">
  <img src="https://github.com/skiffer/hydra-docgpt.ai/blob/main/images/prev-extract-emails.png?raw=true" alt="gpt for sheets">
</a>

### 1. Extract Emails Using the SERP() Function

The `SERP()` function allows you to extract emails from Twitter profiles by performing a search query. Here's how to use it:

**Prompt Example:**

> =SERP("site:twitter.com Yoga gmail.com", 20)

**Instructions:**

- Remove the backticks (`) from the beginning and end of the prompt to execute the function.
- This function will retrieve up to 20 search results from Twitter profiles related to yoga, including emails if available.

### 1.1 Alternative: Using GOOGLE_SEARCH_API()

For more comprehensive results, use the `GOOGLE_SEARCH_API()` function. This method requires an API Key but offers 100 free requests per day.

**Prompt Example:**

> =GOOGLE_SEARCH_API("site:twitter.com 'Yoga' AND ('gmail.com' OR 'hotmail.com' OR 'outlook.com')", "contextId", "API_KEY", 10)

**Instructions:**

- Replace `"contextId"` with your specific context identifier.
- Replace `"API_KEY"` with your actual Google API key.
- This function provides a more extensive set of results without the limitations of `SERP()`.

![Extract emails from Twitter in Google Sheets](https://github.com/skiffer/hydra-docgpt.ai/blob/main/images/article-extract-emails-twitter.png?raw=true)

### 2. Extract Emails from Descriptions Using GPT

Once you have the search results, use the `GPT()` function to extract emails from the profile descriptions.

**Prompt Example:**

> =GPT("Extract emails from twitter profiles", D16)

**Instructions:**

- Replace `D16` with the cell reference that contains the profile descriptions from which you want to extract emails.
- This function will process the text in the specified cell and extract any email addresses it finds.

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

> =CLAUDE("Extract emails from Twitter profiles", D16)

Claude is another AI model that can help extract information from text. This function works similarly to GPT but uses the Claude model to process and extract email addresses from the specified cell.

### Perplexity

> =PERPLEXITY("Extract emails from Twitter profiles", 20)

Perplexity is a powerful search and data extraction tool. Use this function to perform a search query on Twitter and retrieve up to 20 profiles related to yoga, including email addresses if available.

### Mistral

> =MISTRAL("Extract emails from Twitter profiles", D16)

Mistral is an AI-driven text processing tool. This function extracts email addresses from the text within the specified cell, similar to GPT but leveraging the Mistral model for processing.

### Gemini

> =GEMINI("Extract emails from Twitter profiles", 20)

Gemini is a robust search function designed for comprehensive data extraction. Use this function to search Twitter profiles related to yoga and retrieve up to 20 profiles with email addresses included.

### 5. Completion

Congratulations! You’ve successfully extracted emails from Twitter profiles. For any questions or further assistance, feel free to contact us:

Install GPT, Gemini, Claude, Perplexity, OpenRoute for Google Sheets:
- **GPT for Sheets, Docs, Slides, Forms Add-on**: Install it from the [GPT for Google Sheets](https://workspace.google.com/u/0/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252).

- **Online Chat**: [https://docgpt.ai](https://docgpt.ai)
- **Email**: yaro@docgpt.ai

## Conclusion

By following this tutorial, you can easily gather email addresses from Twitter profiles related to specific interests, like yoga enthusiasts. Utilize the `SERP()` and `GOOGLE_SEARCH_API()` functions to meet your data extraction needs and leverage GPT functionalities for more accurate results.
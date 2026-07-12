---
layout: docs_layouts/default
title: Explore GPT functions
nav_order: 2
parent: GPT for Sheets
permalink: /docs/gpt-for-sheets/gpt-functions
description: Effortlessly enhance Google Sheets with GPT functions! Install the GPT for Sheets add-on, use AI-powered features for tasks like translation, extraction, formatting, tagging, classifying, summarizing, and table generation. Leverage GPT capabilities directly within your spreadsheet, saving time and boosting efficiency.
---

# <a href="/gpt-for-sheets/">GPT functions for Google Sheets</a>

<div style="border: 1px solid #dbe4ff; background: #f8f9ff; border-radius: 12px; padding: 18px; margin: 22px 0;">
  <strong>Need GPT for Sheets for real work?</strong><br>
  Compare Starter, Pro, Business and Lifetime plans for AI formulas, Claude/Gemini/OpenRouter, bulk SEO workflows and lead enrichment.
  <br><a href="/gpt-for-sheets/#pricing"><strong>See GPT for Sheets pricing →</strong></a>
</div>


### Links:
- <a href="https://workspace.google.com/marketplace/app/gpt_for_docs_sheets_forms_slides/466607203252?utm_source=pricing_section&utm_medium=landing_page&utm_campaign=email_assistant_gpt_campaign">Install the GPT for Sheets, Docs, Slides, Forms</a> add-on
- <a href="/gpt-for-sheets/">Upgrade to Premium</a>
- Optional -> RECOMMENDATION: The best way to ensure optimal performance with Google Add-Ons is by using the Google Chrome browser. This helps bypass any potential issues that may arise from compatibility with other browsers.

## All functions — full reference

Every function has its own reference page with syntax, parameters and copy-paste examples:

| Function | What it does | Reference |
|----------|--------------|-----------|
| `=GPT()` | Generate text from a prompt in one cell | <a href="/docs/gpt-for-sheets/gpt-function">=GPT() reference</a> |
| `=GPT_TABLE()` | Generate a whole table that spills into rows and columns | <a href="/docs/gpt-for-sheets/gpt-table">=GPT_TABLE() reference</a> |
| `=GPT_LIST()` | Generate a vertical list, one item per cell | <a href="/docs/gpt-for-sheets/gpt-list">=GPT_LIST() reference</a> |
| `=GPT_FILL()` | Autofill a range by learning from example rows | <a href="/docs/gpt-for-sheets/gpt-fill">=GPT_FILL() reference</a> |
| `=GPT_EXTRACT()` | Pull emails, names, prices out of messy text | <a href="/docs/gpt-for-sheets/gpt-extract">=GPT_EXTRACT() reference</a> |
| `=GPT_CLASSIFY()` | Put each row into one of your categories | <a href="/docs/gpt-for-sheets/gpt-classify">=GPT_CLASSIFY() reference</a> |
| `=GPT_TAG()` | Apply all relevant labels to a text | <a href="/docs/gpt-for-sheets/gpt-tag">=GPT_TAG() reference</a> |
| `=GPT_SUMMARIZE()` | Condense long text into a summary of any length | <a href="/docs/gpt-for-sheets/gpt-summarize">=GPT_SUMMARIZE() reference</a> |
| `=GPT_FORMAT()` | Convert between formats: HTML, JSON, Markdown, table… | <a href="/docs/gpt-for-sheets/gpt-format">=GPT_FORMAT() reference</a> |
| `=GPT_APPLY()` | Apply an instruction to text (default: fix grammar) | <a href="/docs/gpt-for-sheets/gpt-apply">=GPT_APPLY() reference</a> |
| `=GPT_TRANSLATE()` | Translate cells between languages | <a href="/docs/gpt-for-sheets/gpt-translate-function">=GPT_TRANSLATE() reference</a> |
| `=GPT_VISION()` | Ask questions about an image by URL | <a href="/docs/gpt-for-sheets/gpt-vision">=GPT_VISION() reference</a> |
| `=GPT_WEB_SEARCH()` | Answers grounded in a live web search | <a href="/docs/gpt-for-sheets/gpt-web-search">=GPT_WEB_SEARCH() reference</a> |
| `=GPT_CREATE_IMAGE()` | Generate images with DALL·E / GPT image models | <a href="/docs/gpt-for-sheets/gpt-create-image">=GPT_CREATE_IMAGE() reference</a> |
| `=CLAUDE()` | Use Anthropic Claude with the same arguments as GPT | <a href="/docs/gpt-for-sheets/claude-function">=CLAUDE() reference</a> |
| `=GEMINI()` | Use Google Gemini for fast, high-volume tasks | <a href="/docs/gpt-for-sheets/gemini-function">=GEMINI() reference</a> |
| `=MISTRAL()` | Use Mistral for fast, low-cost bulk processing | <a href="/docs/gpt-for-sheets/mistral-function">=MISTRAL() reference</a> |
| `=PERPLEXITY()` | Web-aware answers for research and enrichment | <a href="/docs/gpt-for-sheets/perplexity-function">=PERPLEXITY() reference</a> |
| `=SERP()` | Fetch live search results into your sheet | <a href="/docs/gpt-for-sheets/serp-function">=SERP() reference</a> |
| `=GROK()` | Use xAI Grok on your own API key (Pro/Business plans) | <a href="/docs/gpt-for-sheets/grok-function">=GROK() reference</a> |
| `=DEEPSEEK()` | Use DeepSeek on your own API key for low-cost bulk runs | <a href="/docs/gpt-for-sheets/deepseek-function">=DEEPSEEK() reference</a> |

### Example of use
<iframe width="560" height="315" src="https://www.youtube.com/embed/V4IRVKBHJy4?si=3qoBVoXAddHTg7qR" title="How to use GPT for Sheets" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


-
> Here you can find a Google Sheet Template with examples [Google Sheet Template](https://docs.google.com/spreadsheets/d/1aZY-8V478qfIDWFZTzbTejldEzk3Bnd5ZtGAPcDI4PU/edit?usp=sharing){:target="_blank"}.
> The file is accessible in read-only mode. To make modifications, please create a copy using **File** > **Make a copy**, or you can simply **copy** functions/examples into your own sheet.


## Important!

![IMPORTANT-GPT-for-Sheets]({{ site.baseurl }}/images/gpt-for-sheets-warning.png){: width="500"}

> After getting a final result, please click on 'Replace All GPTs' or 'Replace Selected' button to replace the formula with the result.
> If to don't do this - Google Sheets re-execution all formulas on refreshing page and every 1–2 minutes. (could affect your credits on Open AI or Internal credits, depends on plan)


### GPT
> The most straightforward function to initiate GPT in Google Sheets. Generates the outcome within a single cell.

| Function          | =GPT(prompt, [value])                                          |
|-------------------|----------------------------------------------------------------|
| Description       | Tell the AI what to generate in one cell.                      |
| Localization      | In some locales, use ";" to separate parameters instead of "," |
| Example           | `=GPT("Write a tagline for a car")`                            |
| Example 2         | `=GPT(A1, "my site")`                                          |
| Example 3         | `=GPT(A1, B1)`                                                 |
| Output (one cell) | `Unleash the power of motion`                                  |

#### Parameters

| Parameter                | Definition                                                                                                                                           |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| `prompt` (required)      | Instruction given to the AI to generate a result. <br/>- It can be a string <br/>- a cell reference (e.g., B1), <br/>- range of cells (e.g., B1:E4). |
| (optional) `value`       | Additional input or context to influence the output. It can be text, a cell, or a range.                                                             |


---

### GPT_TRANSLATE

| Function     | =GPT_TRANSLATE(text, target, [source])                         |
|--------------|----------------------------------------------------------------|
| Description  | Translates input text into another language using GPT.         |
| Localization | In some locales, use ";" to separate parameters instead of "," |
| Example      | `=GPT_TRANSLATE("I love ice cream", "spanish", "english")`     |

#### Parameters

| Parameter           | Definition                                                                                                                                           |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| `text` (required)   | Instruction given to the AI to generate a result. <br/>- It can be a string <br/>- a cell reference (e.g., B1), <br/>- range of cells (e.g., B1:E4). |
| `target` (required) | Specify the desired language                                                                                                                         |
| `source` (optional) | Specify the source language                                                                                                                          |

---


### GPT_FORMAT

| Function          | =GPT_FORMAT(text, target_format)                                                                                  |
|-------------------|-------------------------------------------------------------------------------------------------------------------|
| Description       | Converts between formats.                                                                                         |
| Localization      | In some locales, use ";" to separate parameters instead of ","                                                    |
| Example           | `=GPT_FORMAT("<ul><li><p>Name: Joe</p><p>Age: 27</p></li><li><p>Name: Jane</p><p>Age: 28</p></li></ul>", "json")` |

#### Parameters

| Parameter                  | Definition                                                                                                                                           |
|----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| `prompt` (required)        | Instruction given to the AI to generate a result. <br/>- It can be a string <br/>- a cell reference (e.g., B1), <br/>- range of cells (e.g., B1:E4). |
| `target_format` (required) | Specify the desired conversion format: JSON, HTML, YAML, Markdown, programming languages, etc.                                                       |



---

### GPT_TAG

| Function     | =GPT_TAG(text, [tags])                                         |
|--------------|----------------------------------------------------------------|
| Description  | Applies user-defined tags to a given text                      |
| Localization | In some locales, use ";" to separate parameters instead of "," |
| Example      | `=GPT_TAG("I love chocolate", "food, positive, negative")`     |

#### Parameters

| Parameter         | Definition                                                                                                                                           |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| `text` (required) | Instruction given to the AI to generate a result. <br/>- It can be a string <br/>- a cell reference (e.g., B1), <br/>- range of cells (e.g., B1:E4). |
| `tags` (optional) | Specify the desired tags                                                                                                                             |


---

### GPT_CLASSIFY

| Function     | =GPT_CLASSIFY(text, categories)                                                                              |
|--------------|--------------------------------------------------------------------------------------------------------------|
| Description  | Classifies the input into one of the given categories. Make sentiment analysis for comments, feedbacks, text |
| Localization | In some locales, use ";" to separate parameters instead of ","                                               |
| Example      | `=GPT_CLASSIFY("banana", "fruit, vegetable")`                                                                |

#### Parameters

| Parameter               | Definition                                                                                                                                           |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| `text` (required)       | Instruction given to the AI to generate a result. <br/>- It can be a string <br/>- a cell reference (e.g., B1), <br/>- range of cells (e.g., B1:E4). |
| `categories` (optional) | Specify the desired categories                                                                                                                       |



---

### GPT_EXTRACT

| Function     | =GPT_EXTRACT(text, to_extract)                                                                        |
|--------------|-------------------------------------------------------------------------------------------------------|
| Description  | Extracts data (like email addresses or company names) from a text. Outputs as comma-separated values. |
| Localization | In some locales, use ";" to separate parameters instead of ","                                        |
| Example      | `=GPT_EXTRACT("I worked 12 years at Amazon.com at Apple", "companies")`                               |

#### Parameters

| Parameter               | Definition                                                                                                                                           |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| `text` (required)       | Instruction given to the AI to generate a result. <br/>- It can be a string <br/>- a cell reference (e.g., B1), <br/>- range of cells (e.g., B1:E4). |
| `to_extract` (optional) | Specify the desired extraction: emails, first name, last name, countries...                                                                          |


---

### GPT_SUMMARIZE

| Function     | =GPT_SUMMARIZE(text, [format])                                                                                        |
|--------------|-----------------------------------------------------------------------------------------------------------------------|
| Description  | Summarizes the input text using GPT and returns the summary.                                                          |
| Localization | In some locales, use ";" to separate parameters instead of ","                                                        |
| Example      | `=GPT_SUMMARIZE("This is a long text. It contains a lot of information. We need to summarize it.")`                   |
| Example 2    | `=GPT_SUMMARIZE("This is a long text. It contains a lot of information. We need to summarize it.", "two sentences")`  |


#### Parameters

| Parameter           | Definition                                                                                                                                           |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| `text` (required)   | Instruction given to the AI to generate a result. <br/>- It can be a string <br/>- a cell reference (e.g., B1), <br/>- range of cells (e.g., B1:E4). |
| `format` (optional) | Specify the summarization format like: two sentences, up to 100 words, etc                                                                           |

---

### GPT_TABLE

| Function     | =GPT_TABLE(prompt, headers)                                                         |
|--------------|-------------------------------------------------------------------------------------|
| Description  | Generates a table from a prompt.                                                    |
| Localization | In some locales, use ";" to separate parameters instead of ","                      |
| Example      | `=GPT_TABLE("top 10 most eaten fruits and their nutrition data", "name, calories")` |

#### Parameters

| Parameter            | Definition                                                                                                                                           |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| `prompt` (required)  | Instruction given to the AI to generate a result. <br/>- It can be a string <br/>- a cell reference (e.g., B1), <br/>- range of cells (e.g., B1:E4). |
| `headers` (required) | Additional input or context to influence the output. It can be text, a cell, or a range.                                                             |

---
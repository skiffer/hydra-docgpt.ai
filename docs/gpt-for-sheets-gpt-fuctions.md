---
layout: docs_layouts/default
title: GPT functions
nav_order: 2
parent: GPT for Sheets
permalink: /docs/gpt-for-sheets/gpt-functions
---

# GPT functions

### Example of use
<iframe width="560" height="315" src="https://www.youtube.com/embed/V4IRVKBHJy4?si=3qoBVoXAddHTg7qR" title="How to use GPT for Sheets" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


-
> Here you can find a Google Sheet Template with examples [Google Sheet Template](https://docs.google.com/spreadsheets/d/1aZY-8V478qfIDWFZTzbTejldEzk3Bnd5ZtGAPcDI4PU/edit?usp=sharing){:target="_blank"}.
> The file is accessible in read-only mode. To make modifications, please create a copy using **File** > **Make a copy**, or you can simply **copy** functions/examples into your own sheet.


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
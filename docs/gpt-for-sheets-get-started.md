---
layout: docs_layouts/default
title: GPT for Sheets - Get Started
nav_order: 1
parent: GPT for Sheets
permalink: /docs/gpt-for-sheets/get-started
description: GPT for Sheets - Get Started | Explore GPT functions like, GPT_TRANSLATE for language translation and GPT_EXTRACT for data extraction. Follow example use cases, enhancing your Google Sheets experience. Simplify email responses, improve text, and streamline explanations effortlessly. Watch the installation guide here.
---

# How to Install GPT for Sheets

To leverage the capabilities of language models using GPT functions within your Google spreadsheets, install the GPT for Sheets, Docs, Slides, Forms add-on. Once installed, this add-on also extends the capabilities of AI to Google Sheets, Docs, Forms, Slides.

> If you use multiple Google accounts, it is recommended that you create a Chrome profile for each account.

<iframe width="560" height="315" src="https://www.youtube.com/embed/V4IRVKBHJy4?si=3qoBVoXAddHTg7qR" title="How to use GPT for Sheets" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


1. Go to the [Workspace Installation Page](https://workspace.google.com/u/0/marketplace/app/gpt_for_docs_sheets_forms_slides/466607203252).

2. Click **Install**. ![Install-GPT-for-Sheets]({{ site.baseurl }}/images/gpt-for-sheets-install.png)

3. Select **Continue** within the confirmation dialog.

4. A new window labeled **Sign in with Google** will appear.

5. Choose the Google account you wish to use for installing GPT for Docs, Sheets, Slides, and Forms.

6. Grant the necessary permissions by clicking on **Allow**.

7. A notification in a pop-up window will confirm the successful installation of GPT for Docs, Sheets, Slides, and Forms.

## How to Launch GPT for Sheets

1. Open your Google Sheet.
2. Click on **Extensions** > **GPT for Docs, Sheets, Slides, and Forms** > **Launch** ![Launch-GPT-for-Sheets]({{ site.baseurl }}/images/gpt-for-sheets-launch.png)
3. A **sidebar** will be opened on the right side of the page.  ![Launch-GPT-for-Sheets]({{ site.baseurl }}/images/gpt-for-sheets-sidebar.png)

## Template with Examples

> Here you can find a Google Sheet Template with examples [Google Sheet Template](https://docs.google.com/spreadsheets/d/1aZY-8V478qfIDWFZTzbTejldEzk3Bnd5ZtGAPcDI4PU/edit?usp=sharing){:target="_blank"}.
> The file is accessible in read-only mode. To make modifications, please create a copy using **File** > **Make a copy**, or you can simply copy functions/examples into your own sheet.

## How to use GPT functions

Get started by discovering two example use cases: translating text and extracting email addresses directly in your Google spreadsheet. You can follow along by copying our example template.


### Translation using GPT for Sheets - `GPT_TRANSLATE`

1. Open a sheet, and select a cell.
2. Enter the formular for translation text: `=GPT_TRANSLATE(A30, "norwegian","english")`
3. The first parameter represents the text to be translated, the second parameter is the target language—possibly derived from a column value, and the third parameter is an option for the source language.
4. Drag the formula down to apply it to the values below.

![Branching]({{ site.baseurl }}/images/gpt-translate.png)

### Data Extraction using GPT for Sheets - `GPT_EXTRACT`

1. Open a sheet, and select a cell.
2. Enter the formular for extraction text: `=GPT_EXTRACT(A57,"country")`
3. The first parameter signifies the original text from which you intend to extract information. The second parameter is a human-readable descriptor indicating what you want to extract—such as Email, First Name, Last Name, Address, Phone, Country, City, or any other relevant information.
4. Drag the formula down to apply it to the values below.

![Branching]({{ site.baseurl }}/images/gpt-extract.png)
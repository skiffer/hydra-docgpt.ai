---
layout: docs_layouts/default
title: GPT for Sheets - Get Started
nav_order: 1
parent: GPT for Sheets
permalink: /docs/gpt-for-sheets/get-started
description: GPT for Sheets - Get Started | Explore GPT functions like, GPT_TRANSLATE for language translation and GPT_EXTRACT for data extraction. Follow example use cases, enhancing your Google Sheets experience. Simplify email responses, improve text, and streamline explanations effortlessly. Watch the installation guide here.
---
<script>
window.onload = function() {
    var promoElement = document.getElementById("promo-sheets");
    if (promoElement) {
        promoElement.style.display = "none";
    }
};

</script>

# How to Install <a href="/gpt-for-sheets/">GPT for Sheets</a>

### Links: 
- <a href="https://workspace.google.com/marketplace/app/gpt_for_docs_sheets_forms_slides/466607203252?utm_source=pricing_section&utm_medium=landing_page&utm_campaign=email_assistant_gpt_campaign">Install the GPT for Sheets, Docs, Slides, Forms</a> add-on
- <a href="/gpt-for-sheets/">Upgrade to Premium</a>
- <a href="/docs/gpt-for-sheets/set-up-openai-api-keys">How to set up your API KEY</a>
- RECOMMENDATION: It is preferable to use a personal Google account. If you use a company Workspace account, you may need to request your company’s admin to allow the execution of the add-on in the Workspace configuration.
- RECOMMENDATION: The best way to ensure optimal performance with Google Add-Ons is by using the Google Chrome browser. This helps bypass any potential issues that may arise from compatibility with other browsers.
- RECOMMENDATION: If you use multiple Google accounts, it is recommended that you create a Chrome profile for each account.

<iframe width="560" height="315" src="https://www.youtube.com/embed/V4IRVKBHJy4?si=3qoBVoXAddHTg7qR" title="How to use GPT for Sheets" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


# How to install

1. Go to the [GPT for Sheets](https://workspace.google.com/u/0/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252).

2. Click **Install**. ![Install-GPT-for-Sheets]({{ site.baseurl }}/images/gpt-for-sheets-install.png)

3. Select **Continue** within the confirmation dialog.

4. A new window labeled **Sign in with Google** will appear.

5. Choose the Google account you wish to use for installing GPT for Docs, Sheets, Slides, and Forms.

6. Grant the necessary permissions by clicking on **Allow**.

7. A notification in a pop-up window will confirm the successful installation of GPT for Docs, Sheets, Slides, and Forms.
8. Open your Google Sheet.
9. Click on **Extensions** > **GPT for Docs, Sheets, Slides, and Forms** > **Launch** ![Launch-GPT-for-Sheets]({{ site.baseurl }}/images/gpt-for-sheets-launch.png)
10. A **sidebar** will be opened on the right side of the page.

![Launch-GPT-for-Sheets]({{ site.baseurl }}/images/gpt-for-sheets-sidebar.png){: width="500"}

### !!! After subscribing or changing your plan, please click on the 'Refresh Account' button located on the sidebar
![refresh-account.png]({{ site.baseurl }}/images/refresh-account.png){: width="300"}


### !!! After getting a final result, please click on ‘Replace All GPTs’ or ‘Replace Selected’

![IMPORTANT-GPT-for-Sheets]({{ site.baseurl }}/images/gpt-for-sheets-warning.png){: width="500"}

> After getting a final result, please click on 'Replace All GPTs' or 'Replace Selected' button to replace the formula with the result.
> If to don't do this - Google Sheets re-execution all formulas on refreshing page and every 1–2 minutes. (could affect your credits on Open AI or Internal credits, depends on plan)


## Template with Examples

> Here you can find a Google Sheet Template with examples [Google Sheet Template](https://docs.google.com/spreadsheets/d/1aZY-8V478qfIDWFZTzbTejldEzk3Bnd5ZtGAPcDI4PU/template/preview){:target="_blank"}.
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
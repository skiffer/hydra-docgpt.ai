---
layout: docs_layouts/default
title: Set Up OpenAI API Keys
nav_order: 3
parent: GPT for Sheets
permalink: /docs/gpt-for-sheets/set-up-openai-api-keys
description: Post payment instruction - How to set up OpenAI API keys
---

# How to set up OpenAI API Keys in <a href="/gpt-for-sheets/" target="_blank">GPT for Google Sheets</a>

### Before you have started
- Install <a href="https://workspace.google.com/marketplace/app/gpt_for_docs_sheets_forms_slides/466607203252" target="_blank">GPT for Sheets Add-On</a>
- <a href="/gpt-for-sheets/" target="_blank">Upgrade subscription to Pro User plan</a>


### Create an OpenAI API key

> Create an OpenAI API key to gain access to the ChatGPT API and other OpenAI APIs. This key allows OpenAI to track your usage and generate accurate billing.


#### 1. Log in or sign up to the <a href="https://platform.openai.com/account/api-keys" rel="noopener noreferrer nofollow" target="_blank">OpenAI platform</a>

![sign-up-openai.png]({{ site.baseurl }}/images/sign-up-openai.png)

#### 2. Click on Create new secret key

![generate-api-key.png]({{ site.baseurl }}/images/generate-api-key.png)

#### 3. Copy your key to your clipboard

![created-api-key.png]({{ site.baseurl }}/images/created-api-key.png)

#### 4. Open a spreadsheet with installed add-on and Launch the sidebar <b>Extensions > GPT for Docs, Sheets, Forms, Slides > Launch</b>
#### 5. Please make sure that you have removed all other add-ons that provides GPT functions, to dont have conflicts
#### 6. At this step you should have subscription to <a href="/gpt-for-sheets/" target="_blank">Pro User plan</a>
![created-api-key.png]({{ site.baseurl }}/images/subscription-pro-user.png){: width="300"}
#### 7. Click on 'Refresh account' after that there will be appeared 'Set Up OpenAI Key' button
![refresh-account.png]({{ site.baseurl }}/images/refresh-account.png){: width="300"}
#### 8. Click on 'Set Up OpenAI Key'
![set-up-api-key.png]({{ site.baseurl }}/images/set-up-api-key.png){: width="300"}
#### 9. Paste your OpenAI API key where indicated, and click 'Check' button
![check-and-save-api-key.png]({{ site.baseurl }}/images/check-and-save-api-key.png){: width="600"}
#### 10. Click on 'Save' button
#### 11. Type a simple formula in a cell and get a response from GPT
> =GPT("Write a title for coffee shop")

You've configured your OpenAI API key within GPT for Sheets and Docs. Now, any user granted Editor access to this spreadsheet can utilize GPT functions using this API key

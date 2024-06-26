---
layout: docs_layouts/default
title: Set Up OpenAI API Keys
nav_order: 3
parent: GPT for Sheets
permalink: /docs/gpt-for-sheets/set-up-openai-api-keys
description: Post payment instruction - How to set up OpenAI API keys
---

# How to set up OpenAI, Claude, Gemini, and Mistral API keys - <a href="/gpt-for-sheets/" target="_blank">GPT for Google Sheets</a>

### Before you have started
- Install <a href="https://workspace.google.com/marketplace/app/gpt_for_docs_sheets_forms_slides/466607203252" target="_blank">GPT for Sheets Add-On</a>
- <a href="/gpt-for-sheets/" target="_blank">Upgrade subscription to Pro User plan</a>
- Optional -> RECOMMENDATION: The best way to ensure optimal performance with Google Add-Ons is by using the Google Chrome browser. This helps bypass any potential issues that may arise from compatibility with other browsers.

### !!! After subscribing or changing your plan, please click on the 'Refresh Account' button located on the sidebar
![refresh-account.png]({{ site.baseurl }}/images/refresh-account.png){: width="300"}


### RECOMMENDATION: 
- Optimal performance with Google Add-Ons is by using the Google Chrome browser.
- If you use multiple accounts in the same Google Chrome Profile, please create a separated Google Chrome Profile for this account. (Google sometime unstable with multi-accounts cookies)
- If you use company email - sometime company emails have restrictions with installation add-ons. It could require asking admin of the company email to configure for allowing installation add-ons or USE a PERSONAL ACCOUNT. (if needed to move subscription, please write to support chat or email — yaroslav91@gmail.com)

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


## Important!

![IMPORTANT-GPT-for-Sheets]({{ site.baseurl }}/images/gpt-for-sheets-warning.png){: width="500"}

> After getting a final result, please click on 'Replace All GPTs' or 'Replace Selected' button to replace the formula with the result.
> If to don't do this - Google Sheets re-execution all formulas on refreshing page and every 1–2 minutes. (could affect your credits on Open AI or Internal credits, depends on plan)


#### Troubleshooting
> You exceeded your current quota, please check your plan and billing details

OpenAI transitioned to prepaid plans starting March 25, 2024.
Please review your OpenAI API Key account here: <a href="https://platform.openai.com/account/billing/overview" rel="nofollow" target="_blank">Billing for OpenAI Account</a>

Other possible issues could be found here: <a target="_blank" href="/docs/support-gpt-sheets-docs-slides-forms-gmail/">Troubleshooting</a>


> Exception: Request failed for https://api.openai.com returned code 404. Truncated server response: { "error": { "message": "The model gpt-4-0125-preview does not exist or you do not have access to it.", "type": "invalid_requ... (use muteHttpExceptions option to examine full response) (line 366).

It happens due to of your tier in Open AI, please increase your tier in OpenAI and the model will appear for your account.

Official message from OpenAI
> On July 6, 2023, we gave access to the [GPT-4 API](https://platform.openai.com/docs/models/gpt-4) (8k) to all API users who have made a successful payment of $1 or more. We plan to open up access to all developers soon, and then start raising rate-limits after that depending on compute availability.
> For API accounts created after August 18, 2023, you can get instant access to GPT-4 after purchasing $0.50 worth or more of pre-paid credits. You can read about prepaid billing.

#### Useful links
- <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-free" rel="nofollow" target="_blank">How to increase — Rate Limits for Open AI Keys </a>
- <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Your API Keys</a>
- <a href="https://platform.openai.com/account/billing/overview" rel="nofollow" target="_blank">Billing for OpenAI Account</a>




You've configured your OpenAI API key within GPT for Sheets and Docs. Now, any user granted Editor access to this spreadsheet can utilize GPT functions using this API key



### How to create Mistral API keys

#### 1. Please create an account https://console.mistral.ai/

#### 2. Go to https://console.mistral.ai/api-keys/ and create an api key

#### 3.  Here is the pricing page for the Mistral api keys: https://docs.mistral.ai/platform/pricing/


### How to create Claude (Anthropic) api key

#### 1. Please follow this official page https://docs.anthropic.com/claude/reference/getting-started-with-the-api

#### 2. If you have already account, check your keys here: https://console.anthropic.com/settings/keys


### How to create Perplexity AI api key

#### 1. Please follow this official page https://docs.perplexity.ai/docs/getting-started

#### 2. If you have already account, check your keys here: https://www.perplexity.ai/settings/api

#### 3. Generate API Key, copy it

#### 4. Go to the GPT for Sheets and click on Set Up Open AI keys. Scroll down and insert the key

#### 5. Click on 'Check' button to validate it. After that click on 'Save' button

#### 6. Now you can use Perplexity AI with function =PERPLEXITY('what are top youtube videos for today')





### How to create Gemini API keys

####  You can create your api key at this page: https://aistudio.google.com/app/apikey

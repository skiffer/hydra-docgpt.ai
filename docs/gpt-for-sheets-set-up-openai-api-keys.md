---
layout: docs_layouts/default
title: Set Up OpenAI API Keys
nav_order: 1
parent: GPT for Sheets
permalink: /docs/gpt-for-sheets/set-up-openai-api-keys
description: How to set up OpenAI API keys
---

# How to set up OpenAI, Claude, Gemini, and Mistral API keys - <a href="/gpt-for-sheets/" target="_blank">GPT for Google Sheets</a>


### Before you have started
1. Install <a href="https://workspace.google.com/marketplace/app/gpt_for_docs_sheets_forms_slides/466607203252" target="_blank">GPT for Sheets Add-On</a>
2. <a href="/gpt-for-sheets/" target="_blank">Upgrade subscription to Pro User plan</a>
3. Please click on the 'Refresh Account' button located: Extensions > GPT for Sheets, Docs, Slides, Forms > Refresh Account
4. Follow the instructions below to set up your OpenAI key. (<a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Your API Keys</a>)
5. Ensure you have **at least $1** in your OpenAI billing account. If your account is new, you will initially have access to the Free Tier with relatively small limits. It is recommended to add **at least $5 to your account to upgrade to Tier 1**, which offers higher rate limits and access to GPT-4o: <a href="https://platform.openai.com/account/billing/overview" rel="nofollow" target="_blank">Billing for OpenAI Account</a>
6. RECOMMENDATION: The best way to ensure optimal performance with Google Add-Ons is by using **a separated Google Chrome Profile for your single gmail account!** (sometimes, Google API does not work well with multiple accounts in the same Chrome profile) This helps bypass any potential issues that may arise from compatibility with other browsers.


### Important! If you encounter the message: "Authorization is required to perform this action."
1. **Use a personal Gmail account**: If you use a company email (workspace), it may have restrictions on using add-ons. You might need to ask your company's email administrator to configure settings to allow the installation of add-ons. Therefore, it’s recommended to use a personal account. If you need to transfer your subscription, please contact support via chat or email at yaroslav91@gmail.com.
2. If you use a personal account and still gets this issue, just re-install the add-on
3. Use the Google account in a separated Google Chrome Profile - usually it requires if you use multiple Google Accounts (Google Issue)

4. ![create-profile.png]({{ site.baseurl }}/images/create-profile.png){: width="300"}

## Comparison Rate Limits for Free Tier and Tier 1

### Free Tier
![tier-0.png]({{ site.baseurl }}/images/tier-0.png){: width="300"}

### Tier 1
![tier-1.png]({{ site.baseurl }}/images/tier-1.png){: width="300"}

### !!! After subscribing or changing your plan, please click on the 'Refresh Account' button located: Extensions > GPT for Sheets, Docs, Slides, Forms > Refresh Account
![refresh-account.png]({{ site.baseurl }}/images/setup-api-keys-1.png){: width="600"}


### RECOMMENDATION: 
- Optimal performance with Google Add-Ons is by using the Google Chrome browser.
- If you use multiple accounts in the same Google Chrome Profile, please create a separated Google Chrome Profile for this account. (Google sometime unstable with multi-accounts cookies)
- If you use company email - sometime company emails have restrictions with installation add-ons. It could require asking admin of the company email to configure for allowing installation add-ons or USE a PERSONAL ACCOUNT. (if needed to move subscription, please write to support chat or email — yaroslav91@gmail.com)

### If you use multiple accounts in the same Chrome browser - Please create a separate Chrome Profile for this one account. Sometime Google API see you as another account.

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
#### 7. Click on 'Refresh account': Extensions > GPT for Sheets, Docs, Slides, Forms > Refresh Account
![refresh-account.png]({{ site.baseurl }}/images/setup-api-keys-1.png){: width="600"}
#### 8. Click on 'Set Up OpenAI Key': Extensions > GPT for Sheets, Docs, Slides, Forms > Refresh Account
![refresh-account.png]({{ site.baseurl }}/images/setup-api-keys-2.png){: width="600"}
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
##### You exceeded your current quota, please check your plan and billing details
##### Exception: "The model gpt-4-0125-preview does not exist or you do not have access to it

>OpenAI transitioned to prepaid plans starting March 25, 2024.
>Please review your OpenAI API Key account here: <a href="https://platform.openai.com/account/billing/overview" rel="nofollow" target="_blank">Billing for OpenAI Account</a>

It happens due to of your tier in Open AI, please increase your tier in OpenAI and the model will appear for your account.
1. If you have Free Tier - Please fill in your account at least for 5$ to have Tier 1 <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-one" rel="nofollow" target="_blank">Rate Limits</a>
2. To check your tier please follow this link: <a href="https://platform.openai.com/settings/organization/limits"  rel="nofollow" target="_blank">Check your Tier</a>
3. Recreate the API Key and try to use [GPT, Claude, Mistral, Gemini for Sheets](https://docgpt.ai/gpt-for-sheets/) with the new (recreated) API Key


##### ScriptError: Authorisation is required to perform that action

Reason
> You use a company email account, you need to use a personal email or ask admin to allow execution addons
> You used multiple Google accounts in the same Chrome session

Solution #1
1. Use Personal Email

Solution #2
1. Create a new Chrome profile
2. Create a new spreadsheet
3. Try a GPT function again

Solution #3
- Clean up cookies in your browser
- Login again in Google account
- Uninstall and Install again the add-on

Solution #4
- Ask admin of the workspace account to allow execution add-ons

Other possible issues could be found here: <a target="_blank" href="/docs/support-gpt-sheets-docs-slides-forms-gmail/">Troubleshooting</a>

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

---
layout: docs_layouts/default
title: Troubleshooting GPT for Google Sheets, Docs, Slides, Forms, Gmail
nav_order: 0
has_children: true
permalink: /docs/support-gpt-sheets-docs-slides-forms-gmail/
description: Troubleshooting GPT for Google Sheets, Docs, Slides, Forms, Gmail
---

### Links:
- <a href="/google-doc-ai/">GPT for Docs, Slides, Forms</a>
- <a href="/gpt-for-sheets/">GPT for Sheets</a>
- <a href="/ai-email-assistant/">GPT for Gmail</a>
- <a href="/google-slide-ai/">Google Slides AI</a>
- <a href="/quiz-maker-ai/">Quiz Maker AI</a>
- <a href="/translate-slides-with-ai-gpt/">Translate and Rephrase Slides in 1 click</a>


### RECOMMENDATION: The best way to ensure optimal performance with Google Add-Ons is by using the Google Chrome browser. This helps bypass any potential issues that may arise from compatibility with other browsers.

# Errors

### We are sorry, but you do not have access to this Addon. Please contact your Organization Administrator for access.
### ScriptError: Authorisation is required to perform that action
```ScriptError: Authorisation is required to perform that action```

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


### You’ve exceeded your current quota. Please review your plan and billing details.

It happens due to of your tier in Open AI, please increase your tier in OpenAI and the model will appear for your account.
1. If you have Free Tier - Please fill in your account at least for 1-5$ to have Tier 1 <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-one" rel="nofollow" target="_blank">Rate Limits</a>
2. To check your tier please follow this link: <a href="https://platform.openai.com/settings/organization/limits"  rel="nofollow" target="_blank">Check your Tier</a>
3. [Recreate the API Ke](https://platform.openai.com/api-keys)y and try to use with the new (recreated) API Key

Official message from OpenAI
> On July 6, 2023, we gave access to the [GPT-4 API](https://platform.openai.com/docs/models/gpt-4) (8k) to all API users who have made a successful payment of $1 or more. We plan to open up access to all developers soon, and then start raising rate-limits after that depending on compute availability.
> For API accounts created after August 18, 2023, you can get instant access to GPT-4 after purchasing $0.50 worth or more of pre-paid credits. You can read about prepaid billing.

So you need to fill in your OpenAI account or try to use our other plans with our OpenAI API Key with the highest Tier and highest rate limit for enterprise apps from OpenAI.

### Exception: "The model gpt-4-0125-preview does not exist or you do not have access to it."

> OpenAI switched to prepaid plans on March 25, 2024.  
> Please review your OpenAI API Key account here: [Billing for OpenAI Account](https://platform.openai.com/account/billing/overview)

This issue is related to your current tier on OpenAI. To resolve it, consider upgrading your tier so the model becomes accessible for your account.

1. **Free Tier Users**: Please add at least $5 to your account to reach **Tier 1**. [View Rate Limits](https://platform.openai.com/docs/guides/rate-limits?context=tier-one)
2. **Check Your Tier**: Use this link to view your current tier: [Check Your Tier](https://platform.openai.com/settings/organization/limits)
3. **API Key**: Recreate your API key and try using [GPT, Claude, Mistral, Gemini for Sheets](https://docgpt.ai/gpt-for-sheets/) with the newly generated API key.


### Name #ERROR or the function return #ERROR everytime

Reason
> You have installed other GPT add-ons that use the same 'GPT()' function name, resulting in a conflict

Solution
- Please remove all other add-on that provides AI/GPT functions, refresh the page, re-run the add-on, click on 'Refresh Account' button


### Only shows 'Help'

Reason
> If you navigate to Extensions > GPT for Docs, Sheets, Docs, Forms, Slides - you might notice that the only available option is Help. This issue could occur if you access the Extensions menu immediately upon opening your spreadsheet

Solution
- Please refresh your page, wait for 30 seconds, and then attempt to access the Extensions menu again


### Exceeded maximum execution time


```Exceeded maximum execution time (line […]).```

Reason
> Your inquiry has surpassed the 30-second threshold permitted by Google Sheets functions. This occurrence is more probable during peak periods when the servers of model providers, like OpenAI, are under heavy demand

Solutions
- Update arguments and try again (add a space, make it shorter to trigger calling again)
- The request is too long, please make shorter argument and expected output

### Open the sidebar: Extensions > GPT for Sheets, Docs, Slides, Forms > Launch

Reason
> You need to do initiation set up, it could be done via launching the sidebar.  

Solutions
- Click on Extensions > GPT for Sheets, Docs, Slides, Forms > Launch

###  #NAME? Unknown function

```Error: #NAME? Unknown function: 'GPT'```

Reason
> GPT functions have not been enabled in your spreadsheet with the Add-On.
> You have other GPT add-ons in you spreadsheet

Solutions
- Remove other add-ons that use GPT functions
- Click on Extensions > GPT for Sheets, Docs, Slides, Forms > Launch

### Multiple Google accounts error
```You seem to be logged in to multiple Google accounts in your browser.```

Reason
> You used multiple Google accounts in the same Chrome session.

Solution #1
1. Create a new Chrome profile
2. Create a new spreadsheet
3. Try a GPT function again

Solution #2
- Clean up cookies in your browser
- Login again in Google account
- Uninstall and Install again the add-on


### Service invoked too many times
```Exception: Service invoked too many times for one day```

Reason
> You have exhausted your daily allowance of calls to an external service through your Google account

Solution
- Quotas reset every 24 hours, so please wait the day or use different account

- Quota for gmail.com accounts: 20k / day
- Quota for Google Workspace accounts: 100k / day

### Requests per day limit reached
```Requests per day limit reached```
Reason
> You have reached your requests per day from OpenAI side

Solution
- Wait 1-24h and try again


### Formula parse error
```Formula parse error```

Reason
> There appears to be a structural or syntax error in your formula, rendering it unreadable by Google Sheets

Solutions
- Check that you have quotation marks `✅ =GPT("hi")`,  `✅ =GPT(C1)`, `❌ =GPT(hi)`
- Check that your arguments are in the correct order
- Check that you are using the right parameter separator for your locale: `,` or `;`?
- Check that you are using the correct number format for temperature for your locale: `0.001` or `0,001`


### Sidebar is blank

Reason
> Fails to load the add-on

Solutions
- Clear the cache and cookies on your browser and run again
- Open the add-on in Incognito profile
- Re-login to the account
- Uninstall/ Disable other add-on that provides GPT functions

### Formulas are reloaded when I edit, open the spreadsheets, tabs

Reason
> Google Sheets refreshes all formulas automatically every few hours, including GPT formulas, which may result in unexpected expenses and alterations in outcomes


Solution
- Replace formulas with their results
- Use provided buttons in the sidebar to replace' 'selected range' or 'replace all gpts'


### GPT functions are stuck on "Loading"

Reason
> GPT functions fail to execute

Solution
- Remove other add-on that provided GPT functions and re-launch
- Change argument values (add a space, comma etc)
- Make it shorter
- Make expected result shorter
- Refresh the page and re-launch the sidebar

### I charged when I anm not using GPT for Sheets

Reason
> Google Sheets automatically re-load all formulas every some period of time

Solutions
- Replace formulas with their results
- Use provided buttons in the sidebar to replace' 'selected range' or 'replace all gpts'

### My results reloaded and results are changed, lost
Reason
> Google Sheets automatically re-load all formulas every some period of time

Solutions
- Replace formulas with their results
- Use provided buttons in the sidebar to replace' 'selected range' or 'replace all gpts'

---
layout: docs_layouts/default
title: Errors in Google Sheets, Docs, Slides, Forms, Gmail
nav_order: 0
has_children: false
permalink: /docs/errors-sheets-docs-slides-forms-gmail/
description: Troubleshoot common error in GPT for Google Sheets, Docs, Slides, Forms, Gmail.
---

### Links:
- <a href="/google-doc-ai/">GPT for Docs, Slides, Forms</a>
- <a href="/gpt-for-sheets/">GPT for Sheets</a>
- <a href="/ai-email-assistant/">GPT for Gmail</a>
- <a href="/google-slide-ai/">Google Slides AI</a>
- <a href="/quiz-maker-ai/">Quiz Maker AI</a>
- <a href="/translate-slides-with-ai-gpt/">Translate and Rephrase Slides in 1 click</a>

# Errors

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


### ScriptError: Authorisation is required to perform that action 
```ScriptError: Authorisation is required to perform that action```

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

---
layout: docs_layouts/default
title: OpenAI API-sleutels instellen - Complete handleiding voor Google Sheets AI-integratie
nav_order: 1
parent: GPT for Sheets
permalink: /docs/gpt-for-sheets/set-up-openai-api-keys-nl
description: Uitgebreide handleiding voor het instellen van OpenAI, Claude, Gemini, Perplexity en Mistral API-sleutels in Google Sheets. Maximaliseer AI-prestaties in uw spreadsheets.
---

<script>
window.onload = function() {
    var promoElement = document.getElementById("promo-sheets");
    if (promoElement) {
        promoElement.style.display = "none";
    }
};
</script>

# AI-kracht voor Google Sheets: Complete installatiegids voor OpenAI, Claude, Gemini, Perplexity en Mistral

## 🌐 Beschikbare talen
- [English (Engels)](/docs/gpt-for-sheets/set-up-openai-api-keys)
- [Русский (Russisch)](/docs/gpt-for-sheets/set-up-openai-api-keys-ru)
- [Svenska (Zweeds)](/docs/gpt-for-sheets/set-up-openai-api-keys-sv)
- [Polski (Pools)](/docs/gpt-for-sheets/set-up-openai-api-keys-pl)
- [Türkçe (Turks)](/docs/gpt-for-sheets/set-up-openai-api-keys-tr)
- [Deutsch (Duits)](/docs/gpt-for-sheets/set-up-openai-api-keys-ch)
- [Français (Frans)](/docs/gpt-for-sheets/set-up-openai-api-keys-fr)
- [Nederlands (Huidig)](/docs/gpt-for-sheets/set-up-openai-api-keys-nl)
- [Español (Spaans)](/docs/gpt-for-sheets/set-up-openai-api-keys-es)
- [Português (Portugees)](/docs/gpt-for-sheets/set-up-openai-api-keys-pt)
- [日本語 (Japans)](/docs/gpt-for-sheets/set-up-openai-api-keys-ja)
- [中文 (Chinees)](/docs/gpt-for-sheets/set-up-openai-api-keys-zh)
- [Українська (Oekraïens)](/docs/gpt-for-sheets/set-up-openai-api-keys-uk)

> 🔥 **Laatste update**: Nu met ondersteuning voor GPT-4, Claude 3, Gemini Pro, Mistral en Perplexity!

## Inhoudsopgave
1. [Aan de slag: Add-on installatie](#aan-de-slag)
2. [OpenAI API-sleutels instellen](#openai-api-sleutels-instellen)
3. [Claude (Anthropic) API-sleutels](#claude-api-sleutels)
4. [Gemini API-sleutels](#gemini-api-sleutels)
5. [Perplexity API-sleutels](#perplexity-api-sleutels)
6. [Mistral API-sleutels](#mistral-api-sleutels)
7. [Probleemoplossing](#probleemoplossing)

## Aan de slag

Volg deze stappen om AI in Google Sheets te gebruiken:

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_docs_sheets_forms_slides/466607203252" target="_blank">Installeer de GPT for Sheets Add-on</a>
2. <a href="/gpt-for-sheets/" target="_blank">Upgrade naar Pro User-plan</a>
3. Maak een nieuwe spreadsheet of zorg voor **eigendomsrechten** van een bestaande
4. Start de add-on: Extensies > GPT for Sheets, Docs, Slides, Forms > **Starten**
5. Account vernieuwen: Extensies > GPT for Sheets, Docs, Slides, Forms > **Account vernieuwen** <img style="display: block;" src="{{ site.baseurl }}/images/setup-api-keys-1.png" alt="Account vernieuwen" width="400">

## OpenAI API-sleutels instellen

### 1. OpenAI Platform toegang
1. Ga naar het <a href="https://platform.openai.com/account/api-keys" target="_blank">OpenAI Platform</a>
2. Maak een account aan of log in

![OpenAI aanmeldpagina]({{ site.baseurl }}/images/sign-up-openai.png)

### 2. API-sleutel aanmaken
1. Klik op "Create new secret key"
2. Ga naar de <a href="https://platform.openai.com/settings/organization/billing/overview" target="_blank">factureringspagina</a> en laad **minimaal $1** op
   - De werkelijke gebruikskosten zijn zeer laag
   - Het systeem is ontworpen voor optimale API-limieten

![API-sleutel genereren]({{ site.baseurl }}/images/generate-api-key.png)

### 3. API-sleutel kopiëren

![Gegenereerde API-sleutel]({{ site.baseurl }}/images/created-api-key.png)

### 4. Add-on configuratie
1. Open spreadsheet en start zijbalk
2. Klik op "API-sleutel instellen"
3. Plak de gekopieerde API-sleutel
4. Klik op "Controleren"
5. Klik op "Opslaan"

### 5. Pro User-plan bevestigen
Voor add-on gebruik is een Pro User-plan vereist:

![Pro User-plan bevestiging]({{ site.baseurl }}/images/subscription-pro-user.png){: width="300"}

### 6. Account vernieuwen
Klik in het extensiemenu op "Account vernieuwen":

![Account vernieuwen]({{ site.baseurl }}/images/setup-api-keys-1.png){: width="600"}

### 7. API-sleutel instellen
Klik op "OpenAI API-sleutel instellen":

![API-sleutel instellen]({{ site.baseurl }}/images/setup-api-keys-2.png){: width="600"}

### 8. API-sleutel controleren en opslaan
Voer API-sleutel in en klik op "Controleren":

![API-sleutel controleren en opslaan]({{ site.baseurl }}/images/check-and-save-api-key.png){: width="600"}

## Gebruiksvoorbeelden

Gebruik deze AI-functies direct in uw spreadsheetcellen:

```
=GPT("Schrijf een advertentietekst voor een café")
=CLAUDE("Analyseer deze klantbeoordelingen")
=GEMINI("Maak een verkoopprognose")
=PERPLEXITY("Onderzoek actuele marketingtrends")
=MISTRAL("Genereer productbeschrijvingen")
```

### Belangrijke opmerkingen

![GPT for Sheets Belangrijke opmerkingen]({{ site.baseurl }}/images/gpt-for-sheets-warning.png){: width="500"}

> Klik na ontvangst van resultaten altijd op **"Alle GPTs vervangen"** of **"Geselecteerde GPTs vervangen"**.
> Anders worden formules opnieuw berekend bij pagina-verversing of elke 1-2 minuten.

## Gratis vs. Premium-limieten

### Gratis quotum (Free Tier)
![Free Tier limieten]({{ site.baseurl }}/images/tier-0.png){: width="500"}

### Premium quotum (Tier 1)
![Tier 1 limieten]({{ site.baseurl }}/images/tier-1.png){: width="500"}

### Chrome-profiel aanmaken
Bij meerdere Google-accounts raden we een apart Chrome-profiel aan:

![Chrome-profiel aanmaken]({{ site.baseurl }}/images/create-profile.png){: width="300"}

## Claude (Anthropic) API-sleutels

1. Bezoek de <a href="https://console.anthropic.com/settings/keys" target="_blank">Claude API-sleutelpagina</a>
2. Maak account aan of log in
3. Genereer API-sleutel
4. Selecteer Claude in add-on zijbalk en voer API-sleutel in

## Gemini API-sleutels

1. Open <a href="https://aistudio.google.com/app/apikey" target="_blank">Google AI Studio</a>
2. Genereer API-sleutel
3. Selecteer Gemini in add-on zijbalk en voer API-sleutel in

## Perplexity API-sleutels

1. Ga naar <a href="https://www.perplexity.ai/settings/api" target="_blank">Perplexity instellingen</a>
2. Genereer API-sleutel
3. Selecteer Perplexity in add-on zijbalk en voer API-sleutel in

## Mistral API-sleutels

1. Bezoek de <a href="https://console.mistral.ai/api-keys/" target="_blank">Mistral Console</a>
2. Genereer API-sleutel
3. Selecteer Mistral in add-on zijbalk en voer API-sleutel in

## Probleemoplossing

### "Deze actie vereist autorisatie"

1. **Gebruik persoonlijk Gmail-account**: Zakelijke e-mails (Workspace) kunnen add-on-beperkingen hebben
2. Bij persoonlijk account: Installeer add-on opnieuw
3. Gebruik apart Chrome-profiel - belangrijk bij meerdere Google-accounts

### "Quotum overschreden. Controleer abonnement en facturering"

- Ga naar <a href="https://platform.openai.com/settings/organization/billing/overview" target="_blank">OpenAI facturering</a> en laad **minimaal $1** op

### Aanbevelingen

- Gebruik Google Chrome browser
- Bij meerdere accounts: Maak apart Chrome-profiel aan
- Bij zakelijke e-mail: Contacteer beheerder of gebruik persoonlijk account

## Handige links

- <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-free" target="_blank">OpenAI API-limieten</a>
- <a href="https://platform.openai.com/api-keys" target="_blank">OpenAI API-sleutelbeheer</a>
- <a href="https://platform.openai.com/account/billing/overview" target="_blank">OpenAI facturering</a>
- <a href="/docs/support-gpt-sheets-docs-slides-forms-gmail/" target="_blank">Uitgebreide probleemoplossing</a>

Na installatie kunnen alle editors van de spreadsheet de AI-functies gebruiken met deze API-sleutel. 
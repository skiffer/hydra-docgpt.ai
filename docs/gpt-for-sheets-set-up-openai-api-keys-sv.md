---
layout: docs_layouts/default
title: Konfigurera OpenAI API-nycklar - Komplett Guide för AI-integration i Google Kalkylark
nav_order: 1
parent: GPT for Sheets
permalink: /docs/gpt-for-sheets/set-up-openai-api-keys-sv
description: Omfattande guide för att konfigurera OpenAI, Claude, Gemini, Perplexity och Mistral API-nycklar i Google Kalkylark. Maximera AI-prestanda i dina kalkylark.
---

<script>
window.onload = function() {
    var promoElement = document.getElementById("promo-sheets");
    if (promoElement) {
        promoElement.style.display = "none";
    }
};
</script>

# AI-kraft för Google Kalkylark: Komplett Guide för OpenAI, Claude, Gemini, Perplexity och Mistral Installation

## 🌐 Tillgängliga språk
- [English (Engelska)](/docs/gpt-for-sheets/set-up-openai-api-keys)
- [Русский (Ryska)](/docs/gpt-for-sheets/set-up-openai-api-keys-ru)
- [Svenska (Nuvarande)](/docs/gpt-for-sheets/set-up-openai-api-keys-sv)
- [Polski (Polska)](/docs/gpt-for-sheets/set-up-openai-api-keys-pl)
- [Türkçe (Turkiska)](/docs/gpt-for-sheets/set-up-openai-api-keys-tr)
- [Deutsch (Tyska)](/docs/gpt-for-sheets/set-up-openai-api-keys-ch)
- [Français (Franska)](/docs/gpt-for-sheets/set-up-openai-api-keys-fr)
- [Nederlands (Nederländska)](/docs/gpt-for-sheets/set-up-openai-api-keys-nl)
- [Español (Spanska)](/docs/gpt-for-sheets/set-up-openai-api-keys-es)
- [Português (Portugisiska)](/docs/gpt-for-sheets/set-up-openai-api-keys-pt)
- [日本語 (Japanska)](/docs/gpt-for-sheets/set-up-openai-api-keys-ja)
- [中文 (Kinesiska)](/docs/gpt-for-sheets/set-up-openai-api-keys-zh)
- [Українська (Ukrainska)](/docs/gpt-for-sheets/set-up-openai-api-keys-uk)

## Innehåll
1. [Kom igång: Installera tillägget](#kom-igång)
2. [Konfigurera OpenAI API-nycklar](#konfigurera-openai-api-nycklar)
3. [Claude (Anthropic) API-nycklar](#claude-api-nycklar)
4. [Gemini API-nycklar](#gemini-api-nycklar)
5. [Perplexity API-nycklar](#perplexity-api-nycklar)
6. [Mistral API-nycklar](#mistral-api-nycklar)
7. [Felsökning](#felsökning)

## Kom igång

Följ dessa steg för att använda AI i Google Kalkylark:

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_docs_sheets_forms_slides/466607203252" target="_blank">Installera GPT for Sheets-tillägget</a>
2. <a href="/gpt-for-sheets/" target="_blank">Uppgradera till Pro User-plan</a>
3. Skapa ett nytt kalkylark eller se till att du är **ägare** till det befintliga
4. Starta tillägget: Tillägg > GPT for Sheets, Docs, Slides, Forms > **Starta**
5. Uppdatera kontot: Tillägg > GPT for Sheets, Docs, Slides, Forms > **Uppdatera konto** <img style="display: block;" src="{{ site.baseurl }}/images/setup-api-keys-1.png" alt="Uppdatera konto" width="400">

## Konfigurera OpenAI API-nycklar

### 1. Åtkomst till OpenAI-plattformen
1. Besök <a href="https://platform.openai.com/account/api-keys" target="_blank">OpenAI-plattformen</a>
2. Skapa ett konto eller logga in

![OpenAI registreringssida]({{ site.baseurl }}/images/sign-up-openai.png)

### 2. Skapa API-nyckel
1. Klicka på "Create new secret key"
2. Gå till <a href="https://platform.openai.com/settings/organization/billing/overview" target="_blank">betalningssidan</a> och lägg till **minst $1**
   - De faktiska kostnaderna för användning är mycket låga
   - Systemet är optimerat för API-gränser

![Generera API-nyckel]({{ site.baseurl }}/images/generate-api-key.png)

### 3. Kopiera API-nyckeln

![Skapad API-nyckel]({{ site.baseurl }}/images/created-api-key.png)

### 4. Konfigurera tillägget
1. Öppna kalkylarket och starta sidopanelen
2. Klicka på "Konfigurera API-nyckel"
3. Klistra in den kopierade API-nyckeln
4. Klicka på "Kontrollera"
5. Klicka på "Spara"

### 5. Bekräfta Pro User-plan
Pro User-plan krävs för att använda tillägget:

![Bekräfta Pro User-plan]({{ site.baseurl }}/images/subscription-pro-user.png){: width="300"}

### 6. Uppdatera konto
Klicka på "Uppdatera konto" i tilläggsmenyn:

![Uppdatera konto]({{ site.baseurl }}/images/setup-api-keys-1.png){: width="600"}

### 7. Konfigurera API-nyckel
Klicka på "Konfigurera OpenAI-nyckel":

![Konfigurera API-nyckel]({{ site.baseurl }}/images/setup-api-keys-2.png){: width="600"}

### 8. Kontrollera och spara API-nyckel
Ange API-nyckeln och klicka på "Kontrollera":

![Kontrollera och spara API-nyckel]({{ site.baseurl }}/images/check-and-save-api-key.png){: width="600"}

## Användningsexempel

Använd dessa AI-funktioner direkt i dina celler:

```
=GPT("Skriv reklamtext för ett café")
=CLAUDE("Analysera dessa kundrecensioner")
=GEMINI("Skapa en försäljningsprognos")
=PERPLEXITY("Undersök aktuella marknadsföringstrender")
=MISTRAL("Generera produktbeskrivningar")
```

### Viktiga anmärkningar

![Viktiga anmärkningar GPT for Sheets]({{ site.baseurl }}/images/gpt-for-sheets-warning.png){: width="500"}

> Efter att ha fått resultaten, klicka på **"Ersätt alla GPT"** eller **"Ersätt valda GPT"**.
> Annars kommer formler att omberäknas när sidan uppdateras eller var 1-2 minut.

## Gratis och premium-gränser

### Gratiskvot (Free Tier)
![Free Tier-gränser]({{ site.baseurl }}/images/tier-0.png){: width="500"}

### Premiumkvot (Tier 1)
![Tier 1-gränser]({{ site.baseurl }}/images/tier-1.png){: width="500"}

### Skapa Chrome-profil
Vid användning av flera Google-konton rekommenderar vi en separat Chrome-profil:

![Skapa Chrome-profil]({{ site.baseurl }}/images/create-profile.png){: width="300"}

## Claude API-nycklar (Anthropic)

1. Besök <a href="https://console.anthropic.com/settings/keys" target="_blank">Claude API-nyckelsidan</a>
2. Skapa ett konto eller logga in
3. Generera API-nyckel
4. Välj Claude i tilläggets sidopanel och ange API-nyckeln

## Gemini API-nycklar

1. Öppna <a href="https://aistudio.google.com/app/apikey" target="_blank">Google AI Studio</a>
2. Generera API-nyckel
3. Välj Gemini i tilläggets sidopanel och ange API-nyckeln

## Perplexity API-nycklar

1. Gå till <a href="https://www.perplexity.ai/settings/api" target="_blank">Perplexity-inställningar</a>
2. Generera API-nyckel
3. Välj Perplexity i tilläggets sidopanel och ange API-nyckeln

## Mistral API-nycklar

1. Besök <a href="https://console.mistral.ai/api-keys/" target="_blank">Mistral-konsolen</a>
2. Generera API-nyckel
3. Välj Mistral i tilläggets sidopanel och ange API-nyckeln

## Felsökning

### "Denna åtgärd kräver behörighet"

1. **Använd personligt Gmail-konto**: Företagskonton (Workspace) kan ha begränsningar för tillägg
2. Med personligt konto: Installera om tillägget
3. Använd separat Chrome-profil - viktigt när du har flera Google-konton

### "Kvoten överskriden. Kontrollera din plan och betalning"

- Gå till <a href="https://platform.openai.com/settings/organization/billing/overview" target="_blank">OpenAI-betalning</a> och lägg till **minst $1**

### Rekommendationer

- Använd Google Chrome-webbläsaren
- Vid flera konton: Skapa separat Chrome-profil
- Med företagskonto: Kontakta administratören eller använd personligt konto

## Användbara länkar

- <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-free" target="_blank">OpenAI API-gränser</a>
- <a href="https://platform.openai.com/api-keys" target="_blank">Hantera OpenAI API-nycklar</a>
- <a href="https://platform.openai.com/account/billing/overview" target="_blank">OpenAI-betalning</a>
- <a href="/docs/support-gpt-sheets-docs-slides-forms-gmail/" target="_blank">Detaljerad felsökning</a>

Efter konfiguration kan alla redigerare av kalkylarket använda AI-funktioner med denna API-nyckel. 
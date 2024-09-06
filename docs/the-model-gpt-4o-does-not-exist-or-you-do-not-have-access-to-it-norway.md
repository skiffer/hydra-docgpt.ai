---
layout: docs_layouts/default
title: Modellen GPT-4o finnes ikke eller du har ikke tilgang til den
nav_order: 1
parent: Errors in Google Sheets and ChatGPT
permalink: /docs/gpt-for-sheets/the-model-gpt-4o-does-not-exist-or-you-do-not-have-access-to-it/norway
description: Modellen GPT-4o finnes ikke eller du har ikke tilgang til den
---

# Modellen GPT-4o finnes ikke, eller du har ikke tilgang til den

For å få tilgang til API for betaling per bruk, må du først sette opp en betalingsplan og kjøpe kreditter. Se [Oversikt over fakturering](https://platform.openai.com/settings/organization/billing/overview) for mer informasjon.

Her kan du kopiere din API-nøkkel: <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Open AI - Dine API-nøkler</a>

1. Når betalingen er gjennomført (minimum $5), vil høyere grenseverdier for GPT-4-modellen og oppover bli aktivert. Du må ha minst **Nivå 1**!
2. Det kan vanligvis ta opptil 5 minutter før kreditten vises i playground, selv om den allerede vises på dashbordet.
3. Prøv også å opprette API-nøkkelen på nytt etter vellykket betaling.
   ![refresh-account.png]({{ site.baseurl }}/images/billing-screen-page.png){: width="400"}
4. Sjekk dine grenseverdier her: <a rel="nofollow" target="_blank" href="https://platform.openai.com/settings/organization/limits">Grenseverdier</a>
   ![limits-screen-page.png]({{ site.baseurl }}/images/limits-screen-page.png){: width="400"}

Du må fylle opp din OpenAI-konto eller bruke våre andre planer med OpenAIs API-nøkkel på høyeste nivå og de høyeste grenseverdiene for bedriftsapper fra OpenAI.

**For å bruke GPT-4o, må du ha minst Nivå 1!**
Gode nyheter – du trenger ikke et Open AI Plus-abonnement.

![tier-limits-screen-page.png]({{ site.baseurl }}/images/tier-limits-screen-page.png){: width="400"}

Med GPT for Google Sheets kan du bruke GPT-4o uten OpenAI Plus-abonnement. Betal etter bruk.

For å øke grenseverdiene, sjekk denne siden: <a href="https://platform.openai.com/docs/guides/rate-limits" rel="nofollow" target="_blank">Guide for å sjekke dine ChatGPT-grenseverdier</a>

### Hvordan fungerer grenseverdiene?

Grenseverdiene gjelder for fem viktige måleparametere:

- **RPM (Forespørsler per minutt)**
- **RPD (Forespørsler per dag)**
- **TPM (Tokens per minutt)**
- **TPD (Tokens per dag)**
- **IPM (Bilder per minutt)**

Du kan nå en grense basert på noen av disse parametrene, avhengig av hvilken som oppnås først. For eksempel, hvis din RPM-grense er 20, vil du nå denne grensen ved å sende 20 forespørsler med bare 100 tokens hver, selv om du ikke har brukt hele tokens-grensen din (f.eks. 150k tokens per minutt).

### Grenseverdier for batch-API-kø

Grenseverdier for batch-API-kø beregnes basert på det totale antallet tokens som er satt i kø for en spesifikk modell. Tokens fra ventende batch-jobber telles med i kø-grensen. Når en batch-jobb er fullført, teller ikke lenger disse tokens mot modellens grense.

### Viktige punkter å merke seg:

- **Grenseverdier på organisasjons- og prosjektnivå**: Grenseverdier gjelder på organisasjons- og prosjektnivå, ikke på brukernivå.
- **Modellspesifikke grenseverdier**: Grenseverdier varierer avhengig av hvilken modell du bruker.
- **Bruksgrenser**: Det er månedlige utgiftsgrenser for API-bruk, også kjent som "bruksgrenser".
- **Delte grenseverdier**: Noen modellers familier deler grenseverdier. For eksempel, hvis din organisasjons grenseside viser en delt TPM på 3,5M, vil alle kall til modeller i den "delte grensen"-listen telle mot totalen på 3,5M.

Forståelsen av disse grenseverdiene sikrer optimal bruk av API-en uten avbrudd på grunn av at grenseverdiene nås.

### Bruksnivåer

Du kan se grenseverdiene for forespørsler og bruk for organisasjonen din under grenseseksjonen i kontoens innstillinger. Når du bruker mer av OpenAI API og dine utgifter øker, vil du automatisk bli oppgradert til neste bruksnivå. Dette fører vanligvis til høyere grenseverdier for de fleste modeller.

| **Nivå**   | **Kvalifikasjon**                                                    | **Bruksgrenser**    |
|------------|----------------------------------------------------------------------|---------------------|
| **Gratis** | Tilgjengelig for brukere i støttede regioner                         | $100 / måned        |
| **Nivå 1** | $5 betalt                                                            | $100 / måned        |
| **Nivå 2** | $50 betalt og minst 7 dager siden første vellykkede betaling         | $500 / måned        |
| **Nivå 3** | $100 betalt og minst 7 dager siden første vellykkede betaling        | $1,000 / måned      |
| **Nivå 4** | $250 betalt og minst 14 dager siden første vellykkede betaling       | $5,000 / måned      |
| **Nivå 5** | $1,000 betalt og minst 30 dager siden første vellykkede betaling     | $50,000 / måned     |

Etter hvert som du går opp i nivåene, øker dine grenseverdier, noe som gir deg mer fleksibilitet til å bruke API-en til det fulle.

### Massebruk av GPT-4 i Google Sheets
<iframe width="560" height="315" src="https://www.youtube.com/embed/V4IRVKBHJy4?si=3qoBVoXAddHTg7qR" title="Hvordan bruke GPT for Sheets" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Planer: Profesjonell, Bedrift

Her er lenken: [GPT, Claude, Mistral, Gemini for Sheets](https://docgpt.ai/gpt-for-sheets/)

#### Lenker
- <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-free" rel="nofollow" target="_blank">Hvordan øke dine grenseverdier for OpenAI-nøkler</a>
- <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Open AI - Dine API-nøkler</a>
- <a href="https://platform.openai.com/account/billing/overview" rel="nofollow" target="_blank">Fakturering for OpenAI-konto</a>

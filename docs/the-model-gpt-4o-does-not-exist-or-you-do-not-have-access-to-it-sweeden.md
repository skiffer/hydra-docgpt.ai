---
layout: docs_layouts/default
title: Modellen GPT-4o finns inte eller så har du inte åtkomst till den
nav_order: 1
parent: Errors in Google Sheets and ChatGPT
permalink: /docs/gpt-for-sheets/the-model-gpt-4o-does-not-exist-or-you-do-not-have-access-to-it/swedish
description: Modellen GPT-4o finns inte eller så har du inte åtkomst till den
---

# Modellen GPT-4o finns inte eller så har du inte åtkomst till den

För att få åtkomst till betalnings-API:n måste du först ställa in en betalningsplan och köpa krediter. Vänligen se [Faktureringsöversikt](https://platform.openai.com/settings/organization/billing/overview) för detaljer.

Här kan du kopiera din API-nyckel: <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Open AI - Dina API-nycklar</a>

1. När en betalning har genomförts (minst $5) aktiveras högre gränser för GPT-4 och högre modeller. Du måste vara minst på **Nivå 1**!
2. Det kan vanligtvis ta upp till 5 minuter innan krediten syns i playground, även om den redan visas på instrumentpanelen.
3. Försök att återskapa din API-nyckel efter en framgångsrik betalning.
   ![refresh-account.png]({{ site.baseurl }}/images/billing-screen-page.png){: width="400"}
4. Kontrollera dina gränser här: <a rel="nofollow" target="_blank" href="https://platform.openai.com/settings/organization/limits">Gränser för begärningar</a>
   ![limits-screen-page.png]({{ site.baseurl }}/images/limits-screen-page.png){: width="400"}

Så du måste fylla på ditt OpenAI-konto eller använda våra andra planer med den högsta nivån och de högsta gränserna för företagsapplikationer från OpenAI.

**För att använda GPT-4o måste du vara minst på Nivå 1!**
Goda nyheter – du behöver inte Open AI Plus-abonnemang.

![tier-limits-screen-page.png]({{ site.baseurl }}/images/tier-limits-screen-page.png){: width="400"}

Med GPT för Google Sheets kan du använda GPT-4o utan OpenAI Plus-abonnemang. Betala efter användning.

För att öka gränserna, kolla denna sida: <a href="https://platform.openai.com/docs/guides/rate-limits" rel="nofollow" target="_blank">Guide för att kontrollera dina ChatGPT-gränser</a>

### Hur fungerar begärningsgränser?

Begärningsgränser tillämpas över fem viktiga mått:

- **RPM (Begärningar per minut)**
- **RPD (Begärningar per dag)**
- **TPM (Tokens per minut)**
- **TPD (Tokens per dag)**
- **IPM (Bilder per minut)**

Du kan nå en gräns baserat på någon av dessa mått, beroende på vilken som uppnås först. Till exempel, om din RPM-gräns är 20, skulle du nå den gränsen genom att skicka 20 begärningar med bara 100 tokens vardera, även om du inte använder hela din tilldelning av tokens (t.ex. 150k tokens per minut).

### Batch API-kögränser

Batch API-kögränser beräknas baserat på det totala antalet tokens som är köade för en specifik modell. Tokens från väntande batchjobb räknas mot kögränsen. När ett batchjobb är slutfört räknas dessa tokens inte längre mot modellens gräns.

### Viktiga punkter att notera:

- **Gränser på organisations- och projektnivå**: Begärningsgränser tillämpas på organisations- och projektnivå, inte användarnivå.
- **Modellspecifika gränser**: Begärningsgränser varierar beroende på vilken modell du använder.
- **Användningsgränser**: Det finns månadsvisa utgiftsgränser för API-användning, även kända som "användningsgränser".
- **Delade gränser**: Vissa modellers familjer delar gränser. Till exempel, om din organisations gränssida visar en delad TPM på 3,5M, räknas alla samtal till modellerna i den listan mot den totala 3,5M.

Genom att förstå dessa gränser kan du säkerställa optimal användning av API:n utan avbrott på grund av att begärningsgränser nås.

### Användningsnivåer

Du kan se gränserna för begärningar och användning för din organisation under gränssektionen i kontoinställningarna. När du använder OpenAI API mer och dina utgifter ökar, kommer du automatiskt att uppgraderas till nästa användningsnivå. Detta leder vanligtvis till högre gränser för de flesta modeller.

| **Nivå**    | **Kvalifikation**                                                  | **Användningsgränser** |
|-------------|--------------------------------------------------------------------|------------------------|
| **Gratis**  | Tillgänglig för användare i stödde regioner                         | $100 / månad           |
| **Nivå 1**  | $5 betalt                                                          | $100 / månad           |
| **Nivå 2**  | $50 betalt och minst 7 dagar efter första framgångsrika betalning   | $500 / månad           |
| **Nivå 3**  | $100 betalt och minst 7 dagar efter första framgångsrika betalning  | $1,000 / månad         |
| **Nivå 4**  | $250 betalt och minst 14 dagar efter första framgångsrika betalning | $5,000 / månad         |
| **Nivå 5**  | $1,000 betalt och minst 30 dagar efter första framgångsrika betalning | $50,000 / månad       |

När du går upp i nivåerna ökar dina gränser, vilket ger dig mer flexibilitet att använda API:n till fullo.

### Bulk-användning av GPT-4 i Google Sheets
<iframe width="560" height="315" src="https://www.youtube.com/embed/V4IRVKBHJy4?si=3qoBVoXAddHTg7qR" title="Hur du använder GPT för Sheets" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Planer: Professionell, Företag

Här är länken: [GPT, Claude, Mistral, Gemini för Sheets](https://docgpt.ai/gpt-for-sheets/)

#### Länkar
- <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-free" rel="nofollow" target="_blank">Hur du ökar dina gränser för OpenAI-nycklar</a>
- <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Open AI - Dina API-nycklar</a>
- <a href="https://platform.openai.com/account/billing/overview" rel="nofollow" target="_blank">Fakturering för OpenAI-konto</a>

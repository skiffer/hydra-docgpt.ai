---
layout: docs_layouts/default
title: Het model GPT-4o bestaat niet of u hebt er geen toegang toe
nav_order: 1
parent: Errors in Google Sheets and ChatGPT
permalink: /docs/gpt-for-sheets/the-model-gpt-4o-does-not-exist-or-you-do-not-have-access-to-it/dutch
description: Het model GPT-4o bestaat niet of u hebt er geen toegang toe
---

# Het model GPT-4o bestaat niet, of u hebt er geen toegang toe

Om toegang te krijgen tot de API met betalen per gebruik, moet u eerst een betalingsplan instellen en tegoed aanschaffen. Raadpleeg de [Factuuroverzicht](https://platform.openai.com/settings/organization/billing/overview) voor meer informatie.

Hier kunt u uw API-sleutel kopiëren: <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Open AI - Uw API-sleutels</a>

1. Na een succesvolle betaling (minimaal $5) worden hogere limieten voor het GPT-4-model en hoger geactiveerd. U moet minimaal op **Niveau 1** zijn!
2. Het kan meestal tot 5 minuten duren voordat het tegoed wordt herkend in de playground, zelfs als het dashboard dit direct aangeeft.
3. Probeer ook uw API-sleutel opnieuw te genereren na een succesvolle betaling.
   ![refresh-account.png]({{ site.baseurl }}/images/billing-screen-page.png){: width="400"}
4. Controleer uw snelheidslimieten hier: <a rel="nofollow" target="_blank" href="https://platform.openai.com/settings/organization/limits">Snelheidslimieten</a>
   ![limits-screen-page.png]({{ site.baseurl }}/images/limits-screen-page.png){: width="400"}

U moet dus uw OpenAI-account aanvullen of proberen onze andere plannen te gebruiken met de hoogste Tier en de hoogste snelheidslimieten voor bedrijfsapps van OpenAI.

**Om GPT-4o te gebruiken, moet u minimaal op Niveau 1 zijn!**
Goed nieuws: u hebt geen Open AI Plus-abonnement nodig.

![tier-limits-screen-page.png]({{ site.baseurl }}/images/tier-limits-screen-page.png){: width="400"}

Met GPT voor Google Sheets kunt u GPT-4o gebruiken zonder OpenAI Plus-abonnementen. Betaal naar gebruik.

Om uw snelheidslimieten te verhogen, bekijk deze pagina: <a href="https://platform.openai.com/docs/guides/rate-limits" rel="nofollow" target="_blank">Handleiding voor het controleren van uw ChatGPT-snelheidslimieten</a>

### Hoe werken snelheidslimieten?

Snelheidslimieten worden toegepast op basis van vijf belangrijke statistieken:

- **RPM (Verzoeken per minuut)**
- **RPD (Verzoeken per dag)**
- **TPM (Tokens per minuut)**
- **TPD (Tokens per dag)**
- **IPM (Afbeeldingen per minuut)**

U kunt een snelheidslimiet bereiken op basis van een van deze statistieken, afhankelijk van welke limiet het eerst wordt bereikt. Bijvoorbeeld, als uw RPM-limiet 20 is, dan bereikt u deze limiet door 20 verzoeken te versturen met slechts 100 tokens per verzoek, zelfs als u uw tokenslimiet (bijvoorbeeld 150k tokens per minuut) niet volledig gebruikt.

### Limieten voor Batch API-wachtrijen

Batch API-wachtrijlimieten worden berekend op basis van het totale aantal ingediende tokens in de wachtrij voor een bepaald model. Tokens van openstaande batchopdrachten tellen mee voor deze wachtrijlimiet. Zodra een batchopdracht is voltooid, tellen deze tokens niet meer mee voor de modelbeperking.

### Belangrijke punten om op te merken:

- **Limieten op organisatie- en projectniveau**: Snelheidslimieten zijn van toepassing op organisatie- en projectniveau, niet op gebruikersniveau.
- **Model-specifieke limieten**: Snelheidslimieten variëren afhankelijk van het model dat u gebruikt.
- **Gebruikslimieten**: Er zijn maandelijkse uitgavenlimieten voor het gebruik van de API, ook wel "gebruikslimieten" genoemd.
- **Gedeelde limieten**: Sommige modelgroepen delen snelheidslimieten. Als bijvoorbeeld op de limietenpagina van uw organisatie een gedeelde TPM van 3,5 miljoen wordt vermeld, zullen alle verzoeken aan modellen in de lijst van "gedeelde limieten" meetellen voor dat totaal van 3,5 miljoen.

Het begrijpen van deze limieten zorgt voor een optimaal gebruik van de API zonder onderbrekingen als gevolg van snelheidslimieten.

### Gebruiksniveaus

U kunt de snelheids- en gebruikslimieten voor uw organisatie bekijken in het limietgedeelte van uw accountinstellingen. Naarmate u de OpenAI API meer gebruikt en uw uitgaven toenemen, wordt u automatisch overgeplaatst naar het volgende gebruiksniveau. Dit leidt meestal tot hogere snelheidslimieten voor de meeste modellen.

| **Niveau**  | **Kwalificatie**                                                   | **Gebruikslimieten** |
|-------------|---------------------------------------------------------------------|----------------------|
| **Gratis**  | Beschikbaar voor gebruikers in ondersteunde regio's                 | $100 / maand         |
| **Niveau 1**| Betaling van $5                                                     | $100 / maand         |
| **Niveau 2**| Betaling van $50 en ten minste 7 dagen sinds de eerste succesvolle betaling | $500 / maand       |
| **Niveau 3**| Betaling van $100 en ten minste 7 dagen sinds de eerste succesvolle betaling | $1.000 / maand     |
| **Niveau 4**| Betaling van $250 en ten minste 14 dagen sinds de eerste succesvolle betaling | $5.000 / maand     |
| **Niveau 5**| Betaling van $1.000 en ten minste 30 dagen sinds de eerste succesvolle betaling | $50.000 / maand    |

Naarmate u vordert in de niveaus, zullen uw snelheidslimieten toenemen, waardoor u meer flexibiliteit krijgt om optimaal gebruik te maken van de API.

### Bulkgebruik van GPT-4 in Google Sheets
<iframe width="560" height="315" src="https://www.youtube.com/embed/V4IRVKBHJy4?si=3qoBVoXAddHTg7qR" title="Hoe GPT voor Sheets te gebruiken" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Plannen: Professioneel, Zakelijk

Hier is de link: [GPT, Claude, Mistral, Gemini voor Sheets](https://docgpt.ai/gpt-for-sheets/)

#### Links
- <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-free" rel="nofollow" target="_blank">Hoe u uw snelheidslimieten voor OpenAI-sleutels kunt verhogen</a>
- <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Open AI - Uw API-sleutels</a>
- <a href="https://platform.openai.com/account/billing/overview" rel="nofollow" target="_blank">Facturering voor OpenAI-account</a>

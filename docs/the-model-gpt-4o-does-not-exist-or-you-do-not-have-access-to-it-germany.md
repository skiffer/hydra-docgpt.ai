---
layout: docs_layouts/default
title: Das Modell GPT-4o existiert nicht oder du hast keinen Zugang dazu
nav_order: 1
parent: Errors in Google Sheets and ChatGPT
permalink: /docs/gpt-for-sheets/the-model-gpt-4o-does-not-exist-or-you-do-not-have-access-to-it/germany
description: Das Modell GPT-4o existiert nicht oder du hast keinen Zugang dazu
---

# Das Modell GPT-4o existiert nicht, oder du hast keinen Zugang dazu

Um auf die Pay-per-Use-API zuzugreifen, musst du zuerst einen Zahlungsplan einrichten und Guthaben kaufen. Weitere Details findest du in der [Abrechnungsübersicht](https://platform.openai.com/settings/organization/billing/overview).

Hier kannst du deinen API-Schlüssel kopieren: <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Open AI - Deine API-Schlüssel</a>

1. Nach einer erfolgreichen Zahlung (mindestens $5) werden höhere Limits für das GPT-4-Modell und darüber hinaus aktiviert. Du musst mindestens Tier 1 erreicht haben!
2. Normalerweise dauert es etwa 5 Minuten, bis das Guthaben im Playground erkannt wird, auch wenn das Dashboard es sofort anzeigt.
3. Versuche auch, den API-Schlüssel nach erfolgreicher Zahlung neu zu erstellen.
   ![refresh-account.png]({{ site.baseurl }}/images/billing-screen-page.png){: width="400"}
4. Überprüfe deine Ratenlimits hier: <a rel="nofollow" target="_blank" href="https://platform.openai.com/settings/organization/limits">Ratenlimits</a>
   ![limits-screen-page.png]({{ site.baseurl }}/images/limits-screen-page.png){: width="400"}

Du musst dein OpenAI-Konto aufladen oder unsere anderen Pläne mit dem höchsten Tier und den höchsten Ratenlimits für Unternehmensanwendungen von OpenAI verwenden.

**Um GPT-4o zu verwenden, musst du mindestens Tier 1 erreicht haben!**  
Gute Nachrichten – du benötigst kein Open AI Plus-Abonnement.

![tier-limits-screen-page.png]({{ site.baseurl }}/images/tier-limits-screen-page.png){: width="400"}

Mit GPT für Google Sheets kannst du GPT-4o ohne OpenAI Plus-Abonnements nutzen. Zahle nur für das, was du verwendest.

Um die Ratenlimits zu erhöhen, besuche diese Seite: <a href="https://platform.openai.com/docs/guides/rate-limits" rel="nofollow" target="_blank">Anleitung zur Überprüfung deiner ChatGPT-Ratenlimits</a>

### Wie funktionieren Ratenlimits?

Die Ratenlimits werden auf fünf Schlüsselmetriken angewendet:

- **RPM (Anfragen pro Minute)**
- **RPD (Anfragen pro Tag)**
- **TPM (Tokens pro Minute)**
- **TPD (Tokens pro Tag)**
- **IPM (Bilder pro Minute)**

Du kannst ein Ratenlimit erreichen, das auf einer dieser Metriken basiert, je nachdem, welcher Schwellenwert zuerst erreicht wird. Zum Beispiel, wenn dein RPM-Limit 20 ist, würdest du dieses Limit erreichen, wenn du 20 Anfragen mit nur 100 Tokens sendest, selbst wenn du dein Token-Limit (z.B. 150k Tokens pro Minute) nicht überschreitest.

### Batch-API-Queue-Limits

Batch-API-Queue-Limits werden basierend auf der Gesamtzahl der Eingabetokens berechnet, die für ein bestimmtes Modell in die Warteschlange gestellt wurden. Tokens von ausstehenden Batch-Jobs werden auf dein Queue-Limit angerechnet. Sobald ein Batch-Job abgeschlossen ist, werden diese Tokens nicht mehr gegen das Modell-Limit gezählt.

### Wichtige Punkte zu beachten:

- **Organisations- & Projektebene-Limits**: Die Ratenlimits gelten auf der Ebene der Organisation und des Projekts, nicht auf Benutzerebene.
- **Modellspezifische Limits**: Die Ratenlimits variieren je nach verwendetem Modell.
- **Nutzungslimits**: Es gibt monatliche Ausgabenlimits für die API-Nutzung, auch bekannt als „Nutzungslimits“.
- **Gemeinsame Limits**: Einige Modellfamilien teilen sich Ratenlimits. Wenn auf der Limit-Seite deiner Organisation ein gemeinsames TPM von 3,5 Mio. angegeben ist, werden alle Aufrufe an Modelle in dieser Liste zum Gesamtlimit von 3,5 Mio. gezählt.

Das Verständnis dieser Limits stellt sicher, dass die API optimal genutzt wird, ohne dass es zu Unterbrechungen aufgrund von Ratenbegrenzungen kommt.

### Nutzungstiers

Du kannst die Raten- und Nutzungslimits für deine Organisation im Abschnitt "Limits" in den Kontoeinstellungen einsehen. Wenn du die OpenAI-API häufiger nutzt und deine Ausgaben steigen, wirst du automatisch in den nächsten Nutzungstier eingestuft. Dies führt in der Regel zu höheren Ratenlimits für die meisten Modelle.

| **Tier**    | **Qualifikation**                                                  | **Nutzungslimits** |
|-------------|-------------------------------------------------------------------|--------------------|
| **Kostenlos** | Verfügbar für Benutzer in unterstützten Regionen                  | $100 / Monat       |
| **Tier 1**  | Zahlung von $5                                                    | $100 / Monat       |
| **Tier 2**  | Zahlung von $50 und mindestens 7 Tage seit der ersten erfolgreichen Zahlung | $500 / Monat      |
| **Tier 3**  | Zahlung von $100 und mindestens 7 Tage seit der ersten erfolgreichen Zahlung | $1.000 / Monat    |
| **Tier 4**  | Zahlung von $250 und mindestens 14 Tage seit der ersten erfolgreichen Zahlung | $5.000 / Monat    |
| **Tier 5**  | Zahlung von $1.000 und mindestens 30 Tage seit der ersten erfolgreichen Zahlung | $50.000 / Monat   |

Wenn du die Stufen durchläufst, erhöhen sich deine Ratenlimits, was dir mehr Flexibilität bei der Nutzung der API bietet.

### Massennutzung von GPT-4 in Google Sheets
<iframe width="560" height="315" src="https://www.youtube.com/embed/V4IRVKBHJy4?si=3qoBVoXAddHTg7qR" title="So verwendest du GPT für Sheets" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Pläne: Professionell, Geschäftlich

Hier ist der Link: [GPT, Claude, Mistral, Gemini für Sheets](https://docgpt.ai/gpt-for-sheets/)

#### Links
- <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-free" rel="nofollow" target="_blank">Wie du deine Ratenlimits für OpenAI-Schlüssel erhöhen kannst</a>
- <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Open AI - Deine API-Schlüssel</a>
- <a href="https://platform.openai.com/account/billing/overview" rel="nofollow" target="_blank">Abrechnung für das OpenAI-Konto</a>

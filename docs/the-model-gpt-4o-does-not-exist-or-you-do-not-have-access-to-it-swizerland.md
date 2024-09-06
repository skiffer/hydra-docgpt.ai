---
layout: docs_layouts/default
title: Das Modell GPT-4o existiert nicht oder Sie haben keinen Zugriff darauf
nav_order: 1
parent: Errors in Google Sheets and ChatGPT
permalink: /docs/gpt-for-sheets/the-model-gpt-4o-does-not-exist-or-you-do-not-have-access-to-it/swizerland
description: Das Modell GPT-4o existiert nicht oder Sie haben keinen Zugriff darauf
---

# Das Modell GPT-4o existiert nicht, oder Sie haben keinen Zugriff darauf

Um auf die Pay-per-Use-API zuzugreifen, müssen Sie zuerst einen Zahlungsplan einrichten und Guthaben erwerben. Weitere Details finden Sie in der [Abrechnungsübersicht](https://platform.openai.com/settings/organization/billing/overview).

Hier können Sie Ihren API-Schlüssel kopieren: <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Open AI - Ihre API-Schlüssel</a>

1. Nach einer erfolgreichen Zahlung (mindestens 5 USD) werden höhere Ratenlimits für das GPT-4-Modell und darüber hinaus aktiviert. Sie müssen mindestens **Stufe 1** erreicht haben!
2. Es kann in der Regel bis zu 5 Minuten dauern, bis das Guthaben im Playground erkannt wird, auch wenn es sofort auf dem Dashboard angezeigt wird.
3. Versuchen Sie auch, Ihren API-Schlüssel nach erfolgreicher Zahlung neu zu erstellen.
   ![refresh-account.png]({{ site.baseurl }}/images/billing-screen-page.png){: width="400"}
4. Überprüfen Sie Ihre Ratenlimits hier: <a rel="nofollow" target="_blank" href="https://platform.openai.com/settings/organization/limits">Ratenlimits</a>
   ![limits-screen-page.png]({{ site.baseurl }}/images/limits-screen-page.png){: width="400"}

Daher müssen Sie Ihr OpenAI-Konto auffüllen oder unsere anderen Pläne mit dem höchsten API-Schlüssel von OpenAI und den höchsten Ratenlimits für Unternehmensanwendungen verwenden.

**Um GPT-4o zu verwenden, müssen Sie mindestens Stufe 1 erreicht haben!**
Gute Neuigkeiten – Sie benötigen kein Open AI Plus-Abonnement.

![tier-limits-screen-page.png]({{ site.baseurl }}/images/tier-limits-screen-page.png){: width="400"}

Mit GPT für Google Sheets können Sie GPT-4o ohne OpenAI Plus-Abonnements nutzen. Bezahlen Sie nach Verbrauch.

Um die Ratenlimits zu erhöhen, besuchen Sie diese Seite: <a href="https://platform.openai.com/docs/guides/rate-limits" rel="nofollow" target="_blank">Leitfaden zur Überprüfung Ihrer ChatGPT-Ratenlimits</a>

### Wie funktionieren Ratenlimits?

Die Ratenlimits werden anhand von fünf Hauptmetriken festgelegt:

- **RPM (Anfragen pro Minute)**
- **RPD (Anfragen pro Tag)**
- **TPM (Tokens pro Minute)**
- **TPD (Tokens pro Tag)**
- **IPM (Bilder pro Minute)**

Sie können ein Ratenlimit basierend auf einer dieser Metriken erreichen, je nachdem, welches zuerst erreicht wird. Zum Beispiel, wenn Ihr RPM-Limit 20 ist, erreichen Sie dieses Limit, indem Sie 20 Anfragen mit nur 100 Tokens pro Anfrage senden, selbst wenn Sie Ihr Token-Limit (z.B. 150k Tokens pro Minute) nicht vollständig nutzen.

### Batch-API-Warteschlangenlimits

Die Limits der Batch-API-Warteschlangen werden auf der Grundlage der Gesamtzahl der eingereihten Tokens für ein bestimmtes Modell berechnet. Tokens aus ausstehenden Batch-Jobs werden auf Ihr Warteschlangenlimit angerechnet. Sobald ein Batch-Job abgeschlossen ist, werden diese Tokens nicht mehr auf das Modell-Limit angerechnet.

### Wichtige Hinweise:

- **Organisations- und Projektebenen-Limits**: Die Ratenlimits gelten auf der Organisations- und Projektebene, nicht auf der Benutzerebene.
- **Modellspezifische Limits**: Die Ratenlimits variieren je nach Modell, das Sie verwenden.
- **Nutzungslimits**: Es gibt monatliche Ausgabenlimits für die API-Nutzung, auch bekannt als "Nutzungslimits".
- **Geteilte Limits**: Einige Modellsammlungen teilen sich Ratenlimits. Wenn beispielsweise auf der Limitseite Ihrer Organisation ein geteiltes TPM von 3,5 Millionen angezeigt wird, zählen alle Anfragen an Modelle in der Liste "Geteilte Limits" zu diesem Gesamtwert von 3,5 Millionen.

Das Verständnis dieser Limits sorgt dafür, dass die API optimal genutzt wird, ohne Unterbrechungen aufgrund von Ratenbegrenzungen.

### Nutzungsebenen

Sie können die Raten- und Nutzungslimits Ihrer Organisation im Abschnitt "Limits" Ihrer Kontoeinstellungen einsehen. Wenn Sie die OpenAI-API häufiger verwenden und Ihre Ausgaben steigen, werden Sie automatisch in die nächste Nutzungsebene hochgestuft. Dies führt in der Regel zu höheren Ratenlimits für die meisten Modelle.

| **Stufe**   | **Qualifikation**                                                   | **Nutzungslimits** |
|-------------|---------------------------------------------------------------------|--------------------|
| **Kostenlos** | Verfügbar für Nutzer in unterstützten Regionen                     | $100 / Monat       |
| **Stufe 1**  | $5 bezahlt                                                         | $100 / Monat       |
| **Stufe 2**  | $50 bezahlt und mindestens 7 Tage seit der ersten erfolgreichen Zahlung | $500 / Monat      |
| **Stufe 3**  | $100 bezahlt und mindestens 7 Tage seit der ersten erfolgreichen Zahlung | $1.000 / Monat    |
| **Stufe 4**  | $250 bezahlt und mindestens 14 Tage seit der ersten erfolgreichen Zahlung | $5.000 / Monat    |
| **Stufe 5**  | $1.000 bezahlt und mindestens 30 Tage seit der ersten erfolgreichen Zahlung | $50.000 / Monat   |

Mit jedem Aufstieg in den Stufen erhöhen sich Ihre Ratenlimits, was Ihnen mehr Flexibilität bei der Nutzung der API gibt.

### Massenhafte Nutzung von GPT-4 in Google Sheets
<iframe width="560" height="315" src="https://www.youtube.com/embed/V4IRVKBHJy4?si=3qoBVoXAddHTg7qR" title="Wie man GPT für Sheets verwendet" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Pläne: Professionell, Geschäftlich

Hier ist der Link: [GPT, Claude, Mistral, Gemini für Sheets](https://docgpt.ai/gpt-for-sheets/)

#### Links
- <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-free" rel="nofollow" target="_blank">Wie Sie die Ratenlimits für OpenAI-Schlüssel erhöhen</a>
- <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Open AI - Ihre API-Schlüssel</a>
- <a href="https://platform.openai.com/account/billing/overview" rel="nofollow" target="_blank">Abrechnung für OpenAI-Konto</a>

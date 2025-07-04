---
layout: docs_layouts/default
title: OpenAI API-Schlüssel einrichten - Komplette Anleitung für Google Tabellen KI-Integration
nav_order: 1
parent: GPT for Sheets
permalink: /docs/gpt-for-sheets/set-up-openai-api-keys-de
description: Umfassende Anleitung zur Einrichtung von OpenAI, Claude, Gemini, Perplexity und Mistral API-Schlüsseln in Google Tabellen. Maximieren Sie die KI-Leistung in Ihren Tabellenkalkulationen.
---

<script>
window.onload = function() {
    var promoElement = document.getElementById("promo-sheets");
    if (promoElement) {
        promoElement.style.display = "none";
    }
};
</script>

# KI-Power für Google Tabellen: Vollständige Einrichtungsanleitung für OpenAI, Claude, Gemini, Perplexity und Mistral

> 🔥 **Aktuelles Update**: Jetzt mit Unterstützung für GPT-4, Claude 3, Gemini Pro, Mistral und Perplexity!

## Inhaltsverzeichnis
1. [Erste Schritte: Add-on Installation](#erste-schritte)
2. [OpenAI API-Schlüssel einrichten](#openai-api-schlüssel-einrichten)
3. [Claude (Anthropic) API-Schlüssel](#claude-api-schlüssel)
4. [Gemini API-Schlüssel](#gemini-api-schlüssel)
5. [Perplexity API-Schlüssel](#perplexity-api-schlüssel)
6. [Mistral API-Schlüssel](#mistral-api-schlüssel)
7. [Fehlerbehebung](#fehlerbehebung)

## Erste Schritte

Befolgen Sie diese Schritte, um KI in Google Tabellen zu nutzen:

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_docs_sheets_forms_slides/466607203252" target="_blank">GPT for Sheets Add-on installieren</a>
2. <a href="/gpt-for-sheets/" target="_blank">Auf Pro User-Plan upgraden</a>
3. Neue Tabelle erstellen oder **Besitzerrechte** für bestehende Tabelle sicherstellen
4. Add-on starten: Erweiterungen > GPT for Sheets, Docs, Slides, Forms > **Starten**
5. Konto aktualisieren: Erweiterungen > GPT for Sheets, Docs, Slides, Forms > **Konto aktualisieren** <img style="display: block;" src="{{ site.baseurl }}/images/setup-api-keys-1.png" alt="Konto aktualisieren" width="400">

## OpenAI API-Schlüssel einrichten

### 1. OpenAI Plattform Zugang
1. <a href="https://platform.openai.com/account/api-keys" target="_blank">OpenAI Plattform</a> aufrufen
2. Konto erstellen oder einloggen

![OpenAI Anmeldeseite]({{ site.baseurl }}/images/sign-up-openai.png)

### 2. API-Schlüssel erstellen
1. "Create new secret key" klicken
2. <a href="https://platform.openai.com/settings/organization/billing/overview" target="_blank">Abrechnungsseite</a> aufrufen und **mindestens $1** aufladen
   - Die tatsächlichen Nutzungskosten sind sehr gering
   - Das System ist für optimale API-Limitierung ausgelegt

![API-Schlüssel generieren]({{ site.baseurl }}/images/generate-api-key.png)

### 3. API-Schlüssel kopieren

![Erstellter API-Schlüssel]({{ site.baseurl }}/images/created-api-key.png)

### 4. Add-on Konfiguration
1. Tabelle öffnen und Seitenleiste starten
2. "API-Schlüssel einrichten" klicken
3. Kopierten API-Schlüssel einfügen
4. "Prüfen" Button klicken
5. "Speichern" klicken

### 5. Pro User-Plan bestätigen
Für die Add-on Nutzung ist ein Pro User-Plan erforderlich:

![Pro User-Plan Bestätigung]({{ site.baseurl }}/images/subscription-pro-user.png){: width="300"}

### 6. Konto aktualisieren
Klicken Sie im Erweiterungsmenü auf "Konto aktualisieren":

![Konto aktualisieren]({{ site.baseurl }}/images/setup-api-keys-1.png){: width="600"}

### 7. API-Schlüssel einrichten
Klicken Sie auf "OpenAI API-Schlüssel einrichten":

![API-Schlüssel einrichten]({{ site.baseurl }}/images/setup-api-keys-2.png){: width="600"}

### 8. API-Schlüssel prüfen und speichern
API-Schlüssel eingeben und auf "Prüfen" klicken:

![API-Schlüssel prüfen und speichern]({{ site.baseurl }}/images/check-and-save-api-key.png){: width="600"}

## Nutzungsbeispiele

Verwenden Sie diese KI-Funktionen direkt in Ihren Tabellenzellen:

```
=GPT("Erstelle einen Werbetext für ein Café")
=CLAUDE("Analysiere diese Kundenbewertungen")
=GEMINI("Erstelle eine Verkaufsprognose")
=PERPLEXITY("Recherchiere aktuelle Marketing-Trends")
=MISTRAL("Generiere Produktbeschreibungen")
```

### Wichtige Hinweise

![GPT for Sheets Wichtige Hinweise]({{ site.baseurl }}/images/gpt-for-sheets-warning.png){: width="500"}

> Nach Erhalt der Ergebnisse unbedingt auf **"Alle GPTs ersetzen"** oder **"Ausgewählte GPTs ersetzen"** klicken.
> Andernfalls werden die Formeln bei Seitenaktualisierung oder alle 1-2 Minuten neu berechnet.

## Kostenlose vs. Premium-Limits

### Kostenloses Kontingent (Free Tier)
![Free Tier Limits]({{ site.baseurl }}/images/tier-0.png){: width="500"}

### Premium Kontingent (Tier 1)
![Tier 1 Limits]({{ site.baseurl }}/images/tier-1.png){: width="500"}

### Chrome-Profil erstellen
Bei mehreren Google-Konten empfehlen wir ein separates Chrome-Profil:

![Chrome-Profil erstellen]({{ site.baseurl }}/images/create-profile.png){: width="300"}

## Claude (Anthropic) API-Schlüssel

1. <a href="https://console.anthropic.com/settings/keys" target="_blank">Claude API-Schlüssel Seite</a> besuchen
2. Konto erstellen oder einloggen
3. API-Schlüssel generieren
4. In Add-on Seitenleiste Claude auswählen und API-Schlüssel einfügen

## Gemini API-Schlüssel

1. <a href="https://aistudio.google.com/app/apikey" target="_blank">Google AI Studio</a> öffnen
2. API-Schlüssel generieren
3. In Add-on Seitenleiste Gemini auswählen und API-Schlüssel einfügen

## Perplexity API-Schlüssel

1. <a href="https://www.perplexity.ai/settings/api" target="_blank">Perplexity Einstellungen</a> aufrufen
2. API-Schlüssel generieren
3. In Add-on Seitenleiste Perplexity auswählen und API-Schlüssel einfügen

## Mistral API-Schlüssel

1. <a href="https://console.mistral.ai/api-keys/" target="_blank">Mistral Konsole</a> besuchen
2. API-Schlüssel generieren
3. In Add-on Seitenleiste Mistral auswählen und API-Schlüssel einfügen

## Fehlerbehebung

### "Diese Aktion erfordert Autorisierung"

1. **Persönliches Gmail-Konto verwenden**: Firmen-E-Mails (Workspace) können Add-on-Einschränkungen haben
2. Bei persönlichem Konto: Add-on neu installieren
3. Separates Chrome-Profil verwenden - wichtig bei mehreren Google-Konten

### "Kontingent überschritten. Bitte Tarif und Abrechnung prüfen"

- <a href="https://platform.openai.com/settings/organization/billing/overview" target="_blank">OpenAI Abrechnung</a> aufrufen und **mindestens $1** aufladen

### Empfehlungen

- Google Chrome Browser verwenden
- Bei mehreren Konten: Separates Chrome-Profil erstellen
- Bei Firmen-E-Mail: Administrator kontaktieren oder persönliches Konto nutzen

## Hilfreiche Links

- <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-free" target="_blank">OpenAI API Limits</a>
- <a href="https://platform.openai.com/api-keys" target="_blank">OpenAI API-Schlüssel Verwaltung</a>
- <a href="https://platform.openai.com/account/billing/overview" target="_blank">OpenAI Abrechnung</a>
- <a href="/docs/support-gpt-sheets-docs-slides-forms-gmail/" target="_blank">Ausführliche Fehlerbehebung</a>

Nach der Einrichtung können alle Bearbeiter der Tabelle die KI-Funktionen mit diesem API-Schlüssel nutzen. 
---
layout: docs_layouts/default
title: OpenAI API-Schlüssel einrichten - Umfassender Leitfaden für AI-Integration in Google Tabellen
nav_order: 1
parent: GPT for Sheets - other languages
permalink: /docs/gpt-for-sheets/set-up-openai-api-keys-ch
description: Ausführliche Anleitung zur Konfiguration von OpenAI, Claude, Gemini, Perplexity und Mistral API-Schlüsseln in Google Tabellen. Maximieren Sie die AI-Leistung in Ihren Tabellenkalkulationen.
---

<script>
window.onload = function() {
    var promoElement = document.getElementById("promo-sheets");
    if (promoElement) {
        promoElement.style.display = "none";
    }
};
</script>

# KI-Power für Google Sheets: Vollständige Installationsanleitung für OpenAI, Claude, Gemini, Perplexity und Mistral

## 🌐 Verfügbare Sprachen
- [English (Englisch)](/docs/gpt-for-sheets/set-up-openai-api-keys)
- [Русский (Russisch)](/docs/gpt-for-sheets/set-up-openai-api-keys-ru)
- [Svenska (Schwedisch)](/docs/gpt-for-sheets/set-up-openai-api-keys-sv)
- [Polski (Polnisch)](/docs/gpt-for-sheets/set-up-openai-api-keys-pl)
- [Türkçe (Türkisch)](/docs/gpt-for-sheets/set-up-openai-api-keys-tr)
- [Deutsch (Aktuell)](/docs/gpt-for-sheets/set-up-openai-api-keys-ch)
- [Français (Französisch)](/docs/gpt-for-sheets/set-up-openai-api-keys-fr)
- [Nederlands (Niederländisch)](/docs/gpt-for-sheets/set-up-openai-api-keys-nl)
- [Español (Spanisch)](/docs/gpt-for-sheets/set-up-openai-api-keys-es)
- [Português (Portugiesisch)](/docs/gpt-for-sheets/set-up-openai-api-keys-pt)
- [日本語 (Japanisch)](/docs/gpt-for-sheets/set-up-openai-api-keys-ja)
- [中文 (Chinesisch)](/docs/gpt-for-sheets/set-up-openai-api-keys-zh)
- [Українська (Ukrainisch)](/docs/gpt-for-sheets/set-up-openai-api-keys-uk)

## Inhaltsverzeichnis
1. [Erste Schritte: Add-on Installation](#erste-schritte)
2. [OpenAI API-Schlüssel konfigurieren](#openai-api-schlüssel-konfigurieren)
3. [Claude (Anthropic) API-Schlüssel](#claude-api-schlüssel)
4. [Gemini API-Schlüssel](#gemini-api-schlüssel)
5. [Perplexity API-Schlüssel](#perplexity-api-schlüssel)
6. [Mistral API-Schlüssel](#mistral-api-schlüssel)
7. [Fehlerbehebung](#fehlerbehebung)

## Erste Schritte

Folgen Sie diesen Schritten zur Nutzung von AI in Google Tabellen:

1. <a href="https://workspace.google.com/marketplace/app/gpt_for_docs_sheets_forms_slides/466607203252" target="_blank">Installieren Sie das GPT for Sheets Add-on</a>
2. <a href="/gpt-for-sheets/" target="_blank">Upgraden Sie auf den Pro User-Plan</a>
3. Erstellen Sie eine neue Tabelle oder stellen Sie sicher, dass Sie **Besitzer** der bestehenden sind
4. Starten Sie das Add-on: Erweiterungen > GPT for Sheets, Docs, Slides, Forms > **Starten**
5. Aktualisieren Sie Ihr Konto: Erweiterungen > GPT for Sheets, Docs, Slides, Forms > **Konto aktualisieren** <img style="display: block;" src="{{ site.baseurl }}/images/setup-api-keys-1.png" alt="Konto aktualisieren" width="400">

## OpenAI API-Schlüssel konfigurieren

### 1. Zugriff auf die OpenAI-Plattform
1. Besuchen Sie die <a href="https://platform.openai.com/account/api-keys" target="_blank">OpenAI-Plattform</a>
2. Erstellen Sie ein Konto oder melden Sie sich an

![OpenAI Registrierungsseite]({{ site.baseurl }}/images/sign-up-openai.png)

### 2. API-Schlüssel erstellen
1. Klicken Sie auf "Create new secret key"
2. Gehen Sie zur <a href="https://platform.openai.com/settings/organization/billing/overview" target="_blank">Zahlungsseite</a> und fügen Sie **mindestens $1** hinzu
   - Die tatsächlichen Nutzungskosten sind sehr gering
   - Das System ist für API-Limits optimiert

![API-Schlüssel generieren]({{ site.baseurl }}/images/generate-api-key.png)

### 3. API-Schlüssel kopieren

![Erstellter API-Schlüssel]({{ site.baseurl }}/images/created-api-key.png)

### 4. Add-on konfigurieren
1. Öffnen Sie die Tabelle und starten Sie die Seitenleiste
2. Klicken Sie auf "API-Schlüssel konfigurieren"
3. Fügen Sie den kopierten API-Schlüssel ein
4. Klicken Sie auf "Prüfen"
5. Klicken Sie auf "Speichern"

### 5. Pro User-Plan Bestätigung
Pro User-Plan ist für die Nutzung des Add-ons erforderlich:

![Pro User-Plan Bestätigung]({{ site.baseurl }}/images/subscription-pro-user.png){: width="300"}

### 6. Konto aktualisieren
Klicken Sie im Erweiterungsmenü auf "Konto aktualisieren":

![Konto aktualisieren]({{ site.baseurl }}/images/setup-api-keys-1.png){: width="600"}

### 7. API-Schlüssel konfigurieren
Klicken Sie auf "OpenAI-Schlüssel konfigurieren":

![API-Schlüssel konfigurieren]({{ site.baseurl }}/images/setup-api-keys-2.png){: width="600"}

### 8. API-Schlüssel prüfen und speichern
Geben Sie den API-Schlüssel ein und klicken Sie auf "Prüfen":

![API-Schlüssel prüfen und speichern]({{ site.baseurl }}/images/check-and-save-api-key.png){: width="600"}

## Verwendungsbeispiele

Nutzen Sie diese AI-Funktionen direkt in Ihren Zellen:

```
=GPT("Schreibe einen Werbetext für ein Café")
=CLAUDE("Analysiere diese Kundenrezensionen")
=GEMINI("Erstelle eine Verkaufsprognose")
=PERPLEXITY("Untersuche aktuelle Marketing-Trends")
=MISTRAL("Generiere Produktbeschreibungen")
```

### Wichtige Hinweise

![Wichtige Hinweise GPT for Sheets]({{ site.baseurl }}/images/gpt-for-sheets-warning.png){: width="500"}

> Klicken Sie nach Erhalt der Ergebnisse unbedingt auf **"Alle GPTs ersetzen"** oder **"Ausgewählte ersetzen"**.
> Andernfalls werden die Formeln bei Seitenaktualisierung oder alle 1-2 Minuten neu berechnet.

## Kostenlose und Premium-Limits

### Gratis-Kontingent (Free Tier)
![Free Tier Limits]({{ site.baseurl }}/images/tier-0.png){: width="500"}

### Premium-Kontingent (Tier 1)
![Tier 1 Limits]({{ site.baseurl }}/images/tier-1.png){: width="500"}

### Chrome-Profil erstellen
Bei Verwendung mehrerer Google-Konten empfehlen wir ein separates Chrome-Profil:

![Chrome-Profil erstellen]({{ site.baseurl }}/images/create-profile.png){: width="300"}

## Claude API-Schlüssel (Anthropic)

1. Besuchen Sie die <a href="https://console.anthropic.com/settings/keys" target="_blank">Claude API-Schlüssel-Seite</a>
2. Erstellen Sie ein Konto oder melden Sie sich an
3. Generieren Sie einen API-Schlüssel
4. Wählen Sie Claude in der Add-on-Seitenleiste und geben Sie den API-Schlüssel ein

## Gemini API-Schlüssel

1. Öffnen Sie <a href="https://aistudio.google.com/app/apikey" target="_blank">Google AI Studio</a>
2. Generieren Sie einen API-Schlüssel
3. Wählen Sie Gemini in der Add-on-Seitenleiste und geben Sie den API-Schlüssel ein

## Perplexity API-Schlüssel

1. Gehen Sie zu den <a href="https://www.perplexity.ai/settings/api" target="_blank">Perplexity-Einstellungen</a>
2. Generieren Sie einen API-Schlüssel
3. Wählen Sie Perplexity in der Add-on-Seitenleiste und geben Sie den API-Schlüssel ein

## Mistral API-Schlüssel

1. Besuchen Sie die <a href="https://console.mistral.ai/api-keys/" target="_blank">Mistral-Konsole</a>
2. Generieren Sie einen API-Schlüssel
3. Wählen Sie Mistral in der Add-on-Seitenleiste und geben Sie den API-Schlüssel ein

## Fehlerbehebung

### "Diese Aktion erfordert Autorisierung"

1. **Verwenden Sie ein persönliches Gmail-Konto**: Firmenkonten (Workspace) können Add-on-Einschränkungen haben
2. Mit persönlichem Konto: Installieren Sie das Add-on neu
3. Verwenden Sie ein separates Chrome-Profil - wichtig bei mehreren Google-Konten

### "Kontingent überschritten. Überprüfen Sie Ihren Plan und Zahlungsdetails"

- Gehen Sie zu <a href="https://platform.openai.com/settings/organization/billing/overview" target="_blank">OpenAI-Zahlungen</a> und fügen Sie **mindestens $1** hinzu

### Empfehlungen

- Verwenden Sie den Google Chrome-Browser
- Bei mehreren Konten: Erstellen Sie ein separates Chrome-Profil
- Mit Firmenkonto: Kontaktieren Sie Ihren Administrator oder verwenden Sie ein persönliches Konto

## Nützliche Links

- <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-free" target="_blank">OpenAI API-Limits</a>
- <a href="https://platform.openai.com/api-keys" target="_blank">OpenAI API-Schlüssel-Verwaltung</a>
- <a href="https://platform.openai.com/account/billing/overview" target="_blank">OpenAI-Zahlungen</a>
- <a href="/docs/support-gpt-sheets-docs-slides-forms-gmail/" target="_blank">Detaillierte Fehlerbehebung</a>

Nach der Konfiguration können alle Bearbeiter der Tabelle AI-Funktionen mit diesem API-Schlüssel nutzen. 
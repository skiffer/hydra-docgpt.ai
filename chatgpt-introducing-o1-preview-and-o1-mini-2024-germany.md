---
title: ChatGPT stellt o1-preview und o1-mini vor (September 2024)
description: 
permalink: /chatgpt-stellt-o1-preview-und-o1-mini-vor-september-2024/
---

<div style="
  position: fixed;
  right: 0;
  top: 100px; /* Den oberen Wert bei Bedarf anpassen */
  width: 283px; /* Die Breite bei Bedarf anpassen */
  border: 2px solid #007bff;
  border-radius: 10px;
  padding: 20px;
  background-color: #f8f9fa;
  text-align: center;
  z-index: 9999;
">
            <h3>🤔️ Müssen Sie Aufgaben in großen Mengen ausführen?</h3>
            <img src="https://github.com/skiffer/hydra-docgpt.ai/blob/main/images/demo-sheets2.gif?raw=true" alt="GIF-Demo" style="width: 100%; border-radius: 10px; margin-bottom: 15px;"/>
            <p style="font-size: 18px; margin-top: 10px;"><b>👍️️️️️️ Probieren Sie <a href="https://docgpt.ai/gpt-for-sheets/" style="color: #007bff; text-decoration: none;" target="_blank">GPT für Sheets!</a></b></p>
            <ul style="list-style-type: none; padding: 0; font-size: 16px;">
              <li>📄 Erstellen Sie Produktbeschreibungen auf einmal</li>
              <li>💼 Generieren Sie Leads und reichern Sie Daten an</li>
              <li>🔗️️️️️️ Webseiten-Scraping</li>
              <li>🌎 Google-Suche</li>
              <li>🔍 Programmgesteuertes SEO & Massen-Seitengenerierung</li>
              <li>📣 KI-gestützter Social-Media-Post-Generator</li>
              <li>📈 Extrahieren Sie die besten Keywords der Wettbewerber</li>
              <li>🤖 Unterstützt Perplexity, Claude, Mistral, Gemini, OpenRoute</li>
            </ul>
</div>

<style>
body {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
    color: black;
    font-size: 18px;
    line-height: 1.6;
}

p {
    font-size: 18px;
    margin-bottom: 1.5em;
}

h1 {
    font-size: 36px;
    margin-bottom: 0.8em;
}

h2 {
    font-size: 30px;
    margin-bottom: 0.75em;
}

h3 {
    font-size: 24px;
    margin-bottom: 0.7em;
}

h4 {
    font-size: 20px;
    margin-bottom: 0.65em;
}

h5, h6 {
    font-size: 18px;
    margin-bottom: 0.6em;
}
</style>

<div style="text-align: center;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/50W4YeQdnSg?si=_QK6iDY2ux-ThqR9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

OpenAI hat sein neuestes KI-Modell vorgestellt, das den Codenamen *Strawberry* trägt und offiziell als *OpenAI o1* bezeichnet wird. Dieses neue Modell gehört zu einer Familie, die zwei Versionen umfasst: **o1-preview** und **o1-mini**. Während **o1-preview** ein umfassendes Modell ist, ist **o1-mini** kleiner und effizienter, hauptsächlich für die Codegenerierung entwickelt.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-family: Arial, sans-serif; text-align: left;">
  <thead>
    <tr style="background-color: #f2f2f2;">
      <th style="border: 1px solid #dddddd; padding: 12px;">Modell</th>
      <th style="border: 1px solid #dddddd; padding: 12px;">Kontextfenster (Tokens)</th>
      <th style="border: 1px solid #dddddd; padding: 12px;">Maximale Ausgabetoken-Grenze</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #dddddd; padding: 12px;">o1-preview</td>
      <td style="border: 1px solid #dddddd; padding: 12px;">128.000</td>
      <td style="border: 1px solid #dddddd; padding: 12px;">Bis zu 32.768 Tokens</td>
    </tr>
    <tr>
      <td style="border: 1px solid #dddddd; padding: 12px;">o1-mini</td>
      <td style="border: 1px solid #dddddd; padding: 12px;">128.000</td>
      <td style="border: 1px solid #dddddd; padding: 12px;">Bis zu 65.536 Tokens</td>
    </tr>
  </tbody>
</table>

## Preise

ChatGPT Plus- und Team-Nutzer haben bereits Zugriff auf **o1-preview** und **o1-mini**, wobei der frühzeitige Zugriff für Enterprise- und Edu-Nutzer nächste Woche eröffnet wird. OpenAI plant auch, **o1-mini** für kostenlose ChatGPT-Nutzer verfügbar zu machen, obwohl das genaue Veröffentlichungsdatum noch nicht feststeht.

Für Entwickler hat **OpenAI o1** einen höheren Preis. Die API für **o1-preview** kostet 15 $ pro 1 Million Eingangstokens und 60 $ pro 1 Million Ausgangstokens. Im Vergleich dazu ist **GPT-4o** kostengünstiger, mit 5 $ für Eingangstokens und 15 $ für Ausgangstokens.

## Anwendungsbeispiele

Um die Unterschiede zwischen diesen Modellen besser zu veranschaulichen, hier einige Beispiele, wie jedes Modell verwendet werden kann:

### **Beispiel 1: Programmierung mit o1-mini**
Wenn Sie ein Entwickler sind, der an einem komplexen Projekt arbeitet, das die Generierung großer Codeblöcke oder die Ausführung mehrstufiger Arbeitsabläufe erfordert, ist **o1-mini** eine ausgezeichnete Wahl. Seine größere Ausgabetoken-Grenze (bis zu 65.536 Tokens) ermöglicht es Ihnen, umfangreiche Codeschnipsel mit weniger Unterbrechungen zu generieren und auszuführen, was ihn perfekt für **Softwareentwicklung** oder **Datenverarbeitungsaufgaben** macht.

### **Beispiel 2: Wissenschaftliche Forschung mit o1-preview**
Angenommen, Sie sind ein Forscher, der komplexe Datensätze analysiert oder mehrstufige mathematische Probleme löst. In diesem Fall bietet **o1-preview** die **erweiterten Denkfähigkeiten**, die Sie benötigen, um komplexe Aufgaben zu analysieren, Probleme zu durchdenken und präzise Ergebnisse zu liefern. Dies ist besonders nützlich in Bereichen wie **Biochemie**, **Physik** oder **Maschinelles Lernen**.

### **Beispiel 3: Kreative Projekte mit GPT-4**
Für Aufgaben, bei denen **visuelle Inhalte** integraler Bestandteil Ihrer Arbeit sind – wie das Erstellen von Infografiken, das Design von Marketingmaterialien oder die Produktion von kreativem Content für soziale Medien – ist **GPT-4** ideal. Seine Fähigkeit, Text und Bilder zu kombinieren, macht ihn zur perfekten Lösung zur Optimierung von **kreativen Arbeitsabläufen** in Branchen wie **Marketing**, **Werbung** und **Content-Erstellung**.

## Wichtige Funktionen von OpenAI o1

<div style="text-align: center">
    <img src="{{ site.baseurl }}/images/o1-tokens.png" alt="chatpgt-o1-preview-mini-tokens" class="" style="width: 700px !important;"/>
</div>

Eine der herausragenden Eigenschaften von **OpenAI o1** ist seine Fähigkeit zur "Selbstreflexion". Dies ermöglicht es dem Modell, zusätzliche Zeit zu investieren, um verschiedene Aspekte einer Anfrage zu verarbeiten und zu berücksichtigen, bevor eine Antwort gegeben wird, was zu durchdachteren und genaueren Antworten führt. Diese Funktion ist besonders nützlich bei komplexen Aufgaben, die eine tiefgehende Analyse erfordern, wie etwa die Analyse von E-Mails auf vertrauliche Informationen oder das Brainstorming von Marketingstrategien.

Das Modell verwendet verstärkendes Lernen, um vor der Antwort "nachzudenken", was einen Denkprozess nachahmt. Unterstützt durch ein System von Belohnungen und Strafen plant und führt **o1** mehrere Schritte aus, um eine umfassende Antwort zu generieren. Die Theorie besagt, dass je länger **OpenAI o1** eine Anfrage verarbeitet, desto besser die Antwort wird.

## Für wen ist es geeignet?

Die erweiterten Denkfähigkeiten von **OpenAI o1** machen es zu einem idealen Werkzeug für Fachleute, die komplexe Herausforderungen in Bereichen wie Wissenschaft, Programmierung und Mathematik meistern müssen.

---
layout: docs_layouts/default
title: Create slides from text, notes, or an outline
parent: Slides AI by DocGPT
nav_order: 3
permalink: /docs/slides-ai/create-slides-from-text
description: "Paste meeting notes, a blog post, or a report outline into the additional content field and let Slides AI turn your source text into clean slides."
---

# Create slides from text, notes, or an outline

Besides generating from a topic alone, <a href="/docs/slides-ai">Slides AI by DocGPT</a> has an optional **additional content** field where you paste text the AI should use as source material — meeting notes, a blog post, a report outline. The generator then builds the deck from your content instead of writing everything from scratch.

## How to use the additional content field

1. Open your presentation and go to **Extensions → AI GPT for Slides → Start**.
2. Enter a short topic that names the deck, for example "Weekly product sync — 12 July".
3. Paste your source text into the additional content field.
4. Set the number of slides, tone, and language, then generate.

The topic still matters: it acts as the working title and tells the AI what the deck is for, while the pasted text supplies the substance.

## What the AI does with your text

The generator restructures your source text into the standard deck layouts: a title slide, bullet-point content slides, and image + text slides. In practice that means it:

- groups related points from your text onto the same slide,
- condenses paragraphs into short bullet points,
- orders the slides to follow the flow of your source material.

The output is a starting draft built from your content, not a verbatim copy — review it and adjust wording where precision matters. All slides are regular Google Slides objects, so editing is the same as in any deck.

## Common sources

- **Meeting notes** — paste the raw notes; ask for 6–8 slides to get a recap deck with decisions and action items grouped together.
- **Blog post or article** — paste the full text; one slide per section is a reasonable slide-count estimate.
- **Report outline** — paste the outline with its headings; the headings tend to become slide titles, so clean them up first.

## Tips for clean source text

- **Remove noise first.** Strip signatures, timestamps, and off-topic chatter from notes before pasting.
- **Use headings or blank lines** to separate sections — structure in the input leads to better slide grouping.
- **Match slide count to content volume.** A one-page outline does not fill 15 slides; a long report will not compress well into 5.
- **One document per deck.** Pasting two unrelated documents produces a muddled deck; generate them separately.
- **Mind the language.** If your source text and the selected output language differ, the AI generates in the output language — handy for producing, say, a Spanish deck from English notes. See <a href="/docs/slides-ai/writing-tones-and-languages">Writing tones and languages</a>.

## Related pages

- <a href="/docs/slides-ai/create-presentation-from-topic">Create a presentation from a topic</a> — when you have no source text
- <a href="/docs/slides-ai/credits-and-troubleshooting">Credits and troubleshooting</a> — if generation fails on long inputs

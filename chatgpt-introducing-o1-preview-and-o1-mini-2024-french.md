---
title: ChatGPT présente o1-preview et o1-mini (Septembre 2024)  
description:  
permalink: /chatgpt-presente-o1-preview-et-o1-mini-septembre-2024/
---

<div style="position: fixed; right: 0; top: 100px; width: 283px; border: 2px solid #007bff; border-radius: 10px; padding: 20px; background-color: #f8f9fa; text-align: center; z-index: 9999;">
    <h3>🤔 Besoin d'exécuter des tâches en masse ?</h3>
    <img src="https://github.com/skiffer/hydra-docgpt.ai/blob/main/images/demo-sheets2.gif?raw=true" alt="Démonstration GIF" style="width: 100%; border-radius: 10px; margin-bottom: 15px;"/>
    <p style="font-size: 18px; margin-top: 10px;"><b>👍 Essayez <a href="https://docgpt.ai/gpt-for-sheets/" style="color: #007bff; text-decoration: none;" target="_blank">GPT for Sheets !</a></b></p>
    <ul style="list-style-type: none; padding: 0; font-size: 16px;">
        <li>📄 Créer des descriptions de produits en une fois</li>
        <li>💼 Générer des leads et enrichir des données</li>
        <li>🔗 Scraping de sites</li>
        <li>🌎 Recherche Google</li>
        <li>🔍 SEO programmatique & génération de pages en masse</li>
        <li>📣 Générateur de publications sur les réseaux sociaux alimenté par l'IA</li>
        <li>📈 Extraire les mots-clés des concurrents les mieux classés</li>
        <li>🤖 Supporte Perplexity, Claude, Mistral, Gemini, OpenRoute</li>
    </ul>
</div>

<style>
body {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
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
    <iframe width="560" height="315" src="https://www.youtube.com/embed/50W4YeQdnSg?si=_QK6iDY2ux-ThqR9" title="Lecteur vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

OpenAI a dévoilé son dernier modèle d'IA, nom de code *Strawberry*, officiellement nommé *OpenAI o1*. Ce nouveau modèle fait partie d'une famille comprenant deux versions : **o1-preview** et **o1-mini**. Alors que **o1-preview** est un modèle complet, **o1-mini** est plus petit et plus efficace, conçu principalement pour la génération de code.

| Modèle        | Fenêtre de contexte (tokens) | Limite maximale de tokens en sortie |
|---------------|-----------------------------|-------------------------------------|
| o1-preview    | 128 000                      | Jusqu'à 32 768 tokens               |
| o1-mini       | 128 000                      | Jusqu'à 65 536 tokens               |

## Tarification

Les utilisateurs de ChatGPT Plus et Team peuvent déjà accéder à **o1-preview** et **o1-mini**, avec un accès anticipé pour les utilisateurs Enterprise et Edu la semaine prochaine. OpenAI prévoit également de proposer **o1-mini** aux utilisateurs gratuits de ChatGPT, bien que la date de sortie exacte reste à déterminer.

Pour les développeurs, **OpenAI o1** est proposé à un prix plus élevé. L'API pour **o1-preview** est facturée à 15 $ par million de tokens en entrée et 60 $ par million de tokens en sortie. En comparaison, **GPT-4o** est plus rentable, à 5 $ pour les tokens d'entrée et 15 $ pour les tokens de sortie.

## Exemples d'utilisations

Pour illustrer davantage les différences entre ces modèles, voici quelques exemples d'application :

### **Exemple 1 : Programmation avec o1-mini**
Si vous êtes un développeur travaillant sur un projet complexe nécessitant de générer de grands blocs de code ou de gérer des workflows en plusieurs étapes, **o1-mini** est un excellent choix. Sa sortie de tokens plus importante (jusqu'à 65 536 tokens) vous permet de générer et d'exécuter de longs extraits de code avec moins d'interruptions, ce qui le rend parfait pour des tâches de **développement logiciel** ou de **traitement de données**.

### **Exemple 2 : Recherche scientifique avec o1-preview**
Si vous êtes un chercheur analysant des ensembles de données complexes ou résolvant des problèmes mathématiques en plusieurs étapes, **o1-preview** vous offrira les capacités de **raisonnement avancé** dont vous avez besoin pour décomposer des tâches complexes, raisonner et produire des résultats précis. Cela est particulièrement utile dans des domaines comme la **biochimie**, la **physique** ou la **recherche en apprentissage automatique**.

### **Exemple 3 : Projets créatifs avec GPT-4**
Pour des tâches où le **contenu visuel** est essentiel à votre travail — comme la création d'infographies, la conception de matériel marketing ou la production de contenu créatif pour les réseaux sociaux — **GPT-4** est idéal. Sa capacité à combiner texte et images en fait la solution parfaite pour optimiser les **flux de travail créatifs** dans des secteurs comme le **marketing**, la **publicité** et la **création de contenu**.

## Caractéristiques principales d'OpenAI o1

<div style="text-align: center">
    <img src="{{ site.baseurl }}/images/o1-tokens.png" alt="chatpgt-o1-preview-mini-tokens" class="" style="width: 700px !important;"/>
</div>

Une des caractéristiques remarquables de **OpenAI o1** est sa capacité à "s'auto-réfléchir". Cela permet au modèle de prendre plus de temps pour traiter et examiner divers aspects d'une requête avant de fournir une réponse, ce qui conduit à des réponses plus réfléchies et plus précises. Cette fonctionnalité est particulièrement utile pour les tâches complexes nécessitant une analyse approfondie, comme l'analyse des emails pour des informations privilégiées ou le brainstorming de stratégies marketing.

Le modèle utilise l'apprentissage par renforcement pour "réfléchir" avant de répondre, ce qui imite un processus de réflexion. Soutenu par un système de récompenses et de pénalités, **o1** planifie et exécute plusieurs étapes pour générer une réponse complète. La théorie est que plus **OpenAI o1** passe de temps à traiter une requête, meilleure sera la réponse.

## Pour qui est-ce conçu ?

Les capacités de raisonnement améliorées de **OpenAI o1** en font un outil idéal pour les professionnels confrontés à des défis complexes dans des domaines comme la science, la programmation et les mathématiques. Par exemple :

- Les chercheurs en santé peuvent utiliser **o1** pour annoter des données complexes de séquençage cellulaire.
- Les physiciens peuvent compter sur **o1** pour générer des formules mathématiques complexes pour l'optique quantique.
- Les développeurs dans divers secteurs peuvent utiliser **o1** pour créer et exécuter des workflows en plusieurs étapes.

Cette polyvalence fait de **o1** un outil adapté à tous ceux qui travaillent sur des projets complexes et lourds en données nécessitant un raisonnement de haut niveau.

## Performance et limitations

<div>
    <img src="{{ site.baseurl }}/images/o1-preview-vs-o1-mini.png" alt="chatpgt-o1-preview-vs-o1-mini" class=""/>
</div>

**OpenAI o1** utilise un nouvel algorithme d'optimisation et un ensemble de données d'entraînement spécialisé, incluant la littérature scientifique et des données de raisonnement. Lors des essais, **o1** a surpassé **GPT-4o** dans plusieurs domaines clés. Il a résolu avec succès 83 % des problèmes lors des qualifications de l'Olympiade Internationale de Mathématiques (comparé à 13 % pour **GPT-4o**) et s'est classé dans le 89e percentile des compétitions de programmation sur Codeforces.

Malgré ces avancées, **o1** présente certaines limitations :

- Les temps de réponse peuvent être plus lents, dépassant parfois 10 secondes pour certaines requêtes.
- Les premiers testeurs ont signalé que **o1** est plus sujet aux "hallucinations" (fournir des réponses incorrectes mais confiantes) que **GPT-4o**.
- **o1** est moins susceptible d'admettre quand il ne connaît pas la réponse.

## Faire le bon choix pour vos besoins

Lors du choix entre **ChatGPT o1-preview**, **o1-mini** et **GPT-4**, il est important d'évaluer vos besoins spécifiques :

### Choisissez **ChatGPT o1-preview** si :
- **Le raisonnement avancé** est essentiel pour des tâches telles que la programmation, la recherche scientifique ou l'analyse de données nécessitant une résolution de problèmes complexe et en plusieurs étapes.
- **La rapidité** est une priorité dans vos flux de travail, et vous avez besoin de réponses rapides et intelligentes.
- Votre objectif est principalement des **interactions basées sur du texte** sans besoin de génération de contenu visuel.

### Choisissez **ChatGPT o1-mini** si :
- Vous avez besoin d'un **modèle léger et efficace** pour gérer des tâches avec une sortie de tokens élevée, en particulier pour **la programmation** ou l'exécution de workflows en plusieurs étapes.
- Vous recherchez un modèle offrant d'excellentes performances sans les exigences complètes de **o1-preview**, mais qui délivre tout de même d'excellentes capacités de génération de texte et de code.
- Votre projet nécessite une **limite de sortie de tokens plus grande** (jusqu'à 65 536 tokens) pour traiter des données plus complexes, mais sans la portée plus large de **o1-preview**.

### Choisissez **ChatGPT 4o** si :

- **Le contenu visuel** est essentiel pour vos projets, et vous avez besoin d'une génération d'images intégrée au texte pour des tâches comme la conception ou la création de contenu.
- Vous souhaitez **optimiser les workflows créatifs** en combinant texte et visuels dans une plateforme unique et cohérente.

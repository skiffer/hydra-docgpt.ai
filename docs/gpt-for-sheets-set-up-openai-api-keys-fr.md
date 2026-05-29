---
layout: docs_layouts/default
title: Configuration des clés API OpenAI
nav_order: 1
parent: GPT for Sheets - other languages
permalink: /docs/gpt-for-sheets/set-up-openai-api-keys-fr
description: Comment configurer les clés API OpenAI
---

<script>
window.onload = function() {
    var promoElement = document.getElementById("promo-sheets");
    if (promoElement) {
        promoElement.style.display = "none";
    }
};

</script>

# Puissance de l'IA pour Google Sheets : Guide complet d'installation d'OpenAI, Claude, Gemini, Perplexity et Mistral

<div style="border: 1px solid #dbe4ff; background: #f8f9ff; border-radius: 12px; padding: 18px; margin: 22px 0;">
  <strong>Besoin de GPT for Sheets pour un vrai workflow ?</strong><br>
  Comparez les plans Starter, Pro, Business et Lifetime pour les formules IA, Claude/Gemini/OpenRouter, le SEO en masse et l'enrichissement de leads.
  <br><a href="/gpt-for-sheets/#pricing"><strong>Voir les prix GPT for Sheets →</strong></a>
</div>


## 🌐 Langues disponibles
- [English (Anglais)](/docs/gpt-for-sheets/set-up-openai-api-keys)
- [Русский (Russe)](/docs/gpt-for-sheets/set-up-openai-api-keys-ru)
- [Svenska (Suédois)](/docs/gpt-for-sheets/set-up-openai-api-keys-sv)
- [Polski (Polonais)](/docs/gpt-for-sheets/set-up-openai-api-keys-pl)
- [Türkçe (Turc)](/docs/gpt-for-sheets/set-up-openai-api-keys-tr)
- [Deutsch (Allemand)](/docs/gpt-for-sheets/set-up-openai-api-keys-ch)
- [Français (Actuel)](/docs/gpt-for-sheets/set-up-openai-api-keys-fr)
- [Nederlands (Néerlandais)](/docs/gpt-for-sheets/set-up-openai-api-keys-nl)
- [Español (Espagnol)](/docs/gpt-for-sheets/set-up-openai-api-keys-es)
- [Português (Portugais)](/docs/gpt-for-sheets/set-up-openai-api-keys-pt)
- [日本語 (Japonais)](/docs/gpt-for-sheets/set-up-openai-api-keys-ja)
- [中文 (Chinois)](/docs/gpt-for-sheets/set-up-openai-api-keys-zh)
- [Українська (Ukrainien)](/docs/gpt-for-sheets/set-up-openai-api-keys-uk)

## Table des matières
1. [Avant de commencer](#avant-de-commencer)
2. [Instructions de configuration](#instructions-de-configuration)
3. [Configuration des clés Mistral](#configuration-des-clés-mistral)
4. [Configuration des clés Claude](#configuration-des-clés-claude)
5. [Configuration des clés Perplexity](#configuration-des-clés-perplexity)
6. [Configuration des clés Gemini](#configuration-des-clés-gemini)
7. [Dépannage](#dépannage)

### Avant de commencer
1. Installez <a href="https://workspace.google.com/marketplace/app/gpt_for_docs_sheets_forms_slides/466607203252" target="_blank">l'extension GPT for Sheets</a>
2. <a href="/gpt-for-sheets/" target="_blank">Mettez à niveau votre abonnement vers le plan Pro User</a>
3. Créez un nouveau document de feuille ou **assurez-vous d'être PROPRIÉTAIRE de celui en cours**
4. Lancez l'extension : Extensions > GPT for Sheets, Docs, Slides, Forms > **Lancer**
5. Veuillez cliquer sur le bouton **'Actualiser le compte'** situé : Extensions > GPT for Sheets, Docs, Slides, Forms > **Actualiser le compte** <img style="display: block;" src="{{ site.baseurl }}/images/setup-api-keys-1.png" alt="Actualiser le compte" width="400">
6. Si vous **avez déjà une clé API** pour le modèle d'IA souhaité (OpenAI, Claude, Mistral, Perplexity, Gemini), veuillez cliquer sur **'Configurer la clé API'** et coller **votre clé API** <img style="display: block;" src="{{ site.baseurl }}/images/setup-api-keys-2.png" alt="Actualiser le compte" width="400"> Le **coût réel d'utilisation d'OpenAI sera TRÈS FAIBLE**, car il a été conçu pour contourner les limites de débit de GPT.
7. <a href="/docs/gpt-for-sheets/set-up-openai-api-keys-fr/#1-connectez-vous-ou-inscrivez-vous-sur-la-plateforme-openai">Si vous **n'avez pas de clé API**, veuillez suivre ces instructions pour en obtenir une</a>
8. Assurez-vous d'avoir **au moins 1 $** dans votre compte de facturation OpenAI. Le coût réel d'utilisation d'OpenAI sera TRÈS FAIBLE, car il a été conçu **POUR CONTOURNER LES LIMITES DE DÉBIT DE GPT**. Si votre compte est nouveau, vous aurez initialement accès au niveau gratuit avec des limites relativement petites. Il est recommandé d'ajouter au moins 5 $ à votre compte pour passer au niveau 1, qui offre des limites de débit plus élevées et l'accès à GPT-4o : <a href="https://platform.openai.com/account/billing/overview" rel="nofollow" target="_blank">Facturation pour le compte OpenAI</a>
9. Copiez et collez les exemples de la barre latérale dans n'importe quelle cellule : Extensions > Extension > **Lancer**.
10. Veuillez utiliser les boutons **'Remplacer tous les GPT'** ou **'Remplacer les GPT sélectionnés'** lorsque vous êtes satisfait des résultats. Google Sheets actualise les formules périodiquement, et si vous actualisez la page, vous pourriez perdre vos modifications.
11. Lorsque vous êtes satisfait des résultats, **n'oubliez pas de cliquer sur les boutons 'Remplacer tous/GPT sélectionnés'**. Cela remplacera les fonctions par leurs sorties, les empêchant de recalculer lorsque la feuille est actualisée ou après un certain temps (spécifique à Google Sheets)
12. RECOMMANDATION : La meilleure façon d'assurer des performances optimales avec les extensions Google est d'utiliser **un profil Google Chrome séparé pour votre compte Gmail unique !** (parfois, l'API Google ne fonctionne pas bien avec plusieurs comptes dans le même profil Chrome) Cela aide à contourner les problèmes potentiels qui peuvent survenir de la compatibilité avec d'autres navigateurs.

Si vous rencontrez des erreurs lors de l'utilisation ou du lancement, veuillez consulter ces pages avant de contacter le support :
- <a href="/docs/support-gpt-sheets-docs-slides-forms-gmail/" target="_blank"> Dépannage</a>
- <a href="/docs/gpt-for-sheets/the-model-gpt-4o-does-not-exist-or-you-do-not-have-access-to-it/" target="_blank"> Le modèle GPT-4o n'existe pas, ou vous n'y avez pas accès</a>

### Important !
#### Si vous rencontrez le message : "Une autorisation est requise pour effectuer cette action."
1. **Utilisez un compte Gmail personnel** : Si vous utilisez un email d'entreprise (workspace), il peut avoir des restrictions sur l'utilisation d'extensions. Vous pourriez avoir besoin de demander à l'administrateur email de votre entreprise de configurer les paramètres pour permettre l'installation d'extensions. Par conséquent, il est recommandé d'utiliser un compte personnel. Si vous devez transférer votre abonnement, veuillez contacter le support via chat ou email à yaroslav91@gmail.com.
2. Si vous utilisez un compte personnel et rencontrez toujours ce problème, réinstallez simplement l'extension
3. Utilisez le compte Google dans un profil Google Chrome séparé - généralement requis si vous utilisez plusieurs comptes Google (problème Google)

4. ![create-profile.png]({{ site.baseurl }}/images/create-profile.png){: width="300"}

#### Si vous rencontrez le message : "Vous avez dépassé votre quota actuel, veuillez vérifier votre plan et les détails de facturation"
- <a href="https://platform.openai.com/settings/organization/billing/overview" rel="noopener noreferrer nofollow" target="_blank">Assurez-vous d'avoir **au moins 1 $** dans votre compte de facturation OpenAI.</a> Le coût réel d'utilisation d'OpenAI sera faible, car il a été conçu pour contourner les limites de débit de GPT

#### RECOMMANDATION :
- Les performances optimales avec les extensions Google sont obtenues en utilisant le navigateur Google Chrome.
- Si vous utilisez plusieurs comptes dans le même profil Google Chrome, veuillez créer un profil Google Chrome séparé pour ce compte. (Google est parfois instable avec les cookies multi-comptes)
- Si vous utilisez un email d'entreprise - parfois les emails d'entreprise ont des restrictions avec l'installation d'extensions. Cela pourrait nécessiter de demander à l'administrateur de l'email d'entreprise de configurer pour permettre l'installation d'extensions ou UTILISER UN COMPTE PERSONNEL. (si nécessaire de déplacer l'abonnement, veuillez écrire au chat de support ou email — yaroslav91@gmail.com)

#### Si vous utilisez plusieurs comptes dans le même navigateur Chrome - Veuillez créer un profil Chrome séparé pour ce compte unique. Parfois l'API Google vous voit comme un autre compte.

# Instructions - Comment configurer les clés API OpenAI

> Créez une clé API OpenAI pour accéder à l'API ChatGPT et aux autres API OpenAI. Cette clé permet à OpenAI de suivre votre utilisation et de générer une facturation précise.

#### 1. Connectez-vous ou inscrivez-vous sur la <a href="https://platform.openai.com/account/api-keys" rel="noopener noreferrer nofollow" target="_blank">plateforme OpenAI</a>

![sign-up-openai.png]({{ site.baseurl }}/images/sign-up-openai.png)

#### 2. Cliquez sur Créer une nouvelle clé secrète. <a href="https://platform.openai.com/settings/organization/billing/overview" rel="noopener noreferrer nofollow" target="_blank">Assurez-vous d'avoir **au moins 1 $** dans votre compte de facturation OpenAI.</a> Le coût réel d'utilisation d'OpenAI sera faible, car il a été conçu pour contourner les limites de débit de GPT

![generate-api-key.png]({{ site.baseurl }}/images/generate-api-key.png)

#### 3. Copiez votre clé dans le presse-papiers

![created-api-key.png]({{ site.baseurl }}/images/created-api-key.png)

#### 4. Ouvrez une feuille de calcul avec l'extension installée et lancez la barre latérale <b>Extensions > GPT for Docs, Sheets, Forms, Slides > Lancer</b>
#### 5. Veuillez vous assurer d'avoir supprimé toutes les autres extensions qui fournissent des fonctions GPT, pour éviter les conflits
#### 6. À cette étape, vous devriez avoir un abonnement au <a href="/gpt-for-sheets/" target="_blank">plan Pro User</a>
![created-api-key.png]({{ site.baseurl }}/images/subscription-pro-user.png){: width="300"}
#### 7. Cliquez sur 'Actualiser le compte' : Extensions > GPT for Sheets, Docs, Slides, Forms > Actualiser le compte
![refresh-account.png]({{ site.baseurl }}/images/setup-api-keys-1.png){: width="600"}
#### 8. Cliquez sur 'Configurer la clé OpenAI' : Extensions > GPT for Sheets, Docs, Slides, Forms > Actualiser le compte
![refresh-account.png]({{ site.baseurl }}/images/setup-api-keys-2.png){: width="600"}
#### 9. Collez votre clé API OpenAI où indiqué, et cliquez sur le bouton 'Vérifier'
![check-and-save-api-key.png]({{ site.baseurl }}/images/check-and-save-api-key.png){: width="600"}
#### 10. Cliquez sur le bouton 'Enregistrer'
#### 11. Tapez une formule simple dans une cellule et obtenez une réponse de GPT
> =GPT("Écrivez un titre pour un café")

### !!! Après vous être abonné ou avoir changé votre plan, veuillez cliquer sur le bouton 'Actualiser le compte' situé : Extensions > GPT for Sheets, Docs, Slides, Forms > Actualiser le compte
![refresh-account.png]({{ site.baseurl }}/images/setup-api-keys-1.png){: width="600"}

### Important !

![IMPORTANT-GPT-for-Sheets]({{ site.baseurl }}/images/gpt-for-sheets-warning.png){: width="500"}

> Après avoir obtenu un résultat final, veuillez cliquer sur **'Remplacer tous les GPT'** ou **'Remplacer sélectionnés'** pour remplacer la formule par le résultat.
> Si vous ne le faites pas - Google Sheets ré-exécute toutes les formules lors de l'actualisation de la page et toutes les 1-2 minutes. (pourrait affecter vos crédits sur Open AI ou les crédits internes, selon le plan)

### Comparaison des limites de débit pour le niveau gratuit et le niveau 1

#### Niveau gratuit
![tier-0.png]({{ site.baseurl }}/images/tier-0.png){: width="500"}

#### Niveau 1
![tier-1.png]({{ site.baseurl }}/images/tier-1.png){: width="500"}

#### Dépannage
##### Vous avez dépassé votre quota actuel, veuillez vérifier votre plan et les détails de facturation
##### Exception : "Le modèle gpt-4-0125-preview n'existe pas ou vous n'y avez pas accès

>OpenAI est passé aux plans prépayés à partir du 25 mars 2024.
>Veuillez consulter votre compte de clé API OpenAI ici : <a href="https://platform.openai.com/account/billing/overview" rel="nofollow" target="_blank">Facturation pour le compte OpenAI</a>

Cela arrive à cause de votre niveau dans Open AI, veuillez augmenter votre niveau dans OpenAI et le modèle apparaîtra pour votre compte.
1. Si vous avez le niveau gratuit - Veuillez alimenter votre compte d'au moins 5 $ pour avoir le niveau 1 <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-one" rel="nofollow" target="_blank">Limites de débit</a>
2. Pour vérifier votre niveau, veuillez suivre ce lien : <a href="https://platform.openai.com/settings/organization/limits" rel="nofollow" target="_blank">Vérifiez votre niveau</a>
3. Recréez la clé API et essayez d'utiliser [GPT, Claude, Mistral, Gemini for Sheets](https://docgpt.ai/gpt-for-sheets/) avec la nouvelle clé API (recréée)

##### ScriptError : Une autorisation est requise pour effectuer cette action

Raison
> Vous utilisez un compte email d'entreprise, vous devez utiliser un email personnel ou demander à l'administrateur d'autoriser l'exécution d'extensions
> Vous avez utilisé plusieurs comptes Google dans la même session Chrome

Solution #1
1. Utilisez un email personnel

Solution #2
1. Créez un nouveau profil Chrome
2. Créez une nouvelle feuille de calcul
3. Essayez à nouveau une fonction GPT

Solution #3
- Nettoyez les cookies de votre navigateur
- Connectez-vous à nouveau au compte Google
- Désinstallez et réinstallez l'extension

Solution #4
- Demandez à l'administrateur du compte workspace d'autoriser l'exécution d'extensions

D'autres problèmes possibles peuvent être trouvés ici : <a target="_blank" href="/docs/support-gpt-sheets-docs-slides-forms-gmail/">Dépannage</a>

#### Liens utiles
- <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-free" rel="nofollow" target="_blank">Comment augmenter — Limites de débit pour les clés Open AI </a>
- <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Vos clés API</a>
- <a href="https://platform.openai.com/account/billing/overview" rel="nofollow" target="_blank">Facturation pour le compte OpenAI</a>

Vous avez configuré votre clé API OpenAI dans GPT for Sheets and Docs. Maintenant, tout utilisateur ayant accès Éditeur à cette feuille de calcul peut utiliser les fonctions GPT en utilisant cette clé API

### Comment créer des clés API Mistral

#### 1. Veuillez créer un compte https://console.mistral.ai/

#### 2. Allez sur https://console.mistral.ai/api-keys/ et créez une clé api

#### 3. Voici la page de prix pour les clés api Mistral : https://docs.mistral.ai/platform/pricing/

### Comment créer une clé api Claude (Anthropic)

#### 1. Veuillez suivre cette page officielle https://docs.anthropic.com/claude/reference/getting-started-with-the-api

#### 2. Si vous avez déjà un compte, vérifiez vos clés ici : https://console.anthropic.com/settings/keys

### Comment créer une clé api Perplexity AI

#### 1. Veuillez suivre cette page officielle https://docs.perplexity.ai/docs/getting-started

#### 2. Si vous avez déjà un compte, vérifiez vos clés ici : https://www.perplexity.ai/settings/api

#### 3. Générez une clé API, copiez-la

#### 4. Allez dans GPT for Sheets et cliquez sur Configurer les clés Open AI. Faites défiler vers le bas et insérez la clé

#### 5. Cliquez sur le bouton 'Vérifier' pour la valider. Après cela, cliquez sur le bouton 'Enregistrer'

#### 6. Maintenant vous pouvez utiliser Perplexity AI avec la fonction =PERPLEXITY('quelles sont les meilleures vidéos youtube pour aujourd'hui')

### Comment créer des clés API Gemini

#### Vous pouvez créer votre clé api sur cette page : https://aistudio.google.com/app/apikey 
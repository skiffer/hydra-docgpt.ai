---
layout: docs_layouts/default
title: Le modèle GPT-4o n'existe pas ou vous n'y avez pas accès
nav_order: 1
parent: Errors in Google Sheets and ChatGPT
permalink: /docs/gpt-for-sheets/the-model-gpt-4o-does-not-exist-or-you-do-not-have-access-to-it/french
description: Le modèle GPT-4o n'existe pas ou vous n'y avez pas accès
---

# Le modèle GPT-4o n'existe pas, ou vous n'y avez pas accès

Pour accéder à l'API à la demande, vous devez d'abord configurer un plan de paiement et acheter des crédits. Veuillez consulter la [Présentation de la facturation](https://platform.openai.com/settings/organization/billing/overview) pour plus de détails.

Vous pouvez copier votre clé API ici : <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Open AI - Vos clés API</a>

1. Après un paiement réussi (minimum 5 $), des limites de taux plus élevées pour le modèle GPT-4 et au-delà seront activées. Vous devez avoir au moins atteint le **Tier 1** !
2. Il peut généralement falloir jusqu'à 5 minutes avant que le crédit ne soit pris en compte par le playground, même si le tableau de bord l'affiche immédiatement.
3. Essayez également de recréer votre clé API après un paiement réussi.
   ![refresh-account.png]({{ site.baseurl }}/images/billing-screen-page.png){: width="400"}
4. Vérifiez vos limites de taux ici : <a rel="nofollow" target="_blank" href="https://platform.openai.com/settings/organization/limits">Limites de taux</a>
   ![limits-screen-page.png]({{ site.baseurl }}/images/limits-screen-page.png){: width="400"}

Vous devez donc remplir votre compte OpenAI ou essayer d'utiliser nos autres plans avec notre clé API OpenAI de niveau supérieur et avec les limites de taux les plus élevées pour les applications d'entreprise.

**Pour utiliser GPT-4o, vous devez avoir au moins atteint le **Tier 1** !**
Bonne nouvelle : vous n'avez pas besoin d'un abonnement OpenAI Plus.

![tier-limits-screen-page.png]({{ site.baseurl }}/images/tier-limits-screen-page.png){: width="400"}

Avec GPT pour Google Sheets, vous pouvez utiliser GPT-4o sans abonnement OpenAI Plus. Payez à l'usage.

Pour augmenter vos limites de taux, consultez cette page : <a href="https://platform.openai.com/docs/guides/rate-limits" rel="nofollow" target="_blank">Guide pour vérifier vos limites de taux ChatGPT</a>

### Comment fonctionnent les limites de taux ?

Les limites de taux sont appliquées selon cinq métriques clés :

- **RPM (Requêtes par minute)**
- **RPD (Requêtes par jour)**
- **TPM (Jetons par minute)**
- **TPD (Jetons par jour)**
- **IPM (Images par minute)**

Vous pouvez atteindre une limite de taux en fonction de l'une de ces métriques, selon laquelle est atteinte en premier. Par exemple, si votre limite de RPM est de 20, envoyer 20 requêtes avec seulement 100 jetons chacune atteindrait cette limite, même si vous n'avez pas utilisé votre allocation de jetons (par exemple, 150k jetons par minute).

### Limites de la file d'attente de l'API par lots

Les limites de la file d'attente de l'API par lots sont calculées en fonction du nombre total de jetons d'entrée mis en file d'attente pour un modèle spécifique. Les jetons des travaux par lots en attente sont comptabilisés dans cette limite. Une fois un travail par lots terminé, ces jetons ne sont plus pris en compte dans la limite du modèle.

### Points importants à noter :

- **Limites au niveau de l'organisation et du projet** : Les limites de taux s'appliquent au niveau de l'organisation et du projet, pas au niveau de l'utilisateur.
- **Limites spécifiques au modèle** : Les limites de taux varient en fonction du modèle utilisé.
- **Limites d'utilisation** : Il existe des plafonds mensuels de dépenses pour l'utilisation de l'API, également appelés "limites d'utilisation".
- **Limites partagées** : Certaines familles de modèles partagent des limites de taux. Par exemple, si la page de limites de votre organisation indique un TPM partagé de 3,5M, toutes les appels à des modèles de cette liste seront comptabilisés dans ce total de 3,5M.

Comprendre ces limites garantit une utilisation optimale de l'API sans interruptions dues à des plafonds de taux.

### Niveaux d'utilisation

Vous pouvez consulter les limites de taux et d'utilisation de votre organisation dans la section des limites des paramètres de votre compte. Au fur et à mesure que vous utilisez davantage l'API OpenAI et que vos dépenses augmentent, vous passez automatiquement au niveau d'utilisation supérieur. Cela entraîne généralement des limites de taux plus élevées pour la plupart des modèles.

| **Niveau**   | **Qualification**                                                     | **Limites d'utilisation** |
|--------------|-----------------------------------------------------------------------|---------------------------|
| **Gratuit**  | Disponible pour les utilisateurs dans les régions autorisées           | 100 $ / mois               |
| **Tier 1**   | 5 $ payés                                                             | 100 $ / mois               |
| **Tier 2**   | 50 $ payés et au moins 7 jours depuis le premier paiement réussi      | 500 $ / mois               |
| **Tier 3**   | 100 $ payés et au moins 7 jours depuis le premier paiement réussi     | 1 000 $ / mois             |
| **Tier 4**   | 250 $ payés et au moins 14 jours depuis le premier paiement réussi    | 5 000 $ / mois             |
| **Tier 5**   | 1 000 $ payés et au moins 30 jours depuis le premier paiement réussi  | 50 000 $ / mois            |

Au fur et à mesure que vous progressez dans les niveaux, vos limites de taux augmentent, vous offrant plus de flexibilité pour tirer le meilleur parti de l'API.

### Utilisation en masse de GPT-4 dans Google Sheets
<iframe width="560" height="315" src="https://www.youtube.com/embed/V4IRVKBHJy4?si=3qoBVoXAddHTg7qR" title="Comment utiliser GPT pour Sheets" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Plans : Professionnel, Entreprise

Voici le lien : [GPT, Claude, Mistral, Gemini pour Sheets](https://docgpt.ai/gpt-for-sheets/)

#### Liens
- <a href="https://platform.openai.com/docs/guides/rate-limits?context=tier-free" rel="nofollow" target="_blank">Comment augmenter vos limites de taux pour les clés OpenAI</a>
- <a href="https://platform.openai.com/api-keys" rel="nofollow" target="_blank">Open AI - Vos clés API</a>
- <a href="https://platform.openai.com/account/billing/overview" rel="nofollow" target="_blank">Facturation pour le compte OpenAI</a>

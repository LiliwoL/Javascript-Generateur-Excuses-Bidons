# Travaux Pratiques - Introduction au Parcours de Tableaux en JavaScript


## Objectif du TP

- Comprendre les bases du parcours de tableaux en JavaScript.
- Appliquer les connaissances acquises pour manipuler le DOM.

## Prérequis

- Connaissance de base en HTML et CSS.
- Familiarité avec l'accès au DOM en JavaScript.
- Déclarer un **écouteur d'événement** **click** sur un élément préalablement sélectionné.

---

## Instructions

### Mise en place du document HTML

Créez un fichier HTML (index.html) avec la structure de base, incluant un conteneur div avec l'id **excuseDisplay** où les excuses générées seront affichées. 
Ajoutez également un bouton avec un id pour déclencher la génération d'excuse quand on clique dessus.

### Incorporation du JavaScript

- Liez le fichier **excuses.js** fourni qui servira de base de données d'excuses. Ce fichier contient un tableau contenant les excuses classées par catégories.
- Ajoutez un fichier JavaScript **script.js** et liez-le à votre fichier HTML.

> Vous prendrez soin de correctement organiser vos fichiers.


### Parcours de Tableaux

Dans votre fichier JavaScript, créez une fonction **genererExcuse** qui sera appelée lors du clic sur le bouton. À l'intérieur de cette fonction, utilisez une boucle pour parcourir le tableau d'excuses et affichez une excuse aléatoire dans le conteneur avec l'id "excuseDisplay".

### Bonus: Animation CSS

Ajoutez une classe CSS pour l'animation lors de l'affichage de l'excuse.
Utilisez cette classe pour ajouter l'effet d'animation lors de l'affichage de chaque excuse.

---

## Test et Validation

Ouvrez votre fichier HTML dans un navigateur et testez le bouton pour voir si les excuses s'affichent de manière **aléatoire** avec l'effet d'animation éventuellement.


## Bonus (facultatif)

- Ajoutez une sélection de thèmes (retard, devoir, réveil, flemme, oubli) à votre formulaire, et modifiez la génération d'excuses en fonction du thème sélectionné.


## Questions supplémentaires (facultatif)

- Expliquez la différence entre **for** et **while** lors du parcours d'un tableau.

- Comment pourriez-vous utiliser une fonction de rappel (callback) pour personnaliser le comportement de génération d'excuses ?

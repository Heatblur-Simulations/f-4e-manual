# Personnage

## Personnalisation

![Interface de personnalisation](../img/character_customization_ui.jpg)

Le pilote et le personnage WSO peuvent être personnalisés via un menu en jeu, par
exemple en sélectionnant l'un des nombreux casques disponibles.

> 🚧 Une interface utilisateur dédiée à la personnalisation des personnages sera disponible plus tard au cours de
> Accès anticipé.

De plus, des liaisons sont accessibles pour basculer entre les options disponibles.

![Liaisons de personnalisation](../img/character_customizer_binds.jpg)

### Possibilités

Les options de personnalisation incluent actuellement :

- Casque
  - HGU-2
  - HGU-55
- Couvre-chef
  - (aucun)
  - Lunettes d'aviateur
- Corps (6 types)
- Gants
  - Noir
  - Blanc

## Mode selfie

Pour permettre de superbes captures d'écran, un _Selfie Mode_ spécial peut être activé via une
liaison spéciale assignable.

Dans ce mode, le modèle du personnage est rendu même si le joueur est
actuellement en vue à la première personne (<kbd>F1</kbd>).

La caméra peut alors être déplacée par exemple vers l'avant via les commandes standards DCS :

- <kbd>RCtrl</kbd> + <kbd>RShift</kbd> + <kbd>8</kbd> (pavé numérique) : monter
- <kbd>RCtrl</kbd> + <kbd>RShift</kbd> + <kbd>2</kbd> (pavé numérique) : descendre
- <kbd>RCtrl</kbd> + <kbd>RShift</kbd> + <kbd>4</kbd> (pavé numérique) : déplacer vers la gauche
- <kbd>RCtrl</kbd> + <kbd>RShift</kbd> + <kbd>6</kbd> (pavé numérique) : déplacer vers la droite
- <kbd>RCtrl</kbd> + <kbd>RShift</kbd> + <kbd>/</kbd> (pavé numérique) : avancer
- <kbd>RCtrl</kbd> + <kbd>RShift</kbd> + <kbd>\*</kbd> (pavé numérique) : se déplacer vers l'arrière

La vue peut être retournée pour faire face au pilote en utilisant <kbd>LAlt</kbd> +
<kbd>C</kbd> puis à l'aide de la souris.

![Prise de selfie](../img/selfie_shot.jpg)

De plus, il existe une autre liaison spéciale pour geler le mouvement du modèle de
personnage.

Par défaut, la zone de mouvement des caméras est restreinte pour éviter de perturber la vue
pendant un vol normal (par exemple lors du déplacement de la tête dans un panneau pendant la VR).
Cette restriction peut être levée en modifiant
`<DCS Install Folder>/Mods/aircraft/F-4E/Entry/Views.lua`, permettant de déplacer la
caméra n'importe où dans le cockpit.

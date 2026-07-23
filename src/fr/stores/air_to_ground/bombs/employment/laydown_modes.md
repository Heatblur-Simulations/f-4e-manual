# Modes de pose

La livraison Laydown permet de larguer les armes à partir d'une attitude ailes à l'horizontale en
désignant visuellement la cible, soit en utilisant le pipper réglé sur une certaine
dépression de visée, soit avec le radar.

Ils sont plus efficaces pour les attaques à basse altitude, ainsi que pour le déploiement
de CBU ou de bombes à forte traînée.

## Laydown - L

Dans ce mode, la cible est désignée au moyen d'une distance à un point situé avant
la cible (IP). Une fois ce point dépassé, le bouton Bombe est maintenu enfoncé et
les armes se libèrent automatiquement après avoir dépassé la plage de largage
configurée.

En tant qu'aide visuelle, la vue peut être abaissée de manière à être exactement
sur la cible au passage de l'IP. De cette façon, dès que le pipper est au-dessus de la
cible, le bouton Bombe peut être maintenu enfoncé et les armes impacteront.

> 💡 La dépression de visée correcte peut être calculée à l'aide du
> [Outil de calcul des bombardements](../../../../dcs/bombing_computer.md).

![laydown](../../../../img/laydown.jpg)

### Procédure - L

La configuration de l'attaque Laydown nécessite la saisie de deux entrées sur le
panneau [WRCS](../../../../systems/weapon_systems/wrcs.md) :

- [Portée cible (TGT
  ALT/RANGE)](../../../../cockpit/wso/right_console/center_section.md#targetip-altitude-control),
  la distance entre l'IP et la cible
- [Plage de
  déclenchement](../../../../cockpit/wso/right_console/center_section.md#release-range-control),
  la distance calculée parcourue après laquelle les bombes seront larguées

Une fois que l'IP est survolé, le bouton Bombe doit être maintenu enfoncé jusqu'au largage. À
partir de ce moment, le WRCS calcule la distance parcourue à l'aide de l'INS. Une fois
que cette distance atteint la plage de largage configurée, les armes sont automatiquement
larguées.

Il existe différentes manières de déterminer que l'on se trouve au-dessus de l'IP, par exemple par
identification visuelle, en utilisant un équipement de navigation comme le TACAN, par un appel
radio, ou encore par trigonométrie basée sur la dépression du viseur optique.

Pour utiliser le viseur optique, il peut être réglé à une valeur en mils correspondant à son
alignement avec la position de la cible au passage de l'IP. Si cette procédure est utilisée, le
bouton Bombe est maintenu dès que le pipper traverse la cible, confirmant la position de l'avion
au-dessus de l'IP.

Les réglages d'avance de largage du [AWRU](../../../../systems/weapon_systems/awru.md) et du
WRCS doivent être saisis comme souhaité, et le bouton de sélection d'arme placé sur
BOMBS ou RKTS & DISP (pour les distributeurs comme CBU-1 et CBU-2 uniquement).

<iframe width="560" height="315" src="https://www.youtube.com/embed/46I5HOzLh-o?si=qm0LGG1Gefmdono2"
title="Tutoriel de bombardement F-4E - Mode Laydown" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Dive Laydown - DL

Ce mode est une variante du mode Laydown normal, où la cible est
désignée en utilisant le radar à la place.

Par conséquent, le pilote effectue une attaque en piqué similaire au mode
[Dive Toss](accurate_modes.md#dive-toss---dt), tandis que le WSO obtient
des informations précises sur la portée de la cible en obtenant un verrouillage radar.

Après désignation de la cible, le pilote se stabilise à l'altitude prévue et
les armes se libèrent automatiquement à la distance définie par rapport à la cible.

![Dive Laydown](../../../../img/divelaydown.jpg)

### Procédure - DL

La plage de largage de la table de bombardement doit être réglée directement dans le
panneau [WRCS](../../../../systems/weapon_systems/wrcs.md), et le pilote vole
à la vitesse programmée (vitesse vraie ou vitesse sol) à l'altitude donnée
au-dessus de la cible pour produire la plage de largage donnée.

Dive Laydown est sélectionné en plaçant le bouton de mode de livraison sur DL et en choisissant
soit RKTS & DISP (pour les distributeurs comme CBU-1 ou CBU-2 uniquement), soit BOMBS. La plage
de largage souhaitée est entrée sur le
panneau [WRCS](../../../../systems/weapon_systems/wrcs.md) et, si nécessaire, sur la
commande d'avance de largage.

Le début de l’attaque est le même que celui du Dive Toss ; un angle de plongée plus élevé que la
normale est volé, avec le [radar](../../../../systems/radar/overview.md) en
mode AIR-GRD à une portée de 5 ou 10 milles, un retour solide est généré, et le pilote
positionne ensuite le pipper sur la cible prévue et maintient enfoncé le bouton de largage de la
bombe.

Une fois cette opération terminée, le pilote sort de la plongée à l'altitude planifiée de la table
de bombardement, maintient la vitesse cible et le cap avec les ailes à l'horizontale, et
les bombes se libèrent automatiquement à la portée souhaitée.

Les facteurs clés pour la précision dans ce mode sont l'altitude et l'angle de tangage corrects
au moment du largage.

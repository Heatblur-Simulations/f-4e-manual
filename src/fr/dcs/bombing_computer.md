# Ordinateur de bombardement

Le calculateur de bombardement fournit au pilote et au WSO un moyen simple de calculer
les valeurs nécessaires pour les différents modes de bombardement. Vous pouvez l'utiliser pour
calculer chaque valeur (sauf le coefficient de traînée) dont vous avez besoin pour larguer un
armement précis sur votre cible. Il s'ouvre avec le raccourci clavier
<kbd>RCtrl</kbd>+<kbd>B</kbd> et peut être fermé avec le même raccourci clavier dans le jeu.
Vous pouvez également le lier à un bouton souhaité dans l'onglet Contrôles.

![manuel_bombing_calculator_warnings](../img/bombing_table.jpg)

## Tableau des bombardements

### Saisir

#### Mode de livraison

La première chose à sélectionner est le mode de livraison. Vous pouvez choisir entre les
modes suivants en fonction de votre attaque.

- Direct
- Dive Toss (DT)
- TGT Find
- Dive Laydown (DL)
- Laydown (L)
- Offset
- Loft
- Over-the-shoulder (O/S)
- Over-the-shoulder instantaneous (O/S INST)

#### Type de bombe

Dans la sélection Type de bombe, vous pouvez choisir quelle ordonnance vous souhaitez larguer.
Choisissez toujours la bonne ordonnance pour obtenir des résultats corrects. Vous pouvez
sélectionner
de la sélection suivante :

- MK-81
- MK-82
- MK-83
- MK-84
- M117
- CBU-87
- MK-82 AIR
- MK-82 Snakeye (SNK)
- BLU-107

#### Vitesse de rodage

Définit la vitesse à laquelle vous souhaitez voler depuis le point d'entrée jusqu'au largage de la
bombe.
La vitesse est la vitesse réelle de l'air et peut être réglée par incréments de 5 nœuds par
clic.

#### Altitude de rodage

Définit l'altitude à laquelle vous souhaitez commencer votre bombardement. Le rodage
l'altitude doit être maintenue à partir du point d'identification jusqu'au largage de la bombe. Vous
pouvez le définir
par incréments de 100 pieds par clic.

#### Distance IP <-> Cible

Définit la distance entre le point d'identification et le point cible. Vous pouvez sélectionner
soit en le définissant en milles marins avec un incrément de 0,1 mille marin, soit
en basculant l'unité en pieds avec le menu déroulant à droite. L'incrément en pieds
est en 100 pieds par clic. La conversion d'unité convertit également votre entrée réelle.

#### Altitude cible

Définit l'altitude cible en pieds au-dessus de msl. Vous pouvez le définir par incréments de 10
pieds
par clic.

#### Angle de plongée

Définit l’angle de plongée souhaité pour la course d’attaque. Peut être réglé par incréments de 1°
par clic. Doit être
réglé en mode Direct et Dive Toss.

#### Angle de loft

Définit l'angle de loft souhaité pour la course d'attaque. Peut être réglé en 1°
incréments par clic. Utilisé uniquement pour les modes LABS.

Doit également être défini dans le panneau LABS.

![Panneau LABS](../img/wso_release_angle.jpg)

### Sortie

En général, le calculateur de bombardement ne vous donnera que la sortie dont vous avez besoin
pour la course d'attaque sélectionnée.

#### Minuterie de traction

Vous donne le chronomètre de pull-up calculé en secondes que le WSO peut mettre dans le
[ARBCS](../systems/weapon_systems/arbcs.md#bombing-timers) ordinateur.

![Minuterie de bombardement](../img/wso_bombing_timer.jpg)

#### Plage de déclenchement

Vous donne la portée de bombardement calculée en pieds que le WSO peut mettre dans le
Panneau [WRCS](../systems/weapon_systems/wrcs.md#release-range-control).

![WRCS Plage](../img/wso_wrcs_panel_release_range.jpg)

#### Dépression visuelle

Vous donne la dépression de visée manuelle calculée en mils.

Celui-ci peut être placé dans le bouton de dépression du viseur afin d'aligner le réticule
avec la cible pour une solution de bombardement MIL manuel.

![Dépression visuelle](../img/pilot_dscg_reticle_depression_knob.jpg)

#### Coefficient de traînée

Vous donne le coefficient de traînée que le WSO peut alors définir dans
le panneau [WRCS](../systems/weapon_systems/wrcs.md#release-range-control).

![coefficient de traînée](../img/wso_wrcs_panel_drag_coefficient.jpg)

#### N/S WRCS et E/W WRCS

Vous donne les valeurs de distance de décalage calculées que le WSO peut ensuite définir dans
le panneau [WRCS](../systems/weapon_systems/wrcs.md#release-range-control).

![wso_northing_easting](../img/wso_wrcs_panel_northing_easting.jpg)

### Contrôles

#### Clear

Réinitialise toutes les entrées aux valeurs standard.

#### Save

Enregistre la solution actuelle sous l'onglet Bombing Solutions à la fin de la
page.

#### Tell Jester and Tell Jester and close

Avec ce bouton, les valeurs calculées par le calculateur de bombardement peuvent être transférées
à Jester. Il confirmera l'entrée ou vous dira "can't do" lorsque l'entrée n'est pas correcte.

## Modèle

Vous permet de saisir des valeurs pour calculer une
[avance de largage](../systems/weapon_systems/wrcs.md#release-advance-control).

### Entrée de modèle

#### Intervalle de largage

Définit l'[intervalle de largage](../systems/weapon_systems/awru.md) que le pilote
règle. Vous pouvez le définir par incréments de 0,01 par clic.

#### Multiplicateur d'intervalle

Définit le [multiplicateur d'intervalle](../systems/weapon_systems/awru.md) que le pilote
règle. Vous pouvez sélectionner « Norm » ou « x10 » dans la liste déroulante.

#### Bombe sur la cible

Vous permet de sélectionner le numéro de la bombe que vous souhaitez voir toucher la cible.
Toutes les bombes avant la bombe sélectionnée toucheront devant la cible. Les bombes
restantes toucheront derrière la cible.

### Sortie de modèle

#### Avance de largage

Vous donne l'[avance de largage](../systems/weapon_systems/wrcs.md#release-advance-control)
calculée que le WSO peut ensuite saisir.

![WRCS Avance de largage](../img/wso_wrcs_panel_release_advance.jpg)

## Solution de bombardement

Affiche les dernières solutions de bombardement enregistrées. La ligne montre les entrées comme
suit :

- Mode de livraison
- Type de bombe
- Altitude de rodage
- Vitesse de rodage

Selon le mode, il enregistrera également les solutions correspondantes nécessaires pour
effectuer la course d'attaque.

## Exemple d'exécution

Ceci est un guide étape par étape pour un exemple de bombardement Loft avec 12 Mk-82.
Dans notre cas, nous voulons que la quatrième bombe atteigne la cible. Les trois premiers devraient
frapper
devant la cible et le reste devrait avoir un impact derrière la cible. Pour cela nous
utilisera l’avance de libération.

### Planification : avance

La première étape dans la planification de notre opération de bombardement de lofts consiste à
identifier et à choisir un
cible. Dans cet exemple, nous voulons bombarder les unités rouges situées sur le X.

![map_target_position](../img/map_target_position.jpg)

### Planification : IP

Dans la deuxième étape, nous examinerons la carte F10 et établirons une identification
Point (IP).

> 💡 L'IP doit toujours avoir une bonne visibilité pendant le pilotage de l'avion, car
> l'identification optique de l'IP sera la principale méthode de chronométrage de la presse
> du bouton de la bombe.

![map_ingress_point](../img/map_ingress_point.jpg)

Pour notre cible, nous avons choisi le lac juste au nord de la cible comme IP. Nous
mesurons maintenant la distance entre notre IP et la cible et la notons, car nous devrons
la saisir dans le calculateur de bombardement. Dans ce cas, la distance est de 4,03 NM, ce qui
nous allons couper à 4 NM puisque le calculateur de bombardement ne peut prendre que des dixièmes de
mile.

### Planification : cible

Maintenant, nous devons également noter l'élévation de la cible en MSL. Pour obtenir ça
informations, nous cliquons simplement sur une unité et lisons l'altitude hors de la boîte dans le
coin inférieur gauche. Dans ce cas, l'élévation cible est de 32 pieds que nous couperons
jusqu'à 30 pieds puisque le calculateur de bombardement ne peut prendre que des valeurs de dizaines.

> 💡 Si l'unité cible n'est pas visible sur la carte F10, vous pouvez également survoler
> la position de l'unité ennemie et lisez l'élévation à côté des coordonnées
> dans le coin supérieur gauche de la carte.

![map_target_elevation](../img/map_target_elevation.jpg)

### Solution

![bombing_calculator_numbered](../img/f4_bombing_calc_example.jpg)

Maintenant que nous avons toutes les valeurs nécessaires depuis la carte, nous allons les
mettre dans le calculateur de bombardement.

(<num>1</num>) Ici nous pouvons sélectionner le mode de livraison qui est LOFT dans notre exemple.

(<num>2</num>) Ici, nous sélectionnons le type de notre bombe. Dans notre cas, les Mk-82.

(<num>3</num>) Nous voulons effectuer notre rodage à une vitesse réelle de 350 nœuds.

(<num>4</num>) Pour notre altitude de rodage, nous voulons qu'elle soit à 3000 pieds au-dessus de
MSL.

(<num>5</num>) Nous avons mesuré la distance entre notre point d'entrée et la cible
plus tôt à la deuxième étape. Maintenant, nous allons mettre cela dedans.

(<num>6</num>) Nous avons obtenu notre altitude cible à partir de la carte F10 et pouvons la mettre
maintenant.

(<num>7</num>) Nous voulons que notre angle de loft soit à 30°, nous l'intégrons.

(<num>8</num>) Le calculateur de bombardement nous renvoie désormais le Pull-Up Timer que
le WSO pourra ensuite saisir à une étape ultérieure. Il peut aussi être transféré via le
bouton "Tell Jester and close" ou "Tell Jester".

(<num>9</num>) Le calculateur de bombardement nous donne également la Pullup Range. C'est seulement
comme pilote
information.

(<num>10</num>) De plus, à titre d'information pilote, le calculateur de bombardement nous donne
notre plage de largage.

(<num>11</num>) Nous voulons larguer nos bombes avec un intervalle de largage de 0,15
secondes, alors nous mettons cela dedans

(<num>12</num>) Comme nous l'avons décidé au début, nous voulons que la quatrième bombe touche
la cible.

(<num>13</num>) Dans la fenêtre d'avance de largage, le calculateur de bombardement donne désormais
nous la valeur que le WSO peut mettre plus tard.

### Installation

Maintenant, le WSO peut régler l'angle de loft à l'angle de relâchement, la minuterie de traction à
les minuteries de bombardement et l'avance de largage dans l'avance de largage dans le WRCS.

### Exécution

Il ne vous reste plus qu'à effectuer la manœuvre de largage Loft aussi précisément que
possible pour vous assurer de toucher la cible correctement. Plus vous volez avec précision,
plus votre bombardement sera précis.

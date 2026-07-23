# Système de visée optique à calcul d'avance (LCOSS)

![f4_lcoss_caged](../../img/f4_lcoss_caged.jpg)

Le système de visée optique à calcul d'avance, ou LCOSS en abrégé, est utilisé pour établir une
référence visuelle à la livraison d'armes air-air ou air-sol.
Un réticule rouge est projeté sur un verre combineur. Le LCOSS comporte sept
différents modes qui peuvent être sélectionnés via le bouton de mode de vue.

## Commandes LCOSS

### Bouton de mode de visée

![f4_lcoss_sight_mode_knob](../../img/f4_lcoss_sight_mode_knob.jpg)

Le bouton du mode de visée sélectionne le mode de fonctionnement qui est le suivant :

| Bouton du mode de visée | Fonction |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **OFF** | Désactive le système de visée.                                                                                                                                  |
| **STBY** | Active le système de visée pour l'échauffement mais n'affiche aucun réticule.                                                                                         |
| **CAGE** | Le réticule est affiché et mis en cage sur la ligne de visée radar (RBL).                                                                                               |
| **A/G** | Sélectionne le mode air-sol. Le réticule peut être abaissé de 0 mils à 245 mils en dessous de la ligne de référence du fuselage (FRL).                                   |
| **A/A** | Sélectionne le mode de calcul d'avance air-air. La position du réticule est régie par le gyroscope de visée, la portée du radar, le capteur CADC et le bouton de cage sur l'accélérateur. |
| **BIT 1 et BIT 2** | Alimente les relais de l'amplificateur de calcul d'avance afin que des tensions fixes soient appliquées au système de visée pour un auto-test. Affiche des images d’autotest.              |

### Contrôle de la dépression du réticule

![f4_lcoss_reticle_depression](../../img/f4_lcoss_reticle_depression.jpg)

Le réticule peut être abaissé en tournant le bouton de dépression du réticule jusqu'à ce que
l'indicateur (par incréments d'un mil) affiche le réglage de visée souhaité. Le réticule
ne peut pas être positionné manuellement en azimut.

### Contrôle de l'intensité du réticule

![f4_lcoss_intensity](../../img/f4_lcoss_reticle_intensity.jpg)

La rotation du bouton de contrôle de l'intensité du réticule modifie la luminosité du
réticule.

### Commande du levier d'obturation

![f4_lcoss_shutter_lever](../../img/f4_lcoss_sight_shutter.jpg)

Le levier de commande d'obturateur est un levier à deux positions, CL (fermé) et OPEN.
En position CL, un obturateur est placé entre la source de lumière optique et le verre
combineur, empêchant ainsi tout dommage à l'optique causé par la lumière vive du soleil.
En position OPEN, l'obturateur est retiré et le réticule est affiché.

## Image du réticule

L'image du réticule projetée sur le verre combineur est composée d'un
réticule fixe, de languettes de référence de roulis et d'une barre de portée. Le réticule fixe est
constitué d'un pipper de 2 mils de diamètre situé au centre d'un cercle segmenté de 25 mils de
diamètre, et d'un cercle complet de 50 mils de diamètre.

Les languettes de référence de roulis tournent autour du cercle de 50 mils. Les languettes de
référence de roulis ont deux fonctions distinctes. Pendant le mode de bombardement décalé et le
mode de recherche de cible, les languettes de roulis fournissent des informations de direction
issues du WRCS. La position des languettes de roulis, par rapport aux languettes d'index fixes,
indique l'angle entre la trajectoire au sol et la route vers la cible. Dans tous les autres modes
de fonctionnement, les languettes de roulis indiquent l'assiette en roulis de l'avion, fournie
par l'INS.

| Languette de roulis gauche | Languette de roulis droite |
| ----------------------------------------------------------- | ------------------------------------------------------------- |
| ![f4_lcoss_roll_tab_left](../../img/f4_lcoss_left_roll.jpg) | ![f4_lcoss_roll_tab_right](../../img/f4_lcoss_right_roll.jpg) |
| _1 languette de roulis gauche, 2 languette de roulis centrale, 3 languette de roulis droite_ | _1 languette de roulis gauche, 2 languette de roulis centrale, 3 languette de roulis droite_ |

La barre de portée est semi-circulaire et apparaît à l'intérieur du cercle de 50 mil
uniquement lorsqu'une cible a été acquise par verrouillage radar. La longueur instantanée
de la barre de plage, et la vitesse à laquelle la longueur change indique la
la portée oblique réelle du radar et la distance entre l'avion et la cible. Le
la longueur minimale de la barre de portée (et l'indication de portée minimale) existe à la
position 6 heures. Avec le canon sélectionné, à la languette intérieure de la barre de portée
à la position 6 heures, la portée réelle du radar est de 1000 pieds. À la position 5 heures, la
barre de portée mesure 2 000 pieds, puis continue par incréments de 1 000 pieds par languette.
La portée maximale pouvant être affichée est de 6667 pieds avec les canons sélectionnés. Lorsqu'un
autre mode que GUN est sélectionné, la barre de portée est de 3 000 pieds à la position 6 heures
et de 6 000 pieds à la position 5 heures, avec des incréments de 3 000 pieds par languette. La
portée maximale affichable est alors de 20 000 pieds.

| Barre de portée avec canons | Barre de portée dans tout autre mode |
| ---------------------------------------------------------------- | --------------------------------------------------------------- |
| ![f4_lcoss_range_bar_guns](../../img/f4_lcoss_rangebar_guns.jpg) | ![f4_lcoss_range_bar](../../img/f4_lcoss_rangebar_not_guns.jpg) |

## Fonction de la cage à réticule

La fonction de cage de réticule est appliquée via le bouton CAGE sur l'accélérateur.
Avec le viseur fonctionnant en mode (GUNS) A/A et avec CAGE enfoncé (pas de radar
verrouillage), le réticule est en cage au niveau de la ligne de visée radar (RBL). Lorsque CAGE est
libérée, une pseudo portée de 1000 pieds est fournie à l'ordinateur mais la barre de portée
n’est pas affichée. Avec le verrouillage radar, la fonction de raidissement est appliquée
tant que CAGE est enfoncé. La barre de portée continue d'indiquer la portée réelle du radar
ou la portée maximale affichable. Lorsque CAGE est relâché, le réticule se déplace en azimut
et en élévation pour afficher l'avance requise, jusqu'à un maximum de 4 000 pieds. Cela ne se
produit qu'avec GUNS sélectionné.

## Principe

À 0 mils, le réticule s'aligne avec la **Ligne de référence du fuselage (FRL)** de
l'aéronef. 35 mils, comme par exemple également utilisé par le réglage CAGE, aligne la vue
avec la **Ligne de visée radar (RBL)**.

![Schéma](../../img/gun_calibration_schematic.jpg)

Le réticule abaissé de 35 mils, également appelé **Gun Cross**, est le point de
référence pour [l'utilisation du canon](../../stores/guns.md), car il représente le point dans
l'espace où le jet de balles frappe à une distance de 2250 pieds. C'est généralement
la référence de visée utilisée pour le tir air-sol, ainsi que pour le tir air-air
contre une cible stable et non manœuvrante. Des cibles plus proches que cela
seront également touchées, mais au-delà de la portée d'harmonisation, les balles tomberont
généralement en dessous de la cible et une avance appropriée doit être donnée.

![Exemple réel](../../img/gun_calibration_real.jpg)

En mode A/A avec les canons sélectionnés, le viseur effectuera un calcul d'avance automatique
pour corriger les mouvements de la cible. Sans verrouillage de cible, le système suppose une
distance cible de 1 000 pieds. Avec un verrouillage radar, la distance réelle de la cible sera
obtenue. Le calculateur d'avance n'a aucune connaissance du vecteur de mouvement réel de la cible
ni de sa vitesse ; il utilise plutôt les paramètres de l'avion porteur. Il est donc primordial que
le pipper soit stabilisé sur la cible pendant au moins une seconde complète avant de tirer. Si la
vitesse de la cible diffère de celle de l'avion, ou si la cible amorce une manœuvre, le pilote doit
en tenir compte et diriger la visée en conséquence.

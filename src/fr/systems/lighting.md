# Équipement d'éclairage

<iframe width="560" height="315" src="https://www.youtube.com/embed/7FK2KzCHk1E?si=MbOBaDOhxENF70yY&start=1102"
title="Systèmes électriques et d'éclairage F-4E | DCS World" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Éclairage extérieur

![ext_lights](../img/ext_f4_lighting_overview.jpg)

Les éclairages extérieurs du F-4E comprennent des feux de position situés sur les ailes et la queue,
les feux de jonction sur les ailes, les feux de fuselage, le feu anti-collision et le
lampe de prise de ravitaillement en vol ; les contrôles pour ceux-ci se trouvent sur la
console droite. Un éclairage supplémentaire en vol est fourni par les feux de
formation, qui ont un ensemble de commandes séparé au-dessus de la console droite. Plus loin
l'éclairage est disponible pour l'atterrissage et le roulage lorsque le train est sorti, et le
les contrôles pour ceux-ci se trouvent sur le sous-panneau de gauche.

![pilot_exterior_lights_panel](../img/pilot_ext_lights_panel.jpg) _Pilote
Panneau d'éclairage extérieur_

### Feux de position et de jonction

![pos_lights](../img/ext_f4_pos_and_join_anti_col_lights.jpg)

Les feux d'aile et de jonction sont contrôlés par un seul interrupteur, avec des options pour
OFF, DIM et BRT. Ces lumières n'ont pas de fonction flash. Le feu arrière est
contrôlé par l'interrupteur clignotant en position STEADY ou FLASH.

### Feux anti-collision et de fuselage

| Feux du fuselage sur le dessus | Feux du fuselage en bas |
|--------------------------------------------------------|--------------------------------------------------------------|
| ![fus_light_top](../img/ext_f4_fuselage_light_top.jpg) | ![fus_light_bottom](../img/ext_f4_fuselage_light_bottom.jpg) |

Trois feux anti-collision blancs se trouvent derrière la verrière arrière du cockpit, et
un sous chacune des entrées du moteur.

![anti_col_light](../img/ext_f4_anti_col_light.jpg)

Un feu anti-collision rouge se trouve sur le stabilisateur vertical.

Ceux-ci sont tous contrôlés par le commutateur FUS à trois positions (<num>1</num>), qui peut être
réglé sur
OFF, DIM et BRT. Le voyant rouge sur le stabilisateur ne s'allume que lorsque ce
commutateur est sélectionné sur BRT. Les lumières du fuselage fonctionnent uniquement avec
l'interrupteur clignotant en position STEADY ou FLASH, et cycle dans ce dernier réglage.

### Feux d'atterrissage et de roulage

![landing_and_taxi_lgihts_ext](../img/ext_f4_landing_gear_lights.jpg)

Les feux d'atterrissage et de circulation se trouvent sur la porte du train avant et n'éclairent que
lorsque le train est en position basse.

### Lumières de prise de ravitaillement en vol

Pour aider les opérateurs à aligner la flèche, des voyants éclairant le réceptacle IFR
s'allumeront lorsqu'il sera relevé en plaçant l'interrupteur de ravitaillement en vol sur EXTEND.

### Lumières de formation

![formation_lights](../img/ext_f4_formation_lights.jpg)

Un éclairage de formation électroluminescent se trouve le long du fuselage, des extrémités des
ailes,
et stabilisateur vertical. Ceux-ci sont activés à l'aide du panneau de commande situé au-dessus de la
console droite et proposent des options pour ON, OFF et MOM (pour momentané).

## Éclairage intérieur

L'éclairage intérieur est composé de plusieurs projecteurs, d'un panneau de rétroéclairage, d'un
indicateur
éclairage de bord et plusieurs lampes d'avertissement et indicateurs à intensité variable.

Les deux cockpits sont entièrement adaptés à la nuit et disposent de commandes séparées pour le
réglage de la luminosité.

La plupart des commandes d'éclairage intérieur se trouvent à l'extrémité arrière des
consoles de droite.

| Pilote | WSO |
|--------------------------------------------------------|--------------------------------------------------------|
| ![pilot_int_lighting](../img/pilot_cockpit_lights.jpg) | ![wso_int_lighting](../img/wso_cockpit_lights_aft.jpg) |

### Projecteurs

Pour l'éclairage général du cockpit, l'avion dispose de plusieurs projecteurs rouges
et aussi un projecteur blanc alimenté par batterie.

![pilot_interior_lighting_night](../img/pilot_interior_lighting_night.jpg)

#### Projecteur blanc

L'interrupteur du projecteur blanc (<num>1</num> Pilote, <num>4</num> WSO) agit indépendamment de
toutes les
autres commandes sur le panneau, et est soit ON, soit OFF. Il active un projecteur de secours séparé
(également appelé _Thunderstorm Light_) qui éclaire le cockpit en blanc. La lampe est
alimentée par le bus de batterie pour garantir qu'elle est toujours opérationnelle, même en
cas de perte totale de puissance.

> 🟡 ATTENTION : N'oubliez pas d'éteindre la lumière avant de garer l'avion pour un
> plus longtemps, car cela viderait la batterie.

#### Projecteurs rouges

Les projecteurs rouges peuvent être commutés individuellement pour les consoles et le panneau
d'instruments. Les commandes se trouvent sur la console de droite et sur le mur de droite.

![Interrupteurs de projecteur rouge](../img/pilot_floodlight_switches.jpg)

> 💡 Le WSO n'a aucune commande pour le projecteur de l'instrument. La lumière est aussi
> contrôlée par l'interrupteur du pilote sur le mur droit.

Les trois positions des commutateurs sont alimentées par différents bus pour garantir
disponibilité maximale :

| Lampe | Bus |
|--------|-----------------------|
| Lumineux | Bus essentiel 28 V CC |
| Moyen | Bus principal gauche 14 V CA |
| Faible | Bus principal gauche 115 V CA |

> 💡 Les projecteurs sont éteints en sélectionnant la position DIM et
> en déplaçant le bouton de luminosité de la console sur OFF.

### Panneau d'éclairage

Pour garantir que tous les panneaux et jauges soient lisibles de nuit, le rétroéclairage et
l'éclairage des bords peuvent être activés par l'un ou l'autre membre de l'équipage individuellement
pour les consoles
et le tableau de bord.

![Rétroéclairage](../img/backlighting.jpg)

Les commandes sont situées sur la console de droite.

![Commandes de rétroéclairage](../img/pilot_cockpit_lights_knobs.jpg)

L'éclairage de la console est assuré par le bus principal gauche 115 V CA, tandis que
L'éclairage du panneau est alimenté par le bus principal droit 115 V CA.

### Éclairage des instruments de vol

En plus de l'éclairage général du panneau, la luminosité des six instruments de vol suivants
peut être contrôlée individuellement par le pilote à l'aide du bouton de luminosité des
instruments de vol sur le panneau avant, et des six boutons sur le mur droit.

- Indicateur AoA
- Indicateur de vitesse
- HSI
- ADI
- VVI
- Altimètre

| Luminosité des instruments de vol | Intensité lumineuse des instruments de vol |
|-------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| ![Bouton de luminosité de vol](../img/pilot_flight_instrument_brightness_knob.jpg) | ![Panneau d'intensité des lumières des instruments de vol](../img/pilot_flight_instrument_lights.jpg) |

Le bouton de luminosité de vol fait office de contrôle principal. En position entièrement CCW,
l'éclairage des six instruments est éteint.

Les boutons sur le mur peuvent être utilisés pour régler la luminosité des instruments
individuellement, où la position complètement CCW les éteint et en déplaçant le bouton CW
augmente progressivement la luminosité jusqu'à atteindre le niveau dicté par le
Bouton de luminosité de vol.

> 💡 Le WSO n'a aucune commande pour l'éclairage des instruments. Au lieu de cela, le
> la luminosité est également contrôlée par les boutons pilotes.

> 🚧 L'éclairage des instruments de vol est actuellement lié au
> [Bouton du tableau de bord](../cockpit/pilot/right_console/center_section.md#instrument-panel-knob)
> sur la console de droite à la place. Les contrôles appropriés seront mis à disposition
> plus tard pendant l'accès anticipé.

### Avertissement et luminosité des indicateurs

En plus de contrôler la luminosité des instruments de vol, le bouton de luminosité du pilote
contrôle également l'intensité de tous les voyants d'avertissement et
indicateurs dans les deux cockpits.

En position complètement CCW, toutes les indications sont données à pleine luminosité. Déplacer
le bouton hors de cette position entraînera une intensité de lampe atténuée. Aucun réglage
de luminosité variable n'est disponible.

Certaines lampes, comme les voyants Incendie et Surchauffe, sont exclues du circuit
et s'affichera toujours en pleine luminosité.

> 💡 Les voyants d'avertissement et d'indicateur ne peuvent pas être complètement éteints, seulement un voyant lumineux ou
> un réglage atténué est disponible.

> 💡 Les lumières SHOOT n'ont pas de réglage atténué et sont entièrement éteintes lorsque le bouton
> est déplacé hors de la position complètement CCW.

### Lampes à rotation pour intensité variable

Les deux cockpits disposent de plusieurs lampes qui peuvent être atténuées individuellement en
tournant
la lampe. La rotation déplacera un obturateur devant la lampe, ce qui entraînera un
intensité réduite.

Certaines de ces lampes peuvent également être testées.

Pour le pilote, ces lampes comprennent :

| Nom | Localisation |
|-----------------|-----------------------|
| Indicateur CMS | Console gauche |
| Indicateur de fusée | Console gauche |
| Enregistreur | Sous-panneau gauche |
| Balise de marquage | Groupe des directeurs de vol |
| Pull-Up | Indicateurs aériens |
| KY-28 Mode P | Sous-panneau droit |
| KY-28 Mode C | Sous-panneau droit |
| Commande radio | Console droite |
| Commande TACAN | Console droite |
| Réponse IFF | Console droite |
| Test IFF | Console droite |

Le cockpit WSO est équipé des lampes rotatives suivantes :

| Nom | Localisation |
|-----------------------|--------------------|
| Commande radio | Console gauche |
| Commande TACAN | Console gauche |
| Indicateur de paillettes | Console gauche |
| Indicateur de fusée | Console gauche |
| Défi APX | Sous-panneau gauche |
| Défi de l'arbre de combat | Sous-panneau gauche |
| Balise de marquage | Indicateurs avant |
| KY-28 Mode P | Indicateurs avant |
| KY-28 Mode C | Indicateurs avant |
| INS Align | Console droite |
| INS Heat | Console droite |

### Autre

Certains panneaux et systèmes ont des commandes d'éclairage individuelles non liées aux
boutons de luminosité de la console générale ou des instruments.

Pour le pilote, ces commandes de luminosité supplémentaires sont :

| Nom | Localisation |
|-------------------------|-------------------|
| SAI | Mur gauche |
| Voyants de station | Gestion des armes |
| Affichage de l'indicateur de portée | Gestion des armes |
| HUD Réticule | Contrôles DSCG |
| Écran DSCG | Contrôles DSCG |
| Échelle DSCG | Contrôles DSCG |
| RWR Affichage | Panneau principal droit |
| RWR Boutons | Panneau principal droit |
| Lumière de boussole de veille | Console droite |
| Indexeur AoA | Mur droit |

Alors que les contrôles de luminosité du WSO sont les suivants :

| Nom | Localisation |
|-----------------------|--------------------|
| RWR Affichage | Indicateurs avant |
| RWR Boutons | Indicateurs avant |
| Lumière de boussole de veille | Console droite |
| Indexeur AoA | Console droite |
| Écran DSCG | Groupe de socles |
| Échelle DSCG | Groupe de socles |
| Pave Spike Réticule | Groupe de socles |
| Pave Spike Panneau | Groupe de socles |

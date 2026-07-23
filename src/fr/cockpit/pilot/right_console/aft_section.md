# Section arrière

La section arrière de la console droite comporte des équipements de navigation et des commandes
pour l'éclairage extérieur.

## Panneau de configuration de la boussole

![CompassCtl](../../../img/pilot_comp_panel.jpg)

Gère les commandes essentielles au bon fonctionnement du système d'azimut AJB-7.
Indispensable pour un affichage précis du cap sur des instruments tels que
l'[ADI](../../pilot/flight_director_group.md#attitude-director-indicator),
le [HSI](../../pilot/flight_director_group.md#horizontal-situation-indicator),
le [BDHI](../../wso/upfront_indicators.md#bearing-distance-heading-indicator-bdhi),
ainsi que l'[indicateur d'assiette](../../wso/upfront_indicators.md#attitude-indicator) à la place
arrière,
le [pilote
automatique](../../../systems/flight_controls_gear/flight_controls.md#auotmatic-flight-control-system-afcs)
et l'[ordinateur de bombardement](../../../systems/weapon_systems/wrcs.md).

### Sélecteur de mode

Bascule (<num>2</num>) entre différents modes de fonctionnement — COMP, DG
(gyroscope directionnel) et SLAVED. Il dispose également d'une position SYNC à rappel par ressort
pour
une synchronisation rapide du système d'azimut basée sur le signal de la valve de flux de la
boussole.
La valve de flux est un capteur électronique situé dans l'aile gauche de l'avion qui
détecte les champs magnétiques pour fournir la référence principale du cap magnétique.
Il est toutefois très sensible aux changements d'assiette de l'avion, voire aux
légères accélérations.

| Nom | Description |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COMP (Boussole) | Utilisé en cas d'urgence lorsque les systèmes de référence tombent en panne. Fournit un cap magnétique directement à partir de la valve de flux. |
| DG (Gyroscope directionnel) | Utilisé aux latitudes extrêmes et dans les zones à forte distorsion magnétique ; le cap magnétique initial nécessite un réglage manuel. Si le système de référence est en mode STBY, la latitude de l'avion doit être ajustée via le bouton de latitude. |
| SLAVED (Asservi) | Mode de fonctionnement principal en conditions typiques ; dépend des signaux de la valve de flux pour une synchronisation progressive du système. |
| SYNC | Rappelé sur SLAVED par ressort, facilite une synchronisation rapide entre la valve de flux de la boussole et la référence d'azimut. |

### Commutateur d'hémisphère et bouton de latitude

Ajustés pour définir l'hémisphère et la latitude de l'avion en mode DG,
lors d'un fonctionnement avec le système de référence en mode STBY. L'hémisphère est
déterminé en tournant la vis (<num>6</num>) au-dessus du bouton de latitude. Lorsque
le mode PRIM est actif, configurer une latitude autre que zéro
provoquera des erreurs en doublant la compensation de dérive liée aux corrections INS.

### Bouton de réglage du cap

Bouton push-to-turn (<num>1</num>), rappelé au centre par ressort, permettant
le réglage manuel de l'azimut — indispensable en mode DG.

### Indicateur de synchronisation

Affiche (<num>4</num>) l'écart d'azimut entre le signal de la valve de flux et
le système de référence interne.

## Panneau de commande des feux extérieurs

![Feux extérieurs](../../../img/pilot_ext_lights_panel.jpg)

Ce panneau regroupe les commandes de la majorité des éclairages extérieurs :

- 3 feux de position (vert, rouge, blanc)
- 2 feux de jonction en bout d'aile (vert, rouge)
- 3 feux de fuselage (blancs)
- feu anti-collision arrière avec 2 lampes (rouge)

Trois interrupteurs étiquetés FUSELAGE, TAIL et WING contrôlent la luminosité des feux
entre BRT (lumineux), DIM (tamisé) et OFF.

Pour garantir la disponibilité des feux même en cas de panne d'alimentation, les sélections BRT
et DIM sont acheminées via des bus différents :

| Lampe | Bus |
| ---------- | ------------------------------------ |
| BRT | Bus principal droit 28 V CC |
| DIM | Bus principal gauche 14 V CA |
| Anti-Col 1 | Bus principal droit 14 V CA |
| Anti-Col 2 | Bus principal gauche 14 V CA |

Pour plus d'informations sur l'éclairage, voir le
[chapitre 3.9 Éclairage](../../../systems/lighting.md#exterior-lighting).

### Commutateur FUSELAGE

L'interrupteur à trois positions (<num>1</num>) contrôle les trois feux blancs du fuselage.

De plus, s'il est réglé sur BRT et que le commutateur FLASH est en position FLASH, les deux
feux anti-collision s'allument.

### Commutateur TAIL

L'interrupteur à trois positions (<num>3</num>) contrôle le feu de position en
queue.

### Commutateur WING

L'interrupteur à trois positions (<num>4</num>) contrôle deux des trois feux de position et
les deux feux de jonction en bout d'aile.

### Commutateur FLASH

Un interrupteur à trois positions (<num>2</num>) réglable sur OFF, STEADY ou FLASH
pour contrôler le paramètre des éléments suivants :

- l'une des deux lampes anti-collision
- le feu de position arrière
- les feux de fuselage

Si réglé sur OFF, les feux concernés sont éteints quels que soient leurs
interrupteurs respectifs. En position STEADY, ils s'allument à la luminosité sélectionnée.
La position FLASH fait alterner les feux concernés entre la luminosité définie
et une luminosité réduite.

## Enregistreur vidéo embarqué (AVTR)

![Enregistreur vidéo embarqué](../../../img/pilot_avtr.jpg)

Le système AVTR est installé dans la partie arrière droite du siège. Il est
principalement contrôlé par le WSO et enregistre le son de l'interphone ainsi que
l'image du radar arrière.

Les images sont enregistrées sur une cassette U-matic S standard, pouvant être retirée et
remplacée à l'aide du bouton EJECT (<num>1</num>) en haut à gauche du boîtier. Le
bouton UNTHREAD (<num>2</num>) à côté sert à rembobiner la bande jusqu'au
début, ce qui écrase la séquence précédemment enregistrée.

La cassette peut enregistrer jusqu'à 20 minutes, comme indiqué sur le petit afficheur
étiqueté ELAPSED TIME (<num>3</num>).

Voir [9.6 DCS — Enregistreurs](../../../dcs/recorders.md) pour plus de détails sur la façon
d'accéder
aux images.

> 💡 Notre simulation de l'AVTR fait également office de lecteur de musique, voir
> [Lecteur de cassettes](../../../dcs/tape_player.md) pour plus de détails.

<iframe width="560" height="315" src="https://www.youtube.com/embed/rXz41sNfD9U?si=GoQNcYvQuaP-qNcM"
title="DCS F-4E Phantom : Tutoriel AVTR — Enregistreur pour debriefing/reconnaissance"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

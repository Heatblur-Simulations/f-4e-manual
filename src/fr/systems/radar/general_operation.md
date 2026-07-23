# Fonctionnement général du radar

<iframe width="560" height="315" src="https://www.youtube.com/embed/x5oJUPPo8zQ?si=WExXfuPLpjgwQviK"
title="Interpréter les taches - DCS F-4E Phantom II Introduction au radar" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Magnétron et Klystron

![Cornet d'alimentation d'antenne radar](../../img/radar_antenna_feedhorn.jpg)

Le magnétron et le klystron sont les deux méthodes de production de radiofréquences
dans le radar APQ-120. Le rayonnement du magnétron et du klystron est
alimenté par l'antenne et émis par le cornet d'alimentation.

### Magnétron

Le magnétron est le principal émetteur radiofréquence du radar. Il produit
une énergie pulsée qui est utilisée pour détecter et suivre les cibles.

L'émission du magnétron n'est présente que lorsque le
[Bouton d'alimentation du radar](interface.md#power) est en mode OPER ou EMER et que tous les
verrouillages décrits ci-dessous sont satisfaits.

Le magnétron est protégé par un pressostat de guide d'ondes et un verrouillage de
température. Si l'un de ces verrouillages est ouvert (peut-être en raison de dommages ou
d'un dysfonctionnement), le [Bouton d'alimentation du radar](interface.md#power) peut être déplacé
sur EMER pour rétablir le fonctionnement ; cependant, le fonctionnement du magnétron sans
pression ou refroidissement adéquat peut endommager le magnétron et brûler le cornet
d'alimentation.

Le magnétron n'est alimenté que 3 minutes après la mise sous tension du radar. Cela peut
être annulé en déplaçant le [Bouton d'alimentation du radar](interface.md#power) sur EMER ;
cependant, faire fonctionner le magnétron sans préchauffage suffisant peut entraîner
une largeur et une synchronisation d'impulsion incorrectes et/ou une puissance d'impulsion dégradée.

### Klystron

Le klystron produit de l'énergie radiofréquence à onde continue, qui est utilisée pour
accorder et guider les Sparrow.

Les émissions du klystron sont présentes lorsque le
[Bouton d'alimentation du radar](interface.md#power) est en STBY, OPER ou EMER, que
l'[Interrupteur d'alimentation du missile radar](../../cockpit/pilot/weapon_management.md#radar-missile-power-switch)
est en CW et que tous les verrouillages décrits ci-dessous sont satisfaits.

Le klystron est protégé par deux thermostats, un pressostat et un
interrupteur de courant de surtension. Si l'un de ces verrouillages (à l'exception de
l'interrupteur de courant de surtension) est ouvert, le
[Bouton d'alimentation du radar](interface.md#power) peut être déplacé sur EMER pour
rétablir le fonctionnement ; cependant, des dommages au klystron et au cornet d'alimentation
peuvent en résulter.

Le klystron n'est alimenté que 100 secondes après la mise sous tension du radar. Cela
peut être annulé en déplaçant le [Bouton d'alimentation du radar](interface.md#power) sur
EMER ; cependant, faire fonctionner le klystron sans échauffement suffisant peut entraîner
une puissance dégradée.

## Nutation du cornet d'alimentation

La nutation du cornet d'alimentation est requise pour le suivi automatique. Le cornet
d'alimentation effectue une nutation afin de faire tourner l'énergie rayonnée autour de
l'axe de l'antenne. Cela module les échos radar. Là où l'écho est le plus fort, l'antenne
se dirigera en cas de suivi, ce qui ramène l'antenne sur la cible suivie.

Un effet secondaire de cette nutation est l'augmentation de la largeur du faisceau, de
3,7 degrés (demi-puissance) à 6,7 degrés (pleine puissance), tout en réduisant l'intensité
moyenne du faisceau.

Le tableau ci-dessous décrit les paramètres de nutation pour le commutateur d'action.

| Bouton de mode           | Bouton de portée | Commutateur d'action | Nutation |
| ------------------------ | ---------- | ------------------- | -------- |
| RDR, BST, AIR-GND        | ALL        | Libération             | ✅       |
| MAP                      | ALL        | Libération             | ❌       |
| MAP-PPI                  | ALL        | Demi-action ou pleine action | ❌       |
| RDR, MAP-B, BST, AIR-GND | AI         | Demi-action ou pleine action | ✅       |
|                          | Autre que AI | Demi-action        | ✅       |
|                          |            | Pleine action        | ❌       |

## Stabilisation d'antenne

Il existe trois modes de stabilisation d'antenne. Deux s'appliquent au
[Fonctionnement air-air](air_to_air.md) et l'autre au
[Fonctionnement air-sol](air_to_ground.md).

![Stabilisation d'antenne](../../img/manual_antenna_stab.jpg)

### NOR

Fonctionnement normal de la stabilisation de l'antenne.

En [Recherche automatique](air_to_air.md#automatic-search), l'antenne est stabilisée
en tangage et en roulis par rapport à l'horizon (plan radar). Le centre du balayage radar
est aligné sur le cap de l'avion. Dans ce mode, le repère zéro degré sur l'écran indique
l'horizon.

En [Télémétrie air-sol](air_to_air.md#air-to-ground-ranging), l'antenne est orientée
sur la ligne de visée radar mais reste stabilisée en dérive.

### DRIFT OUT

Identique à NOR, mais la stabilisation de la dérive est supprimée.

### STAB OUT

En [Recherche automatique](air_to_air.md#automatic-search), l'antenne ne se stabilise
pas par rapport à l'horizon, mais plutôt par rapport à la référence de l'avion.

En [Télémétrie air-sol](air_to_air.md#air-to-ground-ranging), l'antenne est orientée
sur la ligne de visée radar sans stabilisation de la dérive. Dans ce mode, le repère
zéro degré sur l'écran indique la ligne de visée radar.

## Réglage d'impulsion

Le réglage d'impulsion détermine plusieurs caractéristiques du système radar. Celles-ci
incluent la longueur de l'impulsion transmise, l'amplificateur utilisé pour amplifier
les signaux, ainsi que la fréquence à laquelle les impulsions sont émises (c.-à-d. la
fréquence de répétition des impulsions).

Le réglage est contrôlé avec le [Pulse Switch](interface.md#pulse-switch)
en mode LONG ou SHORT.

| Mode  | Amplificateur   | Réglage de la fréquence de répétition des impulsions (PRF) (Hz) | Durée d'impulsion (microsecondes) |
| ----- | ----------- | --------------------------------------------- | --------------------------- |
| LONG  | Bande étroite | 370                                           | 2,0                         |
| SHORT | Biais arrière   | 1060                                          | 0,4                         |

> 💡 Les modes AIR-GND et Acquisition automatique forcent le réglage de l'impulsion en
> SHORT.

Le réglage AUTO active la commutation de mode de niveau de puissance (PLMS) décrite ci-dessous.

### Commutation de mode de niveau de puissance

La commutation de mode de niveau de puissance sélectionne automatiquement les amplificateurs
LONG ou SHORT, et Bande étroite ou Biais arrière, en fonction de plusieurs conditions telles
que la portée de la cible, la force de l'écho ou le signal de bruit.

## Contrôle du gain

L'amplification des signaux qui entrent dans le récepteur est appelée le gain. Le réglage
du gain est important tant pour les opérations de recherche que de suivi, et constitue le
principal moyen pour l'équipage de repérer les cibles sur l'écran.

### Contrôle manuel du gain

Le gain peut être modifié manuellement. Cela modifie la façon dont les retours sont affichés.
Des réglages de gain plus élevés amplifient tous les échos mais peuvent entraîner du bruit
et de la saturation, ce qui dégrade l'image. Des réglages de gain plus faibles donnent un
meilleur contraste de cible ; cependant, les retours plus faibles ne seront pas visibles, ce
qui peut dégrader la portée de détection.

| Trop de gain                                       | Gain parfait (2 cibles)                          |
| --------------------------------------------------- | ------------------------------------------------- |
| ![Trop de gain](../../img/radar_too_much_gain.jpg) | ![Gain parfait](../../img/radar_perfect_gain.jpg) |

Lorsque le radar se verrouille sur une cible, le contrôle du gain passe au
[Circuit de contrôle automatique du gain](#automatic-gain-control) et le contrôle manuel
du gain n'est plus utilisé.

> 💡 Obtenir le bon gain est une question d'équilibre qui vient avec l'expérience ; à titre
> de règle générale pour la recherche, le gain doit être augmenté jusqu'à ce qu'une petite
> quantité de bruit (points aléatoires) commence à apparaître.

En plus du gain du récepteur, l'écran dispose également d'un nivellement de l'image ; après
un réglage du gain, il peut falloir quelques balayages pour que l'image ajuste correctement
le niveau.

### Contrôle automatique du gain

Le contrôle automatique du gain prend en charge le réglage du gain une fois que le radar est
en poursuite. Le gain est ajusté automatiquement en utilisant la cible dans la porte de
poursuite en portée, afin de fournir un signal de cible cohérent pour le suivi.

## Contrôle du temps de sensibilité (STC)

La force d'un écho radar diminue selon `1 / r^4`, où **r** est la portée. Cela signifie
que sur un affichage normal, la luminosité des retours radar deviendra plus faible avec
la distance.

Pour la cartographie du sol, l'APQ-120 neutralise cet effet. Avec le
[Bouton de mode radar](interface.md#radar-modes-mode) sur MAP et le
[Bouton d'affichage](interface.md#display-knob) en mode PPI, le contrôle du temps de
sensibilité (STC) est activé.

Lorsqu'il est activé, il augmente de façon exponentielle le gain du récepteur avec la
portée afin de contrecarrer la chute de puissance de l'écho avec la portée. Cela fournit
une luminosité approximativement uniforme quelle que soit la portée.

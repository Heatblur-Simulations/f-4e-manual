# EFB

Le sac de vol électronique (EFB) fournit à la fois au pilote et au WSO des informations détaillées
sur les systèmes internes de l'avion.

Il peut être ouvert et fermé par défaut avec <kbd>RCTRL</kbd>+<kbd>I</kbd>.
De plus, le pilote peut également y accéder en cliquant sur la data-case à gauche
côté derrière le siège.

![Cas de données](../img/data_case.jpg)

> 💡 Les concepteurs de missions peuvent activer l'utilisation de l'EFB dans le
> [Éditeur de mission](../dcs/mission_editor.md#allow-use-of-efb).

## Page du moteur

La page du moteur fournit des détails sur les deux
[Moteurs](../systems/engines_and_fuel_systems/engines.md).

![Page moteur, postcombustion](../img/efb_engine_afterburner.jpg)

### Boîte de vitesse

Le coin supérieur gauche indique le régime actuel de l'arbre de transmission qui fait tourner le
compresseur,
ainsi que l'ensemble turbine.

`NG` (Gas Generator Speed) représente la vitesse à laquelle le compresseur
section tourne, exprimée en pourcentage du maximum souhaité.

L'arbre au centre du moteur tourne également visuellement en conséquence.

### Entrée

La zone d'entrée visualise le flux d'air extérieur, quantifié en lb/s et
affiche sa température.

### Compresseur

Le flux d’air est visualisé lorsqu’il traverse les 17 étages du compresseur.
Sa température à la fin de la dernière étape est affichée,
ainsi que le taux de compression.

### Chambre de combustion

Les chambres ont généralement trois états :

* Non éclairé
* Allumé
* Surtension (par exemple lors d'un décrochage du compresseur)

De plus, une étincelle d'allumage s'affiche pour confirmer le bon fonctionnement des bougies
d'allumage actionnées lors de l'allumage initial du moteur.

La température du mélange est affichée à sa sortie des chambres.

### Postcombustion

La section de postcombustion consiste en une barre de pulvérisation qui injecte plus
carburant dans l'air (visualisé sous forme de cônes jaunes), ainsi qu'un
torche qui enflamme le mélange.

La température de l'air est affichée juste après la torche.

### Échappement

La dernière section indique la température finale des gaz d'échappement, ainsi que la
poussée produite par le moteur.

### Système de carburant du moteur

Entre les deux moteurs se trouve une représentation du système alimentant les deux moteurs en
carburant.

Il comprend la pile à combustible 1 avec sa quantité actuelle de carburant, ainsi que les deux
pompes de suralimentation en carburant. Les pompes sont colorées en rouge si elles sont désactivées.

> 💡 Le carburant dans le réservoir 1 n'est pas le carburant total restant, le réservoir 1 est
> constamment rempli à partir des réservoirs de carburant restants.

Juste après les pompes de suralimentation se trouve le robinet d'arrêt de carburant du moteur,
fermé si l’accélérateur respectif est en position OFF.

De là, le carburant est encore amplifié par une pompe et atteint les chambres de combustion.
Ces pompes sont contrôlées par les interrupteurs principaux du moteur.

De plus, deux soupapes et une autre pompe pour chaque moteur sont utilisées pour
alimentez éventuellement en carburant les barres de pulvérisation de postcombustion, ainsi que la
torche.

### Huile

Les moteurs utilisent de l'huile comme lubrifiant, liquide de refroidissement et fluide hydraulique
pour faire fonctionner les buses. Pour cela, les deux disposent d'un réservoir de 4 gallons d'huile.

En cas de fuite d'huile et d'épuisement des réservoirs, la pression nécessaire au fonctionnement des
buses chutera, et finalement le moteur subira des dommages graves et irréparables.

## Page Carburant

La page carburant fournit des détails sur le
[Système de carburant](../systems/engines_and_fuel_systems/fuel_system.md).

![Page Carburant, normale](../img/efb_fuel_normal.jpg)

Chaque réservoir est affiché avec son état de carburant individuel (le carburant restant mesuré en
lb).
Le réservoir en haut est la cellule 1, qui alimente les moteurs en carburant.

Les chiffres en haut à gauche indiquent le carburant total et le débit de carburant vers la gauche
et
moteur droit respectivement.

### Pompes

Les 6 pompes à carburant sont indiquées par des symboles de roue. Pour les cellules 4 et 6, les
symboles
indiquer de gauche à droite respectivement la pompe électrique et la pompe hydraulique.

### Couler

![Page Carburant, dumping](../img/efb_fuel_dump.jpg)

Le débit de carburant est indiqué par des tuyaux en pointillés. Une vanne fermée montre un rectangle
rouge,
bloquer l'écoulement dans le tuyau.

### Drapeaux

De plus, les drapeaux suivants peuvent être affichés dans le coin inférieur gauche :

* AAR ; la porte pour
[ravitaillement en vol](../systems/engines_and_fuel_systems/fuel_system.md#air-refueling-system)
est ouvert
* DUMP;
[déversement de carburant](../systems/engines_and_fuel_systems/fuel_system.md#fuel-dump-system)
est actif
* AUTO-XFER ; le système pour
[transfert automatique](../systems/engines_and_fuel_systems/fuel_system.md#transfer-sequence)
est actif (un système d'urgence en cas de faible niveau de carburant)

## Page Électricité

La page électrique fournit des détails sur le
[Système électrique](../systems/electrics.md).

![Page Électricité, normal](../img/efb_electrics_normal.jpg)

La moitié supérieure affiche les sources d'énergie : le générateur gauche et droit,
l'alimentation externe et la batterie. Les consommateurs constitués de bus se situent en bas
moitié.

### Fils

Les fils reliant les générateurs et les bus indiquent si et comment l'alimentation est fournie,
avec une couleur représentant la note :

* Rouge; Triphasé 115 V CA
* Vert; Monophasé 14/28 V CA
* Bleu; Monophasé 28 V CC

### Transformateurs

Les autotransformateurs convertissant entre différentes valeurs nominales sont indiqués par `A`
symboles (de couleur rouge si hors ligne ou endommagé). Les deux Transformateurs-redresseurs
fournissant une alimentation CC sont affichés de la même manière.

### Pouvoir

Les générateurs et les bus affichent leurs tensions et charges exactes dans le texte (la charge est
mesuré en Watt pour les générateurs et en Ampère pour les bus). De plus, le
les générateurs ont un remplissage horizontal noir indiquant la charge totale actuelle
par rapport à la charge nominale maximale (30 000 W).

De la même manière, les bus indiquent leur charge totale actuelle par rapport à la charge prévue.
charge maximale (les bus ne sont pas protégés, cela peut donc aller au-delà de 100 %).
De plus, les bus ont des barres verticales sur le côté droit visualisant le
écart par rapport à la tension cible. Le cadre idéal est au centre. Si le
la barre est en dessous du centre, le bus est en sous-tension. Au-dessus du centre signifie une
surtension.

### Générateurs

Les générateurs indiquent également les états de défaut, tels qu'une sous-tension, une surtension ou
sous-fréquence comme signaux d’alarme. Le chiffre au-dessus indique la pression d'huile dans
PSI entraînant les générateurs, produisant le régime indiqué dans le coin supérieur droit.

#### Contrôleur

La boîte entre les deux générateurs représente le contrôleur du générateur, en prenant soin
de synchroniser les générateurs et de gouverner le BUS TIE.

![Page Électricité, génération gauche hors ligne](../img/efb_electrics_left_offline.jpg)

La moitié supérieure montre l'écart de fréquence des générateurs en Hertz. Le
la barre horizontale l'affiche de -1 Hz à +1 Hz de gauche à droite, avec 0 Hz
étant au centre.

La moitié inférieure visualise la différence de phase entre les deux générateurs (en
degrés). Ainsi, les trois barres blanches placées à 0°, 120° et 240°
représentent respectivement la phase d'un générateur comme référence statique, tandis que le
les zones rouges montrent le décalage par rapport à cette référence par l'autre générateur.

Un indicateur **NO SYNC** indique que les différences entre les deux générateurs sont
encore trop grand. Si le drapeau n'est pas affiché, le contrôleur synchronise les deux
générateurs pour tenter de réduire les valeurs delta.

Si les différences de fréquence et de phase sont toutes deux proches de zéro, le
Le contrôleur permet de connecter le BUS TIE pour équilibrer la charge entre eux.

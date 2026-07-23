# Armes à feu

## Canon interne M61A1 Vulcain

![m61](../img/m61.jpg)

Le canon General Electric M61 Vulcan est finalement entré en guerre en tant que partie intégrante
du Phantom avec l'avènement du F-4E, avec le profil de nez et l'APQ-120
modifié pour s'adapter à l'arme. Transportant 639 cartouches dans le tambour interne, le
Le canon rotatif de style Gatling à six canons offre une cadence de tir sélectionnable par
l'utilisateur
de 4 000 à 6 000 coups par minute, délivrant une vitesse initiale supérieure à
3 450 pieds/s, avec obus incendiaire perforant et incendiaire hautement explosif
options disponibles. Utile dans les rôles air-air et air-sol, le Vulcan
a été utilisé pour quatre victoires confirmées par l'USAF au-dessus du Vietnam avec le F-4E.

Le gaz accumulé est évacué par l'air dynamique entrant dans la porte de purge du canon située sur le
nez du
l'avion. La porte est maintenue fermée par pression hydraulique et
s'ouvre automatiquement pour libérer le gaz du tir du canon. Elle se ferme une fois que
la pression du gaz est tombée en dessous d'un seuil ou que le canon est hors tension, par
exemple lors du changement de Master Arm ou lorsque tous les coups ont été tirés.

> 💡 Le processus de ventilation prend entre 10 secondes et 1 minute, selon le
> durée de la rafale.

> 🔴 AVERTISSEMENT : Ne faites pas tourner les moteurs tant que le personnel au sol travaille
> sur la porte. Il se fermera automatiquement avec force dès que le système hydraulique
> la pression est obtenue.

![ext_gun_door_open](../img/ext_gun_door_open.jpg)

### Emploi

Pour utiliser le M61, le
[Commutateur de sélection de station GUN](../cockpit/pilot/weapon_management.md#station-select-buttons)
doit être sélectionné, le
[Le bras principal](../cockpit/pilot/weapon_management.md#master-arm-switch) doit être
ON, et le
[Sélection du canon](../cockpit/pilot/weapon_management.md#head-up-display-indicators)
sur le Pinky Switch (Aft) doit être actionné. Cela allumera le voyant GUN sur
l'affichage tête haute.

Pour une utilisation air-air, le
[viseur optique](../cockpit/pilot/dscg_controls.md#sight-mode-knob) devrait être
sélectionné en mode A/A. En mode air-air, le viseur optique fonctionne comme un
[visée optique informatique principale (LCOS)](../systems/weapon_systems/lcoss.md),
manoeuvrant ainsi en élévation et en azimut par rapport à un radar verrouillé
cible, ou un réglage de portée par défaut de 1000' en cas de non-verrouillage. Avec un verrouillage,
la présentation de la barre de plage est relative à 6700' juste à gauche de la coche à
la position 1 heure, jusqu'à 1000' à la position 6 heures.

![radar_gun_lock](../img/radar_gun_lock.jpg)

Pour une utilisation air-sol, le viseur optique doit être sélectionné en mode A/G, le
[Bouton de mode de livraison](../cockpit/pilot/weapon_management.md#delivery-mode-knob)
doit être réglé en mode OFF ou Direct, et le
[réglage du mil de dépression de la vue](../cockpit/pilot/dscg_controls.md#reticle-depression-knob)
être saisi pour le profil d'attaque prévu. La dépression est définie relativement à partir du
Ligne de référence du fuselage (FRL). Tandis que la dépression abaissera le réticule
En altitude, il n'y a pas de dérive azimutale due au mouvement relatif de l'avion.

Le débit du canon est contrôlé par le
[Commutateur de débit](../cockpit/pilot/pedestal_group.md#rate-of-fire-switch) sur le
Panneau de piédestal et peut être sélectionné comme élevé (6 000 tours par minute) ou faible (4 000
tours par minute). Sur le panneau du socle se trouve également l'
[indicateur de cartouches restantes](../cockpit/pilot/pedestal_group.md#rounds-remaining-indicator).

Il convient de noter le
[Fonction d'effacement automatique](../cockpit/pilot/pedestal_group.md#auto-clear-switch) ; le
le canon tirera environ entre 5 et 11 coups à partir du point où le pilote
a relâché la gâchette pour effacer toutes les actions de verrou dans le canon ; ce spin-down
prend environ une seconde et l'arme ne peut pas tirer à nouveau pendant cette période.
opération. Alors que le panneau du socle porte le commutateur Auto Clear, ce commutateur
n'a aucun contrôle sur le canon interne M61A1 et ne peut que
désactiver le dégagement rond pour les installations de canons externes en nacelle.

<iframe width="560" height="315" src="https://www.youtube.com/embed/5MVEo8qQc9I?si=yz78SGRyx0gQgkp1"
title="F-4E Phantom Guide du canon air-air | DCS" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Dépression visuelle

Le canon est monté à 2,75° en dessous de la ligne de référence du fuselage (FRL) et
calibré par l'équipe au sol d'environ 0,75° à 1° pour harmoniser le canon à un
distance de 2250 pieds devant l'avion. Cet étalonnage a la balle
le flux vole le long de la ligne de visée radar (RBL) pour sa portée effective avec
effet maximum à 2250 pieds. Le point d'harmonisation s'aligne également avec le canon
croix (pipper déprimé de 35 mil, viseur CAGED).

![Schéma](../img/gun_calibration_schematic.jpg)

Pour l'emploi air-sol du canon interne, le viseur suivant
des dépressions doivent être utilisées.

| Altitude |          Vitesse | Angle de plongée | Dépression visuelle |
| -------: | -------------: | ---------: | ---------------: |
|  3000 pieds | 425 - 450 KCAS |   10 - 15° |    100 - 110 mil |
|  2500 pieds | 425 - 450 KCAS |   10 - 15° |      80 - 90 mil |
|  2000 pieds | 425 - 450 KCAS |   10 - 15° |           70 mil |
|  1500 pieds | 425 - 450 KCAS |   10 - 15° |      50 - 55 mil |
|  1000 pieds | 425 - 450 KCAS |   10 - 15° |      40 - 45 mil |

## Pods de canon externes

### SUU-16/A et SUU-23/A

![Pods SUU](../img/suupods.jpg)

Conçu pour fournir une capacité de canon aux avions qui ne les ont pas montés
en interne, et pour augmenter le tir direct disponible dans l'appui aérien rapproché
mission, les nacelles de canon SUU-16/A et SUU-23/A ont toutes deux été construites autour du M61A1
et
une charge de munitions de 1 200 cartouches. Les deux modules sont à taux fixe de 6 000 tours par
minute, et jusqu'à trois peuvent être installés et pilotés simultanément par le feu
système de contrôle; tandis que jusqu'à cinq peuvent être chargés à des fins de ferry, et
des images promotionnelles ont montré une telle configuration, seulement trois peuvent être
activées.

> 💡 Les pylônes intérieurs des ailes 2 et 8 ne sont pas câblés pour faire fonctionner les pods. Seul le
> la station centrale et les pylônes des ailes extérieures peuvent tirer avec les canons.

La principale différence entre les pods -16/A et -23/A réside dans leur méthode de
pouvoir; le premier utilisant un agencement de turbine à air dynamique pour entraîner son moteur,
tandis que
ce dernier est alimenté en interne. Cette différence a eu un effet sur
utilitaire - tandis que le -23/A pouvait être tiré à n'importe quelle vitesse, lui permettant ainsi
d'être
chargée sur un avion plus lent, la turbine à air dynamique du -16/A nécessitait un minimum
vitesse de tir de 300 nœuds, et n'a atteint sa performance optimale qu'au-dessus de 400
noeuds. Les deux pods ont une fonction d'effacement automatique pour plus de sécurité, ce qui
provoque des rondes
chargé dans la culotte pour être relâché dans le bac à munitions, ce qui implique
un délai momentané d'une à deux secondes avant de pouvoir tirer le pod
encore.

Avant de pouvoir tirer, les deux nacelles doivent d'abord faire tourner un moteur. Ce processus
prend environ 20 à 30 secondes et est lancé en sélectionnant le correspondant
[Bouton de sélection de station](../cockpit/pilot/weapon_management.md#station-select-buttons).

> 💡 Il n'y a aucune indication dans le cockpit indiquant si le moteur a déjà démarré
> complètement, alors assurez-vous de sélectionner la station avant d'engager des menaces.

### GPU-5

![Module GPU-5](../img/gpu5.jpg)

Inspiré du puissant canon GAU-8/A Avenger de l'A-10, ce module abrite le
petit frère GAU-13/A, canon à 4 canons. C'est l'un des plus puissants
canons jamais construits, fournissant 353 cartouches de 30 mm, tirant à une cadence de
2400 coups par minute. Assez pour environ 5 rafales rapides.

Le pod ne peut être monté que sur la station centrale et dispose d'un moteur qui tourne
temps d'environ une demi-seconde avant de pouvoir être utilisé. Grâce à un entraînement pneumatique
Unité installée à l'arrière, elle ne nécessite aucune alimentation externe et peut être
utilisé tout de suite.

### Emploi externe

<iframe width="560" height="315" src="https://www.youtube.com/embed/aUJxr-czk94?si=LK1lXwXPBlcYktua"
title="F-4E Phantom : Guide rapide des modules de pistolet air-sol | DCS" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

L'activation des modules de pistolet externes s'effectue en sélectionnant leurs
[boutons de sélection de station](../cockpit/pilot/weapon_management.md#station-select-buttons) respectifs,
et en plaçant le
[Bouton de mode de livraison](../cockpit/pilot/weapon_management.md#delivery-mode-knob)
en OFF ou Direct.
[Le bouton de sélection d'arme](../cockpit/pilot/weapon_management.md#weapon-selector-knob)
peut être dans n’importe quelle position autre que TV ou ARM, à moins que le mode CAGE ne soit
activé. Le
[paramètre d'effacement automatique](../cockpit/pilot/pedestal_group.md#auto-clear-switch)
souhaité doit être sélectionné, et
[Bras principal](../cockpit/pilot/weapon_management.md#master-arm-switch) réglé sur ON
pour activer le module. Sur le SUU-16, l'activation du Master Arm déploie le bélier
turbine à air.

> 💡 Pour les SUU-16/A et SUU-23/A, après avoir alimenté le gun-pod en utilisant le
> Bouton de sélection de station 20 à 30 secondes doivent s'écouler avant que le pod soit prêt à tirer.
> La mise hors tension du pod entraînera à nouveau un ralentissement progressif de son moteur.

Installés, les canons sont alignés le long de la ligne de référence du fuselage. Ainsi, avec
le [viseur optique](../cockpit/pilot/dscg_controls.md#sight-mode-knob) en mode air-air,
les balles tomberont en fonction du centre du réticule, tout comme le
canon principal- uniquement avec le décalage naturel de leur position respective de pylône,
permettant ainsi un tir naturel efficace, même s'il n'est affecté que par un tir modéré
augmentation du CEP qui en résulte. De la même manière, en mode air-sol, le SUU
les pods observent les mêmes performances par rapport au programme de dépression du réticule que
le canon interne, encore une fois, avec leurs décalages respectifs par rapport à la ligne médiane et
Augmentation du CEP.

Pour sécuriser les nacelles d'armes après le combat, avant de les désactiver
[Bras maître](../cockpit/pilot/weapon_management.md#master-arm-switch), le
Le commutateur [Auto Clear](../cockpit/pilot/pedestal_group.md#auto-clear-switch) devrait
être placé en position Auto Clear, la gâchette enfoncée momentanément et
le respectif
[Boutons de sélection de station](../cockpit/pilot/weapon_management.md#station-select-buttons)
poussé vers l'arrêt. Sur le SUU-16, cela fermera la turbine à air dynamique.

### Dépression de la vue externe

Pour l'utilisation air-sol des nacelles de canon externes, le viseur suivant
des dépressions doivent être utilisées.

| Altitude |          Vitesse | Angle de plongée | Dépression visuelle |
| -------: | -------------: | ---------: | ---------------: |
|  3000 pieds | 425 - 450 KCAS |   10 - 15° |      80 - 85 mil |
|  2500 pieds | 425 - 450 KCAS |   10 - 15° |           65 mil |
|  2000 pieds | 425 - 450 KCAS |   10 - 15° |           50 mil |
|  1500 pieds | 425 - 450 KCAS |   10 - 15° |           30 mil |
|  1000 pieds | 425 - 450 KCAS |   10 - 15° |      10 - 15 mil |

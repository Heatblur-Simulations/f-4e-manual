# Interface radar

Le système radar peut être configuré par le WSO avec deux panneaux sur la console gauche,
le panneau de commande du radar et le panneau du moniteur de commande.

Les retours radar sont affichés sur l'écran DSCG, tandis que le manche de commande manuelle
de l'antenne sur la console droite du cockpit WSO peut être utilisé pour faire fonctionner le radar.

<iframe width="560" height="315" src="https://www.youtube.com/embed/S_bIbU4Yoto?si=5SARcw1-VCX2tnGH"
title="DCS F-4E Air-Air I : premiers pas" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Panneau de commande du radar

![wso_radar_control_panel](../../img/wso_radar_panel.jpg)

_Pour une description détaillée du panneau
voir [WSO section centrale de la console
gauche](../../cockpit/wso/left_console/center_section.md#radar-set-control-panel)_

### Alimentation

![Bouton d'alimentation](../../img/wso_radar_power_switch.jpg)

| Nom | Descriptif |
|------|---------------------------------------------------------------------------------------------------------------------------------|
| OFF | Éteint le radar.                                                                                                               |
| TEST | Applique une tension pour contrôler l'alimentation du moniteur et fournit les fonctions [BIT-test](../../procedures/bit_tests/overview.md) 1 à 6. |
| STBY | L'alimentation appliquée au radar reste dans un état de veille sans transmission.                                                            |
| OPR | Le système est pleinement opérationnel.                                                                                                    |
| EMER | Annule les restrictions de temporisation, de pression et de température pour permettre le fonctionnement du radar.                                      |

La mise sous tension initiale de l'APQ-120 commence en plaçant le bouton d'alimentation du
radar sur TEST ou STBY (veille). Le cycle de préchauffage nécessite 3 minutes à partir de
la sélection de l'un ou l'autre réglage, et la confirmation de ce processus est affichée via
le Control Monitor Meter sur le panneau du moniteur ; après 30 secondes de mise sous tension,
la jauge affichera une valeur d'environ 250 Vdc ; à partir du moment où l'aiguille indique
cette valeur nominale, la procédure de préchauffage durera encore 2,5 minutes.

Après 3 minutes, le radar peut être placé en toute sécurité en OPR (Operate) pour
utilisation du radar, les tests BIT peuvent être effectués en mode TEST, ou le radar
peut être laissé en STBY pour la sécurité de l'équipage et des autres personnes au sol.

En cas de situation d'urgence nécessitant une mise en service immédiate du
radar, EMER peut être sélectionné ; voir la section
[Magnétron et Klystron](general_operation.md#magnetron-and-klystron) pour
les implications de cela.

### Portée

![Bouton de plage](../../img/wso_radar_range_switch.jpg)

Le bouton de contrôle de portée définit la portée du radar. Notez qu'il existe certains modes
dans lesquels les réglages de portée disponibles sont restreints ou forcés à un réglage
spécifique.

La portée actuelle du radar allumera le
[voyant de portée](../../cockpit/pilot/dscg_controls.md#range-lights) correspondant, ainsi
qu'affichera la valeur numérique sur l'écran DSCG en haut à gauche.

![pilot_dscg_range_lights](../../img/pilot_dscg_range_lights.jpg)

Les valeurs jusqu'à 50 nmi sont indiquées comme **Air-Intercept (AI)** et sont disponibles pour
le [Suivi automatique](air_to_air.md#track). Les valeurs 100 nmi et 200 nmi sont
disponibles pour le mode [Spotlight](air_to_air.md#spotlight) à la place.

### Contrôle de polarisation

![Commutateur de polarisation](../../img/wso_radar_polar_switch.jpg)

La polarisation de l'énergie radiofréquence peut être modifiée à l'aide du
contrôle de polarisation. En fonctionnement normal, le réglage LIN est utilisé, ce qui produit
une énergie RF (radiofréquence) polarisée linéairement dans la direction verticale par
rapport à l'antenne. Cela minimise les retours au sol, car de nombreux types de fouillis au
sol sont moins réfléchissants à l'énergie RF polarisée verticalement. Cependant, comme
l'antenne n'est pas stabilisée en roulis, une intensité de retour accrue peut être observée
lors du roulis de l'avion.

CIR 1 et CIR 2 sont des positions à polarisation circulaire. Les précipitations sont moins
réfléchissantes aux RF polarisées circulairement, de sorte que CIR 1 et CIR 2 peuvent aider
à minimiser le fouillis en cas de pluie ou de brouillard.

La polarisation est réglée à l'aide de la lame quart d'onde dans le cornet d'alimentation,
qui fait en sorte que les [émissions d'ondes continues](general_operation.md#klystron) soient
polarisées comme décrit ci-dessus. Cela rend uniquement le CIR 1 compatible avec le lancement
des [AIM-7 Sparrows](../../stores/air_to_air/aim_7.md), car l'antenne arrière du Sparrow ne
peut pas recevoir de RF polarisées dans le sens inverse des aiguilles d'une montre.

| Sélection | Polarisation de l'énergie RF | Guide AIM-7 |
|-----------|----------------------------------------------|----------------|
| LIN | Polarisée linéairement dans une orientation verticale | ✅ |
| CIR 1 | Polarisée circulairement dans le sens des aiguilles d'une montre | ✅ |
| CIR 2 | Circulairement dans le sens inverse des aiguilles d'une montre | ❌ |

> 💡 Seuls les modes LIN et CIR 1 sont utilisables avec le Sparrow, un Sparrow lancé
> en utilisant CIR 2 ne guidera pas.

### Commutateur de manœuvre

![Commutateur de manœuvre](../../img/wso_radar_maneuver_switch.jpg)

Le commutateur de manœuvre est utilisé pour spécifier la réponse du suivi aux
accélérations de la cible.

| Sélection | Descriptif |
|-----------|----------------------------------------------------------------------------------------------------|
| LOW G | Position par défaut. Limite les accélérations de suivi pour réduire la réponse aux contre-mesures et au fouillis. |
| HI G | Permet à la boucle de poursuite de répondre à n'importe quelle accélération.                                                |

HI G est forcé lorsque
[l'Acquisition automatique par ordinateur](air_to_air.md#computer-automatic-acquisition-mode-caa)
est utilisée.

### Commutateur de balayage

![Commutateur de balayage des barres](../../img/wso_radar_bar_scan_switch.jpg)

Le commutateur de balayage spécifie le nombre de barres d'élévation utilisées en recherche.

| Sélection | Descriptif | Couverture verticale totale (degrés) |
|-----------|--------------------------------------------------------------------|-----------------------------------|
| 1 barre | Balaie le long du plan radar.                                           | 6,7 (3,7 sans nutation) |
| 2 barres | Le balayage alterne entre 1,875 degrés au-dessus et en dessous du plan radar. | 10,45 |

Le balayage à 1 barre est automatiquement commandé lorsque MAP est sélectionné sur le
[Bouton de mode radar](#radar-modes-mode). Pour les conditions BST, AIR-GND et CAGE, la
position du commutateur de balayage n'est pas pertinente.

### Aspect

![Bouton d'aspect](../../img/wso_radar_aspect_knob.jpg)

Le bouton Aspect est utilisé pour fournir aux missiles
[Sparrow](../../stores/air_to_air/aim_7.md) un signal Doppler simulé lorsque
**aucun verrouillage** n'est réalisé, afin de faciliter un verrouillage sur speed-gate du
Sparrow lorsqu'il doit être tiré en ligne de mire (boresight). Lorsque le radar est en
poursuite, la vitesse de rapprochement calculée (ou réglée manuellement) est utilisée pour
régler un speed-gate étroit (±150 nœuds) autour de cette vitesse de rapprochement, pour que
le Sparrow effectue sa recherche une fois lancé.

Le bouton contrôle également le mode d'affichage de la sortie numérique DSCG pendant
que le radar est en poursuite.

Voir ci-dessous les réglages de l'affichage et des speed-gates pour les différentes positions
du bouton Aspect, avec Vc indiquant la vitesse de rapprochement sélectionnée pour le
speed-gate, où TAS est la vitesse vraie de l'avion.

| Sélection | Affichage DSCG | Réglage du speed-gate Sparrow (Vc) |
|-----------|------------------|---------------------------------|
| WIDE | Vitesse de rapprochement | Spectre entier |
| NOSE | Altitude | TAS + 450 ±150 nœuds |
| FWD | Aspect | TAS + 240 ±150 nœuds |
| AFT | Vitesse de rapprochement | TAS - 240 ±150 nœuds |
| TAIL | Cap | 0 ±150 nœuds |

* Vitesse de rapprochement : affichée en nœuds, les valeurs positives indiquant un
  rapprochement et les valeurs négatives un éloignement.
* Altitude : affichée en centaines de pieds (le dernier chiffre étant toujours zéro), par
  exemple 20 000 MSL serait affiché sous la forme 200.
* Aspect : angle de la queue de l'avion cible par rapport au tireur (soi-même) ; cela signifie
  que si la cible s'éloigne directement, l'aspect est de 0 degré, et s'il se dirige
  directement vers vous, de 180 degrés. La gauche est représentée par des valeurs négatives
  et la droite par des valeurs positives.
* Cap : le cap est affiché en degrés de 000 à 360, le dernier chiffre étant toujours zéro.

<iframe width="560" height="315" src="https://www.youtube.com/embed/zQ5IFHlr1tk?si=mvz_wU5nxxapIETS"
title="Angle d'aspect - Combat aérien de petite taille" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Gain du récepteur (RCVR GAIN)

![Bouton de gain du récepteur](../../img/wso_radar_receiver_gain.jpg)

Les potentiomètres RCVR GAIN empilés - FINE en haut et COARSE en bas -
offrent la possibilité d'ajuster le gain du récepteur.

FINE est utilisé pour les petits
ajustements et COARSE pour des ajustements plus importants. Pour plus d'informations, voir la
section [Contrôle du gain](general_operation.md#gain-control).

### Commutateur de poursuite

![Interrupteur de voie](../../img/wso_radar_track_switch.jpg)

Le commutateur de poursuite modifie les réglages de
[suivi de portée](air_to_air.md#range-track). La position par défaut est AUTO, qui effectue
un suivi de portée normal avec [Home on Jam](air_to_air.md#home-on-jam) si un brouillage est
détecté.

Dans le cas où un brouillage est détecté par erreur,
Home on Jam peut être désactivé en réglant le commutateur sur
AOJ OUT.

Si nécessaire, le suivi manuel de la portée peut être utilisé en réglant sur MANUAL,
auquel cas la position du bouton [MAN Vc](interface.md#manual-vc-man-vc) sera
utilisée pour définir la vitesse de rapprochement de la porte de poursuite.

### Bouton d'affichage

![Bouton d'affichage](../../img/wso_radar_display_knob.jpg)

Le DSCG peut afficher les retours en B-Scope ou en Plan Position Indicator (PPI) sur
l'écran.

Dans B-Scope, l'axe horizontal de l'écran indique l'azimut et
l'axe vertical représente la portée oblique.

En PPI, l'axe horizontal correspond à la distance à gauche et à droite de l'avion,
l'axe vertical représentant la distance le long de la trajectoire de l'avion.

Il existe également deux réglages de balayage NAR et WIDE ; NAR est un balayage étroit de
45 degrés et WIDE est un balayage complet de 120 degrés. Voir
[Recherche automatique](air_to_air.md#automatic-search) pour plus de détails.

Le réglage VI ordonne à l'écran de fournir un guidage de cap pour un profil d'interception
**Vis Ident (VI)** contre une cible verrouillée.

### Manuel Vc (MAN Vc)

![Bouton Vc manuel](../../img/wso_radar_man_vc.jpg)

Ce bouton à 12 positions est utilisé pour définir une vitesse de rapprochement pour le
[suivi manuel de la portée](air_to_air.md#range-track). Les deux positions dans le sens
inverse des aiguilles d'une montre (1, 2) définissent une **vitesse d'éloignement** de 100 et
200 nœuds respectivement. Les positions dans le sens des aiguilles d'une montre, de 0 à 9,
définissent une **vitesse de rapprochement** de 0 à 900 nœuds.

La fermeture (closing) fait référence à une cible dont la portée diminue, tandis que
l'ouverture (opening) concerne des cibles dont la portée augmente.

<iframe width="560" height="315" src="https://www.youtube.com/embed/kgLdXx9Ysjk?si=L1nsRS3YbTLJr1uK"
title="Taux de fermeture (Vc) - Combat aérien de petite taille" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Commutateur d'impulsion

![Commutateur à impulsions](../../img/wso_radar_pulse_switch.jpg)

Le commutateur d'impulsion définit l'impulsion et la fréquence de répétition des impulsions
pour le radar. Voir la section [Réglage d'impulsion](general_operation.md#pulse-setting) pour
plus d'informations.

En mode [AIR-GRD](#air-grd-air-to-ground-position) et en
[Acquisition automatique par ordinateur](air_to_air.md#computer-automatic-acquisition-mode-caa),
le commutateur se désactive automatiquement et une impulsion SHORT est commandée quel que
soit son réglage.

## Modes radar (MODE)

![Bouton de mode](../../img/wso_radar_mode_knob.jpg)

Les modes de fonctionnement spécifiques du radar dépendent du bouton de mode radar, mais aussi
de plusieurs autres conditions et commutateurs. Pour une description complète du
fonctionnement du radar, voir
[Fonctionnement du radar (général)](general_operation.md),
[Fonctionnement du radar (air-air)](air_to_air.md),
[Fonctionnement du radar (air-sol)](air_to_ground.md).

Cette section couvrira brièvement chacune des positions du bouton de mode radar et
renverra vers les sections pertinentes ci-dessous.

### Position BST (Boresight)

BST force le radar à entrer dans l'état
[boresight](air_to_air.md#boresight-and-cage-condition).

Ceci est utilisé lorsque
la cible est repérée visuellement ou qu'un [Sparrow](../../stores/air_to_air/aim_7.md)
doit être tiré sans suivi radar.

### Position RDR (Radar)

La position RDR met le radar en [Recherche automatique](air_to_air.md#automatic-search).

### Position MAP

La position MAP est identique à la position RDR et met le radar en
[Recherche automatique](air_to_air.md#automatic-search), à ceci près que la nutation est
désactivée et que le motif de recherche à 2 barres n'est pas disponible.

### Position AIR GRD (Air-sol)

La position AIR-GRD est similaire à la position boresight, avec les exceptions
suivantes :

* Angle Track est désactivé lors du suivi d'une cible.
* L'antenne est toujours fixée au boresight avec stabilisation de dérive.

### Position BEACON

BEACON peut être utilisé avec n'importe quelle position du bouton d'affichage autre que VI,
selon les besoins.

Il n'affiche pas les échos radar et écoute à la place les réponses de transpondeur d'un
équipement de balise spécifique.

### Position TV

Le réglage Mode Radar TV n'est pas utilisé sur les avions équipés du DSCG ; il est remplacé
par l'option d'affichage TV sur le panneau DSCG lui-même, et par l'option d'affichage TV dans
le poste de pilotage.

> 💡 Les missiles [AIM-7](../../stores/air_to_air/aim_7.md) se désaccordent et ne peuvent pas
> être réaccordés avec le bouton de mode radar en position TV.

### Voyant Skin Track (SKIN TRK)

Le voyant Skin Track s'allume lorsqu'un verrouillage obtenu automatiquement est
établi et maintenu par le radar. Cela coïncide avec l'allumage du symbole T sur
le panneau DSCG.

Si la cible est suivie manuellement, ou si une condition de suivi AOJ ou HOJ est effective,
le voyant ne s'allumera pas.

## Panneau du moniteur de commande FCS

![Panneau de contrôle FCS](../../img/wso_control_monitor_panel.jpg)

L'objectif principal du panneau du moniteur de commande est de donner accès aux
diagnostics intégrés de l'APQ-120.

De plus, le panneau accueille des commandes auxiliaires
pour le système - le commutateur Vc, le commutateur Stab, et le voyant de surveillance de
température.

### Voyant Coords

Ce voyant n'est pas utilisé sur l'APQ-120.

### Voyant Temp

Le voyant TEMP (<num>7</num>) fournit une indication visuelle d'une situation de surchauffe
dans les baies avioniques de l'APQ-120. Si le voyant s'allume, le radar doit être éteint
immédiatement pour éviter d'endommager l'équipement.

Si les circonstances exigent que le radar soit utilisé pendant un avertissement de
température, le voyant doit être surveillé pour détecter un allumage continu, et le radar
doit être éteint dès que possible.

### Bouton sélecteur de compteur

Un bouton rotatif à 16 positions (<num>1</num>) utilisé conjointement avec
l'interrupteur du compteur (<num>4</num>) pour tester
diverses tensions, courants et signaux générés par les circuits internes du radar,
indépendamment ou en conjonction avec le système Built-In-Test (<num>3</num>).

Chaque position a un double usage, associée à deux ensembles de valeurs ; lorsque
l'interrupteur du compteur est en position VOLT, l'anneau intérieur du bouton est actif et
délivre la tension spécifiée pour la position sélectionnée. En position SIGNALS,
c'est la valeur de courant ou de signal de l'anneau extérieur qui est testée.

### Compteur de contrôle

![Compteur de surveillance](../../img/wso_control_monitor_meter.jpg)

Le compteur de contrôle (<num>2</num>) affiche les tensions, courants et signaux relatifs aux
réglages actuels du bouton sélecteur de compteur (<num>1</num>), en conjonction avec
l'interrupteur du compteur (<num>4</num>), ou selon le réglage actuel du Built-In Test
(<num>3</num>).

Les tensions sont confirmées en commençant par la position -250 du bouton sélecteur avec
l'interrupteur du compteur en VOLT, et l'aiguille indiquera la région « 1 » de la jauge
environ trente secondes après la mise sous tension du radar, signifiant que la tension est
correctement délivrée. Après cette mise sous tension, le compteur de contrôle indiquera la
région « 1 » pour un fonctionnement nominal si les tensions délivrées sont correctes. La
position +35 fait exception à cette règle, la valeur de fonctionnement correct étant de 2,0
ou plus.

En mode SIGNALS, le courant cristallin RX1-RX4 fonctionne correctement avec un
retour dans la région XTAL.

Les EX1 et EX2 testent les cristaux de contrôle de fréquence, et sont également nominaux
lorsque XTAL est indiqué.

Pour le magnétron, testé en MAG, le fonctionnement en impulsion longue est confirmé par un
retour de 1,4 à 1,8, et le fonctionnement en impulsion courte est correct avec une valeur de
0,9 à 1,15.

KLY, qui teste l'émetteur CW, devrait indiquer une valeur de 0,25 à 1,25 en cas de
rayonnement correct.

TP 1 teste les verrouillages de température et de pression, et le compteur de contrôle
indique 1 lorsque les verrouillages sont fermés et fonctionnels.

TP 2 confirme la pression du guide d'ondes, et une valeur de 1 est correcte.

En LOB, l'aiguille du compteur se déplacera approximativement entre 1,5 et 2,8 en fonction de
la nutation de l'antenne.

Enfin, les sélecteurs LIN et CIR confirment le bon fonctionnement en polarisation linéaire et
circulaire ; ils n'enregistrent une valeur de 1 que pour une transmission d'énergie de
polarité verticale ou tournant dans le sens des aiguilles d'une montre. Autrement dit, ils ne
renvoient pas de valeur en mode impulsion CIR (sens inverse des aiguilles d'une montre).

### Bouton de test intégré APQ-120

![Bouton de test](../../img/wso_control_monitor_test_switch.jpg)

La confirmation du bon fonctionnement du système s'effectue à l'aide des différentes options
du panneau du moniteur de contrôle ; les modes de test spécifiques sont définis à l'aide du
bouton Test (<num>3</num>).

### Interrupteur du compteur

![Interrupteur du compteur](../../img/wso_control_meter_signals_switch.jpg)

Lié au bouton sélecteur de compteur, l'interrupteur à deux positions (<num>4</num>)
définit quelle valeur du bouton sélecteur de compteur est testée - VOLT pour les valeurs de
tension de l'anneau intérieur, SIGNALS pour les valeurs de courant et de signal de l'anneau
extérieur.

### Commutateur Vc

![Interrupteur Vc](../../img/wso_control_meter_vc_switch.jpg)

Avec les sélections 900 et 2700, le commutateur (<num>5</num>) est utilisé pour mettre à
l'échelle l'écart Vc tel qu'affiché sur les F-4E équipés du DVST.

> 💡 Avec le nouveau DSCG installé, le commutateur doit rester en position 2700 en
> permanence pour garantir une lecture correcte sur l'écran.

### Commutateur Stab

Le commutateur STAB (<num>6</num>) contrôle les modes de stabilisation en tangage et en
roulis de l'antenne. La position par défaut NOR (normale) maintient la stabilisation sur les
deux canaux, et la compensation de dérive du système INS est en outre appliquée dans des
modes spécifiques (AIR-GND).

En STAB OUT, la stabilisation en tangage, en roulis et de dérive INS est supprimée de
l'antenne radar.

DRIFT OUT maintient la stabilisation en tangage et en roulis, tout en supprimant
la compensation de dérive INS dans les modes qui l'utilisent.

## Digital Scan Converter Group

![Digital Scan Converter Group](../../img/wso_dscg_controls.jpg)

Le Digital Scan Converter Group (DSCG) fournit un système d'affichage intégré pour
le radar et les systèmes électro-optiques du F-4E. Le système est composé des
écrans des sièges avant et arrière, et est piloté par l'Indicator Control Unit (ICU),
qui effectue la conversion des signaux radar et vidéo, ainsi que l'application
des informations et de la symbologie de conduite de tir.

### Bouton de grille

Dans le coin supérieur gauche de l'écran se trouve un bouton qui
contrôle la luminosité de la grille du champ d'affichage.

### Voyant HOJ (H)

Le voyant HOJ dans le coin supérieur gauche de l'écran s'allume pour indiquer
que le radar est passé en fonctionnement HOJ de suivi d'angle, utilisant uniquement les
informations de portée et de taux de portée mémorisées si une condition de brouillage est
détectée.

### Échelle

Dans le coin supérieur droit de l'écran se trouve un bouton qui contrôle la luminosité
des échelles d'angle et d'élévation entourant le champ d'affichage DSCG.

### Voyant Track (T)

Le voyant Track dans le coin supérieur droit de l'écran s'allume
pour confirmer un verrouillage basé sur l'angle et la portée sur
une cible. Identique au voyant SKIN TRK. Voir [Track](air_to_air.md#track) pour plus
d'informations.

### Contraste (CONTR)

Le bouton de contraste (<num>1</num>) contrôle le contraste relatif de l'affichage DSCG.

### Portée (RNG)

Le bouton de portée (<num>2</num>) contrôle la luminosité du curseur de portée dans les modes PPI.

### Luminosité (BRT)

Le bouton de luminosité (<num>3</num>) contrôle la luminosité globale de l'affichage DSCG.

### Décalage (OFS)

Le bouton de décalage (<num>4</num>) contrôle la luminosité de la ligne du curseur de décalage
dans les modes PPI.

### Bouton de mode DSCG

Le bouton de mode DSCG (<num>5</num>) est utilisé pour sélectionner le mode actuel de l'affichage.

* OFF coupe toute alimentation de l'écran, cessant toute fonctionnalité DSCG.
* STBY (Standby) place le DSCG en mode préchauffage ; aucun affichage ne se produit pendant
  ce processus.
* DSCG TEST affiche un champ de test pour confirmer le bon fonctionnement de l'affichage. Le
  champ d'affichage DSCG montre un affichage de recherche avec huit nuances de gris pour
  confirmer le bon fonctionnement et le contraste. Avant d'entrer dans ce mode pour les
  tests, Range 10 doit être sélectionné pour un dimensionnement correct des champs ombrés.
* RDR BIT est un mode de test intégré qui fonctionne conjointement avec le radar
  pour l'étalonnage des signaux fournis par le radar avec l'ICU du DSCG.
* RDR est le mode opérationnel à utiliser avec l'APQ-120.
* TV est le mode d'affichage utilisé pour les armes EO (Maverick, Pave Spike) et le TISEO.

## Contrôleur manuel d'antenne

![Contrôleur manuel d'antenne](../../img/wso_antenna_hand_control_overview.jpg)

Le contrôleur manuel d'antenne est un joystick que l'on trouve uniquement dans le cockpit WSO
sur la console droite ; le manche s'intègre au radar pour effectuer le contrôle de position
en portée (avant et arrière) et en azimut (gauche et droite) du symbole d'acquisition sur
l'écran radar dans les modes air-air, ainsi que le contrôle de direction de l'autodirecteur
et du capteur EO avec Maverick et Pave Spike.

De plus, le joystick comprend la molette de contrôle d'élévation de l'antenne (<num>2</num>),
qui contrôle l'angle d'élévation de l'antenne, affiché via le stroboscope EL sur l'écran
DSCG ; ce balayage en élévation est limité, en mouvement haut comme bas, à 60 degrés.

À l'emplacement de l'index sur le contrôleur manuel d'antenne se trouve le commutateur
d'action (<num>3</num>) ; un interrupteur à gâchette à deux positions, désigné demi-action
au premier cran, et pleine action lors d'un engagement complet. En modes air-air, la
demi-action déclenche la visibilité du curseur de portée, permettant un alignement correct
de la portée avec un retour de cible pour le verrouillage automatique, ou la sélection des
vitesses MAN Vc requises pour un verrouillage manuel. Avec un encadrement approprié et un
réglage correct du curseur de portée, la pleine action tente le verrouillage automatique, ou
initie le suivi manuel en angle de la cible visée.

Le bouton Challenge (<num>1</num>) est utilisé pour lancer une interrogation
[IFF](../identification_systems.md#interrogator-systems).

Voir la section [AGM-65 Maverick](../../stores/air_to_ground/missiles/maverick.md) pour
des détails sur la façon dont le manche est utilisé pour contrôler l'arme, et le chapitre
[Pave Spike](../weapon_systems/pave_spike/overview.md) pour son interaction respective.

## Indicateur de portée VISIDENT

![Plage Indicateur VISIDENT](../../img/wso_range_indicator.jpg)

L'indicateur de portée radar est utilisé pour les profils d'interception VID à courte
portée, fournissant une information de portée jusqu'à deux miles et une information de taux
de portée en deçà de 9000'. L'information est confirmée comme étant précise au radar une
fois que l'indicateur de portée passe à 9.

La jauge fonctionne dans les modes d'affichage VI, B NAR et B WIDE ; l'indicateur ne
fonctionne pas en modes air-sol.

<iframe width="560" height="315" src="https://www.youtube.com/embed/aWU3PS4AcgQ?si=py1V-jdKNHoqK6OG"
title="DCS F-4E Air-Air III : VISIDENT" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Bouton air-air

![Bouton air-air](../../img/wso_air_to_air_light.jpg)

Le bouton Air-Air est un bouton et un voyant ayant pour fonction principale de
confirmer l'entrée en mode CAGE.

Lorsque l'équipage souhaite désengager le mode CAGE,
le WSO peut appuyer sur le voyant pour quitter le mode CAGE et revenir aux
réglages actuellement sélectionnés sur le Radar Control Set.

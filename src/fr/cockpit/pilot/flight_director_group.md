# Groupe de directeurs de vol

![FDG](../../img/pilot_flight_director_group_overview.jpg)

Le groupe directeur de vol fournit au pilote tous les instruments nécessaires pour piloter le
avion même
dans une situation de mauvais temps. Il contient l'altimètre radar (<num>1</num>), la vitesse
anémométrique
et Mach
Indicateur (<num>2</num>), le sélecteur de système de référence (<num>3</num>), le
Directeur d'attitude
Indicateur (<num>4</num>), le feu de balisage (<num>5</num>), le barométrique
Altimètre (<num>
6</num>), l'indicateur d'angle d'attaque (<num>7</num>), la situation horizontale
Indicateur (<num>
8</num>), l'indicateur de vitesse verticale (<num>9</num>), l'attitude de veille
Indicateur (<num>
10</num>) et le panneau de sélection des fonctions de navigation (<num>11</num>).

## Altimètre radar

![RadAlt](../../img/pilot_radar_altitude.jpg)

Informations relatives à la hauteur du terrain jusqu'à 5 000 pieds, fonctions jusqu'à 30
degrés d'angle d'inclinaison ou 35 degrés de tangage. La rotation dans le sens horaire du
commutateur de commande de fonction (<num>1</num>) en bas à gauche de l'indicateur alimente l'appareil ;
suite
la rotation règle le pointeur d’avertissement de basse altitude à la hauteur souhaitée. En dessous
du
l'altitude réglée, le voyant (<num>2</num>) en bas à droite s'allume.
Un autotest, lancé en appuyant sur le commutateur de commande de fonction, affiche 35 pieds.

## Indicateur de vitesse et de Mach

![pilot_air_speed_mach_indicator](../../img/pilot_airspeed_mach_indicator.jpg)

L'indicateur combiné de vitesse et de nombre de Mach affiche les lectures de vitesse en dessous de
200 nœuds et inclut les nombres de Mach sur l'anneau extérieur à grande vitesse. L'indicateur
utilise un
pointeur unique sur une échelle de vitesse fixe, marquée de 80 à 850 nœuds, avec un mouvement
échelle de Mach (<num>2</num>) présentant de Mach 0,4 à 2,5. Une paire de référence mobile
marqueurs
est disponible avec le bouton (<num>4</num>) sur la face de la jauge, avec référence de vitesse
disponible entre 80 et 195 nœuds, et l'indicateur d'indice Mach pouvant être
réglé entre les régions de 225 nœuds et de 850 nœuds par rapport à l'anémomètre. L'aiguille (<num>
1</num>)
et
l'anneau intérieur font référence à la vitesse en nœuds. L'aiguille (<num>2</num>) et la
bague extérieure
font référence à
l'échelle de Mach. Les deux se déplacent dynamiquement en fonction de la vitesse. La zone (<num>3</num>)
fait référence à
l'échelle de vitesse avant que l'échelle de Mach ne commence.

## Indicateur d'angle d'attaque

![AoAInd](../../img/pilot_angle_of_attack_indicator.jpg)

En tirant les informations de vent relatif de la sonde
[AoA](../../systems/flight_controls_gear/flight_controls.md#angle-of-attack-system)
adjacente au train d'atterrissage,
l'indicateur
[AoA](../../systems/flight_controls_gear/flight_controls.md#angle-of-attack-system)
offre une
référence conditionnelle pour la croisière (7,9 unités), l'approche
(19,2 unités) et le décrochage (30 unités). En raison de la proximité de
la sonde [AoA](../../systems/flight_controls_gear/flight_controls.md#angle-of-attack-system)
avec la
trappe du train avant
et de la perturbation du flux d'air qui en résulte lorsque le train est sorti, l'incidence réelle de
l'avion [AoA](../../systems/flight_controls_gear/flight_controls.md#angle-of-attack-system)
est environ 1 unité plus élevée que celle indiquée, et la valeur ON
SPEED [AoA](../../systems/flight_controls_gear/flight_controls.md#angle-of-attack-system)
est à peu près
5
nœuds plus lente que la valeur donnée.

Lorsque l'alimentation de l'indicateur est hors ligne en raison de la configuration du système
électrique ou de
dommages, un indicateur OFF apparaîtra dans la fenêtre sur le devant de la jauge. L’indicateur AoA
contient
interrupteurs qui allument les lumières de l’indexeur et actionnent le vibrateur d’avertissement de
décrochage.

## Sélecteur du système de référence

![RéfSel](../../img/pilot_reference_switch.jpg)

Bascule entre l'[ensemble de navigation inertielle](../../systems/nav_com/ins.md)
et gyroscope à déplacement [AN/AJB-7](../../systems/weapon_systems/arbcs.md)
pour obtenir des informations sur les attitudes. Lorsqu'il est réglé sur PRIM, l'ensemble de
navigation inertielle fournit
données d'azimut et d'attitude vers l'ADI ; quand on est allumé
STBY, [AN/AJB-7](../../systems/weapon_systems/arbcs.md) fournit ce
informations. Les données d'azimut alimentent également le HSI
et [BDHI](../wso/upfront_indicators.md#bearing-distance-heading-indicator-bdhi) (arrière
poste de pilotage).
De plus, les détails d'attitude sont envoyés au système de conduite de tir.

> 💡 Les informations inertielles nécessitent le panneau de commande du navigateur inertiel
> commutateur pour être sur NAV.

Lors de la transition entre STBY et PRIM, des informations d'attitude immédiates peuvent
montrer des girations inhabituelles sur l'indicateur du directeur d'attitude en raison de la
érection. Des virages rapides (au-dessus de 15° par minute) peuvent temporairement perturber la
précision
informations de cap et synchronisation automatique des informations de cap. Si le titre
les informations ne se resynchronisent pas après un vol droit et à nouveau de niveau pendant
environ 20 secondes, une synchronisation manuelle est requise. Cela peut être fait en volant
en vol rectiligne et en palier pendant environ 20 secondes et en tournant
le [bouton de sélection de mode](../pilot/right_console/aft_section.md#mode-selector-knob) sur le
position SYNC à ressort pendant environ 3 secondes.

## Indicateur du directeur d'attitude

![ADI](../../img/pilot_attitude_director_indicator.jpg)

Comprend une sphère d'attitude, un clignotant, des barres de direction, un avion miniature,
pointeur de pente de descente, drapeaux et bouton de compensation de pas. Il affiche le pitch,
l'inclinaison et
cap à partir du système de référence sélectionné et permet le réglage du pas via le
bouton de garniture. Le clignotant s'appuie sur un gyroscope de
le système [AN/AJB-7.](../../systems/weapon_systems/arbcs.md) Le
les barres de direction offrent des conseils au directeur de vol pour l'interception de cap,
navigation et les approches [ILS](../../systems/nav_com/vor_ils.md). La pente de descente
le pointeur fournit
informations de guidage vertical lors d’une approche [ILS](../../systems/nav_com/vor_ils.md).

## Lampe de balise de marquage

![Lampe MB](../../img/pilot_marker_beacon_lamp.jpg)

Cette lampe s'allume chaque fois que vous survolez une station de balise de repérage,
à condition que le système [VOR/ILS](../../systems/nav_com/vor_ils.md) ait été activé.
De plus,
un signal audio est diffusé via le [système d'interphone](../../systems/nav_com/intercom.md).

La lampe peut être tournée pour atténuer et poussée pour tester.

## Indicateur de situation horizontale

![HSI](../../img/pilot_hsi.jpg)

Présente une vue horizontale de la situation de navigation par rapport à l'avion,
indiqué par un symbole d'avion et une ligne de pression indiquant le cap actuel de l'avion.

### Boutons

Le bouton en bas à gauche (<num>1</num>) est disponible pour saisir le cap magnétique souhaité,
et le
Le bouton Course Set (<num>4</num>) en bas à droite est utilisé pour entrer
[VOR](../../systems/nav_com/vor_ils.md) parcours d'alignement de piste radial ou entrant pour
affichage précis de l'écart.

### Carte boussole

Un élément rotatif (<num>5</num>), dépendant de l'entrée de cap AJB-7, affiche un
rose des vents.

Il fournit une référence pour le cap de l'avion par rapport au nord magnétique.

### Pointeur de roulement

Indique le relèvement magnétique d'une aide à la navigation sélectionnée (Nav Comp, VOR, TACAN ou
ADF).

### Flèche de cap et indicateur de déviation

La direction vers laquelle pointe la flèche (<num>6</num>) peut être sélectionnée manuellement en
le bouton de parcours en modes VOR/ILS et TAC (comme indiqué sur les rouleaux de parcours).

En mode HDG, il indique le cap magnétique de l'avion, et en mode NAV COMP, il pointe
à la trajectoire magnétique au sol de l'avion.

L'indicateur de déviation fournit un retour visuel
sur l'écart de l'avion par rapport à la trajectoire sélectionnée. Il montre un écart par rapport à
un TACAN
cours
en mode TAC ou écart par rapport à un radial [VOR](../../systems/nav_com/vor_ils.md) en VOR/ILS
mode
lorsque VOR est réglé, et déviation par rapport à un signal d'alignement de piste ILS en mode
VOR/ILS lorsque ILS est
accordé.

### Indicateur de destination

Indique si le cap actuel mènera vers ou loin du
station accordée, fonctionnant avec les entrées TACAN et VOR.

### Marqueur de cap

Le marqueur de cap (<num>3</num>) peut être réglé manuellement sur le cap souhaité pour fournir
le vol
Directeur
avec signaux de direction dans tous les modes sauf NAV COMP.

En mode NAV COMP, il affiche la commande de direction vers la cible sélectionnée,
en tenant compte de la dérive du vent.

### Indicateur de portée

Affiche la distance (<num>2</num>) jusqu'à la station TACAN sélectionnée ou la destination NAV COMP.

### Voyants de mode

Plusieurs voyants (<num>7</num>) indiquent le mode de navigation actif :

* VOR : Indique que le mode VOR/ILS est sélectionné et qu'une fréquence VOR est sélectionnée.
* ILS : Indique que le mode VOR/ILS est sélectionné et qu'une fréquence ILS est sélectionnée.
* TAC : indique que le mode TACAN est actif.
* NAV : S'allume lorsque le mode Ordinateur de navigation est utilisé.
* MAN : indique que le mode de cap est sélectionné.
* UHF : Signifie que le mode ADF est actif.
* TGT : S'allume lors d'opérations de bombardement à décalage radar spécifiques.

## Altimètre

![Altimètre](../../img/pilot_baro_altitude.jpg)

Un altimètre de style contre-pointeur, avec des millièmes dans la fenêtre du compteur (<num>4</num>)
et
Incréments de 100 pieds autour du visage (<num>5</num>). L'altimètre a une plage absolue de
80 000 pieds. L'altimètre comprend une échelle barométrique (<num>3</num>) pour le réglage local
pression avec le bouton (<num>1</num>) sur l'indicateur. Fonctionne soit en électrique (normal
mode de fonctionnement) ou pneumatique (STBY), commutable via un interrupteur à trois positions à
ressort
commutateur (<num>2</num>) étiqueté RESET et STBY. Lorsqu'il est maintenu en RESET pendant plus de 3
secondes, le système sera réinitialisé et sortira du mode STBY.

## Indicateur de vitesse verticale

![VVI](../../img/pilot_vertical_velocity_indicator.jpg)

Fournit le taux de montée ou de descente via le système de pression statique référencé dans
des milliers de pieds par minute.

## Indicateur d'attitude de veille

![StbyAtt](../../img/pilot_standby_attitude_indicator.jpg)

Le SAI fonctionne indépendamment du groupe des directeurs de vol, fournissant des lectures
raisonnablement précises (à six degrés près) pendant 9 minutes si l'alimentation du système est
coupée et que le drapeau OFF est visible. Les marquages de pas sont indiqués tous les 5 degrés,
tandis que les marquages au rouleau sont par gradations de 10 degrés. Le rouleau est illustré à
travers
360 degrés, tandis que le tangage est limité par des arrêts à 92 degrés en montée et 78
degrés en plongée pour éviter le blocage du cardan. Le SAI peut être déverrouillé en appuyant sur le
bouton et
paré
en le tournant.

## Panneau de sélection des fonctions de navigation

![Panneau de sélection des fonctions de navigation](../../img/pilot_nav_function_selector.jpg)

Les commandes affichent la présentation sur l'ADI et l'HDI en fonction des valeurs sélectionnées sur
les deux boutons ; à gauche se trouve le bouton de relèvement/distance (<num>1</num>) et à droite
le
Bouton de sélection de mode (<num>2</num> et <num>3</num>). Le bouton de relèvement/distance
détermine la source du
informations de navigation pour le HSI et l’ADI. Le bouton de sélection de mode fournit
contrôle de la présentation des diverses informations affichées sur le HSI et
ADI. Le bouton de sélection de mode comprend un interrupteur intégré marqué FD, pour Flight
Directeur. Cet interrupteur engage ou désactive les barres de direction de tangage et d'inclinaison
sur
la DJA ; la position OFF a l'interrupteur aligné verticalement.

### Bouton de roulement/distance

| Nom | Descriptif |
|---------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [VOR](../../systems/nav_com/vor_ils.md)/[TAC](../../systems/nav_com/tacan.md) | Relèvement magnétique et relatif par rapport à la station [VOR](../../systems/nav_com/vor_ils.md) et à la plage [TACAN](../../systems/nav_com/tacan.md) affichée sur HSI. |
| [TAC](../../systems/nav_com/tacan.md) | Relèvement magnétique et relatif et distance jusqu'à la station [TACAN](../../systems/nav_com/tacan.md) affichées sur le HSI.                                     |
| ADF/[TAC](../../systems/nav_com/tacan.md) | Relèvement magnétique et relatif par rapport à la station ADF et plage [TACAN](../../systems/nav_com/tacan.md) affichée sur HSI.                                     |
| NAV COMP | Relèvement magnétique et relatif et portée fournis par l'ordinateur de navigation (c'est-à-dire les points de cheminement) sur HSI.                                                   |

### Fonctions d’affichage du bouton de sélection de mode

![ModeSelectorKnobTable](../../img/modeselectorknobtable.jpg)

## Lampe VOR

![VOR Lampe](../../img/pilot_vor_lamp.jpg)

S'allume pour indiquer que le système [VOR](../../systems/nav_com/vor_ils.md) est prêt
et
en réception.

Autrement dit, une fréquence [VOR](../../systems/nav_com/vor_ils.md) valide a été sélectionnée, un
le signal est
reçu et les boutons de navigation ont été tournés
à [VOR](../../systems/nav_com/vor_ils.md)
navigation.

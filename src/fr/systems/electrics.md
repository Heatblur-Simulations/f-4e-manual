# Électricité

Le F-4E tire son énergie électrique d'une paire de générateurs CA entraînés par le [J79
moteurs](../systems/engines_and_fuel_systems/engines.md), une paire de transformateurs AC-DC et un
batterie pour fonctions électriques
avec les moteurs hors ligne. De plus, le Phantom
II peut recevoir de l'énergie électrique externe
provenant du personnel au sol. La disposition à deux générateurs, alors que
normalement
fonctionnant de manière indépendante, comprend un lien de bus qui peut relier les deux bus ensemble
pour tirer l'énergie d'un seul générateur en cas de panne.

<iframe width="560" height="315" src="https://www.youtube.com/embed/7FK2KzCHk1E?si=9gBRVQutut4lDa3K"
title="Systèmes électriques et d'éclairage F-4E | DCS Monde" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> 💡 L'[EFB](../dcs/efb.md#electrics-page) fournit une page Électricité, donnant des informations
> détaillées sur le système en cours de vol.

## Générateurs

Les deux générateurs sont entraînés hydrauliquement par la pression d'huile fournie par le moteur
respectif.
Ils fournissent une alimentation CA triphasée, visant 115 V à 8 000 tr/min. Chaque générateur est
capable de gérer
la charge de l'avion entier à elle seule, évaluée à 30 000 W.

### Principe

![animation](../img/simple_3_phase_generator_anim.gif)

### Régulateurs

Les deux générateurs sont régulés pour fournir 150 ± 2,5 V sur les 3 phases. De plus, si un
générateur tombe en panne
pour fournir la tension cible, des protections contre les sous-tensions et les surtensions sont
activées, ce qui met
le générateur respectif hors ligne pour éviter d'endommager les systèmes.

### Contrôleur

Un système de contrôleur surveille et ajuste les deux générateurs pour permettre leur
synchronisation.
Par conséquent, les deux générateurs doivent tourner à la même fréquence et au même décalage,
afin que les signaux des 3 phases correspondent.

Le système démarre lorsque l'erreur de fréquence des générateurs est inférieure à 6 Hz et que les
phases sont
135° ou moins les uns des autres.

Une fois la fréquence et les phases alignées, les générateurs sont synchronisés et le contrôleur
permet le fonctionnement en parallèle des deux générateurs, en équilibrant la charge entre eux.
Ceci est réalisé grâce au **BUS TIE**.

### Commutateurs de commande de générateur

![GenCtl](../img/pilot_generator_switches.jpg)

Une paire de commutateurs de commande du générateur se trouve sur la console de droite, un pour
chaque moteur. Ces
trois interrupteurs de position - ON (avant), OFF, ON externe (arrière) - contrôlent l'état de
chaque
générateur respectif. En cas de panne possible du générateur, sélectionner OFF pour
le générateur que l'on pense être hors ligne amènera le bus électrique à fournir de l'électricité
à partir du générateur restant, vers l'autre moitié du système électrique. Le paramètre Externe
activé est utilisé
à des fins de manutention au sol lorsqu'il est connecté à une alimentation externe, et fournit de
l'énergie électrique à tous
instruments, à l’exception du CNI et du AFCS.

### Voyants du générateur

![GenInd](../img/pilot_generator_lights.jpg)

Trois indicateurs d'avertissement se trouvent sur le panneau indicateur du générateur : LH GEN OUT,
RH GEN OUT et BUS TIE OPEN. L'avertissement GEN OUT correspondant s'allumera
en cas de panne du générateur en question. L'indication BUS TIE OPEN est
la reconnaissance qu'un seul générateur fonctionnel fournit de l'énergie à
l'avion entier. En cas de panne de générateur, le Master Caution
s'allumera également. Cependant, en cas de panne des deux générateurs, aucun voyant GEN OUT ne
s'allumera.

## Batterie

L’avion est équipé d’une batterie nickel-cadmium d’une capacité d’environ 11 Ah.

La batterie est toujours alimentée et connectée au Battery Bus. Certains systèmes cruciaux,
tels que la lumière EJECT ou le projecteur blanc sont connectés à ce bus et donc disponibles
même sur un avion froid ou après perte des deux générateurs.

La batterie peut être utilisée pour alimenter le système DC. Les bus de ce système sont conçus pour
28 V
tandis que la batterie ne peut généralement fournir qu'environ 26 V, voire moins s'il reste moins de
capacité.

Pendant les opérations normales, le système DC est alimenté en énergie par les générateurs et le
la batterie est à la place rechargée.

## Système de bus

![schéma_du_système_électrique_manuel](../img/manual_electric_system_diagram.jpg)

La batterie et les générateurs alimentent plusieurs bus qui acheminent ensuite le courant vers les
systèmes concernés.

Le système de bus se compose de trois groupes :

- Système CA
  - Groupe principal
    - Bus principal gauche 115 V CA
    - Bus principal gauche 28 V CA
    - Bus principal gauche 14 V CA
    - Bus principal droit 115 V CA
    - Bus principal droit 28 V CA
  - Groupe d'instruments
    - Bus instrument 115 V CA
    - Bus instrument 28 V CA
    - Bus instrument 14 V CA
    - Bus voyant d'avertissement 28 V CA
    - Bus voyant d'avertissement 14 V CA
- Groupe système CC
  - Bus principal 28 V CC
  - Bus essentiel 28 V CC
  - Bus armement 28 V CC
  - Bus CC de batterie

Les trois bus 115 V fonctionnent sur courant alternatif triphasé, provenant directement des
générateurs.
Les bus AC fonctionnant à basse tension (28V et 14V) sont monophasés et alimentés par des
autotransformateurs
qui transforment le courant alternatif triphasé 115 V des générateurs jusqu'à la tension requise.

Les deux bus de voyants d'avertissement sont alimentés directement via les bus d'instruments
respectifs.

L'alimentation du système DC est fournie par les générateurs via deux transformateurs-redresseurs,
convertissant le 115V AC triphasé en 28V DC monophasé.

Les systèmes AC et DC disposent tous deux d'un BUS TIE qui permet à l'autre générateur
d'alimenter les deux circuits en cas de panne d'un générateur.

> 💡 Chaque générateur est capable de fournir suffisamment de charge pour alimenter l'ensemble de l'avion.

### Interrupteur d'alimentation au sol des instruments

![InstrumentGroundPowerSwitch](../img/wso_ground_test_control_panel.jpg)

Alimentation provenant d'une source externe vers les bus d'instruments (115/200 volts CA, 28 volts
CA et 14 volts CA), peut être fournie par l'interrupteur d'alimentation au sol des instruments
(<num>1</num>) (si
les interrupteurs du générateur sont réglés sur EXT ON), trouvé sur le mur de droite dans le
cockpit arrière. Une fois que l'alimentation électrique externe est coupée ou qu'un moteur
le générateur se met en ligne, il s’éteindra.

## Disjoncteurs

Depuis les bus, l'alimentation est d'abord acheminée via les disjoncteurs avant
d'atteindre les systèmes réels.

> 💡 En raison des limitations du moteur, les CB du cockpit WSO ne sont actuellement pas accessibles.

La plupart des disjoncteurs sont placés dans la fosse WSO de chaque mur, à l'exception
d'un panneau dans la fosse pilote, abritant les disjoncteurs des gouvernes de vol
et des systèmes cruciaux similaires.

### Panneau pilote

![pilot_cb_panel](../img/pilot_circuit_breakers.jpg)

Situé sur la paroi droite du cockpit du pilote, ce panneau contient
sept disjoncteurs responsables des gouvernes de vol et
d'autres systèmes importants pour l'exploitation sûre de l'avion.

- AIL Feel-Trim (<num>1</num>)
- STAB Feel-Trim (<num>2</num>)
- Frein de vitesse (<num>3</num>)
- Train d'atterrissage (<num>4</num>)
- Volets (<num>5</num>)
- Commandes de trim (<num>6</num>)
- Trim du gouvernail (<num>7</num>)

### Panneau d'éclairage

![pilot_light_cbs](../img/pilot_light_cb.jpg)

Caché derrière un faisceau de câbles à droite du panneau télélumineux, dans le cockpit du Pilote,
se trouvent deux disjoncteurs contrôlant les lumières.

Celui du haut (<num>1</num>) est responsable de l'alimentation des lumières principales des
instruments, tandis que
le disjoncteur inférieur (<num>2</num>) alimente tous les voyants et voyants d'avertissement.

### Panneau CB 1

![WSO Panneau CB 1](../img/wso_cb_panel_1.jpg)

Section avant du mur droit du cockpit WSO.

Possède les disjoncteurs pour toutes les stations, l'armement et le système d'arme.

### Panneau CB 2

![WSO Panneau CB 2](../img/wso_cb_panel_2.jpg)

Section centrale du mur droit dans le cockpit WSO.

Principalement responsable du fonctionnement du moteur et de l’hydraulique.

### Panneau CB 3

![WSO Panneau CB 3](../img/wso_cb_panel_3.jpg)

Section arrière du mur droit du cockpit WSO.

Contient des disjoncteurs pour les fonctions auxiliaires, telles que l'antigivrage ou le crochet
d'arrêt.

### Panneau CB 4

![WSO Panneau CB 4](../img/wso_cb_panel_4.jpg)

Section arrière du mur gauche du cockpit WSO.

Commandes principales de l'alimentation provenant de tous les bus, de l'ordinateur de vol et du
module de ciblage.

### Panneau CB 7

![WSO Panneau CB 7](../img/wso_cb_panel_7.jpg)

À côté du palonnier droit dans le cockpit WSO.

Caché derrière un capot, ce panneau abrite tous les disjoncteurs des équipements ECM et brouillage.

## Pannes et distribution d’énergie de secours

En cas d'avarie de l'avion et de perte du générateur gauche et/ou droit, ainsi que
du bus principal 28 volts CC, il existe plusieurs systèmes différents qui sont inopérants pour
le
bus respectif.

### Générateur gauche sorti - Attache de bus ouverte

Si le générateur de gauche cesse de fonctionner, les systèmes suivants ne fonctionneront pas :

| _**Systèmes critiques**_ | _**Systèmes non critiques**_ |
|------------------------|------------------------------------------------|
| Système anti-givre | AN/ARW 77 (Utilisé pour tirer des AGM-12 Bullpup) |
| Système antidérapant | Lumière anti-collision (un filament) |
| Allumage après combustion | DSCG |
| INS Chauffage | ECM Pods |
| Phare d'atterrissage | Refroidissement de l'équipement (par exemple Pave Spike) |
|                        | Feux de fuselage |
|                        | Éclairage de la console du cockpit avant |
|                        | Projecteurs d'instruments rouges pour cockpit avant (DIM) |
|                        | Viseur optique informatique principal |
|                        | Transformateur 28V gauche |
|                        | Pompe de surpression de carburant gauche |
|                        | Tir de missile à gauche |
|                        | Puissance du missile à gauche |
|                        | Transformateur redresseur gauche |
|                        | N° 4 Pompe électrique de transfert de carburant |
|                        | Canon à nez |
|                        | Radars |
|                        | Caméra à lunette radar |
|                        | Projecteurs de console rouges |
|                        | Puissance du missile à droite |
|                        | Réglage du siège |
|                        | Guidage AGM-45 Shrike |
|                        | Désignateur de cible (Pave Spike) |
|                        | Lampe utilitaire |
|                        | Alimentation secteur CA |
|                        | Feu aile et arrière DIM |
|                        | WRCS Alimentation |

### Générateur de droite sorti - Attache de bus ouverte

Si le générateur de droite cesse de fonctionner, les systèmes suivants ne fonctionnent pas :

| _**Systèmes critiques**_ | _**Systèmes non critiques**_ |
|---------------------------------|-----------------------------------------------|
| Chauffage Pitot Airspeed | ADF |
| Chauffage de sonde AOA | Garniture de sensation d'aileron |
| Réchauffeur Pitot Bellmouth | Interconnexion de gouvernail d'aileron |
| Chauffage et ventilation du cockpit | Système d'alerte radar ALR-46 |
| Indicateur de quantité de carburant | Encodeur d'altitude |
| IFF | Feu anti-collision (un filament) |
| Pointeur de cap ci dans le cockpit arrière | Récepteur radar APR-36/37 |
| TACAN | APX 80 IFF air-air |
| VOR : Pointeurs de roulement | Puissance d'armement |
|                                 | Pilote automatique |
|                                 | Récepteur auxiliaire |
|                                 | CADC |
|                                 | ECM Pods |
|                                 | Lumières de formation |
|                                 | Éclairage des instruments du cockpit avant |
|                                 | Caméra de visée |
|                                 | Projecteurs de prise de ravitaillement en vol (IFR) |
|                                 | Commande de rampe moteur gauche |
|                                 | No.6 Pompe de transfert de carburant électrique |
|                                 | Jauge d'oxygène |
|                                 | Altimètre radar |
|                                 | Commande de rampe moteur droit |
|                                 | Transformateur 28V droit |
|                                 | Pompe de suralimentation droite |
|                                 | Transformateur redresseur droit |
|                                 | Augmentation de la stabilité |
|                                 | Feu de taxi |
|                                 | Détection de température du pare-brise |
|                                 | Feu d'aile et arrière BRT |

### Sortie principale du bus CC 28 V

Si le bus principal 28 volts CC cesse de fonctionner, les systèmes suivants ne fonctionnent pas :

| _**Systèmes critiques**_ | _**Systèmes non critiques**_ |
|---------------------------------------|------------------------------------------|
| Antidérapant | Lumières ACM IN-RANGE et SHOOT |
| Relais de liaison de bus (voyant BUS TIE OPEN allumé) | ADF |
| Chauffage et ventilation du cockpit | Interconnexion du gouvernail d'aileron |
| Décharge de carburant interne à l'aile | Enregistreur vidéo aéroporté (AVTR) |
| Feux d'atterrissage et de taxi | Distributeur de contre-mesures ALE-40 |
| Direction de la roue avant | Vibrateur altimètre |
| TACAN | Récepteur radar APR-36/37 |
| Indicateur de virage et de dérapage (cockpit arrière) | APX 80 A/A IFF |
|                                       | Crochet d'arrêt (opération de montée uniquement) |
|                                       | Portes AUX Air |
|                                       | Récepteur AUX |
|                                       | Libération d'armes conventionnelles |
|                                       | Caméras de documentation de combat |
|                                       | DSCG |
|                                       | ECM Contrôle |
|                                       | ECM Pods |
|                                       | Moteur à cloche variable |
|                                       | Contrôle du refroidissement des équipements |
|                                       | Fuselage, Anti-Collision et Feux arrière |
|                                       | Caméra de visée |
|                                       | Viseur optique informatique principal |
|                                       | Pompe de surpression de carburant gauche |
|                                       | Tirs de missiles |
|                                       | No.4 Pompe électrique de transfert de carburant |
|                                       | No.6 Pompe électrique de transfert de carburant |
|                                       | Canon à nez |
|                                       | Compresseur pneumatique |
|                                       | Radars |
|                                       | Altimètre radar |
|                                       | Élimination de la pluie |
|                                       | Caméra à lunette radar |
|                                       | Pompe de suralimentation de carburant droite |
|                                       | Commande de trim de gouvernail/de cloche |
|                                       | Frein de vitesse |
|                                       | Bras de verrouillage central pour armes spéciales |
|                                       | Lumières de sélection de station et de sélection de station |
|                                       | Indicateur de position du stabilisateur |
|                                       | Désignateur de cible (Pave Spike) |
|                                       | Alimentation électrique |
|                                       | Puissance de l'enregistreur VGH |
|                                       | Puissance d'indentation Walleye |
|                                       | Feux d'avertissement (DIM) |
|                                       | WRCS Alimentation |

### Alimentation par batterie uniquement

Si seule l’alimentation par batterie est disponible, les systèmes suivants fonctionneront toujours :

| _**Systèmes critiques**_ | _**Systèmes non critiques**_ |
|--------------------------------------------------------|--------------------------------------------|
| Indicateur AOA | Tous les magasins Largage EMER |
| Indicateurs EGT | Générateur de tonalité auditive AOA |
| Lumière d'éjection | Contrôle du carburant |
| Indicateur d'attitude EMER | Puissance du robinet de carburant |
| Détection d'incendie et de surchauffe du moteur (fonctions de test) | Projecteurs d'instruments du cockpit avant (BRT) |
| Transfert de carburant de l'aile externe (Contrôle) | Récepteur de garde |
| Contrôle des volets/lattes | KY-28 |
| Indicateur de position des volets/lattes | Carénage de missile |
| Indicateur de quantité de carburant | Largage de missiles |
| Ravitaillement en vol | Indicateur de position de buse |
| ILS : CDI, indicateurs de pente de descente, audio, balise de marquage | Largage de la station hors-bord |
| Interphone | Coffre-fort de verrouillage central pour armes spéciales |
| Transfert de carburant interne à l'aile (Contrôle) | Déverrouillage d'armes spéciales |
| Contrôle du train d'atterrissage | Contrôle du trim |
| Indicateur de position du train d'atterrissage |                                            |
| Allumage principal gauche et droit |                                            |
| Garniture de sensation de stabilisateur |                                            |
| VOR : CDI, TO-From et Audio |                                            |
| Projecteur blanc |                                            |

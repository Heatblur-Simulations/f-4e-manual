# Groupe de directeurs de vol

![pilot_flight_director_group](../../img/pilot_flight_director_group_overview_numbered.jpg)

Une navigation précise dans le parcours est assurée par
le groupe des directeurs de vol, qui comprend l'ordinateur du directeur de vol (<num>1</num>),
l'Indicateur de situation horizontale
(HSI) (<num>2</num>) ainsi que le panneau de sélection des fonctions de navigation (<num>3</num>),
l'Indicateur
directeur d'attitude
(ADI) (<num>4</num>), dans le cockpit avant, et l'
Indicateur de cap de distance de relèvement (BDHI) (<num>5</num>) avec le commutateur de sélecteur
de mode de navigation (<num>6</num>)
dans le cockpit arrière.

![wso_nav_mode_selector](../../img/wso_flight_director_group_small_overview.jpg)

## Panneau de sélection des fonctions de navigation

![pilot_nav_function_selector](../../img/pilot_nav_function_selector.jpg)

Situé sur le tableau de bord du cockpit avant, le panneau de sélection des fonctions de navigation
comporte deux boutons :
un bouton de sélection de relèvement/distance et un bouton de sélection de mode.
Le bouton de sélection de mode est empilé sur le commutateur du directeur de vol.

### Bouton de sélection de distance de relèvement (BRG/DIST)

Le bouton de sélection de distance de relèvement (<num>1</num>) définit le pointeur de relèvement et
l'indication de portée affichés sur le HSI.
Les positions sont VOR/TAC, TAC, ADF/TAC et NAV COMP.

En mode VOR/TAC, le relèvement magnétique et relatif à la station [VOR](vor_ils.md)
et la portée jusqu'à la station [TACAN](tacan.md) sont fournis sur le pointeur de relèvement
et l'indicateur de portée du [HSI](../../cockpit/pilot/flight_director_group.md#horizontal-situation-indicator).

En mode TAC, le relèvement magnétique et relatif ainsi que la distance jusqu'à la station TACAN
sélectionnée s'affichent.

En mode ADF/TAC, le relèvement magnétique et relatif par rapport à la station ADF sélectionnée et
la portée de la station TACAN s'affichent.

Et en mode NAV COMP, le relèvement et la portée magnétiques et relatifs sont fournis pour
la destination définie dans l'ordinateur de navigation.

### Bouton de sélection de mode (MODE) et commutateur de directeur de vol

Le bouton de sélection de mode (<num>3</num>) contrôle les affichages d'informations restants sur
le HSI (bouton extérieur), ainsi que les barres de direction de pas et d'inclinaison sur l'ADI
(bouton intérieur
(<num>2</num>)
étiqueté FD). Le bouton de sélection de mode fonctionne indépendamment du pointeur de relèvement et
de l'indicateur de portée, et les positions du sélecteur sont [VOR/ILS](vor_ils.md), [TAC](tacan.md), NAV COMP et HDG.
Les modes de navigation définis par ce bouton seront indiqués par un message éclairé lorsque le
les voyants du tableau de bord sont allumés ; les messages-mots de mode disponibles sont TAC
(TACAN), NAV
(ordinateur de navigation), [UHF](uhf.md) (ADF), MAN (entrée HDG), ILS (atterrissage aux instruments
système) et TGT (cible). TGT indique que le WSO a fourni une cible
entrée et appuyé sur TGT sur le panneau de commande du curseur.

Le commutateur du directeur de vol fait basculer les indices de pilotage en tangage
et en inclinaison de l'ordinateur du directeur de vol, visibles sur
le [ADI](../../cockpit/pilot/flight_director_group.md#attitude-director-indicator). Sélection de
DÉSACTIVÉ
supprime ces barres de la vue.

En VOR/ILS, si une fréquence VOR est sélectionnée,
le bouton HSI Course Set est utilisé pour définir le radial VOR. Une fois
réglé, l'indicateur d'écart HSI affiche l'écart actuel par rapport au parcours sélectionné.
Si une fréquence ILS a été sélectionnée, le signal du localisateur sera affiché sur l'indicateur de
déviation.

Le mode TACAN présente des informations de navigation relatives à la balise TACAN actuellement
sélectionnée.
Pour fournir des informations complètes, le commutateur relèvement/distance doit être réglé sur TAC.
La flèche de parcours HSI et la fenêtre de sélection de parcours sont réglées à l'aide du bouton
Course Set pour
le cours TACAN souhaité. Une fois réglés, l'indicateur de déviation HSI et le symbole de l'avion
fournir l'affichage descendant par rapport au cap défini, avec un maximum
déviation de ± 5 degrés. Le bouton HSI Heading Set est utilisé pour définir un
Cours TACAN souhaité pour présentation du pilotage en inclinaison sur l'ADI. Comme le pilotage en inclinaison
est basé sur la position du marqueur de cap, s'il n'est pas réglé correctement, la direction
d'inclinaison sur l'ADI ne sera
pas correcte pour intercepter le cap souhaité. Un indicateur To-From s'affiche lorsque le sélecteur
de mode
est en mode TACAN ou VOR/ILS lorsque l'un ou l'autre est accordé et reçu ; une fois
le cap intercepté, l'indication indique si le cap en cours amène l'
avion vers ou depuis la station accordée.

Le mode NAV COMP affiche la trace magnétique au sol sur la flèche de cap du HSI et dans la fenêtre
de sélection de cap du HSI, par rapport au point de destination actuel de l'ordinateur de navigation.
La barre de pilotage en inclinaison de l'ADI fournit les informations de pilotage pour diriger
une approche vers le cap de commande.

Avec le mode HDG actif, la flèche de cap HSI et la déviation sont asservies à la ligne de foi
et au cap magnétique de l’avion. La fenêtre de sélection de cours HSI affiche le
le cap magnétique actuellement sélectionné, qui est ajusté à l’aide du bouton Heading Set.
Les informations de cap fournies sont utilisées pour la commande de pilotage en inclinaison de l'ADI.

## Indicateur de situation horizontale (HSI)

![pilot_horizontal_situation_indicator](../../img/pilot_hsi.jpg)

![HSI](../../img/hsi.jpg)

L'indicateur de situation horizontale affiche une vue en plan descendant de la navigation actuelle,
avec des indications fournies par rapport à la position sélectionnée du sélecteur de mode
de navigation. Il interagit étroitement avec plusieurs aides à la navigation comme VOR, TACAN, ADF,
et l'ordinateur de navigation de l'avion (NAV COMP).

Le pointeur de relèvement et l'indicateur de distance (<num>2</num>) sur le HSI affichent le
relèvement et la distance jusqu'à l'aide à la navigation sélectionnée via le bouton de sélection
de distance de relèvement.
Le sélecteur de mode de navigation régit la fonctionnalité du marqueur de cap,
flèche de cap et l'indicateur d'écart de cap (<num>6</num>), qui comprend une flèche aller-retour.
Ces deux commandes – le sélecteur de distance de relèvement et le sélecteur de mode de navigation –
ont
un impact direct sur l’éclairage des voyants de mode spécifiques sur le HSI.

La carte boussole (<num>5</num>) dans le HSI est pilotée par l'entrée de cap du système AJB-7. Il
tourne
pour aligner le cap magnétique de l'avion directement sous la ligne de foi en haut du
instrument, en supposant que le signal reçu est précis et fiable.

Le pointeur de relèvement indique le relèvement magnétique d'une station VOR, TACAN ou NAV COMP
donnée,
en fonction de la sélection du commutateur BRG/DIST. Si la carte boussole fournit de bonnes
informations,
ce relèvement est également relatif. Cependant, s'il y a des imprécisions dans le cap magnétique,
pour naviguer vers la destination sélectionnée, l'avion ne doit pas être dirigé en le centrant
la flèche sur la ligne de foi, mais en suivant le cap indiqué par la flèche en utilisant
le compas magnétique. Si un signal UHF (ADF) est réglé, le pointeur de relèvement indique
systématiquement
le cap en termes relatifs.

Le marqueur de cap de commande constitue une référence de cap souhaitée pour le directeur de vol.
Pour obtenir une direction correcte, le marqueur doit être réglé manuellement dans tous les modes
sauf Nav Comp (puis
il est automatiquement défini). Les indices de pilotage sont visibles sur la barre de pilotage en inclinaison de l'ADI.

La déviation de l'indicateur de déviation dans les modes VOR et TACAN indique la déviation
de l'avion par rapport au parcours sélectionné (visible sur les rouleaux de parcours et la
flèche de parcours).
Cela indique à quelle distance se trouve l'avion de la route sélectionnée. 2,5 degrés par point, au
maximum
jusqu'à 5 degrés.

![Déviation de cap](../../img/hsi_course_deviation.jpg)

En mode ILS, le HSI affiche l'écart par rapport au signal du localisateur. Cette indication est plus
précise,
car l'aiguille est plus sensible aux écarts dans ce mode. Notamment, cette lecture est indépendante
du parcours sélectionné, fournissant un retour direct sur l'alignement de l'avion avec le ILS
chemin d'approche.

## Indicateur du directeur d'attitude (ADI)

![pilot_attitude_director_indicator](../../img/pilot_attitude_director_indicator.jpg)

![Schéma ADI](../../img/adi_scheme.jpg)

L'ADI fournit un pilotage par commande pour intercepter les caps sélectionnés, [TACAN](tacan.md)
stations, pistes, radiales [VOR](vor_ils.md) ou destinations de l'ordinateur de navigation.
L'instruction de pilotage en inclinaison est présentée à l'aide de la barre de pilotage en
inclinaison, qui peut faire référence à des angles jusqu'à 35 degrés, à 90 degrés de déviation
de cap. Toute erreur de cap inférieure à cette valeur produira une correction d’inclinaison
inférieure à 35 degrés. Si une interception rapide ou un angle d'inclinaison supérieur à 35 degrés
est souhaité, la direction d'inclinaison doit être ignorée pendant le virage.

Le système initie une interception en ligne droite d'environ 50 degrés vers la trajectoire souhaitée,
à suivre jusqu'à ce que l'avion se trouve à moins de 15 degrés de celle-ci. Au-delà de ce point, il
passe
à une approche asymptotique pour s’aligner sur la piste. Pour une interception plus rapide, il
pourrait être nécessaire
ignorer le signal de direction d'inclinaison.

![Interception de direction d'inclinaison](../../img/bank_steering_intercept.jpg)

Lorsque le bouton Heading Set a été utilisé pour entrer le cap cible correct,
la présentation d'interception est précise dans un champ de 60 degrés d'un parcours TACAN,
ou 90 degrés pour un radial VOR. De plus, un pointeur de pente de descente est fourni
pour l’indication de la position relative de l’alignement de descente lors d’une approche ILS.

> 💡 Le Heading Marker doit être aligné manuellement avec le cap souhaité (sauf en mode NAV COMP)
> pour garantir un guidage correct des inclinaisons. Cependant, en raison de la dérive du vent, cette inclinaison
> ne peut pas toujours maintenir l'avion précisément sur une trajectoire TACAN ou VOR. Dans de tels scénarios,
> des ajustements manuels pour la correction du vent sont nécessaires pour que le réglage du marqueur de cap maintienne
> le bon cours.

Au démarrage de l'ADI, un drapeau d'avertissement OFF s'affichera jusqu'à ce que le gyroscope
AN/AJB-7 soit aligné.
Cela peut également apparaître en raison d'une perte de puissance ou d'une panne de signal. Le
drapeau ne s'affiche pas si un système
la défaillance se produit en dehors de l’AN/AJB-7.

## Indicateur de cap de distance de relèvement (BDHI)

![wso_bearing_distance_heading_indicator](../../img/wso_bdhi.jpg)

L'indicateur de cap de distance de relèvement (BDHI)
affiche les informations de navigation à l'aide de deux aiguilles, appelées pointeurs n°1 et n°2,
qui reçoivent des entrées contrôlées par le sélecteur de mode de navigation WSO.

Lorsque la position supérieure est sélectionnée sur [TACAN](tacan.md)/ADF/UHF, le pointeur n°1
indique le relèvement UHF, et le pointeur n°2 indique le relèvement TACAN. Si
il n'y a pas de signal TACAN, les deux pointeurs indiquent le relèvement ADF.

Avec la position médiane sélectionnée - [VOR](vor_ils.md)/TAC, le pointeur n°1 indique
le relèvement VOR, le pointeur n°2 indique le relèvement TACAN et l'indicateur de portée
(<num>3</num>)
indique la distance jusqu'à la station TACAN. En l'absence de signal TACAN,
les deux pointeurs indiquent la station VOR.

En position basse, NAV COMP, le pointeur n°1 indique le relèvement par rapport aux
coordonnées cibles de l'ordinateur de navigation, et le pointeur n°2 indique la trace magnétique
au sol. L'indicateur de portée indique la distance par rapport aux coordonnées de la cible.

# INS (Inertial Navigation System) AN/ASN-63

L'AN/ASN-63 INS fournit l'équipage du F-4E et la livraison d'armes intégrées
système avec position, vitesse, attitude et cap précis en temps réel
information. Lorsque le système est aligné dans son étendue la plus précise
En mode gyrocompas, l'INS est précis à 3 milles marins par heure de cercle
probabilité d'erreur (CEP).

> 💡 Cela signifie qu'après une heure de vol, la probabilité d'une erreur
> en précision est étalée de telle sorte que dans 50% des cas elle est soit inférieure, soit
> au-dessus de 3 nm.

## Plateforme de mesure inertielle

![wso_inertial_system_panel](../../img/wso_ins_panel.jpg)

Le système utilise une plate-forme de navigation inertielle à quatre cardans (roulis extérieur,
tangage, roulis intérieur, azimut), les deux cardans de roulis offrant une redondance permettant
d'éliminer le blocage de cardan lors de l'alignement du cardan roulis extérieur/azimut.

Installés sur la plate-forme se trouvent une paire de gyroscopes à deux axes G-200, avec le
axe du gyroscope aligné pour la rotation sur l'axe nord-sud tandis que le gyroscope inférieur
s'aligne
pour la rotation est-ouest ; la détection de couple dans chaque gyroscope suit les axes
perpendiculaires -
ergo, le gyroscope haut détecte la rotation est/ouest, tandis que le gyroscope bas détecte
rotation nord/sud. De cette façon, la rotation dans les trois dimensions est
représenté. Les gyroscopes flottent et leur bon fonctionnement ne peut avoir lieu que
une fois que le fluide a atteint la température de fonctionnement (160 degrés F) ; le système est
Contrôle efficace de la température sur toute la plage de fonctionnement en altitude du
Phantom. Une série de coupleurs magnétiques de précision assurent un mouvement de localisation,
tandis que les capteurs d'accélération fonctionnent dans un champ électromagnétique séparé
effectuer la capture réelle des données à partir des déplacements des gyroscopes.

Le long de la plate-forme, placés orthogonalement (à des positions respectives de 90 degrés), se
trouvent un
trio d'accéléromètres A-200D. Ces accélérateurs, flottés de la même manière vers le
gyroscopes, avec une disposition similaire de coupleurs et de sélecteurs de déplacement pour
fournir une capture de vitesse. Augmenter la précision de ces évaluations est la
inclusion d'un diapason dont la résonance élimine efficacement tout
frottement statique dans l'ensemble de capture de mouvement.

![manuel_ins_diagramme](../../img/manual_ins_diagram.jpg)

<iframe width="560" height="315" src="https://www.youtube.com/embed/JVzSWqVzbKk?si=c5tjmYIAc-I5xYS3"
title="Retour aux sources - INS, dérive et navigation" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Ordinateur de navigation et distribution des signaux de sortie

Les signaux de mouvement capturés respectifs des gyroscopes et des accéléromètres
sont amplifiés dans l'ordinateur de navigation LN-12D, qui effectue ensuite le relevé terrestre
intégration de référence. Le LN-12D compense toutes les longitudes et peut
suivre efficacement jusqu'à 80 degrés de latitude, où la mécanique
Les limites du calcul de la tangente par rapport à l'équateur sont trop élevées pour le
appareil.

L'AN/ASN-63 fournit des informations aux autres systèmes du Phantom à partir du
OSDU, ou unité de distribution de signal de sortie. L'OSDU fournit la vitesse sol,
vitesse nord-sud et est-ouest, vitesse totale, stabilisée par inertie
altitude, angle de montée, cap inertiel réel, trajectoire au sol et angle de dérive. Le
WRCS reçoit le cap vrai inertiel, la trajectoire au sol, l'angle de correction de dérive et
angle de dérive de son ordinateur balistique. L'angle de dérive est capturé pour
le [BDHI](../../cockpit/wso/upfront_indicators.md#bearing-distance-heading-indicator-bdhi),
HSI et FDC. L'angle de correction de dérive est également fourni au radar et à LCOSS.

## Options d'alignement

![options_d'alignement_manuel](../../img/manual_ins_alignments.jpg)

Le LN-12 dispose de trois modes d'alignement au démarrage de l'avion : BATH, Heading Memory
(HDG MEM) et alignement du gyrocompas. Avant d'effectuer un alignement, STBY
Le système de référence doit être sélectionné, le panneau de commande de l'ordinateur de navigation
doit être
tourné sur STBY et son commutateur de mise à jour de position doit être sélectionné sur NORMAL.
Locale
la variation magnétique doit être inscrite sur le compteur de variation, et la position
le compteur doit être réglé sur la latitude et la longitude locales. Cela améliorerait grandement
accélérer l'alignement du gyrocompas. De plus, l'alignement ne doit pas être effectué avec
les ailes dans leur position repliée, comme la vanne de flux magnétique qui assure
la synchronisation de la boussole sera de 60 degrés en dehors de la position normale.

l'INS comprend également une option de mise à jour de la position en vol, si l'équipage
notez l’écart brut par rapport aux repères d’emplacement connus.

### Indications

Le panneau INS comporte deux voyants lumineux : HEAT (<num>4</num>) et ALIGN (<num>2</num>).

Le voyant HEAT est actif
dans n'importe quel mode d'alignement (y compris l'alignement grossier en mode STBY), ce qui
signifie que
le système chauffe. Il s'éteint après environ 110 secondes, indiquant
que les gyroscopes ont atteint la température opérationnelle de 160 degrés Fahrenheit.

Le voyant ALIGN, fonctionnel exclusivement en mode ALIGN, signale la fin
d’alignement. Un voyant ALIGN fixe indique qu'un alignement BATH (rapide) a été effectué.
atteint. À condition que le système n'ait rencontré aucune erreur et que les gyroscopes aient été
préchauffé en mode STBY (indiqué par le voyant HEAT éteint), le système
procédera à un alignement du gyrocompas. Un voyant ALIGN clignotant signifie
l'achèvement d'un alignement du gyrocompas ou d'un alignement de la mémoire de cap.

### Meilleur cap vrai disponible

La position STBY doit être placée momentanément pour éviter un no-go INS.
Une fois réglé sur ALIGN (le voyant HEAT peut être ignoré), le voyant ALIGN s'allumera
régulièrement après environ 75 secondes, indiquant que l'alignement du BAIN est prêt. Une fois à
BAIN,
l'INS est précis à environ 5 milles marins et demi par heure CEP, bien que
des inexactitudes plus élevées peuvent être observées. Une fois BATH atteint, le mode NAV peut être
sélectionné
et l'avion a volé avec la mise en garde ci-dessus.

### Alignement de la mémoire de cap

Cette option devient accessible si l'alignement a été préalablement stocké et
l'avion est resté stationnaire. Pour y accéder, sélectionnez HDG MEM (<num>1</num>) situé
sous la garde rouge sur le panneau de commande avant de faire la transition avec le bouton INS
de OFF à ALIGN. Cette méthode d'alignement minimise le temps d'alignement, offrant
une probabilité d'erreur circulaire relative (CEP) à la fin optimale de BATH (5,5
milles marins), voire un alignement du gyrocompas (3 milles marins) si
l'alignement précédent s'est produit au cours des 2 dernières heures.

Pour accéder au mode d'alignement accéléré HDG MEM, la protection doit être levée et
l'interrupteur actionné vers le haut et l'interrupteur de mode INS placé sur ALIGN jusqu'à ce que
l'ALIGN
le voyant commence à clignoter. Ensuite, l'INS peut être placé en mode NAV. Si le temps le permet,
Le mode STBY peut être sélectionné avant de passer à ALIGN pour permettre un chauffage correct du
gyroscopes (qui passent par le cycle éclairage/arrêt comme ci-dessus).

> 💡 Le cap peut être stocké dans le
> [éditeur de mission](../../dcs/mission_editor.md#ins-reference-alignment-stored).

### Alignement du gyrocompas

La précision maximale du système est obtenue en permettant à l'INS d'effectuer un alignement
complet par gyrocompassage. Cette méthode permet aux gyroscopes de trouver la référence de nord
vrai la plus précise possible, mais peut impliquer des quantités importantes de
temps - et temps encore plus long en raison d'une variation magnétique inexacte ou manquante
l'entrée de réglage avant de mettre l'INS sous tension. À titre d'exemple, pour une erreur de cap
compas d'un degré, le temps nécessaire pour atteindre une précision maximale sur le
système est
environ cinq minutes, ce qui atteint une précision de ± 10 minutes d'arc
alignement, donnant les 3 milles marins de déviation par heure susmentionnés. Le
temps minimum pour effectuer un alignement du gyroscope une fois BATH ou HDG
L'alignement du niveau MEM est obtenu en 50 secondes supplémentaires, alors qu'un temps normal
l'alignement prend environ 5 minutes. Si l'avion est aligné à 70 degrés de
latitude ou plus, il faut prévoir un délai supplémentaire.

Pour effectuer l'alignement du gyrocompas, il est nécessaire de garder l'INS en mode STBY
jusqu'à ce que le voyant HEAT s'éteigne. Passer à ALIGN pendant que les lumières sont toujours
allumées
empêche d'obtenir un alignement complet du gyrocompas, ce qui entraîne uniquement le BAIN
processus en cours d’exécution. La durée de la phase de chauffage dépend du
température ambiante. Le système chauffe à une vitesse d'environ 20 °F par
minute, atteignant une température de fonctionnement de 160°F. Une fois que le système atteint
sa température de fonctionnement, 50 secondes supplémentaires sont nécessaires jusqu'à ce que le
HEAT
la lumière s'éteint. Après la transition vers ALIGN, le voyant s'allumera
régulièrement après 75 secondes, signalant la fin du BAIN initial
alignement, déclenchant le processus de gyrocompassage. Une fois l'alignement du gyrocompas
se termine, l'indicateur ALIGN clignotera, indiquant que le système a atteint
alignement complet. Pendant le gyrocompassage (lorsque le voyant d'alignement est allumé
en continu), le mode NAV peut être activé à tout moment, bien que la précision optimale ne soit
atteinte que
lorsque le voyant ALIGN clignote.

Tout autre temps disponible avant de déplacer l'avion peut être passé en ALIGN pour
augmenter encore la précision du système.

### Alignement d'urgence en vol

En cas d'erreur d'attitude significative ou de panne de la référence d'attitude STBY,
un alignement d'urgence en vol de l'INS peut être exécuté. Cela peut être
indiqué par le voyant NAV SYS OUT LAMP allumé. L'avion doit maintenir une ligne droite
et vol en palier, avec le sélecteur du système de référence réglé sur STBY. Une fois dans ce
configuration, le bouton de mode INS doit être commuté sur OFF, puis sur STBY pendant une durée
de 15 secondes. Ensuite, après un intervalle de 15 secondes, remettez le mode sur NAV et
reprendre le vol droit et en palier. Le processus de réinitialisation du sélecteur de référence sur
PRIM
peut être effectué environ après 40 secondes, bien que le temps d'alignement précis soit
non spécifié.

> 💡 La précision de l'attitude dans cet alignement est
> en fonction de la régularité avec laquelle l'avion a volé pendant la période d'alignement
> et des alignements ultérieurs peuvent être nécessaires. Suite à cet alignement d'urgence,
> seules les informations d'attitude seront disponibles. Vitesses, position et affichages
> sur l'ordinateur de navigation seront inexacts et ne pourront pas être utilisés à des fins
> de navigation, et le voyant NAV SYS OUT LAMP s’allumera.

## Ordinateur de navigation

![wso_navigation_computer](../../img/wso_nav_panel.jpg)

L'ordinateur de navigation ASN-46A est utilisé pour la navigation générale et la planification d'itinéraire tactique.
Le système dispose à la fois de capacités de calcul en orthodromie (grand cercle) et en loxodromie,
la première étant utilisée pour les calculs de relèvement à plus grande distance
(plus de 120 milles), et la seconde pour une précision à plus courte portée. L'ordinateur de
navigation fonctionne uniquement à l'aide d'instruments embarqués, à savoir l'INS, l'ordinateur
de données aérodynamiques et le compas magnétique ; il ne peut recevoir aucune information des
systèmes [ILS](vor_ils.md), [VOR](vor_ils.md) ou [TACAN](tacan.md).
Systèmes [ILS](vor_ils.md), [VOR](vor_ils.md) ou [TACAN](tacan.md).

Le système peut maintenir un relèvement relatif et une distance jusqu'à deux waypoints spécifiques
à la fois (identifiés comme cible 1 et cible 2, la cible 2 étant
conservée en mémoire), et ces informations sont affichées en temps réel sur le BDHI et l'ADI. Pour
que les données apparaissent
sur le BDHI, le sélecteur de navigation doit être positionné sur NAV COMP.

L'ordinateur fournit également une confirmation de la précision actuelle du LN-12, à l'aide d'une
paire
de lumières (<num>6</num>) marquées LAT et LONG, ainsi que le Variation Sync Meter (<num>5</num>).
Quand ces
les lampes sont éteintes, les coordonnées de position actuellement affichées sont exactes à
1,5 minute d'arc près. La variation magnétique détectée au moyen des gyroscopes de l'INS est
comparée à la variation saisie manuellement avant la mise sous tension de l'INS via le bouton
de contrôle de variation magnétique, puis affichée sur le compteur de synchronisation de variation
(<num>5</num>). Cet
écart peut être corrigé sur le bouton de contrôle de variation magnétique pour ramener la
synchronisation au centre. Bien que le bouton de commande de variation magnétique n'ait aucun
effet sur
le compteur en mode données aérodynamiques, une correction positive avant la perte INS augmente le
précision du mode données aériennes.

L'ordinateur de navigation peut fonctionner en mode inertiel ou données aériennes. Les deux modes
fournissent les mêmes sorties mais le mode inertiel (par défaut) est plus précis.

En cas de panne INS, l'ordinateur de navigation revient en mode Air Data. En mode Air Data,
le pilote arrière doit continuellement surveiller et ajuster la direction et la vitesse du vent
réel ainsi que la variation magnétique, car les seules entrées à l'estime disponibles pour
l'ordinateur sont la vitesse vraie (provenant de l'ordinateur de données aérodynamiques) et
le cap magnétique du système de boussole. Lorsque le système revient en mode Air Data,
le témoin AIR DATA MODE s’allumera.

![wso_nav_panel_air_data_light](../../img/wso_nav_panel_air_data_light.jpg)

Pendant le démarrage, les boutons de contrôle de position, les boutons de contrôle du vent et le
bouton de contrôle de variation magnétique sont utilisés pour saisir la latitude, la longitude,
la direction et la vitesse du vent connues, ainsi que la variation magnétique, pour l'emplacement
de l'avion à ce moment-là.

### Entrée de point de cheminement

La saisie des waypoints et des informations sur la cible s'effectue à l'aide de la fonction
Bouton de sélection et les deux boutons de commande de cible (<num>10</num>), un pour la latitude et
l'autre
longitude.

| Nom | Descriptif |
|----------|-----------------------------------------------------------------------------------------------------------|
| OFF | Système éteint.                                                                                               |
| STBY | Système alimenté, mais aucune référence de latitude ou de longitude effectuée par rapport aux valeurs dans les fenêtres Cible. |
| TARGET 1 | Fournit des lectures de plage et de relèvement sur les valeurs de la fenêtre cible actuellement saisies.                     |
| TARGET 2 | Sélectionne les informations de portée et de relèvement à partir des valeurs de la fenêtre cible précédemment stockées.                        |
| RESET | Supprime toutes les valeurs de fenêtre cible précédemment enregistrées, stocke les valeurs de fenêtre cible actuellement saisies.         |

Grâce à la fonction mémoire du Target 2, en pratique, l'équipage dispose d'un certain
flexibilité dans le processus en fonction des exigences de la mission. Par exemple, si
l'équipage du Phantom est chargé d'un rôle CAP ou défensif par rapport à une
position connue (c'est-à-dire un bullseye), les coordonnées de cet emplacement peuvent être chargées
dans les valeurs de contrôle cible, le sélecteur de fonction placé dans RESET, et
puis renvoyé à la cible 2. Tout changement de la cible 2 à la cible 1 ou STBY, puis
le retour à la cible 2 conservera ladite valeur de localisation, facilement accessible. Cela
mémorisera la position saisie dans Target 2, à partir de laquelle elle sera facilement accessible
en replaçant simplement le bouton sur Cible 2 à tout moment.

<iframe width="560" height="315" src="https://www.youtube.com/embed/n2O-LigZpyk?si=DVuwon21RvWF7pAD"
title="F-4E-45MC - Références Bullseye et Nav (INS Navigation)" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

L’autre technique courante était le « saute-mouton » :

1. Au démarrage, le deuxième waypoint serait stocké dans la mémoire de Target 2 (entrée sur
  les valeurs de contrôle cible, fonction pour réinitialiser, puis revenir à la cible 2).

2. Une fois l'emplacement du deuxième waypoint enregistré, le pilote arrière
  sélectionnerait la cible 1 pour la saisie en direct du premier waypoint en vol sur les valeurs
  de contrôle cible.

3. Lors du vol vers le premier waypoint, au passage au-dessus de celui-ci, la cible 2 serait
  sélectionnée comme destination, et le waypoint suivant (<num>3</num>) serait entré sur
  les valeurs de contrôle cible.

4. Au survol du waypoint 2, le sélecteur de fonction serait positionné sur RESET,
  puis ramené sur la cible 2 - récupérant alors les valeurs du waypoint 3 depuis les valeurs
  de contrôle cible.

Ce processus se poursuivrait tout au long du vol et permettrait au
pilote arrière la possibilité de passer immédiatement à la cible 1 pour une vérification rapide de
position relative par rapport à un autre lieu d'intérêt si nécessaire, ou un en vol
détour (par exemple vers une piste de pétrolier), puis retour au prochain waypoint enregistré
pour la navigation.

<iframe width="560" height="315" src="https://www.youtube.com/embed/qLsjU9eWUuU?si=tVeTT6lNM7f7I3hm"
title="F-4E-45MC - Opérations 'Leap Frog' (INS Navigation)" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Mise à jour en vol

La mise à jour en vol avec l'ordinateur de navigation est effectuée en survolant directement
points cibles connus, à l'aide d'un repère visuel ou radar, au-dessus d'une station
[TACAN](tacan.md), ou via
instruction de GCI.

### Mise à jour du mode inertiel

Avec l'ordinateur de navigation en mode inertiel, l'avion vole en ligne droite et en palier
vers un emplacement fixe connu.

![wso_nav_panel_pos_update_switch](../../img/wso_nav_panel_pos_update_switch.jpg)

1. Avant d'arriver au point fixe, le commutateur de mise à jour de position est placé en position
  SET. Cela désengage les compteurs de position de longitude et de latitude.

2. Les compteurs de position en longitude et en latitude sont réglés à l'aide de leurs boutons
  respectifs pour la position connue.

3. Juste avant de survoler le point fixe, le commutateur de mise à jour de position est placé
  et maintenu en position FIX.

4. Lors du survol direct du point fixe, le commutateur de mise à jour de position est relâché,
  lui permettant de retomber en NORMAL.

Le taux de correction de l'ordinateur de navigation est d'environ 3 minutes de latitude ou
longitude par seconde, et le commutateur de mise à jour (<num>7</num>) doit être maintenu en FIX
suffisamment longtemps pour couvrir la valeur la plus importante. À titre d'exemple, si l'écart
est de 9 minutes en latitude et 4 en longitude, la position FIX doit être maintenue au moins
3 secondes avant que l'avion ne passe directement par l'emplacement fixe. De plus, le passage
du commutateur de SET à FIX doit être fluide et direct, car il y a un délai d'une demi-seconde
dans l'ordinateur lors du passage par NORMAL.

<iframe width="560" height="315" src="https://www.youtube.com/embed/CIxeyF0ax4s?si=o5NiWBxIbGRkL9B7&start=106"
title="DCS Monde - F-4E WSO INS Guide de navigation" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Mise à jour du mode données aériennes

En mode données aériennes, l'ordinateur de navigation peut être mis à jour comme en mode inertiel,
en utilisant la méthode SET/FIX, ou par rotation directe des boutons de position de latitude et
de longitude. L'utilisation de cette dernière méthode nécessite que le sélecteur de fonction soit
placé en STBY, TARGET 1 ou TARGET 2. La méthode SET/FIX est préférable, car elle permet une mise
à jour instantanée lors du survol de la position fixe et du relâchement du commutateur.

# Contre-mesures

## Système de contre-mesures AN/ALE-40

![ext_cm_dispense](../../img/ext_flares.jpg)

L'ensemble distributeur de contre-mesures AN/ALE-40 offre la capacité de
distribution de cartouches de paillettes RR-170 A/AL et de cartouches de fusées éclairantes
infrarouges MJU-7/B.
Le système se compose de quatre emplacements de distribution situés sur le
pylônes d'armement intérieurs (2 sur chacun) ainsi que les commandes du cockpit.

<iframe width="560" height="315" src="https://www.youtube.com/embed/CK-gaIUW0Co?si=Mb6up8RG2Us7U1ZD"
title="DCS : Contre-mesures F-4E et didacticiel ECM (Pilote, Jester, WSO)" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Le cockpit pilote contient un programmateur,
un sélecteur de fusées éclairantes avec deux lampes
et un bouton de distribution situé sur l'accélérateur.
La fosse WSO dispose d'une unité de contrôle du cockpit (CCU).

Le disjoncteur principal de l'AN/ALE-40 est situé sur
le panneau de disjoncteurs n° 4 au-dessus de la console arrière gauche dans le cockpit WSO.

![cm_distributeur](../../img/cm_dispenser.jpg)

| Configuration du distributeur | Descriptif |
|-------------------------|--------------------------------------|
| Aucune charge utile | Distributeurs installés sans charge utile |
| 120 paillettes | Seules les paillettes chargées |
| 60 paillettes + 30 fusées éclairantes | 60 paillettes et 30 fusées éclairantes chargées |
| 90 paillettes + 15 fusées éclairantes | 90 paillettes et 15 fusées éclairantes chargées |
| 30 fusées éclairantes | Seules les fusées éclairantes chargées |

## Fonctionnement général

Le fonctionnement de l'AN/ALE-40 est contrôlé à la fois depuis le
cockpit avant et arrière. Le CCU initie les différents
modes de fonctionnement. Le programmeur générera les commandes de tir dans
différentes combinaisons.

Les distributeurs montés sur pylône convertiront les commandes de tir
en signaux de tir séquencés individuellement. Si le mode de fonctionnement est défini
aux paillettes, la distribution commencera dans le distributeur à pylône gauche, puis
transférera les signaux de distribution au distributeur à pylône droit lors de l'épuisement
des munitions dans le distributeur de gauche. Si le mode de fonctionnement est réglé sur fusée
éclairante, la distribution
commencera dans le distributeur principal du pylône droit et une fois les munitions épuisées,
le commutateur séquenceur transférera le signal de distribution au distributeur maître
gauche. Les fusées éclairantes peuvent également être larguées de leurs distributeurs à raison
de 10
éclats par seconde en activant l'interrupteur d'ondulation situé sur le CCU.

La distribution de contre-mesures peut être initiée
soit par le pilote (bouton sur l'accélérateur)
ou le WSO (bouton de distribution ou interrupteur d'ondulation sur le CCU).

Les contre-mesures seront appliquées en fonction des paramètres du commutateur de sélection des
fusées éclairantes, du CCU et du programmeur.

Ce sont deux définitions importantes à connaître lors de la mise en place des contre-mesures :

* BURST - signal de distribution unique
* SALVO - groupe d'éclats

> 💡 Pour appliquer des contre-mesures, les volets et les aérofreins doivent être rétractés.

## Unité de commande du cockpit (CCU) - WSO Cockpit

![wso_an_ale_40_panel.jpg](../../img/wso_an_ale_40.jpg)

L'unité de commande du cockpit (CCU) est installée sur la console gauche de l'arrière
poste de pilotage. Il se compose de deux boutons de mode, deux
compteurs et deux voyants lumineux (un pour les paillettes et un pour les fusées éclairantes),
ainsi qu'un interrupteur d'ondulation protégé et un bouton de distribution.

Le CCU émet des signaux qui sont envoyés au programmateur ou directement aux distributeurs,
en fonction des modes sélectionnés.

### Bouton de mode paillette

Avec le sélecteur de paillettes (<num>4</num>) en position NORMAL et les volets et les aérofreins
rétracté, le
les positions des commutateurs fonctionnent comme suit. Pour chaque pression sur le bouton de
distribution :

* OFF - Aucune distribution, car le système de paillettes est **inactif**.
* SGL - Une **seule** paillette est distribuée.
* MULT - Paillettes distribuées selon les paramètres **CHAFF BURST** du programmateur.
* PROG - Paillettes distribuées selon les réglages **CHAFF BURST** et **CHAFF SALVO** du
  Programmeur.

> 💡 Lorsque le mode Chaff Double est sélectionné dans le
[Éditeur de mission](../../dcs/mission_editor.md#chaff-double-dispense)
> ou via le [Crew Chief](../../crew_chief/overview.md),
> deux fois plus de paillettes seront libérées dans chaque mode
> (2 paillettes pour chaque signal de distribution de paillettes).
> Le compteur est ensuite réglé à la moitié du nombre total de cartouches de paillettes chargées pour indiquer
> le nombre de distributions restantes, c'est-à-dire pas les cartouches.

### Bouton du mode Flare

Avec le sélecteur de fusées éclairantes (<num>7</num>) en position NORMAL et les volets et les aérofreins
rétracté,
les positions du commutateur fonctionnent comme suit. Pour chaque pression sur le bouton de
distribution :

* OFF - Aucune distribution, car le système de fusées éclairantes est **inactif**.
* SGL - Une **seule** fusée éclairante est distribuée.
* PROG - Fusées distribuées selon les paramètres **FLARE BURST** du programmateur.

### Compteurs de paillettes et de fusées éclairantes

Il y a deux compteurs de soustraction (3 et 6), un pour le système de paillettes et un pour le
système de paillettes.
système de fusée éclairante. Ils indiquent la quantité de cartouches de paillettes et de fusées
éclairantes restantes.

### Témoins lumineux de paillettes et de fusées éclairantes

La fusée éclairante et le système de paillettes ont chacun un voyant vert (5 et 8).
Chaque fois qu'un mode (autre que OFF) est sélectionné sur le bouton de mode correspondant,
le voyant correspondant s’allumera.

> 💡 Les paillettes et les fusées éclairantes peuvent être utilisées simultanément à condition d'avoir un mélange
> le chargement de paillettes et de fusées éclairantes est utilisé.

### Commutateur d'ondulation

L'interrupteur d'ondulation (<num>2</num>) est protégé. Lorsque la protection est levée et que
l'interrupteur est activé,
il lancera la distribution de fusées éclairantes quelle que soit la position de tout autre
commutateurs ou boutons de mode dans le système de contre-mesures (si les volets et la vitesse
les freins sont rentrés). Les fusées seront distribuées à raison de 10 fusées par
seconde jusqu'à ce que les distributeurs de pylônes gauche et droit soient vides.

### Bouton de distribution

Le bouton de distribution (<num>1</num>), lorsqu'il est enfoncé, déclenche les paillettes/fusées.
distribution sélectionnée par le CCU et
Programmateur à condition que les volets et les aérofreins soient
rétracté et les boutons du mode paillettes/fusée sont en position
toute position autre que OFF.

## Programmeur - Cockpit Pilote

![pilote_an_ale_40_programmeur](../../img/pilot_an_ale_40_programmer.jpg)

Le programmateur AN/ALE-40 contient les commandes et les circuits utilisés pour envoyer
des commandes de tir spécifiques aux distributeurs de paillettes et de fusées éclairantes. Les
paramètres suivants
sont réglables :

| Catégorie | Bouton | Valeurs | Descriptif |
|-------------|-------------------------|------------------------------|----------------------------------|
| CHAFF BURST | COMPTE (<num>4</num>) | 1, 2, 3, 4, 6, 8 | quantité de rafales (par salve) |
|             | INTERVALLE (<num>1</num>) | 0,1, 0,2, 0,3, 0,4 | intervalle de temps entre chaque rafale |
| CHAFF SALVO | COMPTE (<num>5</num>) | 1, 2, 4, 8, C (continu) | nombre de salves |
|             | INTERVALLE (<num>2</num>) | 1, 2, 3, 4, 5, 8, R (aléatoire) | intervalle de temps entre chaque salve |
| FLARE BURST | COMPTE (<num>6</num>) | 1, 2, 4, 8, C (continu) | quantité de salves |
|             | INTERVALLE (<num>3</num>) | 3, 4, 6, 8, 10 | intervalle de temps entre chaque rafale |

> 💡 Tous les intervalles sont exprimés en secondes.

## Panneau de commande du système de carburant - Cockpit du pilote

![pilot_an_ale_40_switch](../../img/pilot_an_ale_40_lights.jpg)

### Commutateur de sélection des fusées éclairantes

Si le commutateur de sélection des fusées éclairantes (<num>3</num>) est en position **NORMAL**, il
arme le
système de distribution de contre-mesures et permet aux paillettes et aux fusées éclairantes d'être
distribué comme défini par le CCU et le programmateur en appuyant sur l'un ou l'autre
bouton.

Si le commutateur de sélection des fusées éclairantes est en position **FLARES**, cela n'affecte que
l'avant.
bouton de distribution du cockpit en ignorant tous les interrupteurs et boutons du
système de contre-mesures, à condition que les volets et les aérofreins soient rentrés.
Cela permet au pilote de distribuer une seule fusée à chaque fois qu'il appuie sur le bouton
bouton de distribution. Les fonctions de distribution du cockpit arrière ne sont pas affectées par
le commutateur
position.

### Voyant de mise sous tension AN/ALE-40 (vert)

Ce voyant vert s'allume (<num>1</num>) lorsqu'au moins un des modes paillettes et fusée éclairante
Les boutons du CCU sont dans n'importe quelle position autre que OFF.

### Voyant lumineux des fusées éclairantes (ambre)

Cet indicateur orange (<num>2</num>) s'allume lorsque le Flares Select
Le commutateur est réglé sur FLARES.

Lorsqu'elles sont allumées, les fusées éclairantes peuvent être distribuées en appuyant sur
le bouton de distribution du cockpit avant quels que soient les paramètres du programmateur et du
CCU.

## Bouton de distribution (cockpit de pilotage)

![pilot_throttle_cm_dispense](../../img/pilot_dispense_button.jpg)

Lorsque vous appuyez sur le bouton de distribution, la distribution de paillettes/fusées est lancée
comme défini sur
le CCU et le programmateur AN/ALE-40 si les volets et les aérofreins sont rentrés et
le commutateur de sélection des fusées éclairantes est réglé sur NORMAL. En outre, une fusée à unité
unique
la distribution peut être initiée par une simple pression sur un bouton si le commutateur de
sélection des fusées éclairantes
est réglé sur FLARES.

## Distributeurs AN/ALE-40

![cm_distributeur](../../img/cm_dispenser.jpg)

Les distributeurs de contre-mesures AN/ALE-40 sont divisés en deux distributeurs distincts
configurations. Le distributeur principal (hors-bord) contient l'électronique et
commutateur séquenceur pour les deux distributeurs sur chaque pylône et est installé sur le
côté extérieur des pylônes d'armement intérieurs. Le distributeur esclave (intérieur) est
installé du côté intérieur des pylônes d'armement intérieurs et est connecté à
le distributeur maître par un câble d'interconnexion. L'avion peut être configuré
soit avec quatre modules de charge utile de paillettes sur les quatre distributeurs, soit deux
modules de charge utile de paillettes
modules de charge utile sur les distributeurs esclaves et deux modules de charge utile torchère sur
le
maîtres distributeurs. Seuls les modules de charge utile Chaff peuvent être installés sur l'esclave
distributeurs; les modules de charge utile Flare ne peuvent être installés que sur le maître
distributeurs.

### Assemblage du distributeur principal

> 💡 Le fonctionnement de l'ensemble distributeur maître se fait automatiquement par
> l'équipe au sol en DCS, selon le chargement AN/ALE-40 sélectionné dans le menu de
> chargement.

Un ensemble distributeur principal est installé sur le côté extérieur de chaque
pylône d'armement intérieur. Il se compose d'un interrupteur séquenceur, d'un ensemble culasse, d'un
interrupteur de disjoncteur RESET/OPERATE, un interrupteur de commande de charge utile, un
interrupteur à goupille de sécurité avec goupille de sécurité et banderole d'avertissement, et les
circuits électriques pertinents.
Le commutateur séquenceur convertit les commandes de tir en signaux de tir individuels
pour chaque pétard pyrotechnique dans les distributeurs maître et esclave. L'ensemble de culasse
fournit l'interface pour monter les modules de charge utile de paillettes ou de fusées
éclairantes.
L'insertion de la goupille de sécurité coupe l'alimentation électrique des deux distributeurs
montés sur le pylône. Une fois qu'un module de paillettes ou de fusées éclairantes complet a été
chargé, le
commutateur RESET/OPERATE est placé sur OPERATE. Les sections de paillettes ou de fusées
éclairantes tireront
en séquence. Après le vol, s'il reste une charge partielle de paillettes ou de fusées éclairantes,
l'interrupteur doit être laissé sur OPERATE. Si le commutateur est déplacé sur RESET, les
stations de paillettes ou de fusées éclairantes vides doivent être franchies avant que les stations
chargées ne
tirent. Les positions C (paillettes) et F (fusée) du sélecteur de charge utile définissent uniquement
le mode de déploiement du distributeur maître et sont réglés automatiquement en DCS
selon le chargement sélectionné.

### Assemblage du distributeur esclave

> 💡 La position du sélecteur de charge utile est par défaut réglée sur CS (chaff single dispense).
> Cependant, il peut également être réglé sur CD (double distribution de paillettes
> via l'[éditeur de mission](../../dcs/mission_editor.md#chaff-double-dispense)
> soit en posant la question au [Crew Chief](../../crew_chief/overview.md) au sol).

Un ensemble de distributeur esclave est installé sur le côté intérieur de chaque
pylône d'armement intérieur. Il contient un sélecteur de charge utile pour définir soit la
distribution simple
de paillettes, soit la distribution double de paillettes, un ensemble culasse et les circuits
électriques appropriés.
Si le sélecteur de charge utile est laissé dans la position CS par défaut, une cartouche de
paillettes sera distribuée pour chaque éclat de paillettes commandé. Si le sélecteur de charge
utile est réglé sur la position CD, deux cartouches de paillettes seront
distribuées simultanément, une de chaque distributeur, pour chaque éclat de paillette
commandé. L'ensemble de culasse fournit l'interface pour monter le
module de charge utile de paillettes.

### Adaptateur de boîtier de fusée éclairante

L'adaptateur du boîtier de fusée est installé entre l'ensemble distributeur principal et
le module de charge utile de la fusée éclairante. L'adaptateur en forme de coin garantit que les
fusées éclairantes
soient éjectées vers l'arrière et vers le bas de l'avion. Il ne peut pas être monté sur le distributeur
esclave.

### Module de charge utile de paillettes et cartouches

Le module de charge utile de paillettes est fixé à la culasse du distributeur maître ou esclave
assemblage avec quatre attaches rapides. La cartouche de paillettes se compose d'un
manchon en plastique de base, dipôles de paille et embout en plastique. Une fois distribué,
les dipôles de paillettes sont éjectés des manchons et quittent le manchon jetable et
l'étui vide derrière. La base de la cartouche fournit un évidement pour le pétard
pyrotechnique des paillettes.

> 🔴 AVERTISSEMENT : une décharge accidentelle de cartouches de paillettes peut causer des blessures à
> personnel ou des dommages à l'avion.
<!-- La goupille de sécurité du distributeur principal doit être
installé à tout moment lors du chargement, du déchargement ou de l’entretien du système. -->

### Module de charge utile de fusée éclairante et cartouches

Le module de charge utile de la fusée éclairante ne peut être installé que sur l’ensemble
distributeur principal.
L'adaptateur du boîtier de fusée sert d'interface. La cartouche de fusée éclairante se compose
d'un manchon extérieur métallique, d'un élément fusant, d'un dispositif de sécurité et d'initiation
et d'un
embout en plastique. Une indentation dans la base de la cartouche permet une installation
correcte de la fusée éclairante.

> 🔴 AVERTISSEMENT : une décharge accidentelle de cartouches de fusée éclairante peut causer des blessures à
> personnel ou des dommages à l'avion.
<!-- La goupille de sécurité du distributeur principal doit être
installé à tout moment lors du chargement, du déchargement ou de l’entretien du système. -->

### Pétards pyrotechniques à paillettes/fusées éclairantes

Les pétards pyrotechniques à paillettes sont installés immédiatement avant utilisation et sont
stockés séparément des cartouches de paillettes. Ils sont encastrés dans du métal et
déclenchés électriquement.

Les pétards pyrotechniques de fusées éclairantes ont un diamètre plus grand et sont dotés d'une
rainure pour joint torique.
Ils sont installés immédiatement avant utilisation et sont stockés séparément des
cartouches de fusées éclairantes.

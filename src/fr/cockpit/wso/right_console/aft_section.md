# Section arrière

La section arrière de la console droite comprend le panneau de navigation et d'éclairage.

## Panneau de navigation

![Panneau de navigation](../../../img/wso_nav_panel.jpg)

Le panneau de commande de l'ordinateur de navigation sert d'interface pour gérer la navigation de
l'avion, y compris sa position et ses cibles pour les instruments de navigation comme le HSI et
le BDHI.
Il peut fonctionner selon deux modes : INERTIEL et AIR DATA.

Voir l'[ordinateur de navigation](../../../systems/nav_com/ins.md#navigation-computer) pour plus de
détails.

Le panneau est équipé d'une gamme de boutons de commande et d'interrupteurs essentiels au
fonctionnement
de l'ordinateur de navigation.

### Bouton de sélection de fonction

![Bouton de sélection de fonction](../../../img/wso_nav_panel_function_selector_knob.jpg)

Un commutateur rotatif à cinq positions (<num>(<num>1</num>)</num>) utilisé pour régler la fonction
du système de navigation.

| Position | Descriptif |
|----------|----------------------------------------------------------------------------------------------------------------------------------|
| OFF | Système hors tension.                                                                                                             |
| STBY | Le système est alimenté mais l’intégration de la position de latitude et de longitude est désactivée.                                                    |
| TARGET 1 | Calcule la portée et le relèvement par rapport aux coordonnées sélectionnées définies sur les rouleaux TARGET.                                                |
| TARGET 2 | Calcule la portée et le relèvement par rapport aux coordonnées mémorisées.                                                                         |
| RESET | Efface les coordonnées mémorisées. Lors du retour à TARGET 2, les coordonnées sélectionnées définies sur les rouleaux TARGET sont mémorisées. |

### Boutons et compteurs de contrôle du vent

![Boutons de vent](../../../img/wso_nav_panel_wind_counters.jpg)

Deux boutons rotatifs (<num>2</num>) qui permettent le réglage manuel de la vitesse du vent (en
nœuds) et de sa direction (en degrés, origine), affichés sur les compteurs. Utilisé par
l'ordinateur de navigation en mode AIR DATA.

### Bouton de variation magnétique et compteurs

![Bouton de variation magnétique](../../../img/wso_nav_panel_magnetic_variation.jpg)

Un bouton rotatif (<num>3</num>) qui permet le réglage manuel de la variation magnétique (en
degrés).
Indispensable pour
calculs de navigation
en mode AIR DATA et pour l'alignement initial (BATH) INS.

### Boutons et compteurs de contrôle de position

![Boutons de position propres](../../../img/wso_nav_panel_pos_control.jpg)

Ces boutons (<num>9</num>) sont utilisés pour modifier manuellement la position actuelle de l'avion
en termes de
latitude
et la longitude, telles qu'affichées sur les compteurs (en degrés et minutes). Ils doivent être
enfoncés pour être effectifs.

> 💡 En mode INERTIEL, le commutateur de mise à jour de position doit être utilisé en conjonction avec ces boutons
> pour mettre à jour les coordonnées de position.

### Boutons et compteurs de contrôle de cible

![Boutons de position cible](../../../img/wso_nav_panel_tgt_control.jpg)

Les commandes cibles (<num>10</num>) permettent le réglage des compteurs de latitude et de longitude
cibles, qui peuvent être utilisés soit comme cible de waypoint direct (lorsque le bouton de
sélection de fonction est réglé sur TARGET 1), soit pour mémoriser les coordonnées de TARGET 2
(après sélection de la position RESET).

### Commutateur de mise à jour de position

![Commutateur de mise à jour de position](../../../img/wso_nav_panel_pos_update_switch.jpg)

Un interrupteur à trois positions (<num>7</num>) pour régler la mise à jour de la position.

| Position | Descriptif |
|----------|-------------------------------------------------------------------------------------------------------------------------------|
| SET | Désengage le mécanisme de mise à jour des compteurs de position, leur permettant de tourner librement jusqu'à la position souhaitée.           |
| NORMAL | Les compteurs de position sont mis à jour en fonction du signal INS en mode inertiel ou par les propres calculs du système en mode données aériennes. |
| FIX | Met à jour la position INS à une vitesse d'environ 3 minutes d'arc par seconde.                                              |

> 💡 Le commutateur présente un délai d'environ 0,5 seconde lorsqu'il est réglé sur NORM, conçu pour
> empêcher les mises à jour indésirables des compteurs lors du passage de SET à FIX.

### Compteur de synchronisation des variations

![Compteur de synchronisation des variations](../../../img/wso_nav_panel_variation_sync.jpg)

En mode inertiel, ce compteur (<num>5</num>) affiche l'écart entre la variation magnétique
calculée par l'INS et celle réglée manuellement. En mode AIR DATA, la variation réglée
manuellement n’affecte pas cet indicateur.

### Voyant Test Cap Off

![Lampe du capuchon de test](../../../img/wso_nav_panel_test_cap_off.jpg)

S'allume (<num>4</num>) en cas de défaillance du circuit de vitesse vraie provenant du calculateur
de données aériennes (Air Data Computer), indiquant une condition de circuit ouvert.

### Lumières de synchronisation de latitude et de longitude

![Lumières de synchronisation Lat/Lon](../../../img/wso_nav_panel_sync_lights.jpg)

S'allume (<num>6</num>) lorsque les compteurs de position pour la latitude ou la longitude ne
correspondent pas aux
coordonnées
fournies par l'INS (différence supérieure à 1,5 minute d'arc).

### Voyant du mode données aériennes

![Voyant du mode données aérodynamiques](../../../img/wso_nav_panel_air_data_light.jpg)

L'éclairage (<num>8</num>) indique que l'ordinateur de navigation fonctionne en mode AIR DATA.

## Panneau de commande d'éclairage du cockpit

![wso_cockpit_lighting_panel](../../../img/wso_cockpit_lights_aft.jpg)

Le panneau de commande d'éclairage du cockpit permet de contrôler tous les éclairages de bord du
panneau, l'éclairage du tableau de bord, les projecteurs de la console, les projecteurs blancs
situés sous le rebord de la verrière au-dessus de chaque console, et comprend également
l'interrupteur Test des voyants d'avertissement et Lumière de la boussole de secours.

### Projecteur blanc

L'interrupteur du projecteur blanc (<num>4</num>) agit indépendamment de toutes les autres commandes
du panneau,
et est soit ON, soit OFF. Il active un projecteur de secours séparé (également
appelé Thunderstorm Light) qui éclaire le cockpit en blanc.

### Commutateur de boussole de veille

Le commutateur STBY COMP (<num>5</num>) allume le voyant du Standby Compass.

### Projecteur de console

Cet interrupteur (<num>6</num>) contrôle le niveau d'éclairage des projecteurs rouges
assurant l'éclairage général des consoles. Trois réglages sont disponibles : DIM, MED et BRT.

> 💡 Pour les éteindre, placez l'interrupteur dans DIM
> et le bouton de la console sur OFF.

> 💡 Les projecteurs du tableau de bord sont contrôlés par le pilote,
> voir le [commutateur des projecteurs d'instruments](../../pilot/right_console/wall.md#instrument-flood).

### Interrupteur de test des voyants d'avertissement

L'interrupteur de test des voyants d'avertissement (<num>7</num>), s'il est réglé sur la position
TEST, confirme le fonctionnement de
les différents indicateurs d'urgence dans le cockpit.

### Bouton du tableau de bord

Ce bouton (<num>2</num>) contrôle le rétroéclairage du tableau de bord,
ainsi qu'un éclairage de bord pour la plupart de ses jauges.

> 💡 Les principaux instruments de vol sont contrôlés par le pilote via le
> [Bouton de luminosité des instruments de vol](../../pilot/weapon_management.md#flight-instrument-brightness-knob)
> plutôt.

### Bouton d'indexation

Contrôle la luminosité (<num>3</num>) des lumières de l'indexeur AoA à gauche et à droite
de l'arc de la verrière.

### Bouton de console

Le bouton de commande de l'éclairage de la console (<num>1</num>), avec une plage allant de OFF à
BRT, contrôle le
niveau d'éclairage pour la console gauche et droite.

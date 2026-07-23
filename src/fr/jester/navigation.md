# Navigation

![real_life_crew_with_map](../img/map_2.jpg)

La navigation avec Jester s'articule autour de la gestion des points de virage pour deux vols
plans : le plan de vol primaire et le plan de vol secondaire. Les deux peuvent être modifiés
et suivis par Jester de la même manière, bien que le plan de vol principal soit
considéré comme le principal et le plan de vol secondaire serve de secours.

## Plan de vol

Un plan de vol est constitué de waypoints. Ils peuvent être insérés, supprimés ou modifiés par
le joueur via l'interface utilisateur, la carte ou l'éditeur de mission.

![Modifier les points de cheminement](../img/jester_nav_edit_turn_points.jpg)

Si la mission a assigné à l'avion une série de points de cheminement à travers le
éditeur de mission, celui-ci sera disponible par défaut en tant que plan de vol principal.

Chaque waypoint du plan de vol peut être désigné comme l'un des nombreux types spéciaux. Ces
désignations influenceront les actions de Jester et les phrases de dialogue qu'il utilise
à l'approche du waypoint. Les types sont :

- **Turn Point (par défaut)** : Il s'agit du type de waypoint standard. Jester va
  passer automatiquement au waypoint suivant lorsque l'avion est à moins de 2
  milles marins (NM) du point de virage, comme indiqué par son BDHI.
- **Nav Fix (VIP - Visual Identification Point)** : Jester effectuera un INS
  (Inertial Navigation System) mise à jour de la position lors du survol de ce point. Il
  signalera la distance au VIP 10 NM et 5 NM à l'avance. Avant d'atteindre
  le VIP, Jester saisira les coordonnées nécessaires dans le système de navigation
  Ordinateur, réglez le commutateur de mise à jour de la position de l'ordinateur de navigation sur
  FIX, puis
  exécuter la mise à jour lors du survol du point de référence visuel. C'est
  Il est important de noter que le pilote doit survoler la référence visuelle et non le
  Point indiqué INS. Jester ajustera les coordonnées INS au VIP, et
  le succès du correctif dépend de la précision avec laquelle le survol visuel correspond au
  point de référence. Ensuite, Jester indiquera si la mise à jour a été
  réussi ou si l'avion était trop loin du point (auquel cas le
  le survol doit être répété). Une fois le correctif réussi, Jester passera au suivant
  point de cheminement.
- **Initial Point (IP)** : Jester indiquera la distance jusqu'à l'IP (15 NM, 10 NM,
  5 NM et 2 NM à l'avance) et fournira un rappel lorsque l'avion est à
  2NM. Une fois passé l'IP, il passera au waypoint suivant.
- **Target (TGT)** : similaire à l'IP, mais avec des phrases différentes, adaptées à la
  zone cible. Jester mettra à jour le pilote à mesure que l'avion s'approche du point (10 NM,
  5NM et 2NM à l'avance), et passera au waypoint suivant une fois le
  point cible dépassé.
- **Fence In (F-IN)** et **Fence Out (F-OUT)** : Ces waypoints fonctionnent
  de la même manière que les types IP et Target, mais avec des tâches supplémentaires.
- **Homebase (HB)** et **Alternate (ALT)** : ce sont des points d'atterrissage désignés.
  Jester ne passera pas automatiquement au waypoint suivant à ces points, et il fera un
  rapport à mesure que l'avion s'approche de la base d'attache.
- **Combat Air Patrol (CAP)** : le premier waypoint désigné comme CAP sera enregistré
  sous le nom de _CAP1_, et le second sera enregistré sous le nom de _CAP2_, quelle que soit leur
  positions dans le plan de vol. Jester demandera combien de temps le pilote a l'intention de
  restez en station à _CAP1_. Il alternera ensuite entre _CAP1_ et _CAP2_
  jusqu'à l'expiration du temps CAP désigné, après quoi il passera au prochain
  waypoint suivant _CAP2_ dans le plan de vol. Il peut y en avoir plusieurs
  Paires _CAP1_-_CAP2_.

> 🚧 Pour _Fence In_ et _Fence Out_, Jester guidera également plus tard le pilote
> grâce à des listes de contrôle spécifiques.

### Marqueur de carte

En utilisant la vue cartographique <kbd>F10</kbd> dans DCS, les joueurs peuvent créer des marqueurs
nommés sur
la carte simplement en double-cliquant sur la position souhaitée après avoir sélectionné **Mark
Label** sur la ligne supérieure de l'interface utilisateur.

![Créer des marqueurs de carte](../img/dcs_map_markers.jpg)

Grâce à l'interface utilisateur, ces marqueurs de carte peuvent ensuite être importés en tant que
points de virage vers le
plan de vol.

![Sélectionner le marqueur de carte](../img/jester_nav_map_markers_ui.jpg)

### Ajuster l'actif

L'interface utilisateur propose une liste des actifs à proximité, tels que des navires, des
pétroliers ravitailleurs ou des stations au sol.

Leur position actuelle peut être importée directement comme point de virage.

> 💡 Pour déplacer des actifs tels que des pétroliers, leur position réelle peut varier de celle
> coordonnées prévues. Utilisez TACAN ou ADF pour une navigation plus précise.

### Ajuster l'aérodrome

Semblable au réglage des actifs, l'interface utilisateur fournit une liste des aérodromes à
proximité vers lesquels naviguer.

![Ajuster les aérodromes](../img/jester_nav_tune_airfields.jpg)

### Entrez les coordonnées

Une façon d'ajouter un point de virage consiste à saisir le LAT/LON correspondant via le
Interface utilisateur.

Le format est `H DD MM H DDD MM`,

- où `H` représente l'hémisphère (`N` ou `S` pour la latitude et `E` ou `W`
  pour la longitude);
- `D` signifie Degrés (`00` à `89` pour la latitude et `000` à `179` pour
  longitude);
- et `M` signifie Minutes (`00` à `59`).

Un exemple valable pourrait être `N 45 32 E 047 12` ou `S 05 55 W 105 00`.

> 💡 Les espaces sont facultatifs, `N4532E04712` est également valide.

![Entrez les coordonnées](../img/jester_nav_enter_latlon.jpg)

## Opération

Jester navigue en utilisant une technique appelée **saute-mouton**. L'avion
ne fournit qu'un seul emplacement pour mémoriser un waypoint (appelé **TGT 2**).

### Itinéraire prévu

En saute-mouton, **TGT 2** indique toujours le prochain tournant du courant
plan de vol actif. À l'approche de ce point de virage (±2 nautiques
miles), Jester mettra automatiquement à jour TGT 2 au prochain point de virage dans le
séquence.

Cela permet au pilote de suivre l'intégralité de la route du plan de vol en
en sélectionnant NAV COMP sur le panneau de sélection des fonctions de navigation et en suivant les
instructions
indication correspondante sur le HSI.

![HSI](../img/jester_nav_hsi.jpg)

### Dérouter

En plus de suivre le plan de vol, Jester est capable de se dérouter vers un autre
point de virage non planifié en utilisant **TGT 1**.

Grâce à l'interface utilisateur, les joueurs peuvent basculer entre le déroutement (TGT1) et le plan
de vol (TGT2) à tout moment.

![Option de renvoi](../img/jester_nav_divert_option.jpg)

### Pause et reprise de l'itinéraire

Un plan de vol actif est indiqué par l'interface utilisateur à l'aide d'un astérisque `*` à côté du
point de virage actuel.

La commutation automatique des points de virage peut être temporairement désactivée par point de
virage en utilisant l'option **Holding**. Les points de virage désignés pour l'attente sont
marqués d'un `h`.

![Modificateurs de points de virage](../img/jester_nav_resume_flightplan.jpg)

![Maintien du point de virage](../img/jester_nav_holding.jpg)

Lorsqu'un plan de vol a été interrompu, par exemple parce que le pilote s'est dérouté vers un
point différent (en utilisant TGT 1), il peut être réactivé à nouveau via l'interface utilisateur en
utilisant l'option **Go To/Resume**.

Cela offre également la possibilité de sauter des points de virage en passant directement à
n'importe quel point de virage de sa séquence, ainsi que le retour aux points précédents ou la
reprise à partir d'un point désigné pour l'attente.

## TACAN

L'équipement TACAN peut être utilisé indépendamment par les deux membres d'équipage, puis
permuté entre Pilot et WSO à l'aide du **Command Button** sur le panneau.

De plus, Jester est capable de se caler directement sur n'importe quel actif ou station au sol
compatible TACAN.

![Régler TACAN Station au sol](../img/jester_tacan_ground_station.jpg)

Cela permet également au pilote de configurer le panneau TACAN de Jester avec une configuration
secondaire pour ensuite basculer entre les deux d'un simple clic sur le Command Button.

## UHF

La radio UHF est dupliquée entre les deux membres d'équipage et peut être utilisée
indépendamment. L'utilisation du **Command Button** permet au pilote d'échanger les commandes
entre sa configuration et celle de Jester. Cela permet au pilote de configurer deux
configurations, puis de permuter rapidement entre elles en appuyant sur un seul bouton.

Jester est capable de régler la radio directement sur n'importe quel actif ou ATC à proximité pour
permettre
et ouvrez un canal de communication de manière pratique et rapide. Via ADF, cela peut aussi
être utilisé pour la navigation.

![Régler UHF ATC](../img/jester_uhf_tune_atc.jpg)

# Partie avant

La zone avant contient les commandes pour la livraison des armes et le
[INS](../../../systems/nav_com/ins.md).

## Contrôle du codeur laser

![laser_coder_control](../../../img/wso_laser_code_control.jpg)

Le WSO peut définir le code laser utilisé par le module de ciblage en utilisant les quatre petits
boutons-poussoirs sur ce panneau.

### Boutons de code

Chaque pression sur (<num>1</num>) fera avancer le chiffre correspondant d'une unité.

Les codes se rapportent directement aux fréquences laser, ce qui les oblige à être
entre 1111 et 1788 et ne pas utiliser les chiffres 0 ou 9 pour être valide.

> 💡 Les codes laser des armes peuvent être ajustés dans l'éditeur de mission ou lors du réarmement.
> Le code par défaut utilisé est 1688.

### Bouton Entrée

Une fois qu'un code a été défini, il peut être transféré au Pave Spike en appuyant sur
le bouton ENTER (<num>2</num>) vers la droite.

Lorsque le système est mis sous tension, il initie automatiquement un transfert de
le code actuellement défini.

### Voyant NO-GO

La validation d'un code saisi prend environ 5 secondes. Si le voyant NO-GO est allumé,
le code n'est pas valide.

## Panneau de commande de navigation inertielle

![wso_ins_control_panel](../../../img/wso_ins_panel.jpg)

Le panneau de commande de navigation inertielle permet la sélection du mode pilote arrière et
la sélection de la commande d'alignement du système.

Voir [3.3.2 INS Navigation](../../../systems/nav_com/ins.md) pour plus d'informations.

### Sélecteur de mode

L'interrupteur HDG MEM-GYRO COMP (<num>1</num>), situé sous un cache, reste principalement en
position GYRO COMP pour un alignement de type Gyro Compass. Le commuter sur HDG MEM,
avant d'allumer l'INS, permet, si un cap a été préalablement stocké, un alignement par
mémoire de cap.

> 💡 Le cap peut être stocké dans le
> [éditeur de mission](../../../dcs/mission_editor.md#ins-reference-alignment-stored).

### Bouton de commande de puissance

Les positions des boutons (<num>2</num>) sont :

| Nom | Descriptif |
|------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| OFF | Système éteint.                                                                                                                                                                                                                                                                                                                  |
| STBY | L'alimentation est appliquée aux éléments chauffants et au système de contrôle de la température, et lance un alignement grossier (si [GYRO COMP](../../../systems/nav_com/ins.md#gyrocompass-alignment) est sélectionné sur la bascule).                                                                                                                   |
| [ALIGN](../../../systems/nav_com/ins.md#alignment-options) | Effectue un nivellement fin de la plate-forme et du gyroscope et un alignement [BATH](../../../systems/nav_com/ins.md#best-available-true-heading) (ou [HDG MEM](../../../systems/nav_com/ins.md#heading-memory-alignment)). Ensuite, si disponible, effectue l'alignement [Gyro-compassing](../../../systems/nav_com/ins.md#gyrocompass-alignment) (fin). |
| NAV | Active la fonction INS pour la navigation, dont les performances sont basées sur la qualité de l'alignement.                                                                                                                                                                                                                           |

### Voyant HEAT

Le voyant HEAT (<num>4</num>) commence à s'allumer lorsque le système est placé en mode STBY.
Pour un alignement de type mémoire de cap stocké, le voyant reste allumé jusqu'à ce que les
gyroscopes aient
atteint la température de fonctionnement.
Pour un alignement de type Gyro Compass, le voyant reste allumé jusqu'à ce que les gyroscopes aient
atteint
température de fonctionnement et continue ensuite à s'allumer pendant 110 secondes supplémentaires.
Remarque : L'indication est disponible uniquement en modes STBY et ALIGN, et le système n'autorisera pas l'alignement Gyro-compassing si l'on quitte le mode STBY
avant que ce voyant ne s'éteigne.

### Voyant ALIGN

Le voyant ALIGN (<num>3</num>) fournit
l'état actuel de l'alignement [INS](../../../systems/nav_com/ins.md#alignment-options)
en éclairant
de façon stable lorsque l'alignement [BATH](../../../systems/nav_com/ins.md#best-available-true-heading)
est terminé,
ou clignotant à la fin de [GYRO COMP](../../../systems/nav_com/ins.md#gyrocompass-alignment)
ou [HDG MEM](../../../systems/nav_com/ins.md#heading-memory-alignment)
alignements.

## Commande manuelle d'antenne

![Commande manuelle de l'antenne](../../../img/wso_antenna_hand_control_overview.jpg)

Joystick qui s'intègre au [radar](../../../systems/radar/overview.md) pour effectuer le
contrôle de la position de la portée (avant et arrière) et de l'azimut (gauche et droite) du
symbole d'acquisition sur le radar
affichage dans les modes air-air, ainsi que la direction du capteur chercheur/EO
avec [AGM-65 Maverick](../../../stores/air_to_ground/missiles/maverick.md)
et [Pave Spike](../../../systems/weapon_systems/pave_spike/overview.md).

### Contrôle d'élévation de l'antenne

Une molette (<num>2</num>) sur le côté gauche du manche contrôle l'élévation
angle de l'antenne radar, affiché via le stroboscope EL sur l'écran DSCG.

### Bouton de défi

Si vous contrôlez le radar, le bouton (<num>1</num>) lance une interrogation IFF.

Pour le pod de ciblage [Pave Spike](../../../systems/weapon_systems/pave_spike/overview.md), il
bascule à la place le champ de vision entre WIDE et NARROW.

### Interrupteur d'action (déclencheur)

Un déclencheur à 2 étages (<num>3</num>) pour verrouiller les cibles. Le comportement exact dépend
du fait que le [radar](../../../systems/radar/overview.md), les
[armes](../../../stores/overview.md) ou le [module de ciblage](../../../systems/weapon_systems/pave_spike/overview.md)
sont actuellement contrôlés.

### Ajustement du point de repère

![Ajustement de l'alignement](../../../img/wso_boresight_adjust.jpg)

La position de visée du manche d'antenne peut être ajustée à
sa base à l'aide d'un tournevis. Une fois définies, les nouvelles valeurs peuvent être
chargées en appuyant sur le bouton ci-dessous.

Ceci n'est accessible qu'au personnel au sol.

## Panneau de livraison d'armes

![wso_weapon_delivery_panel](../../../img/wso_weapon_delivery_panel.jpg)

### Commutateur ACTIVATE

L'interrupteur à deux positions (<num>1</num>) n'est disponible qu'après avoir appuyé sur le
bouton Target Insert ; le mettre sur ON alimente les circuits de l'ordinateur de largage
de l'arme pour un largage [LABS](../../../systems/weapon_systems/arbcs.md) utilisant les
données de portée de largage du [WRCS](../../../systems/weapon_systems/wrcs.md).

### Commutateur TGT FIND

L'interrupteur à deux positions (<num>2</num>) permet de combiner la fonctionnalité de livraison
du système [ARBCS/LABS](../../../systems/weapon_systems/arbcs.md) avec le mode
[WRCS](../../../systems/weapon_systems/wrcs.md) TGT FIND. NORM est sélectionné pour la fonction
standard du WRCS sans capacité de livraison LABS. En sélectionnant HOLD et
un réglage ARBCS sur le bouton de mode de livraison du pilote permet la recherche de
décalage cible WRCS, et l'attaque est achevée en suivant les procédures ARBCS normales
depuis l'IP.

### Commutateur RANGE

La sélection de x100 sur l'interrupteur à deux positions (<num>3</num>) modifie le multiplicateur
de portée de largage sur le panneau [WRCS](../../../systems/weapon_systems/wrcs.md) à un
facteur 100 ; en NORM, le facteur standard de 10 est appliqué à la portée de largage.

## Panneau de volume

![wso_volume_panel](../../../img/wso_volume_panel.jpg)

Un petit panneau à droite du manche de commande de l'antenne contient deux
boutons combinés pour contrôler le volume.

### Avertissement de canopée/basse altitude

Le bouton cubique (<num>1</num>) règle le niveau audio pour les avertissements vocaux d'ouverture de
la verrière et de basse altitude.

Ce système n'est pas installé sur cette variante du F-4E.

### Avertissement de décrochage

Le bouton d'avertissement de décrochage (<num>2</num>) contrôle le volume de
les tonalités [AoA](../../../systems/flight_controls_gear/flight_controls.md#aural-tone-system) qui
retentissent en volant à certains angles.

Dans certaines conditions, le système peut remplacer le volume pour garantir le signal
est toujours audible dans les situations dangereuses.

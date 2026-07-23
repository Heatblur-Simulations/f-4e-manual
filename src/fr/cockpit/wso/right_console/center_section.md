# Section centrale

La section centrale de la console droite est dominée par le
[WRCS](../../../systems/weapon_systems/wrcs.md) panneau pour la livraison d'armes. Pour
des informations plus détaillées voir le
[WRCS chapitre](../../../systems/weapon_systems/wrcs.md).

## Panneau de l'ensemble d'ordinateur de lancement d'arme (WRCS)

![wso_weapon_release_computer_set_panel](../../../img/wso_wrcs_panel.jpg)

### Contrôles de distance cible

Une paire de fenêtres à rouleaux de tambour à quatre positions avec boutons analogiques
correspondants. La fenêtre supérieure (<num>1</num>) référence les distances dans l'orientation Nord-Sud (avec
le premier rouleau marqué N/S), et la fenêtre inférieure (<num>2</num>) fait référence aux
distances dans l'orientation Est-Ouest (avec le premier rouleau marqué E/W).

Les rouleaux font référence à la distance indiquée par incréments de 100 pieds, donc un
décalage de 4 000 pieds vers l'Est serait entré sous la forme E0040.

Les rouleaux fonctionnent de manière analogique, ainsi des fractions de 100' peuvent être
atteintes en modérant le dernier rouleau en conséquence ; à titre d'exemple, une valeur de
250 pieds serait atteinte avec l'espace entre les valeurs 2 et 3 à mi-chemin dans
la fenêtre, à la position du dernier chiffre.

### Contrôle d'altitude cible/IP

Une fenêtre de rouleau de tambour à trois positions (<num>3</num>) avec bouton analogique
correspondant
utilisé pour entrer l'altitude du point initial du radar ou de la cible réelle
elle-même, référencée par incréments de 100'. Les valeurs fractionnaires peuvent être
saisies comme décrit précédemment. Cette valeur peut être modifiée une fois que le point
d'identification radar (RIP) ou le point d'identification visuelle (VIP) est correctement
défini pour augmenter la précision du système de largage.

### Contrôle du coefficient de traînée

Une fenêtre de rouleau de tambour à trois positions (<num>4</num>) avec bouton analogique
correspondant
utilisé pour saisir la valeur du coefficient de traînée de l'arme utilisée à partir du
tables de bombardement pour le mode de lancement prévu.

> 🚧 Des tables de recherche seront bientôt fournies. Cependant, le
> [calculateur de bombardement](../../../dcs/bombing_computer.md) fournit des
> solutions fonctionnelles pour toutes les armes, quel que soit le cas.

### Libérer le contrôle avancé

Une fenêtre de rouleau de tambour à trois positions (<num>5</num>) avec bouton analogique
correspondant
utilisé pour avancer le signal de libération donné par le
[WRCS](../../../systems/weapon_systems/wrcs.md) au système de conduite d'incendie
par rapport au point cible WRCS, sur une durée comprise entre 0 et 999 millisecondes.
Fonctionne également en conjonction avec la synchronisation de largage programmée par
[ARBCS/LABS](../../../systems/weapon_systems/arbcs.md).

Cela peut être utilisé pour étendre un bombardement sur une zone cible, par exemple pour
placer la 3ème bombe d'une salve de 10 bombes sur la cible.

La commande d'avance au déverrouillage peut être calculée avec le
[calculateur de bombardement](../../../dcs/bombing_computer.md).

### Contrôle de la plage de relâchement

Une fenêtre de rouleau de tambour à trois positions (<num>6</num>) avec bouton analogique
correspondant
utilisé pour régler manuellement la portée de la bombe conformément à l'entrée du calendrier
de largage de l'arme dans les tables de bombardement.

La portée peut être calculée avec le
[calculateur de bombardement](../../../dcs/bombing_computer.md).

### Bouton WRCS BIT

Un bouton à six positions (<num>7</num>) utilisé pour effectuer des vérifications BIT sur les
modes de largage individuels du [WRCS](../../../systems/weapon_systems/wrcs.md). Le
contrôle BIT est effectué en sélectionnant le mode de test souhaité, en appuyant sur le
bouton pendant cinq secondes, puis en appuyant sur le bouton Freeze du Panneau de
configuration du curseur tout en maintenant le bouton BIT enfoncé pour confirmer la fonction.

Voir [WRCS BIT](../../../procedures/bit_tests/wrcs.md) pour plus de détails.

## Panneau de configuration du curseur

![wso_cursor_control_panel](../../../img/wso_cursor_control_panel.jpg)

Utilisé pour la saisie de cible en mode de bombardement radar
[WRCS](../../../systems/weapon_systems/wrcs.md). Fonctionne uniquement avec
[MAP-PPI](../../../systems/radar/air_to_ground.md#map-mode-ppi) mode sélectionné
et le mode de bombardement applicable sélectionné sur le
[Bouton de mode de distribution](../../../cockpit/pilot/weapon_management.md#delivery-mode-knob).

### Bouton Freeze

Un bouton poussoir (<num>1</num>) utilisé dans les bombardements air-sol avec le
[WRCS](../../../systems/weapon_systems/wrcs.md) pour lancer le suivi de la vitesse de
l'avion à partir de l'[INS,](../../../systems/nav_com/ins.md) ainsi que
maintenir la position cible définie par les portes de curseur Along Track et Cross
Track, définissant ainsi le point initial du radar. Le bouton
s'allume et reste allumé jusqu'à ce que le bouton de réinitialisation soit enfoncé, ou un autre
le mode de livraison est sélectionné.

### Bouton Target Insert

Un bouton poussoir (<num>2</num>) qui insère les valeurs de décalage Nord-Sud et Est-Ouest
saisies sur le panneau de commande [WRCS](../../../systems/weapon_systems/wrcs.md) dans
l'ordinateur [WRCS](../../../systems/weapon_systems/wrcs.md), en effectuant le décalage
par rapport au point initial du radar défini par les portes de curseur Along Track et
Cross Track, actuellement suivi grâce au bouton Freeze. Cette prise en compte du
décalage déplace les curseurs Along Track et Cross Track pour définir la cible réelle,
déterminée par les décalages du [WRCS](../../../systems/weapon_systems/wrcs.md) sur
l'écran radar. Cette action initie les informations de pilotage de la cible à partir
du [WRCS](../../../systems/weapon_systems/wrcs.md) vers les écrans de navigation.

Le système [Pave Spike](../../../systems/weapon_systems/pave_spike/overview.md)
utilise également la fonctionnalité Target Insert pour son mode mémoire.

### Bouton de réinitialisation

En appuyant sur le bouton de réinitialisation (<num>3</num>), l'emplacement de la cible au
sol actuellement suivie est effacé de la mémoire de l'ordinateur
[WRCS](../../../systems/weapon_systems/wrcs.md), les curseurs Along Track et Cross Track
reviennent à leurs positions par défaut, et les valeurs du système de poursuite de
vitesse sont réinitialisées à zéro.

### Roue Along Track

La molette Along Track (<num>4</num>) est utilisée pour définir la distance relative de
l'avion par rapport au point initial du radar, à l'aide d'un curseur hémisphérique en
expansion/contraction sur l'écran radar. Cet hémisphère présente une véritable portée
vers la cible via la projection hémisphérique PPI, permettant ainsi au point initial du
radar d'être détecté lors d'une approche décalée de la cible. Une approximation de la
portée jusqu'au point initial du radar doit d'abord être établie avec la molette Along
Track avant d'utiliser la molette Cross Track, pour une meilleure précision du système :
le curseur doit être placé sous l'écho attendu du point initial du radar sur l'écran
radar, puis la molette Cross Track amenée jusqu'à ce point de retour.

### Roue Cross Track

La molette Cross Track (<num>5</num>) est utilisée pour définir le cap vers le point
initial du radar sur l'affichage radar en mode PPI, présenté sous forme de ligne
verticale. L'intersection des curseurs Along Track et Cross Track définit le point
initial du radar lorsque le bouton Freeze est enfoncé.

## Interrupteur de consentement des munitions nucléaires

![wso_nuclear_stores_consent_switch](../../../img/wso_nuclear_consent_switch.jpg)

Utilisé pour armer les munitions nucléaires. En position SAFE, le largage est inhibé. REL
permet de larguer les munitions désarmées, tandis que REL/ARM permet de larguer des
munitions nucléaires armées.

## Mode point céleste

![Mode point céleste](../../../img/wso_skyspot_switch.jpg)

Sur le côté extérieur droit de la console droite se trouve un interrupteur qui permettrait de
sélectionner le mode du système Combat Skyspot utilisé pour les bombardements dirigés au sol.

Le système n'a jamais été installé sur cette variante du F-4E.

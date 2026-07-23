# Gestion des armes

![MwsGroup](../../img/pilot_weapon_management.jpg)

Ce groupe, situé dans la zone gauche du panneau principal, fournit tous les paramètres liés
aux armes, tels que l'armement des missiles ou la sélection du mode de largage de bombes. Il
dispose d'un indicateur de vitesse réelle (<num>1</num>), d'un indicateur d'affichage tête haute
(<num>2</num>), d'un bouton de luminosité des instruments de vol (<num>3</num>), de
l'interrupteur d'armement nez/queue (<num>4</num>), des boutons de sélection de station
(<num>5</num>), l'interrupteur Master Arm (<num>6</num>), le bouton du mode de largage
(<num>7</num>), le bouton de sélection d'arme (<num>8</num>), les voyants d'état du missile
(<num>9</num>), l'interrupteur d'alimentation du missile radar (<num>10</num>), le
voyant d'embarquement du réservoir central (<num>11</num>), l'interrupteur de verrouillage
(<num>12</num>), le contrôle de largage sélectif (<num>16</num>) et les contrôles AWRU
(<num>13</num>, <num>14</num> et <num>15</num>).

## Indicateur de portée

![indicateur_de plage](../../img/pilot_overhead_range_indicator.jpg)

Ce panneau fournit au pilote une lecture de la distance oblique mesurée par la nacelle de
désignation [Pave Spike](../../systems/weapon_systems/pave_spike/overview.md)
(x100 pieds).

Lorsque le bouton de test (<num>3</num>) est enfoncé, l'écran affiche 888. Le bouton situé
sous le bouton de test (<num>5</num>) contrôle la luminosité de l'affichage
(<num>2</num>).

Le bouton de mode (<num>1</num>) permet au pilote de sélectionner l'un des deux modes de
largage d'armes disponibles avec le pod :

- [WRCS](../../systems/weapon_systems/wrcs.md) - Livraison automatique
- ROR - Libération à portée

En position SET, l'écran affiche la portée de largage souhaitée utilisée en mode ROR.
Le bouton situé sous l'affichage (<num>4</num>) peut être utilisé pour régler cette portée.

## Indicateurs d'affichage tête haute

![HUD](../../img/pilot_head_up_display_indicators.jpg)

Le panneau indicateur d'affichage tête haute indique l'état de l'arme pour le contrôle Master
Arm, ainsi que l'arme air-air actuellement sélectionnée, en fonction de la position
du petit interrupteur (pinky switch) sur la poignée d'accélérateur gauche.

| Nom | Descriptif |
| ----- | --------------------------------------------------------------- |
| RADAR | S’allume lorsqu’un missile air-air guidé par radar est sélectionné. |
| HEAT | S’allume lorsqu’un missile air-air à guidage infrarouge est sélectionné.   |
| GUN | S’allume lorsque le canon nasal est sélectionné.                      |
| ARM | S’allume lorsque le commutateur Master Arm est sélectionné sur ARM.      |

## Indicateur de canal distant UHF

![UHFInd](../../img/pilot_uhf_remote_channel_indicator.jpg)

Fournit la valeur actuelle du canal sélectionné lorsque la radio est réglée sur PRESET.
Sinon, l'indicateur affiche M si la radio est réglée sur Manuel, G lorsque le
La fonction COMM est définie sur GUARD/ADF ou A lorsque le commutateur A-3-2-T est sur A.

## Indicateur de vitesse réelle

![TASInd](../../img/pilot_true_airspeed_indicator.jpg)

Fournit la vitesse réelle de l'avion en nœuds et est calibrée de 150 à
1 500 nœuds ; les vitesses inférieures à cette plage ne sont donc pas fiables.

## Bouton de luminosité des instruments de vol

![Bouton de luminosité des instruments de vol](../../img/pilot_flight_instrument_brightness_knob.jpg)

Contrôle l'éclairage des bords des principaux instruments de vol des **deux cockpits**.

Une rotation dans le sens des aiguilles d'une montre augmentera leur luminosité, mais en même temps
atténuera aussi la plupart des voyants d'avertissement et d'indication de l'avion.

> 💡 Lorsqu'elles sont atténuées, les lampes SHOOT sont entièrement éteintes.

Les lumières des instruments de vol peuvent en outre être contrôlées individuellement avec des
boutons
sur le
[Panneau d'intensité des lumières des instruments de
vol](right_console/wall.md#flight-instrument-lights-intensity-panel),
situé sur le mur de droite.

Voir [3.9. Éclairage intérieur](../../systems/lighting.md#interior-lighting) pour
détails.

> 🚧 L'éclairage des instruments de vol est actuellement lié au
> [Bouton du tableau de bord](./right_console/center_section.md#instrument-panel-knob)
> sur la console de droite à la place. Les contrôles appropriés seront mis à disposition
> plus tard pendant l'accès anticipé.

## Interrupteur d'armement nez/queue

![NTArm](../../img/pilot_nose_tail_arming.jpg)

Contrôle les solénoïdes d'armement des racks MER et TER, en sélectionnant depuis quelle(s)
position(s) MER/TER les cordons d'armement sont tirés des fusées de bombe larguées lors de la
séparation, ce qui les arme. Cette fonction contrôle également la capacité de traînée
sélective faible/élevée pour les bombes retardées.

| Nom | Descriptif |
| --------- | --------------------------------------------------------------------------------- |
| SAFE | Aucun solénoïde d'armement ne s'active ; largage des bombes sans fusée activée.               |
| NOSE | Les solénoïdes de position avant et centrale s'activent pour maintenir les longes d'armement.           |
| TAIL | Les solénoïdes de position arrière s'activent pour maintenir les longes d'armement.                          |
| NOSE/TAIL | Les solénoïdes de position avant, centrale et arrière s'activent tous pour maintenir les longes d'armement. |

Par exemple, les variantes MK-82 Air ou Snakeye ne détoneront que si la fusée avant est
sélectionnée, et basculent entre une configuration à traînée élevée si la fusée de queue est
réglée, et à faible traînée si elle ne l'est pas.

## Boutons de sélection de station

![SSB](../../img/pilot_station_select_buttons.jpg)

Les boutons de sélection de station sont utilisés pour activer les stations de munitions air-sol
et le canon nasal. Lors de la sélection d'une station, la moitié supérieure indiquant la
La position s'allumera en vert pour confirmer que la station est active. La moitié inférieure
s'allumera en orange une fois le mode nécessaire sélectionné, si l'arme est
compatible avec l'option du bouton de sélection d'arme, que le Master Arm est en position ARM,
et que toute période d'échauffement nécessaire pour le type d'arme sélectionné est
terminée. Les positions L et R sont respectivement gauche et droite, O désignant
hors-bord et I désignant les stations intérieures. La position de l'arme sur la ligne centrale est
CL,
et le canon nasal est armé du bouton de sélection de la station GUN.

![ext_pylons](../../img/ext_pylons.jpg)

### Bouton de gradateur

Un bouton variateur est également fourni pour monter ou baisser l'éclairage des boutons de
sélection de station par rapport aux conditions actuelles du cockpit.

Si le bouton de luminosité des instruments de vol situé au-dessus est réglé sur la position
CCW complète, il remplace le bouton du gradateur et les boutons de sélection de station sont
toujours allumés à pleine luminosité.

> 💡 Le bouton du variateur ne peut contrôler la luminosité que dans une plage limitée.

## Interrupteur Master Arm

![MAArm](../../img/pilot_master_arm.jpg)

Fournit une fonction d'armement principal pour toutes les armes de l'avion.

## Bouton de mode de livraison

![DelMode](../../img/pilot_delivery_mode_knob.jpg)

Le bouton de mode de largage règle le système de conduite de tir sur le type de largage d'arme
air-sol souhaité. Divisé en deux moitiés, le côté gauche du cadran correspond aux modes de largage
ARBCS (Altitude Reference and Bombing Computer Set), tandis que le côté droit fournit des
fonctions de largage automatisées à l'aide du WRCS (Weapon Release Computer Set), avec une
possible liaison à l'ordinateur de navigation selon le mode. À la position 11 heures se trouve
la position OFF, utilisée pour les armes air-air (y compris le canon). Le mode suivant, DIRECT,
est utilisé pour les armes dirigées par vidéo comme l'AGM-65, ainsi que comme mode de
bombardement à largage direct. La série complète des positions est la suivante, dans le sens des
aiguilles d'une montre à partir de la gauche :

| Nom | Descriptif |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [INST O/S](../../stores/air_to_ground/bombs/employment/lofting_tossing.md#instantaneous-over-the-shoulder---inst-os) | Instantané sur l'épaule |
| [LOFT](../../stores/air_to_ground/bombs/employment/lofting_tossing.md#loft) | Loft |
| [O/S](../../stores/air_to_ground/bombs/employment/lofting_tossing.md#timed-over-the-shoulder---os) | (Chronométré) Par-dessus l'épaule |
| [T LAD](../../stores/air_to_ground/bombs/employment/lofting_tossing.md#timed-low-angle-drogue-delivery---t-ladd) | LADD chronométré (Low Angle Drogue Delivery) |
| [TL](../../stores/air_to_ground/bombs/employment/level_release.md#timed-level---tl) | Niveau chronométré |
| OFF | Désactivé (air-air) |
| [DIRECT](../../stores/air_to_ground/bombs/employment/manual_release.md#manual-release---direct) | Manuel Direct |
| [TGT FIND](../../stores/air_to_ground/bombs/employment/accurate_modes.md#target-find---tgt-find) | Recherche de cible (mode Nav et [Pave Spike](../../systems/weapon_systems/pave_spike/overview.md) uniquement) |
| [DT](../../stores/air_to_ground/bombs/employment/accurate_modes.md#dive-toss---dt) | Lancer de plongée |
| [DL](../../stores/air_to_ground/bombs/employment/laydown_modes.md#dive-laydown---dl) | Dépose de plongée |
| [L](../../stores/air_to_ground/bombs/employment/laydown_modes.md#laydown---l) | Mise en place |
| [OFF SET](../../stores/air_to_ground/bombs/employment/offset_delivery.md#offset-delivery---offset) | Bombe compensée |
| [AGM-45](../../stores/air_to_ground/missiles/shrike.md) | [AGM-45 Shrike](../../stores/air_to_ground/missiles/shrike.md) |

Pour plus d'informations, voir
[4.3 Chapitre sur les armes air-sol.](../../stores/air_to_ground/overview.md)

## Bouton de sélection d'arme

![WSK](../../img/pilot_weapon_selector_knob.jpg)

Utilisé pour sélectionner le type d'arme approprié, fournissant des signaux de déclenchement à
l'AWRU (Unité de largage des armes aériennes). Les positions ARM et TV inhibent le tir des armes
air-air à moins qu'un signal CAGE soit actif. Les positions ARM et TV n'affectent pas
l'état de réglage des armes à guidage radar. Les positions sont les suivantes :

| Nom | Descriptif |
| ----------- | --------------------------------------------------------------------------------------------- |
| AGM-12 | [AGM-12 Bullpup](../../stores/air_to_ground/missiles/bullpup.md) |
| BOMBS | Bombes (tous types, y compris les CBU).                                                             |
| RKTS & DISP | Fusées et distributeurs.                                                                       |
| ARM | Missile anti-rayonnement ([AGM-45 Shrike](../../stores/air_to_ground/missiles/shrike.md)).      |
| TV | Armes électro-optiques ([AGM-65 Maverick](../../stores/air_to_ground/missiles/maverick.md)). |
| C | Non utilisé ; peut être utilisé comme position OFF.                                                 |
| B | Comme le commutateur AIR TO AIR dans le cockpit arrière, annule l'exigence CAGE.                             |
| A | Mode de sauvegarde qui libère simultanément des CBU, des fusées ou des distributeurs ; les bombes ne lâchent pas.  |

## Unité de largage d'armes d'avion

![AWRU](../../img/pilot_awru.jpg)

Fournit une planification de largage à intervalles chronométrés de bombes simples ou multiples,
de roquettes ou de munitions dispersées, en fonction des choix effectués entre le bouton
d'intervalle, le bouton QTY (quantité) et le commutateur INTRVL.

Pour plus d'informations, voir
[3.11.2 Unité de largage des armes de l'avion (AWRU).](../../systems/weapon_systems/awru.md)

### Bouton d'intervalle

Le bouton d'intervalle (<num>1</num>) fournit des séquences d'impulsions de libération comprises
entre 0,05
seconde et 1 seconde.

### Commutateur d'intervalle

Le commutateur INTRVL (<num>2</num>) offre l'option d'un multiplicateur 10x du
valeur réglée du bouton d’intervalle. En position NORM, la valeur du bouton d'intervalle est
la minuterie de déclenchement.

### Bouton de quantité

Le bouton de quantité (<num>3</num>) contrôle le nombre de magasins libérés par
impulsion.

La sélection de « 1 » place l'AWRU en mode de bombardement manuel unique ; une pression du
bouton de largage de bombe libère une bombe.

La sélection d'une valeur comprise entre « 2 » et « 18 » définit l'AWRU en mode d'ondulation
unique ; dans ce mode, l'AWRU larguera des bombes selon l'intervalle programmé
jusqu'à ce que le nombre de munitions défini soit lâché, ou que le bouton de largage de bombe
soit relâché. Une fois relâché, le compte est réinitialisé, et une pression prolongée ultérieure
fera tomber le nombre programmé de bombes.

La sélection de « C » définit l'AWRU en mode continu unique ; appuyer sur le bouton de largage
de bombe laisse tomber des munitions selon l'intervalle programmé jusqu'à ce que
le bouton de largage de bombe soit relâché, ou que toutes les munitions des pylônes sélectionnés
soient épuisées.

Le réglage « P » concerne le mode manuel par paires. Avec au moins deux stations sélectionnées,
chaque pression sur le bouton de la bombe libérera deux bombes. Comme le mode manuel unique,
cela n'inclut pas de fonction d'intervalle.

Enfin, le réglage "S", pour salvo, largue des bombes selon l'intervalle choisi, depuis
toutes les stations sélectionnées simultanément, jusqu'à ce que le bouton de largage de bombe
soit relâché. Ainsi, si quatre stations sont sélectionnées avec un intervalle de 2 secondes (0,2 sur
le cadran d'intervalle, réglage du commutateur X10 INTRVL), quatre bombes seront larguées toutes
les deux secondes tant que le bouton de largage de bombe est maintenu enfoncé.

## Voyants d'état des missiles

![MSL](../../img/pilot_missile_status_lights.jpg)

La fenêtre des voyants d'état des missiles fournit une confirmation des missiles actuellement
installés et configurés, voir le
[chapitre 4.2 sur les missiles air-air](../../stores/air_to_air/overview.md).

### Lumières radar

Les voyants RDR (<num>2</num>) s'allument une fois que les missiles AIM-7 sont correctement réglés
avec le système de conduite de tir. Toute station qui ne transporte pas de Sparrow, qui ne se
synchronise pas correctement pendant le réglage, ou dont le missile a été lancé, s'éteindra.

La paire de feux de gauche indique les stations 4 et 3 de haut en bas, tandis que
la paire de droite est reliée respectivement aux stations 6 et 7.

### Lumières chauffantes

Les voyants HEAT (<num>1</num>) s'allument un par un, plutôt que tous simultanément lors de la
configuration du circuit. Le voyant de la station actuellement sélectionnée s'allume dès la
remontée du train d'atterrissage, et reste dans cet état jusqu'à ce que l'arme soit changée à
l'aide de l'option de rejet du Gun/Missile Switch de l'accélérateur, ou jusqu'à ce qu'elle soit
lancée. La disposition des voyants HEAT correspond à la
[séquence de lancement](../../stores/air_to_air/aim_9.md#launch-sequence) de
l'[AIM-9](../../stores/air_to_air/aim_9.md).

La paire de feux de gauche représente respectivement les stations 2L et 2R, tandis que
la paire de droite est liée aux stations 8L et 8R.

## Interrupteur d'alimentation des missiles radar

![Interrupteur d'alimentation du missile radar](../../img/pilot_radar_missile_power_switch.jpg)

L'interrupteur d'alimentation du missile radar fournit l'alimentation à l'émetteur à onde
continue (CW) du klystron, responsable des signaux de guidage. Cela alimente également le
dispositif de réglage des Sparrow (Tuning Drive), responsable du réglage des Sparrows sur la
bonne fréquence porteuse à onde continue pour le guidage.

Lorsque le bouton d'alimentation du radar est hors de la position OFF, l'alimentation est appliquée
au
circuit 30 secondes après cette sélection.

La position STBY maintient la puissance de préchauffage des missiles et du dispositif de réglage
à onde continue une fois les missiles réglés. Cela maintient les Sparrows et le Tuning Drive au
chaud, mais les Sparrows ne sont pas réglés.

La position CW ON permet un réglage constant et une surveillance de l'état du missile lorsque
le mode radar n'est pas en TV. Cela provoque également le démarrage de l'émission d'ondes
continues du klystron radar.

Le réglage peut être effectué au sol avec le radar en mode TEST pour éviter
émissions mettant en danger le personnel au sol.

## Lumière à bord du réservoir central

![Feu central du réservoir à bord](../../img/pilot_centerline_tank_aboard_light.jpg)

S'allume lorsqu'un état du magasin empêche l'éjection ou le lancement d'un
missile AIM-7 installé dans l'une des deux positions avancées. Pour utiliser les
Sparrows sur ces stations, le magasin central doit être le premier à être largué.

Voir
[3.12.1 Système d'armes multiples](../../systems/weapon_systems/multiple_weapons_system.md#centerline-tank-aboard-light)
pour plus de détails.

## Commutateur de verrouillage

![Interrupteur de verrouillage](../../img/pilot_interlock_switch.jpg)

Un interrupteur à deux positions qui détermine si le système de conduite de tir démarre
les verrouillages de paramètres peuvent empêcher le lancement d'un AIM-7 lorsque le déclencheur
est tiré.

| Nom | Descriptif |
| ---- | ------------------------------------------------------------------------------------------------- |
| IN | Verrouillages engagés ; les limites de portée, les limites ASE ou le radar non en interception visuelle empêchent le lancement.   |
| OUT | Annulation des verrouillages ; L'AIM-7 se déclenchera lorsque la gâchette sera enfoncée, même si aucune condition de lancement n'est remplie. |

## Contrôle sélectif des largages

![SelJet](../../img/pilot_selective_jettison_control.jpg)

Le bouton de contrôle de largage sélectif permet au pilote d'accéder directement au largage des
munitions, poste par poste.

Le pilote sélectionne la position souhaitée en tournant le bouton puis appuie sur le
bouton sur sa façade pour abandonner les magasins sélectionnés.

| Nom | Descriptif |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| OFF | Neutralise le bouton PUSH TO JETT sur le panneau de commande de largage sélectif.                                                                                                                                              |
| STORES | Libère tous les MER/TER, les cartouches simples portées, les LAU-88 montés ou les réservoirs largables actuellement sélectionnés sur les boutons de la station lors de PUSH TO JETT.                                                                         |
| L/R FWD | Largages [AIM-7](../../stores/air_to_air/aim_7.md) depuis la position respective sur PUSH TO JETT. Inhibé si CL TK ON.                                                                                            |
| L/R AFT | Largages [AIM-7](../../stores/air_to_air/aim_7.md) depuis la position respective sur PUSH TO JETT.                                                                                                                   |
| L/R WING | En conjonction avec TV ou ARM, larguez un seul [AGM-65 Maverick](../../stores/air_to_ground/missiles/maverick.md) ou [AGM-45 Shrike](../../stores/air_to_ground/missiles/shrike.md) de l'aile sur PUSH TO JETT. |

Par exemple, pour larguer les réservoirs de carburant externes droit et gauche, le pilote doit
sélectionnez _STORES_ sur le bouton, appuyez sur les boutons de sélection de station correspondants
_LO_, _RO_ puis appuyez sur le bouton de largage.

## Lampe enregistreur

![lampe_enregistreur_pilote](../../img/pilot_recorder_light.jpg)

Cette lampe à intensité variable est allumée pour indiquer le fonctionnement du
[Enregistreur vidéo aéroporté (AVTR)](../../cockpit/wso/left_sub_panel.md#avtr-control).

Le système AVTR est contrôlé par le WSO et enregistre le son de l'interphone,
ainsi que l'image de l'écran radar arrière.

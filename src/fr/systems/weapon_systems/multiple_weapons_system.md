# Système d'armes multiples

Le système d'armes multiples est conçu pour fournir un point de gestion unique
pour tous les emports livrables par le F-4 en ce qui concerne l'armement, l'activation des
pylônes, le mode de largage et le largage sélectif. Bien que certaines armes puissent avoir
des commandes supplémentaires ailleurs dans le cockpit au cas par cas, toutes les
fonctions mentionnées sont pilotées par ce panneau, situé sur la console avant gauche du
cockpit avant.

## Commutateur ARM nez/queue

![pilot_nose_tail_arm](../../img/pilot_nose_tail_arming.jpg)

En commençant par le haut du panneau, le commutateur Nose/Tail ARM à quatre voies sélectionne
les solénoïdes pour la capture du fil d'armement sur les MER et TER, qui arment ensuite les fusées
au moment de la libération. De plus, la position du commutateur peut également dicter
le mode de largage en vol à traînée élevée/faible pour les bombes retardées telles que la
[Mk 82 Snakeye](../../stores/air_to_ground/bombs/conventional_bombs.md).

| Nom | Descriptif |
| --------- | --------------------------------------------------------------------------------- |
| SAFE | Aucun solénoïde d'armement ne s'active ; largage des bombes sans fusée activée.               |
| NOSE | Les solénoïdes de position avant et centrale s'activent pour maintenir les longes d'armement.           |
| TAIL | Les solénoïdes de position arrière s'activent pour maintenir les longes d'armement.                          |
| NOSE/TAIL | Les solénoïdes de position avant, centrale et arrière s'activent tous pour maintenir les longes d'armement. |

Par exemple, les variantes MK-82 Air ou Snakeye ne détoneront que si la fusée avant est
sélectionnée, et basculeront entre une configuration à traînée élevée si la fusée arrière est
également réglée, et à traînée faible si elle ne l'est pas.

Les racks MER-10 et TER-9 incluent une fonction de mode pas à pas automatique pour
contourner automatiquement les stations qui ont déjà largué des munitions. Pour activer cette
fonction, lorsque le mode BOMBS du bouton de sélection d'arme est choisi, l'interrupteur
Nose/Tail doit être en position NOSE ou NOSE & TAIL pour que les signaux de déclenchement soient
livrés via les MER et TER installés et pour contourner les positions vides ; si le
système est réglé sur TAIL, une ou plusieurs impulsions de libération supplémentaires doivent être
appliquées à l'aide de l'interrupteur de largage pour parcourir les stations vides. L'utilisation
du MER-10A et du TER-9A permet de contourner cette exigence.

RKTS et DISP contournent automatiquement les stations vides.

## Boutons de sélection de station

![pilot_station_select_buttons](../../img/pilot_station_select_buttons.jpg)

Avec les boutons de sélection de station, il est possible de sélectionner les différents armements
sur les stations respectives. Cela ne constitue pas un armement air-air.

## Sélection du mode - Bouton du mode de livraison

![pilot_delivery_mode_knob](../../img/pilot_delivery_mode_knob.jpg)

Le mode de largage est défini à l’aide du bouton de mode de livraison. Les valeurs à gauche de
OFF utilisent l'ensemble informatique de référence d'attitude et de bombardement AN/AJB-7
([ARBCS](../../systems/weapon_systems/arbcs.md)), alors que les valeurs à droite de
DIRECT utilisent l’ensemble informatique de largage d’armes
([WRCS](../../systems/weapon_systems/arbcs.md)). DIRECT est le mode de largage manuel.
TGT FIND fonctionne comme un mode de navigation et ne peut pas fournir de signal de déclenchement
d'arme au système de conduite de tir ; il peut donc être considéré, en pratique, comme une
position « sûre ».

Les valeurs, dans le sens des aiguilles d'une montre en partant de la gauche, sont les suivantes :

| Nom | Descriptif | Système |
| -------- | ---------------------------------------------------------------------- | ---------------------------------------------- |
| INST O/S | Instantané par-dessus l'épaule | [ARBCS](../../systems/weapon_systems/arbcs.md) |
| LOFT | Loft | [ARBCS](../../systems/weapon_systems/arbcs.md) |
| O/S | (Chronométré) Par-dessus l'épaule | [ARBCS](../../systems/weapon_systems/arbcs.md) |
| T LAD | LADD chronométré (livraison à faible angle par parachute drogue) | [ARBCS](../../systems/weapon_systems/arbcs.md) |
| TL | Niveau chronométré | [ARBCS](../../systems/weapon_systems/arbcs.md) |
| OFF | Désactivé |                                                |
| DIRECT | Manuel |                                                |
| TGT FIND | Recherche de cible (Navigation et [Pave Spike](pave_spike/overview.md) uniquement) | [WRCS](../../systems/weapon_systems/wrcs.md) |
| DT | Lancer de plongée | [WRCS](../../systems/weapon_systems/wrcs.md) |
| DL | Dépose de plongée | [WRCS](../../systems/weapon_systems/wrcs.md) |
| L | Dépose | [WRCS](../../systems/weapon_systems/wrcs.md) |
| OFFSET | Bombardement décalé | [WRCS](../../systems/weapon_systems/wrcs.md) |
| AGM-45 | Livraison de l'AGM-45 | [WRCS](../../systems/weapon_systems/wrcs.md) |

## Bouton de sélection d'arme

![pilot_weapon_selector_knob](../../img/pilot_weapon_selector_knob.jpg)

Le bouton de sélection d'arme est utilisé pour désigner le type d'arme à utiliser.

| Nom | Descriptif |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| RKTS & DISP | [Fusées](../../stores/air_to_ground/rockets.md) et distributeurs. Circuit de déclenchement des armes AWRU.               |
| ARM | [AGM-45 Shrike](../../stores/air_to_ground/missiles/shrike.md) |
| TV | [AGM-65 Maverick](../../stores/air_to_ground/missiles/maverick.md) et autres armes guidées EO.             |
| C | Ouvert/inutilisé. Peut être utilisé comme sélection OFF.                                                           |
| B | Même fonction que le [bouton AIR-TO-AIR](../../cockpit/wso/left_sub_panel.md#air-to-air-light) dans le cockpit arrière. |
| A | Munitions avec intervalomètres réglés en interne (CBU ou pulvérisateurs).                                   |
| AGM 12 | [AGM-12 Bullpup](../../stores/air_to_ground/missiles/bullpup.md).                                           |
| BOMBS | [Bombes](../../stores/air_to_ground/bombs/conventional_bombs.md). Circuit de déclenchement des armes AWRU.               |

## Lumière à bord du réservoir central

![pilot_centerline_tank_aboard](../../img/pilot_centerline_tank_aboard_light.jpg)

Les missiles [AIM-7](../../stores/air_to_air/aim_7.md) avant peuvent être inhibés de
lancement dans certaines conditions liées à l'axe central, en raison d'une possible séparation
ou d'un risque d'enflammer le contenu de la position axe central. Le voyant du réservoir CL
s'allumera si une telle condition existe. Les conditions
qui peuvent provoquer cela sont les suivantes :

1. Réservoir de carburant, racks MER ou TER : Les Sparrows avant ne peuvent pas être lancés. Le CL
  le voyant du réservoir s'éteindra si le réservoir ou le MER est largué, permettant le lancement ou
  largage des Sparrows.

2. Connecteur BRU-5/A avec une seule bombe ou un pod de canon : le voyant de réservoir CL
  s'allumera ; cependant, les Sparrows en position avant peuvent toujours être lancés ou
  largués. Il convient de veiller à éliminer les mouvements de roulis latéraux
  jusqu'à ce que l'arme lancée soit dégagée.

3. Connecteur Aero-27/A avec unité d'armement Centerline (utilisé pour les munitions nucléaires) :
  Le voyant du réservoir CL s’allumera. Cependant, les AIM-7 en position avant
  ne peuvent pas être largués ou relâchés tant que l'ensemble de l'unité n'a pas été retiré
  manuellement après le vol.

## Commutateur de verrouillage

Le système de contrôle de tir propose une option d'inhibition pour les lancements d'AIM-7 afin de
confirmer que les paramètres requis sont respectés ; elle est accessible via le commutateur
INTLK. Avec IN sélectionné, le missile ne se largera pas au déclenchement si l'une des
conditions suivantes n'est pas remplie :

1. Le témoin IN RANGE s'est allumé
2. Le point de visée cible dans le cercle ASE (erreur de direction admissible)
3. Le bouton radar n'est pas en mode VI

Avec le commutateur INTLK sur OUT, l'AIM-7 peut être lancé à tout moment, peu importe
l'état des paramètres actuels par rapport à la cible.

Le commutateur INTLK ne fournit aucune fonction pour le lancement de l'AIM-9.

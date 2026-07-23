# Emploi à la bombe

Le Phantom dispose d'un large éventail de modes d'armes pour utiliser des bombes. La plupart des
modes nécessitent que le WSO effectue des saisies dans le
[ARBCS](../../../../systems/weapon_systems/arbcs.md)/[WRCS](../../../../systems/weapon_systems/wrcs.md).

Pour une aide au calcul, voir le
[Chapitre du calculateur de bombardement](../../../../dcs/bombing_computer.md). Vous pouvez l'ouvrir
et le fermer en appuyant sur <kbd>RCTRL</kbd> + <kbd>B</kbd> dans le jeu.

> 💡 Lorsque vous volez avec Jester, utilisez le
> [Outil de calcul des bombardements](../../../../dcs/bombing_computer.md) pour planifier votre
> attaque et pour dire à Jester de préparer l'avion pour ce profil.

Les modes de livraison peuvent être grossièrement classés en :

| Catégorie | Modes | Remarques |
| ------------------- | -------------------------- | ---------------------------------------------------- |
| Précis | DT, TGT FIND | vue directe, pas de préparation, cibles d'opportunité |
| Livraison offset | OFFSET | cible non directement visible |
| Libération de niveau | TL | par ex. livraison sûre à haute altitude depuis le dessus des nuages |
| Modes de pose | DL, L | faible niveau, traînée élevée ou CBU |
| Lofting et lancer | LOFT, O/S, INST O/S, T LAD | garder la distance avec la cible |
| Manuel | DIRECT | sauvegarde, bombardement militaire classique |

## Balistique

Le Phantom n'a pas d'interface numérique indiquant à son ordinateur quelles armes il a
chargées. Pour que le WRCS sache comment une arme se comportera balistiquement, l'équipage
doit entrer un
[Coefficient de traînée](../../../../systems/weapon_systems/wrcs.md#drag-coefficient-control).

Ce coefficient dépend non seulement du **type** de bombe, mais aussi des paramètres de largage
tels que l'**altitude relative** au-dessus de la cible, la **vitesse de
largage**, ainsi que l'**angle de largage**.

Ces paramètres jouent un rôle crucial dans **tous les modes de livraison** du Phantom.
Pour que l'arme se comporte selon la valeur du coefficient de traînée configurée, il est
important que l'équipage planifie ces paramètres à l'avance, puis qu'il respecte également ces
paramètres lors de l'exécution de l'attaque.

> 💡 Certaines armes et profils d'attaque offrent généralement plus de latitude que
> autres. En règle générale, larguer des bombes à faible traînée depuis des altitudes plus basses à
> des angles de plongée plus raides seront plus indulgents que le largage de bombes à forte traînée depuis
> des altitudes élevées et des vitesses à des angles peu profonds.

## Pilote

Après avoir défini le mode de livraison souhaité sur le
[Bouton de mode de livraison](../../../../cockpit/pilot/weapon_management.md#delivery-mode-knob),
le pilote doit sélectionner BOMBS sur le
[Bouton de sélection d'arme](../../../../cockpit/pilot/weapon_management.md#weapon-selector-knob).

> 💡 CBU-1 et CBU-2 doivent être déployés en utilisant le paramètre RKTS & DISP au lieu de
> BOMBS.

Les stations correspondantes à partir desquelles déployer les bombes sont ensuite sélectionnées et
armées en utilisant le
[Interrupteur d'armement principal](../../../../cockpit/pilot/weapon_management.md#master-arm-switch)
et le
[Boutons de sélection de
station](../../../../cockpit/pilot/weapon_management.md#station-select-buttons).

Certaines bombes prennent en charge les paramètres de fusée sélectionnables à l'aide du
[Interrupteur d'armement
nez/queue](../../../../cockpit/pilot/weapon_management.md#nosetail-arming-switch).

Ensuite, le pilote peut définir la quantité de bombes à larguer par impulsion de largage et le
intervalle entre les impulsions en utilisant les interrupteurs sur le
[AWRU](../../../../cockpit/pilot/weapon_management.md#aircraft-weapons-release-unit)
panneau.

Une fois que tout est mis en place, les bombes sont généralement larguées en appuyant sur le
bouton Bombe sur le manche de vol.

## WSO

En fonction du mode sélectionné, le WSO doit configurer l'avion pour le profil d'attaque
souhaité. Seuls les modes DT et TGT FIND ne nécessitent généralement aucune préparation.

### Panneau WRCS

Les paramètres les plus pertinents se trouvent sur le panneau WRCS. Pour que le WRCS
calcule des solutions balistiques appropriées lors de livraisons sans plongée, le WSO doit
entrer un coefficient de traînée adapté à la bombe et à l'altitude souhaitées à l'aide du
[Contrôle du coefficient de
traînée](../../../../cockpit/wso/right_console/center_section.md#drag-coefficient-control).

> 💡 Les nombres de coefficients de traînée peuvent être calculés avec le
> [Outil de calcul des bombardements](../../../../dcs/bombing_computer.md). La planche à genoux
> fournit également des tables de recherche.

À l'exception du mode DT, il est nécessaire de saisir l'altitude du
cible ou l'IP en utilisant le
[Contrôle d'altitude
cible/IP](../../../../cockpit/wso/right_console/center_section.md#targetip-altitude-control).

Si plusieurs bombes sont censées être larguées au cours d'une seule attaque, leur schéma peut être
décalé vers l'avant ou vers l'arrière à l'aide du
[Contrôle d'avance de
largage](../../../../cockpit/wso/right_console/center_section.md#release-advance-control).

> 💡 L'avance de largage peut être calculée facilement à l'aide du
> [Outil de calcul des bombardements](../../../../dcs/bombing_computer.md).

Pour les attaques décalées, le décalage est entré sous forme de distance dans les directions N/S et
E/W au point de référence (IP, VIP, RIP) à l'aide du
[Contrôles de distance
cible](../../../../cockpit/wso/right_console/center_section.md#target-distance-controls).

> 💡 La distance cible en N/S et E/W peut être convertie à partir d'une distance directe et
> cap en utilisant le
> [Outil de calcul des bombardements](../../../../dcs/bombing_computer.md).

Certains modes, tels que DL et L nécessitent de saisir la distance jusqu'à la cible à partir d'un
point précalculé. Cela peut être fait en utilisant le
[Contrôle de portée de
largage](../../../../cockpit/wso/right_console/center_section.md#release-range-control).

### Ordinateur d'angle de largage de bombe

Pour les modes lofting, l'angle de déclenchement souhaité peut être réglé avec le
[Contrôle d'angle faible](../../../../cockpit/wso/right_sub_panel.md#bomb-release-angle-computer),
tandis que le contrôle d'angle élevé est utilisé pour les modes de lancer.

### Minuteries de bombardement

Les modes LOFT, O/S et T LAD nécessitent le réglage d'un
[Minuterie Pull Up](../../../../cockpit/wso/right_sub_panel.md#bombing-timers) qui
commencera le compte à rebours lors du survol de l'IP. Une fois épuisé, il donne au
pilote des signaux pour initier la manœuvre de remontée. La minuterie doit être calculée
en fonction de la distance et de l'altitude de la cible par rapport au
vitesse et altitude souhaitées de l'avion, ainsi que le largage souhaité
angle.

> 💡 Les valeurs de la minuterie Pull-Up peuvent être calculées à l'aide du
> [Outil de calcul des bombardements](../../../../dcs/bombing_computer.md).

De plus, les modes TL et T LAD utilisent une minuterie de libération.

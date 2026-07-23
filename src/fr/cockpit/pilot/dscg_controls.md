# Contrôles DSCG

![Commandes DSCG](../../img/pilot_dscg_overview.jpg)

Le Digital Scan Converter Group (DSCG) fait référence à l'écran utilisé pour afficher les
données radar et le flux vidéo des armes TV ou des modules de ciblage. Le DSCG remplace les
oscilloscopes radar à tube de stockage à vue directe, qui ne pouvaient pas interagir avec les
interfaces numériques.

> 💡 Le sélecteur de source vidéo se trouve sur le
> [groupe du piédestal](pedestal_group.md#screen-source-switch).

## Bouton d'intensité/échelle du réticule

![RetIntensité](../../img/pilot_dscg_reticle_intensity.jpg)

Le bouton d'intensité/échelle du réticule (<num>2</num>) permet de contrôler la luminosité du
réticule et du
radar
répéteur.

| Nom | Descriptif |
|---------|----------------------------------------------------------------------------------------|
| RET INT | Contrôle la luminosité du réticule du canon.                                            |
| SCALE | Contrôle l'intensité lumineuse de l'échelle de portée sur les bords de la lunette radar avant. |

## Levier d'obturation de vue

![Obturateur visuel](../../img/pilot_dscg_sight_shutter.jpg)

Le levier (<num>4</num>) change la source de lumière du viseur optique pour éviter d'endommager
l'optique
haut
la lumière du soleil. Est utilisé [après
l'atterrissage](../../procedures/landing/checklists.md#after-landing)
pour éviter d'endommager la vue lors du stationnement.

## Bouton de dépression du réticule

![RetDepress](../../img/pilot_dscg_reticle_depression_knob.jpg)

Le bouton de dépression du réticule (<num>11</num>) contrôle la dépression manuelle par incréments
de 1 mil de 0 à
245 mils. La dépression manuelle est utilisée pour
[bombardement à livraison directe](../../procedures/bombs/bombs_direct_delivery.md) et livraison de
le [AGM-65 Maverick](../../stores/air_to_ground/missiles/maverick.md).

## Bouton du mode de visée

![Mode Visée](../../img/pilot_dscg_sight_mode_knob.jpg)

Le bouton rotatif (<num>12</num>) sélectionne le mode de fonctionnement du viseur.

| Nom | Descriptif |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| OFF | Éteint le système.                                                                                                                                                                 |
| STBY | Réchauffe le système. Le réticule reste éteint.                                                                                                                                             |
| CAGE | Le réticule est affiché et mis en cage sur la ligne de visée radar (RBL). Ceci est utilisé pour le [décollage](../../procedures/takeoff/takeoff.md) et l'[atterrissage](../../procedures/landing/landing.md). |
| A/G | Sélectionne le mode air-sol. La dépression réglée manuellement est référencée à partir de la ligne de référence du fuselage (FRL).                                                                               |
| A/A | Sélectionne le mode de calcul du plomb air-air. La position est définie par le gyroscope, la portée et CADC, et peut être mise en cage.                                                                               |
| BIT 1 | Autotest du système [mode 1](../../procedures/bit_tests/optical_sight.md).                                                                                                               |
| BIT 2 | Autotest du système [mode 2](../../procedures/bit_tests/optical_sight.md).                                                                                                               |

## Bouton OPR ERS/Contraste

![Contrôle](../../img/pilot_dscg_opr_ers_contrast_knob.jpg)

Commande à deux fonctions (bouton-poussoir à l'intérieur du bouton) (<num>3</num>) de l'écran avant
de l'oscilloscope.

| Nom | Descriptif |
|---------|----------------------------------------------------------------------------------------|
| OPR/ERS | Le bouton active ou efface l'affichage dans les avions avec DVST. Aucune fonction avec la portée DSCG. |
| CONTR | Contrôle le contraste vidéo/arrière-plan affiché sur la lunette avant.                   |

## Bouton de luminosité/bouton de ligne d'horizon

![BrtHrz](../../img/pilot_dscg_brightness_knob_horizon_line.jpg)

Commande à double bouton (<num>6</num>) des paramètres d'affichage de l'oscilloscope avant.

| Nom | Descriptif |
|--------|--------------------------------------------------------------------------|
| BRT | Contrôle la luminosité relative de l’affichage avant de l’oscilloscope.              |
| HOR LN | Ajuste la ligne d'horizon relative affichée sur les écrans radar dans les deux cockpits. |

## Onglet INT

![pilot_int_tab](../../img/pilot_dscg_int_tab.jpg)

L'onglet INT (<num>7</num>) tourne autour de l'écran pour modifier l'obscurité relative de l'écran.
affichage radar, permettant au pilote d'ajuster la lunette par rapport à l'environnement
lumière. Avec l'onglet INT, un filtre de polarisation tourne sur l'oscilloscope.

## Onglet rouge

![pilot_red_tab](../../img/pilot_dscg_red_tab.jpg)

L'onglet rouge (<num>8</num>) est tourné pour fournir un affichage de lunette rouge pour le vol de
nuit.

## Lumière de portée

![InRng](../../img/pilot_dscg_in_range_light.jpg)

Le voyant IN RANGE (<num>5</num>) s'allume pour alerter le pilote que la cible actuellement
verrouillée
est dans les paramètres de plage.

## Maintenir la lumière d'altitude

![HoldAlt](../../img/pilot_dscg_hold_alt_light.jpg)

Le voyant HOLD ALT (<num>10</num>) s'allume pour donner une instruction au pilote depuis le feu.
système de contrôle pour maintenir l'altitude actuelle afin de faciliter une interception
instantanée
situation contre une cible au-dessus du combattant. Les prédicats sont :

- Une portée supérieure à ce que l'arme peut faire,
- Altitude supérieure à 32 000 pieds, et
- La cible verrouillée se trouve à plus de 8 000 pieds au-dessus du chasseur.

Lorsque le voyant HOLD ALT est allumé, le chasseur doit être piloté pour centrer le
point de direction par rapport à l’azimut du cercle ASE. Lorsque le voyant HOLD ALT
s'éteint, le chasseur devrait alors accélérer en tangage pour centrer complètement la direction
point dans le cercle ASE. Voir le système radar [3.10](../../systems/radar/overview.md) pour en
savoir plus.

## Lumière des roues

![Roues](../../img/pilot_dscg_wheels_light.jpg)

Le voyant WHEELS (<num>1</num>) s'allume lorsque l'avion ralentit en dessous de la vitesse de
déploiement des volets.
(environ 230 nœuds, selon l'altitude)
avec [le pignon](../../systems/flight_controls_gear/gear_ground_handling.md) toujours relevé.
Dans cette situation, l'avion suppose que l'intention est d'atterrir et le voyant s'allume
pour suggérer de baisser le rapport.

## Voyants de plage

![RngLights](../../img/pilot_dscg_range_lights.jpg)

Les voyants de plage (<num>9</num>) s'allument par rapport aux paramètres de plage sélectionnés par
le WSO.
La portée est fournie dans le coin supérieur droit de la portée DSCG.

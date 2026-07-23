# Groupe du piédestal

![PedGrp](../../img/pilot_pedestal_group_overview.jpg)

Le groupe du piédestal comprend le commutateur de source d'écran (<num>1</num>), l'interrupteur
de cadence de tir (<num>2</num>), l'interrupteur d'effacement automatique (<num>3</num>), un
compteur de coups (<num>4</num>), un accéléromètre (<num>5</num>), les manomètres de pression
d'huile moteur (<num>6</num>), les manomètres hydrauliques (<num>7</num>), l'interrupteur TGT/MSL
(<num>9</num>), un sélecteur de bande (<num>10</num>) et un manomètre pneumatique
(<num>8</num>).

## Accéléromètre

![GGauge](../../img/pilot_accelerator.jpg)

Calibré de moins 4 à plus 10 en unités de G, avec trois pointeurs -
un pour la charge actuellement appliquée, les deux autres affichent le maximum positif et
G négatif appliqué pendant le vol. Appuyer sur le bouton PUSH TO SET réinitialisera
les indicateurs de position maximale à 1 G.

## Indicateurs de pression d'huile moteur

![Presse à huile](../../img/pilot_engine_oil.jpg)

Une paire d'indicateurs de pression d'huile moteur est fournie, un pour chaque moteur,
calibré de 0 à 100 PSI. L'huile moteur est utilisée pour la lubrification, variable
positionnement de la buse et fonctionnement de l'unité d'entraînement à vitesse constante. Valeurs
importantes
sont :

- 12 PSI - Minimum au régime de ralenti
- 30-60 PSI – Militaire en vol
- 35 PSI - Minimum statique à poussée militaire
- 60 PSI - Maximum

Pour plus d'informations, voir
[3.2.1 Chapitre Moteurs](../../systems/engines_and_fuel_systems/engines.md).

## Indicateurs de pression hydraulique

![HydPress](../../img/pilot_hydraulic_pressure.jpg)

Deux indicateurs de pression hydraulique sont installés. Celui de droite fait référence à
la pression du système hydraulique utilitaire, tandis que celui de gauche fait référence aux
systèmes hydrauliques PC-1 et PC-2. Ce dernier comprend deux aiguilles marquées
en conséquence. Des transmetteurs de pression, un pour chaque système, convertissent la pression
des impulsions en impulsions électriques, qui, à leur tour, sont fournies aux indicateurs.
La pression de fonctionnement nominale pour les trois systèmes est de 3 000 ± 250 PSI. Autre
les valeurs importantes sont :

- 2000-2750 - Normal avec mouvement de commande rapide
- 2750-3250 - Normale
- 3250-3400 - Si la pression dépasse 3250 en régime permanent, l'entrée doit être enregistrée sur
  le formulaire 781
- 3400 - Maximum

Pour plus d'informations, voir
[3.5 Chapitre Hydraulique](../../systems/hydraulics.md).

## Indicateur de pression pneumatique

![Indicateur de pression pneumatique](../../img/pilot_pneumatic.jpg)

Affiche la pression d'admission du système pneumatique mesurée par l'émetteur de pression,
qui fournit des entrées électriques à l'indicateur. Gardez à l'esprit
qu'il n'affiche pas les pressions individuelles des bouteilles pneumatiques d'urgence. Normale
La plage de pression du système est de 2 650 à 3 300 psi en raison du transmetteur de pression et
tolérances du manomètre.

D'autres valeurs importantes sont :

- 3300-3500 - Zone de prudence
- 3500 - Maximum

Pour plus d'informations, consultez le
[3.6 Chapitre Pneumatique](../../systems/pneumatics.md).

## Commutateur de source d'écran

![Commutateur de source d'écran](../../img/pilot_radar_tv_switch.jpg)

Contrôle quelle source vidéo est affichée sur l’écran DSCG. C'est indépendant
du WSO, permettant au pilote de visualiser une source différente du WSO.

En position Radar, le radar sera affiché à l'écran. La télévision affichera soit
les flux d'armes, tels que Maverick, soit la caméra du pod de désignation, selon le
[bouton de sélection vidéo](../wso/left_sub_panel.md#video-select-button) dans
le poste de pilotage WSO.

La position Off éteint l'écran.

## Interrupteur de cadence de tir

![pilot_pedestral_group_rate_of_fire_switch](../../img/pilot_rate_switch.jpg)

Utilisé pour changer la cadence de tir du canon entre un réglage ÉLEVÉ (6 000 coups par
minute) et un réglage BAS (4000 coups par minute).

## Commutateur d'effacement automatique

![pilot_pedestral_group_auto_clear_switch](../../img/pilot_clear_switch.jpg)

Le canon tirera environ entre 5 et 11 coups à partir du moment où
le pilote a relâché la gâchette, afin de purger toutes les actions de verrou dans le canon. Cette
rotation prend environ une seconde, pendant laquelle le canon ne peut pas tirer
à nouveau. Cela s'applique uniquement aux modules de canon transportés
à l'extérieur, et non au canon principal.

L’option AUTO CLEAR doit être utilisée chaque fois qu’un module de canon est utilisé.

## Indicateur de tours restants

![Tours](../../img/pilot_rounds_remaining.jpg)

Affiche le nombre de coups de canon nasal actuellement disponibles. Le compteur doit être réglé
manuellement par le pilote à chaque réarmement.

## Commandes Shrike

Deux interrupteurs pour contrôler les paramètres des
[AGM-45 Shrikes](../../stores/air_to_ground/missiles/shrike.md).

### Commutateur de rejet TGT/MSL

![pilot_shrike_tgt_reject](../../img/pilot_tgt_missile_reject.jpg)

Interrupteur à double usage pour contrôler
[Mavericks](../../stores/air_to_ground/missiles/maverick.md) et
[Shrike](../../stores/air_to_ground/missiles/shrike.md).

Pour les Mavericks, la position à ressort TGT/MSL REJ fait défiler les
Mavericks disponibles qui sont actuellement sélectionnés et armés. Si six Mavericks sont
équipés, la station avec le Maverick non en cage et actif est cyclée. Pour passer à
l'autre poste, désarmez simplement le poste actif et sélectionnez l'autre.
La position DF REJ n'a aucune fonction.

Pour les Shrikes, TGT/MSL REJ désactive complètement le chercheur d'arme jusqu'à ce qu'il soit
relâché.
La position DF REJ sélectionne le mode WRCS pour recevoir une solution, tandis que
la position centrale utilise à la place le système de recherche propre à l'arme, moins précis.

> 🚧 En raison des limitations du moteur, la fonctionnalité du commutateur TGT/MSL REJ pour les Shrikes n'est pas disponible.

### Commutateur de bande

![pilot_shrike_tgt_reject](../../img/pilot_shrike_band.jpg)

Permet de sélectionner la plage de bande captée par
[Shrike](../../stores/air_to_ground/missiles/shrike.md).

> 💡 DCS n'inclut aucune variante Shrike
> qui prend en charge la commutation de bande.

## Manivelle de réglage de la pédale de gouvernail

![PedAdjust](../../img/pilot_pedal_adjust.jpg)

Utilisé pour régler la position ergonomique des pédales de direction vers l'avant ou vers l'arrière
depuis
le pilote.

Nécessite 38 tours complets pour déplacer les pédales sur toute la plage.

# Section centrale

La zone centrale de la console gauche comprend le panneau de commande radar
et de contre-mesures.

## Panneau de commande du radar

Voir
[Panneau de commande du radar](../../../systems/radar/interface.md#radar-set-control-panel)
pour une description plus détaillée de toutes les fonctions ci-dessous.

![wso_radar_set_control_panel](../../../img/wso_radar_panel.jpg)

### Bouton d'alimentation

![Bouton d'alimentation](../../../img/wso_radar_power_switch.jpg)

Commutateur rotatif à cinq positions (<num>1</num>) contrôlant l'état d'alimentation du
[Radar APQ-120.](../../../systems/radar/overview.md)

| Nom | Descriptif |
|------|------------------------------------------------------------------------------------------------------------------------------------|
| OFF | Éteint le radar.                                                                                                                  |
| TEST | Applique une tension pour contrôler l'alimentation du moniteur et fournit les fonctions [BIT-test](../../../procedures/bit_tests/overview.md) 1 à 6. |
| STBY | L'alimentation appliquée au radar reste dans un état de veille sans transmission.                                                               |
| OPR | Le système est pleinement opérationnel.                                                                                                       |
| EMER | Annule les restrictions de temporisation, de pression et de température pour permettre le fonctionnement du radar.                                         |

Voir la section [sur la puissance du radar](../../../systems/radar/interface.md#power) pour
plus de détails.

### Commutateur polaire

![Commutateur polaire](../../../img/wso_radar_polar_switch.jpg)

L'interrupteur à trois positions (<num>3</num>) contrôle la polarisation de l'énergie
radiofréquence transmise. LIN doit être utilisé dans des conditions normales, CIR 1 et CIR 2
peuvent être utilisés pour réduire l’encombrement dû aux précipitations au détriment d'une
augmentation du fouillis au sol.

[Voir la section Bouton de polarisation du radar pour plus de détails.](../../../systems/radar/interface.md#polarization-control)

### Bouton de plage

![Bouton de plage](../../../img/wso_radar_range_switch.jpg)

Le commutateur rotatif (<num>2</num>) est utilisé pour sélectionner une plage de balayage de 5, 10,
25, 50,
Portées de 100 ou 200 milles sur les deux écrans radar. Des plages allant jusqu'à 50 sont affichées
sur
la [lampe de portée](../../pilot/dscg_controls.md#range-lights).

Voir la
[section sur le bouton de portée du radar](../../../systems/radar/interface.md#radar-set-control-panel)
pour plus de détails.

### Commutateur de manœuvre

![Commutateur de manœuvre](../../../img/wso_radar_maneuver_switch.jpg)

L'interrupteur à deux positions (<num>4</num>) contrôle l'accélération du suivi radar
réponse. LOW définit une limite sur l'accélération de l'antenne et HI supprime l'accélération
limite.

[Voir la section Bouton de manœuvre du radar](../../../systems/radar/interface.md#maneuver-switch)

### Commutateur de balayage des barres

![Commutateur de balayage des barres](../../../img/wso_radar_bar_scan_switch.jpg)

Le commutateur à deux positions (<num>5</num>) sélectionne le modèle de balayage d'élévation entre 1
et 2 barres. Seuls les modes RDR-B peuvent utiliser 2 barres.

[Voir la section des commutateurs de balayage radar pour plus de détails](../../../systems/radar/interface.md#scan-switch)

### Bouton d'aspect

![Bouton d'aspect](../../../img/wso_radar_aspect_knob.jpg)

Le commutateur rotatif (<num>6</num>) permet de programmer le
[AIM-7](../../../stores/air_to_air/aim_7.md) avec un Doppler simulé prédéterminé
au lieu du Doppler réellement reçu, afin que le WSO puisse fournir une
porte de vitesse correcte estimée pour le Sparrow lorsqu'il n'est pas suivi.

[Voir la section Bouton d'aspect pour plus de détails](../../../systems/radar/interface.md#aspect)

### Boutons de gain du récepteur (RCVR GAIN)

![Bouton de gain du récepteur](../../../img/wso_radar_receiver_gain.jpg)

Contrôle de gain grossier (bague extérieure, <num>8</num>) et fin (bouton intérieur, <num>7</num>)
pour le
radar
récepteur. Des valeurs plus élevées entraînent davantage de bruit et peuvent saturer l'affichage.
Des valeurs inférieures peuvent entraîner des portées de détection inférieures.

[Voir la section Bouton de gain du récepteur pour plus de détails](../../../systems/radar/interface.md#receiver-gain-rcvr-gain)

### Commutateur de piste

![Interrupteur de voie](../../../img/wso_radar_track_switch.jpg)

L'interrupteur à trois positions (<num>9</num>) sélectionne le type de suivi de portée à utiliser
dans
environnements très encombrés ou suivi automatique dans des circonstances normales.

[Voir la section des commutateurs de piste radar pour plus de détails](../../../systems/radar/interface.md#track-switch)

### Bouton d'affichage

![Bouton d'affichage](../../../img/wso_radar_display_knob.jpg)

Le commutateur rotatif (<num>10</num>) règle le type d'affichage de l'écran radar afin
d'accéder à une fonctionnalité de mode spécifique en conjonction avec le bouton Mode. Les types
sont les suivants :

| Nom | Descriptif |
|----------|---------------------------------------------------------------------------------------------------------------|
| B WIDE | Sélectionne un balayage B à 120 degrés pour la recherche. La demi-action place le balayage sous le manche de commande manuelle de l'antenne.  |
| B NAR | Sélectionne un secteur de balayage B de 45 degrés pour la recherche, qui est déplacé manuellement avec le manche de commande manuelle de l'antenne. |
| PPI WIDE | Sélectionne un balayage d'indicateur de position de plan de 120 degrés de large pour le mode MAP.                                         |
| PPI NAR | Sélectionne un balayage de l'indicateur de position de plan à 45 degrés qui peut être déplacé avec le manche de commande manuelle de l'antenne.    |
| VI | Fournit un guidage de poursuite pure vers une cible verrouillée pour l'interception visuelle ; une pause X apparaîtra à une distance de 1000 pieds. |

### Bouton Vc manuel

![Bouton Vc manuel](../../../img/wso_radar_man_vc.jpg)

Un interrupteur à 12 positions (<num>12</num>) utilisé pour appliquer le taux de plage estimé de
fermeture (dans le sens des aiguilles d'une montre, 0-9) ou ouverture estimée de la plage (dans le
sens inverse des aiguilles d'une montre, 0-2)
contre une cible en mode de suivi manuel.

Les chiffres sont multipliés par 100 nœuds ; se rapprocher signifie se rapprocher du
F-4, et l'ouverture signifie que la cible s'éloigne du F-4.

[Voir la section Bouton MAN Vc pour plus de détails](../../../systems/radar/interface.md#manual-vc-man-vc)

### Commutateur à impulsion

![Commutateur à impulsions](../../../img/wso_radar_pulse_switch.jpg)

Interrupteur à trois positions (<num>11</num>) contrôlant la largeur et l'impulsion du radar
fréquence de répétition (PRF).

| Nom | Descriptif |
|-------|-----------------------------------------------------------------------------------------------------------------------|
| AUTO | Utilise la commutation de mode de niveau de puissance pour déterminer la meilleure sélection d'impulsion. Sélectionne une impulsion courte pour l'acquisition et le suivi. |
| LONG | Large largeur d'impulsion et faible PRF, permettant une détection de portée maximale ; pas de réglage automatique de l'impulsion.                  |
| SHORT | Largeur d'impulsion étroite avec PRF élevé pour des performances accrues à courte portée.                                               |

[Voir la section sur les commutateurs à impulsions pour plus de détails](../../../systems/radar/interface.md#pulse-switch)

### Bouton de mode

![Bouton de mode](../../../img/wso_radar_mode_knob.jpg)

Un commutateur rotatif à six positions (<num>14</num>) qui détermine la base actuelle
mode de fonctionnement du radar.

| Nom | Descriptif |
|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| BST | Visée air-air avec ligne de visée radar alignée sur l'antenne et viseur optique avec visée en A/A.                                                                                                          |
| RDR | Mode de recherche avec nutation Feedhorn (largeur de faisceau plus large).                                                                                                                                                  |
| MAP | Mode de recherche sans nutation Feedhorn (largeur de faisceau plus étroite) |
| AIR-GRD | [Visée air-sol](../../../systems/radar/interface.md#air-grd-air-to-ground-position), suit la portée du sol éclairé, le radar est orienté vers la ligne de visée radar avec compensation de dérive. |
| BEACON | Le radar reçoit et affiche les signaux des transpondeurs de balises au sol ou aéroportés pour la navigation.                                                                                                              |
| TV | Non utilisé avec DSCG. Désaccorde [AIM-7](../../../stores/air_to_air/aim_7.md) si sélectionné, empêchant les Sparrows de se guider.                                                                                     |

> 💡 Les balises ne sont actuellement pas implémentées dans DCS et ne peuvent donc pas être utilisées

[Voir la section Bouton de mode pour plus de détails](../../../systems/radar/interface.md#radar-modes-mode)

### Voyant de suivi Skin Track

Lampe (<num>13</num>) qui s'allume lorsqu'une piste est atteinte avec des données de distance.
En cas de [HOJ](../../../systems/radar/air_to_air.md#home-on-jam) ou d'une
situation de mémoire de portée, la lumière s'éteindra. Ceci est accompagné, sur l'écran radar
DSCG arrière, du symbole T qui s'allume dans les mêmes circonstances.

## Manettes

![wso_manettes](../../../img/wso_throttles.jpg)

La disposition des gaz pour chaque moteur du F-4E Phantom II est située sur
la console gauche des cockpits avant et arrière. La liaison mécanique transmet le mouvement de
l'accélérateur à la commande de carburant du moteur. La manette des gaz du cockpit arrière ne
permet pas la postcombustion. Situé sur l'accélérateur arrière se trouve un interrupteur de
frein de vitesse et un interrupteur de micro.

### Frein de vitesse

![wso_speed_brake](../../../img/wso_throttles_speed_brake.jpg)

Les freins de vitesse sont actionnés par un interrupteur à trois positions (<num>1</num>) situé
sur l'accélérateur intérieur dans les deux cockpits. L’un ou l’autre interrupteur actionnera les
freins. Les positions sont Out, Stop et In ; la position Out est momentanée et revient
à Stop une fois relâchée.

Pour plus d'informations, consultez le
[3.1.2 Chapitre Surfaces de contrôle de vol.](../../../systems/flight_controls_gear/flight_controls.md#speed-brakes)

### Commutateur de micro

![wso_mic_switch](../../../img/wso_throttles_mic_switch.jpg)

L'interrupteur du microphone (<num>2</num>) pour le système d'interphone est la position arrière
sur la poignée des gaz intérieure dans les deux cockpits. Lors de l'utilisation de l'interphone,
tout
l'audio, sauf la tonalité de rappel, l'avertissement de décrochage et l'ECM, est réduit (identique à
RADIO OVERRIDE). En position avant, le commutateur permet la transmission par radio.

## Unité de commande du cockpit (CCU) AN/ALE-40

![wso_an_ale_40](../../../img/wso_an_ale_40.jpg)

Le CCU est un panneau de contrôle principal du système de contre-mesures.

Il permet de sélectionner différents modes de fonctionnement et donne au WSO la possibilité
de dispenser des contre-mesures.

Pour plus d'informations, voir
[CCU](../../../systems/defensive_systems/countermeasures.md#cockpit-control-unit-ccu---wso-cockpit).

### Bouton de distribution

Le bouton-poussoir (<num>1</num>) lance la distribution de paillettes/fusées éclairantes comme
sélectionné par l'unité de commande du cockpit et le
[programmateur AN/ALE-40](../../../cockpit/pilot/left_console/aft_section.md#anale-40-programmer).

### Commutateur d'ondulation

Protégé par un couvercle (<num>2</num>), lorsqu'il est positionné sur ON, distribue des fusées
éclairantes au rythme
de dix par seconde jusqu'à ce que les distributeurs soient vides, à condition que les volets et les
freins de vitesse
soient rétractés.

> 💡 Après environ 10 secondes, toutes les fusées éclairantes ont été distribuées.

### Compteurs

Indique la quantité de cartouches de paillettes (<num>3</num>) et de fusées éclairantes
(<num>6</num>)
restantes, respectivement.

Ils sont automatiquement réglés par l'équipe au sol lors du réarmement.

### Bouton de mode paillette

Un bouton de commutation rotatif (<num>7</num>) qui contrôle la quantité de paillettes distribuées.

| Nom | Descriptif |
|------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| OFF | Système de paillettes inactif.                                                                                                                                                         |
| SGL | Une seule **rafale** commandée lorsque le bouton de distribution est enfoncé.                                                                                                                     |
| MULT | Une **salvo** commandée selon le [programmateur](../../../systems/defensive_systems/countermeasures.md#programmer---pilot-cockpit) lorsque l'un des boutons de distribution est enfoncé.        |
| PROG | Plusieurs **salvos** commandées selon le [programmateur](../../../systems/defensive_systems/countermeasures.md#programmer---pilot-cockpit) lorsque l'un des boutons de distribution est enfoncé. |

### Bouton du mode fusée éclairante

Un bouton de commutation rotatif (<num>4</num>) qui contrôle la quantité de fusées éclairantes
distribuées.

| Nom | Descriptif |
|------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| OFF | Système de fusée inactif.                                                                                                                                                 |
| SGL | Une seule **rafale** commandée lorsque le bouton de distribution est enfoncé.                                                                                                             |
| PROG | Une **salvo** commandée selon le [programmateur](../../../systems/defensive_systems/countermeasures.md#programmer---pilot-cockpit) lorsque l'un des boutons de distribution est enfoncé. |

### Voyants lumineux

S'allume (5 et 8) chaque fois qu'un mode est sélectionné sur le
bouton du mode de contre-mesure.

Peut être tourné pour atténuer et appuyer pour tester.

# Indicateurs initiaux

L'avant de la verrière fournit au WSO tous les éléments pertinents
instruments de vol et jauges.

## Boussole magnétique de veille

![StbyMagComp](../../img/wso_standby_magnetic_compass.jpg)

Un compas magnétique standard pour une aide à la navigation de secours si les systèmes
directeurs de vol principaux tombent en panne.

La boussole ne doit être utilisée qu'en vol en palier. Déviation de la boussole
Les cartes se trouvent au-dessus du rebord droit de la verrière sur chaque cockpit.

## Poignée de sélection d’éjection de commande

![wso_command_ejection_select_handle](../../img/wso_ejection_selector.jpg)

Utilisé pour sélectionner une éjection simple ou double comme commandé par le WSO. À la verticale
position (vanne fermée), le déclenchement de l'éjection par le WSO n'éjecte que l'arrière
siège. Avec la poignée de la vanne en position horizontale (ouverte), un WSO déclenchant
l'éjection extraira les deux membres de l'équipage.

## Indicateur de cours

![wso_course_indicator](../../img/wso_course_indicator.jpg)

Utilisé lors d'une approche [ILS](../../systems/nav_com/vor_ils.md), affiche l'alignement de piste
et la pente de descente
écarts représentés par des points (<num>3</num>) — 1 point équivaut à 1 1/4 degrés pour le cap et
1/4 degré
pour pente de descente.

Le pointeur de cap (<num>1</num>) indique le cap de l'avion par rapport au
cap sélectionné défini par le bouton (<num>4</num>) en bas à gauche.

Ne fonctionne pas avec [TACAN](../../systems/nav_com/tacan.md)
ou [VOR](../../systems/nav_com/vor_ils.md). Les drapeaux OFF s'affichent en cas de perte de signal.

### Lampe de balise de marquage

Le voyant en haut à droite (<num>2</num>) s'allume lors du survol d'une station de balise,
à condition que le système [VOR/ILS](../../systems/nav_com/vor_ils.md) ait été activé.
De plus, un signal audio est diffusé via le système d’interphone.

La lampe peut être tournée pour atténuer et poussée pour tester.

Voir le système [VOR/ILS](../../systems/nav_com/vor_ils.md) pour plus de détails.

## KY-28 Indicateur de mode

![wso_ky28_mode_indicator](../../img/wso_ky_28_indicator.jpg)

Indicateur à deux lampes illustrant le mode de fonctionnement actuel KY-28 - P (<num>1</num>)
indique une transmission en mode clair
(non crypté), alors que C (<num>2</num>) indique une transmission en mode chiffré (crypté).

> 💡 Les communications UHF nécessitent que le système soit en mode Plain, même
> avec le système hors tension, interdisant l'utilisation et la surveillance du canal de garde.

## Voyant d'avertissement principal

![wso_master_caution](../../img/wso_master_caution.jpg)

Un répétiteur du cockpit avant [Voyant Master Caution](../../systems/emergency.md#master-caution),
fournit un avertissement au WSO indiquant qu'une condition d'avertissement existe et
le [panneau télélumineux](../../systems/emergency.md#telelight-panel) est à vérifier
pour une cause afin de rectifier la situation.

> 💡 Il n'y a pas de bouton de réinitialisation séparé pour le WSO. Le pilote doit
> réinitialisez l’avertissement principal si cela se produit.

## Voyant de tir

![LftShoot](../../img/wso_shoot_light.jpg)

S'allume lorsque les paramètres de tir du missile sont respectés. Ne s'allume pas
en mode Interception Visuelle (VI) ou Air-Sol.

## RWR Indicateur d'azimut

![RWRAz](../../img/wso_rwr_indicator.jpg)

L'indicateur d'azimut du [récepteur d'alerte radar](../../systems/defensive_systems/radar_warning_receiver.md)
affiche toutes les sources radar visibles par le récepteur d'avertissement radar.
Le bouton en bas à gauche contrôle la luminosité de l’écran.

![Commandes](../../img/wso_rwr_control_panel.jpg)

Il reste une boîte avec plusieurs boutons pour faire fonctionner le système.

Pour plus d’informations et une explication des boutons, consultez le
[Récepteur d'avertissement radar](../../systems/defensive_systems/radar_warning_receiver.md)
chapitre.

### Commutateur de contraste cible

![Commutateur de contraste cible](../../img/wso_target_contrast.jpg)

Utilisé pour sélectionner les conditions de contraste appropriées pour l'acquisition par
autodirecteur avec
le [AGM-65A Maverick et AGM-65B Maverick](../../stores/air_to_ground/missiles/maverick.md).

| Nom | Descriptif |
|---------|---------------------------------------------------------------------------|
| WHT/BLK | Programme l'autodirecteur de missile pour suivre une cible claire sur un fond sombre. |
| AUTO | Programme le missile pour utiliser son mode de suivi automatique.                  |
| BLK/WHT | Programme l'autodirecteur de missile pour qu'il suive une cible sombre sur un fond clair. |

Cela ne change pas la polarité de la vidéo mais le codage du chercheur lui-même.

### Bouton audio ML

![Bouton audio ML](../../img/wso_target_contrast.jpg)

Contrôle le volume du système de lancement de missiles qui émet des tonalités pour avertir
le WSO sur le fait d'être attaqué.

## Indexeur d'angle d'attaque

![AoA](../../img/wso_aoa_indexer.jpg)

Une paire d'indicateurs à gauche et à droite qui fournissent un accès rapide
confirmation de l'état actuel de l'AoA de l'avion basé sur l'éclairage
position et couleur.

![AoA_table](../../img/aoa_table.jpg)

Peut également indiquer des signaux de direction d'arme et un système de tonalité sonore en arrière
l'indication avec des signaux sonores.
Voir [Système d'angle
d'attaque](../../systems/flight_controls_gear/flight_controls.md#angle-of-attack-system)
pour plus de détails.

> 💡 Les indexeurs AoA ne sont allumés qu'avec le train d'atterrissage droit sorti.

## Lumières d'activité APX-81A

![Lumière d'activité](../../img/wso_apx_81_light.jpg)

Juste à côté de l'un ou l'autre des indexeurs AoA dans le cockpit WSO se trouve un voyant qui
indique
activité détectée par le système APX-81A Combat Tree.

S'allume chaque fois que le système détecte des réponses IFF d'un avion hostile.

> 💡 En raison des limitations du moteur, les voyants d'activité ne s'allument que si un
> Le transpondeur répond à un défi Combat-Tree envoyé par l'avion lui-même.

## Indicateur de portée (VISIDENT)

![Indicateur de plage](../../img/wso_range_indicator.jpg)

Affiche des informations précises sur la portée du radar dans un rayon de 2 miles (12 000 pieds) et
la portée/taux
informations à l'intérieur de 9 000 pieds, lorsque le verrouillage existe en mode Visual Intercept,
B NAR ou B WIDE.
Lorsque AIR-GRD est sélectionné, l’indicateur est désactivé.

## Horloge sur 8 jours

![PClock](../../img/wso_clock.jpg)

Une horloge est fournie pour le WSO, incluant une fonction chronomètre. La montre comporte une heure
et
aiguille des minutes et peut être réglé en tournant
le bouton (<num>1</num>) dans le coin inférieur gauche. La fonction chronomètre est activée en
appuyant sur
le sommet
bouton droit (<num>2</num>), il comporte une aiguille des minutes et des secondes.
Les aiguilles du chronomètre sont réinitialisées en appuyant à nouveau sur le bouton en haut à
droite.

## Accéléromètre

![GGauge](../../img/wso_accelerometer.jpg)

Calibré de moins 4 à plus 10 en unités de G, avec trois pointeurs - un pour le courant
charge appliquée, les deux autres affichent le G maximum positif et négatif appliqué pendant le vol.
Pressage
le bouton PUSH TO SET réinitialisera les indicateurs de position maximale à 1 G.

## Clignotant

![wso_ball_slip_rot_indicator](../../img/wso_4_minute_turn.jpg)

Un clignotant de 4 minutes, utilisant un gyroscope conventionnel monté horizontalement,
affiche avec précision les taux de virage standard, ressemblant à un virage et un glissement
conventionnels
indicateur.

Pour exécuter un virage contrôlé (360° en 4 minutes), placez l'aiguille verticale
sur l'un des indicateurs de chaque côté (taux de rotation de 1,5 degrés par seconde) et assurez-vous
l'indicateur de glissement en bas est centré pour éviter tout retournement ou sous-tournage dû à
mauvaise banque.

## Sélecteur de mode de navigation

![wso_nav_mode_selector_switch](../../img/wso_nav_mode_sel.jpg)

Sélectionne le mode respectif pour les deux aiguilles BDHI.

| Nom | Aiguille 1 | Aiguille 2 |
|--------|---------------------------------|----------------------------------|
| Haut | UHF/Recherche automatique de direction | Station TACAN |
| Centre | Station VOR | Station TACAN |
| Vers le bas | Mode ordinateur de navigation : relèvement | Mode ordinateur de navigation : trace au sol |

## Indicateur de vitesse au sol

![wso_ground_speed_indicator](../../img/wso_ground_speed_indicator.jpg)

Fournit la vitesse sol de l'avion en nœuds et est calibrée de 0 à 1999
nœuds. Nécessite l'INS pour une présentation précise. Si INS est désactivé, il peut enregistrer
n'importe quel
valeur allant jusqu'à 150 nœuds à l'arrêt au sol.

## Indicateur de vitesse réelle

![wso_true_airspeed_speed_indicator](../../img/wso_true_airspeed_indicator.jpg)

Fournit la vitesse réelle de l'avion en nœuds et est calibrée de 150 à
1 500 nœuds ; les vitesses inférieures à cette plage ne sont donc pas fiables.

## UHF Indicateur de canal distant

![wso_uhf_remote_channel_indicator](../../img/wso_uhf_channel_indicator.jpg)

Fournit la valeur actuelle du canal sélectionné lorsque la radio est réglée sur PRESET.
Sinon, l'indicateur affiche M si la radio est réglée sur Manuel, G lorsque le
La fonction COMM est définie sur GUARD/ADF ou A lorsque le commutateur A-3-2-T est sur A.

## Indicateur de vitesse verticale

![VVI](../../img/wso_vertical_velocity_indicator.jpg)

Fournit le taux de montée ou de descente via le système de pression statique référencé dans
des milliers de pieds par minute.

## Altimètre

![Altimètre](../../img/wso_baro_altitude.jpg)

Un altimètre de style contre-pointeur, avec des millièmes dans la fenêtre du compteur (<num>4</num>)
et
Incréments de 100 pieds autour du visage (<num>5</num>). L'altimètre a une plage absolue de
80 000 pieds. L'altimètre comprend une échelle barométrique (<num>3</num>) pour le réglage local
pression avec le bouton (<num>1</num>) sur l'indicateur.

Fonctionne soit en électrique (normal
mode de fonctionnement) ou pneumatique (STBY), commutable via un trois ressorts
interrupteur de position (<num>2</num>) étiqueté RESET et STBY.

Lorsqu'il est maintenu en RESET pendant plus de 3 secondes, le système
être réinitialisé et sorti du mode STBY.

## Indicateur d'attitude

![wso_attitude_indicator](../../img/wso_adi.jpg)

L'AJB-7 fournit des informations d'attitude à l'indicateur d'attitude situé sur le
tableau de bord arrière du cockpit, quelle que soit la position du sélecteur de système de
référence.

Un bouton de trim offre la possibilité d'ajuster la sphère d'attitude à
référencer correctement l'avion.

Si l’alimentation est coupée du
indicateur ou AHRS, le drapeau OFF s'affichera.

## Indicateur de vitesse et de Mach

![MachInd](../../img/wso_airspeed_mach_indicator.jpg)

La combinaison de l'indicateur de vitesse et du nombre de Mach affiche les lectures de vitesse
ci-dessous
200 nœuds et incluent les nombres de Mach sur l'anneau extérieur à grande vitesse. L'indicateur
utilise un seul
pointeur sur une échelle de vitesse fixe, marquée de 80 à 850 nœuds, avec une échelle de Mach mobile présentant de Mach 0,4 à 2,5.

Une paire de marqueurs de référence mobiles
est disponible avec le bouton (<num>4</num>) sur la face de la jauge, avec référence de vitesse
disponible entre 80 et 195 nœuds, et l'indicateur d'indice Mach pouvant être
réglé entre les régions de 225 nœuds et de 850 nœuds par rapport à l'anémomètre.

L'aiguille (<num>1</num>) et la bague intérieure font référence à la vitesse anémométrique en nœuds.
L'aiguille (<num>2</num>) et l'anneau extérieur correspondant se réfèrent à l'échelle de Mach.
Les deux se déplacent dynamiquement en fonction de la vitesse.
La zone (<num>3</num>) fait référence à l'échelle de vitesse avant le début de l'échelle de Mach.

## Indicateur de cap de distance de relèvement (BDHI)

![wso_bearing_distance_heading_indicator](../../img/wso_bdhi.jpg)

L'indicateur de cap de distance de relèvement, ou BDHI, présente des informations de navigation
tel qu'entré par le WSO, muni de deux aiguilles (appelées n° 1 et n° 2
pointeurs).
Voir [Sélecteur de mode de navigation](upfront_indicators.md#navigation-mode-selector-switch) pour
Explication de l'aiguille.

Lorsque la position supérieure du sélecteur de mode de navigation est sélectionnée par le WSO
à TACAN/ADF/UHF, l'aiguille n° 1
indique le relèvement UHF et l'aiguille n° 2 indique le relèvement
TACAN. S'il n'y a pas de signal TACAN, les deux aiguilles indiquent le relèvement ADF.

Avec la position médiane sélectionnée - VOR/TAC, l'aiguille n° 1 indique le relèvement VOR,
l'aiguille n° 2 indique le relèvement TACAN et l'indicateur de portée
indique la distance jusqu'à la station TACAN. En l'absence de signal TACAN, les deux
aiguilles indiquent la station VOR.

En position basse, NAV COMP, l'aiguille n° 1 indique le relèvement vers les coordonnées
cibles de l'ordinateur de navigation, et l'aiguille n° 2 indique la route au sol
magnétique.

Une lecture verticale (<num>3</num>), l'indicateur de portée note la distance jusqu'à la cible
sélectionnée
en fonction
sur le sélecteur de mode de navigation.

## Tachymètres

![Tachymètre](../../img/wso_rpm.jpg)

Un tachymètre indiquant un pourcentage est fourni pour chaque moteur, comprenant un encart
molette pour un affichage précis des chiffres uniques. Les valeurs normales sont de 65 % au ralenti,
95 % en pleine puissance MIL
et 105 % pour une postcombustion complète.

## Témoin d'avertissement de déverrouillage de la verrière

![wso_canopy_unlocked_ins_out__radar_cni](../../img/wso_warning_lights.jpg)

S'allume lorsque la verrière est déverrouillée. Pour réinitialiser la lampe, fermez et verrouillez le
capot arrière.

## Lampe de sortie de l'INS (Inertial Navigation System)

S’allume lorsque le système INS est en panne. Pour réinitialiser l'INS, reportez-vous à
le [3.3.2 INS (Inertial Navigation System) chapitre](../../systems/nav_com/ins.md).

## Lampe de refroidissement Radar CNI

S'allume pour indiquer une situation de surchauffe dans le refroidissement de l'avionique
système, probablement causé par une défaillance du conduit d’air de prélèvement.

Si le voyant est allumé, réduisez le
vitesse et attendez 15 secondes. Ensuite, appuyez sur le bouton de réinitialisation du
refroidissement CNI à côté.

Si le voyant reste allumé, restez à puissance et vitesse réduites et atterrissez.
dès que possible.

## Bouton de réinitialisation du refroidissement

Réinitialise le système de refroidissement CNI.

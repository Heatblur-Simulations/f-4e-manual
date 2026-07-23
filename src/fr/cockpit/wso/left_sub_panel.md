# Sous-panneau gauche

![wso_left_sub_panel](../../img/wso_left_sub_panel.jpg)

Le sous-panneau de gauche contient l'AVTR, la Gun Camera, les indicateurs air-air (<num>1</num>), la
poignée de train d'atterrissage d'urgence (<num>2</num>), la poignée de frein d'urgence (<num>3</num>), le panneau de commande
APX-80A (<num>4</num>), le panneau de régulation d'oxygène
du WSO (<num>5</num>) et les indicateurs de lattes et de volets du WSO
(<num>6</num>).

## Commutateur de caméra de pistolet

![wso_gun_cam_aal_video_select](../../img/wso_avtr_bar.jpg)

L'interrupteur à deux positions (<num>1</num>) active l'enregistrement des images de la caméra du
canon.

## Lumière air-air

S'allume (<num>2</num>) lorsque le mode [CAGE](../../stores/air_to_air/acm_modes.md) est activé ;
appuyer sur la lumière
ramène le radar à l'état de fonctionnement d'origine avant
à l’entrée CAGE.

## Bouton de sélection vidéo

Bouton poussoir (<num>3</num>) qui alterne entre WEAPON, tel
comme [AGM-65 Mavericks](../../stores/air_to_ground/missiles/maverick.md),
et [ASQ-153 (pod de ciblage)](../../systems/weapon_systems/pave_spike/overview.md) vidéo de
télévision
sur l’écran du radar en mode TV.

## Contrôle AVTR

Contrôle le système d'enregistreur vidéo aéroporté, qui enregistre l'interphone
sonore, ainsi que l'écran radar arrière.

Pour plus d'informations sur le système Recorder, voir [9.6 Recorder](../../dcs/recorders.md).

### Commutateur AVTR

Avec le commutateur (<num>6</num>) en position RECORD, la séquence est enregistrée sur la cassette
et
le voyant RCD s'allume. La position STANDBY met l'enregistrement en pause, tandis que la position
OFF
position permettra en outre automatiquement de retirer la bande jusqu'au début
après 10 secondes.

### Minuterie de bande AVTR

La cassette peut enregistrer jusqu'à 20 minutes de séquences, indiquées en petit
affichage (<num>5</num>) intitulé MINUTES.

### Lumière EOT

Une fois la fin de la bande atteinte, le voyant EOT (4 moitié inférieure) s'allume et le
la bande doit être retirée avant de pouvoir enregistrer à nouveau.

### Lumière RCD

Allumé (<num>4</num> moitié supérieure) pour indiquer le système AVTR en cours d'enregistrement.

## Poignée de train d'atterrissage d'urgence

![wso_emergency_handles](../../img/wso_emergency_handles.jpg)

Déploie le train d'atterrissage à l'aide d'une paire de bouteilles d'air comprimé ; la poignée ne
peut pas
rétractez le train, ne le déployez qu’en cas d’urgence.

## Poignée de frein d'urgence

En cas d'urgence, il décharge une partie de l'accumulateur hydraulique du système de freinage.
pour assurer un freinage d'urgence. Contient un nombre limité d'applications.

## Panneau de commande APX-80

![apx_80](../../img/wso_apx_80.jpg)

L'AN/APX-80 combine le système d'interrogateur IFF APX-76 et le Combat-Tree
système APX-81A. Il est utilisé pour identifier si un avion est ami ou
hostile.

Voir [Systèmes d'interrogateur](../../systems/identification_systems.md#interrogator-systems)
pour plus de détails.

### Boutons de code

Le premier chiffre de l'affichage du code (<num>3</num>) indique le mode actuel
pour l'interrogateur AN/APX-76. Il peut s'agir de :

- Off (carré blanc)
- Mode 1
- Mode 2
- Mode 3
- Mode 4/A
- Mode 4/B

Les quatre autres chiffres sont utilisés pour définir le code IFF à interroger pour le mode 1.
à 3. Pour le mode 1, les deux chiffres les plus à droite doivent être utilisés.

Les boutons au-dessous et au-dessus de l'écran permettent de décrémenter et d'augmenter le
réglage correspondant, respectivement.

### Lampe de défi

Cette lampe push-to-test à intensité variable (<num>1</num>) s'allume pour indiquer une
interrogation active
avec le système APX-76.

### Code de test/défi

Le réglage du commutateur (<num>2</num>) sur la position CHALLENGE enverra une interrogation
défis posés par le système AN/APX-76.

TEST lance un test du système, voir
[AN/APX-76 Testez](../../systems/identification_systems.md#test) pour plus de détails.

### Anti-bourrage

Ce commutateur (<num>7</num>) pouvait être utilisé pour les mesures anti-brouillage sur certains
systèmes, mais il était
jamais installé et connecté sur cette variante du F-4E.

### Lampe de test/défi

Cette lampe push-to-test à intensité variable (<num>6</num>) s'allume pour indiquer une
interrogation active
avec le système APX-81A Combat-Tree.

### Bouton de test

Le bouton poussoir lance le test intégré du système APX-81A Combat-Tree,
voir [AN_APX-81A Test](../../systems/identification_systems.md#self-test) pour plus de détails.

### Mode 2

Ce commutateur (<num>5</num>) est utilisé pour régler le mode Combat-Tree 2 sur les types ACTIVE,
PASSIVE ou OFF.

La position ACTIVE est requise pour utiliser le système.

### Mode 3

Ce commutateur (<num>5</num>) est utilisé pour définir le mode Combat-Tree 3 sur les types ACTIVE,
PASSIVE ou OFF.

La position ACTIVE est requise pour utiliser le système.

### Mode 4

Ce commutateur (<num>4</num>) est utilisé pour définir le mode Combat-Tree 4 en types ALARM ou
OVERRIDE.

Cette fonctionnalité n'a jamais été installée et connectée sur cette variante du
F-4E.

## WSO Panneau de régulation d'oxygène

![wso_oxygen_regulator_panel](../../img/wso_oxygen_regulator.jpg)

### Levier d'alimentation

Interrupteur à deux positions (<num>1</num>) (ON et OFF) activant le flux d'oxygène vers le masque.
Pour plus d'informations,
voir [3.7 chapitre Utilitaires, section Oxygène](../../systems/utility.md#oxygen-system).

### Levier de dilueur

Un levier de dilueur à deux positions (<num>2</num>), au centre du régulateur
panneau, contrôle le mélange d’air et d’oxygène.

Pour une quantité proportionnelle d'air à l'oxygène, la position NORMAL
OXYGEN doit être sélectionnée.

Pour l'oxygène pur, la
position 100% OXYGEN doit être sélectionnée. Ce paramètre est préférable
si un incendie, de la fumée ou des émanations toxiques se produisent dans le cockpit.

### Commutateur de contrôle de débit d'urgence

Interrupteur à trois positions (<num>3</num>) qui permet la sélection de NORMAL (alimentation
standard),
EMERGENCY pressure (100 % d'oxygène avec pression positive continue) ou
TEST MASK (pression positive pour tester les fuites du masque facial).

Le levier d'urgence doit rester en position centrale (NORMAL) à tout moment,
sauf si une augmentation de pression imprévue est nécessaire.

### Indicateur de débit

Alterne (<num>4</num>) entre le noir et le blanc avec la respiration de chaque membre de l'équipage
pour indiquer
débit d’oxygène (le blanc indique l’inhalation).

### Manomètre d'oxygène

Indique (<num>5</num>) la pression d'alimentation en oxygène de 0 à 500 psi.

Pour plus d'informations,
voir [3.7 Chapitre Utilité, section Oxygène](../../systems/utility.md#oxygen-system).

## Panneau indicateur de train d'atterrissage/volets

![wso_landing_gear_flap_indicator](../../img/wso_landing_gear_flap_indicator.jpg)

Affiche l'état actuel du train d'atterrissage, des volets et de la position des lamelles.

### Train d'atterrissage

Statut noté avec le mot UP (up), une illustration de poteau de barbier (en transition),
ou une icône d'une roue (vers le bas) par rapport à la position actuelle.

Voir le chapitre [3.1.3 Train
d'atterrissage](../../systems/flight_controls_gear/gear_ground_handling.md) pour
plus d'informations.

### Lattes

Statut noté avec les mots IN et OUT.

### Volets

Etat noté avec le mot UP (volets relevés) ou DN (abaissés). Lors de la transition, il se peut
montrer une illustration de poteau de barbier. Lors du retour à la position HAUT, le
L’indicateur ne change pas tant que les volets ne sont pas complètement rentrés.

Voir
le [3.1.2 Commandes de vol et AFCS, section Lattes et
volets](../../systems/flight_controls_gear/flight_controls.md#slats-flap-system)
pour plus d'informations.

# Section arrière

La section arrière de la console gauche est équipée de l'[interphone](../../../systems/nav_com/intercom.md)
et des commandes de [contre-mesures](../../../systems/defensive_systems/countermeasures.md).

## Indicateur des étapes d'embarquement

![BoardStepsLadder](../../../img/pilot_boarding_steps_indicator.jpg)

Utilisé pour confirmer visuellement l’état des marches d’embarquement intégrées. Avec
le poteau blanc relevé, les marches sont rangées, alors que les marches sont déployées si poteau
est vers le bas et affleure avec l'évidement du panneau. Les marches d'embarquement et l'échelle
sont déplacées
par le [crew chief](../../../crew_chief/overview.md).

## Panneau de configuration du système d'interphone

![PilIntercom](../../../img/pilot_intercom_panel.jpg)

### Bouton de contrôle du volume

Le bouton de contrôle du volume (<num>1</num>) est tourné dans le sens des aiguilles d'une montre
pour augmenter le son entre les cockpits, et
dans le sens inverse des aiguilles d'une montre pour diminuer l'audio entre les cockpits sur
l'[interphone](../../../systems/nav_com/intercom.md).

### Bouton de sélection de l'amplificateur

Le bouton de sélection de l'amplificateur (<num>2</num>) détermine le courant de l'amplificateur
pour la fonction [interphone](../../../systems/nav_com/intercom.md).

| Nom | Descriptif |
|------|-----------------------------------------------------------------------------------------------------------------|
| B/U | L'amplificateur de casque de secours fournit l'audio.                                                                        |
| NORM | L'amplificateur de casque principal fournit l'audio.                                                                       |
| EMER | Utilise l'amplificateur du cockpit opposé ; tout et seul l'audio, y compris la radio, reçu dans ce cockpit est entendu. |

### Sélecteur de fonction

Le sélecteur de fonction (<num>3</num>) a trois positions :

| Nom | Descriptif |
|----------------|-------------------------------------------------------------------------------------------------------------------|
| COLD MIC | L'interrupteur du micro sur l'accélérateur doit être maintenu enfoncé pour activer l'interphone.                                                         |
| HOT MIC | Voix transmise automatiquement sur interphone.                                                                      |
| RADIO OVERRIDE | Voix transmise automatiquement sur interphone. Tous les volumes, à l'exception de la tonalité Shrike et de l'avertissement de décrochage, sont réduits en volume. |

## Programmeur AN/ALE-40

![Panneau AN/ALE-40](../../../img/pilot_an_ale_40_programmer.jpg)

Le panneau comporte 6 boutons pour contrôler la distribution des
[paillettes et fusées éclairantes](../../../systems/defensive_systems/countermeasures.md#anale-40-countermeasures-system),
ainsi que deux lampes et un interrupteur.

### Boutons

Il y a deux définitions importantes à connaître lors de la mise en place des contre-mesures :

* BURST - signal de distribution unique
* SALVO - groupe de rafales

À l'aide des six boutons placés sur le programmateur, vous pouvez régler les paramètres suivants :

| Catégorie | Bouton | Valeurs | Descriptif |
|-------------|-------------------------|---------------------------------------|----------------------------------|
| CHAFF BURST | COMPTE (<num>4</num>) | 1, 2, 3, 4, 6, 8 | quantité de rafales (par salve) |
|             | INTERVALLE (<num>1</num>) | 0,1, 0,2, 0,3, 0,4 | intervalle de temps entre chaque rafale |
| CHAFF SALVO | COMPTE (<num>5</num>) | 1, 2, 4, 8, C (continu) | nombre de salves |
|             | INTERVALLE (<num>2</num>) | 1, 2, 3, 4, 5, 8, R (aléatoire) | intervalle de temps entre chaque salve |
| FLARE BURST | COMPTE (<num>6</num>) | 1, 2, 4, 8, C (continu) | quantité de rafales |
|             | INTERVALLE (<num>3</num>) | 3, 4, 6, 8, 10 | intervalle de temps entre chaque rafale |

> 💡 Tous les intervalles sont exprimés en secondes.

### Commutateur de sélection des fusées éclairantes

Le commutateur de sélection des fusées éclairantes (<num>9</num>) contrôle la manière dont les
contre-mesures seront déclenchées lorsque
le pilote appuie sur le bouton de distribution.

Dans le réglage NORMAL, les contre-mesures sont déclenchées en fonction des réglages combinés du
[CCU](../../wso/left_console/center_section.md#anale-40-cockpit-control-unit-ccu) et du
programmateur.

La position FLARES permet au pilote de distribuer une seule fusée éclairante à chaque pression sur
le bouton de distribution,
quels que soient les paramètres du CCU et du programmeur.

### Voyant de mise sous tension

Le voyant de mise sous tension (<num>7</num>) s'allume lorsque l'un des boutons de mode Chaff ou
Flare du [CCU](../../wso/left_console/center_section.md#anale-40-cockpit-control-unit-ccu)
est dans une position autre que OFF.

### Voyant lumineux des fusées éclairantes

Le voyant lumineux des fusées éclairantes (<num>8</num>) s'allume lorsque le commutateur
[_Sélection Fusées_](../../../systems/defensive_systems/countermeasures.md#flares-select-switch)
est sur la position FLARES.

## Commutateur de montage rapide gyroscopique

![Gyroscope à montage rapide](../../../img/pilot_fast_erect.jpg)

Sélectionne le fonctionnement du gyroscope. FAST ERECT peut être utilisé momentanément pour corriger
les déviations gyroscopiques.

Voir [3.11.4. ARBCS](../../../systems/weapon_systems/arbcs.md#gyro-fast-erect) pour plus de détails.

## Contrôle de la tonalité auditive

![Contrôle de la tonalité auditive](../../../img/pilot_left_console_aft_aural_tone_gyro.jpg)

Bouton pour contrôler le volume des tonalités d'armes, telles que la tête chercheuse Sidewinder.

## Valve de contrôle de combinaison anti-G

![pilot_anti_g_suit](../../../img/pilot_anti_g.jpg)

Le système anti-G fournit de l'air auxiliaire à basse pression aux combinaisons anti-G, l'air
passant à travers
la valve de commande de la combinaison anti-G avant d'atteindre la combinaison. La combinaison reste
dégonflée jusqu'à
environ 1,5 G, et lorsque les forces G atteignent ou dépassent ce niveau, l'air circule dans la
combinaison
proportionnellement. La combinaison reste gonflée par rapport aux forces G constantes et commence à
se dégonfler à mesure que G
les forces diminuent.

Un bouton de gonflage manuel dans la valve de contrôle de la combinaison anti-G permet à l'équipage
de gonfler manuellement
la combinaison pour les vérifications du système ou le soulagement de la fatigue. Une soupape de
surpression à l'intérieur du système s'active à
environ 11 psi, servant de sauvegarde de sécurité en cas de dysfonctionnement. Le système fonctionne
automatiquement chaque fois qu'un moteur tourne, assurant un soutien continu au porteur pendant
conditions de force G variables.

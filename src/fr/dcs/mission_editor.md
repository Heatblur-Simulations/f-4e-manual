# Éditeur de missions

Le F-4 dispose de plusieurs options spéciales sélectionnables dans l'éditeur de mission.

![Options spéciales](../img/mission_editor_special_options.jpg)

<iframe width="560" height="315" src="https://www.youtube.com/embed/AeYEjXhausw?si=nUfM3bu4pYuV7i6Z"
title="Trucs et astuces de l'éditeur de mission pour le F-4E Phantom" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## État et usure

_"Et je vais vous dire, puisque Cal s'en occupe, il ne vole que lors de sorties cross-country
approuvées et de week-ends d'entraînement. État impeccable, les amis, pas de sur-G."_

Tous les composants de l'avion simulent l'usure individuellement, ce qui donne une expérience
unique à chaque apparition, mais également en fonction de la façon dont le F-4 est piloté.

On fait généralement la différence entre l'**État** et l'**Usure**,
les deux sont dynamiques dès leur apparition et peuvent être influencés tout au long d'une mission
par divers
des facteurs tels que les forces, la température et également les dégâts de combat.

L'avion comporte des milliers de composants soumis à ce système. Un
un exemple concret serait la vitesse d'élévation du Pave Spike Targeting Pod
moteur à cardan. En parfait état, il est censé avoir une vitesse de 60
degrés par seconde. Cependant, une usine ne peut généralement pas garantir que cela soit toujours
être le cas et accepte un écart, par exemple il doit être dans une marge d'erreur de 1 %.

Mathématiquement, la variance est simulée sous la forme d'une **distribution normale**, composée de
les paramètres

- μ (Mu, moyenne) - la valeur qu'il aurait dans des conditions parfaites
- σ (Sigma) - la variance de la valeur

![Distribution normale](../img/normal_distribution.jpg)

Environ 70 % du temps, la valeur sera comprise dans un écart d'un σ, et dans 95 % des cas elle
sera comprise dans un écart de 2 σ. Des cas extrêmes au-delà de 3 σ sont possibles, mais
très rare.

Ledit moteur présente par exemple une valeur σ de 3% autour de 60 degrés par seconde, ce qui
signifie
que la grande majorité des modules de ciblage seront produits avec un moteur capable
de déplacer le cardan d'élévation entre 58 et 62 degrés par seconde.

> 💡 La variance va dans les deux sens, votre Phantom peut aussi être plus rapide qu'elle
> est censé l'être.

L'état et l'usure modifient également les risques de panne. Chaque composant a une durée de
fonctionnement moyenne. Au moment de l'apparition, une durée de vie attendue est tirée autour de
cette moyenne. Une usure plus élevée et un état inférieur rendent les pannes plus probables.

### État de l'avion

L'état d'un avion fait généralement référence à sa qualité d'usine et de production.
Par exemple, en temps de guerre, une usine peut manquer de fournitures et réduire ses
leurs critères d'acceptation pendant la production, augmentant généralement la variance dans
performances des composants individuels. L'état de l'avion reflète également
qualité du service/maintenance dans le temps.

Les concepteurs de missions peuvent contrôler cet aspect avec **Aircraft Condition**
curseur, indiquant la qualité de 0% (mauvaise qualité) à 100% (haute qualité).

Pour le moteur Pave Spike, cela signifie que, lorsqu'il est réglé à 0%, sa variation de vitesse σ
augmentera de 3 % à 8 %, ce qui entraînera la production de la majorité des gousses avec un
vitesse entre 55 et 65 degrés par seconde à la place.

Échelle de qualité (signification) :

- **0%** : Fonctionne mais dégradé. Performance nettement pire ; fait toujours le travail ;
  risque élevé de défauts.
- **25 %** : mauvaise construction en temps de guerre. Matériaux de substitution, tolérances
  lâches ; bizarreries
  sont évidents.
- **50%** : Sous-traitant médiocre. Près des spécifications par endroits ; les petits problèmes
  peuvent être difficiles
  à remarquer en vol de routine.
- **75 %** : Légèrement en dessous de la norme. Imperfections mineures ; les effets sont subtils.
- **90 %** : Construction occidentale standard. Qualité typique des jets de service.
- **100 %** : Qualité salle d'exposition/prototype. Le meilleur spécimen de la flotte.

L'état affecte également la façon dont les composants sont entretenus lors de la création ou de
la réparation de l'avion :

- Bonne qualité (>85 %) : les composants usés sont remplacés par des pièces neuves (pas d'usure
  initiale).
- Qualité décente (>50 %) : les composants usés sont remplacés ou correctement entretenus,
  réduisant les risques d'échec lors du prochain vol.
- Mauvaise qualité (<50 %) : le service est incohérent ; plus la qualité est faible, plus
  il est moins probable qu'un composant usé soit remplacé. Une usure résiduelle peut subsister et
  les échecs sont plus probables.

> 💡 Un état très faible ne garantit pas les limites acceptables par le fabricant. À
> 0%, les pièces fonctionnent toujours mais sont sensiblement dégradées. L'avion reste utilisable
> et opérationnel, mais l'efficacité du combat peut être réduite, la manipulation peut sembler
> plus rude et les échecs sont très probables.

### Usure des avions

En plus de la qualité de production, les composants peuvent se dégrader en service en fonction du
temps écoulé depuis la dernière révision, de facteurs externes comme la température et la météo,
d'un pilotage agressif impliquant de fortes contraintes sur la cellule, ainsi que des dommages
de combat.

Les concepteurs de missions peuvent contrôler cet aspect grâce à **l'usure des avions**
curseur, indiquant une usure de 0% (pas d'usure) à 100% (beaucoup d'usure), voire
au-delà de ça. Pour un avion qui vient d'être réparé et qui sort tout juste de
service, 0% est approprié. 100 % fait référence au dernier point auquel un avion
serait raisonnablement renvoyé pour maintenance, car il commence à être moins efficace
en pratique. Les valeurs au-delà, telles que 500 %, peuvent être utilisées pour représenter des
scénarios dans lesquels les pilotes sont obligés de piloter un avion qui évolue
exceptionnellement en dessous de son niveau de performance attendu. Il reste encore un peu
utilisable, rien n'est complètement cassé, mais les composants ne se comportent tout simplement
plus selon des paramètres acceptables.

> 💡 Les valeurs au-delà de 100 % ne peuvent pas être définies dans l'éditeur de mission, mais sont réalisables
> en vol.

Pour le moteur Pave Spike cela signifie que, réglé à 100% d'usure, sa vitesse
la variance σ augmentera en outre de 20 %. En supposant un bon démarrage initial
condition, le moteur fonctionnera probablement à ce stade entre 45 et 75 degrés
par seconde.

Un avion usé ou en mauvais état peut également sembler lent. Par exemple, les aiguilles
peut se déplacer plus lentement ou les moteurs peuvent produire moins de puissance.

![Crashé Phantom](../img/broken_phantom_crash.jpg)

## Type d'avion à l'apparition

Liste déroulante pour sélectionner l'état de l'avion utilisé lors de l'apparition.

### Défaut

Génère un nouvel avion unique. Les paramètres d’état et d’usure sont appliqués comme
choisi.

Si l'utilisateur a activé la persistance de l'avion dans son
[Options spéciales](special_options.md#persistent-aircraft-by-livery-and-tail-number)
et l'avion correspond à un avion précédemment enregistré, l'avion persistant
sera chargé à la place.

### Référence

L'avion utilisé dans ce vol est l'_avion de référence_.

Cela ignore effectivement les paramètres de condition, ainsi que l’usure.
L'avion apparaîtra avec toutes les propriétés définies exactement comme spécifié par le
fabricant et selon la documentation, sans aucune dérogation.

Ceci est particulièrement intéressant pour les compétitions où les deux équipes doivent commencer
avec les mêmes conditions d’équité. Ou lors de l'exécution de tests et de calculs
tableaux de performances, où l'avion doit toujours démarrer avec exactement le même
valeurs.

> 💡 Même l'avion de référence est encore sujet à l'usure lors
> vol. Lors d'une compétition, si vous tirez des G élevés, le composant de votre avion
> les propriétés s'écarteront de celles de vos adversaires.

### Persistant

Active le système de persistance de l'avion. Cela commence à suivre ce particulier
avion, en sauvegardant son état pour un vol ultérieur. Et si un état correspondant
pourrait déjà être trouvé, il chargera également cet avion persistant pour cette
vol.

Voir [9.6. Persistance](persistence.md) pour plus de détails.

> 💡 Cela annule les paramètres de persistance définis par l'utilisateur, voir
> [9.2. Options spéciales](special_options.md#persistent-aircraft-by-livery-and-tail-number).

## Clé d'avion persistante

Cette zone de texte permet de saisir le nom (également appelé _Aircraft Key_) de l'avion à
sauvegarder et charger par le système de persistance.

Saisissez un court texte avec des lettres et des chiffres, par exemple `campaign_1`. Utilisez le
même clé dans toutes les missions dans une seule campagne pour conserver une seule cellule partagée.
Utiliser
différentes clés pour représenter différents avions persistants.

Voir [9.6. Persistance](persistence.md) pour plus de détails.

## INS Alignement de référence stocké

Cette case à cocher permet une réduction significative du temps nécessaire à un bon INS
alignement lors du démarrage à froid.

Par conséquent, l'équipe au sol aurait préalablement démarré l'avion et exécuté un alignement
complet, puis l'aurait arrêté à nouveau, tout en mémorisant une partie des données d'alignement.

Voir la section [INS](../systems/nav_com/ins.md#heading-memory-alignment) pour
des détails sur la façon d’exécuter un alignement stocké.

## Autoriser les modifications Jester

Si cette case est cochée, les joueurs peuvent personnaliser leur Jester avec des mods créés par
l'utilisateur. Voir chapitre
[9.12.1.2 API Lua](modding/jester/lua_api.md#user-mods) pour plus de détails.

Décoché, tous les mods Jester seront ignorés et le joueur utilisera automatiquement le
comportement Jester d'origine.

> 💡 Cette option est découplée du système DCS Integration Check (IC). C'est,
> vous pouvez par exemple appliquer IC sur votre serveur, tout en autorisant
> les utilisateurs de modifier leur Jester.

## Autoriser l'utilisation d'EFB

Si cette case est cochée, les joueurs peuvent accéder à l'[EFB](../dcs/efb.md), donnant un aperçu
des systèmes internes de l'avion. Par exemple l'état du carburant dans chaque réservoir.

Le sac de vol électronique est une fonctionnalité fictive de cet avion.

## Autoriser les lunettes de vision nocturne

Bien que les équipages des F-4E n'aient jamais utilisé de LVN, cette option permet aux
concepteurs de mission de créer des scénarios modernes ou fictifs où les équipages Phantom
pourraient avoir accès à de tels appareils.

## Arbre de combat usurpable

Sélectionne les systèmes de transpondeur qui peuvent être usurpés par le
[Système d'arbre de combat](../systems/identification_systems.md#anapx-81a-combat-tree).

- Tous ; tout avion hostile peut être usurpé
- Historique ; tout avion équipé d'un système de transpondeur rétro-conçu peut être exploité
- Aucun ; l'arbre de combat n'a aucun effet

Le paramètre _Historical_ s'applique aux avions suivants dans DCS :

- MiG-15
- MiG-19
- MiG-21
- MiG-23
- Su-17
- Tu-142
- Yak-40
- KA-27

> 💡 En raison des limitations du moteur, il n'est pas possible pour l'avion concerné de
> échapper à Combat-Tree en désactivant par exemple leur transpondeur.

## Options TACAN

Permet de définir le canal TACAN et la bande définie lors de l'apparition initiale.

## Options VOR/ILS

Permet de définir la fréquence VOR/ILS lors de l'apparition initiale.

## Clé de cryptage KY-28

Permet de définir la clé de chiffrement utilisée par le chiffrement de la communication KY-28
système.

Ce paramètre est particulièrement important lors de l'utilisation d'outils tels que ED-VOIP ou SRS
qui simulent le cryptage lors de l’utilisation de l’équipement radio.

Voir le système [KY-28](../systems/nav_com/encryption.md) pour plus de détails.

## Double distribution de paillettes

Une option offerte aux équipes au sol sur la contre-mesure AN/ALE-40
distributeurs.

Lorsque cette option est sélectionnée, chaque signal pour libérer les paillettes libère à la place
des paillettes des deux côtés.
simultanément.

Voir le
[Système AN/ALE-40](../systems/defensive_systems/countermeasures.md#chaff-double-cd)
pour plus de détails. Peut également être réglé via [Crew Chief](../crew_chief/overview.md)
par terre.

## Options du mode IFF 2

Permet de présélectionner un code Mode 2 pour le système IFF.

## Options laser

Permet de présélectionner un code laser pour le pod de ciblage et les armes à guidage laser.

## Options radio

L'éditeur permet de prérégler les 18 canaux COMM et 20 AUX de la radio UHF :

![UHF Préréglages](../img/me_radio_presets.jpg)

Il est possible de configurer une station dans l'éditeur de mission pour une utilisation en
navigation ADF. Pour ce faire, une unité, telle qu'une station au sol, doit être placée sur
la carte. Cette unité doit ensuite exécuter une commande pour se caler sur la fréquence AM
souhaitée (_Perform Command > Set Frequency_). Enfin, l'unité doit transmettre un message en
continu tout au long de la mission, ce qui nécessite de configurer le message en boucle
(_Perform Command > Transmit Message_).

![Poste ADF](../img/me_adf.jpg)

En outre, des paramètres de fréquence radio permettant de lire les fréquences UHF actuellement
actives sont fournis pour les déclencheurs de mission :

| Paramètre | Descriptif |
| ----------- | --------------------- |
| `COMM_FREQ` | Fréquence de communication en MHz |
| `AUX_FREQ` | Fréquence auxiliaire en MHz |

![UHF Paramètres](../img/me_freq_triggers.jpg)

## IFF

Le Phantom dispose d'une simulation IFF complète compatible avec les avions coopérants,
tels que les M-2000C, F1, JF-17, C-130, F-15E, Harrier et plus encore.

Pour les autres avions ou les avions contrôlés par l'IA, les créateurs de mission peuvent prédéfinir
codes de transpondeur en **donnant aux unités un nom suivant des modèles spécifiques** :

- Définir le code M1 : `#IFF_M1=[0-7][0-3]`, exemple `#IFF_M1=62`
- Définir le code M2 : `#IFF_M2=[0-7][0-7][0-7][0-7]`, exemple `#IFF_M2=1301`
- Définir le code M3 : `#IFF_M3=[0-7][0-7][0-7][0-7]`, exemple `#IFF_M3=6374`
- M4 est toujours activé et réglé sur le code A valide pour la coalition actuelle

Un style inspiré de LotATC prenant en charge la définition de tous les codes à la fois fonctionne
également :

- `[@#]IFF:(xx)[yyyy]zzzzAA`, pour définir le code M1 `xx`, code M2 ​​`yyyy`, code M3
  `zzzz`. M4 doit être réglé sur `FR` pour fonctionner

Exemples :

- `#IFF:(23)[1200]4321FR`
- `@IFF:(71)[7777]0001FR`

## Préparation du plan de vol

Les waypoints définis dans l'éditeur de mission seront automatiquement chargés dans
Plan de vol principal des Jesters. Des types de waypoints spéciaux peuvent être attribués en
ajoutant
des phrases spécifiques en majuscules dans le champ du nom du waypoint. Phrases reconnues
sont :

- **VIP** (correctif de navigation)
- **IP**
- **TGT** (cible)
- **F-IN** (Clôture entrante)
- **F-OUT** (Clôture)
- **HB** (base d'origine)
- **ALT** (Alternatif)
- **CAP**

![Point de cheminement TGT](../img/me_waypoints_defining.jpg)

La phrase **HOLD** active l'_option Holding_ pour le waypoint.

Voir [5.2. Jester Navigation](../jester/navigation.md#flight-plan) pour plus de détails sur
comment ces types de waypoints influencent le comportement des Jesters.

## Définir les commandes

Le F-4E propose une liste de commandes définies qui peuvent être utilisées par les créateurs de
mission. Tous
les commandes sont exécutées silencieusement comme dans Jester ne niera ni ne confirmera aucun
commandes. Les SetCommands avec l'ID de commande, le nom et les valeurs peuvent être trouvés dans
le tableau ci-dessous :

| ID de commande | Nom | Valeur |
| ---------- | ------------------------------- | ------------------------------ |
| 20010 | Jester_silent | 0-1 |
| 20011 | Jester_pause | 0-1 |
| 20015 | Jester_tune_ARC_164_channel | 0.XX |
| 20016 | Jester_tune_TACAN_channel | s0.XXXY |
| 20017 | Jester_deviate_to_tgt_zone | 0.XX |
| 20018 | Jester_add_wpt_after | 0.TTXXY |
| 20020 | Jester_resume_flightplan | 0.XXY |
| 20021 | Jester_designate_wpt | 0.DXXY |
| 20022 | Jester_set_cap_time | 0.XX |
| 20023 | Jester_eject_WSO | 0-1 |
| 20025 | Jester_unlock_tgt | 0-1 |
| 20026 | Jester_radar_power | 0.00 - 1.00 par incréments de 0.2 |
| 20027 | Jester_radar_polar | 0-1 |
| 20028 | Jester_radar_range | 0.00 - 1.00 par incréments de 0.2 |
| 20029 | Jester_radar_maneuver | 0-1 |
| 20030 | Jester_radar_scan | 0-1 |
| 20031 | Jester_radar_aspect | 0.00 - 1.00 par incréments de 0.2 |
| 20032 | Jester_radar_rcvr_fine | 0.00 - 1.00 |
| 20033 | Jester_radar_rcvr_coarse | 0.00 - 1.00 |
| 20034 | Jester_radar_track | 0.00 - 1.00 par incréments de 0.33 |
| 20035 | Jester_radar_display | 0.00 - 1.00 par incréments de 0.2 |
| 20036 | Jester_radar_man_vc | 0.00 - 1.00 par incréments de 0.1 |
| 20037 | Jester_radar_pulse | 0-1 |
| 20038 | Jester_radar_mode | 0.00 - 1.00 par incréments de 0.2 |
| 20039 | Jester_dispense | 0-1 |
| 20040 | Jester_air_to_air | 0-1 |
| 20041 | Jester_video_select | 0-1 |
| 20042 | Jester_context_short | 0-1 |
| 20043 | Jester_context_long | 0-1 |
| 20044 | Jester_context_double | 0-1 |
| 20045 | Jester_set_laser_code | 0.XXXX |
| 20046 | Jester_set_wrcs_drag | 0.XXX |
| 20047 | Jester_set_wrcs_alt_range | 0.XXX |
| 20048 | Jester_set_wrcs_ew_dist | s0.XXX |
| 20049 | Jester_set_wrcs_ns_dist | s0.XXX |
| 20050 | Jester_set_wrcs_advance | 0.XXX |
| 20051 | Jester_set_wrcs_range | 0.XXX |
| 20052 | Jester_set_comms_command | 0-1 |
| 20053 | Jester_set_tacan_command | 0-1 |
| 20054 | Jester_tune_ARC_164_AUX_channel | 0.XX |

### Utilisation de SetCommands

Ce chapitre expliquera l'utilisation des différentes SetCommands qui ont des valeurs plus
complexes.

![set_commands_me.jpg](../img/set_commands_me.jpg)

#### Jester_tune_ARC_164_channel

La valeur suit le format « 0.XX », où « XX » est le numéro de chaîne à deux chiffres.

#### Jester_tune_ARC_164_AUX_channel

La valeur suit le format « 0.XX », où « XX » est le numéro de chaîne à deux chiffres.

#### Jester_tune_TACAN_channel

La valeur suit le format « s0.XXXY », où « s » est un signe moins facultatif. Utiliser
valeurs négatives pour A/A (Air-Air) et positives pour T/R (Transmission/Réception).
"XXX" représente le numéro de chaîne à trois chiffres, avec des zéros non significatifs requis pour
canaux inférieurs à 100. « Y » indique le mode : « 0 » pour le mode X et « 1 » pour le mode Y.
Par exemple, « 0.0630 » correspond au canal 63X en mode T/R, tandis que « -0.0081 »
indique le canal 8Y en mode A/A.

#### Jester_deviate_to_tgt_zone

La valeur suit le format « 0.XX », où « XX » est le numéro WaypointZone. Note
que la zone de déclenchement doit être nommée « WaypointZone ». Par exemple, "0.02"
correspond à « WaypointZone02 ».

#### Jester_add_wpt_after

La valeur suit le format "0.TTXXY", où "TT" est le numéro de zone du waypoint,
« XX » est le numéro du waypoint et « Y » est le numéro du plan de vol.

#### Jester_resume_flightplan

La valeur suit le format « 0.XXY », où « XX » est le numéro du waypoint (par exemple,
"01" pour le waypoint 1, "12" pour le waypoint 12), et "Y" est le numéro du plan de vol
(la valeur par défaut est 1 si non spécifié). Les exemples incluent « 0.05 », qui fait référence au point de virage 5 dans le plan de vol 1,
et « 0.102 », qui fait référence au point de virage 10 dans le plan de vol 2.

#### Jester_designate_wpt

La valeur suit le format "0.DXXY", où "D" est la désignation du waypoint,
"XX" est le numéro du waypoint (par exemple, "01" pour le waypoint 1, "12" pour le waypoint 12),
et "Y" est le numéro du plan de vol (la valeur par défaut est 1 si non spécifié). Les
désignations de point de cheminement sont les suivantes :

- 0 -> Par défaut
- 1 -> CAP
- 2 -> IP
- 3 -> Cible
- 4 -> VIP
- 5 -> VIP silencieux
- 6 -> Clôture IN
- 7 -> Clôture
- 8 -> Base d'accueil
- 9 -> Alternatif

Par exemple, « 0.005 » indique le point de virage 5 dans le plan de vol 1 avec une désignation
par défaut, tandis que "0.3102" représente le point de virage 10 dans le plan de vol 2 avec une
désignation de cible.

#### Jester_set_cap_time

La valeur définit le temps CAP pour la paire CAP active au format « 0.XX », où
"XX" représente le nombre de minutes. Par exemple, « 0.05 » correspond à 5
minutes, et « 0.12 » correspond à 12 minutes.

#### WRCS Entrées et code laser

Les entrées WRCS sont utilisées de 0.999 à 0.000, 0.999 étant la plus grande valeur que le
WRCS puisse représenter. Pour Jester_set_wrcs_ew_dist et Jester_set_wrcs_ns_dist, le "s" sert
à indiquer le signe négatif. Lorsqu'une valeur négative est saisie, elle sera utilisée pour les
valeurs Ouest ou Sud, respectivement.

Le code laser peut être défini en saisissant un code laser valide pour XXXX. Noter que
Jester n'entrera pas de codes invalides et ne répondra d'aucune manière autre que
ne pas saisir le code laser.

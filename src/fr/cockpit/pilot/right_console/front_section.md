# Partie avant

La partie avant de la console droite est dominée par les
contrôles de communication et de navigation.

## Réinitialisation de l'avertissement principal

![MCRst](../../../img/pilot_master_caution_reset.jpg)

Utilisé pour éteindre les avertissements du [panneau télélumineux](../../../systems/emergency.md#telelight-panel)
et le voyant [d'avertissement principal](../../../systems/emergency.md#master-caution)
une fois que les mesures nécessaires auront été prises. Dans le cas où un défaut n'a pas été
efficacement corrigé, le fait d'appuyer sur le bouton Master Caution Reset n'éteindra pas
l'avertissement correspondant.

## Panneau de contrôle TACAN

![FrontTCN](../../../img/pilot_tacan.jpg)

Le panneau de commande [TACAN](../../../systems/nav_com/tacan.md) est utilisé pour accéder au
canal [TACAN](../../../systems/nav_com/tacan.md) souhaité, mode et
volume sonore pour la surveillance dudit canal par le personnel navigant. Le panneau est
dupliqué dans les deux cockpits, et le panneau aux commandes de
le récepteur [TACAN](../../../systems/nav_com/tacan.md) est
activé par le bouton NAV CMD du panneau de commande de communication.

### Boutons de canal

Sur le panneau de commande se trouvent deux boutons de contrôle des canaux de navigation (7, 4 et
3) : celui de gauche (<num>7</num>) contrôle les deux premiers chiffres de la valeur du canal
(centaines et dizaines), et celui de droite (4 et 3) contrôle les valeurs unitaires. Le bouton
droit comprend également un anneau extérieur (<num>3</num>) qui définit la valeur X ou Y pour le
canal [TACAN](../../../systems/nav_com/tacan.md) souhaité.

### Bouton et lampe de test

Entre ces deux boutons se trouve le bouton TEST (<num>6</num>), qui effectue les tests au sol
cycle après l'échauffement, et peut également être utilisé pour effectuer un test de confiance en
vol
de la performance du système.

Le voyant au-dessus du bouton s'allume pour indiquer l'état du test.

Voir [7.19.4 Chapitre test de
navigation](../../../procedures/bit_tests/navigation_tests.md#tacan-test)
pour plus d'informations.

### Bouton de volume

En haut à droite, le bouton VOL (<num>2</num>) est disponible pour régler le niveau audio souhaité
pour
la station [TACAN](../../../systems/nav_com/tacan.md) reçue.

### Sélecteur de fonction

Le bouton de sélection de fonction [TACAN](../../../systems/nav_com/tacan.md) (<num>1</num>)
détermine la
présentation
et le type de
informations fournies sur
le [HSI,](../../pilot/flight_director_group.md#horizontal-situation-indicator)
[ADI](../../pilot/flight_director_group.md#attitude-director-indicator),
et [BDHI,](../../wso/upfront_indicators.md#bearing-distance-heading-indicator-bdhi)
respectivement.

| Nom | Descriptif |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| OFF | Le récepteur [TACAN](../../../systems/nav_com/tacan.md) est hors tension et hors ligne.                                                                                                                                                                                                                                                                                           |
| REC | Le récepteur [TACAN](../../../systems/nav_com/tacan.md) est actif et fournit des informations de relèvement sur les [HSI](../../pilot/flight_director_group.md#horizontal-situation-indicator), [BDHI](../../wso/upfront_indicators.md#bearing-distance-heading-indicator-bdhi) et [ADI](../../pilot/flight_director_group.md#attitude-director-indicator).                              |
| T/R | Les fonctions de réception et de transmission du [TACAN](../../../systems/nav_com/tacan.md) sont actives, ce qui fournit des informations de relèvement et de distance en milles marins pour le [HSI](../../pilot/flight_director_group.md#horizontal-situation-indicator) et [BDHI](../../wso/upfront_indicators.md#bearing-distance-heading-indicator-bdhi).                                        |
| A/A REC | Le récepteur [TACAN](../../../systems/nav_com/tacan.md) décode les informations de relèvement des avions conformes pour les écrans de pilotage [HSI](../../pilot/flight_director_group.md#horizontal-situation-indicator), [BDHI](../../wso/upfront_indicators.md#bearing-distance-heading-indicator-bdhi) et [ADI](../../pilot/flight_director_group.md#attitude-director-indicator). |
| A/A TR | Le récepteur [TACAN](../../../systems/nav_com/tacan.md) reçoit les informations de relèvement et de distance oblique en milles marins de l'avion émetteur, les fournissant sur les [HSI](../../pilot/flight_director_group.md#horizontal-situation-indicator) et [BDHI](../../wso/upfront_indicators.md#bearing-distance-heading-indicator-bdhi).                              |

> 💡 La fonctionnalité Air-Air [TACAN](../../../systems/nav_com/tacan.md) nécessite que le canal soit
> réglé 63 canaux au-dessus ou en dessous de l'avion coopérant, mais sur la même portée — X ou Y.
> Ainsi, un pétrolier sur 123Y devrait être réglé sur 60Y dans le F-4.

## Panneau de contrôle des communications

![PCC](../../../img/pilot_comm_control_panel.jpg)

Le panneau de commande de communication fournit la sélection et le mode de
la radio [UHF](../../../systems/nav_com/uhf.md) dans l'avion.

### Boutons de commande

Le panneau est dupliqué dans les deux cockpits, et le contrôle du
la radio est changée en appuyant sur le bouton COMM CMD (<num>10</num>) sur le siège respectif ;
le bouton s'allumera en vert (<num>9</num>) dans le siège en priorité. De la même manière,
le bouton NAV CMD (<num>7</num>) indique quel siège a le contrôle de
les paramètres [TACAN](../../../systems/nav_com/tacan.md) ; son bouton s'allumera également
(<num>8</num>) sur le
panneau du siège qui a la commande (contrôle) du système. Chaque pression sur un bouton de commande
fera basculer qui commande le système.

### Volume radio

Sous le bouton COMM CMD se trouve le volume de la radio (<num>11</num>) pour le siège concerné.

### Commutateur de silencieux

Près du bouton NAV CMD se trouve le commutateur Squelch (<num>6</num>), qui active ou désactive le
silencieux du récepteur.

### Fréquence et canaux

Le bouton de sélection A-3-2-T (<num>5</num>) définit le premier chiffre (3 ou 2) de la fréquence
sélectionnée manuellement de la radio [UHF](../../../systems/nav_com/uhf.md).

> 💡 En raison des limitations du moteur, les modes A et T,
> appartenant à la fonctionnalité HAVE-Quick, ne sont pas simulés.

Les quatre boutons de sélection de fréquence fonctionnent de concert avec le bouton A-3-2-T et le
commutateur Preset/Manual. Les fréquences sont saisies en commençant par la sélection 3 ou 2
sur le sélecteur A-3-2-T, et peuvent être entrées de 225,00 à 399,975 MHz
par incréments de 0,025. Avec Preset/Manual en position Manual, la radio UHF
est réglée directement sur le canal affiché. En position Preset, les canaux
définis peuvent être saisis dans la mémoire COMM CHAN, la position souhaitée étant
sélectionnée avec le bouton Comm Channel Control - le plus petit bouton à gauche du
commutateur Preset/Manual - et affichée dans la fenêtre COMM CHAN. Les canaux sont enregistrés
dans le préréglage de canal affiché avec le bouton SET. Une fois enregistrés, les canaux
sont directement sélectionnés à l'aide du bouton Comm Channel Control, le
commutateur Preset/Manual étant en position Preset.

Directement sous le bouton de commande du canal de communication se trouvent le bouton et
l'indicateur du canal auxiliaire (<num>4</num>). Ce bouton est utilisé pour accéder à 20 canaux
prédéfinis communs qui ne peuvent pas être changés depuis le cockpit.

Le bouton de contrôle du volume auxiliaire (<num>1</num>) en bas à droite du panneau
augmente et diminue le volume du canal du récepteur Aux (12 et 13).

Le bouton SET (<num>14</num>) peut être utilisé pour enregistrer la fréquence du canal actuellement
sélectionnée par les boutons de fréquence. La fréquence sera enregistrée en tant que canal
actuellement sélectionné.

### Bouton de tonalité

Le bouton-poussoir de tonalité (<num>3</num>) est utilisé pour la transmission d'un signal d'heure
du jour (TOD) ainsi que
un ton
aux avions amis nécessitant une mise à jour de l'heure du jour pour une fonctionnalité HAVE-Quick
appropriée.

> 💡 En raison des limitations du moteur, le bouton de tonalité,
> appartenant à la fonctionnalité HAVE-Quick, n'est pas simulé.

### Sélecteur de fonction de communication

Le bouton de sélection de fonction de communication (<num>2</num>) détermine la configuration
actuelle du
système radio.

| Nom | Descriptif |
|---------------|----------------------------------------------------------------------------|
| OFF | Toutes les radios UHF éteintes.                                                        |
| T/R ADF | Récepteur de communication - réception de communication.                                            |
|           | Émetteur de communication - transmission de communication.                                      |
|           | Récepteur Comm Guard - veille.                                             |
|           | Récepteur Aux - Réception ADF.                                              |
| T/R+G ADF | Récepteur de communication - réception de communication.                                            |
|           | Émetteur de communication - transmission de communication.                                      |
|           | Récepteur de garde de communication - réception de garde.                                     |
|           | Récepteur Aux - Réception ADF.                                              |
| ADF+G CMD | Récepteur Comm - Réception ADF.                                             |
|           | Émetteur de communication - transmission de communication. ADF interrompu pendant la transmission. |
|           | Récepteur Comm Guard - réception de garde sur antenne ADF.                      |
|           | Récepteur Aux - réception communication.                                             |
| ADF+G | Récepteur Comm - Réception ADF.                                             |
|           | Émetteur de communication - transmission de communication. ADF interrompu pendant la transmission. |
|           | Récepteur Comm Guard - veille.                                             |
|           | Récepteur Aux - réception du gardien.                                            |
| Garde ADF | Récepteur de communication - réception du gardien.                                           |
|           | Émetteur de communication - transmission de garde.                                     |
|           | Récepteur Comm Guard - veille.                                             |
|           | Récepteur Aux - Réception ADF.                                              |

## Panneau utilitaire (à droite)

![pilot_utility_panel](../../../img/pilot_utility_panel.jpg)

Le panneau utilitaire comporte une poignée de ventilation d'urgence pour libérer la surpression dans
le cockpit.
De plus, il est doté du levier de désembuage/chauffage du pied ainsi que des interrupteurs de
commande du générateur.

## Bouton de réinitialisation du refroidissement

![Bouton de réinitialisation du refroidissement](../../../img/pilot_cooling_reset_button.jpg)

Réinitialise le système de refroidissement CNI.

## Pression dans le cockpit

![Poignée de ventilation d'urgence](../../../img/pilot_cabin_pressure_gauge.jpg)

### Jauge d'altitude du cockpit

Affiche la pression actuelle à l'intérieur du cockpit comme moyen d'efficacité équivalente
altitude de la cabine au-dessus du niveau moyen de la mer en milliers de pieds.

Autrement dit, si la jauge (<num>2</num>) indique 5, la pression à l'intérieur de la cabine est
équivalente à une altitude de 5 000 pieds MSL.

Pour prévenir les maladies et l'hypoxie, la pression doit être observée et l'approvisionnement
en oxygène ajusté en conséquence :

| Plage de pression | Descriptif |
|-----------|----------------------------------------------|
| en dessous de 13 000 pieds | Respirez de l'air régulier |
| 13 000 pieds - 40 000 pieds | Respirez de l'oxygène à travers un masque |
| 40 000 pieds - 62 000 pieds | Respirez de l'oxygène sous pression à travers un masque |
| au-dessus de 62 000 pieds | Besoin de porter une combinaison pressurisée (non disponible) |

Voir [Oxygène, Chapitre](../../../systems/utility.md#oxygen-system) pour plus d'informations.

### Poignée de ventilation d'urgence

![pilot_emergency_vent_handle](../../../img/pilot_emergency_vent_handle.jpg)

Un bouchon (<num>1</num>) qui peut être tiré pour relâcher la pression du cockpit. Le remettre en
place scellera à nouveau la cabine.

Sans pressurisation, l'altitude cabine effective sera identique à
l'altitude actuelle. Ce qui, si vous volez à haute altitude, peut entraîner une hypoxie.

Il ne doit être utilisé que si le système de pressurisation fonctionne mal et indique
valeurs anormales, ou pour éliminer la fumée et les émanations du cockpit. Descendez à des altitudes
sûres avant
activation.

## Levier de désembuage/chauffage des pieds

![Désembuage](../../../img/pilot_defog_lever.jpg)

Le levier de désembuage/chauffage des pieds (<num>5</num>) fournit un volume d'air chaud
sélectionnable par le pilote au pare-brise à des fins de dégivrage, ou aux niches pour les pieds
pour plus de confort ou de visibilité.

Il est possible, grâce à la sélection de réglages de température froide,
en particulier les jours humides, pour que le système de climatisation fournisse de l'air à des
températures bien
en dessous du point de rosée, ce qui entraîne une formation de buée dans le cockpit. Ce brouillard
peut être dissipé en sélectionnant un
température légèrement plus chaude.

Lors d'un fonctionnement dans des conditions d'humidité élevée, il est recommandé qu'une
température plus élevée que la normale soit sélectionnée, avant de commencer la course au
décollage, pour empêcher la
possibilité de buée dans le cockpit à mesure que la poussée augmente. En cas de formation de buée
dans le cockpit, le moyen le plus rapide
d'éliminer cette condition consiste à activer le bouton de ventilation d'urgence.

Pendant la croisière
opérations, avant la descente, placez le bouton de contrôle de la température sur la position 2
heures et le
Levier de désembuage/chaleur du pied pour désembuer, pour augmenter la température de désembuage du
pare-brise et le préchauffage de la verrière. Pour les avions sans becs, si les volets sont baissés
pour descendre et que la buée persiste,
rentrez les volets ou augmentez la puissance (utilisez les aérofreins si nécessaire pour maintenir
la vitesse) pour fournir
débit d'air de désembuage plus élevé.

## Interrupteur d'élimination de la pluie

Si l'interrupteur à deux positions (<num>3</num>) est activé, l'air de prélèvement du moteur est
redirigé vers
la verrière
pour chasser les gouttes de pluie.

Le système ne doit pas être utilisé dans des conditions sèches, car l'air chaud
réchauffera le pare-brise. Si le verre atteint des températures critiques,
l'avertissement _WINDSHIELD TEMP HI_ du [panneau télélumineux](../../../systems/emergency.md#telelight-panel)
s'allumera.
Dans ce cas, l'interrupteur doit être immédiatement éteint.

## Interrupteur de chaleur Pitot

Avec l'interrupteur thermique de Pitot (<num>4</num>) sur ON, le tube de Pitot sur le nez de l'avion
sera
chauffé à
empêcher le givrage et donc les lectures erronées des capteurs pour tous les principaux instruments
de vol.

Pour des opérations normales, cette fonction doit toujours être activée avant le décollage.
Mais ne pas laisser allumé au sol pendant plus d'une minute pour éviter
dommages dus à une surchauffe.

Voir [3.1.1 Système
Pitot-Statique](../../../systems/flight_controls_gear/primary_flight_instruments.md#pitot-static-system)
pour plus de détails.

## Commutateurs de commande de générateur

![GenCtl](../../../img/pilot_generator_switches.jpg)

Le contrôle du générateur électrique respectif de chaque moteur est assuré par un interrupteur
individuel à deux positions (<num>6</num>).

| Nom | Descriptif |
|---------------|------------------------------------------------------------------------------------------|
| ON | Le générateur est entraîné par l’unité d’entraînement à vitesse constante et appliqué au bus électrique. |
| OFF | Le générateur est hors ligne.                                                               |
| ON (EXTERNAL) | L'alimentation externe est fournie via la connexion du bus du générateur pour les besoins préalables au démarrage.  |

Pour plus d'informations, voir
le chapitre [3.8 Électricité.](../../../systems/electrics.md#generator-control-switches)

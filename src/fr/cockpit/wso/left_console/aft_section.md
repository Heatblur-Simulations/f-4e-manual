# Section arrière

La section arrière de la console gauche contient les commandes de communication et de navigation.

## Panneau de contrôle TACAN

![Tacan](../../../img/wso_tacan_panel.jpg)

Le panneau de commande [TACAN](../../../systems/nav_com/tacan.md) est utilisé pour entrer
le canal [TACAN](../../../systems/nav_com/tacan.md) souhaité, le mode et
volume sonore pour la surveillance dudit canal par le personnel navigant. Le panneau est
dupliqué dans les deux cockpits, et le panneau de commande du
Le récepteur [TACAN](../../../systems/nav_com/tacan.md) est sélectionné avec le bouton NAV CMD
du panneau de commande des communications.

### Boutons de canal

Sur le panneau de commande se trouvent deux boutons de contrôle des canaux de navigation (7, 4 et
3) : celui de gauche (<num>7</num>) contrôle les deux premiers chiffres de la valeur du canal
(centaines et dizaines), et celui de droite (4 et 3) contrôle les valeurs unitaires. Le bouton
droit comprend également une bague extérieure qui définit la valeur X ou Y pour le canal
[TACAN](../../../systems/nav_com/tacan.md) souhaité.

### Bouton et lampe de test

Entre ces deux boutons se trouve le bouton TEST (<num>6</num>), qui effectue le
cycle d'essai au sol après l'échauffement, et peut également être utilisé pour effectuer un test
de confiance en vol sur les performances du système.

Le voyant au-dessus du bouton s'allume pour indiquer l'état du test.

Voir
[7.19.4 Chapitre sur les procédures de test de navigation](../../../procedures/bit_tests/navigation_tests.md#tacan-test)
pour plus d'informations.

### Bouton de volume

En haut à droite, le bouton VOL (<num>2</num>) est disponible pour régler le
niveau audio pour la station [TACAN](../../../systems/nav_com/tacan.md) reçue.

### Sélecteur de fonction

Le bouton de sélection de fonction [TACAN](../../../systems/nav_com/tacan.md)
(<num>1</num>) détermine la présentation et la nature des informations fournies sur
le [HSI,](../../pilot/flight_director_group.md#horizontal-situation-indicator)
[ADI](../../pilot/flight_director_group.md#attitude-director-indicator), et
[BDHI,](../../wso/upfront_indicators.md#bearing-distance-heading-indicator-bdhi)
respectivement.

| Nom | Descriptif |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| OFF | Le récepteur [TACAN](../../../systems/nav_com/tacan.md) est hors tension et hors ligne.                                                                                                                                                                                                                                                                                           |
| REC | Le récepteur [TACAN](../../../systems/nav_com/tacan.md) est actif et fournit des informations de relèvement sur les [HSI](../../pilot/flight_director_group.md#horizontal-situation-indicator), [BDHI](../../wso/upfront_indicators.md#bearing-distance-heading-indicator-bdhi) et [ADI](../../pilot/flight_director_group.md#attitude-director-indicator).                              |
| T/R | Les fonctions de réception et de transmission du [TACAN](../../../systems/nav_com/tacan.md) sont actives, ce qui fournit des informations de relèvement et de distance en milles marins pour le [HSI](../../pilot/flight_director_group.md#horizontal-situation-indicator) et [BDHI](../../wso/upfront_indicators.md#bearing-distance-heading-indicator-bdhi).                                        |
| A/A REC | Le récepteur [TACAN](../../../systems/nav_com/tacan.md) décode les informations de relèvement des avions conformes pour les écrans de pilotage [HSI](../../pilot/flight_director_group.md#horizontal-situation-indicator), [BDHI](../../wso/upfront_indicators.md#bearing-distance-heading-indicator-bdhi) et [ADI](../../pilot/flight_director_group.md#attitude-director-indicator). |
| A/A TR | Le récepteur [TACAN](../../../systems/nav_com/tacan.md) reçoit les informations de relèvement et de distance oblique en milles marins de l'avion émetteur, en les fournissant sur les [HSI](../../pilot/flight_director_group.md#horizontal-situation-indicator) et [BDHI](../../wso/upfront_indicators.md#bearing-distance-heading-indicator-bdhi).                              |

> 💡 Fonctionnalité Air-Air [TACAN](../../../systems/nav_com/tacan.md)
> nécessite que le canal soit réglé 63 canaux au-dessus ou en dessous de l'avion
> coopérant, mais sur la même portée - X ou Y. Ainsi, un pétrolier sur 123Y devrait être réglé sur
> 60Y dans le F-4.

## Panneau de contrôle des communications

![PCC](../../../img/wso_comm_control_panel.jpg)

Le panneau de commande de communication propose une sélection et un mode pour la
[radio UHF](../../../systems/nav_com/uhf.md) de l'avion.

### Boutons de commande

Le panneau est dupliqué dans les deux cockpits et le contrôle de la radio est
déterminé en appuyant sur le bouton COMM CMD (<num>10</num>) dans le
siège; le bouton s'allumera en vert (<num>9</num>) dans le siège en priorité.
De la même manière, le bouton NAV CMD (<num>7</num>) indique quel siège a
contrôle des paramètres [TACAN](../../../systems/nav_com/tacan.md) ; son bouton
s'allumera également (<num>8</num>) sur le panneau du siège qui a la commande
(contrôle) du système. Chaque pression sur un bouton de commande fera basculer qui a la
maîtrise du système.

### Volume radio

Sous le bouton COMM CMD se trouve le volume radio (<num>11</num>) pour le
siège respectif.

### Commutateur de silencieux

Près du bouton NAV CMD se trouve le commutateur Squelch (<num>6</num>), qui active
ou désactive le silencieux du récepteur.

### Fréquence et canaux

Le bouton de sélection A-3-2-T (<num>5</num>) définit le premier chiffre (3 ou 2) de la
fréquence sélectionnée manuellement de la radio [UHF](../../../systems/nav_com/uhf.md).

> 💡 En raison des limitations du moteur, les modes A et T, appartenant à la fonctionnalité
> HAVE-Quick, ne sont pas simulés.

Les quatre boutons de sélection de fréquence fonctionnent de concert avec le bouton A-3-2-T et
le commutateur Preset/Manuel. Les fréquences sont saisies en commençant par la sélection 3 ou 2
sur le sélecteur A-3-2-T, et peuvent être entrées de 225,00 à 399,975 MHz
par incréments de 0,025. Avec le commutateur Preset/Manuel (<num>4</num>) en
position Manual, la radio UHF est réglée directement sur le canal affiché. En
position Preset, les canaux définis peuvent être saisis dans la mémoire COMM CHAN, la
position souhaitée étant sélectionnée avec le bouton Comm Channel Control (<num>12</num>)
(le plus petit bouton à gauche du commutateur Preset/Manuel), et affichée dans la
fenêtre COMM CHAN. Les canaux peuvent être enregistrés dans le préréglage de canal affiché avec
le bouton-poussoir SET. Une fois enregistrés, les canaux sont directement sélectionnés à l'aide du
bouton Comm Channel Control, le commutateur Preset/Manual étant en position Preset.

Directement sous le bouton de commande du canal de communication se trouvent le bouton et
l'indicateur du canal Aux (<num>13</num>). Ce bouton est utilisé pour accéder à 20 canaux
prédéfinis communs qui ne peuvent pas être modifiés dans le cockpit.

Le bouton de contrôle du volume auxiliaire (<num>1</num>) en bas à droite du panneau
augmente et diminue le volume du canal du récepteur Aux.

Le bouton SET (<num>14</num>) peut être utilisé pour enregistrer la fréquence du canal qui est
actuellement sélectionnée par les boutons de fréquence. La fréquence sera enregistrée comme
canal actuellement sélectionné.

### Bouton de tonalité

Le bouton-poussoir de tonalité (<num>3</num>) est utilisé pour la transmission d'un signal
d'heure du jour (TOD), accompagné d'une tonalité, destinée aux avions amis nécessitant une mise
à jour de l'heure du jour pour une fonctionnalité HAVE-Quick appropriée.

> 💡 En raison des limitations du moteur, le bouton de tonalité, appartenant à la fonctionnalité
> HAVE-Quick, n’est pas simulé.

### Sélecteur de fonction de communication

Le bouton de sélection de fonction de communication (<num>2</num>) détermine la configuration
actuelle du système radio.

| Nom | Descriptif |
| --------- | -------------------------------------------------------------------------- |
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
|           | Récepteur Aux - réception de communication.                                              |
| ADF+G | Récepteur Comm - Réception ADF.                                             |
|           | Émetteur de communication - transmission de communication. ADF interrompu pendant la transmission. |
|           | Récepteur Comm Guard - veille.                                             |
|           | Récepteur Aux - réception de garde.                                             |
| Garde ADF | Récepteur de communication - réception du gardien.                                           |
|           | Émetteur de communication - transmission de garde.                                     |
|           | Récepteur Comm Guard - veille.                                             |
|           | Récepteur Aux - Réception ADF.                                              |

### Jauge d'altitude du cockpit

![Jauge d'altitude du cockpit](../../../img/wso_cabin_pressure.jpg)

Affiche la pression actuelle à l'intérieur du cockpit comme moyen d'équivalent
altitude effective de la cabine au-dessus du niveau moyen de la mer, en milliers de pieds.

Autrement dit, si la jauge indique 5, la pression à l'intérieur de la cabine est équivalente à un
altitude de 5 000 pieds MSL.

Pour prévenir les maladies et l'hypoxie, la pression doit être observée et l'oxygène
approvisionnement ajusté en conséquence :

| Plage de pression | Descriptif |
| ------------------- | -------------------------------------------- |
| en dessous de 13 000 pieds | Respirez de l'air régulier |
| 13 000 pieds - 40 000 pieds | Respirez de l'oxygène à travers un masque |
| 40 000 pieds - 62 000 pieds | Respirez de l'oxygène sous pression à travers un masque |
| au-dessus de 62 000 pieds | Besoin de porter une combinaison pressurisée (non disponible) |

Voir
[3.7 Chapitre Utilité, section Oxygène](../../../systems/utility.md#oxygen-system)
pour plus d'informations.

## Jauge de quantité d'oxygène

![Jauge de quantité d'oxygène](../../../img/wso_oxygen_level.jpg)

Il a une plage de 0 à 10 litres. La perte de puissance électrique est indiquée par
apparition d'un drapeau de mise hors tension sur la face de l'instrument.

## Contrôle du volume VOR/ILS

![VOR/ILS Contrôle du volume](../../../img/wso_vor_ils_volume.jpg)

Le contrôle du volume se compose de deux boutons : un bouton carré (<num>1</num>) règle
VOR et l'audio du localisateur, tandis que le bouton rond (<num>2</num>) contrôle le marqueur
le son de la balise.

Voir [3.3.4 VOR/ILS Chapitre](../../../systems/nav_com/vor_ils.md) pour plus d'informations.

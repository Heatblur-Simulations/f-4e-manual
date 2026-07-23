# Système TACAN (navigation aérienne tactique)

![antenne_tacan_externe](../../img/ext_f4_tacan_antenna.jpg)

Les informations de relèvement et de distance aux stations émettrices sont fournies par le système
TACAN. Le système TACAN peut recevoir des informations des stations au sol jusqu'à 390 milles,
et des avions air-air équipés de TACAN jusqu'à 200 milles. Le système TACAN
fournit l'identité de la station émettrice et la fiabilité du
signal reçu. L'écart de cap est calculé et affiché sur la navigation
systèmes réglés en mode TACAN. Si un signal TACAN n'est pas valide, un avertissement s'affiche.
En cas de perte de signal, le système continue de fournir un suivi de portée pour
15 secondes et suivi du relèvement pendant 3 secondes. Le système effectuera un
auto-test après une perte de signal pour confirmer le fonctionnement sur le panneau de commande.
Deux
Des antennes TACAN sont fournies et la commutation du signal est automatique pour maintenir le
meilleur signal.

## Commandes TACAN

![tacan_général](../../img/pilot_tacan.jpg)

Les commandes TACAN se trouvent sur le panneau de commande de navigation de chaque cockpit.

### Bouton et indicateur de commande de navigation

Le bouton et l'indicateur NAV CMD effectuent un changement d'autorité de commande entre les
deux cockpits, et se trouvent dans le coin supérieur droit du panneau de commande de
communication. Un voyant vert s'allume à gauche du bouton dans le
cockpit qui contrôle le système de navigation.

- Bouton de sélection de mode,
- Sélecteur BRG/DIST, et
- Sélecteur de fonction de navigation

Comme détaillé dans la section Flight Director Group, le sélecteur de mode, le sélecteur BRG/DIST
et le sélecteur de fonction de navigation déterminent la présentation des
informations TACAN sur le HSI, l’ADI et le BDHI.

### Boutons de commande des canaux de navigation

Sur le panneau de commande TACAN sous la fenêtre du canal, une paire de boutons (<num>7</num>,
<num>4</num>
et <num>3</num>) définissent le canal TACAN souhaité. Le bouton gauche (<num>7</num>) contrôle les
dizaines et
centaines de chiffres du canal. Le bouton droit (<num>4</num>) sélectionne les unités de
fonctionnement
canal, et le bouton extérieur (<num>3</num>) définit le canal X ou Y ; X et Y disposent chacun de
126 canaux disponibles. Bien que l'indicateur puisse afficher 127, 128 et 129, ces valeurs ne sont
pas fonctionnelles.

### Bouton de sélection de fonction TACAN

- OFF : le système TACAN est hors tension
- REC : seul le récepteur est alimenté, et le système reçoit et décode
  signaux de relèvement de la station TACAN et fournit des informations de relèvement pour
  les affichages HSI, BDHI et ADI.
- T/R : le TACAN génère des informations de distance ainsi que le relèvement ; la distance
  est ensuite ajoutée au HSI et au BDHI, fournie en milles marins.
- A/A REC : le TACAN reçoit et affiche les informations de relèvement pour le HSI,
  BDHI et affichage de pilotage ADI d'un avion fournissant une balise TACAN
  signal. Le canal sélectionné doit être 63 canaux au-dessus ou en dessous du
  balise d'avion émettrice, sur la même portée de canal X ou Y ; par exemple,
  le pétrolier transmettant sur 83X sera reçu sur 20X.
- A/A TR : le TACAN interroge la balise de l'avion équipée pour ajouter de la portée
  informations au HSI et au BDHI. La méthode de sélection des canaux reste la même
  qu'en A/A REC.

### Bouton de contrôle du volume de navigation

Le bouton NAV VOL (<num>2</num>) contrôle le volume audible au casque de la station TACAN
reçue.

### Bouton de test TACAN

Le bouton de test Tacan (<num>6</num>) peut être utilisé pour tester le système TACAN. Pour une
procédure détaillée
voir
la [Procédure de test de navigation](../../procedures/bit_tests/navigation_tests.md).

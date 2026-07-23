# Ensemble d'ordinateur de largage d'armes (WRCS)

![ext_bombs_dropping](../../img/ext_f4_wrcs.jpg)

Les dispositions permettant au F-4E d'effectuer une livraison précise de munitions de niveau et de
plongée sont fournies par l’AN/ASQ-91 WRCS. Les entrées WRCS sont définies avec les
panneaux associés dans les cockpits, et ces commandes, ainsi que les données INS et la télémétrie
de la cible radar, sont utilisées par l'ordinateur balistique pour fournir le signal de
déclenchement.

![wso_wrcs_panel](../../img/wso_wrcs_panel.jpg)

## Contrôles de portée cible

Le panneau de commande de l'ordinateur situé dans le cockpit arrière comporte trois commandes
d'entrée TARGET, deux entrées RELEASE et un réglage d'entrée COEFFICIENT DE DRAG de bombe,
ainsi qu'un bouton de commande [BIT](../../procedures/bit_tests/wrcs.md) pour vérifier le
fonctionnement du système. L'entrée de cible est relative à l'IP prédéterminé.

L'entrée de commande de plage supérieure est pour le Nord/Sud, et la sélection du relèvement
relatif est indiquée par le préfixe N ou S en début de valeur.

L'entrée de commande du milieu de gamme est pour Est/Ouest, et comme la précédente, l'entrée E ou
Le préfixe W sur la plage définit la direction du relèvement relatif.

La dernière entrée ALT RANGE concerne l'altitude de la cible, qu'il s'agisse de l'élévation MSL
de la cible ou du RIP (Radar Identification Point), ou de l'altitude pression de la cible/RIP.
En mode Laydown, l'entrée fait référence à la distance entre l'IP et
la cible, en centaines de pieds.

Les entrées pour le Nord/Sud et l'Est/Ouest se font par incréments de 100 pieds, et une valeur
maximale allant jusqu'à 99 900 pieds peut être entrée pour ces distances. L'entrée ALT RANGE
a un maximum de 24 900 pieds par incréments de 100 pieds.

> 💡 Le WRCS peut être endommagé si l'entrée ALT RANGE est supérieure
> au MSL actuel de l'avion (x100) dans les modes TGT FIND et OFFSET BOMB.

## Contrôle de la plage de relâchement

La commande Release Range est utilisée pour définir manuellement la portée de la bombe en dizaines
de pieds,
et est accessible dans les modes Laydown, Dive Laydown et Offset Bombing.
Le réglage maximum est de 9990 pieds (999x10), et lorsqu'il est utilisé dans une livraison
intégrée WRCS/AJB-7, la portée réelle peut atteindre 99 900 pieds.

La commande Rg ne doit pas être réglée sur la même valeur que la commande de plage cible.
Sinon, le délai du râtelier à bombes pourrait être déclenché tardivement, voire pas du tout.

## Contrôle d'avance de largage

Opérationnel dans tous les modes intégrés WRCS et WRCS/LABS, le Contrôle d'avance de largage
fonctionne en conjonction avec l'AWRU pour avancer le signal de largage, en millisecondes.
Alors que le réglage de l'intervallomètre AWRU déclenche la séquence d'impulsions de largage
à partir du moment où le bouton de largage de la bombe est enfoncé, lorsque le Contrôle d'avance
de largage est appliqué dans une livraison pilotée par le WRCS, l'emplacement spécifique de la
bombe dans une séquence d'ondulations multiples peut être calculé à l'avance, permettant la
répartition la plus efficace possible sur une cible donnée.

À titre d'exemple, un largage de quantité à ondulation unique AWRU de 4 est sélectionné avec un
intervalle de 120 millisecondes. Pour placer la troisième bombe dans l'ondulation sur la cible,
l'équation suivante est utilisée :

![Formule d'avance de largage](../../img/release_advance_formula.jpg)

où

- `RA` = Release Advance Setting, millisecondes
- `I_R` = Réglage de l'intervallomètre de largage AWRU, millisecondes
- `N_Tgt` = Numéro de séquence d'impact de la bombe souhaitée sur la cible

![Formule d'avance de largage](../../img/release_advance_formula_example.jpg)

Ainsi, pour ce largage, nous définirions la valeur de RA à 240 ms. Cela produirait
une répartition de deux bombes en avant de la cible, une au point cible calculé,
et une en arrière.

Le réglage maximum du Contrôle d'avance de largage est de 999 millisecondes. Une calculatrice
permettant de calculer l'avance de largage en jeu est fournie par
le [calculateur de bombardement](../../dcs/bombing_computer.md). Vous pouvez l'ouvrir et le fermer
en appuyant sur <kbd>RCTRL</kbd>+<kbd>B</kbd> en jeu.

## Contrôle du coefficient de traînée

Utilisée uniquement en mode Dive Toss, cette entrée est un facteur de biais préparé pour
l'ordinateur balistique afin de compenser la trajectoire réelle de la bombe. Le réglage maximum
pour cette valeur est de 9,99.

### Ordinateur balistique

L'ordinateur balistique n'est pas directement accessible par l'équipage de conduite ; il est
plutôt préréglé en fonction du chargement configuré par l'équipe au sol, afin d'ajouter les
facteurs de biais d’éjection nécessaires. L'ordinateur utilise ces facteurs de biais prédéfinis
en conjonction avec un réglage de coefficient pour la traînée des munitions en mode Dive Toss
pour calculer une livraison précise.

## Test intégré du WRCS (BIT)

La commande BIT est utilisée pour confirmer l’état go/no-go du WRCS. Le système BIT
vérifie chaque mode de bombe individuellement, et l'efficacité du réglage donné
est confirmée en sélectionnant le mode souhaité, en appuyant sur le centre du bouton PUSH
FOR BIT pendant cinq secondes, puis en appuyant sur le bouton FREEZE en même temps que le
bouton PUSH FOR BIT. La confirmation des performances du mode sera affichée comme GO ou
NO-GO. Si un mode est vérifié une nouvelle fois pendant un vol et qu'une réponse
NO-GO est reçue, elle peut être ignorée.

## Panneau de configuration du curseur

![wso_cursor_control_panel](../../img/wso_cursor_control_panel.jpg)

Le panneau de commande du curseur fournit les commandes nécessaires pour TARGET FIND et OFFSET
modes de bombardement. Le panneau comporte deux roues nommées ALONG TRACK et CROSS TRACK,
qui sont utilisées en mode MAP-PPI pour positionner leurs curseurs respectifs sur le
Point d'identification radar (désigné à partir de ce point par RIP). Le contrôle ALONG TRACK,
qui présente la portée relative par rapport au RIP, comprend également un interrupteur interne
permettant aux instructions du curseur d'être acquittées par l'ordinateur balistique du WRCS,
et doit donc être la première commande appliquée dans la séquence d'insertion de cible.

Une fois que les curseurs ALONG TRACK (hémisphère de portée) et CROSS TRACK (ligne verticale)
sont alignés sur le RIP, le bouton FREEZE est enfoncé pour lancer le suivi de trajectoire au sol
du WRCS pour le point spécifié. Le bouton reste allumé jusqu'à ce que le bouton RESET soit
enfoncé ou qu'un autre mode de bombardement soit sélectionné.

Avec le suivi au sol du WRCS lancé, le bouton TARGET INSERT est enfoncé pour que les
curseurs ALONG TRACK et CROSS TRACK passent du RIP à la cible décalée.
Une fois sélectionnées, les informations de pilotage de la cible sont fournies par le WRCS au
BDHI, à l'ADI, au HSI et au viseur optique. En mode missile AGM-45, les indexeurs AoA
fourniront des commandes de manœuvre pour les exigences de niveau, de plongée ou de montée
afin de s'aligner
pour l'acquisition du chercheur. De plus, à moins que le commutateur de tonalité PULL-UP ne soit
désactivé sur le
panneau LABS, une tonalité audio sera déclenchée à partir du moment où le bouton de largage
de la bombe est enfoncé, jusqu'à ce que la première bombe soit larguée de l'avion ; cette fonction
est normalement destinée à l'entraînement, car elle peut masquer le volume audio des autres systèmes.

## Panneau de livraison d'armes

![wso_weapon_delivery_panel](../../img/wso_weapon_delivery_panel.jpg)

Le panneau de livraison d'armes permet à l'équipage navigant d'utiliser les fonctions WRCS TGT FIND
en modes LABS (ARBCS) - ceux situés sur le côté gauche du bouton de mode de livraison du pilote.

Le commutateur TGT FIND sur le panneau fonctionne de la même manière que le mode TGT FIND sur le
Bouton de mode de livraison. Le bouton de mode de livraison remplace ce commutateur dans n'importe
quel mode
en dehors de TGT FIND et doit être redéfini sur NORM. La position HOLD dynamise
les circuits de recherche de cible en conjonction avec n'importe quel mode LABS ou DIRECT que le
pilote sélectionne.

Le commutateur RANGE est fonctionnel dans tout mode WRCS nécessitant un réglage de
Release Range. La position NORM applique le multiplicateur x10 noté sur le réglage Release
affiché, tandis que la sélection de x100 applique un multiplicateur de 100 à la valeur du
compteur.

Le commutateur ACTIVATE déclenche les signaux d'activation préalables aux circuits LABS
une fois que l’avion est passé dans la Release Range. Le commutateur
ne doit être placé sur ON qu'après avoir appuyé sur TARGET INSERT et que les curseurs
ALONG TRACK et CROSS TRACK sont passés sur la cible.

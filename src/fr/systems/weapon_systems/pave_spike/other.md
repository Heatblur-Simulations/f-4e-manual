# Autre

## Rangement

Après avoir allumé le système, le pod peut être déployé en appuyant sur le bouton STOW.

![lampe_de_rangement](../../../img/wso_target_designator_stow_button.jpg)

Lorsqu'il n'est pas rangé, le pod se déplace en fonction des sélections actuelles et
passe automatiquement dans le WIDE FOV.

En position repliée, la caméra pivote vers le haut et un couvercle est déplacé devant elle.
Cela protège la caméra des pierres et autres dangers pendant le roulage, le
décollage ou le vol à basse altitude.

![pave_spike_stowed](../../../img/f4_ext_pave_spike_stowed.jpg)

La procédure de rangement prend environ 5 secondes, le voyant indiquant le statut actuel.

> 🟡 ATTENTION : La position de rangement est maintenue électriquement et ne peut être maintenue
> sans alimentation. Non alimenté, le pod oscille librement avec force. Décoller sans avoir
> préalablement mis le pod sous tension, ou voler avec le pod éteint, entraînera la sortie du
> pod de sa position de rangement. En dehors de la position de rangement, le système
> sera endommagé par les dangers environnants, ainsi qu'à chaque fois qu'il est déplacé de force
> dans ses limites de cardan. Les dommages décaleront non seulement la position de visée, mais
> affecteront également d’autres propriétés, telles que la vitesse de déplacement, entre autres.

## Refroidissement

Le pod de ciblage est doté d'un système de refroidissement installé dans la partie arrière, qui
refroidit automatiquement le pod par flux d'air externe.

![pave_spike_cooling](../../../img/f4_ext_pave_spike_cooling.jpg)

En général, le système est capable de maintenir la température du pod dans les limites
pendant tout le fonctionnement normal.

Cependant, si la température devient incontrôlable, le témoin de surchauffe s'allumera.

![lampe_surchauffe](../../../img/wso_target_designator_ins_button.jpg)

Dans ce cas, veillez à éteindre immédiatement le pod et laissez-lui d'abord le temps de
refroidir. Ignorer ce voyant fera fondre des parties du pod, l'endommageant de façon
irréparable.

Un pod cassé est généralement signalé par l'allumage du voyant MALF et par un affichage
entièrement noir.

![pave_spike_melted](../../../img/wso_target_designator_broken_pod.jpg)

Pour prolonger l'utilisation du pod et éviter la surchauffe, limitez le vol lent et à basse
altitude, ainsi que l’utilisation continue du laser.

> 🟡 ATTENTION : En règle générale, n'utilisez pas
> le laser pendant plus de 15 minutes sans laisser refroidir entre les utilisations.
> Limitez la poursuite du vol lent et à basse altitude pendant l'utilisation du pod à 30 minutes.
> Pour les températures extérieures extrêmes, ajustez les limites en conséquence.

## Visée

Normalement, le Pave Spike est correctement calibré par l'équipe au sol avant
d'entrer dans l'avion, mais il peut dériver en raison de dégâts de combat ou de manœuvres à G
élevé, auquel cas un recalibrage en vol par le WSO peut être nécessaire.

Par conséquent, le panneau de commande de désignation de cible fournit trois boutons pour ajuster
la position de visée dans les trois axes (azimut, élévation et roulis), dans un rayon de 2,5
degrés dans les deux sens.

![Boutons de visée](../../../img/wso_target_designator_boresight_knobs.jpg)

Dans des conditions parfaites, le pod est orienté parallèlement à la ligne de référence de
l'avion.
Cependant, faute de référence d’étalonnage, le WSO ne peut réaliser qu’un alignement approximatif.

Dans un premier temps, le viseur optique doit être mis en mode A/G et le réticule doit être
abaissé d'environ 30 mils. Avec ce réglage, la position correcte de l'axe de visée croise le
réticule de visée à une distance d'environ 20 000 à 60 000 pieds (200 à 600 indiqués sur l'affichage
de la portée).

![Paramètres de visée](../../../img/pilot_air_to_ground_30_mil_setting.jpg)
Ensuite, l'avion doit être manœuvré pour placer et maintenir un objet distant, tel qu'un bâtiment,
sur le pipper du viseur optique.

![Objet sur le pipper](../../../img/pave_spike_boresight_object.jpg)

Pendant que le pilote tient l'objet sur le pipper, le WSO doit mettre le pod en mode
d'acquisition 12-VIS, activer le champ de vision étroit, et peut ajuster l'azimut et
l'élévation pour aligner le pod avec l’objet.

> 💡 Le pod étant chargé sur la station de gauche, la position correcte de l'axe de visée est décalée
> de quelques pieds à gauche du pipper.

![Pod aligné sur l'objet](../../../img/pave_spike_boresight_aligned.jpg)

Le roulis est très difficile à aligner en vol ; si possible, atterrissez en premier. Ensuite,
placez le commutateur d'acquisition sur 9-VIS et utilisez le bouton de roulis pour aligner
approximativement le pod avec la taille
d'une personne debout au loin.

![Roulis aligné sur l'arbre](../../../img/pave_spike_boresight_roll_ground.jpg)

Alternativement, un alignement approximatif du roulis peut être obtenu en vol en plaçant le
commutateur d'acquisition sur WRCS, en intégrant le WRCS avec le pod et en effaçant toute entrée
cible actuelle. De cette façon, le pod regardera automatiquement vers le bas.

L'avion peut désormais voler directement au-dessus d'un point de repère, tel qu'une rivière,
et le bouton de roulis peut être utilisé pour aligner la ligne de visée avec le point de repère.

![Roulis aligné sur la rivière](../../../img/pave_spike_boresight_river.jpg)

## BIT

Le pod dispose de 5 tests intégrés, BIT 1 étant le mode réellement utilisé pendant le
fonctionnement normal. Ils peuvent être activés et commutés en cliquant sur le BIT
bouton situé sous l’écran. Les voyants GO/MALF indiquent le résultat du BIT :

- GO - le test a réussi
- MALF - le test a détecté un échec

Pendant le fonctionnement normal, activé via BIT 1, aucun des deux voyants n'est allumé.

### BIT 0

Tous les voyants de l'Ensemble de contrôle de désignation de cible s’allument à pleine
luminosité.
Le pod n'a pas besoin d'être mis sous tension pour ce test.

![pave_spike_self_test](../../../img/wso_target_designator_bit_0.jpg)

GO/MALF n'indique pas les résultats des tests dans ce mode.

### BIT 1

Les circuits sont alimentés et surveillés. Si une lecture de tension est anormale,
MALF s'allume.

GO ne s'allume pas dans ce mode.

Il s'agit du mode de fonctionnement standard. Le pod peut être utilisé normalement et le
système surveillera en permanence l'état.

### BIT 2

Le système simule la fonctionnalité de suivi (Track), en simulant toutes les entrées, ainsi
que les données d'altitude et de portée.

Après environ 15 secondes, le test se termine avec GO ou MALF s'allumant.

> 💡 Pour que le test soit réussi, l'avion ne doit pas bouger, le pod doit être
> déployé et l'INS doit être intégré.

### Bit 3

Cela teste le niveau d’énergie du laser. Le pod se déplace vers une position spéciale où il
regarde à l'intérieur de lui-même, de sorte que le laser tire sur un capteur spécial monté
à l'intérieur du pod.

Le pod doit être déployé, un code laser valide doit avoir été saisi, et le bouton LASER READY
doit être enfoncé. Le protège-train avant est ignoré pendant
le test, permettant l'utilisation du laser au sol.

Une fois que le pod a atteint la position de test, le WSO doit appuyer et maintenir le
bouton Rejeter/Annuler pour commencer à tirer le laser. Le laser arrête de tirer lorsque
le bouton est relâché.

![rejet_override_button](../../../img/wso_target_designator_reject_button.jpg)

Lorsque le laser se déclenche, un programme de test de 5 secondes démarre, le capteur mesurant
l'énergie du laser. Après le test de 5 secondes, GO ou MALF s'allument pour
indiquer si le niveau d’énergie était supérieur au minimum requis.

![pave_spike_bit_3_az_el](../../../img/pilot_los_bit_3.jpg)

Le pilote peut aider à indiquer au WSO que la position de test a été atteinte,
comme l'indique l'indicateur d'azimut-élévation (1 et 2).

### Bit 4

Le système teste le calcul de télémétrie en simulant une portée inclinée laser de 2100 pieds
(±200). Le pilote peut le confirmer à l'aide de la lecture de l'indicateur de portée.

![pave_spike_bit_4_range](../../../img/pilot_range_indicator_bit_4.jpg)

Après environ 8 à 14 secondes, le test est terminé et GO ou MALF est allumé.

## Mises à niveau

Sur la base des commentaires de l'équipage, le pod de ciblage Pave Spike a reçu deux
améliorations, qui sont disponibles en tant qu'armes sélectionnables distinctes dans DCS.

### Smart-Track

TCTO 518, connue sous le nom de mise à niveau Smart-Track, vise à supprimer l'obligation
d'appuyer sur le bouton Rejeter/Annuler pour forcer la plage inclinée mesurée par laser dans les
situations où la plage inclinée calculée était généralement trop imprécise.

![rejet_override_button](../../../img/wso_target_designator_reject_button.jpg)

Avec la mise à niveau, le système acceptera automatiquement la plage inclinée du laser
chaque fois que le cardan d'élévation du pod est supérieur à -7,5 degrés. C'est-à-dire à des
angles faibles (rasants), par exemple lors du mode 12-VIS ou lors d'attaques à basse altitude.

### Fast-Track

La mise à niveau populaire TCTO 519 révise les moteurs à cardan du pod, augmentant ainsi la
vitesse de déplacement de 15 dps à 60 dps.

> 💡 À cette vitesse, le pod de ciblage est capable de suivre une cible en vol à basse altitude
> et haute vitesse, comme lors de survols à 1 000 pieds et 500 nœuds.

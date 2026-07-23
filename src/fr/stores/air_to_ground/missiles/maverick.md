# AGM-65 Maverick

![agm65](../../../img/agm65.jpg)

Entré en service en 1972, le missile air-sol AGM-65 a doté le Phantom
II d'une arme à longue portée à tir direct, capable de détruire des blindages, de
l'infanterie mécanisée et d'autres cibles avec la précision d'un guidage par imagerie
électro-optique, puis infrarouge.

Le F-4E était capable d'en transporter jusqu'à six entre les deux pylônes intérieurs de l'aile.
L'AGM-65 Maverick a une portée maximale approximative de 12 milles marins.

L'emploi du Maverick est partagé entre les deux cockpits, le pilote
responsable de la sélection des postes d'armement et des modes, ainsi que du placement initial des
chercheurs. Depuis
le point où la tête chercheuse est stabilisée sur la zone cible prévue, l'un ou l'autre
membre de l'équipage peut diriger la cible de contraste finale prévue.

<iframe width="560" height="315" src="https://www.youtube.com/embed/A4m8lyxbCVw?si=j7zYMHmHzk1OF6dJ"
title="DCS F-4E Phantom : AGM-65 Maverick Tutoriel" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Variantes

Les variantes disponibles incluent :

| Variante | Ogive | Champ de vision | Descriptif |
| ------- | ------: | ------------- | --------------------------------------- |
| A |  462 livres | Large | Télé-Guidé |
| B |  462 livres | Étroit | Télé-Guidé |
| D |  485 livres | Large et étroit | Guidé par IR |
| G |  675 livres | Large et étroit | Guidé par IR, optimisé pour les cibles plus grandes |

## Emploi

Les Mavericks ont besoin d’une période de trois minutes pour réchauffer l’équipement. Cela commence
comme
dès que l'alimentation électrique est connectée à l'avion. Au moment où l'avion est
aéroportés, ils sont généralement prêts à l’emploi.

Pour utiliser un Maverick de n'importe quelle variante, le pilote commence par appuyer sur les
boutons de sélection de station applicables et en réglant le Master Arm sur On. Le pilote doit
alors sélectionner Direct sur le bouton de mode de livraison, et la position TV sur le bouton de
sélection d'arme.

### Gyro

Dès que la position TV est sélectionnée sur le
[Bouton de sélection d'arme](../../../cockpit/pilot/weapon_management.md#weapon-selector-knob),
les gyroscopes des missiles commencent à tourner. Ce processus prend environ **trois
minutes**. Si le bouton est déplacé hors de la position TV, les gyroscopes commencent à
ralentissez après un court laps de temps.

Il est nécessaire d'attendre que les gyroscopes tournent complètement avant de débloquer le
missile.

> 🟡 Aucune sécurité n'empêche le pilote de débloquer le missile au préalable.
> Cela conduit la caméra à être asservie aux gyroscopes alors qu'elle n'est pas complètement tournée.
> encore. En fonction de la vitesse à laquelle les gyroscopes ont déjà tourné, cela peut
> soit provoquer une forte gigue sur l'image, soit même détruire l'équipement de la caméra
> car il est cogné avec force contre ses cardans.

Un missile avec un capteur TV cassé peut être ignoré manuellement en utilisant le
[Commutateur TGT/MSL REJ](../../../cockpit/pilot/pedestal_group.md#tgtmsl-reject-switch)
soit en désélectionnant le pylône, selon que l'on souhaite passer à un autre
missile sur le même pylône ou sur un autre.

Les voyants ARM sur les
[Boutons de sélection de station](../../../cockpit/pilot/weapon_management.md#station-select-buttons)
sont utilisés pour indiquer un fonctionnement sûr des Mavericks. Lorsque ARM est allumé, les
gyroscopes
ont complètement tourné et l'arme peut être déverrouillée et utilisée en toute sécurité.

> 💡 Les lumières ARM sont câblées pour toujours démarrer une minuterie de 3 minutes chaque fois que le
> [Bouton de sélection d'arme](../../../cockpit/pilot/weapon_management.md#weapon-selector-knob)
> est déplacé en position TV. Par conséquent, si le bouton est simplement déplacé hors du
> position brièvement, les voyants ARM ne s'allumeront pas avant que la minuterie ne soit terminée.
> passé à nouveau. Cependant, les gyroscopes ne ralentiront pas instantanément. C'est généralement
> Il est prudent d'ignorer le voyant ARM si la position du téléviseur n'a été laissée que pendant quelques instants.
> secondes.

### Procédure générale

Il est utile de régler le viseur optique en mode A/G et d'entrer une dépression de
**45 mils**, de sorte que l'alignement de la visée soit celui de l'autodirecteur du missile. Ce
De cette façon, le pilote peut mettre la cible sur le Pipper et elle sera dans le rayon
vue sur les armes.

| Pas de verrouillage | Verrouillé sur la cible | Vue étroite et verrouillée |
| -------------------------------------------------------- | -------------------------------------------------- | ---------------------------------------------------------- |
| ![maverick_unlocked](../../../img/maverick_unlocked.jpg) | ![maverick_locked](../../../img/maverick_lock.jpg) | ![maverick_lock_zoom](../../../img/maverick_lock_zoom.jpg) |

L'équipage peut activer ses écrans pour visualiser la vidéo du chercheur ; le pilote
sélectionne la position du téléviseur sur le commutateur Scope Display Select sur le socle
panneau, et le WSO place le bouton de mode d'affichage DSCG sur TV et le bouton de sélection vidéo
Passez à WEAPON au lieu d’ASQ.

Le pilote manœuvre l'avion pour positionner le réticule de visée au-dessus de la cible
zone, et chaque membre de l'équipage peut alors appuyer sur son manche de vol respectif
déclencheur pour lancer la vidéo.

> 💡 Pour démarrer le flux TV, la gâchette du manche de vol doit être enfoncée. Ce
> fait exploser le couvercle devant la caméra. Avec la couverture toujours
> attaché, l’écran reste vide.

Avec la vidéo active, l'autodirecteur peut être libéré de sa cage et contrôlé en appuyant sur le
bouton
déclencheur du manche de vol une fois. Cette opération doit être répétée chaque fois que l'arme est
désélectionné, entrant à nouveau dans une cage mécanique.

Le commandement de l'autodirecteur de missile est contrôlé par le membre d'équipage qui a activé le
signal vidéo comme suit :

### Pilote

Avec le Pipper au-dessus de la zone cible, en appuyant et en maintenant le bouton
[Bouton ARR](../../../cockpit/pilot/stick_seat.md#air-refueling-release-button)
permet le pivotement de la chenille avec le manche de commande manuelle avant vers l'intérieur
depuis le
étrangler. Une fois que le réticule du chercheur est au-dessus de la cible prévue, relâchez le
Le bouton ARR effectue un verrouillage du missile sur la zone de contraste située sous le
réticule. Si l'autodirecteur du missile ne parvient pas à se verrouiller sur la bonne cible,
le verrou peut être brisé en appuyant à nouveau sur la gâchette, amenant le missile
l'autodirecteur revient à sa position de visée, puis réessayez le verrouillage avec le
Bouton ARR. Si la cible ne semble pas avoir suffisamment de contraste par rapport à la
arrière-plan environnant, le contraste peut être permuté du noir chaud au blanc chaud,
ou vice versa, en utilisant le commutateur de contraste cible sur la commande du moteur intérieur
Panneau. Laisser le commutateur en position Auto permet à l'autodirecteur de tenter de
déterminer la meilleure option pour le contraste.

Si un missile semble ne pas fonctionner correctement, il peut être rejeté
le tour suivant dans la séquence de libération en utilisant le commutateur TGT/MSL REJ, à condition
c'est sur le même pylône. Sinon, le pylône doit d'abord être désélectionné.

Une fois le verrouillage sur la bonne cible atteint, le missile est lancé à l'aide du
bouton bombe. Pour lancer le verrouillage de la cible suivante, le processus recommence
avec la pression de la gâchette.

En gardant à l'esprit ce qui précède pour les AGM-65A et B électro-optiques, l'AGM-65D dispose d'un
quelques modifications mineures à la procédure. L'autodirecteur du 65D a deux FOV
Paramètres, large et étroit, et le signal vidéo initial est fourni dans le large
paramètre. Dans ce contexte, un quatuor de supports en forme de L définissent la région de
l'affichage qui sera agrandi lors de la sélection du champ de vision étroit.
En appuyant une deuxième fois sur la gâchette, la vidéo passe au réglage étroit,
permettant une sélection plus précise de la cible.

### WSO

Le WSO effectue la même séquence d'actions pour le guidage du chercheur et peut
lancer la vidéo dès la confirmation par le pilote de l'emplacement du Pipper à l'aide du déclencheur
de
son propre manche de vol dans le cockpit arrière. A partir de ce point, le WSO utilise le
Manche de commande manuelle de l'antenne pour gérer le placement de la tête chercheuse, le
verrouillage et dans le
cas des commandes FoV d'emploi de l'AGM-65D. Plutôt que d'appuyer et de maintenir le
Bouton ARR pour activer le balayage, le WSO sélectionne la position de déclenchement à demi-action,
puis fait pivoter le chercheur à l'aide du contrôle du curseur.

Une fois que la cible applicable est sous le réticule, le verrouillage est réalisé à l'aide du
commande d'action complète. Si le WSO doit modifier le FoV 65D pour le rétrécir, un
Une pression ultérieure sur la moitié de l'action le fera. Le WSO peut changer le mode de contraste
avec le commutateur de contraste sur le panneau RWR sur le côté droit. Et, une fois le verrouillage
terminé
atteint, le WSO peut tirer le missile en utilisant le bouton de lancement de missile trouvé sur
son manche de vol - dans la même position que le bouton Bomb Release sur le devant
bâton.

![agm65livraison](../../../img/agm65delivery.jpg)

# Modes

Avant de pouvoir désigner une cible, il faut acquérir visuellement la
zone cible générale et placer la LOS à proximité. Cela se fait en utilisant l'un
des trois modes d'acquisition :

- 12-VIS
- 9-VIS
- WRCS

Les modes peuvent être sélectionnés par le WSO, à l'aide du commutateur de mode d'acquisition.

![acq_mode_switch](../../../img/wso_target_designator_acq_switch.jpg)

## Modes visuels

En 12-VIS et 9-VIS, la LOS est réglée sur une position fixe.

- 12-VIS : roulis de 0 degrés, élévation de -2 degrés, regardant légèrement en piqué
- 9-VIS : -90 degrés de roulis (CW), -90 degrés d'élévation (vers le bas), en regardant vers la
  gauche

12-VIS peut être un excellent moyen de trouver des cibles d'opportunité, car il permet au pilote
de placer une cible directement sur le nez. La position correspond également au réticule HUD
figé. De plus, si l'INS est intégré au pod, 12-VIS est
stabilisé en roulis.

L'utilisation du 9-VIS est très limitée. Il est destiné à aider à acquérir une cible
tout en observant une zone dans un virage. La cible doit être placée sur l'extension de
l'aile gauche. Cependant, dans la pratique, il est très difficile de maintenir un virage
dans une telle attitude.

## Mode WRCS

Le mode principal pour acquérir des cibles est le mode WRCS, dans lequel la LOS est réglée sur
la cible WRCS actuelle. Cela correspond généralement au curseur sur le radar
écran, mais peut également être réglé manuellement par le WSO. Cela permet à l'équipage de repérer
une
cible, ou une zone cible générale, en utilisant le radar ou en saisissant des coordonnées connues,
puis en faisant pivoter le pod vers cette destination. Si aucune cible spécifique n'a été
insérée, le WRCS prend généralement par défaut la position de l'avion, ce qui fait que le
pod regarde droit vers le bas.

> 💡 Le mode WRCS revient automatiquement au mode 12-VIS si l'intégration WRCS
> est désactivée.

<iframe width="560" height="315" src="https://www.youtube.com/embed/kNsCHg5YZyU?si=INDz-ybqpRbVwMsN"
title="DCS : F-4E Phantom - Pave Spike - Coordonnées" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Mode Track

Une fois que la cible, ou la zone cible générale, a été trouvée à l'aide des modes
d'acquisition, le WSO peut entrer en mode Track en appuyant sur la gâchette de la commande
manuelle d'antenne jusqu'à Half Action ou Full Action.

> 💡 Il est nécessaire que le déclencheur parcoure la séquence complète, par
> exemple _Released_ à _Half Action_ et retour à _Half Action_ afin de
> passer en mode Track.

Dans ce mode, le bâton d'antenne peut être déplacé pour faire pivoter la LOS du pod. Le
fonctionnement du laser n'est disponible que dans ce mode, et peut être activé en appuyant sur
la gâchette du bâton d'antenne jusqu'à Full Action.

Le mode Track est indiqué par les repères T0 et TTG qui deviennent visibles sur l'écran.
Ils indiquent également l'état pendant le fonctionnement du laser.

Si l'INS est intégré au pod, l'image sera automatiquement stabilisée dans l'espace
sur la position cible calculée. Sachez que la stabilisation est
rudimentaire et nécessite une correction constante avec le bâton pour que la cible reste
maintenue centrée.

La stabilisation est principalement basée sur la portée inclinée mesurée. Une portée inclinée
précise peut être obtenue en tirant le laser. Autrement, elle est calculée à partir de
l'altitude barométrique de l'avion et de l'altitude cible, que le WSO peut régler
sur le panneau WRCS.

![pave_spike_wrcs_target_alt](../../../img/wso_wrcs_panel_target_altitude.jpg)

Sans intégration WRCS, une altitude cible de 0 est supposée, ce qui dégrade la
stabilisation.

> 💡 Le pod n'est pas capable de calculer une portée inclinée pour les cibles situées au-dessus
> de l'altitude de l'avion porteur (par exemple lors d'une attaque en montée). Puisque cela est
> mesuré à l'aide de l'altitude barométrique, en fonction du réglage de la pression, cela peut
> conduire à un comportement erratique pendant les journées chaudes en vol à basse altitude. Des
> situations problématiques comme celle-ci étaient communément appelées _Mode idiot_, car
> le système de suivi commençait à se comporter de manière très étrange et il était très
> difficile de rétablir un comportement correct. L'équipage devait souvent désactiver
> temporairement l'intégration INS afin de désactiver le suivi automatique.

<iframe width="560" height="315" src="https://www.youtube.com/embed/O5Sdfbeuj0U?si=bNw2pKfrzehRq-P6"
title="DCS : F-4E Phantom - Pave Spike - Suivi" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Mode mémoire

Chaque fois qu'un signal d'insertion de cible est envoyé, le système active le mode mémoire,
à condition qu'il soit actuellement en mode Track et que l'intégration WRCS soit active.

Dans ce mode, la ligne de visée est asservie à la cible WRCS actuelle, même si elle
est en dehors des limites du cardan du pod et ne peut pas être affichée actuellement. Le mode
agit de manière très similaire au mode WRCS-Acquisition.

Le mode mémoire doit être explicitement quitté à nouveau, en appuyant sur la gâchette du
bâton d'antenne jusqu'à Half Action ou Full Action.

### Insertion de cible

Un signal d'insertion de cible est généralement initié par le WSO appuyant sur le
bouton d'insertion de cible.

![wrcs_target_insert_button](../../../img/wso_cursor_control_panel_target_insert_button.jpg)

Cependant, lorsque le pod est actuellement en mode Track et qu'il est manœuvré en dehors de
ses limites de cardan, il lancera automatiquement un signal d'insertion de cible et
enverra sa position cible actuelle au WRCS.

> 💡 Si le laser est en train de tirer, il s'arrêtera automatiquement lorsqu'une limite
> est atteinte.

Ce signal fait alors également passer le pod en mode mémoire, auquel cas il
continuera à suivre la position désormais mémorisée par le WRCS.

De plus, le signal sera également envoyé si le pod est désélectionné, c'est-à-dire

- Bouton de sélection vidéo - Arme, ou
- Mode DSCG du WSO - pas TV (par exemple passage au radar)

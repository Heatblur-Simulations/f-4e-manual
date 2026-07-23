# Système de contrôle de vol

![ext_view_flight_controls](../../img/ext_f4_flight_control_surfaces.jpg)

Les principales commandes de vol de l'avion sont constituées
du [stabilisateur](./flight_controls.md#aileron-spoiler-control-and-stabilator-control-feel-and-trim-systems),
[gouvernail](./flight_controls.md#rudder-control-system),
[ailerons](./flight_controls.md#aileron-spoiler-control-and-stabilator-control-feel-and-trim-systems),
et
[spoilers](./flight_controls.md#aileron-spoiler-control-and-stabilator-control-feel-and-trim-systems).
Les systèmes de sensations artificielles fournissent
forces aérodynamiques simulées sur le manche de commande et
pédales de gouvernail. Les contrôles secondaires sont
[rabats/lattes de bord d'attaque](./flight_controls.md#slats-flap-system),
[volets de bord de fuite](./flight_controls.md#slats-flap-system),
et des freins rapides [montés sur l'aile](./flight_controls.md#speed-brakes).

<iframe width="560" height="315" src="https://www.youtube.com/embed/EXsTlmokAlQ?si=QZfuCaOXcLmS9g1Z"
title="Systèmes de commandes de vol F-0005 pour le F-4" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Bobweights vs soufflets

Liens entre le manche, les gouvernes et les interactions avec le système de trim,
ainsi que les AFCS sont une combinaison complexe de forces qui s'équilibrent les unes les autres.
autre.

Les poids bobinés connectés au manche augmentent la force nécessaire pour le déplacer
en fonction de la force G actuelle en poussant le manche vers l'avant. Par exemple, quand
en tirant le bâton et en générant des G positifs, les poids bobinés deviennent plus lourds,
ce qui rend plus difficile de tirer davantage et conduit naturellement le bâton à vouloir bouger
retour au neutre.

Les bobweights sont contrés dans la direction opposée par le soufflet
système actionné par la pression d'air dynamique détectée à l'entrée du soufflet sur la verticale
ailette.

![Entrée du soufflet](../../img/ext_f4_anti_col_light.jpg)

Le soufflet tire le manche vers l'arrière en fonction de la vitesse relative.
Par exemple, lorsque vous lâchez le manche et que l'avion décolle involontairement
piqué, la vitesse augmente et le système de soufflet tire le manche vers l'arrière, naturellement
provoquant le cabrage de l'avion et sa stabilisation en vol en palier.

Le réglage de l'avion entraîne une modification de la longueur du bras de levier reliant
le système de soufflet avec le bâton, modifiant la force effective qu'ils peuvent appliquer.

> 🟡 Le blocage ou le gel de l'entrée du soufflet entraîne un dysfonctionnement du système.
> Dans ce cas, le trim peut être rendu inefficace et un cabrage soudain vers le haut ou vers le bas
> des mouvements peuvent se produire, en fonction de la façon dont les forces du soufflet et du poids du bob s'équilibrent
> dehors. Pour éviter un autre changement soudain de hauteur une fois le blocage résolu,
> la garniture doit rester neutre.

Les deux forces opposées sont soigneusement équilibrées pour maintenir le bâton dans un
position neutre pendant un vol en palier à des vitesses normales. Cependant, en raison du
nature dynamique du système, l'avion doit constamment être regarni après
même le plus petit changement des conditions de vol. Surtout sous les G ou lors du changement
vitesse, la sensation du comportement du manche change radicalement.

## Bâtons de contrôle

![FlightStick](../../img/pilot_stick.jpg)

Un manche de commande est fourni dans les deux cockpits, avec une commutation presque uniforme
entre les deux. Un contrôle de trim (<num>1</num>) se trouve sur les deux manches pour fournir de la
force
réduction et correction mineure de la trajectoire de vol dans l’axe du tangage et du roulis. Armes
sont livrables via un déclencheur (<num>3</num>)
(pour les [missiles air-air](../../stores/air_to_air/overview.md) et le [canon](../../stores/guns.md))
et un interrupteur de largage de bombe (<num>2</num>). Les deux bâtons portent
a [Bouton de direction de la roue avant (<num>5</num>)](gear_ground_handling.md#nose-gear-steering)
qui
sert également de contrôle d'acquisition automatique pour le [radar](../radar/overview.md) en mode
visuel de combat à distance, et de contrôle de la mise au point du capteur pour les
[armes air-sol](../../stores/air_to_ground/overview.md) dirigées par vidéo. Un
[Levier de dégagement rapide d'urgence (<num>6</num>)](gear_ground_handling.md#emergency-anti-skid-quick-release-lever)
sur chaque bâton est disponible pour désactiver immédiatement le système anti-patinage, le système
automatique
système de commandes de vol, augmentation de la stabilité et aileron-gouvernail de direction
interconnecter. Ce qui est unique au manche de commande du cockpit avant est le
[Bouton de déverrouillage du ravitaillement en vol
(<num>4</num>)](../engines_and_fuel_systems/fuel_system.md#air-refueling-release-button),
une commande à double rôle qui remplit la fonction de déconnexion de la perche que son nom
l'indique, ainsi que
un certain nombre de fonctions de sélection d'armes.

De plus, un capteur de force unique au manche avant du cockpit est un transducteur de force, pour
permettre au pilote
contrôle de réglage fin du AFCS avec la fonctionnalité de pilote automatique activée. Dans le cas où
la force
appliqué au manche dépasse la limite de rupture AFCS, le pilote automatique sera temporairement
désactivé.

## Systèmes de contrôle des ailerons et des spoilers et des stabilisateurs, systèmes de sensation et de compensation

Le système de contrôle des ailerons et du spoiler et le système de contrôle des stabilisateurs
offrent tous deux
garniture suivante ; le premier via un vérin à vis, le second utilisant un
servo dirigé par le AFCS.
Ces fonctions amènent le manche à se positionner par rapport
à la position actuelle du trim et du pilote automatique lorsque le membre d'équipage aux commandes
passe
"Ne touchez pas". Il est donc conseillé de manœuvrer le manche dans le même sens
position, ou pour déplacer doucement le manche vers la « force d'arrachement » avant de le
désengager
le système de pilote automatique pour réduire le risque de retour brusque au contrôle du pilote.

Pour confirmer l'état actuel du trim du stabilisateur, une position du trim du stabilisateur
L'indicateur est fourni sur
le [panneau vertical gauche du cockpit
avant](../../cockpit/pilot/left_sub_panel.md#stabilator-trim-indicator)
.

![StabTrimInd](../../img/pilot_stabilator_trim_indicator.jpg)

## Système de contrôle du gouvernail

![ext_rudder](../../img/ext_f4_rudder.jpg)

Le contrôle de l’axe de lacet est dirigé par les palonniers présents dans les deux cockpits. À
compenser tout dérapage relatif dû à l'effet du vent, au déséquilibre des magasins ou à des
[moteur](../engines_and_fuel_systems/engines.md) écart de sortie,
un [interrupteur de trim de
gouvernail](../../cockpit/pilot/left_console/front_section.md#rudder-trim-switch) est
trouvé sur
le [panneau de commande du moteur](../../cockpit/pilot/left_console/front_section.md#inboard-engine-control-panel)
dans le cockpit avant. Au sol, les pédales elles-mêmes peuvent être enfoncées
indépendamment pour le freinage différentiel, et l'axe du gouvernail lui-même fonctionne comme
la commande directionnelle de direction du train avant lorsque
le [Bouton de direction de la roue avant](gear_ground_handling.md#nose-gear-steering)
sur l'un ou l'autre des leviers de commande est enfoncé.

## Interconnexion aileron-gouvernail (ARI)

Le système d'interconnexion aileron-gouvernail provoque le gouvernail
déplacement proportionnel au déplacement des ailerons
effectuer des virages coordonnés à basse vitesse. Il s'enclenche automatiquement avec le
[Interrupteur des volets à lattes](../../cockpit/pilot/left_console/wall.md#slatsflaps-control-panel)
dans le HORS ET LE BAS
position, et la vitesse anémométrique inférieure à la vitesse de gonflement des volets (230
noeuds).

Les limites de
le système a 15° de déplacement du gouvernail lorsque le
le système de contrôle de vol automatique est dans la stabilité
mode augmentation ou pilote automatique et gouvernail à 10°
déplacement lorsque l'interrupteur d'augmentation de lacet de lacet est désengagé.

Le disjoncteur de l'ARI est situé à droite du
Libération des magasins d'urgence.

![ARIfuse](../../img/pilot_ari.jpg)

> 💡 Pour désengager définitivement l'ARI, le circuit
> Le disjoncteur sur le sous-panneau gauche doit être tiré
> et le commutateur Yaw STAB AUG doit être désengagé.
> Tirer le disjoncteur avec l'interrupteur
> toujours engagé, il fournira toujours 5° de gouvernail ARI
> autorité. Lorsque le disjoncteur ARI est
> tiré, le système antidérapant est également désactivé.

> 💡 Un saut de gouvernail se produira lorsque le système ARI sera coupé
> entrée ou sortie avec une entrée latérale du manche de commande. Ce
> se produit normalement lorsque les volets sont relevés ou
> abaissé lors d'un virage.

### Déconnexion d'urgence

Dans le cas où l'un des sièges aux commandes nécessite la désactivation de l'ARI, le système peut
être déconnecté en
tirant
le [levier de dégagement rapide
d'urgence](gear_ground_handling.md#emergency-anti-skid-quick-release-lever)
sur leur manche de commande respectif. Quand le
switch est relâché, l'ARI (10°) et le Yaw STAB AUG (5°)
l'autorité du gouvernail est retrouvée. Fonction de l'ARI
peut toujours être annulé via les pédales de direction.

## Système de contrôle de vol automatique (AFCS) - AN/ASA-32

![pilot_afcs_switches](../../img/pilot_afcs_control_panel.jpg)

Le système de commandes de vol automatique (AFCS) est un
système électro-hydraulique conçu pour fournir une stabilité,
manœuvres de vol précises et coordonnées sans
interférer avec le contrôle manuel. Le vol automatique
Le système de contrôle est capable d'exécuter deux modes de
opération, **augmentation de stabilité** et **AFCS**.

> 💡 Le terme « AFCS » est le nom de l'ensemble du système mais aussi
> son sous-mode dans lequel l'attitude et/ou le cap de l'avion
> est maintenu et le maintien d'altitude peut être activé.

<iframe width="560" height="315" src="https://www.youtube.com/embed/4ubA7UuQ5vw?si=Ga5Ym_cnLGLzJiy2"
title="DCS : Tutoriel sur le système de commandes de vol automatique du F-4E (AFCS)" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**L'augmentation de la stabilité** améliore la stabilité de l'avion en tangage, roulis,
et lacet. Il s'oppose à tout changement d'attitude mais ne
ramener l'avion à une assiette ou une trajectoire au sol donnée.
Ce mode de fonctionnement peut être utilisé lorsque l'avion est
sous contrôle manuel. L'augmentation de la stabilité peut être
engagé individuellement ou dans n'importe quelle combinaison pour le tangage, le roulis,
ou axe de lacet.

Le mode de fonctionnement **AFCS** maintient tout
cap et/ou attitude de l'avion sélectionnés dans le AFCS
limite et corrige tout écart par rapport à la valeur sélectionnée
le cap ou l'attitude de l'avion dans les limites AFCS.
Le commutateur AFCS (<num>2</num>) peut être engagé uniquement avec
le commutateur Pitch STAB AUG enclenché ; cependant, pour fournir pleinement
Fonctionnement AFCS, les trois commutateurs STAB AUG doivent être
engagé.

Le système AFCS peut être enclenché et maintenir les manœuvres et
attitudes dans une plage de ±70° en inclinaison, 70° en inclinaison et 360°
en azimut, à condition que les limites G ne soient pas dépassées.
Mouvements rapides du stabilisateur, qu'ils soient induits par le pilote ou
non, cela entraînera le désengagement du commutateur AFCS.

Si le commutateur AFCS
est engagé lorsque l'avion est à moins de ± 5° du niveau des ailes,
alors l'avion maintiendra une **assiette des ailes à l'horizontale**,
et tiendra le **cap** engagé.
Lorsque le bouton de direction du train avant
(sur la poignée du bâton) est enfoncé, maintien du cap
abandonne et le maintien **attitude** est disponible. Maintien du cap
peut être rétabli en appuyant à nouveau sur le
bouton de direction du train avant. Si l'assiette de l'avion est supérieure
à ± 5° du niveau des ailes lorsque l'interrupteur AFCS est
engagé, alors l'avion maintiendra l'assiette inclinée à
le moment de l'engagement.

Le **mode de maintien d'altitude** (<num>3</num>) maintient
toute altitude sélectionnée en mode **AFCS**.

> 💡 Fluctuations de l'altimètre lors de l'accélération
> à travers la plage transsonique (0,9 à 1,0 Mach) produira
> fluctuations passagères qui, bien que non violentes, peuvent
> faire glisser l’altitude de référence. Engager l'altitude
> mode maintien dans les montées supérieures à 1 000 pieds par minute
> peut donner lieu à une altitude de référence autre que celle d'engagement.
> altitude.

### Transducteur de force

Le transducteur de force détecte la force physique appliquée à
le manche de commande. Cette unité comprend le visible
partie du manche de commande avec la poignée du manche montée sur
en haut.

Le transducteur de force contient des capteurs sensibles à la pression
interrupteurs qui réagissent au manche longitudinal et latéral
forces. Une force de bâton latérale d'environ 1,5 livre
ferme un interrupteur de force. Lorsqu'un interrupteur de force de roulis ferme le
signal gyroscopique du taux de roulis dans STAB AUG et le taux de roulis et
les signaux gyroscopiques d'attitude en mode AFCS sont coupés afin que
les manœuvres initiées par le pilote ne font pas l'objet d'opposition
Mode AFCS. Le pilote manœuvre l'avion en
liaisons mécaniques jusqu'à ce que la force de manche latérale soit réduite
à moins d’environ 1,5 livre. A ce moment le rouleau
Le canal revient au fonctionnement normal AFCS.

Un avant
force de bâton de 3,75 ± 0,25 livres ou une force de bâton arrière de 2,55
±0,25 livres ferme les interrupteurs pour faire fonctionner certains AFCS
composants et amener un dispositif de détection de force à envoyer un
signal, proportionnel à la force de manche appliquée, au servo
La position de l'amplificateur et du stabilisateur est contrôlée via le
AFCS.

Il n'y a pas de capteur de force de manche dans le cockpit arrière. Le
AFCS et roll stab aug s'opposeront au manche arrière du cockpit
entrées. Ne pilotez pas l'avion depuis le cockpit arrière avec
AFCS engagé. Faire preuve de prudence lors du transfert du contrôle
entre les cockpits tout en roulant avec le roll stab aug engagé.

### Accéléromètre de limite G

La fonction de verrouillage du facteur de charge normal (désengagement G) de
le AFCS est conçu pour empêcher le système de
commandant des facteurs de charge excessifs dans l’avion. Le
le système revient automatiquement quel que soit le mode
engagé sur l'augmentation de stabilité dans le cas où +4 ou
-1 G est détecté par le G-désengagement
interrupteur accéléromètre.

Cet interrupteur est monté à l'avant sur
la cloison radar de sorte que si l'avion tourne
rapidement dans une manœuvre, le désengagement se produit à un niveau inférieur
valeurs du facteur de charge normal dues à l'anticipation
résultant de la localisation vers l'avant détectant un composant
d'accélération du tangage.

La fonction G-désengagement est
inopérant en dehors des limites ±70° du pilote automatique.

> 🔴 ATTENTION : Le switch G ne désengage pas le pilote automatique
> dans des conditions de faible vitesse ou de forte charge brute
> poids avant que l'avion ne décroche. Si le pilote automatique
> reste engagé lors d'un décrochage, le pilote automatique
> fournit des commandes pro-spin.

### Levier de dégagement rapide d'urgence

Un levier de dégagement rapide d'urgence à ressort se trouve sur chaque
manette de commande. Ce levier fonctionne de la même manière à partir de
les cockpits avant et arrière.

En appuyant sur le levier
fait revenir le AFCS et le commutateur de maintien d'altitude à
DÉSACTIVÉ. Le mode d'augmentation de la stabilité, ARI et
antidérapants, sont désengagés tant que le levier est maintenu
déprimé. Lorsque le levier est relâché, la stabilité
l'augmentation, l'antipatinage et l'ARI sont à nouveau opérationnels,
mais le AFCS n'est plus engagé.

Pour définitivement
désengager le mode d'augmentation de la stabilité, le tangage, le roulis,
et les interrupteurs de lacet STAB AUG doivent être désactivés. À
débrayer définitivement l'ARI et l'antidérapage, le lacet
L'interrupteur STAB AUG doit être éteint et le disjoncteur ARI,
sur le sous-panneau gauche du cockpit avant, doit être tiré.

### Témoin de désengagement du pilote automatique

Un voyant AUTOPILOT DISENGAGE est allumé sur le
panneau télélumineux. Après l'engagement initial du AFCS
mode, le voyant AUTOPILOT DISENGAGE et
le voyant MASTER CAUTION s'allume lorsque le AFCS
est désengagé.

Les deux feux s'éteignent en appuyant sur l'interrupteur de réinitialisation du
Master Caution. Les lumières restent
éteintes jusqu'à ce que le AFCS soit à nouveau engagé et
désengagé.

### Témoin lumineux d'arrêt d'augmentation du pas

Le voyant PITCH AUG OFF du panneau télélumineux s'allume avec le voyant MASTER CAUTION
lorsque le commutateur Pitch STAB AUG n'est pas engagé
et que l'avion est sous tension.

Appuyer sur le bouton de réinitialisation du Master Caution éteint le voyant
MASTER CAUTION. Cependant, le voyant PITCH AUG OFF
reste allumé jusqu'à ce que le commutateur Pitch STAB AUG soit engagé.

### Trim automatique du pas

Une fonction de trim automatique est incluse dans le AFCS
qui tente de maintenir l'avion longitudinalement
ajusté aux conditions de vol rencontrées en
Mode AFCS.

Ainsi, une condition hors garniture (qui
ne pas être détecté en mode pilote automatique) est empêché,
assurer contre un transitoire de pas excessif lorsque
débrayer le pilote automatique.

Le trim automatique
fonctionne à environ 40 % de la vitesse normale
système de trim, ce qui entraîne un léger retard après le changement
conditions de vol avant que l'avion de base ne soit correctement
taillé. Pendant les manœuvres de direction du manche à balai, le
le trim automatique est inopérant. L’opération de trim automatique peut être
observé sur l'indicateur de trim de tangage après un changement de vol
conditions en mode AFCS.

### Voyant de compensation de pas du pilote automatique

Le voyant AUTOPILOT PITCH TRIM sur le
Le panneau télélumineux s'allume pendant AFCS
fonctionnement si le suivi automatique du trim de tangage est
inopérant ou suffisamment en retard sur l'avion
manœuvre pour provoquer une condition de hors-trimité dans le
avion de base.

### Fonctionnement normal

1. Pour activer le mode d'augmentation de la stabilité, placez les commandes de tangage, de roulis
   et de lacet
  STAB AUG passe à ENGAGE.
2. Trim de l'avion en mode d'augmentation de la stabilité avant d'engager le mode AFCS.
3. Pour activer le mode AFCS, établissez une assiette de l'avion dans les limites AFCS. Lieu
  le commutateur AFCS sur ENGAGE.
4. Lorsque le mode de maintien d'altitude est souhaité, placez le commutateur Altitude Hold sur
   ENGAGE.

> 🔴 AVERTISSEMENT : N'essayez pas de modifier l'assiette en tangage du
> avion depuis le cockpit arrière en mode AFCS.
> Puisqu'il n'y a pas de capteur de force dans le cockpit arrière
> manette de commande, l'application d'une force entraînera une compensation de tangage
> monter et descendre en fonction de la pression
> appliqué. Si le pilote tente de prendre les commandes à
> à ce stade, des transitoires violents peuvent être
> rencontrés.

> 🔴 ATTENTION : Lors de la sélection du mode AFCS, avoir la main sur
> manche de commande pour contrecarrer tout contrôle brusque
> mouvements en cas de dysfonctionnement AFCS.

> 💡 Le AFCS est désengagé lorsque le message d'urgence
> Le levier de dégagement rapide sur le manche de commande est
> déprimé. L'augmentation de la stabilité et l'ARI
> sont débrayés tant que le levier est maintenu
> enfoncé mais revient en fonctionnement lorsque le levier
> est libéré.

### Précautions opérationnelles

#### Inversion du rouleau

Il est possible qu'une condition appelée inversion du roulis se produise lorsque
faire fonctionner le système de commandes de vol automatiques en mode AFCS. Cet état
se produit rarement et n’est apparent que lors de tentatives de petits changements de banque
angle. L'inversion du roulis est associée à une petite condition de hors-trimité dans le
canal latéral, et se manifeste par un lent roulis de l'avion dans le
direction opposée à la force du bâton. Si, par exemple, l'avion est hors de
trim latéralement vers la gauche lorsque le mode AFCS est engagé, une inversion de roulis peut se
produire
lorsque les forces du joystick droit sont appliquées. Une situation d'inversion du rouleau peut être
causée par
actionner le bouton de trim latéral manuel en mode AFCS, suivi de
de petites forces de bâton sont appliquées à l'opposé de la direction de la garniture. Il y a
une possibilité d'inversion du roulis même si l'avion a été compensé
avant d'engager le mode AFCS et que le bouton de trim manuel n'a pas été touché.
Cette condition est causée par des changements de compensation de l'avion accompagnant un changement
de vol.
conditions. Compte tenu de ce qui précède, les instructions suivantes doivent être respectées :

1. Trim de l'avion en mode d'augmentation de la stabilité avant d'engager le mode AFCS.
2. N'utilisez pas le trim latéral manuel lorsque le mode AFCS est engagé. Si rouler
  une inversion se produit en raison d'un changement dans les conditions de vol ; débrayer le
  rouleau,
  recoupez, puis réengagez.

#### Oscillations de hauteur

Lors de l'utilisation du mode de maintien d'altitude, l'avion peut subir des oscillations de tangage
dans les régions transsoniques en raison des fluctuations de la vitesse de l'ordinateur de données
aérodynamiques
système. La nature de ces oscillations varie du pompage du bâton au pas divergent
oscillations. Il est recommandé que si des oscillations de pas se produisent à des vitesses
transsoniques,
les mesures correctives suivantes doivent être tentées :

1. Interrupteur AFCS – DÉSENGAGEMENT
2. Pressostat du compensateur de pression statique – OFF
3. Commutateur AFCS – ENGAGER
4. Activer le mode de maintien d'altitude

Si les oscillations persistent après l'action ci-dessus, ou si elles se produisent à des vitesses
supersoniques :

1. Désactivez le mode de maintien d’altitude.

> 🔴 AVERTISSEMENT : des oscillations de hauteur divergentes ne doivent pas se développer.
> Si une activité de pitch divergente est constatée, des mesures correctives doivent être prises
> immédiatement.

## Système de volets à lattes

![ext_slats_and_flaps](../../img/ext_slats_and_flaps.jpg)

Le système Slats Flap est sélectionné manuellement pour le décollage et l'atterrissage, puis
automatiquement contrôlé par rapport à l'AoA pour de meilleures performances de manipulation dans
tous les domaines
d'autres régimes de vol. Le contrôle est terminé
un [interrupteur à trois positions](../../cockpit/pilot/left_console/wall.md#slatsflaps-control-panel)
trouvé à l'extérieur de la poignée de la [manette des gaz](../../cockpit/pilot/left_console/front_section.md#throttles)
gauche dans le cockpit avant et entraînée par le système hydraulique de l'avion.
Les [trois positions du commutateur](../../cockpit/pilot/left_console/wall.md#slatsflaps-control-panel)
sont Norm, Out, Out et Down, et la commande résultante peut être modérée selon que le
le train d'atterrissage est en cours de déploiement.

![LattesRelative](../../img/slatsrelative.jpg)

La norme est la position standard en vol, verrouillant les volets et automatiquement
programmation du déploiement de Slat en fonction de l'AoA.

Out déploie les lattes dans leur position entièrement déployée. Le train d'atterrissage devrait-il
être déployé, les lattes et les volets se déploieront.

Out and Down déploie entièrement les lattes et les rabats. Le train d'atterrissage devrait-il
ne soit pas sorti, le voyant Wheels s'allumera et clignotera sur le
[panneau télélight](../../cockpit/pilot/right_sub_panel.md#telelight-annunciator-panel).

Les deux cockpits ont
un [indicateur de rabat de lattes](../../cockpit/pilot/left_sub_panel.md#slatsflaps-indicators),
qui indique In et Out, avec un
lecture de poteau de barbier lorsque les surfaces sont en transition.

![SltFlpInd](../../img/pilot_slats_flaps_indicator.jpg)

En position Norm, le déploiement des lattes de manœuvre est une fonction de l'AoA ; au-dessus de
11,5 unités, ils s'étendront, puis se rétracteront lorsque l'avion sera réduit en dessous
10,5 unités. Le fonctionnement des lattes de manœuvre comprend un retour de flamme induit par la
vitesse ; lattes
se rétractera en raison d'une pression atmosphérique comprise entre 568 et 602 nœuds.

![Remplacement des lattes](../../img/pilot_slats_override_switch.jpg)

À l'arrière du panneau de commande de carburant dans le cockpit avant se trouve l'interrupteur de
neutralisation des lamelles. Gardé,
cet interrupteur a deux positions : NORM et IN. Par défaut sur NORM sous la garde, passage à IN
force la rétraction des lattes, quel que soit l'AoA actuel de l'avion ou l'état du Slats Flap
le [panneau télélight](../../cockpit/pilot/right_sub_panel.md#telelight-annunciator-panel) et
allumera le [Master Caution](../../cockpit/pilot/right_main_panel.md#master-caution-light).
allumez le [Master Attention](../../cockpit/pilot/right_main_panel.md#master-caution-light).

Le système Slats Flaps dispose également d'un système d'urgence ; les poignées se trouvent sur le
[Lattes Panneau de commande des
volets](../../cockpit/pilot/left_console/wall.md#slatsflaps-control-panel) in
le cockpit avant, et à côté du cockpit arrière
[manette des gaz](../../cockpit/wso/left_console/center_section.md#throttles) paire. Le système
d'urgence
utilise la pression pneumatique et ne
nécessitent une alimentation électrique pour forcer le déploiement. Le système d'urgence ne peut
fonctionne une fois et peut être actionné à n’importe quelle vitesse ; cependant, au-dessus de 230
nœuds,
les volets se rétracteront en fonction de la pression de l'air et de la rétraction normale des
lamelles
les vitesses s’appliquent également.

## Freins rapides

![ext_speed_brakes_out](../../img/ext_f4_speed_brakes.jpg)

Sous l'avion et à proximité des niches arrière [AIM-7 Sparrow](../../stores/air_to_air/aim_7.md)
sont les [vitesse
freins](../..), installés sur les ailes. Les aérofreins sont entraînés par le moteur de l'avion.
système hydraulique et actionné par
un [interrupteur à trois positions](../../cockpit/pilot/left_console/front_section.md#throttles)
trouvé sur la manette des gaz intérieure dans les deux cockpits.
L’un ou l’autre interrupteur actionnera les freins. Les postes
sont Sortie, Arrêt et Entrée ; la position Out est momentanée et revient à Stop lorsqu'elle est
relâchée.

![pilot_speed_brake](../../img/pilot_speed_brake.jpg)

L'actionnement des freins allume le voyant indicateur de freinage rapide situé sur le
[Panneau télélumineux](../../cockpit/pilot/right_sub_panel.md#telelight-annunciator-panel). Frein
le déploiement et l’éclairage de l’indicateur ne
déclencher le [Master Caution](../../cockpit/pilot/right_main_panel.md#master-caution-light).

![SpeedBrakeLight](../../img/pilot_speedbrake_out.jpg)

## Système d'angle d'attaque

![ext_aoa_diagram](../../img/ext_aoa_f4.jpg)

Pour surveiller et contrôler avec précision les performances de vol des avions, l'angle de
Le système d'attaque (AoA) fournit une confirmation visuelle et audio du courant
paramètres. Le système comprend les indicateurs d'angle d'attaque trouvés dans
les deux cockpits, les indexeurs d'angle d'attaque éclairés, ainsi que l'AoA
Système de tonalité auditive.

L'angle d'attaque est généralement mesuré en degrés (°). Il représente l'écart par rapport à
alignement de la ligne de corde de l'avion avec l'air venant en sens inverse ou le vent relatif.

### Indicateurs

![AoAInd](../../img/pilot_angle_of_attack_indicator.jpg)

Les cadrans de l'indicateur d'angle d'attaque enregistrent les valeurs AoA de 0 à 30 unités, avec
indications pour la croisière à l'altitude optimale relative au poids (7,9 unités), l'approche
(19,2 unités) et un stand (30 unités).

> 💡 Les indexeurs AoA ne sont allumés que lorsque le train droit est sorti.

Les unités AoA ne se traduisent pas directement en degrés, une unité d'AoA est
la même chose qu'environ 0,95 degrés et l'AoA mesurée est également décalée
d'environ 4 degrés. De cette façon, l'indicateur affiche une image plus naturelle et plus utile.
valeur pour l'équipage.

> 💡 L'extension du train d'atterrissage, et donc de la porte du train avant, modifie le flux d'air
> autour de la sonde, ce qui la fait indiquer des angles plus élevés de 1 unité. Les vitesses
> d'approche en tiennent compte. Par conséquent, effectuer
> une approche avec le train rentré fera apparaître les indicateurs
> environ 1 unité en dessous, et l'avion aura une vitesse d'environ 5 nœuds pendant une
> approche en vitesse.

### Indexeurs

![AoA](../../img/pilot_overhead_aoa_indexer.jpg)

Les indexeurs AoA, trouvés sur le cadre du pare-brise du cockpit avant, et au-dessus
le tableau de bord à l'arrière, affiche un code couleur et une symbologie directionnelle
pour la valeur d'approche en vitesse de 19,2 unités une fois les trains d'atterrissage
abaissé.

## Système de tonalité auditive

![manual_aural_tone_chart_slats_in](../../img/aoa_aural_tone_chart_slats_in_or_gear_down.jpg)
![manual_aural_tone_chart_slats_out](../../img/aoa_aural_tone_chart_slats_out_and_landing_gear_up.jpg)

Le système de tonalité sonore fournit un retour audible en vol de manœuvre et pendant
configuration d'atterrissage. Commençant au-dessus de 15 unités AoA avec vitesse sortie, et 21
unités
AoA avec l'équipement relevé et les lattes en place, une impulsion sera entendue par les deux
membres de l'équipage.

La fréquence du pouls peut varier de 1,5 à 20 impulsions par seconde, avec une augmentation
fréquence basée sur des valeurs AoA plus élevées.

Le volume de cette tonalité peut être réduit en dessous de 20,3 unités AoA en vitesse réduite/25
unités en vitesse
avec des commandes dans chaque cockpit ; le dépassement de ces valeurs entraînera le système
pour outrepasser les limites de volume et délivrer les impulsions d'avertissement au minimum
volume pour garantir qu’ils sont audibles quel que soit le réglage du volume.

> 💡 Les boutons respectifs sont étiquetés STALL WARNING et se trouvent sur la droite
> côté dans chaque cockpit. Ils ne doivent pas être confondus avec l'AURAL TONE CONTROL
> boutons, qui contrôlent les tonalités liées aux armes.

En raison de la visibilité vers l'avant limitée, les tonalités sont d'une aide cruciale lors de
l'atterrissage.
Si une tonalité grave émise par impulsion se fait entendre, l'avion est trop rapide.
Si une tonalité aiguë émise par impulsion se fait entendre, l'avion est trop lent.
Pour une configuration correcte de la vitesse, une tonalité constante à hauteur moyenne est émise.

## Vibreur d'avertissement de décrochage

La pédale avant gauche du cockpit comprend un vibrateur d'avertissement de décrochage, qui est
activé sur 22,3 unités d'angle d'attaque. Ce physique (et en DCS audible)
une indication est donnée pour sensibiliser le pilote à la possibilité d'un incident imminent.
décrochage et prévoir suffisamment de temps pour réduire l'AoA et éviter la perte de contrôle de
l'avion. Réduire l’AoA en dessous du seuil désactivera l’avertissement.

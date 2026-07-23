# AIM-7 Sparrow

![aim7](../../img/aim7.jpg)

L'AIM-7 est un missile radar semi-actif avec une portée de lancement maximale d'env.
26 milles marins.

Initialement désigné AAM-N-6 Sparrow III, l'AIM-7 Sparrow a vu sa première
entrée en service dans la marine américaine en 1958. Contrairement à l'AIM-7A à poutre
(AAM-N-2 Sparrow I), qui obligeait l'avion de lancement à maintenir l'alignement
sur la cible pour le déploiement de l'arme, le radar semi-actif à tête chercheuse AIM-7C
pourrait effectivement engager une cible en manœuvre loin du point de visée, à condition que le
le radar de l'avion désigné pourrait maintenir un verrouillage pendant le tir du missile.
intercepter. L'AIM-7C a rapidement cédé la place au 7D, qui a enregistré de nombreuses victoires.
au-dessus du Vietnam, et le 7E, qui a réalisé la majorité des victimes de ce type en
Asie du Sud-Est. De plus, le F-4E était compatible avec l'AIM-7F et
l'AIM-7M.

L'utilisation de l'AIM-7 commence par le réglage des cartouches embarquées, effectué avec
le
[Commutateur RDR MSL](../../cockpit/pilot/weapon_management.md#radar-missile-power-switch)
, en le sélectionnant en position CW ON. Ce processus de réglage prend environ
une minute, et peut être initié une fois que l'alimentation a été appliquée pendant au moins une
minute au radar (n'importe quelle position hors OFF) dans la plupart des environnements
d'exploitation
(température ambiante inférieure à 90 degrés F). Les missiles sont correctement réglés lorsque
le
[voyant d'état du missile](../../cockpit/pilot/weapon_management.md#missile-status-lights)
(RDR) est illuminé dans chaque station emportant un missile Sparrow pendant au moins un
minute. Après un réglage réussi, le
[Commutateur RDR MSL](../../cockpit/pilot/weapon_management.md#radar-missile-power-switch)
peut être remis en position STBY (veille). Les voyants d'état s'éteindront
une fois revenu à STBY. Une fois dans la zone de combat, le
[Commutateur RDR MSL](../../cockpit/pilot/weapon_management.md#radar-missile-power-switch)
doit être remis en position CW ON pour maintenir un réglage correct du missile
état pendant les fiançailles.

<iframe width="560" height="315" src="https://www.youtube.com/embed/cdEnnWH3VTA?si=Swkt85oudtjBZDGE"
title="Configuration et emploi des armes air-air | DCS World F-4 Phantom" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Emploi

Pour employer un AIM-7, le
[viseur optique](../../cockpit/pilot/dscg_controls.md#sight-mode-knob) devrait être
placé en position A/A, ce qui stabilise le réticule au niveau du radar
Ligne de visée dans la fenêtre. Les volets roulants ont pour fonction de fournir au pilote
guidage d'attitude en roulis relatif dans des conditions aux instruments (météo ou nuit),
et le côté droit du cercle de 50 mil de diamètre (extérieur) fonctionne comme une plage
barre lorsqu'un verrouillage radar est réalisé contre une cible, affichant des portées jusqu'à
20 000' (en haut) à 3 000' (en bas), avec 12 000' signifié à 3 heures
position. Il est également possible d'utiliser un AIM-7 en utilisant le mode ACM en appuyant sur
appuyez d'abord sur le bouton Cage, puis appuyez sur le bouton CAA pour effectuer un verrouillage.

![range_bar_radar_guided_missile](../../img/radar_missile_lock.jpg)

Lorsque le verrouillage radar contre une cible est obtenu avec AIM-7 sélectionné, une paire de
des stroboscopes entourent la cible verrouillée en azimut. Identifié comme Rmax et Rmax 2,
ils représentent des plages efficaces contre une cible de 1 G (Rmax) et un taux élevé
cible de manœuvre basée sur l'altitude (Rmax 2, représentant 8G jusqu'à 20k, 6G jusqu'à
35k et 4G au-dessus de 35 000'). Lorsqu'un missile est lancé, le repère Rmax 2 tombe
vers le bas de l'écran et commence à remonter vers le verrouillage de la
cible ; cela fonctionne comme une minuterie de déploiement du missile. Lorsque la minuterie
atteint la cible verrouillée, on peut supposer que le missile est arrivé. L'affichage ne
fournit pas le Rmin, mais affiche à la place un avertissement break X superposé à
l'image radar si le Rmin est atteint pour un tir de Sparrow.

![radar_screen_radar_missile_lock](../../img/radar_screen_radar_missile_lock.jpg)

Avant l'engagement, il faut déterminer si le
[verrouillages](../../cockpit/pilot/weapon_management.md#interlock-switch) du
missile seront conservés en position IN ou positionnés en position OUT. Les verrouillages empêchent
un tir de l'AIM-7 lorsque les paramètres de tir efficaces ne sont pas réunis, à savoir le missile en
portée (allumant le
[voyant IN RANGE](../../cockpit/pilot/dscg_controls.md#in-range-light)), le
point de visée cible à l'intérieur du cercle ASE (erreur de pilotage admissible) sur l'affichage
radar, et le mode d'affichage radar hors VI (mode Vis-Ident).

Avec les [verrouillages](../../cockpit/pilot/weapon_management.md#interlock-switch)
en position IN, si l'une des trois restrictions mentionnées ci-dessus est respectée - cible hors de
portée, point de visée en dehors de l'ASE, ou radar laissé en VI, un actionnement de la gâchette
ne provoquera pas le largage d'un missile. Avec les
[verrouillages](../../cockpit/pilot/weapon_management.md#interlock-switch) en position OUT,
l'AIM-7 sera libéré quel que soit l'état des trois verrouillages.

Lorsque les paramètres sont respectés, les
[lampes SHOOT](../../cockpit/pilot/overhead_indicators.md#shoot-lights)
s'allument. Présentes dans les deux cockpits, ces feux renforcent l'état du bon
conditions de lancement de l'AIM-7. Dans le cas où une cible entre dans un faisceau principal
situation de désordre (angle d'aspect compris entre 81 et 99 degrés et inférieur à 5
degrés au-dessus de l'horizon), les lumières s'éteindront, même si le verrouillage
les exigences sont remplies. Une manœuvre doit être utilisée pour amener la cible à l'extérieur
cette région avant le lancement.

Au point d'engagement, les missiles AIM-7 sont sélectionnés à l'aide du Pinky Switch
sur le bras d'accélérateur extérieur (gauche), en sélectionnant la position avant. Cela
allume le voyant RADAR du
[panneau d'affichage tête
haute](../../cockpit/pilot/weapon_management.md#head-up-display-indicators).

Avant d'utiliser l'AIM-7E Sparrow, un délai de quatre secondes doit être accordé si
le
[Interrupteur d'armement principal](../../cockpit/pilot/weapon_management.md#master-arm-switch)
est réglé sur la position ON avant le verrouillage du radar, ou un délai de deux secondes si
le
[Interrupteur d'armement principal](../../cockpit/pilot/weapon_management.md#master-arm-switch)
est réglé sur ON après le verrouillage du radar. Cela est dû à la période de stabilisation du
filtre de vitesse (speed-gate) du missile. Avec l'AIM-7F, ce délai est réduit à deux secondes avec
[Interrupteur d'armement principal](../../cockpit/pilot/weapon_management.md#master-arm-switch)
Allumé avant le verrouillage ou immédiatement après la sélection
[Interrupteur d'armement principal](../../cockpit/pilot/weapon_management.md#master-arm-switch)
sur On si le verrouillage a été réalisé en premier. Si ces délais ne sont pas respectés, le
le missile peut ne pas réussir à suivre en raison d'une mauvaise injection Doppler de la cible.

Avec la cible en paramètres ou les
[verrouillages](../../cockpit/pilot/weapon_management.md#interlock-switch) en position OUT,
appuyer sur la gâchette déclenche un AIM-7. Un deuxième AIM-7 peut être tiré immédiatement
sur la même cible, si vous le souhaitez, en relâchant, puis en appuyant sur la gâchette un
deuxième fois, en le maintenant lors du deuxième actionnement.

## Séquence de lancement

![ext_launch_sequence_radar](../../img/ext_launch_seq_radar.jpg)

La séquence de lancement du missile AIM-7 est (en orientation avion)

1. Station avant gauche
2. Station avant droite
3. Station arrière gauche
4. Station arrière droite

Dans le cas d'un magasin ou d'un réservoir central empêchant le largage du missile vers l'avant,
le
[Lampe CL TK](../../cockpit/pilot/weapon_management.md#centerline-tank-aboard-light)
s'allumera. Les missiles arrière peuvent toujours être tirés, et les missiles avant peuvent
être tiré si le réservoir central est largué ou si le MER est largué. La lampe aussi
s'allume en cas de BRU-5/A en position médiane ; cependant, un
le missile peut être lancé dans ces conditions. L'Aero-27 interdit toute libération,
même si le tour a été abandonné.

## Variantes

Les variantes suivantes de la famille AIM-7 sont disponibles pour cette variante du
Phantom :

| Type | Description |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7E | La variante E était une première version du missile Sparrow, entré en service dans les années 1960, qui utilise la navigation proportionnelle et le guidage radar semi-actif.                                                                                                                                                                                                                                                                                                                                     |
| 7E2 | Des modifications ont été apportées pour améliorer les performances dans les situations de combat aérien à courte portée, au détriment de la rétention d'énergie dans les engagements à plus longue distance. Le temps de mise à feu est également réduit, permettant une mise à feu appropriée lors d'engagements rapprochés.                                                                                                                                                                                                                                                                          |
| 7F | Le F Sparrow a été amélioré pour être à semi-conducteurs, disposer d'un moteur à deux étages plus performant (boost et sustainer) et d'une électronique améliorée, y compris la capacité de faire avancer les cibles à travers le fouillis du lobe principal et les lignes d'altitude. Ces changements permettent également à l'autodirecteur de détecter des cibles à une plus grande distance et avec une résistance de contre-mesure accrue et de suivre en utilisant à la fois des signaux de guidage à ondes continues et à impulsion Doppler, contrairement aux E, E2 et E3, qui ne peuvent guider que sur ondes continues. |
| 7M | Le M a été le premier Sparrow mono-impulsion inverse, offrant une précision de suivi accrue. Il a également amélioré les performances du moteur et de l'électronique, notamment un meilleur rejet de l'encombrement et des contre-mesures. Le M, comme tous les Sparrows, peut également guider en utilisant des ondes continues, avec une précision de suivi dégradée.                                                                                                                                                                                                 |

Vous trouverez ci-dessous un résumé comparatif très basique des performances de chaque Sparrow dans
certains
domaines généraux, alors que 🟢 signifie _bon_, 🟨 _passable_ et 🔺 _médiocre_.

| Type | Chercheur | Portée | Combat aérien | Résistance aux contre-mesures / Rejet de l'encombrement |
| ------- | ------ | ----- | -------- | ----------------------------------------- |
| AIM-7E | 🔺 | 🟨 | 🔺 | 🔺 |
| AIM-7E2 | 🔺 | 🔺 | 🟢 | 🔺 |
| AIM-7F | 🟨 | 🟢 | 🟢 | 🟨 |
| AIM-7M | 🟢 | 🟢 | 🟢 | 🟢 |

> 💡 Techniquement, le E2 a la même portée maximale que le E. Cependant, en raison de
> son comportement de manœuvre, la portée diminue pour tout sauf une ligne droite
> tir.

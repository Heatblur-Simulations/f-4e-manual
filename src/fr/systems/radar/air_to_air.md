# Fonctionnement du radar air-air

Le fonctionnement du radar air-air comprend les modes RDR-B et MAP-B, ainsi que
le mode BST. RDR-B et MAP-B peuvent être utilisés avec la recherche automatique et le mode BST peut
être utilisé comme mode à courte portée pour repérer une cible sur le point de visée.

<iframe width="560" height="315" src="https://www.youtube.com/embed/fQVMWn5AfIE?si=oPSyCqubACwH4GYb"
title="F-4E : Arrêtez de vous battre en air-air" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Recherche automatique

Lors de la recherche automatique, l'antenne effectue un mouvement de va-et-vient dans le plan radar.
Les limites de cette recherche sont déterminées par
[Bouton d'affichage](interface.md#display-knob). La recherche a normalement une largeur de
120 degrés
avec le bouton d'affichage en positions WIDE et limité à 45 degrés dans le NAR
position. Seules les positions du bouton d'affichage comportant un B sont utilisables pour les
opérations air-air.

Le [bouton de mode radar](interface.md#radar-modes-mode) est utilisé pour sélectionner
recherche automatique en choisissant RDR ou MAP. En RDR, le nombre de barres peut être
sélectionné par le [commutateur de balayage](interface.md#scan-switch). Dans MAP, une seule barre
est
utilisé quel que soit le commutateur. La nutation Feedhorn est utilisée avec RDR mais pas MAP ;
conduisant à une largeur de faisceau estimée d'environ 6,7 degrés en RDR et 3,7
degrés en MAP.

En sélectionnant BST ou AIR-GND sur le bouton de mode radar, le balayage de l'antenne est orienté
le long de la ligne de visée radar.

L'image ci-dessous montre la symbologie habituelle présente dans les modes de recherche
automatique et de visée.

![écran_radar](../../img/radar_search.jpg)

| Article | Nom | Descriptif |
|------|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| a | Affichage de la portée | Affiche la plage actuellement sélectionnée ou forcée |
| b | Curseur radar | Le curseur radar est utilisé pour sélectionner des cibles et affiche la plage et l'azimut actuellement sélectionnés. Il est déplacé par la commande manuelle de l'antenne.                                                                                                                                                                                                                                                           |
| c | Élévation de l'antenne | Affiche l'élévation de l'antenne (en degrés) par rapport à l'avion radar ou à l'avion si le commutateur [Stab](interface.md#stab-switch) est en position OUT. Celui-ci peut être déplacé avec la molette d’élévation de la commande manuelle de l’antenne.                                                                                                                                                                                           |
| d | Grille radar | Les lignes verticales gauche et droite indiquent 30 degrés à gauche et 30 degrés à droite. Cette mesure est relative à l'avion radar avec le [Stab Switch](interface.md#stab-switch) en NOR ou DRIFT OUT et par rapport à l'avion avec le [Stab Switch](interface.md#stab-switch) en OUT. Chaque ligne horizontale marque une échelle où les écarts sont `1/5` du réglage de plage actuel de l'écran. |
| e | Ligne d'horizon | Affiche la ligne d'horizon, présente uniquement avec [Stab Switch](interface.md#stab-switch) en NOR ou DRIFT OUT |

<iframe width="560" height="315" src="https://www.youtube.com/embed/-_oGXnEfyOs?si=5_YbDn9i-zt-aaIX"
title="DCS F-4E APQ-120 - Section efficace du radar et plage de détection" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Acquisition

L'acquisition peut être utilisée avec n'importe quel mode radar utilisant B-Scope et est utilisée
pour
atteindre une condition de suivi.

Avec le [bouton de mode radar](interface.md#radar-modes-mode) en RDR ou MAP, la moitié
L'action peut être maintenue sur la gâchette de la commande manuelle de l'antenne pour commencer
l'acquisition. Dans
RDR ou MAP l'azimut de l'antenne suivra le symbole d'acquisition. Dans tous les modes
là où l'acquisition peut être utilisée, la plage du symbole d'acquisition définira le
plage souhaitée pour le verrouillage.

![Écran radar dans ACQ](../../img/radar_acq.jpg)

| Article | Nom | Descriptif |
|------|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| a | Balayage B | Le B-Sweep affiche les échos radar actuels le long de l'azimut de l'antenne, ceux-ci sont affichés à la fois en acquisition et en suivi.                                                                         |
| b | Symbole d'acquisition | Comme le curseur radar, le symbole d'acquisition indique l'azimut et la portée actuellement sélectionnés. Il est déplacé avec la commande manuelle de l'antenne. Il est également affiché dans la trajectoire pour indiquer la portée et l'azimut de la cible. |
| c | Écho cible | Retour de cible affiché le long de l'azimut |

## Piste

Le suivi automatique peut être commandé en entrant d'abord l'acquisition puis, une fois
la cible a été encadrée par le symbole d'acquisition, Full Action peut être
enfoncé pour accéder à la piste automatique.

Le type de piste saisi dépend du mode sélectionné. Il existe deux types de
circuits de suivi disponibles, suivi d'angle et suivi de distance. Ceux-ci seront tous les deux
être décrit ci-dessous.

![Écran radar dans la PISTE](../../img/radar_track.jpg)

| Article | Nom | Descriptif |
|---------|--------------------------|-----------------------------------------------------------------------------------------------------------------------|
| a | Afficher la lecture | L'affichage dépend de la position du [commutateur d'aspect](interface.md#aspect) |
| b | Erreur de direction autorisée | Décrit l'enveloppe de lancement hors angle maximale, voir [Erreur de direction autorisée](#allowable-steering-error-ase-circle) |
| c et e | Gamme Stroboscopes | Indique l'enveloppe de lancement, voir [Range Strobes](air_to_air.md#range-strobes) Description |
| d | Viser le point | Fournit une direction pilote, voir [Aim Dot](#aim-dot) |

Dans le coin supérieur droit de l'écran radar se trouve un symbole
[T gravé](interface.md#track-light-t) qui s'allume si une condition de suivi de portée
est présente. Ceci ne se trouve que sur l’écran WSO.

### Piste d'angle

Le circuit de suivi d'angle dirige l'antenne pour maintenir la cible centrée. Il
le fait en utilisant la nutation feedhorn (balayage conique). L'antenne dirige
vers la direction de l’amplitude la plus élevée dans le modèle de balayage de nutation. En tant que
résultat, le suivi d'angle ne peut pas être obtenu sans nutation (MAP-B commence
nutation lors de l’utilisation de l’acquisition).

Le suivi d'angle a deux paramètres définis par le
[Commutateur de manœuvre](interface.md#maneuver-switch), HI G et LOW G. Ces ensembles
limites de l'accélération dans les circuits de suivi d'angle.

Le pilotage d’antenne a plusieurs fonctions importantes :

- Suivi de l'emplacement de la cible en élévation et en azimut
- Fournir des angles de visée de tête au Sparrow pour un verrouillage du chercheur.
- Illuminer la cible avec une énergie radiofréquence à ondes continues pour
  le guidage du Sparrow.

### Piste de portée

Le radar utilise une porte de portée pour sélectionner une cible à portée. Cela n'utilise que les
échos radar présents dans la porte de portée pour ses circuits. Cela aide à éliminer l'encombrement et
d'autres cibles, et permet aux circuits de suivi d'angle de suivre avec précision la cible
d'intérêt sans signaux erronés.

En suivi de portée, la porte de portée utilise les échos radar pour corriger automatiquement
toute erreur entre la porte de portée et l'écho cible. Cela entraîne le déplacement de la porte
de portée ; la vitesse à laquelle la porte se déplace est la vitesse de fermeture, affichée
sur l'écran. Ceci est également utilisé pour fournir au Sparrow une vitesse de fermeture
pour régler son speed-gate pour le suivi de la cible.

Le suivi de portée peut fonctionner en mode mémoire. En mode mémoire, la porte de portée
continuera de descendre à la dernière vitesse de fermeture calculée. Quand cela se produit,
les voyants SKIN TRK et T du DSCG s'éteindront et les chiffres du taux de portée
commenceront à clignoter à 4 Hz. Si le mode mémoire a été entré parce que la cible a été perdue,
le système abandonnera le verrou si la cible ne réapparaît pas dans les 5 secondes.

Le mode mémoire sera activé sous plusieurs conditions :

- La recherche manuelle est sélectionnée ([Track Switch](interface.md#track-switch))
- La cible est perdue
- Une condition de brouillage est détectée

### Home On Jam

![Cible de brouillage](../../img/radar_jamming_target.jpg)

L'amplificateur de polarisation arrière du radar produit un signal de bruit basé sur la
force globale des échos. Une fois que ce signal de bruit dépasse un certain seuil,
le système le considérera comme une condition de brouillage et entrera en Home On Jam. Le
circuit de suivi de portée passe en mode mémoire, le circuit de suivi d'angle continue de
fonctionner et de suivre la cible de brouillage en élévation et en azimut.

![Home On Jam](../../img/radar_home_on_jam.jpg)

La condition Home On Jam est également indiquée par le H gravé sur le WSO DSCG et
le dernier chiffre zéro de la vitesse de fermeture est remplacé par un H accompagné du
taux de fermeture clignotant.

<iframe width="560" height="315" src="https://www.youtube.com/embed/vWZdx80szrI?si=2NpjXEZeiwxmf-Hr"
title="DCS F-4E APQ-120 - Effets de brouillage" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Mettre en lumière

Dans les gammes de 100 et 200 milles, une procédure connue sous le nom de Spotlight peut être
utilisée pour
maintenir manuellement la surveillance radar d’une cible.

La mise en lumière consiste à placer le curseur d'acquisition sur le retour souhaité,
puis à sélectionner et maintenir la position de déclenchement en action complète du contrôleur
manuel d'antenne. Ce faisant, l'antenne nute et revient à la sélection choisie du commutateur
Polar afin d'augmenter la définition de la cible, mais sans tenter le verrouillage automatique.

La cible peut être maintenue dans un état bien observable en effectuant une action complète
et en suivant le retour de la cible avec le contrôleur manuel d'antenne jusqu'à ce qu'il
atteint une plage à laquelle le verrouillage peut être obtenu (avec le changement applicable de
réglage de la plage ; le radar ne peut pas tenter de verrouiller à une distance incompatible
paramètre).

## Calculs d’interception

L'ordinateur d'interception LRU-1 peut calculer les enveloppes de tir pour le
[AIM-7 Sparrow](../../stores/air_to_air/aim_7.md) et
[AIM-9 Sidewinder](../../stores/air_to_air/aim_9.md) Missiles.

### Stroboscopes de portée

Le DSCG peut afficher deux stroboscopes de portée à tout moment représentant
l'enveloppe du missile. Il existe trois types de stroboscope possibles.

| Indication de la portée | Descriptif |
|------------------|--------------------------------------------------------------------------------------------------|
| Rmax | Portée maximale du missile à condition que la cible continue de voler selon le cap et la trajectoire actuels. |
| Rmax2 | Portée maximale du missile si la cible effectue le virage à g élevé le plus court vers l'aspect de la queue.     |
| Rmin | Capacité de portée minimale du missile.                                                         |

| Missile sélectionné | Stroboscopes affichés |
|------------------|-------------------|
| Sparrow | Rmax et Rmax2 |
| Sidewinder | Rmax et Rmin |

![Cible en Rmax](../../img/radar_target_in_rmax.jpg)

Toutes les plages sont calculées pour le point où la gâchette est enfoncée et maintenue enfoncée
pour la libération, pas le point où le signal de libération réel est envoyé quelques secondes
plus tard. Cela signifie que si l'enveloppe du missile est atteinte sur l'écran, alors le
déclencheur peut être
pressé et
l'enveloppe sera valable pour le lancement de missiles.

### Cercle d'erreur de direction admissible (ASE)

L'erreur de direction admissible indique l'avance ou le retard maximum auquel
le missile peut être lancé et conservera toujours une forte probabilité d’être touché. Le
le diamètre du cercle augmente progressivement en taille une fois que Rmax est atteint et
progressivement
commence à diminuer en taille à mesure que la plage cible se rapproche de Rmin.

![Cercle ASE](../../img/radar_ase_circle.jpg)

Avec le Sparrow sélectionné, la taille maximale du cercle ASE est de 25 degrés pour un AIM-7E,
et 35 degrés pour un AIM-7F.

Avec le Sidewinder sélectionné, s'il est mis en cage, la taille du cercle ASE est fixée à 1,2
degrés. Lorsqu'il n'est pas en cage, l'ASE Circle change dynamiquement de taille comme décrit
ci-dessus, le diamètre maximum représentant 25 degrés.

### Point de visée

![Point de visée](../../img/radar_aim_dot.jpg)

Le point de visée fournit des commandes de direction au pilote. Il y en a trois différents
types :

1. Pilotage par collision, cela minimise le temps d'interception en plaçant le chasseur
  sur une trajectoire d'interception.
2. Pilotage de transition, cela commence à 2 nmi en dehors de Rmax et dirige l'avion
  vers le prochain type de direction.
3. Poursuite en tête, à l'intérieur de Rmax la poursuite en tête minimise les manœuvres
  post-lancement du missile.

![manuel_radar_air_to_ground_mode](../../img/aim_dot_steering.jpg)

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZZJ8sprm-Ws?si=jSteM5NIHwmnIay8"
title="DCS F-4E Air-Air II : Interception de points de visée" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Voyants SHOOT et IN RANGE

Les voyants SHOOT s'allument à condition que les conditions suivantes soient remplies :

- Aim Dot fait partie du cercle ASE
- La cible est comprise entre Rmax et Rmin

Si des Sparrow sont sélectionnés, les voyants SHOOT sont également inhibés lorsque l'aspect
de la cible est de 90 ±9 degrés (gauche ou droite) et que la cible est à moins de 5 degrés
au-dessus de l'horizon. Cela évite de tirer un Sparrow dans le fouillis du lobe principal.

> 💡 Avec le bouton de luminosité des instruments de vol hors de sa position complètement CCW -
> comme pendant les vols de nuit, tous les voyants SHOOT resteront éteints.

### Voyant de maintien d'altitude

Le témoin de maintien d’altitude s’allume si les conditions suivantes sont remplies :

- La plage est supérieure à la plage de capture calculée.
- L'altitude est supérieure à 32 000 pieds.
- La cible se trouve à plus de 8 000 pieds au-dessus du chasseur.

Lorsque la lumière est allumée, l'erreur d'azimut dans le point de visée doit être
corrigée uniquement lorsque la lumière s'éteint. Le chasseur doit effectuer une ressource pour
centrer le point de visée.

### Break X

Dans tous les modes (sauf VI) lorsque la cible est inférieure à la portée calculée
Rmin, le symbole Break X s'affichera pour indiquer la condition de portée minimale.

Dans Visual Intercept (VI), le break X s'affiche lorsque la portée est inférieure à 1 000 pieds.

Lorsque le break X est affiché, le cercle ASE est également supprimé.

![écran_radar](../../img/manual_radar_break_x.jpg)

## Déclenchement des verrouillages

Il existe plusieurs verrouillages pour empêcher le tir de missiles dans des conditions
défavorables.

Pour le Sidewinder, le seul verrouillage empêchant le tir du missile concerne les volets en
position basse.

Pour le Sparrow il y a plusieurs conditions :

- Le point de visée doit être dans le cercle ASE
- Les voyants IN RANGE et SHOOT doivent être allumés
- Il ne doit y avoir aucune condition de rupture X
- Le mode sélectionné ne doit pas être Visual Intercept

> 💡 Notez que les lumières SHOOT restent éteintes avec la luminosité des instruments de vol
> Bouton hors de sa position complètement CCW. Les verrouillages de tir ne sont pas influencés
> par ceci.

Les verrouillages sont automatiquement annulés en cas de condition HOJ ou lorsque le
Sparrow doit être tiré en mode Visée. Les verrouillages peuvent être annulés
manuellement avec le commutateur de verrouillage.

## Visée et état de la cage

### Visée

Le mode Visée peut être activé soit en déplaçant le
[bouton de mode](interface.md#radar-modes-mode) sur BST, soit en appuyant sur le bouton CAGE
de la manette des gaz. Ce dernier active une condition de cage très similaire
à la Visée activée via BST, à l'exception que l'état de cage
limite la portée à 5 nmi et force le réglage de manœuvre en position HI.

En mode Visée, l'antenne est fixée le long de la ligne de visée du radar et
les retours radar sont affichés sur l'oscilloscope comme dans un mode d'acquisition. Acquisition
peut être commandé avec une demi-action comme dans la recherche automatique pour acquérir, puis
l'action complète peut être utilisée pour lancer la piste. Le suivi de la portée et de l'angle
commencera
comme d'habitude.

[Sparrow](../../stores/air_to_air/aim_7.md) peuvent être tirés sans suivre la
cible. Si tel est le cas, le pilote doit positionner la cible sur le viseur et
le WSO peut sélectionner un [réglage d'aspect](interface.md#aspect) approprié. Le
Sparrow peut maintenant être tiré.

> 💡 Les cibles doivent se trouver dans une zone de 5 degrés, sinon une tentative de verrouillage
> entraînera probablement un mauvais verrouillage.

<iframe width="560" height="315" src="https://www.youtube.com/embed/krnmdPE_xUc?si=vbXN8f1dDDsRO8K6"
title="DCS F-4E - Mode Boresight, AIM-7 et Speedgates" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### État de la cage

La condition en cage est un mode de combat rapproché auquel on peut accéder à tout moment
en appuyant sur le bouton CAGE de la manette des gaz du pilote. Ceci, par défaut, place le radar
dans la ligne de visée comme décrit ci-dessus.

![Mode cage](../../img/radar_cage_mode.jpg)

Lorsque la condition de cage est présente, les changements suivants se produisent :

- Le voyant air-air dans la fosse arrière s’allume.
- Le contrôle de la gâchette est transféré aux armes air-air (y compris lorsque ARM
  et TV sont sélectionnés)
- Le viseur optique passe en mode A/A.
- L'acquisition automatique par ordinateur devient disponible.

Si une condition de piste existe avant que le bouton CAGE soit enfoncé et que l'interrupteur
petit doigt de la manette des gaz est sur RADAR ou HEAT, le radar interrompt la poursuite et
revient au mode Visée. Si l'interrupteur petit doigt est sur GUNS, le verrouillage n'est pas rompu.

Le mode Cage peut être quitté depuis l’un ou l’autre cockpit. Le pilote peut placer le bouton
de sélection d'arme en position B ou hors de cette position. Si le pilote laisse le bouton de
sélection d'arme en B, cela n'empêche pas une entrée ultérieure en mode Cage. Le WSO peut quitter
le mode cage en appuyant sur le [bouton Air-To-Air](interface.md#air-to-air-button).

### Mode d'acquisition automatique par ordinateur (CAA)

Une fois en mode Cage, le radar peut être basculé en mode Acquisition Automatique par
Ordinateur à l'aide du bouton Nose Gear Steering présent sur le manche.

En CAA, le radar entre dans une configuration de balayage orientée verticalement à 78 degrés de
hauteur
de 15 degrés de largeur, le balayage a une largeur de 3 barres verticales. La capacité réelle de
verrouillage radar dans ce modèle de balayage va de +45 degrés au-dessus de la ligne d'horizon
à -9 degrés en dessous de la ligne d'horizon, en raison des limitations du logiciel APQ. Dans le
cas où le radar trouve une cible appropriée dans le volume de balayage, la cible
sera verrouillée. Si l'équipage de conduite découvre que la cible verrouillée n'est pas celle
prévue, le bouton de direction du train avant peut être enfoncé sur l'une ou l'autre des poignées
du manche pour ramener le radar au modèle de recherche.

En mode CAA, le modèle de recherche du radar peut être déplacé vers la gauche et la droite en
utilisant
le petit interrupteur sur l'accélérateur.

| Sélection Pinky | Centre de numérisation |
|-----------------|-----------------|
| Guns | Gauche (-15 degrés) |
| Heat | Centre (0 degrés) |
| Radar | Droite (+15 degrés) |

![manuel_caa](../../img/caa.jpg)

Pour quitter CAA, le pilote peut sélectionner la position B sur le bouton de sélection d'arme, ou le
WSO peut appuyer sur le bouton Air-To-Air. Si un verrouillage radar est en place au moment de la
sortie du mode, il sera conservé.

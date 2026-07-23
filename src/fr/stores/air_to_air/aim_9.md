# AIM-9 Sidewinder

![aim9](../../img/aim9.jpg)

Entré en service dans l'US Navy en 1956, et finalement adopté par
l'US Air Force en 1964, l'AIM-9 Sidewinder à courte portée et guidage infrarouge
est considéré par la plupart comme le tout premier missile guidé air-air
réellement efficace au monde. En commençant par l'AIM-9B et en maintenant la compatibilité avec
l'AIM-9M en service aux États-Unis, le Sidewinder a fourni au Phantom II un
système d'armes rapproché efficace contre des adversaires manœuvrant rapidement.

## Emploi

L'emploi de l'AIM-9 peut être effectué avec ou sans verrouillage radar et est
initié en sélectionnant Master Arm sur ON et en sélectionnant le Pinky Switch de
l'accélérateur à la position centrale pour Chaleur. Le témoin HEAT sur l'affichage tête haute
s'allumera et les missiles AIM-9 disponibles s'allumeront sur l'état du missile
Panneau. Le viseur optique doit être sélectionné sur A/A et le réticule sera
se stabiliser à la ligne de visée radar, qui est l'emplacement de visée pour le
Sidewinders sur les rails.

Si un verrouillage radar est obtenu, le viseur affichera la barre de portée sur le
côté droit comme décrit précédemment, avec 20 000' indiqué en haut, et
Portée de 3 000 pieds indiquée en bas. Avec un verrouillage radar activé, le radar
affichera une paire de stroboscopes signifiant Rmax et Rmin pour le Sidewinder contre
la cible dans les conditions de lancement actuelles.

![radar_screen_heat_missile_lock](../../img/radar_screen_heat_missile_lock.jpg)

> 💡 L'AIM-9 ne reçoit pas de transfert de guidage de l'APQ-120 comme sur
> les avions plus récents, pour diriger l'angle de visée de l'autodirecteur. Au lieu de cela, le cercle ASE
> présente le point de visée contre la cible pour l'amener au RBL.

Centrer le point de visée dans l'ASE aligne la cible sur le RBL, permettant ainsi
acquisition rapide par le chercheur de l'AIM-9 sélectionné. Une fois la tonalité du missile
change pour signifier le verrouillage, le pilote peut alors maintenir enfoncé le
[Bouton ARR](../../cockpit/pilot/stick_seat.md#air-refueling-release-button) sur
la poignée pour permettre l'auto-suivi Sidewinder (le chercheur libère la cage) ; cette fonction
permet au chercheur de maintenir l'acquisition de la cible (notée par le décalage
tonalité audio), tout en permettant la manœuvre de l'avion vers un meilleur angle d'aspect
ou une solution de portée avant le lancement si la situation le permet. La marge de
manœuvre disponible pour une variante Sidewinder donnée dépend du modèle, et
doit être prise en compte avant de faire la sélection.

<iframe width="560" height="315" src="https://www.youtube.com/embed/cdEnnWH3VTA?si=Swkt85oudtjBZDGE"
title="Configuration et emploi des armes air-air | DCS World F-4 Phantom" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Séquence de lancement

![ext_weapons_launch_sequence_ir](../../img/ext_launch_seq_heat.jpg)

Une fois la solution de tir souhaitée obtenue, l'AIM-9 est lancé à l'aide du
déclenchement.

Séquence de lancement de l'AIM-9 :

1. Hors-bord gauche
2. Hors-bord droit
3. Intérieur gauche
4. Intérieur droit

## Variantes

Les variantes suivantes de la famille AIM-9 sont disponibles pour cette variante du
Phantom :

| Variante | Descriptif |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| B | Première version opérationnelle de la famille Sidewinder, entrée en service dans les années 1950. Il utilisait un chercheur infrarouge pour l'acquisition et le suivi de la cible, ce qui en faisait un missile à recherche de chaleur.                      |
| J | Doté de caractéristiques de guidage et de performances améliorées. Il conservait le chercheur infrarouge mais avait une sensibilité améliorée et une meilleure résistance aux contre-mesures.                                           |
| JULI | Variante de l'AIM-9J développée par l'Allemagne. Il comportait des modifications pour répondre à des exigences opérationnelles spécifiques.                                                                                                     |
| L | Mise à niveau significative avec des capacités de référencement infrarouge améliorées, permettant une meilleure discrimination des cibles. Il a introduit le ciblage tous aspects, ce qui signifie qu'il pouvait engager des cibles sous n'importe quel angle, pas seulement par derrière. |
| M | Amélioration des capacités de guidage et de contre-mesures. Il avait une maniabilité améliorée et des algorithmes de suivi de cible améliorés, ce qui le rendait plus efficace dans les situations de combat.                                  |
| P | Développé pour l’exportation et utilisé par diverses nations. Il présentait des améliorations par rapport aux modèles précédents en termes de fiabilité et de performances de l'autodirecteur.                                                                       |
| P-3 | Améliore la version P en utilisant un moteur à fumée réduite et en améliorant le système de guidage. Base du missile suédois RB-24J.                                                                                         |
| P-5 | Améliore encore les capacités de contre-contre-mesures, comme on le voit dans la version M. Base du missile suédois RB-24L.                                                                                                 |
| Captive M | Version non fonctionnelle utilisée à des fins de formation et de tests.                                                                                                                                                       |

Vous trouverez ci-dessous un résumé comparatif de base des performances de chaque Sidewinder dans
certains
domaines généraux, alors que 🟢 signifie _bon_, 🟨 _passable_ et 🔺 _médiocre_.

| Type | Tonalité de verrouillage | Déverrouillage | Aspect | Maniabilité | Résistance CM | Moteur |
| --------- | --------- | ------ | ------ | --------------- | --------- | ----- |
| B | 🔺 | 🔺 | Arrière | 🔺 | 🔺 | 🔺 |
| E | 🔺 | 🟢 | Arrière | 🔺 | 🟨 | 🔺 |
| J | 🔺 | 🟢 | Arrière | 🟨 | 🟨 | 🔺 |
| JULI | 🟢 | 🟢 | Tout | 🟨 | 🟢 | 🟨 |
| L | 🟢 | 🟢 | Tout | 🟢 | 🟢 | 🟢 |
| M | 🟢 | 🟢 | Tout | 🟢 | 🟢 | 🟢 |
| P | 🔺 | 🟢 | Arrière | 🟨 | 🟨 | 🔺 |
| P-3 | 🔺 | 🟢 | Arrière | 🟨 | 🟨 | 🟨 |
| P-5 | 🟢 | 🟢 | Tout | 🟨 | 🟢 | 🟨 |
| Captive M | 🟢 | 🟢 | Tout | ❌ | 🟢 | ❌ |

Certaines variantes ont un chercheur nul. Ces missiles ne produisent pas de tonalité lorsqu'ils
sont entièrement alignés avec une cible. Cela peut prêter à confusion, en faisant penser que le missile
ne suit pas alors qu'il est en fait parfaitement verrouillé sur la cible.

L'AIM-9B est incapable de libérer sa cage afin de suivre dynamiquement une cible qui n'est
pas sur son axe de visée.

## Smokewinders

Pour les spectacles aéronautiques, l'avion peut également être équipé de générateurs de fumée
installés
à l'intérieur de mannequins Sidewinder, appelés _Smokewinders_.

![Smokewinders](../../img/smokewinder.jpg)

Le générateur active ou désactive la fumée lors de la réception d'un signal de tir (Weapon Release).
Autrement dit, sélectionnez HEAT, MASTER ARM, puis appuyez sur la gâchette.

Les couleurs de fumée disponibles sont le rouge, le vert, le bleu, le blanc, le jaune et l'orange.

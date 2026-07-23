# Systèmes d'identification

L'avion est équipé d'un ensemble de systèmes d'interrogation AN/APX-76, -80A et
-81A, ainsi que d'un transpondeur pour réagir aux interrogations des autres
aéronefs.

L'interrogateur peut être contrôlé par le WSO avec un panneau sur le
[sous-panneau gauche](../cockpit/wso/left_sub_panel.md#apx-80-control-panel). Le
transpondeur est installé par le pilote sur la
[console droite](../cockpit/pilot/right_console/center_section.md#iff-control-panel).

<iframe width="560" height="315" src="https://www.youtube.com/embed/H_Gkn_Re548?si=QVjKK29KbDhpPh0l"
title="Comment utiliser l'IFF dans le monde F-4E Phantom | DCS" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Système de transpondeur

![pilot_iff_control_panel](../img/pilot_iff_panel.jpg)

Le transpondeur répond automatiquement aux défis provenant de radars de surface ou aéroportés
et sert à des fins supplémentaires telles que la fourniture momentanée d'une
identification de position sur demande et la transmission d'une réponse spécialement codée
pour indiquer une urgence.

Le système fonctionne en recevant des signaux d'interrogation codés et en transmettant
signaux de réponse codés à la source du défi, avec une réponse appropriée
indiquant que la cible est amie.

Le système propose quatre modes. Les modes 1, 2 et 3 sont disponibles pour
identification de sécurité, identification personnelle et identification du trafic,
respectivement.

Les codes des modes 1 et 3 peuvent être définis dans le cockpit, tandis que le code du mode 2
doit être réglé au sol, allant de 0000 à 7777. Le mode 1 est limité à deux
chiffres 00 à 77.

Les codes du mode 4 sont automatiquement insérés par l'équipe au sol avant le vol,
il peut également être demandé au Crew Chief de les insérer à la demande.

> 💡 Le Phantom propose une simulation IFF complète. En DCS, ce système fonctionne également
> avec tout autre avion coopérant, tel que le M-2000C, F1, JF-17, C-130,
> F-15E, Harrier et plus encore. Les autres avions ou les avions contrôlés par l'IA se replient
> à un interrogatoire basé sur la coalition, en supposant que le transpondeur du Phantom soit toujours
> être activé et réglé sur le code M4 correct pour la coalition actuelle, en ignorant
> l'état réel du transpondeur. Voir chapitre
> [Éditeur de mission](../dcs/mission_editor.md#iff) pour les options sur les commandes contrôlées par l'IA
> aéronef.

### Opération d’autotest

Pour auto-tester les modes 2 et 3, placez l'interrupteur principal (<num>1</num>) sur NORM et
maintenez le commutateur du mode de test souhaité en position supérieure. Si le voyant
de test du panneau de commande IFF s'allume, cela indique que le mode fonctionne
correctement.

Les modes 1 et C n'ont pas de capacités d'auto-test.

### Fonctionnement normal

Pour faire fonctionner le système IFF, commencez par tourner l'interrupteur principal (<num>1</num>)
sur
STBY. Après un délai de préchauffage d'environ 80 secondes, le système reçoit sa pleine
puissance, mais les interrogations sont bloquées.

Réglez les commutateurs Mode 1, Mode 2, Mode 3, Mode 4 et Mode C (<num>6</num>) comme
dirigé, ainsi que les sélecteurs de code Mode 1 et Mode 3
(<num>10</num>) et commutateur de fonction Mode 4 (<num>8</num>). Réglez l'interrupteur principal
(<num>1</num>) sur NORM pour rendre le système prêt à fonctionner sur les
modes sélectionnés. Si l'interrupteur principal (<num>1</num>) passe directement de OFF à un
mode de fonctionnement, il doit également passer par la période de préchauffage avant d'être
pleinement opérationnel.

#### Interrogatoire de position

Pour le fonctionnement du commutateur d'interrogation de position (I/P), placez le commutateur I/P
(<num>9</num>) en position IDENT ou placez-le en position MIC et appuyez sur
le microphone UHF. Le système IFF répond avec des signaux I/P spéciaux.

#### Voyant d'avertissement

Si le voyant IFF et le voyant MASTER CAUTION s'allument momentanément, vérifiez le
Sélecteur Mode 4 (<num>8</num>) ON et l'interrupteur principal (<num>1</num>)
NORMAL. L'allumage répété du voyant MASTER CAUTION ne peut être arrêté qu'en
placer l'interrupteur principal (<num>1</num>) sur OFF, entraînant la perte de toute capacité
IFF, ou en plaçant le commutateur de fonction Mode 4 (<num>8</num>) sur ZÉRO.
Avant ou pendant le vol, si l'interrupteur général (<num>1</num>) est placé sur OFF, le
Les voyants IFF et MASTER CAUTION ne s’allumeront pas lors de l’interrogation.

Le fonctionnement IFF normal sera disponible, après un préchauffage de 80 secondes, lorsque le
l'interrupteur principal (<num>1</num>) est à nouveau placé sur NORMAL.

#### M4 Zéro/Maintien

Les codes du mode 4 sont automatiquement effacés à l'arrêt, lorsque le système IFF
perd l'alimentation. Ceci peut également être commandé en déplaçant le commutateur de fonction Mode 4
(<num>8</num>) en position ZÉRO et en le maintenant pendant environ 5
secondes. Une fois remis à zéro, le voyant d'avertissement IFF s'allumera et le mode 4 ne
sera plus disponible pendant le reste du vol.

Les codes peuvent être réinsérés par l'équipe au sol. La position HOLD du Mode 4
le commutateur de fonction est inopérant sur la variante DSCG du F-4E et a été ajouté
plus tard pour le DMAS uniquement. Maintenir l'interrupteur dans cette position pendant 15 secondes
permettra de conserver les codes du mode 4 lors du prochain arrêt, les empêchant ainsi d'être
automatiquement remis à zéro.

### Opération d'urgence

Lors de l'éjection de l'un ou l'autre cockpit, le fonctionnement d'urgence IFF
devient automatiquement actif.

Si l'interrupteur principal (<num>1</num>) est en position OFF avant l'éjection, le
Le système commencera à fonctionner après un délai d’environ 80 secondes.

En cas d'urgence, tournez l'interrupteur principal (<num>1</num>) sur EMER. Les réponses
pour les modes 1 et 2 sont des signaux d'urgence spéciaux des codes sélectionnés sur le
cadrans applicables, tandis que les réponses en mode 3 sont des signaux d'urgence spéciaux de
code 7700.

## Systèmes d'interrogateur

![WSO Panneau de commande APX](../img/wso_apx_80.jpg)

Le Phantom combine trois systèmes, AN/APX-76, -80A et -81A, pour interroger
et défier d'autres avions pour détecter s'ils sont amis ou ennemis.

Le système AN/APX-76 permet une interrogation régulière avec les systèmes de transpondeur amis.

En outre, les États-Unis ont procédé à une ingénierie inverse de certains systèmes de transpondeurs
soviétiques activement utilisés
entre 1960 et 1980, suffisamment pour pouvoir développer le système de spoofing
AN/APX-81A _Combat-Tree_. Combat-Tree envoie des requêtes d'interrogation compatibles à
Systèmes soviétiques qu'ils identifieraient comme systèmes amis, renvoyant ainsi
une réponse valable. Cela permet au Phantom non seulement d'identifier les systèmes amis,
mais aussi des avions probablement hostiles.

> 💡 Les Soviétiques se sont rapidement rendu compte du problème et ont patché leur transpondeur IFF
> systèmes, tout en chiffrant également la communication pour empêcher une autre violation.

Les commandes sont regroupées sur un panneau, accessible au WSO sur le sous-panneau de gauche
zone.

La moitié supérieure comprend les commandes du système AN/APX-76, tandis que la moitié inférieure
contrôle l’AN/APX-81A.

### AN/APX-76

Pour défier des avions amis ou civils utilisant l'AN/APX-76, le WSO définit le
mode interrogation sur le premier afficheur à rouleau. Il peut être réglé sur OFF ou sur
Modes 1, 2, 3, 4/A ou 4/B (<num>3</num>).

Les quatre autres chiffres sont utilisés pour définir le code IFF à interroger pour les modes 1 à
3 (<num>3</num>). Le code pour les modes 4/A et 4/B est défini par le personnel au sol.

Une fois configuré, l'interrogation peut être lancée en appuyant sur le bouton Challenge
Bouton sur le manche de commande manuelle de l'antenne ou déplacement du commutateur Test/Challenge
(<num>2</num>) à la position CHAL CODE.

> 💡 Le commutateur Test/Challenge enverra uniquement un défi via l'AN/APX-76
> système, tandis que le bouton Challenge comprend une interrogation par Combat-Tree,
> si activé.

![Bouton de défi](../img/wso_antenna_hand_control_challenge_button.jpg)

L'écran radar présente les résultats de l'interrogation avec des lignes autour de la
position des contacts :

- ligne ci-dessus ; l'avion dispose d'un mode de transpondeur correspondant (probablement amical, ou
  au moins neutre)
- ligne ci-dessous ; l'avion a un code de transpondeur correspondant (probablement convivial)

> 💡 Le Phantom propose une simulation IFF complète. En DCS, ce système fonctionne également
> avec tout autre avion coopérant, tel que le M-2000C, F1, JF-17, C-130,
> F-15E, Harrier et plus encore. Les autres avions ou les avions contrôlés par l'IA se replient
> aux transpondeurs basés sur la coalition, l'interrogateur des Phantoms assume alors leur
> le transpondeur doit être réglé sur les codes corrects pour leur coalition correspondante.
> Voir le chapitre [Editeur de mission](../dcs/mission_editor.md#iff) pour les options sur
> Avion contrôlé par l'IA.

![Radar avec contacts amis](../img/radar_iff_friendly.jpg)

Chaque fois que l'AN/APX-76 envoie une interrogation, le voyant de défi
(<num>1</num>) s’allume.

#### Test

Le système d'interrogation peut être testé en maintenant le bouton Test/Challenge enfoncé
(<num>2</num>) en position TEST.

Pendant le test, le système injectera deux réponses artificielles de transpondeur à
gammes 3,5 NM et 4,5 NM.

Le test réussit si le voyant de défi (<num>1</num>) s'allume et que le
L'écran DSCG affiche deux lignes aux distances correspondantes qui s'étendent sur la
écran entier.

![Radar avec test IFF](../img/radar_iff_test.jpg)

### Arbre de combat AN/APX-81A

Combat-Tree est conçu pour usurper les transpondeurs IFF hostiles en envoyant
demandes d'interrogation compatibles avec ces systèmes. Le transpondeur hostile
enverra alors une réponse, révélant la position de l'avion.

> 💡 Les systèmes usurpables pouvant être exploités par l'AN/APX-81A peuvent être configurés
> dans l'[Éditeur de mission](../dcs/mission_editor.md#combat-tree-spoofable).

<iframe width="560" height="315" src="https://www.youtube.com/embed/Gk3CLJB3dNY?si=D7Q7bRf00jEX05iT"
title="DCS F-4E Phantom II APX-81 Tutoriel sur l'arbre de combat ! | Le changement de donne sur le
Vietnam !" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Le système est activé en déplaçant les deux commutateurs Mode 2 et Mode 3
(<num>5</num>) en position ACTIF.

Une fois configuré, l'interrogation peut être lancée en appuyant sur le bouton Challenge sur
le manche de commande manuelle de l'antenne.

> 💡 Si AN/APX-76 est configuré, appuyer sur le bouton Challenge enverra également un
> demande d'interrogatoire par AN/APX-76.

Les réponses à une demande usurpée sont indiquées par une seule ligne sous le contact.

![Radar avec contacts hostiles](../img/radar_iff_hostile.jpg)

> 💡 L'indication est quasiment identique aux réponses à un AN/APX-76
> interrogation avec seulement un mode de transpondeur correspondant, mais un code différent. Pour
> différencier à quel défi appartient la réponse, il est nécessaire de
> soit désactiver un système d'interrogation, soit envoyer un défi AN/APX-76 uniquement
> en utilisant le commutateur Test/Challenge (<num>2</num>) en position CHAL CODE,
> et comparer les résultats.

Chaque fois que l'AN/APX-81A envoie une interrogation, le voyant TEST/CHAL
(<num>6</num>) s’allume.

#### Lumières d'activité

![Lampes d'activité APX](../img/wso_apx_81_light.jpg)

Juste à côté de l'un ou l'autre des indexeurs AoA dans le cockpit WSO se trouve un voyant qui
indique une
activité détectée par le système APX-81A Combat Tree.

S'allume chaque fois que le système détecte des réponses IFF d'un avion hostile.

> 💡 En raison des limitations du moteur, les feux d'activité ne peuvent capturer que les signaux
> envoi par transpondeurs d'avions avec une simulation IFF complète coopérant avec
> celui des Phantom, comme les M-2000C, F1, JF-17, C-130, F-15E, Harrier et
> plus. Pour les autres avions, les lumières ne s'allument que si un transpondeur répond
> à un défi Combat-Tree envoyé par son propre avion.

#### Auto-test

Le bouton Test (<num>6</num>) peut être utilisé pour lancer un autotest du
Système d'arbre de combat.

Le test est réussi si la lampe TEST/CHAL (<num>6</num>) juste à côté du
Le bouton s'allume.

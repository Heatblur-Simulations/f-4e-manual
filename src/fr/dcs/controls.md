# Contrôles

![Aperçu des contrôles](../img/controls_overview.jpg)

Les liaisons de contrôle disponibles pour le Phantom sont exhaustives. Pour tout interrupteur,
bouton ou molette, vous pouvez choisir entre des liaisons de position directes, une incrémentation
ou une décrémentation des liaisons, une bascule ou une option suivante, des liaisons spéciales
pour les commutateurs à 2 ou 3 voies, et un axe assignable.

Au total, les deux cockpits comportent environ 1 000 liaisons assignables et 200 axes chacun.

À titre d'exemple, le commutateur **Speed ​​Brake** propose 8 liaisons :

- Speed Brake - In
- Speed Brake - Stop
- Speed Brake - Out (Hold)
- Speed Brake - [Aft]
- Speed Brake - [Forward]
- Speed Brake - [Next]
- Speed Brake - In/Stop (3-way up)

La position **Out** est marquée **(Hold)** pour signaler que la position est
à ressort et reviendra au centre une fois relâché.

Les liaisons **[Aft]** et **[Forward]** sont des liaisons directionnelles qui déplacent le
commutateur
de la position actuelle dans la direction donnée.

**[Next]** est similaire, mais ne s'arrêtera pas à la dernière position et ne reviendra pas
à nouveau à la première position. De même, les commutateurs bidirectionnels fournissent une
liaison **[Toggle]** qui fait basculer le commutateur entre l'une ou l'autre position.

La liaison **(3 voies vers le haut)** est destinée à être utilisée avec du matériel à 3 voies réel,
comme les commutateurs présents sur de nombreux appareils externes. Ils envoient un signal soit sur
une position (haut et bas), mais aucun signal sur la position centrale. Par conséquent, la liaison
ramènera le commutateur au centre lorsqu'aucun signal n'est envoyé.

> 💡 La liaison **(3 voies vers le bas)** est ignorée pour le Speed ​​Brake, car elle serait
> identique à la liaison à ressort **Out (Hold)**.

Toutes les liaisons se voient généralement attribuer au moins deux catégories consultables, le
**système** auquel appartient la liaison et son **emplacement** dans le cockpit. Le commutateur
**Master Arm**, par exemple, a des catégories :

- Armes
- Panneau principal
- Panneau de sélection d'armes

## Sim-Pit

En plus des liaisons régulières, des liaisons **[SimPit]** spéciales sont fournies pour
permettent de contrôler n'importe quel interrupteur ou bouton via une entrée d'axe.

Par exemple, un interrupteur à 2 positions ON et OFF peut être commandé avec un
axe, tandis que l'interrupteur change de position dès que l'axe est poussé au-delà
sa position centrale.

Ceci est particulièrement utile pour les constructeurs de répliques de cockpits, travaillant
principalement avec des commutateurs matériels dont les composants électroniques envoient des
entrées normalisées sur toute la plage de mouvement.

## Commandes Jester et Crew Chief

Des liaisons directes pour contrôler les commandes Jester et Crew Chief sont fournies spécialement
pour les concepteurs de missions ou les utilisateurs de logiciels de reconnaissance vocale, tels que
**VoiceAttack**.

![Jester Commandes](../img/jester_commands_binds.jpg)

Cela permet d'utiliser les actions correspondantes directement via une liaison au lieu de
en utilisant l'interface utilisateur pour les sélectionner.

## Guide des liaisons

Au début, une question courante est de savoir quels contrôles fondamentaux faut-il
généralement lier et avoir accès sans utiliser la souris, outre les liaisons évidentes
de l'accélérateur et de l'axe du manche.

Dans DCS, ces liaisons sont classées comme **Essentials** pour faciliter leur recherche.

![Catégorie essentielle](../img/bind_category_essentials.jpg)

> 💡 Il est fortement recommandé de relier les articles marqués **gras**. Sections _Italique_
> sont des suggestions sur les positions à lier.

### Pilote

Le pilote doit se concentrer sur la liaison des principales commandes de vol, ainsi que sur les
commutateurs pertinents pour le combat.

#### Commandes de vol

- **Manche**
- **Manette des gaz**
- **Commandes de trim** _(4 + 2)_
- Train d'atterrissage
- Rabats/Lattes _(Norm, Out, Out & Down)_
- Freinage rapide _(Sortie, Arrêt, Entrée)_
- Éjecter
- **Bouton de direction du train avant/acquisition automatique**
- **Drag Chute** _(Déployer, Couper)_
- Commandes du siège _(Haut, Bas)_

#### Démarrer

Pour exécuter la séquence de démarrage à froid, les liaisons intéressantes sont :

- Commande Crew Chief : Alimentation externe > Connecter
- Commande Crew Chief : Source d'air > Se connecter au moteur droit/gauche
- Commande Crew Chief : Source d'air > Démarrer/Arrêter le flux d'air
- Commande Crew Chief : Source d'air > Charger les cartouches de démarrage
- Interrupteur de démarrage du moteur droite/gauche (allume les cartouches de démarrage)
- Générateur Droite/Gauche _(On, Off, Ext)_
- Interrupteur principal du moteur droit/gauche
- **Allumage moteur droit/gauche**
- Détente de ralenti du moteur droit/gauche

#### Combat

- **Déclencheur (2ème étape)**
- **Bouton Bombe**
- **Défilement de l'arme** _(4)_
- **Pinky Switch** _(Canon, Chaleur, Radar, Rejet)_
- **Bouton CAGE**
- **Bouton de direction du train avant/acquisition automatique**
- Mode DSCG _(Radar, Arrêt, TV)_
- Outil de bombardement
- **Contre-mesures de distribution**
- HUD Mode _(CW, CCW)_
- Mode de livraison _(CW, CCW)_
- Sélecteur d'arme _(CW, CCW)_

#### Navigation

- Entrée de navigation _(Suivant)_
- Mode de navigation _(Suivant)_
- AFCS Commutateur
- Commutateur de maintien ALT
- Commutateur de déverrouillage AAR

#### Communication

- **Commutateur de microphone** _(UHF, ICS)_
- Canal COMM _(Inc, Dec)_

#### Jester

- **Action interface utilisateur Jester**
- **Action contextuelle Jester**

### WSO

Pour le WSO, il est facultatif de lier les commandes de vol telles que le manche de vol.
Les contrôles doivent être axés sur le fonctionnement du radar et de la nacelle de désignation
Pave Spike.

#### Radars et Pave Spike

- **Commande manuelle d'antenne**
- **Déclencheur de commande manuelle d'antenne** _(demi-action, pleine action)_
- **Élévation de l'antenne** _(Inc, Dec)_
- **Bouton de défi de commande manuelle de l'antenne**
- Mode écran _(CW, CCW)_

#### Contrôles radar

- **Gain du récepteur radar** _(Inc, Dec)_
- Portée du radar _(CW, CCW)_
- Aspect cible _(Suivant)_
- Mode radar _(CW, CCW)_

#### Combat pertinent

- **Contre-mesures de distribution**
- Sélection vidéo
- Mode air-air (CAGE)
- **Bouton Geler**
- Bouton Insérer une cible
- Déplacer le curseur (le long/en travers de la piste) _(Inc, Dec)_

#### Commandes de navigation

- **Commutateur de microphone** _(UHF, ICS)_
- Canal COM _(Inc, Dec)_
- **Fonction de navigation** _(CW, CCW)_

### Contrôles réels

Voici les photos des commandes réelles de l'avion rassemblées à titre de référence.
Pour des informations plus détaillées, voir les sous-chapitres associés de
[2. Aperçu du cockpit](../cockpit/overview.md) en utilisant les hyperliens respectifs.

#### [Manche pilote](../cockpit/pilot/stick_seat.md#stick)

![Manche pilote](../img/pilot_stick.jpg)

#### [Manette des gaz pilote](../cockpit/pilot/left_console/front_section.md#throttles)

![Manette des gaz pilote](../img/pilot_throttle.jpg)

#### [Manche WSO](../cockpit/wso/stick_seat.md#stick)

![Manche WSO](../img/wso_stick.jpg)

#### [WSO Accélérateur](../cockpit/wso/left_console/center_section.md#throttles)

![WSO Accélérateur](../img/wso_throttles.jpg)

#### [WSO Commande manuelle de l'antenne](../cockpit/wso/right_console/front_section.md#antenna-hand-control)

![WSO Commande manuelle de l'antenne](../img/wso_antenna_hand_control_overview.jpg)

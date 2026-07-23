# Section centrale

La zone centrale de la console droite contient les commandes IFF et d'éclairage.

## Panneau de configuration IFF

![IFF](../../../img/pilot_iff_panel.jpg)

Contrairement au panneau Interrogateur du cockpit WSO, ce panneau donne au
pilote la possibilité de régler le transpondeur IFF de son propre avion.
Lequel serait ensuite récupéré par les interrogateurs dans d’autres avions.

> 💡 En raison des limitations du moteur, les paramètres sur le panneau n'ont aucun effet pour
> DCS. Cependant, ils sont exposés à des outils externes, tels que SRS.

Pour plus d'explications, voir le
[Contrôles du système IFF,
chapitre](../../../systems/identification_systems.md#iff-controls-and-indicators).

### Interrupteur principal

L'interrupteur principal (<num>1</num>) est un commutateur rotatif à cinq positions avec les
contrôles :

| Position | Opération |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| OFF | Système d'identification hors tension.                                                                                                                                                                                                               |
| STBY | Pleine puissance fournie au système mais avec interrogations bloquées.                                                                                                                                                                                |
| LOW | Le système fonctionne avec une sensibilité réduite.                                                                                                                                                                                                         |
| NORM | Le système fonctionne à pleine sensibilité.                                                                                                                                                                                                              |
| EMER | Permet au système de répondre aux interrogations en modes 1, 2 et 3/A. La réponse pour les modes 1 et 2 est un signal d'urgence spécial des codes sélectionnés sur les cadrans applicables, tandis que les réponses du mode 3/A sont des signaux d'urgence spéciaux du code 7700. |

### Sélecteur de mode 1

Le sélecteur de mode 1 à trois positions (<num>6</num>) contrôle le fonctionnement du mode 1 :

| Position | Opération |
| -------- | -------------------------------- |
| M-1 | Position d'autotest (inopérant) |
| ON | Active le mode 1 pour le fonctionnement.    |
| Out | Désactive le mode 1 |

### Sélecteur de mode 2

Le sélecteur de mode 2 à trois positions (<num>6</num>) contrôle le fonctionnement du mode 2 :

| Position | Opération |
| -------- | -------------------------------------------------------------------- |
| M-2 | Position d'auto-test. Le voyant s’allume si le mode fonctionne correctement. |
| ON | Active le mode 2 pour le fonctionnement.                                        |
| Out | Désactive le mode 2 |

### Sélecteur de mode 3/A

Le sélecteur de mode 3/A à trois positions (<num>6</num>) contrôle le fonctionnement du mode 3/A :

| Position | Opération |
| -------- | -------------------------------------------------------------------- |
| M-3/A | Position d'auto-test. Le voyant s’allume si le mode fonctionne correctement. |
| ON | Active le mode 3/A pour le fonctionnement.                                      |
| Out | Désactive le mode 3/A |

### Sélecteur de mode C

Le sélecteur de mode C à trois positions (<num>6</num>) contrôle le fonctionnement du mode C :

| Position | Opération |
| -------- | -------------------------------- |
| M-C | Position d'autotest (inopérant) |
| ON | Active le mode C pour le fonctionnement.    |
| Out | Désactive le mode C |

### Sélecteurs de code Mode 1 et Mode 3/A

Le sélecteur de code Mode 1 (<num>10</num>) est utilisé pour sélectionner les codes Mode 1 de 00
à 73. Le sélecteur de code Mode 3/A est utilisé pour sélectionner les codes Mode 3/A de 0000
à 7777.

### Sélecteur de mode 4

Le sélecteur de mode 4 à deux positions (<num>8</num>) contrôle le fonctionnement du mode 4 :

| Position | Opération |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ON | Active le mode 4 pour le fonctionnement.                                                                                                                                     |
| Out | Empêche le mode 4 de répondre. Si le code Mode 4 est inséré, une interrogation provoquera l'allumage momentané du voyant d'avertissement IFF et du voyant MASTER CAUTION. |

### Commutateur d'indication du mode 4

Le commutateur d'indication du mode 4 (<num>7</num>) comporte des positions pour AUDIO, OUT,
et LIGHT.

En position AUDIO, un signal audio indique la réception du Mode 4
les interrogations auxquelles on ne répond pas (par exemple, les codes ne correspondent pas ou un
défaut), et
le voyant REPLY Mode 4 s'allume pendant la transmission d'une réponse (par exemple, les codes
correspondent). En position LIGHT, le voyant REPLY du mode 4 s'allume lorsque le mode 4
les réponses sont transmises et l’audio n’est pas présent. En position OUT, les deux
les indications lumineuses et sonores sont inactives.

Pour tester le voyant de réponse Mode 4 (appuyer pour tester), le commutateur d'indication
doit être en position AUDIO ou LIGHT.

### Commutateur de fonction Mode 4

Le commutateur de fonction Mode 4 (<num>4</num>) a les positions ZERO, B, A et HOLD.

En position A, le transpondeur répond aux interrogations du mode 4 avec le
même réglage que celui défini en position A, et en position B, il répond à
interrogations avec le même réglage de code que celui défini en position B. Si
l'interrupteur est dans la mauvaise position pour le code interrogé (par exemple, en A avec
une interrogation B), le voyant d'avertissement IFF et le voyant MASTER CAUTION ne
s'activeront pas.

> 💡 Les paramètres de code pour les positions A et B sont automatiquement insérés par le
> équipe au sol avant le vol. Il est également possible de demander au Crew Chief de les insérer
> à la demande. Les codes du mode 4 sont automatiquement effacés de l'avion à l'arrêt
> et peuvent être mis à zéro explicitement en plaçant le commutateur sur ZERO.

La position HOLD est inopérante sur la variante DSCG du F-4E et a été ajoutée
plus tard avec le DMAS uniquement. Le maintenir pendant 15 secondes conservera les codes du mode 4
lors du prochain arrêt, les empêchant d’être automatiquement remis à zéro.

L'allumage du voyant IFF et du voyant MASTER CAUTION peut être causé par
défaillance d'un composant interne, échec de réponse à une interrogation valide ou
code remis à zéro.

### Commutateur de test de rayonnement du moniteur

Ce commutateur (<num>5</num>) a trois positions, RAD TEST, MON et OUT. C'est
destiné aux tests par l'équipe au sol et doit être réglé sur OUT et non utilisé
pendant le vol.

### Identification du commutateur de position

Le commutateur d'identification (<num>9</num>) est un interrupteur à bascule à trois positions
utilisé
pour fournir une identification momentanée de la position.

| Position | Opération |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IDENT | Permet au système de répondre avec identification des réponses de position dans tous les modes utilisés. La réponse se poursuit pendant 15 à 30 secondes après le relâchement du commutateur. |
| OUT | Désactive l’identification de la capacité de position.                                                                                                                                                |
| MIC | Identique au positionnement du commutateur sur IDENT, sauf qu'il faut utiliser le bouton du microphone UHF pour déclencher l'identification.                                                                     |

## Panneau de commande et de surveillance des munitions DCU-94A

![DCU94](../../../img/pilot_dcu_panel.jpg)

Ce panneau est utilisé pour contrôler et tester le système de circuit de largage séparé pour
les charges nucléaires.

Les charges nucléaires sont séparées du système de largage normal afin d'éviter
tout largage accidentel.

> 💡 Ceci n'est pas simulé dans le jeu.

## Contrôle de la température

![PilTemp](../../../img/pilot_temp_control.jpg)

Le bouton (<num>1</num>) peut être utilisé avec l'interrupteur (<num>2</num>) en position AUTO,
et permet au pilote de régler la température à l'intérieur des deux cockpits de
FROID à CHAUD pour le confort de l’équipage.

En cas de panne du système AUTO, le commutateur peut être placé en mode manuel.

La position centrale de l'interrupteur éteint le système.

## Panneau de commande d'éclairage du cockpit

![Lumières PilCock](../../../img/pilot_cockpit_lights.jpg)

Le panneau de commande d'éclairage du cockpit permet de contrôler tous les éclairages de bord du
panneau, l'éclairage du tableau de bord, les projecteurs de la console, les projecteurs blancs
situés sous le rebord de la verrière au-dessus de chaque console, et comprend également
l'interrupteur Test des voyants d'avertissement/Lumière de la boussole de secours.

Pour plus d'informations sur l'éclairage, consultez le
[chapitre éclairage](../../../systems/lighting.md#interior-lighting).

### Projecteur blanc

L'interrupteur du projecteur blanc (<num>1</num>) agit indépendamment de toutes les autres
commandes sur le panneau et est soit ON, soit OFF. Il active un projecteur
de secours séparé (également appelé Thunderstorm Light) qui éclaire le
cockpit en blanc.

### Bouton du tableau de bord

Ce bouton (<num>2</num>) contrôle l'éclairage de fond de l'instrument
panneau, ainsi qu'un éclairage de bord pour la plupart de ses jauges.

> 💡 Les principaux instruments de vol sont contrôlés via le
> [Bouton de luminosité des instruments de vol](../weapon_management.md#flight-instrument-brightness-knob)
> à la place.

### Bouton de console

Le bouton de commande de l'éclairage de la console (<num>5</num>), avec une plage allant de OFF à
BRT,
contrôle le niveau d’éclairage des consoles gauche et droite.

### Projecteur de console

Cet interrupteur (<num>3</num>) contrôle le niveau d'éclairage des projecteurs rouges
assurant l'éclairage général des consoles. Trois réglages sont disponibles : DIM,
MED et BRT.

> 💡 Pour les éteindre, placez l'interrupteur sur DIM et le bouton de la console sur OFF.

> 💡 Les projecteurs pour le tableau de bord se trouvent sur le
> [mur droit](wall.md#instrument-flood).

### Interrupteur de test des voyants d'avertissement

L'interrupteur de test des voyants d'avertissement (<num>4</num>) (marqué WARN LT TEST) est un
interrupteur à trois positions ; en position WARN LT TEST, confirme la fonction de
les différents indicateurs d'urgence dans le cockpit.

En position STBY COMP, il allume la lumière pour le
[Boussole de veille](../../pilot/overhead_indicators.md#standby-magnetic-compass).

Les deux fonctions sont désactivées lorsque l'interrupteur est placé en position OFF.

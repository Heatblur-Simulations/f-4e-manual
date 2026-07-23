# Récepteur d'alerte radar

![rwr_happy_face](../../img/rwr_happy_face.jpg)

Le récepteur d'alerte radar ALR-46 (RWR par la suite) est le système de connaissance
situationnelle passive du F-4E pour la détection des menaces radar aéroportées et sol-air. Le
système capte les signaux de
plusieurs paires d'antennes directionnelles installées à l'arrière du fuselage, sur chaque bout
d'aile et
sous le nez ; la différence de synchronisation relative de la détection et d'angle par les antennes
est utilisée par
le système pour définir un relèvement relatif au radar émetteur. Le traitement ultérieur du
rayonnement reçu fait référence au catalogue de menaces stocké pour identifier le type d'émetteur,
ainsi que pour définir une
portée de menace relative en fonction de la puissance reçue par rapport à la puissance de sortie
connue.

![pilot_rwr_with_contacts](../../img/rwr_with_contacts.jpg)

> 🚧 L'ALR-46 est actuellement installé dans le boîtier d'un modèle RWR antérieur, l'APR-36.

Le signal de menace traité résultant est ensuite présenté sur l'écran CRT (tube cathodique) du RWR,
avec relèvement à l'émetteur affiché sur l'écran avec le haut par rapport au nez (12 heures) et
le bas de la queue (6 heures), et à proximité du centre par rapport au calcul du système
du niveau de menace - avec des indications plus proches indiquant un danger plus élevé, et celles se
situant dans l'anneau du milieu étant classées dans la plage d'engagement. En fonctionnement normal,
l'ALR-46 peut présenter 16
menaces sur le CRT simultanément. La menace la plus prioritaire, telle que calculée par le
catalogue de menaces et de portée de l'ALR-46,
est présentée à l'écran avec un losange superposé à son symbole ; c'est
considéré comme une fonctionnalité de diamant « flottant », l'ALR-46 définissant la priorité. En cas
d'engagement possible par un émetteur de menace (simultanément à l'illumination des boutons
ACTIVITY et/ou MISSILE LAUNCH), l'événement est signifié par un cercle autour du symbole de
l'émetteur.

## Commandes ALR-46

### Bouton d'intensité d'affichage RWR

Situé à côté de l'affichage de situation RWR dans le coin inférieur gauche du panneau, le bouton
d'intensité fonctionne comme un variateur pour contrôler la luminosité des retours RWR affichés.
Le sens des aiguilles d'une montre augmente
la luminosité, le sens inverse des aiguilles d'une montre la diminue.

### Indicateurs stroboscopiques d'excès de bruit

![rwr_excess_noise_strobe](../../img/rwr_t_strobe.jpg)

En fonctionnement normal, un trio de trois indicateurs en forme de T apparaissent aux
positions de 9, 12 et 3 heures, près du centre du RWR CRT. Ces indicateurs signifient l'absence
de bruit excessif dans
la détection d'amplificateur de bande basse (<num>9</num>), moyenne (<num>12</num>) et haute
(<num>3</num>). Dans
le cas où le bruit devient trop important dans un canal d'amplificateur donné, l'indicateur de
la bande respective disparaîtra. Si cela se produit, un TEST SYS peut être effectué pour confirmer
que le canal fonctionne toujours ; en cas de réussite, le canal peut être considéré comme
fonctionnant à une
capacité de détection réduite.

Un quatrième indicateur peut apparaître dans le cadre du TEST SYS ou du cycle de mise sous tension.
Ce quatrième indicateur dans
la position 6 heures ne signifie aucune fonction.

### Panneau de commande ALR-46

![pilot_rwr_control_panel](../../img/wso_rwr_control_panel.jpg)

Le panneau de commande ALR-46 se compose de dix boutons lumineux polyvalents, ainsi que d'une paire
de
boutons rotatifs pour contrôler le volume du système et la luminosité du panneau.

Les commandes sont dupliquées pour le pilote et WSO. Les commandes pilotes se trouvent directement
sous l'indicateur RWR,
tandis que les commandes du WSO se trouvent sous l'indicateur central, devant la vue.

#### Mode

L'ALR-46 passe par défaut à la mise sous tension en mode OPEN (<num>1</num>), qui présente jusqu'à
16 menaces sur
l'affichage en même temps, en fonction du nombre d'émetteurs visibles et des paramètres actuels du
système (Recherche,
FAIBLE ALT, etc.). Dans le cas où l'équipage aurait besoin d'une priorisation immédiate des menaces
les plus urgentes
dans un environnement saturé, il est possible d'appuyer sur le bouton PRIORITY pour afficher les
cinq émetteurs que le
système juge le plus dangereux. Lorsque vous appuyez dessus, l'éclairage OPEN passe à la position
PRIORITY, et revient à OPEN lors d'une nouvelle sélection.

#### Recherche

Par défaut, l'ALR-46 est programmé pour donner la priorité et afficher les émetteurs liés aux armes
qui peuvent
engager et détruire l'avion. Toutefois, les missions nécessiteront un suivi des systèmes d'alerte
précoce et
systèmes de radar de recherche fonctionnant avec des largeurs d'impulsion plus longues pour une
détection et un suivi à portée étendue
d'éventuels intrus - c'est-à-dire le F-4. Ces émetteurs peuvent être affichés en utilisant le mode
Recherche
(<num>2</num>), qui les présente sur le RWR avec le symbole S pour signifier leur fonction de
radar de recherche à longue portée. L'entrée en mode Recherche est affichée sur le bouton avec un
"S" lumineux.

En raison de leur faible priorité de menace, il est important de noter que la symbologie des radars
de recherche peut souvent
tomber de l'écran en raison de leur importance réduite - en particulier lorsque l'ALR-46 est placé
dans
Mode PRIORITY.

#### Handoff

Le bouton Handoff (<num>3</num>) offre la possibilité à l'équipage de conduite de définir la
menace émettrice prioritaire. Par défaut, l'ALR-46 définit la menace la plus prioritaire en fonction
de la portée, du mode de transmission actuel et du catalogue des menaces. Cette menace prioritaire
est visualisée avec
un diamant superposé autour du symbole de l'émetteur. Dans le cas où le pilote souhaite définir un
émetteur différent comme cible, le bouton Handoff est enfoncé et maintenu pour faire défiler le
diamant de priorité à travers les différents émetteurs. Une fois que l'émetteur souhaité est
focalisé et entouré du
diamant, le bouton peut être relâché et le symbole de priorité restera verrouillé sur
cet émetteur, et le symbole double caret (<>) sur le bouton s'allumera pour indiquer le mode
verrouillé. Avec un
émetteur à foyer diamant verrouillé, le système restera focalisé sur ledit émetteur jusqu'à ce que
le signal soit perdu, que l'équipage sélectionne un autre émetteur de focus avec le bouton Handoff,
ou que le bouton
soit enfoncé momentanément pour revenir au mode prioritaire normal de menace de diamant flottant.

<!-- ![pilot_rwr_handoff](../../img/pilot_rwr_handoff.jpg) -->

Dans le cas où l'émetteur regroupe étroitement d'autres symboles sur l'écran, le mode TGT SEP
sera appliqué.

Lorsque le symbole du diamant est verrouillé, le son du diamant (handoff) peut être entendu via
l'interphone. C'est
une tonalité synthétique constante générée dans le système sur la base du PRF actuel (fréquence
de répétition d'impulsions) de l'émetteur donné. Il n'est pas affecté par la puissance reçue, donc
l'amplitude ne changera pas dans le temps comme dans certains autres systèmes.

#### Lancement

Dans le cas où un lancement de missile est détecté au moyen de commandes de guidage SAM discrètes
reçues,
les indications de MISSILE LAUNCH dans ce bouton (<num>4</num>) s'allumeront et un cercle est
superposé autour de l'émetteur de menace défini comme guidant l'arme entrante. Appuyer sur le
bouton
lancera le test intégré qui fournit l'[audio de lancement](#lancer-laudio) via l'interphone.

> 💡 Gardez à l'esprit que l'ALR-46 ne peut détecter les lancements de missiles qu'à partir de certains systèmes.

![pilot_rwr_missile_launch](../../img/rwr_launch_light.jpg)

#### Altitude

L'ALR-46 utilise sa propre altitude comme aspect déterminant de la priorité de la
menace, provoquant ainsi la perte de priorité des menaces AAA et SAM à basse altitude dans le cas
où l'avion se trouve à une altitude
estimée le placer en dehors de leur enveloppe de menace. L'activation du mode LOW ALT (<num>5</num>)
supprime cette estimation d'enveloppe de la hiérarchisation des menaces et replace les menaces à
basse altitude
en priorité, utile dans des circonstances telles qu'une attaque en piqué de haute à basse altitude
ou un profil d'approche de cible,
et est confirmé comme mode actif avec le descripteur LOW ALT illuminé sur le bouton.

#### Séparation des cibles

Dans le cas où un certain nombre d'émetteurs sont détectés à une telle proximité que la symbologie
se chevauche sur l'écran RWR, le bouton Séparation cible (<num>7</num>) offre la possibilité de
développer la symbologie sur l'écran des émetteurs dans la même zone pour permettre une clarté sur
le type et le
nombre de radars détectés. Un appui sur le bouton déclenche l'éclairage inférieur du TGT SEP sur le
bouton, et tous les groupes d'émetteurs que le système définit comme étant éligibles pour la
présentation étendue
le fera pendant trois secondes sur l'écran RWR avant de revenir à la vue standard.

#### Test du système

Le test de mise sous tension du système (<num>8</num>) fournit une vérification à trois bandes (1
basse, 2 moyenne, 3 haute) dans les
quatre quadrants pour une sensibilité appropriée, ainsi qu'une confirmation d'un relèvement relatif
de 225 degrés
à des fins de diagnostic. La séquence de test commence par des 1 dans les quatre
quadrants, la
valeur en bas à gauche dans un losange (signifiant un cap de 225, qui est affiché sur le
panneau) ; les
deuxième et troisième continuent ce processus, en cyclant la bande 2 et la bande 3. Les tests
sont accompagnés d'une
séquence de tonalités pour le réglage du niveau de surveillance audio.

Ce bouton est également utilisé lors du changement de fichiers de menace. La procédure exacte est
expliquée dans la
section [symbologie](#symbologie).

#### Inconnu

Lorsqu'un émetteur est détecté qui n'a pas d'entrée de catalogue, mais est reconnu par la puissance
reçue,
la durée et l'impulsion comme étant une menace possible, l'indicateur U sur le bouton Inconnu
(<num>9</num>)
clignotera. Appuyer sur le bouton fournira un symbole U sur le RWR CRT à la position d'azimut
correcte, à des fins de référence et de surveillance.

La condition par défaut du bouton Inconnu est que le symbole U soit allumé, mais fixe.

#### Puissance d'activité

Dans le cas où des commandes de guidage SAM sont détectées, le bouton ACTIVITY (<num>10</num>)
s'allumera. La fonction de ce bouton est similaire à l'indication MISSILE LAUNCH dans la mesure où
il répond à une directive de guidage adressée à un SAM, mais ne répond pas aux signaux de
changement discrets.
Ainsi, un avertissement ACTIVITY allumé peut en fait indiquer un lancement, selon le système
engageant le F-4 et les circonstances qui l'entourent. L'indication fournira un cercle autour de
l'émetteur de la menace.

![pilot_rwr_activity_power](../../img/rwr_activity_light.jpg)

#### Alimentation du système

Le bouton d'alimentation du système (<num>11</num>) est l'interrupteur marche/arrêt de l'ALR-46.
Lorsqu'il est pressé pour
activer le système, le panneau de commande et l'écran RWR passeront par leur cycle initial de
préchauffage de 9 secondes,
avec l'écran et les boutons lumineux clignotant rapidement pendant que le système se prépare à
l'utilisation
et que son bon fonctionnement est confirmé. Le mode recherche est désactivé par défaut
au démarrage, et
si l'avion était éteint et redémarré, le mode priorité à l'altitude (LOW ALT ou
normal) sera dans le même état dans lequel il était laissé avant l'arrêt.

En cas de panne de courant du système, l'ALR-46 dispose d'une fonction de redémarrage automatique.
Une fois le courant
récupéré, le récepteur redémarrera après un délai de quinze secondes, en plus de ses 9 secondes
d'auto-test de mise sous tension. Le système reprendra son état de la même manière qu'un
redémarrage normal - avec le mode
recherche désactivé et la priorité à l'altitude comme lors de la coupure de courant.

#### Bouton audio

Le bouton AUDIO (<num>6</num>) est le contrôle direct du volume pour l'audio situationnel de
l'ALR-46. Tourner le bouton dans le sens des aiguilles d'une montre augmente le volume audio, tourner
dans le sens inverse des aiguilles d'une montre le diminue.

#### Bouton DIM (gradateur)

Le bouton DIM (<num>12</num>) du panneau de commande ALR-46 gère le réglage de la luminosité du
boutons de commande lumineux ; tourner le bouton dans le sens des aiguilles d'une montre augmente la
luminosité, dans le sens inverse des aiguilles d'une montre
réduit la luminosité.

## Alertes audio

### Audio du nouveau contact

L'alerte audio émise lorsqu'un nouvel émetteur est affiché pour la première fois, ou lorsque le PRF
(fréquence de répétition
d'impulsions) d'un affichage existant change, est connue sous le nom de _new guy audio_. Elle se
compose de trois bips
dans les 1,5 secondes, chacun au PRF de l'émetteur qui a le symbole du diamant. L'audio du nouveau
contact alerte un
membre d'équipage d'un changement dans l'environnement de menace afin qu'il puisse vérifier la mise
à jour de son indicateur d'azimut.
La commande AUDIO sur l'indicateur de commande peut régler le volume du maximum à complètement
éteint.

> 💡 Vous pouvez écouter les différents sons sur
> [officialdsplayer.github.io/F-4E-RWR-PRF-Library](https://officialdsplayer.github.io/F-4E-RWR-PRF-Library/).

### Lancer l'audio

La tonalité de lancement synthétique générée lorsqu'un émetteur passe en état de lancement est
appelée _launch audio_
ou _ML interrupt audio_. Elle se compose d'environ sept bips en 1,5 seconde d'un générateur de
tonalité de 1 kHz dans le processeur de signal. Un seul audio de lancement est généré par
lancement ; c'est-à-dire qu'après
environ sept bips, aucun son de lancement n'est entendu de cet émetteur.

Le volume de l'audio de lancement est contrôlé par le bouton audio principal du RWR ainsi que par
le bouton audio ML dédié
dans chaque cockpit. Le volume résultant est fonction de la position des deux boutons.

## Symbologie

L'ALR-46 comporte un nombre limité de symboles pour les différentes menaces radar. Les symboles
suivants peuvent représenter les différentes menaces. L'ALR-46 peut enregistrer jusqu'à trois
fichiers contenant des tableaux
de menaces.

- Fichier terrestre (par défaut) - menaces terrestres et aériennes
- Dossier Mer - Menaces maritimes et aériennes
- Fichier de formation - menaces configurables supplémentaires (vide par défaut)

Le pilote peut basculer entre le fichier terrestre et le fichier de formation en appuyant
simplement sur le bouton SYS TEST (<num>8</num>) et, dans un délai d'une seconde, sur le bouton
TGT SEP (<num>7</num>). Un symbole T sera affiché dans la partie inférieure de l'azimut lorsque le
fichier de formation est sélectionné.
Pour passer au fichier marin, appuyez simplement sur le bouton SYS TEST (<num>8</num>) et, dans un
délai d'une seconde, sur le bouton INCONNU (<num>9</num>). Lorsque le fichier marin est sélectionné,
un symbole de navire sera affiché dans la moitié inférieure de l'azimut.

### Menaces terrestres et aériennes

<!-- markdownlint-disable MD013 -->

| Symbole | Menace possible |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![rwr_two_symbol.jpg](../../img/rwr_two_symbol.jpg) | SA-2 S-75 "Fan Song" TR |
| ![rwr_two_slashed_symbol.jpg](../../img/rwr_two_slashed_symbol.jpg) | SA-2 S-75 RD-75 Amazonka RF |
| ![rwr_three_symbol.jpg](../../img/rwr_three_symbol.jpg) | SA-3 S-125 « Low Blow » TR |
| ![rwr_five_symbol.jpg](../../img/rwr_five_symbol.jpg) | SA-5 S-200 "Square Pair" TR |
| ![rwr_six_symbol.jpg](../../img/rwr_six_symbol.jpg) | SA-6 Kub "Straight Flush" TR |
| ![rwr_seven_symbol.jpg](../../img/rwr_seven_symbol.jpg) | HQ-7 TR |
| ![rwr_eight_symbol.jpg](../../img/rwr_eight_symbol.jpg) | Osa 9A33 ln |
| ![rwr_ten_symbol.jpg](../../img/rwr_ten_symbol.jpg) | SA-10 S-300PS « Flap Lid » |
| ![rwr_eleven_symbol.jpg](../../img/rwr_eleven_symbol.jpg) | SA-11 9K37 Buk |
| ![rwr_15_symbol.jpg](../../img/rwr_15_symbol.jpg) | SA-15 9K331 Tor, SA-15B 9K332 Tor-M2 |
| ![rwr_19_symbol.jpg](../../img/rwr_19_symbol.jpg) | SA-19 2k22M Tunguska |
| ![rwr_a_symbol.jpg](../../img/rwr_a_symbol.jpg) | ZSU-23-4 Shilka |
| ![rwr_a_one_dot_symbol.jpg](../../img/rwr_a_one_dot_symbol.jpg) | Fire Can SON-9 |
| ![rwr_a_three_dot_symbol.jpg](../../img/rwr_a_three_dot_symbol.jpg) | Gepard, C-RAM Phalanx |
| ![rwr_h_symbol.jpg](../../img/rwr_h_symbol.jpg) | MIM-23 Hawk |
| ![rwr_p_slashed_symbol.jpg](../../img/rwr_p_slashed_symbol.jpg) | MIM-104 Patriot, SA-22 Pantsir |
| ![rwr_r_symbol.jpg](../../img/rwr_r_symbol.jpg) | Roland |
| ![rwr_s_symbol.jpg](../../img/rwr_s_symbol.jpg) | SA-5/10 "Tin Shield", SA-6 Kub "Straight Flush" SR, Roland SR, C-RAM Phalanx SR, PPRU-1 "Dog Ear", HQ-7 SR, Hawk CWAR, NASAMS, Rapier Dagger, SA-11 Snow Drift, SA-10 "Big Bird" et "Clam Shell", IRIS-T SLM |
| ![rwr_flat_triangle_symbol.jpg](../../img/rwr_flat_triangle_symbol.jpg) | E-3C Sentry, A-50 |
| ![rwr_triangle_symbol.jpg](../../img/rwr_triangle_symbol.jpg) | F-14, F-15C, F-15E, F-16, F-18C, JF-17, M-2000C, MiG-29, Su-27, MiG-31 |
| ![rwr_two_triangle_symbol.jpg](../../img/rwr_two_triangle_symbol.jpg) | F-1, AJS-37, F-4E, MiG-19, MiG-21, MiG-23, F-5E-3, Tornado IDS/GR4 |
| ![rwr_uncorrelated_missile.jpg](../../img/rwr_uncorr_msl.jpg) | AIM-54, AIM-120, SD-10, R-77 |
| ![rwr_u_one_dot_symbol.jpg](../../img/rwr_u_one_dot_symbol.jpg) | Inconnu (bande basse) |
| ![rwr_u_two_dot_symbol.jpg](../../img/rwr_u_two_dot_symbol.jpg) | Inconnu (bande moyenne) |
| ![rwr_u_three_dot_symbol.jpg](../../img/rwr_u_three_dot_symbol.jpg) | Inconnu (bande haute) |

### Menaces maritimes et aériennes

| Symbole | Menace possible |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![rwr_four_symbol.jpg](../../img/rwr_four_symbol.jpg) | Rezky, Pyotr Velikiy, Albatros, Neustrashimy |
| ![rwr_six_symbol.jpg](../../img/rwr_six_symbol.jpg) | CV 1143.5 Kuznetsov, croiseur de bataille Pyotr Velikiy, destroyer types 052B et 052C, frégate type 054A, type 071, frégate Neustrashimy |
| ![rwr_seven_symbol.jpg](../../img/rwr_seven_symbol.jpg) | Frégate type 054A, destroyer type 052B, type 071 |
| ![rwr_nine_symbol.jpg](../../img/rwr_nine_symbol.jpg) | CV 1143.5 Kuznetsov, croiseur Moskva, Molniya, projet 22160, projet 22160 avec Tor-M2KM, type 021-1 |
| ![rwr_a_two_dot_symbol.jpg](../../img/rwr_a_two_dot_symbol.jpg) | Classe Leander |
| ![rwr_a_three_dot_symbol.jpg](../../img/rwr_a_three_dot_symbol.jpg) | Classe Ropucha |
| ![rwr_c_symbol.jpg](../../img/rwr_c_symbol.jpg) | CVN-71 Theodore Roosevelt, CVN-72 Abraham Lincoln, CVN-73 George Washington, CVN-74 John C Stennis, CVN-75 Harry S. Truman, USS Forrestral, LHA Tarrawa |
| ![rwr_g_symbol.jpg](../../img/rwr_g_symbol.jpg) | O.H. Perry |
| ![rwr_p_slashed_symbol.jpg](../../img/rwr_p_slashed_symbol.jpg) | Ticonderoga, USS Arleigh Burke |
| ![rwr_s_symbol.jpg](../../img/rwr_s_symbol.jpg) | Rezky Head Net SR, Neustrashimy SR, Invincible SR, Leander SR, Slava Class SR, Kuznetsov SR, Ropucha SR |
| ![rwr_flat_triangle_symbol.jpg](../../img/rwr_flat_triangle_symbol.jpg) | E-3C Sentry, A-50 |
| ![rwr_triangle_symbol.jpg](../../img/rwr_triangle_symbol.jpg) | F-14, F-15C, F-15E, F-16, F-18C, JF-17, M-2000C, MiG-29, Su-27, MiG-31 |
| ![rwr_two_triangle_symbol.jpg](../../img/rwr_two_triangle_symbol.jpg) | F-1, AJS-37, F-4E, MiG-19, MiG-21, MiG-23, F-5E-3, Tornado IDS/GR4 |
| ![rwr_uncorrelated_missile.jpg](../../img/rwr_uncorr_msl.jpg) | AIM-54, AIM-120, SD-10, R-77 |
| ![rwr_u_one_dot_symbol.jpg](../../img/rwr_u_one_dot_symbol.jpg) | Inconnu (bande basse) |
| ![rwr_u_two_dot_symbol.jpg](../../img/rwr_u_two_dot_symbol.jpg) | Inconnu (bande moyenne) |
| ![rwr_u_three_dot_symbol.jpg](../../img/rwr_u_three_dot_symbol.jpg) | Inconnu (bande haute) |

<!-- markdownlint-enable MD013 -->

### Missiles

| Symbole | Menace possible |
| --------------------------------------------------- | -------------------- |
| ![rwr_corr_msl.jpg](../../img/rwr_corr_msl.jpg) | Missile corrélé |
| ![rwr_uncorr_msl.jpg](../../img/rwr_uncorr_msl.jpg) | Missile non corrélé |

## Indications de menace

Les systèmes d'armes fonctionnant tous de manière très différente, les indications RWR doivent
toujours être
interprétées individuellement par plateforme de menace. Cela nécessite de comprendre comment les
menaces attendues
fonctionnent, comment elles guident les missiles, si elles disposent de radars de recherche et de
suivi séparés ou similaires.

Le tableau suivant donne un aperçu de la façon dont le RWR indique certains événements pour les
menaces couramment rencontrées.

Les lancements réels de missiles ne peuvent être détectés que par la présence de signaux de guidage
en bande C/D, indiqués
par la lampe **LAUNCH**. C'est le cas de certains systèmes SAM. Quelques missiles radar à guidage
actif
peuvent être identifiés individuellement et seront affichés avec des symboles de missile
spécifiques.

Au-delà de ces indications claires, les lancements de missiles sont souvent précédés par le fait
que la plateforme cible
active un radar de suivi spécifique ou augmente considérablement son PRF, ce que le RWR choisit
souvent
de détecter en jouant une tonalité **New-Guy** (3 bips courts). L'activation du mode **HANDOFF**
rend souvent la
tonalité PRF aiguë clairement audible.

> 💡 La présence d'un radar de poursuite n'indique pas nécessairement un verrou, que la plateforme d'armes
> ait l'intention de tirer ou que son propre avion soit la cible. Cependant, dans la pratique, c'est très souvent
> le cas.

> 💡 Les symboles **S** et **U** nécessitent respectivement d'activer les modes **RECHERCHE** et **INCONNU** pour
> être affichés à l'écran.

> 💡 Les menaces suivantes et leurs indications (hors lancement) sont applicables uniquement pour le
> tableau de menaces respectif que l'ALR-46 utilise actuellement. Par exemple, le suivi du Rezky
> le radar s'affichera sous la forme d'un **4** sur le fichier marin (comme indiqué ci-dessous) mais s'affichera sous la forme d'un **8** lorsque
> en utilisant le fichier terrestre. Il est important d'utiliser le tableau des menaces approprié pour les menaces attendues,
> ou une confusion peut survenir.

### Terre

| Menace | Rechercher | Suivi/Verrouillage | Lancement |
| ------- | ------------- | ---------- | ----------------------------- |
| SA-2 | S | 2 | 🟢 |
| SA-3 | S | 3 | 🟢 |
| SA-5 | S | 5 | ❌ |
| SA-6 | S | 6 | ❌ |
| HQ-7 | S | 7 | ❌ |
| SA-8 | U | 8 | ❌ |
| SA-10 | S | 10 | ❌ |
| SA-11 | S | 11 | ❌ |
| SA-13 | U | ❌ | ❌ |
| SA-15 | U | 15 | 🟢 |
| SA-19 | U | 19 | ❌ |
| SA-22 | U | P | ❌ |
| Hawk | S (CWAR uniquement) | H | ❌ |
| Patriot | P | Changement de PRF | ❌ |
| Rapier | S | ❌ | ❌ |
| Roland | S | R | ❌ |
| NASAMS | S | ❌ | Suivi AIM-120 🟢, autre ❌ |

### Mer

> 💡 La majorité des navires de guerre disposent de plusieurs radars pour leurs multiples systèmes d'armes. Seuls certains
> d'entre eux sont inclus dans la bibliothèque de menaces du RWR, donc seule la menace la plus prioritaire est affichée
> dans la colonne de verrouillage du tableau ci-dessous.

| Menace | Rechercher | Verrouiller | Lancement |
| -------------------------- | -------------------------- | ---- | ------ |
| Rezky | S (Plusieurs radars certains U) | 4 | ❌ |
| Kirov | S (Plusieurs radars certains U) | 4/6 | ❌ |
| Slava | S (Plusieurs radars certains U) | 6/9 | ❌ |
| Kuznetsov | S (Plusieurs radars certains U) | 6 | ❌ |
| Molniya | U (Plusieurs radars dont certains U) | 9 | ❌ |
| Grisha | S (Plusieurs radars certains U) | 4 | ❌ |
| Neustrashimy | S (Plusieurs radars certains U) | 4/6 | ❌ |
| Ropucha | S (Plusieurs radars certains U) | 4 | ❌ |
| Projet 22160 | 9 | 9 | ❌ |
| Projet 22160 avec Tor-M2M | 9 | 9 | ❌ |
| Type 021-1 | 9 | 9 | ❌ |
| Type 052B | S (Plusieurs radars certains U) | 6/7 | ❌ |
| Type 052C | U | 6 | ❌ |
| Type 054A | U | 7 | ❌ |
| Type 071 | U | 6/7 | ❌ |
| Ticonderoga | P | P | ❌ |
| Arleigh Burke | P | P | ❌ |
| Oliver Hazard Perry | G | G | ❌ |
| Forrestal | U | C | ❌ |
| Nimitz | U | C | ❌ |
| Tarawa | U | C | ❌ |
| La Combattante II | U | U | ❌ |
| Leander | S (Plusieurs radars certains U) | A.. | 🟢 |
| Castle | U | ❌ | ❌ |
| Invincible | S (Plusieurs radars certains U) | ❌ | ❌ |
| Veinticinco de Mayo | U | ❌ | ❌ |
| Condell | U | ❌ | ❌ |
| Tiger | U | ❌ | ❌ |

### Air

| Menace | Rechercher | Verrouiller | Lancement |
| ------------------- | ------ | ---------- | ----------------------------- |
| MiG-19 | 🟢 | Changement de PRF | ❌ |
| MiG-21 | 🟢 | Changement de PRF | ❌ |
| MiG-23 | 🟢 | Changement de PRF | ❌ |
| MiG-29 | 🟢 | Changement de PRF | Suivi R-77 🟢, autre ❌ |
| Su-27/30/33/34/J-11 | 🟢 | Changement de PRF | Suivi R-77 🟢, autre ❌ |
| JF-17 | 🟢 | Changement de PRF | Suivi SD-10 🟢, autre ❌ |
| F-4 | 🟢 | Changement de PRF | ❌ |
| F-5 | 🟢 | Changement de PRF | ❌ |
| F-14 | 🟢 | Changement de PRF | Suivi AIM-54 🟢, autre ❌ |
| F-15 | 🟢 | Changement de PRF | Suivi AIM-120 🟢, autre ❌ |
| F-16 | 🟢 | Changement de PRF | Suivi AIM-120 🟢, autre ❌ |
| F-18 | 🟢 | Changement de PRF | Suivi AIM-120 🟢, autre ❌ |
| Mirage F1 | 🟢 | Changement de PRF | ❌ |
| Mirage 2000C | 🟢 | Changement de PRF | ❌ |

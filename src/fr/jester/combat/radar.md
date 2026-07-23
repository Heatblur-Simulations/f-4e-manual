# Radar

Pendant le vol, Jester fera constamment fonctionner le radar et recherchera des contacts.

Dans certaines situations, comme lors de l'atterrissage, au sol ou lors de l'exécution
AAR, le radar sera en mode veille. Cela peut également être commandé manuellement
en sélectionnant `Radar > Operation > Go Cold` dans l'interface utilisateur.

![Sélectionner le mode de fonctionnement](../../img/jradar_operation_options.jpg)

Lors de l'utilisation du radar, Jester fait généralement la distinction entre deux phases :

- Balayage
- Verrouillage

Les phases sont commandées et commutées par le pilote à l'aide de l'action contextuelle.

De plus, Jester se comportera différemment lors d'un combat aérien, indiqué par le
pilote entrant en mode CAGE.

<iframe width="560" height="315" src="https://www.youtube.com/embed/0rIbt3GPbso?si=FutGOKAZdAlsv_bZ"
title="DCS F-4 Phantom - Guide air-air Jester" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Balayage

C'est la phase par défaut dans laquelle se trouvera Jester. Il pointera automatiquement le
antenne à différentes altitudes et portées afin de balayer tout l'espace
devant l'avion.

Jester identifiera automatiquement tout nouveau contact et le signalera au
pilote.

S'il le souhaite, le joueur peut demander à Jester d'effectuer un défi IFF manuellement
à tout moment via l'interface utilisateur (cette action peut également être liée directement à une
touche). Cela inclut des options pour interroger à la fois avec le
[AN/APX-76](../../systems/identification_systems.md#anapx-76) et le
[système Combat-Tree AN/APX-81A](../../systems/identification_systems.md#anapx-81a-combat-tree),
ou pour utiliser l'AN/APX-76 uniquement.

Si la situation l'exige, le joueur peut définir manuellement une zone pour que Jester la
balaye en dehors de son schéma habituel via l'interface utilisateur.

![Sélectionner la zone de balayage](../../img/f4_jester_scan_zones.jpg)

Il balayera ensuite cette zone pendant un moment avant de retourner à son
schéma habituel.

De même, la plage d'affichage et le type de balayage (large ou étroit) à utiliser pendant
le balayage peuvent également être sélectionnés.

![Sélectionnez les paramètres d'affichage](../../img/jradar_select_display.jpg)

### Sélection de la cible

Chaque fois qu'un bandit devient une menace (à moins de 25 nm), Jester
**sélectionne** automatiquement la cible en déplaçant et en gardant le curseur sur le
retour radar correspondant.

Le joueur peut commander la sélection de cible à tout moment en utilisant les actions
contextuelles. De cette façon, des cibles situées en dehors de la zone de menace peuvent également
être sélectionnées.

![Curseur sur la cible](../../img/jradar_scan_cursor_on_target.jpg)

Chaque fois qu'une cible à portée de menace est sélectionnée, Jester la **concentrera**,
arrêtera le schéma de recherche habituel, passera automatiquement en vue étroite et pointera
l'antenne sur la cible afin de maximiser la qualité du suivi.

![Concentré sur la cible](../../img/jradar_focus.jpg)

Ce mode peut être compris comme _"Track While Scan"_, où Jester conserve le
radar sur un contact spécifique, tout en scrutant l'espace environnant,
identifiant et signalant tout nouveau contact repéré.

Les actions contextuelles permettent uniquement la sélection d'avions hostiles. Si la situation
l'exige, d'autres cibles peuvent toujours être ciblées directement via l'interface utilisateur à
la place.

![Concentré sur la cible](../../img/jradar_ui_focus.jpg)

La sélection automatique de la cible et le comportement de mise au point peuvent être désactivés
dans l'interface utilisateur. Cela peut être utile si vous survolez une zone hostile, en attendant
des contacts, sans vouloir les engager et en préférant garder une vue d'ensemble et poursuivre le
schéma de balayage. Par exemple lorsqu'on dispose d'une escorte de chasseurs qui s'occupera
des bandits à la place.

![Désactiver la mise au point automatique](../../img/jradar_operation_options.jpg)

### Action contextuelle

| Durée | Action contextuelle |
| -------- | -------------------------------------- |
| • | Sélectionnez la cible suivante |
| ▄ | **Verrouiller** la cible actuellement sélectionnée |
| •• | Réinitialiser la sélection de cible |

À moins qu'un seul bandit n'apparaisse à l'écran, le verrouillage via ▄ (long) nécessite
sélection préalable de la cible. Soit automatiquement via Jester, soit en utilisant •
(court). Dans une situation ambiguë, appuyer sur ▄ (long) sélectionnera d'abord le
cible ayant la plus haute priorité.

Appuyer sur •• (double) réinitialisera la cible actuellement sélectionnée et retournera Jester
à son comportement standard consistant à sélectionner automatiquement la menace la plus élevée, le
cas échéant.
Si l'on souhaite ignorer une cible à portée de menace, la mise au point automatique de la cible
doit d'abord être désactivée via l'interface utilisateur. •• (double) peut ensuite être enfoncé
pour désélectionner la cible.

## Verrouillage

Lors d'un verrouillage, Jester fait fonctionner le radar pour maintenir le verrouillage le plus
longtemps possible.

![Cible verrouillée](../../img/jradar_locked.jpg)

L'interface utilisateur permet également de sélectionner une cible à verrouiller manuellement
sans utiliser l'action contextuelle.

![Verrouiller la cible manuellement](../../img/jradar_ui_lock.jpg)

Si un contact disparaît pendant que Jester tente de le verrouiller, il attendra quelques
secondes que le retour radar réapparaisse.

| Durée | Action contextuelle |
| -------- | --------------------------------------- |
| •, ▄ | Supprimez le verrouillage, mais gardez la cible **en visée** |
| •• | Déverrouillez et perdez la visée |

> 💡 Si un verrouillage est défectueux et que Jester ne le remarque pas (par exemple
> mouvement du point de direction ou lectures inattendues du taux de fermeture), appuyez sur ▄ pour
> déverrouiller, puis à nouveau ▄ pour tenter de verrouiller à nouveau la cible.

## Combat aérien

Une situation à portée visuelle est entrée par le pilote activant le mode CAGE ou
BORESIGHT.

CAGE est entré en appuyant sur le bouton CAGE de l'accélérateur, BORESIGHT peut être
sélectionné à partir de la roue Jester.

Dans ce mode, le radar est automatiquement orienté vers l'avant et Jester sera
capable de verrouiller un retour.

De plus, le pilote peut entrer en mode CAA où le système verrouillera automatiquement
tout contact proche.

| Durée | Action contextuelle |
| -------- | ---------------------------- |
| • | Sélectionnez l'aspect cible suivant |
| ▄ | Verrouiller ou déverrouiller le contact à l'avance |
| •• | Quitter le mode CAGE ou BORESIGHT |

Pour verrouiller une cible en mode CAGE, appuyez sur ▄ (long) une fois prêt. Jester va maintenant
verrouiller automatiquement le premier retour cible qu'il peut identifier. Si aucune cible ne peut
être trouvée en quelques secondes, Jester abandonnera le processus et ▄ devra être
utilisé à nouveau.

> 💡 Les cibles doivent se trouver à moins de 5 degrés de l'axe de visée, sinon une tentative de
> verrouillage entraînerait un mauvais verrouillage. Lorsque Jester ne verrouille pas encore le
> retour, c'est parce qu'il attend que le pilote l'y place d'abord.

### Aspect cible

Pour permettre des tirs sans verrouillage (« flood ») avec le Sparrow, le pilote peut indiquer
à Jester l'aspect des cibles.

![Aspect de la cible en visée](../../img/jwheel_boresight_option.jpg)

Avec le paramètre correct sélectionné, un Sparrow peut être lancé et devrait pouvoir
pour suivre la cible sans obtenir au préalable un verrouillage radar.

Les options ne peuvent être utilisées qu'en mode BORESIGHT ou CAGE, en utilisant Context
Action • (court) basculera entre tous les paramètres d'aspect dans l'ordre :

- NEZ (par défaut)
- AVANT
- ARRIÈRE
- QUEUE
- LARGE

L'option par défaut est NOSE, pour permettre une réaction rapide à une menace venant
droit sur le Phantom.

> 💡 En raison de la difficulté de sélectionner le bon aspect, ainsi que le
> la cible se déplaçant et changeant donc d'aspect après le lancement, de telles attaques
> fournissent généralement une probabilité de réussite plutôt faible. Cependant, cela peut être le seul
> option dans certaines situations, comme les combats à très basse altitude.

<iframe width="560" height="315" src="https://www.youtube.com/embed/krnmdPE_xUc?si=2EFeiSNCdhcDosk2"
title="DCS F-4E - Mode Boresight, AIM-7 et Speedgates [Essentiel]" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

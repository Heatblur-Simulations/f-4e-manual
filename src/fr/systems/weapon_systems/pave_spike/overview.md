# Pave Spike

![pave_spike_pod](../../../img/ext_f4_pavespike.jpg)

Le pod de ciblage AN/AVQ-23 Pave Spike est le successeur du AN/AVQ-10 Pave
Knife et le prédécesseur du pod AN/AVQ-26 Pave Tack. Il est entré en service en 1974
et a été remplacé de 1982 à 1989 par le pod Pave Tack. Il fournit une image TV
orientable pour repérer les cibles au sol, et peut tirer un laser pour déterminer des
informations de portée et pour guider les armes à guidage laser.

![pave_spike_screen_example](../../../img/pave_spike_screen_example.jpg)

La ligne de visée peut être contrôlée par le WSO, à l'aide de la commande manuelle de l'antenne.
L'image de la caméra est affichée sur l'oscilloscope DSCG et peut être visualisée indépendamment
par le pilote et le WSO.

<iframe width="560" height="315" src="https://www.youtube.com/embed/FZNtAqOZGgA?si=NF-cch48e-RkmHRy"
title="DCS : F-4E Phantom : Pave Spike + Tutoriel sur les bombes à guidage laser" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Pod de ciblage

Le système dispose d'une caméra optique pour un fonctionnement à la lumière du jour avec un niveau
de
zoom optique, pour un champ de vision large et étroit (4x).

Les limitations des cardans du pod sont

- Roulis : -160 à +110 degrés
- Pas : -160 à +15 degrés
- Lacet : -15 à +15 degrés

![pave_spike_roll_limit](../../../img/pave_spike_roll_limit.jpg)
![pave_spike_elev_limit](../../../img/pave_spike_elev_limit.jpg)

## Symbologie

L'image TV est principalement constituée d'un réticule. Le réticule tourne dans le sens des
aiguilles d'une montre pour indiquer l'élévation actuelle du pod. Lors d'une rotation de 90
degrés, le pod regarde tout droit vers le bas. Si le réticule est presque à l'envers, le pod a
atteint sa limite de cardan en élévation (160 degrés).

Le large champ de vision est indiqué par un cercle autour du réticule.

À gauche, l'image affiche deux indices :

- Indice de temps restant (TTg)
- Indice de largage (T0)

Pendant le fonctionnement de l'arme, TTg descend jusqu'à ce qu'il croise T0, indiquant le
temps avant largage, jusqu'à 15 secondes maximum.

![pave_spike_symbologie](../../../img/pave_spike_symbology.jpg)
![pave_spike_symbology_fov](../../../img/pave_spike_symbology_fov.jpg)

Les indices indiquent également diverses situations liées au fonctionnement du laser.

| Indications | T0 | TTG |
| ------------- | ------------------------------------- | --------------------------------------- |
| non affiché | pas en mode TRACK | pas en mode TRACK |
| fixe | commandé pour tirer le laser (action complète) | tir laser, portée acceptée |
| clignotement rapide | pas commandé pour tirer le laser | ne tire pas le laser, ou cible trop éloignée |
| clignotement lent |                                       | tir laser, mais portée rejetée |

## Contrôles

Le WSO interagit principalement avec le Pave Spike, tandis que le pilote dispose
d'indicateurs l'aidant à maintenir la ligne de visée du pod dans ses limites.

L'ensemble du système, connu sous le nom de système de désignation de cible électro-optique
AN/ASQ-153,
se compose de :

- Indicateur de portée (pilote)
- Indicateur d'azimut-élévation (pilote)
- Contrôle du codeur laser (WSO)
- Contrôle de l'ensemble de désignation de cible (WSO)

Alors que l'affichage est affiché sur les écrans DSCG dans les deux cockpits.

![Présentation du système pilote](../../../img/pilot_pave_spike_overview.jpg)
_(<num>1</num>) Indicateur de plage, (<num>2</num>) Boutons de contrôle de la luminosité,
(<num>3</num>) affichage DSCG, (<num>4</num>) indicateur d'azimut-élévation (LOS),
(<num>5</num>) Bouton de sélection d'arme_

![WSO Présentation du système](../../../img/wso_pave_spike_overview.jpg) _(<num>1</num>)
Bouton de sélection vidéo, (<num>2</num>) affichage DSCG, (<num>3</num>) boutons de
commande DSCG, (<num>4</num>) commandes de désignation de cible, (<num>5</num>) désignateur
de code laser, (<num>6</num>) commande manuelle de l'antenne_

### Indicateur d'azimut-élévation

L'indicateur d'azimut et d'élévation est le principal instrument permettant au pilote d'évaluer
l'attitude actuelle du pod afin de garder la ligne de visée dans les
limites opérationnelles.

![EOLos](../../../img/pilot_los_indicator.jpg)

L'aiguille indique la position de roulis du pod de -160 (CW) à +110 (CCW) degrés.

Trois drapeaux indiquent l'élévation :

- vert : -120 à -155 degrés
- jaune : -155 à -160 degrés
- rouge : -160 degrés ou au-delà

> 💡 Si l'aiguille est maintenue dans la plage indiquée en vert et que ni le drapeau
> jaune ni le rouge ne sont affichés, la vue ne sera pas obstruée par le pod ou
> l'avion.

### Indicateur de portée

Ce panneau fournit au pilote une lecture de la plage d'inclinaison mesurée par le
Pave Spike (x100 pi).

![indicateur_de plage](../../../img/pilot_overhead_range_indicator.jpg)

Lorsque le bouton de test (<num>3</num>) est enfoncé, l'écran affiche 888, le bouton
en dessous (<num>5</num>) contrôle la luminosité de l'affichage.

Le bouton de mode (<num>1</num>) permet au pilote de sélectionner l'une des deux armes
modes de livraison disponibles avec le pod :

- WRCS - Livraison automatique
- ROR - Largage à portée

En position SET, l'écran affiche la portée de déclenchement souhaitée, utilisée dans le mode
ROR. Le bouton situé sous l'affichage (<num>4</num>) peut être utilisé pour régler cette portée.

### Contrôle du codeur laser

Le WSO peut définir le code laser utilisé par le module de ciblage en utilisant les quatre petits
boutons-poussoirs (<num>1</num>) sur ce panneau. Chaque pression fera avancer le
chiffre correspondant d'une unité. Une fois qu'un code a été défini, il peut être transféré vers
le Pave Spike en appuyant sur le bouton Entrée (<num>2</num>) à droite.

![laser_coder_control](../../../img/wso_laser_code_control.jpg)

Le système Laser Coder commence à valider le code saisi, ce processus prend
environ 5 secondes. Si le voyant NO-GO est allumé, le code n'est pas valide.

> 💡 Les codes se rapportent directement aux fréquences des lasers, ce qui impose qu'ils soient
> compris entre 1111 et 1788 et n'utilisent pas les chiffres 0 ou 9 pour être valides.

Lorsque le système est mis sous tension, il initie automatiquement un transfert de
le code actuellement défini.

### Ensemble de contrôle de désignation de cible

Il s'agit du panneau principal pour interagir avec le module de ciblage.

![target_des_panel](../../../img/wso_target_designator_controls.jpg)

De gauche à droite, de haut en bas, il fournit au WSO :

- Bouton de luminosité du réticule (<num>1</num>) - changer le réticule du noir au
  vert
- Boutons de visée Az/El/Roll (<num>2</num>,<num>3</num>,<num>4</num>) - régler
  la position d'alignement du pod à ± 2,5 degrés près
- Bouton de rangement (<num>5</num>) – Ranger ou déployer le pod
- Bouton LASER READY (<num>6</num>) - Armer ou désarmer le laser
- Bouton de mise sous tension (<num>7</num>) – Allumer ou éteindre le pod
- BIT actuellement sélectionné, avec bouton poussoir pour avancer le BIT (<num>8</num>)
- Bouton de luminosité de la lumière (<num>9</num>) - ajuster la luminosité de toutes les lumières
  de ce
  panneau (sauf le témoin de surchauffe)
- Bouton Rejeter/Annuler (<num>10</num>) - Forcer l'utilisation de la portée oblique du laser
- Commutateur de mode d'acquisition (<num>11</num>) - Sélectionner le mode d'acquisition (12-VIS,
  WRCS ou 9-VIS)
- Bouton de sortie WRCS (<num>12</num>) – Activer l'intégration de WRCS avec le pod
- Lampe GO/MALF (<num>13</num>) - Indique les résultats BIT
- Bouton de sortie INS (et voyant de surchauffe) (<num>14</num>) - Basculer l'intégration INS
  avec le pod

Les lampes indiquent généralement l'état actuel, tandis que les boutons-poussoirs peuvent être
utilisés comme commande manuelle. Par exemple, appuyer sur le bouton LASER READY ne suffit pas
pour que le laser soit réellement prêt. La lampe ne s'allumera que si toutes les autres
conditions, comme la définition d'un code laser valide, sont remplies.

### Commande manuelle d'antenne

En mode Track, le WSO peut orienter et corriger manuellement la ligne de visée du pod
avec la commande manuelle de l'antenne ou le bâton d'antenne.

![pave_spike_antenna_hand_control](../../../img/wso_antenna_hand_control_overview.jpg)

Le bouton Challenge (<num>1</num>) est utilisé pour zoomer ou dézoomer, tandis que la gâchette
à 2 temps (<num>3</num>) est utilisée pour basculer entre les modes et tirer le laser. Le
curseur (<num>2</num>) ne propose aucune fonctionnalité avec le Pave Spike.

> 💡 Les contrôles ne sont **pas** inversés. Déplacer le stick vers le haut déplace également la vue vers le haut
> (_à cabrer_).

> 💡 Le calcul du pod est assez limité ; ne déplacez pas le réticule au-dessus de la ligne de
> référence de l'avion (en regardant vers le haut), sinon les commandes s'inverseront et le pod
> ne pourra pas calculer correctement les coordonnées de la cible.

Le déclencheur fonctionne légèrement différemment s'il est utilisé pour le Pave Spike, par rapport
au radar ou à d'autres systèmes d'aéronef. Pour tirer le laser, au lieu de simplement maintenir
la gâchette enfoncée, il faut effectuer la séquence complète et déplacer la gâchette
à travers toutes ses étapes, aller et retour, c'est-à-dire de _Released_ à _Half Action_, à
_Full Action_, puis retour à _Half Action_ et _Released_. Terminer cette séquence
activera ou désactivera le laser. Pour entrer en mode Track, il faut effectuer la
séquence de _Released_ à _Half Action_ puis revenir à _Released_. Maintenir la gâchette
enfoncée à un point quelconque n’activera pas l’action liée.

> 💡 Nos liaisons fournies veillent à exécuter correctement la séquence. Pour les déclencheurs
> physiques à 2 temps, utilisez les liaisons à 2 temps correspondantes.

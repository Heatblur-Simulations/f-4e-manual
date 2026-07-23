# Système radar

*"Je vais vous dire, il y a un bon radar à l'intérieur, l'APQ-120,
vous pouvez peindre la peau d'un skeeter à 200 milles ou d'un chasseur furtif."*

![Antenne radar](../../img/radar_dish_nose.jpg)
*Un technicien travaille sur le radar de conduite de tir AN/APQ-120(V) dans le nez
d'un avion F-4E Phantom II de la 3e Escadre de chasse tactique*

<iframe width="560" height="315" src="https://www.youtube.com/embed/s2YY2gQ76cw?si=iM_6_X8QK31sh0BM"
title="DCS : F-4E - Épisode IV - RADAR Pt. 1 - Bases et théorie" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Le radar de conduite de tir Westinghouse AN/APQ-120, une continuation du -100
du F-4C et du 109 du 4D, est un radar à impulsions à semi-conducteurs fournissant
au F-4E une fonctionnalité d'interception air-air, la cartographie air-sol, la
fourniture de référence de cible au sol aux systèmes de bombardement LABS et
WRCS, ainsi qu'une capacité de balise radar. L'APQ-120 fonctionne également
comme système d'affichage pour TISEO et l'imagerie d'armes guidées TV, et est
intégré au
[Système d'interrogation APX-80](../identification_systems.md#interrogator-systems).

La conversion principale de l'APQ-109 à l'APQ-120 comprenait une réduction du
nombre d'unités remplaçables sur site dans le nez, ainsi que la réduction de leur
taille; alors que le -109 avait été un hybride dans son évolution vers l'état solide
(principalement dans les sections de traitement basse tension), le 120 était un
système entièrement à semi-conducteurs. Bien que cette mise à jour ait réduit
l'encombrement et le poids du système, la modification du nez du F-4 pour inclure
le [canon M61](../../stores/guns.md#internal-cannon-m61a1-vulcan) nécessitait une
réduction de la taille de l'antenne, entraînant une diminution marginale de la
portée de détection globale. Cependant, compte tenu de l'augmentation de la
fiabilité du système et de la réduction de la maintenance, le compromis a été
jugé acceptable.

À partir de la production du bloc 60 du F-4E, et rétrofité sur certains avions
de blocs antérieurs, fut ajouté l'affichage du Digital Scan Converter Group
(DSCG). L'ajout du DSCG a augmenté la facilité globale d'utilisation de
l'APQ-120 en ajoutant directement des informations supplémentaires sur
l'écran, notamment le réglage actuel de la portée radar et la valeur de
vitesse de rapprochement calculée par rapport à la cible acquise. De plus, la
clarté de l'affichage dans toutes les conditions d'éclairage a été améliorée
en intégrant les grilles de référence radar directement dans l'image
affichée, plutôt que d'utiliser les marquages auparavant présents sur le
verre du DVST. En outre, le DSCG a permis aux deux membres d'équipage
d'utiliser les écrans de manière indépendante ; auparavant, le WSO contrôlait
quel mode s'affichait à la fois sur le DVST et sur le répétiteur du siège
avant. Avec le DSCG, le pilote pouvait utiliser le TISEO ou des armes
air-sol guidées par TV pendant que le WSO maintenait un schéma de balayage
ou trouvait un point de référence au sol et l'insérait dans le WRCS.

![écran_radar](../../img/radar_screen.jpg)

## Principe

L'APQ-120 est un radar à impulsions. Le radar transmet une impulsion radio focalisée
dans une direction via l'antenne.

Tout obstacle dans cette direction, par exemple un autre avion ou simplement le sol,
réfléchira une partie de l'énergie, que le radar reçoit ensuite via
l'antenne pour être traitée et évaluée par l'équipage.
En fonction du temps qu'il a fallu au signal pour revenir, le radar
calcule la distance à l'obstacle.

Tous les retours radar sont alors affichés à l'écran **en fonction de leur distance**,
résultant en une représentation **directe** et **non filtrée** du monde
devant l'avion.

Cependant, comme l'émetteur n'est pas un appareil parfait, l'énergie est transmise
dans toutes les directions, l'accent étant mis principalement sur la direction vers
laquelle l'antenne pointe. C'est ce qu'on appelle le **lobe principal** de
l'antenne, tandis que les autres retours indésirables provenant d'autres
directions sont appelés **lobes latéraux**.

![Radar à lobes](../../img/radar_lobes.jpg)

| Étiquette | Descriptif |
| :---: | ------------------------------ |
|   a | Cibles du lobe principal |
|   b | Fouillis de sol provenant du lobe principal |
|   c | Fouillis de sol provenant des lobes latéraux |

Vu de l'extérieur, la même situation se présente comme suit.

![Vue extérieure de la situation](../../img/radar_lobes_outside.jpg)

| Étiquette | Descriptif |
| :---: | ------------------------------ |
|   a | Avion propre |
|   b | Direction de l'antenne |
|   c | Cibles du lobe principal |
|   d | Fouillis de sol provenant du lobe principal |
|   e | Fouillis de sol provenant des lobes latéraux |

# Système VOR/ILS

![ext_vor_ils_beacon](../../img/ext_vor_ils_beacon.jpg)

Le système d'atterrissage aux instruments à portée omnidirectionnelle VHF, ou VOR/ILS, fournit
informations précises sur le relèvement et l'écart de route provenant d'une station émettrice
au sol. De plus, l'avion est capable d'utiliser les capacités d'approche et de descente
d'atterrissage de précision sur les terrains équipés d'un localisateur. Les informations de
guidage du système VOR/ILS sont fournies au pilote sur le BDHI, l'ADI et le HSI. La fonction
VOR/ILS est activée sur ces afficheurs à l'aide des sélections appropriées du groupe directeur
de vol sur le sélecteur relèvement/distance, le sélecteur de mode de navigation et le commutateur
du directeur de vol.

## Système ILS

Le système ILS est conçu pour détecter les écarts par rapport à la trajectoire d'approche
d'atterrissage désignée et relayer ces informations à l'avionique sélectionnée dans l'avion.

Lorsque le mode ILS approprié
est sélectionné sur le panneau de sélection des fonctions de navigation, plusieurs instruments
fournissent des conseils
pour une approche de précision. Il s'agit notamment de l'indicateur d'écart sur l'indicateur
de situation horizontale (HSI), qui montre l'alignement latéral avec la piste, et l'indicateur
de pente de descente sur l'ADI, qui affiche l'angle de descente vertical par rapport à la
trajectoire de descente idéale.

De plus, si le directeur de vol est activé, des indices de pilotage seront fournis par les
aiguilles sur l'indicateur directeur d'attitude (ADI), offrant un guidage visuel en tangage et
en roulis pour maintenir la trajectoire d'approche correcte.

Dans le cockpit arrière, les écarts horizontaux et verticaux sont tous deux présentés sur
l'indicateur de cap.

Les écarts maximaux typiques sont de ±2,5 degrés pour le localizer et de ±0,7 degrés
pour la pente de descente.

<iframe width="560" height="315" src="https://www.youtube.com/embed/0fQRn_9fC3c?si=GPJAuCtfy3YUhAaa"
title="F-4 Phantom | Visibilité nulle ILS Atterrissage | DCS" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Balises de marquage

Si des balises de marquage sont positionnées le long de la trajectoire d'approche, le système de
l'avion émettra un signal sonore et allumera le feu de balise de marquage correspondant lorsqu'il
passe au-dessus de chacune d'elles.
Selon la configuration spécifique d'un aéroport, il peut y avoir :

- Marqueur extérieur : identifié par une tonalité grave et continue.
- Marqueur du milieu : reconnu par une tonalité audio alternée plus aiguë. Ce marqueur indique
  une plus grande proximité de la piste, généralement à l'altitude de décision pour l'atterrissage.
- Marqueur intérieur : caractérisé par un ton très aigu ou une série de points aigus.
  Ce marqueur n'est pas toujours présent mais, lorsqu'il l'est, il signifie une position encore
  plus proche de l'extrémité de piste.

## Panneau de commande VOR/ILS

![pilot_vor_ils_panel](../../img/pilot_vor_ils_panel.jpg)

Le panneau de commande du VOR/ILS se trouve sur la console gauche du cockpit avant ;
le panneau comprend un indicateur de fréquence, deux boutons de sélection de fréquence
(<num>2</num>), un volume
(marqué NAV VOL) (<num>1</num>), un bouton de contrôle du volume de la balise de marquage (MB VOL)
(<num>3</num>), et un
Bouton poussoir VOL/MRK TEST (<num>4</num>).

### Boutons de sélection de fréquence VOR/ILS

Le bouton de sélection de fréquence (<num>2</num>) est un bouton concentrique à double
actionnement ; la bague extérieure
sélectionne le nombre à gauche du point décimal sur l'indicateur de fréquence,
tandis que le bouton intérieur sélectionne les chiffres à droite.

![dcs_map_vor_ils](../../img/dcs_map_vor_ils.jpg)

En DCS, pour trouver la fréquence VOR/ILS souhaitée de votre cible, allez sur la Carte et
cliquez sur un aérodrome vers lequel vous souhaitez voler. Si disponible,
Les fréquences VOR et ILS seront répertoriées.

> 💡 Tous les aérodromes ne disposent pas d'une station VOR ou d'un système ILS.

Le système est conçu pour détecter automatiquement si une fréquence accordée correspond
à une station VOR ou à un localizer ILS. VOR fonctionne dans une plage de fréquences de 108 MHz
à 117,95 MHz. La plage de fréquences du localisateur ILS va de 108,1 MHz à 111,95 MHz.

Dans la région des fréquences partagées, les stations VOR fonctionnent généralement sur des
fréquences avec
un dixième pair de la plage (par exemple 108,2 MHz, 108,4 MHz, etc.), tandis que le localisateur ILS
les fréquences sont attribuées aux dixièmes impairs, y compris les centièmes de MHz
(par exemple 108,1 MHz, 108,3 MHz, 108,35 MHz, etc.).

Le composant de pente de descente de l'ILS fonctionne dans une plage de fréquences de 329,3 MHz à
335,0 MHz.
Ces fréquences sont associées à leurs fréquences d'alignement de piste correspondantes, garantissant
qu'il n'est pas nécessaire de procéder à un réglage manuel séparé. Lorsqu'une fréquence de
localisation est sélectionnée,
la fréquence de pente de descente associée est automatiquement réglée, offrant un guidage latéral
et vertical intégré (si disponible) pour les approches de précision.
La balise de marquage associée au système ILS fonctionne à une fréquence de 75 MHz.

![ILS pente de descente](../../img/ils_glideslope.jpg)

### Bouton-poussoir de test VOR/MKR

Une fois qu'une fréquence ILS a été sélectionnée sur l'indicateur de fréquence, appuyer sur le
bouton-poussoir VOR/MKR Test (<num>4</num>) provoque l'allumage des feux de balise de marquage.
Si une fréquence VOR est sélectionnée, qu'un signal VOR valide est présent, qu'un cap de 315° est
sélectionné sur le sélecteur de cap du HSI et que le mode HSI est en VOR/ILS, un test peut être
lancé. Appuyer sur le bouton-poussoir de test provoque le déplacement au centre de l'indicateur
d'écart de cap sur le HSI (avec une erreur maximale admissible de ±4°), l'indication TO sur
l'indicateur « to-from » du HSI, l'allumage des feux de balise de marquage, ainsi que le
basculement à 315° des indicateurs de relèvement sur le HSI et le BDHI.

### Bouton NAV VOL et bouton MB VOL

Le bouton NAV VOL (<num>1</num>) active à la fois le système VOR/ILS et contrôle le
volume sonore pour le cockpit avant. Le bouton est tourné dans le sens des aiguilles d'une montre
pour mettre le système sous tension, puis davantage pour augmenter le volume. Le bouton MB VOL (<num>3</num>) règle le
volume de l'audio de la balise de marquage dans le cockpit avant.

## Indicateur de cap du WSO

![wso_course_indicator](../../img/wso_course_indicator.jpg)

Dans le cockpit arrière se trouve l'indicateur de cap, sur le tableau de bord principal ; pendant
une approche ILS, l'indicateur affiche le cap relatif pour le cap défini dans la
fenêtre de sélection de parcours, ainsi que la position horizontale et verticale par rapport au
localizer ILS et à la pente de descente entrés par le pilote. De cette façon, le WSO peut
aider le pilote à atteindre et à maintenir la pente de descente. Les commandes de l'indicateur
sont uniquement destinées à la référence du WSO et n'interagissent pas avec les affichages du
groupe directeur de vol dans le cockpit avant.

Les composants de l'indicateur de cap sont un indicateur TO-FROM (ne fonctionne pas
avec ILS), une échelle d'écart de cap, une échelle d'écart de pente de descente, une fenêtre de
sélection COURSE, un bouton de réglage de cap (SET), un pointeur de cap et une échelle de cap,
un feu de balise de marquage, un indicateur GLIDE SLOPE, un indicateur d'écart de cap (LOC OR
RANGE), et les drapeaux d'avertissement OFF de cap et de pente de descente.

Une fois que le pilote a sélectionné une fréquence ILS, le WSO doit établir un cap de rapprochement
dans la fenêtre de sélection à l’aide du bouton SET.

Utilisé uniquement avec le système ILS (ne fonctionne pas avec VOR).

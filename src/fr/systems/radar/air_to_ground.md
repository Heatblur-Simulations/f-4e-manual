# Fonctionnement du radar air-sol

Le fonctionnement du radar air-sol comprend le mode AIR-GRD et RDR-PPI et MAP-PPI.

Le mode AIR-GRD est utilisé comme une forme de télémétrie radar pour le mode WRCS Dive Toss.
RDR-PPI et MAP-PPI sont utilisés pour les modes de recherche de bombe décalée et de cible WRCS.

## Télémétrie air-sol

Le mode AIR-GRD est disponible lorsque le [Mode Knob](interface.md#radar-modes-mode) est
positionné en position AIR-GRD. AIR-GRD est utilisé pour la télémétrie air-sol
et est disponible uniquement dans les portées AI. Dans ce mode, l'antenne est fixée à
l'axe de visée radar (boresight) tout en étant stabilisée en dérive ; cette correction de dérive peut
être supprimée en réglant Drift Out sur le [Stab Switch](interface.md#stab-switch)
en cas de dysfonctionnement de l'INS.

![Mode sol pendant le lancer de plongée](../../img/radar_ground_mode_dt.jpg)

Le mode AIR-GRD désactive le fonctionnement [Angle Track](interface.md#angle-track) et utilise
uniquement [Range Track](interface.md#range-track). Une fois verrouillé sur le fouillis du
lobe principal (écho radar au sol), il sera suivi en portée.

Pour utiliser AIR-GRD, une portée de 5 ou 10 nmi doit être sélectionnée. Une fois la cible
identifiée, le pilote doit effectuer une plongée de 10 à 40 degrés vers la cible. Le
gain du récepteur doit être réduit pour produire un signal parasite d'environ 1/2
nmi. Ceci est fait pour éviter un accrochage erroné sur les lobes secondaires, qui entraînerait
des informations de portée incorrectes.

Lors du verrouillage du retour, le curseur doit être placé approximativement
au centre de l'écho. Voler à des angles peu profonds étirera davantage le retour,
et exigera de verrouiller environ un tiers du retour à la place.

La procédure d'acquisition AIR-GRD est la suivante :

1. Ajustez le gain du récepteur pour réduire le signal parasite à 1/2 nmi.
2. Positionnez le curseur de portée sur le signal parasite.
3. Appuyez sur le bouton d'action jusqu'à mi-course, puis à fond. Relâchez une fois
   le cercle ASE visible.
4. Confirmez le verrouillage.

> 💡 Le radar peut suivre le fouillis de sol au-delà de 25 000 pieds ; cependant,
> il est limité par cette même valeur quant à ce qui peut être transmis au WRCS.

Parfois, un faux suivi peut se produire, ce qui est indiqué par une diminution rapide de
la portée oblique affichée soit sur le viseur optique, soit sur le radar.

Pour corriger cette condition, les actions suivantes peuvent être prises :

1. Appuyez sur le bouton d'action jusqu'à mi-course, puis relâchez.
2. Recommencez le processus d'acquisition.

![manual_radar_air_to_ground_mode](../../img/manual_radar_air_to_ground_mode.jpg)

## Mode Carte (PPI)

Le mode Carte Radar PPI (indicateur de plan de position) est un affichage qui montre les
retours radar tracés selon leur position réelle par rapport à l'avion. La position
de l'avion est au centre bas de l'écran ; les lignes parallèles à l'axe vertical de
l'affichage sont parallèles à la trajectoire de l'avion. Les lignes parallèles à
l'axe horizontal de l'affichage sont décalées par rapport à la trajectoire jusqu'à un
maximum de la moitié de la portée d'affichage actuelle.

Le mode PPI est accessible en réglant le [Display Knob](interface.md#display-knob) sur
PPI-WIDE ou PPI-NAR, à l'exception du 5 nmi qui est toujours affiché en interprétation
B-Scope.

Le curseur de portée est un arc de portée constante depuis l'avion. Le curseur de
décalage est un décalage parallèle à la dérive de l'avion, qui peut être décalé
à gauche ou à droite de la trajectoire actuelle de l'avion. Le curseur de décalage et le
curseur de portée ne peuvent être affichés qu'en modes PPI.

![Mode Carte avec curseurs](../../img/radar_map_mode_cursors.jpg)

Le curseur de portée et le curseur de décalage sont tous deux affichés si le
[Mode de livraison d'arme](../../systems/weapon_systems/multiple_weapons_system.md#mode-selection---delivery-mode-knob)
est réglé sur TGT FIND ou OFFSET, ou si le
[Bouton de mode radar](interface.md#radar-modes-mode) est réglé sur BEACON. Si ce
n'est pas le cas, alors seul le curseur de portée est affiché, à une portée fixe qui peut
être ajustée par l'équipe au sol.

Le
[Contrôle le long de la voie](../../cockpit/wso/right_console/center_section.md#along-track-wheel)
est utilisé pour augmenter et diminuer le réglage actuel du curseur de portée. La
[Commande transversale](../../cockpit/wso/right_console/center_section.md#cross-track-wheel)
est utilisée pour déplacer le curseur de décalage vers la gauche et la droite de la
trajectoire de l'avion.

![manual_radar_map_mode](../../img/manual_radar_map_modes.jpg)

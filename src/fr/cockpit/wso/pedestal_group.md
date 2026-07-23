# Groupe du piédestal

Cette zone derrière le manche contient l'écran radar (<num>1</num>), les commandes DSCG
(<num>2</num>)
ainsi que les commandes du module de ciblage (<num>3</num>).

![wso_dscg_knobs_above](../../img/wso_dscg_knobs_above.jpg)

![wso_dscg_and_pedestal_panel](../../img/wso_pedestal_group_overview.jpg)

## Groupe de convertisseurs de numérisation numérique (DSCG)

![wso_dscg_controls](../../img/wso_dscg_controls.jpg)

Le DSCG affiche les séquences vidéo du radar, des armes et du module de ciblage.

Le cache anti-éblouissement peut être retiré en cliquant dessus.

### Bouton de grille

Ce bouton, situé en haut à gauche au-dessus de l'écran anti-éblouissement, contrôle
luminosité de la grille d'affichage sur le champ visuel de l'écran DSCG ;
dans le sens des aiguilles d'une montre augmente la luminosité, dans le sens inverse des aiguilles
d'une montre la diminue.

### Bouton d'échelle

Situé en haut à droite, au-dessus de l'écran anti-éblouissement, contrôle la luminosité du
échelles de plage de lunette entourant l'écran DSCG ;
dans le sens des aiguilles d'une montre augmente la luminosité, dans le sens inverse des aiguilles
d'une montre la diminue.

### H - Home on Jam Lamp

Lumière à l'intérieur du coin supérieur gauche du pare-éblouissement, elle éclaire
lorsque le radar a atteint le suivi d'angle en mode Home on Jam.

### T - Lampe de poursuite

Lumière à l'intérieur du coin supérieur droit de l'écran anti-éblouissement, elle s'allume lorsqu'un
verrouillage radar standard est obtenu. S'éteint si le radar retombe sur les informations de
portée et de taux mémorisées en cas de perte du verrouillage.

### Curseur RNG (plage)

Le bouton Cursor RNG (<num>2</num>) augmente (dans le sens des aiguilles d'une montre) et diminue
(dans le sens inverse des aiguilles d'une montre) la
luminosité relative du curseur de plage hémisphérique Along Track en modes MAP PPI et Beacon PPI sur
les deux écrans (WSO et Pilot).

### Curseur OFS (Décalage)

Le bouton Curseur OFS (<num>4</num>) augmente (dans le sens des aiguilles d'une montre) et diminue
(dans le sens inverse des aiguilles d'une montre) la
luminosité relative du curseur Cross Track dans les modes MAP PPI et Beacon PPI sur les deux écrans
(WSO et Pilote).

### Bouton de contraste - CONTR

Le bouton Contraste (<num>1</num>) contrôle le niveau de contraste relatif de l'affichage DSCG ;
dans le sens des aiguilles d'une montre
augmente
contraste, dans le sens antihoraire réduit le contraste.

### Bouton de luminosité

Le bouton de luminosité (<num>3</num>) augmente (dans le sens des aiguilles d'une montre) et diminue
(dans le sens inverse des aiguilles d'une montre) la
luminosité du
affichage global de la portée.

### Bouton de mode

Le bouton de mode rotatif (<num>5</num>) définit le mode actuel des composants DSCG.

| Nom | Descriptif |
|---------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| OFF | Éteint l'affichage DSCG et met hors tension tous les composants DSCG.                                                                     |
| STBY | Alimente les composants DSCG, l’affichage DSCG reste éteint. Utilisé pour le décollage et l'atterrissage.                                               |
| DSCG TEST | Affiche une image d'affichage de recherche de test avec 8 nuances de gris pour confirmer le fonctionnement normal. Sélectionnez la plage 10 pour un dimensionnement approprié.    |
| RDR BIT | Fournit des grilles de test [BIT séquence](../../procedures/bit_tests/radar_air_to_air.md) pour l'étalonnage des performances du radar.      |
| RDR | Utilisé pour la fonctionnalité d'affichage radar dans tous les modes d'emploi.                                                                 |
| TV | Utilisé pour les images raster TV avec des armes EO, ainsi que pour les [modules de ciblage](../../systems/weapon_systems/pave_spike/overview.md). |

## Ensemble de contrôle de désignation de cible

![target_des_panel](../../img/wso_target_designator_controls.jpg)

Ceci est le panneau principal permettant d'interagir avec
le [Pave Spike Pod de ciblage](../../systems/weapon_systems/pave_spike/overview.md).

### Luminosité du réticule

Le bouton (<num>1</num>) contrôle le contraste du réticule TV du noir (à fond dans le sens inverse
des aiguilles d'une montre) à
vert
(à fond dans le sens des aiguilles d'une montre). Doit être réglé pour obtenir un contraste maximal
dans la fenêtre d'affichage
lors de la procédure de désignation et d’attaque.

### Boutons de visée

Trois boutons (2,3 et 4) pour contrôler la position de visée du pod en azimut, élévation
et roulez à moins de 2,5 degrés dans les deux sens.

L'azimut et l'élévation peuvent être mieux calibrés en mode 12-VIS, tandis que le roulis est
mieux calibré en 9-VIS.

> 💡 Normalement, le Pod est correctement calibré par l'équipe au sol avant d'être
> dans l'avion, mais peut dériver en raison de dégâts de combat ou de manœuvres à G élevé, auquel cas un
> réétalonnage
> par le WSO est nécessaire.

Voir [3.11.5.6. Procédure de pointage](../../systems/weapon_systems/pave_spike/other.md#boresight)
pour plus de détails.

### Bouton de rangement

Des pressions alternées (<num>5</num>) débloquent et rangent la tête du pod Pave Spike. La tête est
rangé lorsque le bouton est allumé.

Une fois déployé, le pod se déplacera en conséquence vers le mode d'acquisition sélectionné.

Pour éviter d'endommager le système, le pod doit être rangé pendant le décollage, l'atterrissage
et toutes les manœuvres High-G.

> 🟡 ATTENTION : La position repliée est maintenue électriquement
> uniquement et sans alimentation, le pod oscille librement et est endommagé lorsqu'il est forcé
> heurté ses limites de cardan.

### Bouton de sélection prêt pour le laser

Appuyer sur le bouton (<num>6</num>) permet le déclenchement du laser de désignation s'il est allumé
après avoir appuyé dessus.

La lumière reste éteinte si les verrouillages (train avant relevé et toutes les fonctions du pod
opérationnelles)
empêchent son utilisation. Une pression ultérieure désactive le système laser.

### Bouton de mise sous tension

Applique une puissance (<num>7</num>) au module de ciblage lorsqu'il est enfoncé et relâché.
Sélectionné de nouveau pour
éteindre le module de ciblage. La lampe du bouton s’éteindra une fois la tête rangée.

Pour éviter d'endommager le système, le cas échéant, l'alimentation du système doit
être allumée même lorsque le pod n’est pas utilisé.

### Bouton de sélection BIT

Appuyez sur (<num>8</num>) pour avancer vers le
souhaité [BIT](../../systems/weapon_systems/pave_spike/other.md#bits)
mode
comme affiché dans la fenêtre adjacente.

[BIT 1](../../systems/weapon_systems/pave_spike/other.md#bit-1) est le mode normal du pod et
doit être sélectionné pour les opérations normales.

### Bouton de luminosité de la lumière

Le bouton rotatif (<num>9</num>) contrôle la luminosité de toutes les lampes de ce panneau, à
l'exception de la lampe de surchauffe.

### Bouton Rejeter/Annuler

Lorsque le pod détecte un écart trop important entre l'inclinaison mesurée au laser
et la plage calculée basée sur INS, il rejette automatiquement la première et la
préfère cette dernière.

Dans ce cas, le bouton (<num>10</num>) peut être utilisé pour forcer l'utilisation du laser mesuré
plage inclinée à la place.

### Sélecteur de mode d'acquisition

Interrupteur à trois positions (<num>11</num>) déterminant le mode de fonctionnement principal du
pod.

| Nom | Descriptif |
|----------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 12-VIS | Esclaves LOS parallèles au viseur optique.                                                                                                                                    |
| [WRCS](../../systems/weapon_systems/wrcs.md) | Asservit la LOS aux curseurs [WRCS](../../systems/weapon_systems/wrcs.md) à moins que l'intégration [WRCS](../../systems/weapon_systems/wrcs.md) ne soit désactivée ; sinon, il revient à 12-VIS. |
| 9-VIS | Esclave LOS à 90 degrés en dessous de FRL et roulé à 90 degrés vers la gauche.                                                                                                                      |

### WRCS Sortie

S'il est allumé (<num>12</num>), le [WRCS](../../systems/weapon_systems/wrcs.md) n'est pas intégré
au pod et
les fonctionnalités nécessitant son intégration ne sont pas disponibles.

Peut être enfoncé pour désengager ou engager manuellement l'intégration, sauf si elle a été
désintégrée par d’autres moyens.

### Indicateur d'état BIT

S'allume (<num>13</num>) en fonction de l'achèvement du processus BIT sélectionné ; GO confirme
fonctionnalité, MALF affiche l'échec [BIT](../../procedures/bit_tests/overview.md) pour un test
donné
cycles.

### Lampe de surchauffe

Le voyant OVHT s'allume (14, moitié supérieure) pour indiquer une condition de surchauffe dans la
nacelle.

Pour éviter tout dommage, éteignez le pod et laissez-le refroidir avant de continuer.
utiliser. Ignorer la lampe fera fondre certaines parties de la capsule, ce qui l'endommagera.
irrémédiablement.

Pour prolonger l'utilisation du pod et éviter la surchauffe, limitez le lent et le faible niveau
vol, ainsi que l’utilisation continue du laser. En règle générale, n'utilisez pas
le laser pendant plus de 15 minutes sans laisser refroidir entre les utilisations.
Limitez la poursuite du vol lent et à basse altitude pendant l'utilisation du pod à 30 minutes.
Pour les températures extérieures extrêmes, ajustez les limites en conséquence.

### INS Sortie

S'il est allumé (14, moitié inférieure), le [INS](../../systems/nav_com/ins.md) n'est pas intégré au
pod et
les fonctionnalités nécessitant son intégration ne sont pas disponibles.

Peut être enfoncé pour désengager ou engager manuellement l'intégration, sauf si elle a été
désintégrée par d’autres moyens.

## Manivelle de réglage de la pédale de gouvernail

![wso_pedal_crank](../../img/wso_rudder_adjust.jpg)

Utilisé pour régler la position ergonomique des pédales de direction vers l'avant ou vers l'arrière
par rapport au
WSO.

Nécessite 12 tours complets pour déplacer les pédales sur toute la plage.

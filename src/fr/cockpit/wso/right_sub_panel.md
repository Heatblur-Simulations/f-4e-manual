# Sous-panneau droit

![wso_right_sub](../../img/wso_right_sub_panel.jpg)

Le sous-panneau de droite contient des commandes pour le brouillage, le cryptage et divers
paramètres pour la livraison manuelle de bombes.

## Voyant/Interrupteur EJECT

![wso_eject_light](../../img/wso_eject_light.jpg)

Le voyant EJECT fournit une commande visuelle positive du pilote au WSO pour
se préparer à l’éjection. La lumière est contrôlée uniquement depuis le cockpit avant. Si
la lampe [EJECT](../../systems/emergency.md#eject-light) dans le cockpit avant est
enfoncée, elle signale au WSO de se préparer à une éjection immédiate.

> 💡 Seul le pilote peut signaler l'éjection. Si le WSO appuie sur la lumière, cela sert
> comme test de lampe uniquement et ne déclenche pas non plus la lampe du pilote.

## KY-28 Contrôles

![wso_ky_28](../../img/wso_ky_28_control_panel.jpg)

Contrôles du système de cryptage KY-28. Pour plus d'informations, consultez le
[Chapitre Chiffrement](../../systems/nav_com/encryption.md).

## ECM Contrôles

![ecm](../../img/wso_ecm_control_panel.jpg)

Commandes du système électronique de contre-mesure et de brouillage.

Le panneau de gauche est connecté à tous les pods transportés sur les stations de gauche, celui de
droite aux stations de droite.

L'interprétation des modes, des techniques et du fonctionnement exact des lumières dépend
du modèle de brouilleur chargé. Voir le
[section ECM](../../systems/defensive_systems/ecm.md) pour plus de détails.

### Bouton de mode

![ecm](../../img/wso_ecm_mode_knob.jpg)

Le cadran rotatif (1, 4) est le mode du brouilleur dans lequel fonctionner :

| Mode | Descriptif |
| ------ | ------------------------------------------------------- |
| OFF | Éteint, pas de transmission |
| STBY | Démarrage de l'échauffement, pas de transmission (200 s pour ALQ-131) |
| XMIT 1 | Transmission et brouillage selon la technique 1 |
| XMIT 2 | Transmission et brouillage selon la technique 2 |
| BOTH | Transmission et brouillage selon les techniques 1 et 2 |

L'utilisation au sol est interdite car elle pourrait mettre en danger le personnel.

### Lumières STBY

Les deux voyants (3 et 6, blancs du haut) indiquent que la technique du brouilleur correspondante
a terminé son préchauffage et peut désormais être utilisée en passant à XMIT.

La période de préchauffage est d'environ 200 secondes pour le pod ALQ-131.

### Lumières XMIT

Les deux voyants (3 et 6, verts du milieu) indiquent que la technique du brouilleur correspondante
est actuellement active et en transmission.

### Lumière AI

Indique (3 et 6, rouges en bas) qu'un radar a été détecté et est
activement brouillé.

> 💡 En raison des limitations du moteur, ceci n'est actuellement pas simulé dans le jeu.

### Bouton et lampe de réinitialisation

![ecm](../../img/wso_ecm_reset_button.jpg)

Le voyant de réinitialisation (2 et 5), s'il est allumé, indique un défaut dans le système
brouilleur.
Le clignotement indique une condition de surchauffe, auquel cas le pod doit être
éteint pour éviter tout dommage.

En cas de panne, le bouton de réinitialisation peut être enfoncé pour réinitialiser le système de
brouillage
(semblable à l'éteindre et à le rallumer), auquel cas il parcourra le
période d'échauffement à nouveau. Si le défaut pouvait être résolu, la lumière s'éteindrait.

## Ordinateur d'angle de largage de bombe

![wso_labs_angle](../../img/wso_release_angle.jpg)

Utilisé pour saisir les valeurs d'angle requises pour
modes de bombardement [ARBCS/LABS](../../systems/weapon_systems/arbcs.md) ; la commande de faible angle (<num>1</num>) peut être réglée de 0 à 89,9 degrés, et la commande de
grand angle (<num>2</num>) peut être réglée entre 70 et 179,9 degrés.

La commande grand angle est utilisée pour
[bombardement par-dessus l'épaule,](../../stores/air_to_ground/bombs/employment/lofting_tossing.md#instantaneous-over-the-shoulder---inst-os)
tandis que le faible angle est utilisé pour
[bombardement LOFT](../../stores/air_to_ground/bombs/employment/lofting_tossing.md#loft).
Pour les calculs des angles, voir le
[calculateur de bombardement](../../dcs/bombing_computer.md).

## Minuteries de bombardement

![wso_release_timers](../../img/wso_bombing_timer.jpg)

La saisie du timing applicable pour le signal de pull-up ou le relâchement est effectuée avec le
Minuteries de bombardement.

La minuterie Pull-up (<num>1</num>) peut être réglée de 0 à 60 secondes, et la
minuterie de libération (<num>2</num>) peut être réglée de 0 à 30 secondes. Incrément minimum
pour chaque minuterie est de 0,1 seconde. Les deux valeurs sont affichées par deux rouleaux à trois
chiffres
(<num>3</num>) au-dessus des boutons.

Les minuteries de bombardement peuvent être utilisées pour chaque
[méthode d'emploi chronométré](../../stores/air_to_ground/bombs/employment/overview.md).

Voir le [chapitre 9.4, calculateur de bombardement](../../dcs/bombing_computer.md) pour savoir
comment calculer le nombre.

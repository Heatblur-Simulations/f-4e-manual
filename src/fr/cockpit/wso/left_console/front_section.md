# Partie avant

## Panneau de contrôle d'interphone

![wso_intercom_control](../../../img/wso_intercom_panel.jpg)

### Bouton de contrôle du volume

Tourné dans le sens des aiguilles d'une montre (<num>1</num>) pour augmenter le son entre les
cockpits, et
dans le sens inverse des aiguilles d'une montre pour diminuer l'audio entre les cockpits sur le
[interphone](../../../systems/nav_com/intercom.md).

### Sélecteur de fonction

Un interrupteur à trois positions (<num>3</num>) utilisé pour régler le mode du
[interphone](../../../systems/nav_com/intercom.md).

| Nom | Descriptif |
| -------------- | ----------------------------------------------------------------------------------------------------------------- |
| COLD MIC | L'interrupteur du micro sur l'accélérateur doit être maintenu enfoncé pour activer l'interphone.                                                         |
| HOT MIC | Voix transmise automatiquement sur interphone.                                                                      |
| RADIO OVERRIDE | Voix transmise automatiquement sur interphone. Tous les volumes, à l'exception de la tonalité Shrike et de l'avertissement de décrochage, sont réduits en volume. |

### Bouton de sélection de l'amplificateur

Détermine l'amplificateur de courant (<num>2</num>) pour la fonction
[interphone](../../../systems/nav_com/intercom.md).

| Nom | Descriptif |
| ---- | --------------------------------------------------------------------------------------------------------------- |
| B/U | L'amplificateur de casque de secours fournit l'audio.                                                                        |
| NORM | L'amplificateur de casque principal fournit l'audio.                                                                       |
| EMER | Utilise l'amplificateur du cockpit opposé ; tout l'audio, et uniquement celui-ci, y compris la radio, reçu par ce cockpit, est entendu. |

## Panneau de contrôle et de surveillance

![wso_control_monitor_panel](../../../img/wso_control_monitor_panel.jpg)

Teste et surveille le radar [APQ-120.](../../../systems/radar/overview.md)

### Cordons lumineux

Non utilisé dans le F-4E.

### Lumière de température

S'allume (<num>7</num>) en orange pour indiquer une situation de surchauffe dans
la baie avionique du radar de nez. Dans des circonstances normales, une condition de surchauffe
nécessite de mettre l’alimentation du radar sur OFF. Si les circonstances nécessitent une
utilisation continue,
la lumière doit être surveillée régulièrement.

### Bouton de sélection du compteur

Un bouton rotatif à seize positions (<num>1</num>) utilisé conjointement avec le Test
Bouton, chaque position ayant deux valeurs : une valeur SIGNAL externe et une valeur VOLT interne.
La sélection de cette valeur est déterminée par le commutateur du compteur.

### Moniteur de compteur

![Compteur de surveillance](../../../img/wso_control_monitor_meter.jpg)

Fournit des indications de tension, de courant et de signal (<num>2</num>) basées sur
paramètres actuels du commutateur de compteur et du bouton de sélection de compteur.

### Bouton de test

![Bouton de test](../../../img/wso_control_monitor_test_switch.jpg)

Un bouton rotatif à onze positions (<num>3</num>) utilisé avec le bouton de puissance du radar en
TEST pour effectuer les vérifications BIT du système
[Radar APQ-120](../../../systems/radar/overview.md). Fonction de test de base notée
ci-dessous; la fonctionnalité procédurale se trouve dans la section de test BIT applicable
([Embouts air-air](../../../procedures/bit_tests/radar_air_to_air.md),
[Embouts air-sol](../../../procedures/bit_tests/radar_air_to_ground.md)).

| Nom | Descriptif |
| ------- | ------------------------------------------------------------------------------------------- |
| 0 | Affiche la présentation de la portée standard B pour confirmer que tous les éléments fonctionnent correctement.       |
| 1 | Confirme le délai de synchronisation du verrouillage de rupture, l'état de réglage AIM-7 et la fonction d'état de la lampe de portée.      |
| 2 | Confirme la bonne position de la tête AIM-7 et la fonction d'impulsion COURTE contre deux cibles.       |
| 3 | Confirme les performances de suivi d'angle par rapport à une cible verrouillée qui tourne à l'intérieur du cercle ASE. |
| 4 | Utilisé lorsque le verrouillage est réalisé dans un autre mode, confirme la fonctionnalité HOJ et AOJ.               |
| 5 | Vérifie le taux de portée, l'angle d'avance, la fonction CAA et PLMS.                                      |
| 6 | Confirme le bon affichage de l'attaque AIM-7 et la fonction de verrouillage.                                |
| 7 | non disponible |
| 8 | non disponible |
| 9 | non disponible |
| 10 | non disponible |
| DOT BAL | Confirme l'étalonnage du centrage du point AIM. Également utilisé pour le transfert de données TIRS.                   |

### Commutateur de compteur

![Interrupteur du compteur](../../../img/wso_control_meter_signals_switch.jpg)

Un interrupteur à deux positions (<num>4</num>) qui détermine quel ensemble de valeurs est
utilisé à partir du bouton de sélection du compteur pour les séquences de test applicables ; VOLT
sélectionne l'anneau intérieur des valeurs de référence de tension, tandis que SIGNAUX utilise le
anneau extérieur des valeurs de référence du SIGNAL.

### Commutateur Vc

![Interrupteur Vc](../../../img/wso_control_meter_vc_switch.jpg)

Un interrupteur à deux positions (<num>5</num>) qui modifie le facteur d'échelle de la gamme
présentation des tarifs. Les avions DSCG doivent laisser le commutateur sur 2700, sinon le Vc
la présentation sera erronée.

### Commutateur Stab

Un interrupteur à trois positions (<num>6</num>) qui modifie la stabilisation de l'antenne
mode.

| Nom | Descriptif |
| --------- | ---------------------------------------------------------------------------------------- |
| NOR | Fonctionnement normal ; les entrées de tangage et de roulis sont transmises au circuit de stabilisation de l'antenne. |
| STAB OUT | La ligne d'horizon retirée des lunettes et les servos de dérive de stabilisation sont remis à zéro.              |
| DRIFT OUT | La compensation de dérive INS est supprimée ; L'antenne utilise le suivi direct des entrées de tangage et de roulis.    |

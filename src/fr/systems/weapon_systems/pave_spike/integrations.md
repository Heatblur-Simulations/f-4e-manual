# Intégrations

## Intégration INS

En fonctionnement normal, le pod est connecté à l'INS. Cela peut être désactivé
manuellement en appuyant sur le bouton poussoir INS OUT.

![ins_out_lampe](../../../img/wso_target_designator_ins_button.jpg)

Avec INS désactivé, les fonctions suivantes ne sont **pas disponibles** :

- Stabilisation automatique de la cible en mode Track
- Stabilisation du roulis pendant le mode d'acquisition 12-VIS
- Calcul de la portée inclinée
- Intégration WRCS

## Intégration WRCS

En fonctionnement normal, le pod est connecté au WRCS. Cela peut être
désactivé manuellement en appuyant sur le bouton-poussoir WRCS OUT.

![wrcs_out_lamp](../../../img/wso_target_designator_wrcs_button.jpg)

De plus, le WRCS est automatiquement désactivé sans l'intégration de l'INS, ou si
actuellement pas en mode d'arme DIRECT ou TGT FIND.

![pave_spike_weapon_sel](../../../img/pilot_delivery_mode_knob_pave_spike.jpg)

Avec WRCS désactivé, les fonctions suivantes ne sont **pas disponibles** :

- Mode d'acquisition WRCS
- Mode mémoire
- Largage automatique d'arme WRCS

Et certaines fonctions sont dégradées, mais **toujours disponibles** :

- Calcul de la portée inclinée
- Stabilisation automatique de la cible en mode Track

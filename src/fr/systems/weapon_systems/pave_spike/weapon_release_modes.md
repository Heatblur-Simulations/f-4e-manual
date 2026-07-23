# Modes de largage d'armes

Le pod propose deux modes de largage d'armes supplémentaires :

- Mode automatique WRCS
- ROR (Largage à portée)

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ow9wJj-uOzQ?si=U0zyR6QClPim_tl-"
title="DCS : F-4E Phantom - Pave Spike - Modes de largage" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Mode automatique

La principale méthode de livraison d'armes avec le pod est le mode de largage automatique
WRCS.

Le WRCS doit être intégré au pod pour qu'il soit disponible, et le pilote
doit sélectionner TGT FIND comme mode de livraison, ainsi que WRCS sur l'indicateur de portée.

![pave_spike_weapon_sel_tgt_find](../../../img/pilot_weapon_selector_tgt_find.jpg)
![pave_spike_range_mode_wrcs](../../../img/pilot_range_indicator_wrcs_setting.jpg)

Ce mode fonctionne de la même manière que le mode Dive Toss du WRCS, à ceci près qu'il
utilise plutôt la portée inclinée et la cible calculées par le pod.

![wrcs_auto_release_procedure](../../../img/wrcs_auto_release_procedure.jpg)

Le signal TTG descendra et rejoindra le signal T0 pour indiquer le temps avant largage,
jusqu'à 15 secondes maximum.

![TTg descend jusqu'à T0](../../../img/ttg_moes_to_tt0.jpg)

## ROR

Le largage à portée est principalement un mode de secours. Le pilote doit sélectionner TGT
FIND comme mode de livraison, et ROR sur l'indicateur de portée.

![pave_spike_weapon_sel_tgt_find](../../../img/pilot_weapon_selector_tgt_find.jpg)
![pave_spike_range_mode_ror](../../../img/pilot_range_indicator_ror_setting.jpg)

Les armes seront larguées automatiquement dès que la portée inclinée calculée est inférieure
à la portée de déclenchement souhaitée définie. La portée est configurée sur l'indicateur de
portée, en réglant le mode sur SET et en tournant le bouton situé sous l’écran.

![pave_spike_ror_controls](../../../img/pilot_range_indicator_set.jpg)

Les meilleurs résultats sont obtenus lors d'un vol en palier.

![ror_auto_release_procedure](../../../img/ror_auto_release_procedure.jpg)

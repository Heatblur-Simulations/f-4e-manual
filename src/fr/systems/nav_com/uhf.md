# UHF Radio

La radio UHF du F-4E fournit à la fois une communication vocale (AM) et une direction automatique
Capacités de recherche (ADF). Il comprend deux unités principales : un émetteur-récepteur radio
(appelé _COMM_), une unité d'alimentation-récepteur d'amplificateur (appelé _AUX_),
et un récepteur de garde (à 243 MHz).
Le contrôle de ces systèmes est facilité par deux panneaux de commande, un situé dans chaque
cockpit.
Le panneau actuellement actif assume le contrôle total des opérations radio.

L'unité COMM est capable de **recevoir et transmettre** sur une large gamme de
fréquences sélectionnées manuellement, totalisant 3500, ou peut fonctionner sur 18 canaux
prédéfinis. Cette fonctionnalité couvre une plage de fréquences de 225,0 MHz à 399,95 MHz.

D'autre part,
l'unité AUX est conçue pour **recevoir** des signaux sur 20 canaux de fréquence prédéfinis, allant
de 265,0 MHz à 284,9 MHz.

Les récepteurs COMM et AUX ont la capacité de
traiter les signaux ADF, qui peuvent être affichés sur l’indicateur de situation horizontale (HSI)
ou l'indicateur de cap de distance de relèvement (BDHI). Les fréquences AUX sont réglées par
l'atelier de maintenance radio de l'unité, selon les fréquences nécessaires pour la zone
d'opérations. Dans le jeu, vous pouvez les définir via les
[paramètres de l'éditeur de mission 9.9](../../dcs/mission_editor.md).

Deux antennes en lame, une supérieure et une inférieure, ainsi qu'une antenne ADF, sont fournies.
Une fois le mode d'antenne défini pour le canal principal, l'AUX reçoit les signaux de l'autre
antenne.

> 💡 Les canaux prédéfinis COMM et AUX et les stations ADF peuvent être définis dans
> [éditeur de mission](../../dcs/mission_editor.md#radio-options).

> 💡 L'unité AUX est en réception uniquement, vous ne pouvez utiliser que l'unité COMM pour transmettre.

<iframe width="560" height="315" src="https://www.youtube.com/embed/oCm9Vn9Oqeg?si=9yHUuX_tdni32wPJ"
title="Chaînes radio prédéfinies dans le monde F-4 Phantom | DCS" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Panneau de configuration des communications

![pilot_uhf_control_panel](../../img/pilot_comm_control_panel.jpg)

Deux [panneaux de commande de communication](../../cockpit/pilot/right_console/front_section.md#communication-control-panel)
sont installés, sur la console droite dans le cockpit avant, et sur la console gauche
dans le cockpit arrière. Ceux-ci assurent la gestion de la radio dans les deux sièges,
avec priorité sélectionnable.

Pour que la navigation par radiogoniomètre automatique (ADF) fonctionne efficacement,
le récepteur approprié doit être réglé sur le mode ADF, tel que sélectionné par le sélecteur de
mode.

### Bouton et voyant de commande de communication

![pilot_uhf_command_and_light](../../img/pilot_uhf_comm_command.jpg)

L'autorité de contrôle de la radio UHF est modifiée par le bouton COMM CMD (<num>10</num>). Une
lumière verte (<num>9</num>) s'allume dans le cockpit ayant le contrôle, à côté du bouton. L'un ou
l'autre cockpit peut prendre le contrôle, ou, s'il l'a déjà, appuyer sur le bouton pour céder le
contrôle de la radio à l'autre siège.

> 💡 Puisque vous ne pouvez transmettre que sur l'unité COMM, cela peut être utile
> pour configurer la deuxième fréquence sur laquelle vous souhaitez émettre dans la fosse WSO
> puis utilisez le bouton COMM CMD pour basculer rapidement entre les fréquences actives.

### Contrôle du volume UHF

Règle le volume écoutable (<num>1</num>) pour la radio UHF pour le membre d'équipage donné.

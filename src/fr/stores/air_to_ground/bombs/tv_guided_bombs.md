# Bombes guidées par la télévision

![Phantom chargé de deux Walleyes](../../../img/walleyes_loaded.jpg)

Le F-4E Phantom II était équipé de bombes téléguidées, notamment les GBU-8 et
AGM-62 Walleye, améliorant ses capacités de frappe de précision.

Le GBU-8, également connu sous le nom de « HOBOS » (Homing Bomb System), son successeur le
GBU-15, et les AGM-62 I et II Walleye, sont des bombes planantes électro-optiques à guidage
télévisé. Ce sont des munitions à guidage de précision équipées d'une caméra de télévision dans
leur nez.

Le GBU-15 peut être piloté après le lancement via une interface de liaison de données, offrant
une précision extrême et augmentant l'efficacité du F-4E pour attaquer des cibles bien défendues
et de grande valeur, avec une solution de guidage « homme dans la boucle ».

> 💡 La variante DSCG antérieure ne prend pas en charge l'interface de liaison de données. Ainsi,
> elle peut lancer les armes uniquement en mode de sauvegarde _"Lock-On Before Launch"_ similaire
> aux Mavericks, sans aucune direction manuelle après le lancement.

Historiquement, les deux variantes de Walleye ont également reçu des mises à niveau de liaison de
données (ER/DL). Cependant, le F-4E n'a jamais été modifié pour prendre en charge l'interface de
liaison de données spécifique aux Walleye pour un guidage homme dans la boucle.

Le GBU-8/15 et l'AGM-62 Walleye ont tous deux été des ajouts cruciaux à l'arsenal du F-4E,
améliorant sa capacité à mener des frappes précises avec des dommages collatéraux réduits. Ces
bombes guidées par télévision ont démontré l'adaptabilité du F-4E Phantom II à intégrer des
munitions avancées pour répondre aux exigences changeantes des missions.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ko1OaDN4Y5g?si=SgfKXHcAs_l_XzmP"
title="Tutoriel de bombardement F-4E - AGM62 Walleye" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Variantes

Les bombes guidées TV disponibles incluent :

| Variante              | Ogive | Descriptif |
| -------------------- | ------: | -------------- |
| AGM-62 Walleye I | 1000 livres |                |
| AGM-62 Walleye II ER | 2000 livres | portée étendue |
| GBU-8 HOBOS | 2000 livres |                |

## Emploi

Les armes TV nécessitent une période de trois minutes pour réchauffer l'équipement. Cela commence
dès que l'alimentation électrique est connectée à l'avion. Au moment où l'avion
est en vol, ils sont généralement prêts à l'emploi.

Il est utile de régler le viseur optique en mode A/G et d'entrer une dépression de
**22 mils**, de sorte que l'alignement de la visée soit celui de l'autodirecteur du missile. De
cette façon, le pilote peut placer la cible sur le pipper et elle se trouvera dans le champ de
vue de l'arme.

L'une ou l'autre des bombes est larguée en sélectionnant les stations correspondantes, en mettant
le sélecteur d'arme sur TV et le bouton de mode de livraison sur DIRECT.

> 💡 Les voyants ARM sur les
> [Boutons de sélection de station](../../../cockpit/pilot/weapon_management.md#station-select-buttons)
> sont câblés pour toujours démarrer une minuterie de 3 minutes chaque fois que le
> [Bouton de sélection d'arme](../../../cockpit/pilot/weapon_management.md#weapon-selector-knob)
> est déplacé en position TV. Par conséquent, si le bouton n'est déplacé hors de cette position
> que brièvement, les voyants ARM ne s'allumeront pas avant que la minuterie ne soit à nouveau
> écoulée. Les bombes peuvent néanmoins être utilisées, indépendamment du voyant ARM.

Activez le mode TV pour l'écran DSCG et appuyez sur la gâchette. Cela active le capteur, et le
flux vidéo sera affiché à l'écran.

> 💡 Les commandes WSO se trouvent sur le manche de vol lui-même, et non sur la commande manuelle de l'antenne.

![Symbologie de l'écran HOBOS](../../../img/hobos_screen_symbology.jpg)

Le capteur de la caméra **ne peut pas être orienté**. Placez le réticule dans la direction
générale de la zone cible, ou, en cas de lancement en mode _"Lock-On Before Launch"_, directement
au-dessus de la cible. Appuyez et maintenez la gâchette enfoncée pour commander un verrouillage.

Le chercheur tente de se verrouiller via le contraste. S'il ne parvient pas à se verrouiller,
c'est probablement que la cible ne se détache pas suffisamment de son arrière-plan.

> 💡 En raison du verrouillage par contraste basé sur la télévision, l'efficacité des armes peut
> diminuer au crépuscule, à l'aube ou dans des situations très nuageuses.

![Largage HOBOS](../../../img/walleye_seeker_symbology.jpg)

Une fois verrouillé, un carré noir est ajouté à la symbologie, indiquant la position de la tête
chercheuse.

Ensuite, maintenez enfoncé le bouton de la bombe pendant quelques secondes pour larguer l'arme.

> 💡 La portée effective varie beaucoup en fonction de l'altitude et de la vitesse de largage. Le
> mécanisme de libération ne vérifie pas si la munition se trouve dans les paramètres requis. Pour
> réduire le risque que l'arme manque sa cible, préférez la larguer depuis une altitude et une
> vitesse accrues.

![Largage HOBOS](../../../img/hobos_release.jpg)

# Crayon gras

Les deux membres de l'équipage peuvent utiliser un crayon gras pour dessiner sur le côté de leur
verrière.

L'interface peut être ouverte en cliquant sur l'endroit correspondant à droite
face avant de la verrière.

![Crayon gras UI](../img/grease_pencil_ui_overview.jpg)

Maintenir le clic gauche permet de dessiner, tandis que le clic droit utilisera la gomme.

Après avoir fermé la fenêtre en cliquant à nouveau sur l'endroit de la verrière, les résultats sont
rendus sur la verrière.

![Image au crayon gras](../img/grease_pencil_ui_result.jpg)

> 💡 En raison des limitations du moteur, l'image n'est pas synchronisée
> en multijoueur et n’est pas visible depuis l’extérieur.

## Cercle de repérage

Pour faciliter la coordination de l'équipage, pendant le démarrage et la planification, une
technique couramment employée consiste à sélectionner un objet statique à distance, tel qu'un
bâtiment, un véhicule ou un arbre, et à tracer un cercle autour de lui.

![Configuration du cercle de repérage](../img/spotting_circle_setup.jpg)

Le cercle dessiné par le Pilote et le WSO pointera désormais à peu près dans la même direction.
direction et, une fois dans les airs, peut être utilisé pour améliorer la coordination.

Par exemple, si le pilote repère une cible, il peut dire au WSO :

> "Il y a une cible à 100 m du cercle."

Le WSO peut désormais utiliser son marqueur circulaire pour localiser le bon endroit.

![Cible du cercle de repérage](../img/spotting_circle_target.jpg)

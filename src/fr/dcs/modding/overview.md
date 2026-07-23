# Modding

Le Phantom encourage le modding et permet à la communauté de modifier
diverses parties de la simulation et de l’expérience.

Les joueurs peuvent profiter de leurs créations en solo ou même en multijoueur
sur les serveurs qui ont désactivé leur vérification de l'intégrité des fichiers.

> 💡 Faites-nous savoir si vous créez un mod sympa qui, selon vous, devrait
> trouver sa place dans le module !

## Jester

Jester est entièrement ouvert au modding. Veuillez consulter l'API [Jester](jester/overview.md) pour
plus de détails.

## Manuel

<!-- markdown-link-check-disable -->
Ce manuel est open source sur [GitHub](https://github.com/Heatblur-Simulations/f-4e-manual).
<!-- markdown-link-check-enable -->

Si vous avez trouvé une faute de frappe ou souhaitez améliorer une section, veuillez nous en
informer, ou n'hésitez pas à contribuer vous-même directement sur GitHub.

## Sites Web intégrés

Plusieurs fonctionnalités de l'avion utilisent des sites Web intégrés, qui sont
affiché dans le jeu avec un navigateur Web intégré.

Le code des sites Web peut être trouvé dans le Mod-Folder, par exemple :

`G:\DCS World OpenBeta\Mods\aircraft\F-4E\UI`

Le navigateur prend en charge HTML/CSS/JS complet et permet même de charger des sites externes,
comme visiter YouTube et regarder des tutoriels.

N'hésitez pas à améliorer l'un des sites existants, tels que l'interface utilisateur Jester Wheel ou
Grease Pencil,
si vous le souhaitez.

## Explique-moi

Pour découvrir rapidement ce que fait un commutateur, le manuel intégré permet de maintenir un
raccourci clavier
(<kbd>M</kbd> par défaut), puis en cliquant sur n'importe quel interrupteur dans le cockpit et le
manuel s'ouvre
fait défiler jusqu'à l'endroit expliquant le commutateur correspondant.

Côté technique, cette fonctionnalité est configurée dans la table de recherche située dans le
Mod-Folder, par exemple :

`G:\DCS World OpenBeta\Mods\aircraft\F-4E\Input\explain_table.csv`

Ce fichier relie les noms de pointeurs/connecteurs du modèle aux URL relatives du manuel.

```csv
# in explain_table.csv
PNT_Pull_Up_Light;cockpit.html#pull_up_system
PNT_FIRE_TEST_BUTTON;cockpit.html#fire_test_button
PNT_Marker_Beacon;cockpit.html#marker_beacon
PNT_VOR_Light;cockpit.html#vor_light
```

L'URL, par exemple `cockpit.html#fire_test_button`, est ensuite chargée dans le navigateur manuel.

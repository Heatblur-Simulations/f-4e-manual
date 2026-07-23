# Interface utilisateur de la roue

Jester Wheel se compose d'une interface Web et propose une API exposée à Lua
pour modifier son contenu et réagir aux actions.

## Front-end

Le frontend est un site Web basé sur [Pixi JS](https://pixijs.com/) défini dans

`f-4e\ModFolders\Mods\aircraft\F-4E\UI\JesterWheel`

L'ouverture de `index.html` dans un navigateur affiche la roue remplie du contenu de base.

Le site est modifiable librement, les modifications sont visibles après rechargement DCS
(<kbd>SHIFT</kbd>+<kbd>R</kbd>).

La logique de l'interface utilisateur, telle que les animations, est définie dans `renderer.js`,
tandis que les interactions sont gérées dans `main.js`.

`interface.js` déclare le contenu de base de la roue, ainsi que toutes les méthodes
pertinentes pour la communication C++ vers JS.

La méthode `hb_send_proxy` est utilisée pour envoyer des commandes au C++, comme le notifier
qu'une action a été cliquée.

## Traductions

La roue et tous les autres éléments de l'interface utilisateur HB prennent en charge la
localisation.
Voir le sous-dossier `l10n` pour plus de détails.

Les traductions sont fournies via des fichiers simples via le code de langue, par exemple
`l10n/cn.js` :

```json
translations["cn"] = {
    "Press": "按下",
    "UHF Radio": "UHF 电台",
    "Radio": "电台",
    ...
}
```

> 💡 Vous pouvez ajouter des traductions pour d'autres langues en modifiant simplement l'un des fichiers existants
> puis nous l'envoyer. Nous le vérifierons et l’ajouterons ensuite avec plaisir au module ! 👍

## Lua

La roue est essentiellement un arbre de menus. Chaque menu comprend jusqu'à 8 éléments. Un
élément peut être final ou contenir un autre sous-menu. De plus, un sous-menu peut
également apparaître en tant que menu externe, ce qui augmente ses emplacements d'objets à 18.

Chaque élément peut être associé à une `action`, une chaîne liée au système d'événements, sur
laquelle il est possible de réagir si elle est invoquée.

Pour interagir avec le menu, plusieurs méthodes sont définies et exportées vers Lua :

```lua
Wheel.ReplaceMainMenu(main_menu)
Wheel.ReplaceSubMenu(sub_menu, menu_location)
Wheel.AddItem(item, menu_location)
Wheel.RemoveItem(item_name, menu_location)
Wheel.ReplaceItem(item, item_name, menu_location)
Wheel.RenameItem(new_item_name, current_item_name, menu_location)
Wheel.SetMenuInfo(info_text, menu_location)
Wheel.NavigateTo(menu_location)
```

Ce qui suit montre un exemple simple pour ajouter un nouveau sous-menu au menu `Navigation` :

```lua
local waypoint_menu = Wheel.Item:new({
  name = "Select Waypoint",
  menu = Wheel.Menu:new({
    name = "Select Waypoint",
    items = {
      Wheel.Item:new({ name = "TGT 1", action = "select_tgt_1" }),
      Wheel.Item:new({ name = "TGT 2", action = "select_tgt_2" }),
      Wheel.Item:new({ name = "Advanced", outer_menu = Wheel.Menu:new({
        name = "More Waypoints",
        items = {
          Wheel.Item:new({ name = "RTB", action = "select_rtb" }),
          Wheel.Item:new({ name = "Nearest Target", action = "select_tgt" }),
        },
      })}),
    }
  }),
})

Wheel.AddItem(waypoint_menu, {"Navigation"})
```

Le texte d'information du menu peut ensuite être mis à jour à l'aide de

```lua
local current_waypoint = "WP 2"
Wheel.SetMenuInfo(current_waypoint, {"Navigation", "Select Waypoint"})
```

Pour réagir à une action sélectionnée, écoutez l'événement correspondant :

```lua
ListenTo("select_tgt_1", "Navigation", function(task)
  -- Component interface
  task:Click("Nav Panel Function", "TARGET_1")

  -- or Raw interface
  task:Then(function()
    ClickRaw(
      devices.NavigationComputer_AN_ASN_46A,
      device_commands.RIO_NAV_COMP_FUNCTION_SELECTOR_KNOB,
      3,
      5
    ) -- Target 1
  end)
end)
```

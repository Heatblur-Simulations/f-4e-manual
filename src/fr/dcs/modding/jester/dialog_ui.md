# Interface utilisateur de boîte de dialogue

Jester Dialog se compose d'une interface Web et propose une API exposée à Lua
pour modifier son contenu et réagir aux actions.

## Front-end

Le frontend est un site Web basé sur [Pixi JS](https://pixijs.com/) défini dans

`f-4e\ModFolders\Mods\aircraft\F-4E\UI\JesterDialog`

L'ouverture de `index.html` dans un navigateur affiche la boîte de dialogue remplie d'exemples de
contenu.

Le site est modifiable librement, les modifications sont visibles après rechargement DCS
(<kbd>SHIFT</kbd>+<kbd>R</kbd>).

La logique de l'interface utilisateur, telle que les animations, est définie dans `renderer.js`,
tandis que les interactions sont gérées dans `main.js`.

`interface.js` déclare le contenu de base de la boîte de dialogue, ainsi que toutes les méthodes
pertinentes pour la communication C++ vers JS.

La méthode `hb_send_proxy` est utilisée pour envoyer des commandes au C++, comme le notifier
qu'une action a été cliquée.

## Lua

Les boîtes de dialogue sont affichées à la demande et dans l'ordre. Elles sont affichées pendant
un certain temps et l'utilisateur a la possibilité de s'engager dans le dialogue ou de l'ignorer -
après quoi elles expireront et disparaîtront.

Une boîte de dialogue consiste en une question avec jusqu'à 4 options sélectionnables. Une option
est
soit final, soit déclenche une question de suivi avec de nouvelles options parmi lesquelles
sélectionner.

Les boîtes de dialogue sont conservées et affichées à partir d'une file d'attente. Une nouvelle
boîte de dialogue peut être placée dans la file d'attente
via :

```lua
Dialog.Push(dialog)
```

Ce qui suit montre un exemple simple pour ajouter une nouvelle boîte de dialogue :

```lua
local fuel_check_dialog = Dialog.Question:new({
  name = "Jester",
  content = "How is the fuel?",
  phrase = "dialog/fuel_check",
  label = "Fuel Check",
  timing = Dialog.Timing:new({
    question = s(5),
    action = s(10),
  }),
  options = {
    Dialog.Option:new({ response = "We are good", action = "fuel_good" }),
    Dialog.Option:new({
      response = "Fuel is low",
      follow_up_question = Dialog.FollowUpQuestion:new({
        name = "Jester",
        content = "Okay, how do you want to proceed?",
        phase = "dialog/fuel_low_proceed",
        options = {
          Dialog.Option:new({ response = "Remain on Mission" }),
          Dialog.Option:new({ response = "RTB", action = "fuel_low_rtb" })
        },
      }),
    })
  },
})

Dialog.Push(fuel_check_dialog)
```

Pour réagir à une option sélectionnée, écoutez l'événement correspondant :

```lua
ListenTo("fuel_low_rtb", "Navigation", function(task)
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

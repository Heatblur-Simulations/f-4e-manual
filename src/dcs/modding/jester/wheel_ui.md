# Wheel UI

Jester Wheel consists of a web-based frontend and offers an API exposed to Lua
for modifying its content and reacting to actions.

## Frontend

The frontend is a [Pixi JS](https://pixijs.com/) based website defined in

`f-4e\ModFolders\Mods\aircraft\F-4E\UI\JesterWheel`

Opening `index.html` in a browser shows the wheel filled with the base content.

The website can be edited freely, changes are visible after reloading DCS
(<kbd>SHIFT</kbd>+<kbd>R</kbd>).

The UI logic, such as animations are defined in `renderer.js`, while the
interactions are handled in `main.js`.

`interface.js` declares the base content of the wheel, as well as all methods
relevant for the C++ to JS communication.

The method `hb_send_proxy` is used to send commands to C++, such as notifying it
that an action has been clicked.

## Translations

The wheel and all other HB UI elements support localization.
See the subfolder `l10n` for details.

Translations are provided through simple files via the language code, for example `l10n/cn.js`:

```json
translations["cn"] = {
    "Press": "按下",
    "UHF Radio": "UHF 电台",
    "Radio": "电台",
    ...
}
```

> 💡 You can add translations for other languages by simply modifying one of the existing files
> and then sending it to us. We will verify it and then gladly add it to the module! 👍

## Lua

The wheel is essentially a menu-tree. Each menu consists of up to 8 items. An
item might be final or contain another sub-menu. Additionally, a sub-menu can
also be spawned as outer-menu, which increases its item slots to 18.

Each item can be associated with an `action`, a string that is tied to the Event
System and can hence be reacted to if invoked.

To interact with the menu, several methods are defined and exported to Lua:

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

The following shows a simple example to add a new sub-menu to the `Navigation`
menu:

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

The info text of the menu can then be updated using

```lua
local current_waypoint = "WP 2"
Wheel.SetMenuInfo(current_waypoint, {"Navigation", "Select Waypoint"})
```

To react to a selected action, listen to the corresponding event:

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

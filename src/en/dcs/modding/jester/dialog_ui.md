# Dialog UI

Jester Dialog consists of a web-based frontend and offers an API exposed to Lua
for modifying its content and reacting to actions.

## Frontend

The frontend is a [Pixi JS](https://pixijs.com/) based website defined in

`f-4e\ModFolders\Mods\aircraft\F-4E\UI\JesterDialog`

Opening `index.html` in a browser shows the dialog filled with example content.

The website can be edited freely, changes are visible after reloading DCS
(<kbd>SHIFT</kbd>+<kbd>R</kbd>).

The UI logic, such as animations are defined in `renderer.js`, while the
interactions are handled in `main.js`.

`interface.js` declares the base content of the dialog, as well as all methods
relevant for the C++ to JS communication.

The method `hb_send_proxy` is used to send commands to C++, such as notifying it
that an action has been clicked.

## Lua

Dialogs are shown on-demand and in-order. They are displayed for a certain time
and the user is given a chance to engage in the dialog or ignore it - upon which
it will expire and vanish.

A dialog consists of a question with up to 4 selectable options. An option is
either final or triggers a follow-up question with new options to select from.

Dialogs are hold and shown from a queue. A new dialog can be pushed to the queue
via:

```lua
Dialog.Push(dialog)
```

The following shows a simple example to add a new dialog:

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

To react to a selected option, listen to the corresponding event:

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

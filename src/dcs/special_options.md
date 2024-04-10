# Special Options

The Phantom offers several options that can be set within the _Special Option_
menu in DCS.

![Special Option Menu](../img/special_options.jpg)

## Radio Menu and PTT Behavior

![Radio Menu](../img/special_options_radio_menu.jpg)

Dropdown to select the behavior of the push to talk bind for the radio.

| Option          | Close Menu | Menu must be open | Export Voice |
| --------------- | ---------- | ----------------- | ------------ |
| Default         | ❌         | ❌                | ✅           |
| Open Menu       | ❌         | ✅                | ✅           |
| Hide on Release | ✅         | ❌                | ✅           |
| No Export       | ❌         | ❌                | ❌           |

The columns have the following effects:

- Close Menu - when releasing the key, the DCS communication menu is
  automatically closed
- Menu must be open - the key only works when the DCS communication menu is
  currently open
- Export Voice - when pressed down, voice is exported to tools like SRS

## Stick Deflection Limit

Limits the maximum force in lbf (Pound-Force), i.e. strength, the pilot is able
to pull the stick with.

This effect is mostly seen when controlling the aircraft during high G maneuvers
and can prevent accidentally pulling extreme Gs.

## Stick Force Blending

When maximum movement of the stick would result in excessive forces being
generated, having this activated will scale down the generated force to improve
handling precision, but also can help to prevent accidentally pulling extreme
Gs.

## Roll Breakout Point

Percentage of stick input after which the AFCS system will recognize the pilot
stick was moved from neutral trim position (force transducer switches closed).
This will affect the AFCS roll channel operation and prevent it from fighting
your roll input. For more info see
[Force Transducer](../systems/flight_controls_gear/flight_controls.md#force-transducer).

## Afterburner Detent

Two options to define at which point of the physical hardware throttle input (0
to 100%) the aircraft will light the afterburner.

That is, if set to 80%, the MIL power range of the aircraft will be commanded
between 0% and 80% of your physical throttle, while the remaining 20% will
control the afterburner range.

The deadzone option can be used to split the points in the range at which the
afterburner will be turned on and off. For example, setting 2% for the deadzone
and 80% for the detent results in afterburner activation at 82% and deactivation
at 78% of throttle input.

## Randomize System Inputs at Cold Start

When unchecked, during cold start all switches and knobs will be in their
initial OFF positions. Allowing for a quick start by just following procedures.

When checked, switch positions will be randomized during cold-start, as if the
previous pilot did not properly return everything back to their initial
positions. To ensure a correct startup, the crew hence must check and confirm
each switch in the proper position before following a cold-start procedure.

## Use Multithreading for Main Simulation

With this option checked, the main simulation of the aircraft and its components
is computed in parallel by utilizing multiple threads.

This can significantly improve performance if bound by the CPU.

> 🟡 CAUTION: The feature is experimental. Simulation stability and correctness
> can suffer.

## Disable Multicrew Controls Input When Joining as WSO

If checked, when joining as WSO in multiplayer with a human pilot, your local
controls inputs (stick, rudder pedals and throttle) will be ignored by default.
You can toggle your local input back with assigned keybind.

## Jester Landing Callouts

If enabled, Jester will assist the pilot during landing by calling out aircraft
altitude, similar as seen in civilian aviation.

> 💡 Real Phantom WSOs did not assist during landing.

## HB UI Resolution Override

User interface elements, such as the Jester Wheel, the manual, virtual browser
and others are scaled and positioned via a fixed resolution that must match the
resolution of the in-game surface they are rendered on.

With the option unchecked, this resolution is automatically determined based on
screen settings. However, in certain situations, especially when using VR or
having a multi-monitor setup, this automatic detection might fail and compute an
incorrect resolution.

Should UI elements be misplaced, for example the Jester Wheel not being centered
or even cut off, check this setting and edit the resolution manually until the
UI is displayed properly.

## Jester UI Allow Head-Tracking

![Radio Menu](../img/special_options_jester_ui_head_tracking.jpg)

When checked, the Jester UI allows moving the cursor simply by moving the
in-game character head. Can be disabled if no convenient head-tracking
equipment, such as TrackIR or VR, is available.

> 💡 Tracking options are chosen dynamically based on movement. Even if
> head-tracking is enabled, other options such as using the mouse or assigning
> the cursor to an axis are also still available.

The dropdown allows selection of the head-tracking behavior:

- Center - the view-origin is at the aircraft center
- Dynamic - the view-origin is where the UI was opened

Selecting _Center_ requires looking forward when operating the UI, whereas
_Dynamic_ allows using head-tracking from any view position. However, _Dynamic_
can lead to having to chase the cursor when closing and re-opening the UI
frequently.

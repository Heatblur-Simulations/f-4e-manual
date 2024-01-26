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

Percentage of stick input after which the AFCS system will recognize
the pilot stick was moved from neutral trim position
(force transducer switches closed). This
will affect the AFCS roll channel operation and prevent it from
fighting your roll input.
For more info see [Force Transducer](../systems/flight_controls_gear/flight_controls.md#force-transducer).

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

## Performance Balancer

Under normal conditions, the systems and components in the aircraft are
simulated with a fixed update-rate.

With this option checked, the update rate of some less important systems (such
as animations) is scaled dynamically based on the current CPU usage. This means
that if the system has a hard time keeping high FPS, the rate on which less
important systems are simulated is dynamically tuned down to stress the CPU less
and possibly achieve higher FPS.

> 🟡 CAUTION: Due to dynamic nature of this system, having it enabled might result in
> broken track/replay files.

## Disable Multicrew Controls Input When Joining as WSO

If checked, when joining as WSO in multiplayer with a human pilot, your local
controls inputs (stick, rudder pedals and throttle) will be ignored by default.
You can toogle your local input back with assigned keybind.

## Jester Landing Callouts

If enabled, Jester will assist the pilot during landing by calling out aircraft
altitude, similar as seen in civilian aviation.

> 💡 Real Phantom WSOs did not assist during landing.

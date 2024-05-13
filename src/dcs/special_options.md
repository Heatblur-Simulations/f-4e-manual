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

> 💡 As an example, in certain situations it would require beyond human strength
> to pull the stick all the way back. With this set, when pulling the real
> joystick beyond that limit, the in-game flight stick is limited and not pulled
> equally aft. This also prevents for example accidentally pulling 20 G and
> instantly blacking out, just because the real joystick has no, or reduced,
> force feedback.

## Stick Force Blending

When maximum movement of the stick would result in excessive forces being
generated, having this activated will scale down the generated force to improve
handling precision, but also can help to prevent accidentally pulling extreme
Gs.

## AFCS Breakout Deadzone

Percentage of stick input after which the AFCS system will recognize the pilot
stick was moved from neutral trim position (force transducer switches closed).

This will affect the AFCS roll and pitch channel operation and prevent it from
fighting your roll input. That is, when moving the stick beyond this deadzone,
the AFCS understands that the pilot wants to take control and the AFCS will stop
trying to correct the movement.

For more info see
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

## Jester UI

### Allow Mouse Controls

When checked, the Jester UI allows interaction with the mouse moving it over
items and left clicking.

The option can be disabled if for example only head-tracking is preferred and
the automatic mouse detection is perhaps triggering too often, e.g. when having
placed the mouse on the arm of the chair.

### Allow Head-Tracking

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
frequently. Also, the _Dynamic_ option is less meaningful in VR, as the UI
elements are then all rendered on the front always.

> 💡 Jester Dialogs always use the _Center_ type, requiring to look forward.

#### Max Angle

Defines the angle (in degrees) the head has to be moved off-center to reach the
corners of the UI.

In other words, reducing this value from its default of 10° makes head-tracking
more sensitive to head movement, while increasing it will reduce the
sensitivity.

> 💡 VR users might find a lower angle more comfortable, since the head-to-game
> translation is normally 1:1 in VR.

#### Deadzone

Defines the angle (in degrees) the head has to be moved off-center to for the UI
to recognize head-movement and engage head-tracking.

If the head is moved less than the deadzone (0.5° by default), the cursor is
automatically set to the center instead and not moved.

> 💡 Users playing with a high and very sensitive head-to-game translation might
> find it useful to increase this value slightly.

## Radar Stick for Cursor

When checked, the binds mapped to control the
[Antenna Hand Control](../cockpit/wso/right_console/front_section.md#antenna-hand-control)
can also be used to move the cursor used for Offset Bombing and similar, making
binding the two
[Track Wheels](../cockpit/wso/right_console/center_section.md#along-track-wheel)
obsolete.

## FFB Gain

For users with force-feedback sticks, this setting can be used to adjust the
gain of the forces per axis.

The default setting is 100% for Roll and Pitch axis. Greater values will
increase the force used by the stick, while smaller values will decrease it.

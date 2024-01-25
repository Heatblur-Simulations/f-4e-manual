# Pedestal Group

This area behind the stick contains the radar screen (<num>1</num>), the DSCG controls (<num>
2</num>)
as well as the controls for the targeting pod (<num>3</num>).

![wso_dscg_knobs_above](../../img/wso_dscg_knobs_above.jpg)

![wso_dscg_and_pedestal_panel](../../img/wso_pedestal_group_overview.jpg)

## Digital Scan Converter Group (DSCG)

![wso_dscg_controls](../../img/wso_dscg_controls.jpg)

The DSCG displays radar, weapon and targeting pod video footage.

The glare shield cover can be removed by clicking on it.

### Grid Knob

This knob, located on the top left above the glare shield, controls
brightness of the display grid on the visual field of the DSCG display;
clockwise increases brightness, counterclockwise decreases.

### Scale Knob

Located on the top right, above the glare shield, controls brightness of the
bezel range scales surrounding the DSCG display;
clockwise increases brightness, counterclockwise decreases.

### H - Home on Jam Lamp

Light inside the top left corner of the glare shield, illuminates
when the radar has achieved angle tracking in Home on Jam mode.

### T - Track Lamp

Light inside the top right corner of the glare shield, illuminates when a
standard radar lock on is achieved. Will go out in the event
the radar falls back to memorized range and rate information should the lock be
lost.

### Cursor RNG (Range)

The Cursor RNG knob (<num>2</num>) increases (clockwise) and decreases (counterclockwise) the
relative
brightness of the hemispherical Along Track range cursor in MAP PPI and Beacon PPI modes on
both displays (WSO and Pilot).

### Cursor OFS (Offset)

The Cursor OFS knob (<num>4</num>) increases (clockwise) and decreases (counterclockwise) the
relative
brightness of the Cross Track cursor in the MAP PPI and Beacon PPI modes on both displays
(WSO and Pilot).

### Contrast Knob - CONTR

The Contrast knob (<num>1</num>) controls relative contrast level of DSCG display; clockwise
increases
contrast, counterclockwise reduces contrast.

### Brightness Knob

The Brightness knob (<num>3</num>) increases (clockwise) and decreases (counterclockwise) the
brightness of the
overall scope display.

### Mode Knob

The rotary mode knob (<num>5</num>) sets the current mode of the DSCG components.

| Name      | Description                                                                                                                   |
|-----------|-------------------------------------------------------------------------------------------------------------------------------|
| OFF       | Turns off DSCG display and de-powers all DSCG components.                                                                     |
| STBY      | Powers DSCG components, DSCG display remains off. Used for takeoff and landing.                                               |
| DSCG TEST | Displays a test search display image with 8 shades of grey to confirm normal operation. Select Range 10 for proper sizing.    |
| RDR BIT   | Provides [BIT sequence](../../procedures/bit_tests/radar_air_to_air.md) test grids for calibration of radar performance.      |
| RDR       | Used for radar display functionality in all employment modes.                                                                 |
| TV        | Used for TV raster imagery with EO weapons, as well as [targeting pods](../../systems/weapon_systems/pave_spike/overview.md). |

## Target Designator Control Set

![target_des_panel](../../img/wso_target_designator_controls.jpg)

This is the main panel to interact with
the [Pave Spike Targeting Pod](../../systems/weapon_systems/pave_spike/overview.md).

### Reticle brightness

The knob (<num>1</num>) controls contrast of the TV reticle from black (full counter-clockwise) to
green
(full clockwise). Should be set to attain maximum contrast in the display window
during the designation and attack procedure.

### Boresight knobs

Three knobs (2,3 and 4) to control the boresight position of the pod in azimuth, elevation
and roll within 2.5 degrees in either direction.

Azimuth and Elevation can best be calibrated in the 12-VIS mode, while roll is
best calibrated in 9-VIS.

> 💡 Normally the Pod is correctly calibrated by the ground crew before getting
> into the plane, but can drift due to combat damage or high G maneuvers in which case a
> recalibration
> by the WSO is needed.

See [3.11.5.6. Boresight Procedure](../../systems/weapon_systems/pave_spike/other.md#boresight)
for details.

### Stow Button

Alternating presses (<num>5</num>) un-stows and stows the Pave Spike pod head. The head is
stowed when the button is illuminated.

When un-stowed, the pod will move accordingly to the selected acquisition mode.

To prevent damage to the system, the pod must be stowed during takeoff, landing
and any High-G maneuvers.

> 🟡 CAUTION: The stowed position is held electrically
> only and without power, the pod swings freely and gets damaged when forcefully
> bumped into its gimbal limits.

### Laser Ready Select Button

Pushing the button (<num>6</num>) enables designator laser firing if illuminated after pressing.

Light remains off if interlocks (nose gear up and all pod functions working)
inhibit use. Subsequent press deactivates laser system.

### Power On Button

Applies (<num>74</num>) power to the targeting pod when pressed and released. Selected again to
power off targeting pod. Button lamp will turn off once head is stowed.

To prevent damage to the system, whenever equipped, power to the system should
be turned on even when not using the pod.

### BIT Selector Button

Pressed (<num>8</num>) to advance to the
desired [BIT](../../systems/weapon_systems/pave_spike/other.md#bits)
mode
as displayed in the adjacent window.

[BIT 1](../../systems/weapon_systems/pave_spike/other.md#bit-1) is the regular mode of the pod and
must be selected for normal operations.

### Light Brightness Knob

The rotary knob (<num>9</num>) controls brightness of all lamps on this panel, except the Overheat
lamp.

### Reject/Override Button

When the pod detects a too huge discrepancy between the laser measured slant
range and the INS based computed ranged, it automatically rejects former and
prefers latter.

In this case, the button (<num>10</num>) can be used to force the use of the laser measured
slant range instead.

### Acquisition Mode Selector Switch

Three position switch (<num>11</num>) determining the pods main operation mode.

| Name                                         | Description                                                                                                                                                                         |
|----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 12-VIS                                       | Slaves LOS parallel to the optical sight pipper.                                                                                                                                    |
| [WRCS](../../systems/weapon_systems/wrcs.md) | Slaves LOS to the [WRCS](../../systems/weapon_systems/wrcs.md) cursors unless [WRCS](../../systems/weapon_systems/wrcs.md) integration is deactivated; reverts to 12-VIS otherwise. |
| 9-VIS                                        | Slaves LOS to 90 degrees below FRL and rolled 90 degrees left.                                                                                                                      |

### WRCS Out

If lit (<num>12</num>), the [WRCS](../../systems/weapon_systems/wrcs.md) is not integrated into the
pod and
functionalities requiring its integration are not available.

Can be pressed to manually disengage or engage integration, unless it was
disintegrated by other means.

### BIT Status Indicator

Illuminates (<num>13</num>) based on completion of the selected BIT process; GO confirms
functionality, MALF shows [BIT](../../procedures/bit_tests/overview.md) failure for a given test
cycle.

### Overheat Lamp

The OVHT lamp illuminates (14, upper half) to indicate an overheat condition in the pod.

To prevent damage, turn off the pod and give it some time to cool before further
use. Ignoring the lamp will cause parts of the pod to melt, damaging it
irreparably.

To prolong use of the pod and prevent overheating, limit slow and low-level
flight, as well as continuous use of the laser. As a rule-of-thumb, do not use
the laser for longer than 15 minutes without allowing for cooling between uses.
Limit continued slow and low level flight while operating the pod to 30 minutes.
For extreme outside temperatures, adjust the limits accordingly.

### INS Out

If lit (14, lower half), the [INS](../../systems/nav_com/ins.md) is not integrated into the pod and
functionalities requiring its integration are not available.

Can be pressed to manually disengage or engage integration, unless it was
disintegrated by other means.

## Rudder Pedal Adjustment Crank

![wso_pedal_crank](../../img/wso_rudder_adjust.jpg)

Used to adjust ergonomic position of the rudder pedals forward or back from the
WSO.

Requires 12 full turns to move the pedals across the entire range.

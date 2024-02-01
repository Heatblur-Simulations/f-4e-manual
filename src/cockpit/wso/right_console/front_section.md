# Front Section

The front area contains controls for weapon delivery and the [INS](../../../systems/nav_com/ins.md).

## Laser Coder Control

![laser_coder_control](../../../img/wso_laser_code_control.jpg)

The WSO can set the laser code used by the targeting pod by using the four small
push-buttons on this panel.

### Code Buttons

Each press (<num>1</num>) will advance the corresponding digit by one.

Codes directly relate to laser frequencies, resulting in them having to be
between 1111 and 1788 and not use digits 0 or 9 in order to be valid.

> 💡 Weapon laser codes can be adjusted by the [Crew Chief](../../../crew_chief/overview.md),
> the default code used is 1688.

### Enter Button

Once a code has been set, it can be transferred to the Pave Spike by pressing
the ENTER button (<num>2</num>) to the right.

When power is applied to the system, it automatically initiates a transfer of
the currently set code.

### No Go Lamp

Validation of an entered code takes about 5 seconds. If the NO-GO lamp is lit,
the code is invalid.

## Inertial Navigation Control Panel

![wso_ins_control_panel](../../../img/wso_ins_panel.jpg)

The Inertial Navigation Control Panel provides the rear pilot mode selection and
system alignment command selection.

See [3.3.2 INS Navigation](../../../systems/nav_com/ins.md) for further information.

### Mode Selector Switch

The HDG MEM-GYRO COMP switch (<num>1</num>), located under a cover, primarily stays in the GYRO
COMP position for Gyro Compass type of alignment. Switching it to HDG MEM,
before turning on the INS, allows, if previously stored, heading memory
alignment.

> 💡 Heading can be stored in the
> [mission editor](../../../dcs/mission_editor.md#ins-reference-alignment-stored).

### Power Control Knob

Knob positions (<num>2</num>) are:

| Name                                                       | Description                                                                                                                                                                                                                                                                                                                  |
|------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| OFF                                                        | System off.                                                                                                                                                                                                                                                                                                                  |
| STBY                                                       | Standby- power is applied to the heaters and temperature control system, and initiates Coarse alignment (if [GYRO COMP](../../../systems/nav_com/ins.md#gyrocompass-alignment) is selected on the toggle).                                                                                                                   |
| [ALIGN](../../../systems/nav_com/ins.md#alignment-options) | Performs fine platform and gyro leveling and [BATH](../../../systems/nav_com/ins.md#best-available-true-heading) (or [HDG MEM](../../../systems/nav_com/ins.md#heading-memory-alignment)) alignment. Then, if available, performs [Gyro-compassing](../../../systems/nav_com/ins.md#gyrocompass-alignment) (Fine) Alignment. |
| NAV                                                        | Activates the INS for navigation function, performance of which is based on the alignment quality.                                                                                                                                                                                                                           |

### HEAT Lamp

The HEAT lamp (<num>4</num>) illuminates when the system is placed into STBY mode, and remains
illuminated for 2 minutes after the gyros have reached operating temperature.
The system will not allow Gyro-compassing alignment if switched out of STBY
before this lamp has shut off.

### ALIGN Lamp

The ALIGN lamp (<num>3</num>) provides
current [INS alignment](../../../systems/nav_com/ins.md#alignment-options)
through illuminating
steady ([BATH alignment](../../../systems/nav_com/ins.md#best-available-true-heading) complete), or
flashing at the completion of [GYRO COMP](../../../systems/nav_com/ins.md#gyrocompass-alignment)
or [HDG MEM](../../../systems/nav_com/ins.md#heading-memory-alignment)
alignment.

## Antenna Hand Control

![Antenna Hand Control](../../../img/wso_antenna_hand_control_overview.jpg)

Joystick which integrates with the [radar](../../../systems/radar/overview.md) to perform
range (fore and aft) and azimuth (left and right) positional control of the
acquisition symbol on the radar
display in the air-to-air modes, as well as seeker/EO sensor direction
with [AGM-65 Maverick](../../../stores/air_to_ground/missiles/maverick.md)
and [Pave Spike](../../../systems/weapon_systems/pave_spike/overview.md).

### Antenna Elevation Control

A thumbwheel (<num>2</num>) on the left side of the stick controls the elevation
angle of the radar antenna, displayed via the EL strobe on the DSCG display.

### Challenge Button

If controlling the radar the button (<num>1</num>) initiates an IFF interrogation.

For the [Pave Spike targeting pod](../../../systems/weapon_systems/pave_spike/overview.md), it
instead toggles the field of view between WIDE and NARROW.

### Action Switch (Trigger)

A 2-stage trigger (<num>3</num>) to lock targets. Exact behavior depends on whether
currently controlling the [radar](../../../systems/radar/overview.md),
[weapons](../../../stores/overview.md)
or the [targeting pod](../../../systems/weapon_systems/pave_spike/overview.md).

### Boresight Adjustment

![Boresight Adjustment](../../../img/wso_boresight_adjust.jpg)

The boresight position of the antenna stick can be adjusted at
its base using a screwdriver. Once set, the new values can be
loaded by pressing the button below.

This is only accessible to ground crew personnel.

## Weapon Delivery Panel

![wso_weapon_delivery_panel](../../../img/wso_weapon_delivery_panel.jpg)

### ACTIVATE Switch

The two position switch (<num>1</num>) is only available after the Target Insert button is pressed,
placing the
switch to ON provides power to the weapon release computer's circuits for
a [LABS](../../../systems/weapon_systems/arbcs.md) release
using the [WRCS](../../../systems/weapon_systems/wrcs.md) release range data.

### TGT FIND Switch

The two position switch (<num>2</num>) is used to combine the delivery functionality of
the [ARBCS/LABS](../../../systems/weapon_systems/arbcs.md) system with the
[WRCS](../../../systems/weapon_systems/wrcs.md) TGT FIND mode. NORM is selected for the standard
function of the WRCS without LABS delivery capability. Selecting HOLD and
an ARBCS setting from the pilot's Delivery Mode Knob provides WRCS Target Offset
search capability, and the attack is completed using the
normal ARBCS procedures from the IP.

### RANGE Switch

Selecting x100 on the two position switch (<num>3</num>) changes the release range multiplier on
the [WRCS](../../../systems/weapon_systems/wrcs.md) panel to a
factor of 100; in NORM, the standard factor of 10 is applied to the release
range.

## Volume Panel

![wso_volume_panel](../../../img/wso_volume_panel.jpg)

A small panel to the right of the antenna hand control stick contains two
combined knobs to control volume.

### Canopy/Low Altitude Warning

The cubic knob (<num>1</num>) sets audio level for canopy open and low altitude voice warnings.

This system is not installed on this variant of the F-4E.

### Stall Warning

The Stall Warning knob (<num>2</num>) controls the volume of
the [AoA tones](../../../systems/flight_controls_gear/flight_controls.md#aural-tone-system) that
play when flying at certain angles.

Under certain conditions, the system can override the volume to ensure the cue
is always audible in dangerous situations.

# Center Section

The center area of the left console features the radar control
and countermeasure panel.

## Radar Set Control Panel

![wso_radar_set_control_panel](../../../img/wso_radar_set_control_panel.jpg)

### Power Knob

![Power Knob](../../../img/wso_radar_power_knob.jpg)

Five position rotary switch controlling power state of
the [APQ-120 Radar.](../../../systems/radar.md)

See the [Radar Power Section](../../../systems/radar.md#power) for more details.

### Polar Switch

Controls polarization of transmitted radio frequency energy. LIN should be used in normal
conditions, CIR 1 and CIR 2 can be used to reduce precipitation clutter at the expense of increased
ground clutter.

[See Radar Polarization Knob Section for more details.](../../../systems/radar.md#polarization-control)

### Range Knob

![Range Knob](../../../img/wso_radar_range_knob.jpg)

Used to select range sweep of 5, 10, 25, 50, 100, or 200 mile ranges on both
radar displays. Ranges up to 50 are displayed on the range lamp [range lamp](../../pilot/dcsg_controls.md#range-lights).

See the [Radar Range Knob Section](../../../systems/radar.md#radar) for more details.

### Maneuver Switch

Controls radar tracking acceleration response. LOW sets a limit on antenna acceleration and HI
removes acceleration limit.

[See Radar Maneuver Knob Section](../../../systems/radar.md#maneuver-switch)

### Bar Scan Switch

Selects elevation scan pattern between 1 and 2 bars. In 2 bar scan, the search pattern alternates
1.875 degrees above and 1.875 degrees below the radar scan plane.

[See Radar Scan Switch Section for more details](../../../systems/radar.md#scan)

In [boresight](../../../systems/radar.md#bst-boresight-position)
or [air-to-ground modes](../../../systems/radar.md#air-grd-air-to-ground-position), 1 bar scan is
automatically commanded.

### Aspect Knob

![Aspect Knob](../../../img/wso_radar_aspect_knob.jpg)

Used to program the [AIM-7](../../../stores/air_to_air/aim_7.md) with a predetermined simulated
Doppler instead of actual received Doppler, so that the WSO can provide an estimated correct
speed-gate for the sparrow when not tracking.



### Receiver Gain Knobs (RCVR GAIN)

Coarse (outer ring) and Fine (inner knob) gain control for the radar receiver.

### Track Switch

Selects range tracking type for use in heavy clutter environments, or automatic
tracking under normal circumstances.

#### Manual

When in the MAN position, the WSO places the acquisition symbol over the
intended target and triggers half-action on the Antenna Hand Control stick. The range strobe is
positioned relative to in-range on a closing target, and the WSO selects
full-action. To solidify the track, the WSO uses the Manual Vc knob to place the
range strobe and target return video at the same rate of movement.

#### Automatic

In the AUTO position, the range and closure calculations are performed
automatically. The WSO places the acquisition symbol over the target return and
presses full action. Should the target maneuver in excess of the speed
capability of the radar, the Maneuver switch can be set to HI G and the target
reacquired.

#### AOJ OUT

The AOJ OUT position is used to disable the acquisition on jamming function of
the radar, if excess noise causes the Radar to erroneously switch into AOJ/HOJ condition. In the
event that the radar acquires a Home-on-Jam (HOJ) lock, the position can be
selected to place the radar back into a search configuration to initiate a
lock-on against the jamming target and initiate a standard angle track lock.

### Display Knob

![Display Knob](../../../img/wso_radar_display_knob.jpg)

Sets the display type of the radar scope to access specific mode functionality
in conjunction with the Mode knob. The types are as follows:

| Name                                                                                  | Description                                                                                                   |
|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| [B WIDE](../../../systems/radar.md#air-to-air-b-sweep--b-wide-b-nar-and-vi-vis-ident) | Selects 120 degree B-sweep for search. Half-action places the sweep under manual Antenna Hand Control stick.  |
| [B NAR](../../../systems/radar.md#air-to-air-b-sweep--b-wide-b-nar-and-vi-vis-ident)  | Selects a 45 degree B-sweep sector for search, which is manually shifted with the Antenna Hand Control stick. |
| [PPI WIDE](../../../systems/radar.md#air-to-ground-ppi-wide-and-ppi-nar)              | Selects a 120 degree wide plan position indicator sweep for MAP mode.                                         |
| [PPI NAR](../../../systems/radar.md#air-to-ground-ppi-wide-and-ppi-nar)               | Selects a 45 degree plan position indicator sweep that can be shifted with the Antenna Hand Control stick.    |
| [VI](../../../systems/radar.md#air-to-air-b-sweep--b-wide-b-nar-and-vi-vis-ident)  | Provides pure pursuit guidance to a locked target for Visual Intercept; a break X will appear at 1000' range.                      |

### Manual Vc Knob

![Manual Vc Knob](../../../img/wso_radar_man_vc_knob.jpg)

A 12 position switch used to apply estimated range rate of closure (clockwise,
0-9), or estimated opening of range (counterclockwise, 0-2) against a target in
manual track mode.

The numbers are multiplied by 100 knots while closure means closing in to the F-4
and opening means the target is flying away from the F-4.

### Pulse Switch

Three position switch controlling radar pulse width and pulse repetition
frequency (PRF) in the Air-to-Air radar search modes. With the [APQ-120](../../../systems/radar.md) placed
in [CAGE mode](../../../systems/radar.md#cage-mode), short pulse operation is automatically
selected. In [AIR-GND modes](../../../systems/radar.md#air-grd-air-to-ground-position), the pulses
are automatically commanded, deactivating the switch.

| Name  | Description                                                                                          |
|-------|------------------------------------------------------------------------------------------------------|
| AUTO  | Uses Power Level Mode Switching to determine best Pulse selection. Selects short pulse is used for acquire and track.  |
| LONG  | Wide pulse width and low PRF, allowing maximum range detection; no track automatic pulse adjustment. |
| SHORT | Narrow pulse width with high PRF for increased close range performance.                              |

### Mode Knob

![Mode Knob](../../../img/wso_radar_mode_knob.jpg)

A six position switch that determines the current base mode of operation of the
radar.

| Name    | Description                                                                                                                                                                                                                                                                  |
|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| BST     | [Air-to-Air boresight](../../../systems/radar.md#air-to-air-b-sweep--b-wide-b-nar-and-vi-vis-ident) with antenna aligned radar boresight line and optical sight with sight in A/A. |
| RDR     | Search Mode with Feedhorn Nutation (wider beamwidth) mode.                                                                                                                                                                                                                                                      |
| MAP     | Search Mode without Feedhorn Nutation (narrower beamwidth)                                                                                                                                                                                                                                                   |
| AIR-GRD | [Air-to-Ground boresight](../../../systems/radar.md#air-grd-air-to-ground-position), Tracks range of illuminated ground, radar is boresighted to the radar boresight line with drift compensation.                                                                                                                  |
| BEACON  | Radar receives and displays signals from ground or airborne beacon transponders for navigation.                                                                                                                                                                              |
| TV      | Not used with DSCG. Detunes [AIM-7](../../../stores/air_to_air/aim_7.md) if selected, preventing sparrows from guiding.                                                                                                                                                                               |

### Skin Track Light

Lamp that illuminates when a track is attained with range data. In the
event of [HOJ](../../../systems/radar.md#home-on-jam-hoj) or a range memory situation, the light
will go off. Accompanied on the rear DSCG radar scope with the T symbol that illuminates under the
same circumstances.

## AN/ALE-40 Cockpit Control Unit (CCU)

![wso_an_ale_40](../../../img/wso_an_ale_40.jpg)

CCU is and important part of the [Countermeasures System](../../../systems/defensive_systems/countermeasures.md).
It's used to select different modes of operation and gives
WSO the ability to dispense countermeasures.
For further information see
[CCU](../../../systems/defensive_systems/countermeasures.md#cockpit-control-unit-ccu---wso-cockpit).

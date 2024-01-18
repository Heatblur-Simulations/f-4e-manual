# Center Section

The center area of the left console features the radar control
and countermeasure panel.

## Radar Set Control Panel

See [Radar Set Control Panel](../../../systems/radar/interface.md#radar-set-control-panel)
section for more
detailed description of all the functions below.

![wso_radar_set_control_panel](../../../img/wso_radar_panel.jpg)

### Power Knob

![Power Knob](../../../img/wso_radar_power_switch.jpg)

Five position rotary switch controlling power state of
the [APQ-120 Radar.](../../../systems/radar/overview.md)

| Name | Description                                                                                                                        |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------- |
| OFF  | Powers radar off.                                                                                                                  |
| TEST | Applies voltage to control monitor power and provides [BIT-test](../../../procedures/bit_tests/overview.md) functions 1 through 6. |
| STBY | Power applied to radar, remains in a non-transmitting standby state.                                                               |
| OPR  | System is fully operational.                                                                                                       |
| EMER | Overrides the time delay, pressure, and temperature restrictions to allow radar operation.                                         |

See the [Radar Power Section](../../../systems/radar/interface.md#power) for more details.

### Polar Switch

![Polar Switch](../../../img/wso_radar_polar_switch.jpg)

Controls polarization of transmitted radio frequency energy. LIN should be used in normal
conditions, CIR 1 and CIR 2 can be used to reduce precipitation clutter at the expense of increased
ground clutter.

[See Radar Polarization Knob Section for more details.](../../../systems/radar/interface.md#polarization-control)

### Range Knob

![Range Knob](../../../img/wso_radar_range_switch.jpg)

Used to select range sweep of 5, 10, 25, 50, 100, or 200 mile ranges on both
radar displays. Ranges up to 50 are displayed on the range lamp [range lamp](../../pilot/dscg_controls.md#range-lights).

See the [Radar Range Knob Section](../../../systems/radar/interface.md#radar-set-control-panel)
for more details.

### Maneuver Switch

![Maneuver Switch](../../../img/wso_radar_maneuver_switch.jpg)

Controls radar tracking acceleration response. LOW sets a limit on antenna acceleration and HI
removes acceleration limit.

[See Radar Maneuver Knob Section](../../../systems/radar/interface.md#maneuver-switch)

### Bar Scan Switch

![Bar Scan Switch](../../../img/wso_radar_bar_scan_switch.jpg)

Selects elevation scan pattern between 1 and 2 bars. Only RDR-B modes can make use of 2 bars.

[See Radar Scan Switch Section for more details](../../../systems/radar/interface.md#scan-switch)

### Aspect Knob

![Aspect Knob](../../../img/wso_radar_aspect_knob.jpg)

Used to program the [AIM-7](../../../stores/air_to_air/aim_7.md) with a predetermined simulated
Doppler instead of actual received Doppler, so that the WSO can provide an estimated correct
speed-gate for the sparrow when not tracking.

[See Aspect Knob Section for more details](../../../systems/radar/interface.md#aspect)

### Receiver Gain Knobs (RCVR GAIN)

![Receiver Gain Knob](../../../img/wso_radar_receiver_gain.jpg)

Coarse (outer ring) and Fine (inner knob) gain control for the radar receiver. Larger values result
in more noise and can cause display to become saturated. Lower values may result in lower detection ranges.

[See Receiver Gain Knob Section for more details](../../../systems/radar/interface.md#receiver-gain-rcvr-gain)

### Track Switch

![Track Switch](../../../img/wso_radar_track_switch.jpg)

Selects range tracking type for use in heavy clutter environments, or automatic
tracking under normal circumstances.

[See Radar Track Switch Section for more details](../../../systems/radar/interface.md#scan-switch)

### Display Knob

![Display Knob](../../../img/wso_radar_display_knob.jpg)

Sets the display type of the radar scope to access specific mode functionality
in conjunction with the Mode knob. The types are as follows:

| Name     | Description                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| B WIDE   | Selects 120 degree B-sweep for search. Half-action places the sweep under manual Antenna Hand Control stick.  |
| B NAR    | Selects a 45 degree B-sweep sector for search, which is manually shifted with the Antenna Hand Control stick. |
| PPI WIDE | Selects a 120 degree wide plan position indicator sweep for MAP mode.                                         |
| PPI NAR  | Selects a 45 degree plan position indicator sweep that can be shifted with the Antenna Hand Control stick.    |
| VI       | Provides pure pursuit guidance to a locked target for Visual Intercept; a break X will appear at 1000' range. |

### Manual Vc Knob

![Manual Vc Knob](../../../img/wso_radar_man_vc.jpg)

A 12 position switch used to apply estimated range rate of closure (clockwise,
0-9), or estimated opening of range (counterclockwise, 0-2) against a target in
manual track mode.

The numbers are multiplied by 100 knots while closure means closing in to the F-4
and opening means the target is flying away from the F-4.

[See MAN Vc Knob Section for more details](../../../systems/radar/interface.md#manual-vc-man-vc)

### Pulse Switch

![Pulse Switch](../../../img/wso_radar_pulse_switch.jpg)

Three position switch controlling radar pulse width and pulse repetition
frequency (PRF).

| Name  | Description                                                                                          |
|-------|------------------------------------------------------------------------------------------------------|
| AUTO  | Uses Power Level Mode Switching to determine best Pulse selection. Selects short pulse is used for acquire and track.  |
| LONG  | Wide pulse width and low PRF, allowing maximum range detection; no track automatic pulse adjustment. |
| SHORT | Narrow pulse width with high PRF for increased close range performance.                              |

[See Pulse Switch Section for more details](../../../systems/radar/interface.md#pulse-switch)

### Mode Knob

![Mode Knob](../../../img/wso_radar_mode_knob.jpg)

A six position switch that determines the current base mode of operation of the
radar.

| Name    | Description                                                                                                                                                                                                                                                                  |
|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| BST     | Air-to-Air boresight with antenna aligned radar boresight line and optical sight with sight in A/A. |
| RDR     | Search Mode with Feedhorn Nutation (wider beam-width) mode.                                                                                                                                                                                                                                                      |
| MAP     | Search Mode without Feedhorn Nutation (narrower beam-width)                                                                                                                                                                                                                                                   |
| AIR-GRD | [Air-to-Ground boresight](../../../systems/radar/interface.md#air-grd-air-to-ground-position), Tracks range of illuminated ground, radar is boresighted to the radar boresight line with drift compensation.                                                                                                                  |
| BEACON  | Radar receives and displays signals from ground or airborne beacon transponders for navigation.                                                                                                                                                                              |
| TV      | Not used with DSCG. De-tunes [AIM-7](../../../stores/air_to_air/aim_7.md) if selected, preventing sparrows from guiding.                                                                                                                                                                               |

[See Mode Knob Section for more details](../../../systems/radar/interface.md#radar-modes-mode)

### Skin Track Light

Lamp that illuminates when a track is attained with range data. In the
event of [HOJ](../../../systems/radar/operation.md#home-on-jam) or a range memory situation, the light
will go off. Accompanied on the rear DSCG radar scope with the T symbol that illuminates under the
same circumstances.

## AN/ALE-40 Cockpit Control Unit (CCU)

![wso_an_ale_40](../../../img/wso_an_ale_40.jpg)

The CCU is a primary control panel of the Countermeasures System.

It is used to select different modes of operation and gives the WSO the ability to dispense countermeasures.

For further information see
[CCU](../../../systems/defensive_systems/countermeasures.md#cockpit-control-unit-ccu---wso-cockpit).

### Dispense Button

Initiates chaff/flare dispensing as selected by Cockpit control unit
and [AN/ALE-40 programmer](../../../cockpit/pilot/left_console/aft_section.md#anale-40-programmer)

### Ripple Switch

Guarded by a cover, when positioned ON, dispenses flares at rate of
ten per second until dispensers are empty, so long as flaps and speed brakes are retracted.

> 💡 After around 10 seconds, all countermeasure have been dispensed.

### Counters

Indicate quantity of chaff and flare cartridges remaining, respectively.

They are automatically set by the ground crew when rearming.

### Chaff Mode Knob

| Name | Description                                                                 |
|------|-----------------------------------------------------------------------------|
| OFF  | Chaff system inactive.                                                      |
| SGL  | A single burst commanded when dispense button pressed.                      |
| MULT | A salvo commanded according to program when either dispense button pressed. |

### Flare Mode Knob

| Name | Description                                                                 |
|------|-----------------------------------------------------------------------------|
| OFF  | Flare system inactive.                                                      |
| SGL  | A single burst commanded when dispense button pressed.                      |
| MULT | A salvo commanded according to program when either dispense button pressed. |

### Indicator Lights

Illuminates whenever a mode is selected on the respective countermeasure mode
knob.

Can be rotated to dim and pressed to test.

# Aft Section

The aft section of the right console features the navigation and lighting panel.

## Navigation Panel

![Navigation Panel](../../../img/wso_nav_panel.jpg)

The Navigation Computer Control Panel serves as an interface for managing the aircraft's
navigation, including its position and targets for navigation instruments like the HSI and BDHI.
It can operate in two modes: INERTIAL and AIR DATA.

See [Navigation Computer](../../../systems/nav_com/ins.md#navigation-computer) for details.

The panel is equipped with a range of control knobs and switches essential for the operation
of the Navigation Computer.

### Function Selector Knob

![Function Selector Knob](../../../img/wso_nav_panel_function_selector_knob.jpg)

A five position rotary switch (1) used to set the function of the navigation system.

| Position | Description                                                                                                                      |
|----------|----------------------------------------------------------------------------------------------------------------------------------|
| OFF      | System powered down.                                                                                                             |
| STBY     | System is powered but the latitude and longitude position integration is off.                                                    |
| TARGET 1 | Computes range and bearing to the selected coordinates set on the TARGET rollers.                                                |
| TARGET 2 | Computes range and bearing to the memorized coordinates.                                                                         |
| RESET    | Clears the memorized coordinates. When moved back to TARGET 2, the selected coordinates set on the TARGET rollers are memorized. |

### Wind Control Knobs and Counters

![Wind Knobs](../../../img/wso_nav_panel_wind_counters.jpg)

Two rotary knobs (2) that enable manual setting of wind velocity (in knots) and direction (in
degrees, from), displayed on the counters. Utilized by the Navigation Computer in AIR DATA mode.

### Magnetic Variation Knob and Counters

![Magnetic Variation Knob](../../../img/wso_nav_panel_magnetic_variation.jpg)

A rotary knob (3) that allows manual setting of magnetic variation (in degrees). Essential for
navigation computations
in AIR DATA mode and for initial (BATH) INS Alignment.

### Position Control Knobs and Counters

![Own Position Knobs](../../../img/wso_nav_panel_pos_control.jpg)

These knobs (9) are used to manually change the current aircraft position in terms of latitude
and longitude, as displayed on the counters (in degrees and minutes). They must be pressed
in to be effective.

> 💡 In INERTIAL mode, the Position Update Switch must be used in conjunction with these knobs
> to update the position coordinates.

### Target Control Knobs and Counters

![Target Position Knobs](../../../img/wso_nav_panel_tgt_control.jpg)

The target controls (10) enable the setting of target latitude and longitude counters, which can be
used either as direct waypoint targets (when the Function Selector Knob is set to TARGET 1) or to
memorize TARGET 2 coordinates (after the RESET position has been selected).

### Position Update Switch

![Position Update Switch](../../../img/wso_nav_panel_pos_update_switch.jpg)

A three position switch (7) to set the position updating.

| Position | Description                                                                                                                   |
|----------|-------------------------------------------------------------------------------------------------------------------------------|
| SET      | Disengages the updating mechanism of position counters, allowing them to be freely rotated to the desired position.           |
| NORMAL   | Position counters are updated based on the INS signal in Inertial Mode, or by the system's own computations in Air Data Mode. |
| FIX      | Updates the INS position at a rate of approximately 3 minutes of arc per second.                                              |

> 💡 The switch features an approximate 0.5-second delay when set to NORM, designed to prevent
> unwanted
> updates of the counters during the transition from SET to FIX.

### Variation Sync Meter

![Variation Sync Meter](../../../img/wso_nav_panel_variation_sync.jpg)

In Inertial mode, this meter (5) displays the discrepancy between the INS-computed and manually set
magnetic variation. In AIR DATA mode, the manually set variation does not affect this indicator.

### Test Cap Off Light

![Test Cap Light](../../../img/wso_nav_panel_test_cap_off.jpg)

Illuminates (4) when there is a failure in the true airspeed circuit from the Air Data Computer,
indicating an open circuit condition.

### Latitude and Longitude Sync Lights

![Lat/Lon Sync Lights](../../../img/wso_nav_panel_sync_lights.jpg)

Illuminate (6) when the position counters for latitude or longitude do not match the coordinates
provided by the INS (difference above 1.5 arc minutes).

### Air Data Mode Light

![Air Data Mode Light](../../../img/wso_nav_panel_air_data_light.jpg)

Illumination (8) indicates that the Navigation Computer is operating in AIR DATA Mode.

## Cockpit Lighting Control Panel

![wso_cockpit_lighting_panel](../../../img/wso_cockpit_lights_aft.jpg)

The Cockpit Lighting Control Panel provides control of all panel edge lighting,
flight instrument panel lighting, the console floodlights, the white floodlights
found under the canopy sill over each console, and also includes the Warning
Light Test and Standby Compass Light switch.

### White Floodlight

The White Floodlight switch (4) acts independent of all other controls on the panel,
and is either ON or OFF. It activates a separate emergency floodlight (also
called Thunderstorm Light) that illuminates the cockpit in white.

### Standby Compass Switch

The STBY COMP switch (5) illuminates the light for the Standby Compass.

### Console Floodlight

This switch (6) controls the lighting level of red floodlights
providing general lighting for the consoles. Three settings are available: DIM, MED and BRT.

> 💡 To turn them off, place the switch in DIM
> and the Console Knob in OFF.

> 💡 Floodlights for the Instrument Panel are controlled by the pilot,
> see the [Instrument Flood Switch](../../pilot/right_console/wall.md#instrument-flood).

### Warning Light Test Switch

The Warning Light Test Switch (7) if set to the TEST position, confirms function of
the various emergency indicators in the cockpit.

### Instrument Panel Knob

This knob (2) controls the background illumination of the instrument panel,
as well as edge lighting for most of its gauges.

> 💡 The main flight instruments are controlled by the pilot via the
> [Flight Instrument Brightness Knob](../../pilot/weapon_management.md#flight-instrument-brightness-knob)
> instead.

### Indexer Knob

Controls the brightness (3) of the AoA Indexer lights to the left and right
of the canopy bow.

### Console Knob

The Console Light Control Knob (1), with range from OFF to BRT, controls the
illumination level for the left and right console.

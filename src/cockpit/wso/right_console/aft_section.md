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

| Position | Description                                                                                                                      |
| -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| OFF      | System powered down.                                                                                                             |
| STBY     | System is powered but the latitude and longitude position integration is off.                                                    |
| TARGET 1 | Computes range and bearing to the selected coordinates set on the TARGET rollers.                                                |
| TARGET 2 | Computes range and bearing to the memorized coordinates.                                                                         |
| RESET    | Clears the memorized coordinates. When moved back to TARGET 2, the selected coordinates set on the TARGET rollers are memorized. |

### Wind Control Knobs and Counters

![Wind Knobs](../../../img/wso_nav_panel_wind_counters.jpg)

Enables manual setting of wind velocity (in knots) and direction (in degrees, from), displayed
on the counters. Utilized by the Navigation Computer in AIR DATA mode.

### Magnetic Variation Knob and Counters

![Magnetic Variation Knob](../../../img/wso_nav_panel_magnetic_variation.jpg)

Allows manual setting of magnetic variation (in degrees). Essential for navigation computations
in AIR DATA mode and for initial (BATH) INS Alignment.

### Position Control Knobs and Counters

![Own Position Knobs](../../../img/wso_nav_panel_pos_control.jpg)

These knobs are used to manually change the current aircraft position in terms of latitude
and longitude, as displayed on the counters (in degrees and minutes). They must be pressed
in to be effective.

> 💡 In INERTIAL mode, the Position Update Switch must be used in conjunction with these knobs
> to update the position coordinates.

### Target Control Knobs and Counters

![Target Position Knobs](../../../img/wso_nav_panel_tgt_control.jpg)

The target controls enable the setting of target latitude and longitude counters, which can be used either
as direct waypoint targets (when the Function Selector Knob is set to TARGET 1) or to memorize
TARGET 2 coordinates (after the RESET position has been selected).

### Position Update Switch

![Position Update Switch](../../../img/wso_nav_panel_pos_update_switch.jpg)

| Position | Description                                                                                                                   |
|----------|-------------------------------------------------------------------------------------------------------------------------------|
| SET      | Disengages the updating mechanism of position counters, allowing them to be freely rotated to the desired position.           |
| NORMAL   | Position counters are updated based on the INS signal in Inertial Mode, or by the system's own computations in Air Data Mode. |
| FIX      | Updates the INS position at a rate of approximately 3 minutes of arc per second.                                              |

> 💡 The switch features an approximate 0.5-second delay when set to NORM, designed to prevent unwanted
> updates of the counters during the transition from SET to FIX.

### Variation Sync Meter

![Variation Sync Meter](../../../img/wso_nav_panel_variation_sync.jpg)

In Inertial mode, this meter displays the discrepancy between the INS-computed and manually set
magnetic variation. In AIR DATA mode, the manually set variation does not affect this indicator.

### Test Cap Off Light

![Test Cap Light](../../../img/wso_nav_panel_test_cap_off.jpg)

Illuminates when there is a failure in the true airspeed circuit from the Air Data Computer,
indicating an open circuit condition.

### Latitude and Longitude Sync Lights

![Lat/Lon Sync Lights](../../../img/wso_nav_panel_sync_lights.jpg)

Illuminate when the position counters for latitude or longitude do not match the coordinates
provided by the INS (difference above 1.5 arc minutes).

### Air Data Mode Light

![Air Data Mode Light](../../../img/wso_nav_panel_air_data_light.jpg)

Illumination indicates that the Navigation Computer is operating in AIR DATA Mode.

## WSO Cockpit Lighting Control Panel

![wso_cockpit_lighting_panel](../../../img/wso_cockpit_lights_aft.jpg)

The Cockpit Lighting Control Panel provides control of all panel edge lighting,
flight instrument panel lighting, the console floodlights, the white floodlights
found under the canopy sill over each console, and also includes the Warning
Light Test and Standby Compass Light switch.

### White Floodlight

The White Floodlight switch acts independent of all other controls on the panel,
and is either ON or OFF. It activates a separate emergency floodlight (also
called Thunderstorm Light) that illuminates the cockpit in white. The lamp is
energized through the Battery Bus to ensure it is always operational, even in
case of total power loss. Do not forget to turn off the light before parking the
aircraft for a longer time, as it will otherwise drain the battery.

### Standby Compass Switch

The STBY COMP switch illuminates the light for the Standby Compass.

### Console Floodlight

The red console floodlights (CONSOLE FLOOD) are triggered independently of the knob
when it is rotated clock-wise of the OFF detent position, and offer three
settings - DIM, MED, or BRT. The floodlights will remain on until the Console
Light Control knob is returned to the OFF position, and the floodlight switch is
placed in DIM. All three positions are powered by different buses to ensure
maximal availability:

| Lamp   | Bus                   |
|--------|-----------------------|
| Bright | Essential 28V DC Bus  |
| Medium | Left Main 14V AC Bus  |
| Dim    | Left Main 115V AC Bus |

### Warning Light Test Switch

The Warning Light Test Switch if set to the TEST position, confirms function of
the various emergency indicators in the cockpit.

### Instrument Panel Knob

The Flight Instrument Light Knob (marked INSTR PANEL), when rotated clock-wise of the OFF
detent, controls illumination of the following six instrument lights
in unison:

- Airspeed/Mach Indicator
- Attitude Director Indicator
- Angle of Attack Indicator
- Vertical Velocity Indicator
- Altimeter
- Horizontal Situation Indicator

When in the OFF position, these indicators are independently controlled for
illumination by the knobs on the Flight Instrument Lights Intensity Panel.

The Indexer Lights brightness knob controls relative illumination of the AoA
indexers on both sides of the windscreen. Marked positions are DIM and BRT
(bright), with the highest level to the right of the knob.

### Indexer Knob

Controls the brightness of the AoA Indexer lights to the left and right
of the canopy bow.

### Console Knob

The Console Light Control Knob, with range from OFF to BRT, controls
illumination level for all panel edge lighting and the console floodlights.

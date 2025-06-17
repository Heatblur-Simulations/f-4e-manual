# Aft Section

The aft section of the left console holds communication and navigation controls.

## TACAN Control Panel

![Tacan](../../../img/wso_tacan_panel.jpg)

The [TACAN](../../../systems/nav_com/tacan.md) Control Panel is used to enter
the desired [TACAN](../../../systems/nav_com/tacan.md) channel, mode, and
audible volume for the monitoring of said channel by the aircrew. The panel is
duplicated in both cockpits, and the panel in command of the
[TACAN](../../../systems/nav_com/tacan.md) receiver is selected with the NAV CMD
button of the Communication Control Panel.

### Channel Knobs

On the control panel there are two Navigation Channel Control knobs (7, 4 and
3), with the left (<num>7</num>) controlling the first two digits of the channel
value (hundreds and tens), and the right (4 and 3) controls the single unit
(ones) values. The right knob also includes an outer ring which sets the X or Y
value for the desired [TACAN](../../../systems/nav_com/tacan.md) channel.

### Test Button and Lamp

Between these two knobs is the TEST button (<num>6</num>), which performs the
ground testing cycle after warmup, and can also be used to perform an in-flight
confidence test of the system's performance.

The lamp above the button illuminates to indicate test status.

See
[7.19.4 Navigation test procedures chapter](../../../procedures/bit_tests/navigation_tests.md#tacan-test)
for further information.

### Volume Knob

To the upper right, the VOL knob (<num>2</num>) is available to set the desired
audio level for the received [TACAN](../../../systems/nav_com/tacan.md) station.

### Function Selector

The [TACAN](../../../systems/nav_com/tacan.md) Function Selector Knob
(<num>1</num>) determines the presentation and type of information provided on
the [HSI,](../../pilot/flight_director_group.md#horizontal-situation-indicator)
[ADI](../../pilot/flight_director_group.md#attitude-director-indicator), and
[BDHI,](../../wso/upfront_indicators.md#bearing-distance-heading-indicator-bdhi)
respectively.

| Name    | Description                                                                                                                                                                                                                                                                                                                                                                    |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| OFF     | The [TACAN](../../../systems/nav_com/tacan.md) receiver is de-energized and offline.                                                                                                                                                                                                                                                                                           |
| REC     | The [TACAN](../../../systems/nav_com/tacan.md) receiver is active, providing bearing information on the [HSI](../../pilot/flight_director_group.md#horizontal-situation-indicator), [BDHI](../../wso/upfront_indicators.md#bearing-distance-heading-indicator-bdhi), and [ADI](../../pilot/flight_director_group.md#attitude-director-indicator).                              |
| T/R     | Both the receive and transmit functions of the [TACAN](../../../systems/nav_com/tacan.md) are active, which provide bearing and nautical mile range information for the [HSI](../../pilot/flight_director_group.md#horizontal-situation-indicator) and [BDHI](../../wso/upfront_indicators.md#bearing-distance-heading-indicator-bdhi).                                        |
| A/A REC | The [TACAN](../../../systems/nav_com/tacan.md) receiver decodes bearing information from compliant aircraft for the [HSI](../../pilot/flight_director_group.md#horizontal-situation-indicator), [BDHI](../../wso/upfront_indicators.md#bearing-distance-heading-indicator-bdhi), and [ADI](../../pilot/flight_director_group.md#attitude-director-indicator) steering display. |
| A/A TR  | The [TACAN](../../../systems/nav_com/tacan.md) receiver receives both bearing and slant range information in nautical miles from the transmitting aircraft, providing this on the [HSI](../../pilot/flight_director_group.md#horizontal-situation-indicator) and [BDHI](../../wso/upfront_indicators.md#bearing-distance-heading-indicator-bdhi).                              |

> 💡 Air to Air [TACAN](../../../systems/nav_com/tacan.md) functionality
> requires the channel to be set 63 channels above or below the cooperating
> aircraft, but on the same range- X or Y. So a tanker on 123Y should be set to
> 60Y in the F-4.

## Communication Control Panel

![CCP](../../../img/wso_comm_control_panel.jpg)

The Communication Control Panel provides a selection and mode of the
[UHF radio](../../../systems/nav_com/uhf.md) in the aircraft.

### Command Buttons

The panel is duplicated in both cockpits, and control over the radio is
determined through pushing the COMM CMD Button (<num>10</num>) in the respective
seat; the button will illuminate green (<num>9</num>) in the seat in priority.
In the same fashion, the NAV CMD button (<num>7</num>) dictates which seat has
control of the [TACAN](../../../systems/nav_com/tacan.md) settings; its button
will also illuminate (<num>8</num>) on the panel of the seat that has command
(control) of the system. Each press of a command button will toggle who is in
command of the system.

### Radio Volume

Beneath the COMM CMD button is the radio volume (<num>11</num>) for the
respective seat.

### Squelch Switch

Close to the NAV CMD button is the Squelch switch (<num>6</num>), which enables
or disables receiver squelch.

### Frequency and Channels

The A-3-2-T Selector knob (<num>5</num>) sets the first digit of the manually
selected frequency (3 or 2) of the [UHF radio](../../../systems/nav_com/uhf.md).

> 💡 Due to engine limitations, modes A and T, belonging to the HAVE-Quick
> functionality, are not simulated.

The four Frequency Selection Knobs work in concert with the A-3-2-T knob and
Preset/Manual switch. Frequencies are entered beginning with the 3 or 2
selection on the A-3-2-T Selector, and can be entered from 225.00 to 399.975 MHz
in increments of 0.025. With the Preset/Manual switch (<num>4</num>) in the
Manual position, the UHF radio is directly set to the displayed channel. In the
Preset position, the set channels can be entered into the COMM CHAN memory, with
the desired position selected with the Comm Channel Control knob (<num>12</num>)
(the smaller knob to the left of the Preset/Manual switch), and displayed in the
COMM CHAN window. Channels can be stored in the displayed channel preset with
the SET pushbutton. Once stored, channels are directly selected using the Comm
Channel Control knob with the Preset/Manual switch in the Preset position.

Directly underneath the Comm Channel Control Knob is the Aux Channel Knob
(<num>13</num>) and Indicator. This knob is used to access 20 common preset
channels that cannot be changed in the cockpit.

The Aux Volume Control knob (<num>1</num>) on the lower right of the panel
raises and lowers the volume of the Aux receiver channel.

The Set button (<num>14</num>) can be used to save the channel frequency that is
currently selected by the Frequency knobs. The frequency will be saved as the
currently selected channel.

### Tone Button

The Tone Pushbutton (<num>3</num>) is used for transmission of a Time of Day
(TOD) signal along with a tone to friendly aircraft requiring a Time of Day
update for proper HAVE-Quick functionality.

> 💡 Due to engine limitations, the tone button, belonging to the HAVE-Quick
> functionality, is not simulated.

### Comm Function Selector

The Comm Function Selector Knob (<num>2</num>) determines the current
configuration of the radio system.

| Name      | Description                                                                |
| --------- | -------------------------------------------------------------------------- |
| OFF       | All UHF Radios off.                                                        |
| T/R ADF   | Comm receiver - comm reception.                                            |
|           | Comm transmitter - comm transmission.                                      |
|           | Comm guard receiver - standby.                                             |
|           | Aux receiver - ADF reception.                                              |
| T/R+G ADF | Comm receiver - comm reception.                                            |
|           | Comm transmitter - comm transmission.                                      |
|           | Comm guard receiver - guard reception.                                     |
|           | Aux receiver - ADF reception.                                              |
| ADF+G CMD | Comm receiver - ADF reception.                                             |
|           | Comm transmitter - comm transmission. ADF interrupted during transmission. |
|           | Comm guard receiver - guard reception on ADF antenna.                      |
|           | Aux receiver- comm reception.                                              |
| ADF+G     | Comm receiver - ADF reception.                                             |
|           | Comm transmitter - comm transmission. ADF interrupted during transmission. |
|           | Comm guard receiver - standby.                                             |
|           | Aux receiver- guard reception.                                             |
| Guard ADF | Comm receiver - guard reception.                                           |
|           | Comm transmitter - guard transmission.                                     |
|           | Comm guard receiver - standby.                                             |
|           | Aux receiver - ADF reception.                                              |

### Cockpit Altitude Gauge

![Cockpit Altitude Gauge](../../../img/wso_cabin_pressure.jpg)

Displays the current pressure inside the cockpit as a means of equivalent
effective cabin altitude above mean sea level in thousands of feet.

That is, if the gauge reads 5, the pressure inside the cabin is equivalent to an
altitude of 5000 ft MSL.

To prevent sickness and hypoxia, the pressure should be observed and oxygen
supply adjusted accordingly:

| Pressure Range      | Description                                  |
| ------------------- | -------------------------------------------- |
| below 13000 ft      | Breath regular air                           |
| 13000 ft - 40000 ft | Breath Oxygen through mask                   |
| 40000 ft - 62000 ft | Breath pressurized Oxygen through mask       |
| above 62000 ft      | Need to wear a pressure suit (not available) |

See
[3.7 Utility chapter, Oxygen section](../../../systems/utility.md#oxygen-system)
for further information.

## Oxygen Quantity Gauge

![Oxygen Quantity Gauge](../../../img/wso_oxygen_level.jpg)

It has a range from 0 to 10 liters. Loss of electrical power is indicated by
appearance of a power-OFF flag on the instrument face.

## VOR/ILS Volume Control

![VOR/ILS Volume Control](../../../img/wso_vor_ils_volume.jpg)

The volume control consists of two knobs: one square knob (<num>1</num>) adjusts
VOR and localizer audio, while the round knob (<num>2</num>) controls the marker
beacon audio.

See [3.3.4 VOR/ILS Chapter](../../../systems/nav_com/vor_ils.md) for further
information.

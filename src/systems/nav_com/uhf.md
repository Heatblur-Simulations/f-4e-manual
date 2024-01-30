# UHF Radio

The UHF Radio in the F-4E provides both voice communication (AM) and Automatic Direction
Finding (ADF) capabilities. It comprises two main units: a radio transmitter-receiver
(referred to as _COMM_), an amplifier power supply-receiver unit (referred to as _AUX_),
and a guard receiver (at 243 MHz).
Control over these systems is facilitated by two control panels, one located in each cockpit.
The panel that is currently active assumes full command over the radio operations.

The COMM unit is capable of receiving and transmitting on a wide range of manually
selected frequencies, totaling 3500, or it can operate on 18 preset channels. This
functionality covers a frequency range from 225.0 MHz to 399.95 MHz.

On the other hand,
the AUX unit is designed to receive signals on 20 preset frequency channels, ranging
from 265.0 MHz to 284.9 MHz.

Both the COMM and AUX receivers have the capability to
process ADF signals, which can be displayed on the Horizontal Situation Indicator (HSI)
or Bearing Distance Heading Indicator (BDHI). The AUX frequencies are set by the unit radio
maintenance shop, set for the frequencies that are needed for the area of operations. In-Game you
can set them through the [9.8 Mission Editor Settings](../../dcs/mission_editor.md).

Two blade antennas, one upper and one lower, as well as an ADF antenna, are provided.
Once the antenna mode is set for the primary channel, the AUX receives signals from the other
antenna.

> 💡 The COMM and AUX preset channels and ADF stations may be set in
> [mission editor](../../dcs/mission_editor.md#radio-options).

## Comm Control Panel

![pilot_uhf_control_panel](../../img/pilot_comm_control_panel.jpg)

Two Comm
[Control Panels](../../cockpit/pilot/right_console/front_section.md#communication-control-panel)
are installed, found on the right console in the front cockpit, and on the left console
in the rear cockpit. These provide management of the radio in either seat,
with selectable priority.

For Automatic Direction Finder (ADF) navigation to function effectively,
the appropriate receiver must be set to the ADF mode, as selected by the Mode Selector.

### Comm Command Button and Light

![pilot_uhf_command_and_light](../../img/pilot_uhf_comm_command.jpg)

Control authority of the UHF radio is set by the COMM CMD button (<num>10</num>). A green
light (<num>9</num>)
illuminates in the cockpit with control next to the button. Either cockpit can
take control, or if already in control, press the button to provide control of
the radio to the other seat.

### UHF Volume Control

Sets the listenable volume (<num>1</num>) for the UHF radio for the given crew-member.

# Radar warning receiver

## Introduction

The Radar Warning Receiver (RWR) is an upgraded system with expanded memory and enhanced
capabilities for detecting various threats. It features an improved CM-479 processor with
reprogrammable Electrically Erasable Read Only Memory (EEROM). The EEROM processor can be
reprogrammed in-flight using a portable MK-2278/APM-379 conversion kit. The receiver alerts the
Electronic Warfare (EW) officer and, in some cases, the gunner, upon detecting specific threat radar
signals. The system is designed for minimal in-flight control manipulation, with most modes set
before takeoff or target ingress. AN/ALQ-172(V)2 PR transmitters blank the warning receiver to
prevent the display of associated transmitted signals. Audio examination of received signals is
integrated with the interphone system. Self-test features enable comprehensive checks of the warning
receiver on the ground or during flight.

## Operational modes:

### Power on

Press and release the POWER button on the indicator-control to energize the system. The POWER ON
light should illuminate. Allow a 9-second period for the azimuth indicator filament warm-up. During
this time, the indicator-control lights may flash randomly. Once the warm-up is complete, the system
will be in open mode, normal file, with a floating diamond on the azimuth indicator, and normal
audio. SEARCH will be off, and ALTITUDE will remain in its last-used position on the warning
receiver.

### Auto-restart

If the system experiences a momentary power loss or surge after turn-on, it will briefly turn off.
In such cases, the system will automatically restart within 15 seconds, followed by a 9-second
time-in period. After the auto-restart and time-in, the system will be in OPEN mode, normal file,
with a floating diamond on the azimuth indicator, and normal audio. The SEARCH button will be
deactivated (even if it was activated before the power interruption), while ALTITUDE will return to
the position it held before the power loss.

## Buttons

### System power

Pressing and releasing this button provides power to the system. SYSTEM POWER legend will illuminate

### Unknown

When the system identifies a radar with characteristics not stored in its threat files or when there
are insufficient parameters for clear identification, it categorizes the radar as an unknown
emitter. The U legend on the UNKNOWN button will flash at a 16 Hz rate (the UNKNOWN legend is always
illuminated). Pressing and releasing the UNKNOWN button will display a band-coded symbol at the
appropriate position on the azimuth indicator, and the U legend will remain steadily lit.

### On-sys Test

The RWR divides its frequency coverage into three bands (1, 2, and 3) to enhance signal-to-noise
ratio. In the SYSTEM TEST, bands 1, 2, and 3 symbols appear in each quadrant, confirming operational
azimuth channels. Quadrant dots on the outer ring signal proper alignment of the deflection
circuitry. Shifted dots indicate a corresponding shift in the lethality envelope, and a missing dot
renders that portion of the azimuth display inoperable. The center dot aids in locating the azimuth
indicator center in dark environments. A fifth dot at the bottom during system test confirms the
system as an RWR. Proper system sensitivity alignment is indicated when quadrant dots are near
symbol centers. Misalignment beyond 1/8 inch requires realignment. The diamond cycles clockwise to
each symbol with corresponding audio. A software version number at the top shows non-flashing during
normal operation; flashing indicates failed checksum or memory tests. The ON legend illumination on
the SYS TEST button signals successful checksum and memory tests.

### TGT Seperation

Pressing the button on the CRT separates collocated targets for easier identification, with the ON
legend illuminating. The symbols remain separated while the button is held down. Upon release, the
targets stay separated for approximately 3 seconds before returning to their original positions.

### Low Altitude

At high altitudes, display priority is given to AIs (Air intercepts) and high altitude SAM systems.
By pressing and releasing the altitude button, low altitude display priority can be given to some
AAA and low altitude SAMs. LO ALT legend is then illuminated. Pressing the altitude button again
returns the system to high altitude priority.

### Handoff

In normal operation, the diamond is in a floating state, adhering to preprogrammed display
priorities as the environment changes. When the HANDOFF pushbutton is depressed, collocated targets
separate, and the diamond rotates through all displayed threats in a preprogrammed order. It
continues to rotate as long as the pushbutton is held in. Releasing the pushbutton latches the
diamond onto the threat symbol it currently encloses, regardless of other environmental activity.
When latched, the audio becomes diamond audio, and the diamond legend on the HANDOFF button
illuminates (this legend is on whenever power is applied). As the diamond cycles through displayed
threat priorities, the operator hears the audio of each emitter as the diamond encloses it. The
diamond returns to floating mode by either (1) momentarily pressing the HANDOFF button, (2) loss of
the threat it was latched onto, or (3) a change from one threat file to another. If the HANDOFF
button is pressed and held, the diamond will continue cycling through the displayed emitters.

### Search

The RWR primarily serves as a terminal threat warning system. Terminal threats, characterized by
narrow pulsewidths, are its focus, while nonterminal threats have longer pulsewidths. To include
long pulsewidth threats in the processing and display cycle, press and release the SEARCH button on
the indicator-control. (The S legend will illuminate; SEARCH is etched on the button). The system
stays in search mode until the button is pressed again or power is removed. Acquisition, GCI, and
heightfinder radars will be symbolized by the S, while other existing threats remain displayed.
Notably, search radars can only be audibly detected when the search button is depressed.

### Mode

After system power initiation and time-in, the MODE button indicates that the system is in OPEN
mode. In this configuration, the system can process and display up to 16 threats using appropriate
alphanumeric symbols. Azimuth angles are shown relative to the aircraft heading, while the distance
from the aircraft to the threat is displayed based on symbol displacement from the center of the
screen. This distance is normalized relative to the threat's lethal range. Threats beyond the outer
ring of the azimuth indicator are outside the lethal range of the associated weapon, while those
inside the outer ring are within lethal range. The threat from which audio can be heard is
highlighted with a diamond. The ALQ-155 Mode is controlled by the Sensor Integration indicator
control. Pressing and releasing the MODE pushbutton selects the ALQ-155 mode, with a potential
momentary delay before entry. The mode is confirmed by the illumination of the legend; refrain from
pressing the button again during this delay.

TODO RWR SYMBOLOGY
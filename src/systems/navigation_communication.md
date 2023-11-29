# Navigation & Communication

## Flight Director Group

Accurate course navigation is provided by the Flight Director Group, which
includes the Flight Director Computer, the Horizontal Situation Indicator (HIS)
along with the Navigation Function Selector Panel in the front cockpit, and the
Bearing Distance Heading Indicator (BDHI) together with the Navigation Mode
Selector Switch in the rear cockpit.

### Navigation Function Selector Panel

Found on the front cockpit instrument panel, the Navigation Function Selector
Panel has two knobs- a Bearing/Distance Selector Knob and a Mode Selector Knob.

### Bearing Distance Selector Knob

The Bearing Distance Selector Knob sets the bearing pointer and range indication
displays on the HSI. Positions are VOR/TAC, TAC, ADF/TAC, and NAV COMP.

In VOR/TAC mode, magnetic and relative bearing to the VOR station and range to
the TACAN station are provided on the HSI bearing pointer and range indicator.

With TAC mode, magnetic and relative bearing and range to the selected TACAN
station are displayed.

In ADF/TAC mode, magnetic and relative bearing to the selected ADF station and
range to the TACAN station are displayed.

And in NAV COMP mode, magnetic and relative bearing and range are provided to
the destination set in the navigation computer.

### Mode Selector Knob

The Mode Selector Knob controls the remaining informational displays on the HSI,
as well as the pitch and bank steering bars on the ADI. The mode selector knob
operates independently from the bearing pointer and range indicator, and the
selector positions are VOR/ILS, TAC, NAV COMP, and HDG. Navigation modes set by
this knob will be indicated by an illuminated word message when the instrument
panel lights are on; available mode word messages are TAC (TACAN), NAV
(navigation computer), UHF (ADF), MAN (HDG entry), ILS (instrument landing
system), and TGT (target). TGT illuminates that the WSO has provided a target
entry and pressed TGT on the Cursor Control Panel.

### Flight Director Switch

The Flight Director Switch turns ON and OFF the Flight Director Computer pitch
and bank angle steering clues, visible on the ADI. Selecting OFF removes these
bars from view.

### Horizontal Situation Indicator

The Horizontal Situation Indicator displays a top-down plan view of current
navigation, with cues provided relative to the selected navigation mode selector
position.

In VOR/ILS, the Heading Set Knob is used to enter the desired magnetic heading.
The Course Set knob is used to set the VOR radial or inbound localizer. Once
set, the Deviation Indicator shows current deviation from the selected course.

TACAN mode presents information relative to the current selected TACAN beacon.
To provide full information, the Bearing/Distance Switch should be set to TAC.
The course arrow and course selector window are set using the Course Set knob to
the desired TACAN course. Once set, the Deviation Indicator and aircraft symbol
provide the top down display relative to the set course, with a maximum
deviation deflection of 10 degrees. The Heading Set knob is used to set a
desired TACAN course for bank steering presentation on the ADI. If the heading
marker is not set, bank steering on the ADI will not be correct to intercept the
desired course. A To-From indicator displays when the mode selector is in TACAN
or VOR/ILS mode when either are tuned and received; once the course is
intercepted, the indication references whether the current course is taking the
aircraft to or from the tuned station.

NAV COMP mode displays magnetic ground track on the course arrow and the course
selector window relative to the current navigation computer fix. The bank
steering bar provides steering information to direct an approach to the command
heading.

With HDG mode active, the course arrow and deviation are slaved to the lubber
line and aircraft magnetic heading. The course selector window displays the
current selected magnetic heading, which is adjusted using the Heading Set knob.
The given course information is applied for an ADI bank steering command.

### Attitude Director Indicator

The ADI provides command steering to intercept selected headings, TACAN
stations, tracks, VOR radials, or navigation computer destinations. Bank
steering instruction is presented using the bank steering bar, which can
reference angles up to 35 degrees. Should a bank angle in excess of 35 degrees
be desired, the instructed angle can be disregarded during the turn. When the
Heading Set knob has been used to enter the correct target heading, the
intercept presentation is accurate within a 60 degree field of a TACAN course,
or 90 degrees for a VOR radial. Additionally, a Glideslope Pointer is provided
for relative glideslope position indication during an ILS approach.

Upon startup of the ADI, an OFF warning flag will be displayed until the
AN/AJB-7 gyro has aligned. This can also appear due to power loss or a signal
failure. The flag does not present if a system failure occurs outside of the
AN/AJB-7.

### Bearing Distance Heading Indicator

The Bearing Distance Heading Indicator (BDHI) displays navigation information
using two needles, referred to as the No. 1 and No. 2 pointers, which receive
inputs controlled by the WSO Navigation Mode Selector Switch.

When the upper position is selected to TACAN/ADF/UHF, the no. 1 pointer
indicates UHF bearing, and the no. 2 pointer indicates the TACAN bearing. If
there is no TACAN signal, both pointers indicate the ADF bearing.

With the middle position selected- VOR/TAC, the no. 1 pointer indicates the VOR
bearing, the no. 2 pointer indicates the TACAN bearing, and the range indicator
provides distance to the TACAN station. In the absence of a TACAN signal, both
pointers indicate the VOR station.

In the lower position, NAV COMP, the no. 1 pointer indicates bearing to the
navigation computer target coordinates, and the no. 2 pointer indicates magnetic
ground track. The range indicator notes distance to the target coordinates.

## AN/ASN-63 Inertial Navigation System

The AN/ASN-63 INS provides the F-4E aircrew and integrated weapons delivery
system with real time accurate positional, velocity, attitude, and heading
information. When the system is aligned to its most precise extent in
gyrocompass mode, the INS is accurate to 3 nautical miles per hour of circular
error probability (CEP).

### Inertial Measurement Platform

The system uses a four gimbal (outer roll, pitch, inner roll, azimuth) inertial
navigating platform, with the dual roll gimbals providing redundancy to
eliminate a gimbal lock in outer roll/azimuth gimbal alignment.

Installed on the platform are a pair of G-200 two-axis gyros, with the upper
gyro axis aligned for spin on the north-south axis while the lower gyro aligns
for east-west spin; torque detection in each gyro tracks the perpendicular axes-
ergo, the high gimbal detects east/west rotation, while the low gyro detects
north/south rotation. In this way, rotation in all three dimensions are
represented. The gyros are floated, and proper operation can only take place
once the fluid has attained operating temperature (160 degrees F); the system is
effectively climate controlled across the altitude operating range of the
Phantom. A series of precision magnetic torquers provide localization movement,
while acceleration pickoffs function within a separate electromagnetic field
perform the actual data capture from the displacements of the gyroscopes.

Along the platform, set orthogonally (at 90 degree respective positions) are a
trio of A-200D accelerometers. These accelerators, similarly floated to the
gyros, with a similar arrangement of torquers and displacement pickers to
provide velocity capture. Increasing the accuracy of these evaluations is the
inclusion of a tuning fork, the resonance from which eliminates effectively all
static friction in the motion capture assembly.

### Navigational Computer and Output Signal Distribution

The respective captured motion signals from the gyroscopes and accelerometers
are amplified in the LN-12D navigational computer, which then performs the earth
reference integration. The LN-12D compensates for all longitudes and can
effectively track as high as 80 degrees latitude, where the mechanical
limitations of calculating tangent relative to the equator is too high for the
device.

The AN/ASN-63 provides information to other systems in the Phantom from the
OSDU, or Output Signal Distribution Unit. The OSDU provides ground speed,
north-south and east-west velocity, total velocity, inertially stabilized
altitude, climb angle, true inertial heading, ground track, and drift angle. The
WRCS receives inertial true heading, ground track, drift correction angle, and
drift angle for its ballistics computer. Drift angle is captured for the BDHI,
HSI, and FDC. Drift correction angle is also provided to the radar and LCOSS.

### Alignment Options

The LN-12 has three modes of alignment on aircraft start: BATH, Heading Memory
(HDG MEM), and Gyrocompass alignment. Prior to performing any alignment, STBY
Reference System must be selected, the Nav Computer Control Panel should be
turned on and its position update switch should be selected to NORMAL. Local
magnetic variation should be entered on the variation counter, and the position
counter should be set to local latitude and longitude. Doing so will greatly
expedite gyrocompass alignment. Further, alignment should not be performed with
the wings in their folded position, as the magnetic flux valve that provides
compass synchronization wil be 60 degrees outside of normal position.

The INS also includes an in-flight position update option, should the aircrew
note gross deviation from known location fixes.

### Best Available True Heading

STBY position must be placed momentarity to avoid an INS no-go.
Once set to ALIGN, the ALIGN lamp will illuminate steadily after 75 seconds
indicating BATH Alignment is ready. Once in BATH, the INS is accurate to roughly
5 and a half nautical miles per hour CEP, although higher inaccuracies can be
seen. Once BATH is achieved, NAV mode can be selected and the aircraft flown
with the above caveat.

### Heading Memory Alignment

This option becomes accessible if the alignment has been previously stored and
the aircraft has remained stationary. To access it, select HDG MEM located
beneath the red guard on the control panel before transitioning the INS knob
from OFF to ALIGN. This alignment method minimizes the alignment time, offering
a relative Circular Error Probability (CEP) at the optimal end of BATH (5.5
nautical miles), or even Gyrocompass Alignment (3 nautical miles) if the
previous alignment occurred within the last 2 hours.

To access the accelerated HDG MEM alignment mode, the guard must be raised and
the switch actuated up, and the INS mode switch placed to ALIGN until the ALIGN
lamp starts flashing. Then, the INS can be placed into NAV mode. If time allows,
STBY mode can be selected before going to ALIGN to allow proper heating of the
gyroscopes (which goes through the illumination/off cycle as above).

### Gyrocompass Alignment

Maximum system precision is found by allowing the INS to perform a full
Gyrocompassing alignment. This method permits the gyros to find the most
accurate true north reference possible, but can entail substantial amounts of
time- and even greater time based on inaccurate or missing magnetic variation
setting entry prior to powering the INS on. As an example- for a one degree
compass heading error, the time to achieve maximum accuracy on the system is
approximately five minutes, which attains an accuracy of ±10 minutes of arc
alignment, giving the aforementioned 3 nautical miles of deviation per hour. The
minimum amount of time to complete a Gyrocompassing alignment once BATH or HDG
MEM level alignment is achieved is 50 additional seconds, while a normal
alignment takes around 5 minutes. If the aircraft is aligned at 70 degrees of
latitude or more, additional time should be expected.

To conduct Gyrocompass Alignment, it's necessary to keep the INS in STBY mode
until the HEAT light turns off. Moving to ALIGN while the lights are still on
prevents achieving full Gyrocompass Alignment, resulting in only the BATH
process being performed. The duration of the heating phase depends on the
ambient temperature. The system heats up at a rate of approximately 20°F per
minute, reaching an operational temperature of 160°F. Once the system reaches
its operating temperature, an additional 50 seconds are required until the HEAT
light extinguishes. After transitioning to ALIGN, the light will illuminate
steadily after 75 seconds, signaling the completion of the initial BATH
alignment, initiating the gyrocompassing process. Once Gyrocompass alignment
concludes, the ALIGN indicator will flash, indicating the system has achieved
full alignment. While gyrocompassing (when the align light is steadily lit), NAV
mode can be entered at any time, though optimal accuracy will only be attained
when the ALIGN indicator flashes.

Any other available time prior to moving the aircraft can be spent in ALIGN to
further increase system accuracy.

### In-Flight Emergency Alignment

In the event of a significant attitude error or failure of the STBY Attitude
Reference, an emergency in-flight alignment of the INS can be executed. The
aircraft must maintain straight and level flight, with the Reference System
Selector Knob set to STBY. Once in this configuration, the INS Mode Knob should
be switched to OFF, then to STBY for a duration of 15 seconds. Subsequently,
after the 15-second interval, return the Mode to NAV, and resume straight and
level flight. The process of resetting the Reference Selector to PRIM can be
performed approximately after 40 seconds, although the precise alignment time is
not specified.

It's important to note that the accuracy of the attitude in this alignment is
contingent upon how steadily the aircraft was flown during the alignment period
and subsequent alignments may be required. Following this emergency alignment,
only attitude information will be available. Velocities, position, and displays
on the navigation computer will be inaccurate and cannot be utilized for
navigation purposes.

### Navigation Computer

The ASN-46A Nav Computer is used for general navigation and tactical route
planning. The system contains both a great circle and rhumb line computational
capabilities, with the former being used for larger distance bearing
calculations (over 120 miles), and the latter for closer range accuracy. The Nav
Computer functions solely using aircraft-based instruments, ergo the INS, Air
Data Computer, and the magnetic compass; it can receive no information from the
ILS, VOR, or TACAN systems.

The system can maintain relative bearing and distance from up to two specific
waypoints at a time (identified as Target 1 and Target 2, with Target 2 being
held in memory), and this information is shown on the BDHI and ADI in real time.
For data to appear on the BDHI, the Navigation Selection Switch must be
positioned in NAV COMP.

The computer also provides confirmation of current LN-12 precision, using a pair
of lights marked LAT and LONG, as well as the Variation Sync Meter. When these
lamps are off, the current displayed position coordinates are within 1 1/2 arc
minutes precision. Magnetic variation detected by way of the INS gyroscopes is
compared against the manual performed prior to INS powerup via the Magnetic
Variation Control knob, and displayed on the Variation Sync Meter. This
deviation can be corrected on the Magnetic Variation Control Knob to bring the
sync to center. Although the magnetic variation control knob has no effect on
the meter in air data mode, positive correction prior to INS loss increases the
air data mode precision.

The Nav Computer can function in either Inertial or Air Data mode. Both modes 
provide the same outputs but the inertial mode (default) is more accurate.

In the event of an INS failure, the Nav Computer reverts to Air Data mode. In
Air Data mode. the rear pilot must continually monitor and adjust true wind
direction and speed, magnetic variation, as the only dead reckoning inputs 
available to the computer is true airspeed (from the air data computer) and 
magnetic heading from the compass system. When the system reverts to Air Data
mode, the AIR DATA MODE lamp will illuminate.

During startup, the Position Control Knobs, Wind Control Knobs, and Magnetic
Variation Control Knob are used to enter known latitude, longitude, wind
direction and speed, and magnetic variation for the location of the aircraft at
that time.

### Waypoint Entry

Entering waypoints and target information is performed using the Function
Selector Knob and the two Target Control Knobs, one for latitude, and the other
longitude.

| Name     | Description                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------- |
| OFF      | System off.                                                                                               |
| STBY     | System powered, but no latitude or longitude reference performed versus the values in the Target windows. |
| TARGET 1 | Provides readouts of range and bearing on the currently entered Target window values.                     |
| TARGET 2 | Selects range and bearing information from previously stored Target window values.                        |
| RESET    | Deletes any previously saved Target window values, stores currently entered Target window values.         |

Because of the Target 2 memory function, in practice the aircrew has some
flexibility in process depending on the demands of the mission. As an example,
should the Phantom crew be tasked with a CAP or defensive role relative to a
known position (ie, bullseye), the coordinates of that location can be loaded
into the Target Control values, the Function Selector placed into RESET, and
then returned to Target 2. Any change from Target 2 to Target 1 or STBY, then
back to Target 2 will maintain said location value, easily accessed.

The other common technique was "leapfrogging":

1. On startup, the second waypoint would be stored in Target 2 memory (entry on
   the Target Control values, Function to RESET, then back to Target 2).

2. Once the second waypoint location was stored, the rear pilot would then
   select Target 1 for live entry of the first in-flight waypoint on the Target
   Control values.

3. During flyout to the first waypoint, upon passing it over, Target 2 would be
   selected as the destination, and the next waypoint (3) would be entered on
   the Target Control Values.

4. Upon flyover of waypoint 2, the Function Knob would be positioned to RESET,
   then back to Target 2- now pulling the waypoint 3 values from the Target
   Control values.

This process would be continued over the course of the flight, and allow the
rear pilot the ability to immediately switch to Target 1 for a quick check of
relative position to another location of interest if required, or an in-flight
detour (such as to a tanker track), then return back to the next stored waypoint
for navigation.

### In Flight Updating

In flight updating with the Nav Computer is performed using direct overflight of
known target points, using a visual or radar fix, over a TACAN station, or via
instruction from GCI.

#### Inertial Mode Update

With the Nav Computer in Inertial mode, the aircraft is flown straight and level
at a known fix location.

1. On arrival, the Position Update Switch is placed in the SET position. Doing
   so disengages the longitude and latitude position counters.

2. The position longitude and latitude counters are set using their respective
   knobs for the know location.

3. Prior to arrival at the fix point, the Position Update Switch is placed and
   held in the FIX position.

4. Upon direct flyover of the fix point, the Position Update Switch is released,
   allowing it to fall back into NORMAL.

The correction rate of the Nav Computer is roughly 3 minutes latitude or
longitude per second, and the Update Switch must be held in FIX long enough to
account for the largest value. As an example, if the deviation is 9 minutes in
latitude and 4 in longitude, the FIX position must be held at least 3 seconds
prior to the aircraft directly passing the fix location. Further, the switch
actuation from SET to FIX must be smooth and direct, as there is a half second
time delay in the computer in the pass-through of NORMAL.

#### Air Data Mode Update

In Air Data Mode, the Nav Computer can be updated as in the Inertial Mode using
the SET/FIX method, or via direct rotation of the latitude and longitude
position knobs. Using the latter method requires the Function Select Knob to be
placed in STBY, TARGET 1, or TARGET 2. The SET/FIX method is preferred, as doing
so allows for instant update upon fix position flyover and release of the
switch.

## TACAN (Tactical Air Navigation) System

Bearing and range information to transmitting stations is provided by the TACAN
system. The TACAN system can receive information from ground stations as far as
390 miles, and air to air TACAN equipped aircraft to 200 miles. The TACAN system
provides the identity of the transmitting station and the dependability of the
signal received. Course deviation is calculated and displayed on navigation
systems set in TACAN mode. If a TACAN signal is invalid, a warning is displayed.
In the event of a signal loss, the system continues providing range tracking for
15 seconds, and bearing tracking for 3 seconds. The system will perform a
self-test after a signal loss to confirm function on the control panel. Two
TACAN antennas are provided, and signal switching is automatic to maintain the
best signal.

### TACAN Controls

TACAN controls are found on the navigation control panel in each cockpit.

#### Navigation Command Button and Indicator

The NAV CMD button and indicator performs command authority switch between the
two cockpits, and are found on the upper right corner of the Communication
Control Panel. A green light illuminates to the left of the button in the
cockpit that has control of the navigation system.

**Mode Selector Knob, BRG/DIST Selector Switch, and Navigation Function
Selector**

As detailed in the Flight Director Group section, the Mode Selector, BRG/DIST
Selector, and Navigation Function Selector determine the presentation of TACAN
information on the HSI, the ADI, and the BDHI.

#### Navigation Channel Control Knobs

On the TACAN Control Panel beneath the channel window, a pair of knobs set the
desired TACAN channel. The left knob controls the tens and hundred digits of the
channel. The right knob selects the units of the operating channel, and the
outer knob sets the X or Y channel; both X and Y have 126 available channels.
While the indicator can show 127, 128, and 129, these values are nonfunctional.

#### TACAN Function Selector Knob

OFF: the TACAN system is deenergized

REC: only the receiver is energized, and the system receives and decodes bearing
signals from the TACAN station and provides bearing information for the HSI,
BDHI, and ADI displays.

T/R: the TACAN generates distance information along with bearing; the distance
is then added to the HSI and BDHI, provided in nautical miles.

A/A REC: the TACAN receives and displays bearing information for the HSI, BDHI,
and ADI steering display from an aircraft providing a TACAN beacon signal. The
channel selected must be 63 channels above or below the transmitting aircraft
beacon, on the same X or Y channel range; for example, a tanker transmitting on
83X will be received on 20X.

A/A TR: the TACAN interrogates the equipped aircraft beacon to add range
information to the HSI and BDHI. The channel selection method remains the same
as A/A REC.

#### Navigation Volume Control Knob

The NAV VOL knob controls the headset audible volume of the received TACAN
station.

## VOR/ILS System

The VHF omnidirectional range instrument landing system, or VOR/ILS, provides
precise bearing and course deviation information from a transmitting ground
station. Additionally, the aircraft is able to use precision landing approach
and descent capabilities at localizer equipped fields. Guidance information from
the VOR/ILS system is provided to the pilot on the BDHI, ADI, and HSI. VOR/ILS
function is enabled on these displays using the appropriate Flight Director
Group control selections on the Bearing/Distance Selector switch, the Navigation
Mode Selector switch, and the Flight Director Switch.

### VOR/ILS Control Panel

The control panel for the VOR/ILS is found on the front cockpit left console;
the panel includes a frequency indicator, two frequency select knobs, a volume
control (marked NAV VOL), a marker beacon volume control knob (MB VOL), and a
VOL/MRK TEST pushbutton.

### VOR/ILS Frequency Selector Knobs

The Frequency Selector Knobs is a dual actuation concentric knob; the outer ring
selects the number to the left of the decimal point on the frequency indicator,
whereas the inner knob selects numbers to the right.

### NAV VOL Knob and MB VOL Knob

The NAV VOL knob both activates the VOL/ILS system, as well as controls the
audible volume for the front cockpit. The knob is turned clockwise to power the
system on, then further to increase the volume. The MB VOL knob adjusts the
volume of the marker beacon audio in the front cockpit.

### WSO Course Indicator

In the rear cockpit is the Course Indicator, on the main instrument panel; During
an ILS approach, the indicator displays relative heading for the course set in the
course selector window, as well as horizontal and vertical position relative to 
the ILS localizer and glide slope entered by the pilot. In this way, the WSO can
assist the pilot in achieving and maintaining glide slope. The controls for the
indicator are purely for the WSOs reference, and do not interact with the Flight
Director Group displays in the front cockpit.

Components of the course indicator are a TO-FROM indicator (does not function
with ILS), a course deviation scale, a glide slope deviation scale, a COURSE
selector window, a course SET knob, a heading pointer and heading scale, a
marker beacon light, a GLIDE SLOPE indicator, a course deviation indicator (LOC
OR RANGE), and course and glide slope OFF warning flags.

Once the pilot has selected an ILS frequency, the WSO must set a course inbound
heading in the selector window using the SET knob.

Used only with the ILS system (doesn't function with VOR).

## Intercom System

The Intercom System provides communication between the pilot, WSO, and ground
crew, and functions with external power, or the aircraft battery once either
Engine Master Switch is in the ON position.

### Intercom Control Panel

Each cockpit has an Intercom Control Panel, providing a volume control knob, an
amplifier selector, and a function selector switch.

### Volume Control Knob

The Intercom Volume Control knob sets relative volume level for the given
cockpit; increasing volume is performed by turning the knob clockwise. The
Intercom Volume Control does not affect any other cockpit audio signal.

### Function Selector Switch

The function selector offers three options: COLD MIC, HOT MIC (enabling automatic
intercom operation), and RADIO OVERRIDE. While RADIO OVERRIDE operates similarly
to HOT MIC, it also attenuates all sounds except for crew communication, the pullup
tone from the ARBCS, and the Shrike aural tone. For ground crew transmission to be
enabled, the WSOs switch must be set to HOT MIC.

### Amplifier Select Knob

The three position Amplifier Select Knob determines which amplification channel
is used: B/U for the backup, NORM for the normal amplifier, and EMER for a
parallel function, should both amplifiers in a cockpit fail. In EMER mode, only
audio from the other cockpit would be heard, and the volume control of all sounds
would be managed by that cockpit.

### Intercom Microphone Switch

The microphone switch for the Intercom System is the aft position on the inboard
throttle grip in both cockpits. When using the intercom, all audio sans the
pullup tone, stall warning, voice warning, and ECM are reduced (same as RADIO OVERRIDE).

## UHF Radio

The UHF Radio provides voice and Automatic Direction Finding (ADF) capabilities
to the F-4E. The radio can receive and transmit on 3500 manually selected
frequencies, 18 preset channels, or on the standard 243.00 MHz guard channel.
The aux receiver covers an additional 20 preset channels or guard. Two blade
antennas, one upper and one lower, as well as an ADF antenna, are provided. Once
the antenna mode is set for the primary channel, the aux receives from the other
antenna.

### Comm Control Panel

Two Comm Control Panels are installed, found on the right console in the front
cockpit, and on the left console in the rear cockpit. These provide management
of the radio in either seat, with selectable priority.

### Comm Command Button and Light

Control authority of the UHF radio is set by the COMM CMD button. A green light
illuminates in the cockpit with control next to the button. Either cockpit can
take control, or if already in control, press the button to provide control of
the radio to the other seat.

### UHF Volume Control Thumbwheel

Sets the listenable volume for the UHF radio for the given crew-member.

## KY-28 Speech Security Unit

### Speech Security Unit KY-28

The UHF communication system is capable of providing either conventional or
crypto voice transmission and reception. Both UHF and intercom systems can be
used in combination with the KY-28 Speech Security Unit, if so desired in a
tactical or hostile environment. The KY-28 can either cipher outgoing voice
transmissions or decipher received voice transmissions, however these functions
cannot be performed simultaneously. The crew can choose between plain or cipher
mode of operation. In the cipher mode operation the KY-28 converts voice inputs
through the microphone into crypto transmissions and deciphers crypto replies
that are being received to the crews headsets. In the plain mode operation the
UHF functions as a conventional voice transceiver.

### KY-28 Controls and Indicators

![KY28Mode](../img/KY28Mode.png)

The KY-28 is controlled by the KY-28 control panel and respectively the
conventional UHF or Intercom controls. Both front and rear cockpit instrument
panels display mode lights for either mode. If the mode light P is illuminated
the KY-28 and UHF/Intercom is operated in plain mode. If the mode light C is
illuminated the KY-28 and UHF/intercom is operated in the cipher mode.

### KY-28 Control Panel

![wso_ky_28](../img/wso_ky_28.png)

The KY-28 control panel is in the rear cockpit. It has a power knob, a mode
switch and a code zeroize button. The power knob provides power to the KY-28 and
can be set to either OFF, ON or RLY (relay). The KY-28 is not powered in the OFF
position. It is powered in the ON and RLY positions. If a direct communication
between KY units is desired, the ON position is to be selected. RLY would
provide the ability to use the KY-28 as a retransmission facility, which is not
modeled in DCS. The mode switch can be set to either P (plain) or C (cipher)
operating modes. To change modes the switch has to be pulled outwards. If the
KY-28 is powered and the mode switch is set to the C position, the UHF
transmitter is automatically selected for front cockpit transmissions. Pressing
the zeroize button neutralizes the preset code in the KY-28. The zeroize button
is guarded and should only be used in emergencies or after aircraft shutdown if
required. As the code can only be set on the ground, pressing the zeroize button
during flight makes the cipher mode inoperable for the crew for the remainder of
the flight.

Note: To permit conventional UHF communications the mode must be set to P
(plain) even if the KY-28 power knob is in the OFF position. If the mode is set
to C (cipher), conventional UHF communication is inhibited in both the front and
rear cockpit. An exception to this is transmission and reception on guard or aux
receivers, as these are not affected by the cipher mode.

### KY-28 Modes of Operation

All transmitted and received signals are routed through the KY-28 unit. When the
KY-28 mode is set to P (plain), the UHF transceiver operates in the conventional
voice manner, whether the KY-28 is powered or not.

To operate the UHF transceiver in the KY-28s C (cipher) mode, the KY-28 has to
be powered. When operating in the cipher mode, the KY-28 unit functions in
either standby, receive, or transmit.

All KY-28 units remain in the STANDBY condition until either the microphone
button is actuated or a sync preamble is received. Once transmission or
reception of the crypto message has been completed the KY-28 automatically
reverts to the standby condition. While the KY-28 is in the standby condition
the radio equipment also functions as a traditional receiver as all incoming
non-crypto transmissions are passed directly to the headsets.

The unit switches to the cipher RECEIVE condition whenever a sync preamble is
received. The sync preamble is generated by other KY-8, KY-28 or KY-38 units
when the transmitting stations operator actuates the microphone button. The sync
preamble ensures that all units in the network are in the cipher receive
condition. The enciphered message is received immediately after the sync
preamble signal and the message is decoded by the KY-28 and passed to the
aircrew headsets in the form of plain language.

When the UHF microphone button is set to the UHF position, the KY-28 switches to
the TRANSMIT condition. The sync preamble signal is transmitted to all receiving
KY stations to switch to the cipher receive condition. After actuating the
microphone button, a brief tone is heard in the aircrew headsets. The tone
signal indicates that the sync preamble signal has been completed and
transmitted, after which the KY-28 is ready to transmit the crews voice input.
When the mic button is released again, the KY-28 reverts to the standby
condition. The WSO must select UHF communications with the radio selector switch
to transmit ciphered messages. The UHF transmitter is automatically selected for
front cockpit transmissions if the KY-28 is operated in mode C.

Note: With the C (cipher) mode selected, the transmit condition overrides the
cipher receive condition. Hence during cipher receive operation the UHF
microphone button should not be actuated until the incoming message has been
completed.

### KY-28 Operation

Prelaunch

1. Before applying power to the aircraft the KY-28 power knob should be in the
   OFF position and the mode switch set to P (plain).
2. Determine that a proper code has been set by personnel qualified in voice
   security equipment. In DCS and in combination with SRS (Simple Radio) this is
   done through the ground crew communication menu in the DCS communications
   menu.
3. UHF radio - ON.
4. Mode switch - P.
5. Power knob - ON.
6. If a ground test of equipment is desired, establish two-way, plain-text radio
   communications on the plain-voice radio with a suitable remote station and
   request an equipment check. (In DCS another player is needed)
7. Mode switch - C.
8. The KY-28 will perform an automatic alarm check when the mode switch is set
   to C and the power knob is set to On. The check will continue for about 2
   seconds after power is applied. During this time a steady, unbroken 1200 Hz
   tone is heard in the headsets. Upon successful completion of the check, the
   1200 Hz tone is interrupted at a 2.3 Hz rate.
9. Momentarily position the microphone button to UHF to clear the interrupted
   tone. When the microphone button is released, the KY-28 reverts to the
   standby condition and is ready for either transmission or reception. If the
   until fails to pass the alarm check, the steady 1200 Hz tone continues and
   further cipher operation is inhibited.
10. Note: If the KY-28 fails the alarm check, the power knob must be set to OFF
    and the mode switch to P (plain) to enable conventional UHF communications.
11. To transmit ciphered messages, position the microphone button to UHF and
    wait until a momentary tone is heard before voice input. With the power knob
    set to ON, the momentary tone is delayed 0.5 seconds after pressing the
    microphone button. During this time an encryption check is performed and the
    sync preamble is transmitted to receiving stations. If the encryption check
    fails, a 1200 Hz tone interrupted at a 2.3 Hz rate is presented in the
    headsets and cipher transmission is not possible. If the encryption check
    succeeds, a momentary tone is heard in the headsets.
12. After the momentary tone is heard, establish two-way cipher radio
    communications with a cooperating station and check for readability and
    signal strength and/or transmit your message. Upon releasing the microphone
    button the KY-28 will return into the standby condition. Simultaneous
    transmission by two or more stations on the same frequency is not possible
    and may result in garbled messages or loss of synchronization.
13. Resume normal, non-crypto communications if desired at any time by setting
    the mode switch to P (plain) again.
14. Note: The above procedures may be used to perform an in-flight check of the
    equipment.
15. Postlaunch
16. The speech security equipment shall be operated as briefed.
17. Warning: If ZEROIZE is pressed during flight, ciphered communication is not
    possible. The code can only be reset (or changed) through the ground crew
    communications menu after landing.
18. After Landing
19. Zeroize as briefed.
20. Power switch - OFF.

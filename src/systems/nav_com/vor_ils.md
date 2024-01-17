# VOR/ILS System

![ext_vor_ils_beacon](../../img/ext_vor_ils_beacon.jpg)

The VHF omnidirectional range instrument landing system, or VOR/ILS, provides
precise bearing and course deviation information from a transmitting ground
station. Additionally, the aircraft is able to use precision landing approach
and descent capabilities at localizer equipped fields. Guidance information from
the VOR/ILS system is provided to the pilot on the BDHI, ADI, and HSI. VOR/ILS
function is enabled on these displays using the appropriate Flight Director
Group control selections on the Bearing/Distance Selector switch, the Navigation
Mode Selector switch, and the Flight Director Switch.

## VOR/ILS Control Panel

![pilot_vor_ils_panel](../../img/pilot_vor_ils_panel.jpg)

The control panel for the VOR/ILS is found on the front cockpit left console;
the panel includes a frequency indicator, two frequency select knobs, a volume
control (marked NAV VOL), a marker beacon volume control knob (MB VOL), and a
VOL/MRK TEST pushbutton.

### VOR/ILS Frequency Selector Knobs

The Frequency Selector Knobs is a dual actuation concentric knob; the outer ring
selects the number to the left of the decimal point on the frequency indicator,
whereas the inner knob selects numbers to the right.

![dcs_map_vor_ils](../../img/dcs_map_vor_ils.jpg)

In DCS, to find the desired VOR/ILS frequency of your target, go on the Map and
click an airfield that you want to fly to. If available,
VOR and ILS frequencies will be listed.

> 💡 Not every airfield has a VOR station or an ILS systems.

The system is designed to automatically detect whether a tuned frequency corresponds
to a VOR station or an ILS localizer. VOR operates within a frequency range of 108 MHz
to 117.95 MHz. The ILS localizer frequency range is from 108.1 MHz to 111.95 MHz.
In the shared frequency region, VOR stations typically operate on frequencies with
an even-numbered tenth of the range (e.g., 108.2 MHz, 108.4 MHz, etc.), while ILS localizer
frequencies are assigned to the odd-numbered tenths, including hundredths of a MHz
(e.g., 108.1 MHz, 108.3 MHz, 108.35 MHz, etc.).
The glideslope component of the ILS operates in a frequency range from 329.3 MHz to 335.0 MHz.
These frequencies are paired with their corresponding localizer frequencies, ensuring
that there is no need for separate manual setting. When a localizer frequency is selected,
the associated glideslope frequency is automatically tuned, providing integrated lateral
and vertical guidance (if available) for precision approaches.
The Marker Beacon that works in conjunction with the ILS system, operates at a frequency
of 75 MHz.

The ILS system is designed to detect deviations from the designated landing approach path
and relay this information to selected avionics in the aircraft. When the appropriate ILS mode
is selected on the Navigation Function Selector Panel, several instruments provide guidance
for precision approach. These include the Deviation Indicator on the Horizontal Situation
Indicator (HSI), which shows lateral alignment with the runway, and the Glideslope Indicator
on the ADI, which displays the vertical descent angle relative to the ideal glide path.
Additionally, if the Flight Director is activated, steering cues will be provided by the
needles on the Attitude Director Indicator (ADI), offering visual guidance for both pitch
and roll to maintain the correct approach path. In the rear cockpit the both horizontal and
vertical deviations are presented on the Course Indicator.
The typical maximum deviations are +-2.5 degrees for the localizer and +-0.7 degrees
for the glideslope.

If Marker Beacons are positioned along the approach path, the aircraft's system will audibly
signal and illuminate the corresponding Marker Beacon light as it passes over each one.
Depending on the specific setup at an airport, there can be:

- Outer Marker: Identified by a low-pitched, continuous tone.
- Middle Marker: Recognized by a higher-pitched, alternating audio tone. This marker indicates
  a closer proximity to the runway, usually at the decision altitude for landing.
- Inner Marker: Characterized by a very high-pitched tone or a series of high-pitched dots.
  This marker is not always present but, when it is, signifies an even closer position to the
  runway end.

![ILS glideslope](../../img/ils_glideslope.jpg)

### VOR/MKR Test Pushbutton

After an ILS frequency has been selected on the frequency indicator, pressing the VOR/MKR Test
pushbutton causes the marker beacon lights to illuminate. If a VOR Frequency is selected, a valid
VOR Signal is present, a course of 315° selected on the HSI course selector and the HSI mode is in
VOR/ILS a test can be initiated. Pressing the test pushbutton causes the course deviation indicator
on the HSI to move to center (with a maximum allowable error of +- 4°) ,the "to-from" indicator on
the HSI to indicate TO, the marker beacon lights to come on and the bearing pointers on both the HSI
and BDHI to swing to 315°.

### NAV VOL Knob and MB VOL Knob

The NAV VOL knob both activates the VOL/ILS system, as well as controls the
audible volume for the front cockpit. The knob is turned clockwise to power the
system on, then further to increase the volume. The MB VOL knob adjusts the
volume of the marker beacon audio in the front cockpit.

## WSO Course Indicator

![wso_course_indicator](../../img/wso_course.jpg)

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

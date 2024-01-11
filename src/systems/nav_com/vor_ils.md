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

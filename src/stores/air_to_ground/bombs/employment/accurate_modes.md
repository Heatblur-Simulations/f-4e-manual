# Accurate Modes

## Dive Toss - DT

One of the most accurate and easiest bombing modes to use is Dive Toss.

It only requires direct line of sight and for the correct drag coeficient
input to the WRCS. 

The correct drag coeficient can be obtained under the DT selection in the
bombing calculator.

By default, a 45 degree dive, should see consistent results with the default
settings, using mk80 series bombs. (Mk82, Mk84, Mk81, mk83)

The pilot flies a dive attack on the target while the WSO obtains accurate
target range information using the radar. Once the target is designated, the
pilot simple holds down the Bomb Button and begins to gently pull out of the
dive. Weapons automatically release at the right moment during the maneuver.

![Dive Toss 1](../../../../img/divetoss.jpg)

![Dive Toss 2](../../../../img/divetoss2.jpg)

Dive Toss uses the [WRCS](../../../../systems/weapon_systems/wrcs.md) and
[radar](../../../../systems/radar/overview.md) tracking, in conjunction with
other aircraft sensors, to calculate the release solution in real time. The
target can be approached from any direction, airspeed, and dive angle, and the
WRCS computes the proper release point relative to the acquired track, munition
drag coefficient setting, and any release advance control input (in conjunction
with [AWRU](../../../../systems/weapon_systems/awru.md) settings).

### Procedure

To perform a Dive Toss attack, the
[radar](../../../../systems/radar/overview.md) must be set in AIR-GRD mode, with
a 5 or 10-mile range setting. Once set, the pilot initiates the attack with the
Optical Sight in Air-to-Ground mode, and the reticle automatically cages in
elevation along the RBL. The pilot then selects DT on the Delivery Mode Knob,
places Weapon Selector Knob in BOMBS, and selects the desired Interval and
Quantity on the respective [AWRU](../../../../systems/weapon_systems/awru.md)
knobs. At this point, the pilot can initiate the attack.

The attack is initiated in a dive. The required dive is roughly 20% higher than
that required for a Direct mode attack, as to achieve effective
[radar](../../../../systems/radar/overview.md) ground lock; that is, the radar
must get a solid ground return, rather than see the actual target being bombed.
Once lock-on is achieved, the pilot then maneuvers to place the pipper over the
intended target, wings level, then presses and holds the bomb button to insert
radar range to the [WRCS](../../../../systems/weapon_systems/wrcs.md), and then
begins the desired pullout maneuver, maintaining wings level. After the pilot
pushes the bomb release button, radar ground lock is no longer required. The
pullout maneuver must maintain as constant a rate of turn as possible for
maximum precision.

At the point where the bomb computed trajectory will intersect the target, the
[WRCS](../../../../systems/weapon_systems/wrcs.md) provides the release signal,
dropping rounds based on the settings chosen for number and interval.

## Target Find - TGT FIND

Target Find was originally just a utility mode derived from OFFSET mode; where
it does not provide a standard release signal to the fire control and
[AWRU](../../../../systems/weapon_systems/awru.md) to initiate bomb drop, but
was instead used to confirm target location without release, for training
purposes, or, if necessary, perform an [INS](../../../../systems/nav_com/ins.md)
system update.

However, with the
[Pave Spike](../../../../systems/weapon_systems/pave_spike/overview.md)
targeting pod installed, Target Find will instead signal the WRCS to use the
target defined by the pods line of sight for a Dive Toss delivery, instead of
defining the target by radar lock.

In this case, the Pave Spike is placed on the target (activate the laser for a
more accurate slant range) and the bomb button is pressed and hold down. Similar
to a regular Dive Toss delivery, steering cues appear on the HUD. The system
will automatically release the bombs when the parameters for the ballistic
solution are met.

> 💡It is not necessary to perform a dive maneuver as the target is simply
> designated by the pods line of sight together with the measured slant range
> instead of the radar.

> 💡 TGT FIND with the Pave Spike is comparable to CCRP modes in newer aircraft.
> Designate the target with the pod, hold down the bomb button and weapons
> automatically release at the right moment.

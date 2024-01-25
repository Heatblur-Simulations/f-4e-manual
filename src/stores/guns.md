# Guns

## Internal Cannon M61A1 Vulcan

![m61](../img/m61.jpg)

The General Electric M61 Vulcan cannon finally went to war as an integral part
of the Phantom with the advent of the F-4E, with the nose profile and APQ-120
modified to fit the weapon. Carrying 639 rounds in the internal drum, the
six-barreled Gatling style rotary cannon provides a user-selectable rate of fire
from 4000 to 6000 rounds per minute, delivering a muzzle velocity in excess of
3,450 ft/s, with armor piercing incendiary and high explosive incendiary round
options available. Useful in both air-to-air and air to ground roles, the Vulcan
was used for four confirmed kills by the USAF over Vietnam with the F-4E.

Accumulated gas is vented through the Gun Purge Door on the nose of the aircraft.
The door is held closed by hydraulic pressure and will automatically open
to release the gas from firing the gun. It closes after the gas pressure has
reduced below a threshold or all rounds have been fired.

> 💡 The venting process takes around 30 seconds to 2 minutes, depending on
> the burst duration.

> 🔴 WARNING: Do not spool up the engines as long as ground personnel is working on
> the door. It will forcefully close automatically as soon as hydraulic pressure is obtained.

![ext_gun_door_open](../img/ext_gun_door_open.jpg)

### Employment

To utilize the M61,
the [GUN station select switch](../cockpit/pilot/weapon_management.md#station-select-buttons)
must be selected, the [Master Arm](../cockpit/pilot/weapon_management.md#master-arm-switch)
must be ON, and
the [Gun selection](../cockpit/pilot/weapon_management.md#head-up-display-indicators)
on the Pinky Switch (Aft) must be actuated. This will illuminate the GUN lamp on the Head Up
Display.

For air-to-air usage,
the [optical sight](../cockpit/pilot/dscg_controls.md#sight-mode-knob)
should be selected to A/A mode. In air-to-air mode, the optical sight functions as a lead computing
optical sighting (LCOS), thus maneuvering in both elevation and azimuth relative to a radar
locked target, or a default 1000' range setting in the event of no lock. With a
lock, the range bar presentation is relative to 6700' just to the left of the
tick at the 1 o-clock position, down to 1000' at the 6 o-clock position.

![radar_gun_lock](../img/radar_gun_lock.jpg)

For air to ground use,
the optical sight should be selected to A/G mode, the
[Delivery Mode knob](../cockpit/pilot/weapon_management.md#delivery-mode-knob)
should be set in the OFF or Direct mode, and the desired
[sight depression mil setting](../cockpit/pilot/dscg_controls.md#reticle-depression-knob)
be entered for the intended attack profile.
Depression is set relative from the Fuselage Reference Line (FRL). While
Depression will lower the reticle in elevation, there is no azimuth drift due to
relative aircraft motion.

Gun rate is controlled with
the [Rate switch](../cockpit/pilot/pedestal_group.md#rate-of-fire-switch)
on the Pedestal panel, and is
selectable as High (6000 rounds per minute) or Low (4000 rounds per minute).
Also on the Pedestal panel is
the [gun rounds remaining indicator](../cockpit/pilot/pedestal_group.md#rounds-remaining-indicator).

Of note is
the [Auto Clear](../cockpit/pilot/pedestal_group.md#auto-clear-switch)
function; the cannon will fire approximately between 5
and 11 rounds from the point the pilot has released the trigger to clear all
bolt actions in the cannon; this spin-down takes approximately one second, and
the gun cannot be fired again during this operation. While the Pedestal panel
carries the Auto Clear switch, this switch does not have any control over the
internal M61A1 cannon, and can only deactivate round clearance for podded
external cannon installations.

## External Cannon Pods SUU-16/A and SUU-23/A

![SUU pods](../img/suupods.jpg)

Built to both provide gun capability to aircraft that did not mount them
internally, and to increase available direct fire in the close air support
mission, the SUU-16/A and SUU-23/A gun pods were both built around the M61A1 and
a 1200 round ammunition load. Both pods are fixed-rate at 6000 rounds per
minute, and up to three can be concurrently installed and driven by the fire
control system; while up to five can be loaded for ferry purposes, and
promotional images have shown such a configuration, only three can be activated.

> 💡 The inner wing pylons 2 and 8 are not wired to operate the pods.
> Only the center station and the outer wing pylons can fire the guns.

The primary difference between the -16/A and -23/A pods are their method of
power; the former using a ram air turbine arrangement to drive its motor, while
the latter is internally powered. This difference had an effect on relative
utility - while the -23/A could be fired at any airspeed, thus allowing it to be
loaded onto slower aircraft, the -16/A's ram air turbine required a minimum
speed of 300 knots to fire, and only reached its optimum performance above 400
knots. Both pods have an auto-clear function for safety, which cause rounds
loaded in the breeches to be released back into the ammo bin, which does entail
a momentary delay of one to two seconds prior to being able to fire the pod
again.

### External Employment

Activation of the SUU pods are performed by selecting their respective [Station
Select buttons](../cockpit/pilot/weapon_management.md#station-select-buttons),
and placing the [Delivery Mode knob](../cockpit/pilot/weapon_management.md#delivery-mode-knob)
in OFF or
Direct. [The Weapon Selector knob](../cockpit/pilot/weapon_management.md#weapon-selector-knob)
can be in any position other than TV or ARM, unless CAGE mode is
activated. The desired [Auto Clear setting](../cockpit/pilot/pedestal_group.md#auto-clear-switch)
should be selected, and [Master Arm](../cockpit/pilot/weapon_management.md#master-arm-switch)
set to ON to activate the pod. On the SUU-16, the Master Arm activation deploys the
ram air turbine.

Installed, the guns are boresight along the Fuselage Reference Line. Thus,
with the [optical sight](../cockpit/pilot/dscg_controls.md#sight-mode-knob)
in air to air mode, the rounds will fall in accordance
with reticle center, just as the main cannon- only with the natural offset of
their respective pylon position, thus allowing for effective natural gunnery, if
only affected by a moderate increase in resulting CEP. In the same fashion, in
air to ground mode, the SUU pods observe the same performance relative to the
reticle depression schedule as the internal cannon, again, with their respective
offsets from centerline and CEP increase.

To safe the gun pods after combat, prior to deactivating [Master
Arm](../cockpit/pilot/weapon_management.md#master-arm-switch),
the [Auto Clear](../cockpit/pilot/pedestal_group.md#auto-clear-switch)
switch should be placed into the Auto Clear position, the trigger squeezed
momentarily, and the respective [Station
Select buttons](../cockpit/pilot/weapon_management.md#station-select-buttons)
pushed to off. On the SUU-16, this will close the ram air turbine.

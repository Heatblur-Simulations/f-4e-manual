# Bomb Employment

The Phantom has a wide range of weapon modes to employ bombs. Most modes require
the WSO to make inputs into the
[ARBCS](../../../../systems/weapon_systems/arbcs.md)/[WRCS](../../../../systems/weapon_systems/wrcs.md).

For assistance in calculation see
[Bombing Calculator Chapter](../../../../dcs/bombing_computer.md). You can open
and close it by pressing <kbd>RCTRL</kbd> + <kbd>B</kbd> in game.

> 💡 When flying with Jester, use the
> [Bombing Calculator Tool](../../../../dcs/bombing_computer.md) to plan your
> attack and to tell Jester to prepare the aircraft for this profile.

The delivery modes can be roughly categorized into:

| Category            | Modes                      | Remarks                                              |
| ------------------- | -------------------------- | ---------------------------------------------------- |
| Accurate            | DT, TGT FIND               | direct sight, no preparation, targets of opportunity |
| Offset delivery     | OFFSET                     | target not directly visible                          |
| Level release       | TL                         | e.g. safe high altitude delivery from above clouds   |
| Laydown modes       | DL, L                      | low level, high drag or CBUs                         |
| Lofting and Tossing | LOFT, O/S, INST O/S, T LAD | keep distance to target                              |
| Manual              | DIRECT                     | backup, classic mil-based bombing                    |

## Pilot

After setting the desired delivery mode on the
[Delivery Mode Knob](../../../../cockpit/pilot/weapon_management.md#delivery-mode-knob),
the pilot has to select BOMBS on the
[Weapon Selector Knob](../../../../cockpit/pilot/weapon_management.md#weapon-selector-knob).

> 💡 CBU-1 and CBU-2 must be deployed using the RKTS & DISP setting instead of
> BOMBS.

The corresponding stations to deploy bombs from are then selected and armed by
using the
[Master Arm Switch](../../../../cockpit/pilot/weapon_management.md#master-arm-switch)
and the
[Station Select Buttons](../../../../cockpit/pilot/weapon_management.md#station-select-buttons).

Some bombs support fuze settings selectable using the
[Nose/Tail Arming Switch](../../../../cockpit/pilot/weapon_management.md#nosetail-arming-switch).

Next, the pilot can set the quantity of bombs to drop per release pulse and the
interval between pulses by using the switches on the
[AWRU](../../../../cockpit/pilot/weapon_management.md#aircraft-weapons-release-unit)
panel.

Once everything is set up, bombs are generally released by pressing the Bomb
Button on the flight stick.

## WSO

Depending on the selected mode, the WSO must setup the aircraft for the desired
attack profile. Only modes DT and TGT FIND generally require no preparation.

### WRCS Panel

Most relevant settings can be found on the WRCS panel. In order for the WRCS to
compute proper ballistic solutions during non-dive deliveries, the WSO has to
enter a drag coefficient suitable for the desired bomb and altitude by entering
it using the
[Drag Coefficient Control](../../../../cockpit/wso/right_console/center_section.md#drag-coefficient-control).

> 💡 Drag coefficient numbers can be computed with the
> [Bombing Calculator Tool](../../../dcs/bombing_computer.md). The kneeboard
> also provides tables lookup tables.

With the exception of the DT mode, it is necessary to enter the altitude of the
target or the IP using the
[Target/IP Altitude Control](../../../../cockpit/wso/right_console/center_section.md#targetip-altitude-control).

If multiple bombs are supposed to be dropped in one attack, their pattern can be
shifted forward or aft using the
[Release Advance Control](../../../../cockpit/wso/right_console/center_section.md#release-advance-control).

> 💡 Release Advance can be computed easily using the
> [Bombing Calculator Tool](../../../dcs/bombing_computer.md).

For offset attacks, the offset is entered as distance in N/S and E/W direction
to the reference point (IP, VIP, RIP) using the
[Target Distance Controls](../../../../cockpit/wso/right_console/center_section.md#target-distance-controls).

> 💡 Target Distance in N/S and E/W can be converted from direct distance and
> heading using the [Bombing Calculator Tool](../../../dcs/bombing_computer.md).

Certain modes, such as DL and L require entering the range to the target from a
precomputed point. This can be done using the
[Release Range Control](../../../../cockpit/wso/right_console/center_section.md#release-range-control).

### Bomb Release Angle Computer

For lofting modes, the desired release angle can be set with the
[Low Angle Control](../../../../cockpit/wso/right_sub_panel.md#bomb-release-angle-computer),
while the High Angle Control is used for tossing modes.

### Bombing Timers

Modes LOFT, O/S and T LAD require setting a
[Pull Up timer](../../../../cockpit/wso/right_sub_panel.md#bombing-timers) which
will start counting down when overflying the IP. Once ran out, it gives the
pilot cues to initiate the pull-up maneuver. The timer has to be computed
accordingly to the distance and altitude of the target in relation to the
desired speed and altitude of the aircraft, as well as the desired release
angle.

> 💡 Pull-Up timer values can be computed using the
> [Bombing Calculator Tool](../../../dcs/bombing_computer.md).

Further, modes TL and T LAD utilize a release-timer.

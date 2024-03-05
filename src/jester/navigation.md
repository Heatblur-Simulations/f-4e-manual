# Navigation

> 🚧 This section is under construction.
>
> - TACAN/UHF

![real_life_crew_with_map](../img/map_2.jpg)

Navigation with Jester revolves around managing turn points for up to two flight
plans.

## Flight Plan

A flight plan consists of multiple turn points. They can be inserted, deleted or
edited by the player through the UI, map or mission editor.

If the mission has assigned the aircraft a series of waypoints through the
mission editor, this will be available by default as the first flight plan.

### Map Marker

Using the <kbd>F10</kbd> map view in DCS, players can create named markers on
the map simply by double clicking the desired position.

Through the UI, these map markers can then be imported as turn points to the
flight plan.

### Tune Asset

The UI offers a list of nearby assets, such as ships, tankers or ground stations
with radio capabilities.

Their current position can be imported as turn point directly.

> 💡 For moving assets like tankers, their actual position might vary from the
> planned coordinates. Use TACAN or ADF for more precise navigation.

### Tune Airfield

Similar to tuning for assets, the UI provides a list of nearby airfields to
navigate to.

### Enter Coordinates

One way to add a turn point is by entering the corresponding LAT/LON through the
UI.

The format is `H DD MM H DDD MM`,

- where `H` represents the hemisphere (`N` or `S` for latitude and `E` or `W`
  for longitude);
- `D` signifies Degrees (`00` to `89` for latitude and `000` to `179` for
  longitude);
- and `M` stands for Minutes (`00` to `59`).

A valid example could be `N 45 32 E 047 12` or `S 05 55 W 105 00`.

## Operation

Jester navigates by utilizing a technique called **leapfrogging**. The aircraft
only provides a single slot to memorize a waypoint (called **TGT 2**).

### Planned Route

When leapfrogging, **TGT 2** always indicates the next turn point of the current
active flight plan. As the aircraft approaches this turn point (±2 nautical
miles), Jester will automatically update TGT 2 to the next turn point in the
sequence.

This enables the pilot to follow the entire route of the flight plan by
selecting NAV COMP on the Navigation Function Selector Panel and following the
corresponding indication on the HSI.

### Deviate

Besides following the flight plan, Jester is capable of deviating to a different
unplanned turn point using **TGT 1**.

Through the UI, players can switch between using TGT 1 (deviate) and TGT 2
(flight plan) at any time.

### Pause & Resume Route

An active flight plan is indicated by the UI using an asterisk `*` next to the
current turn point.

Automatic turn point switching can be temporarily disabled per turn point using
the **Toggle Hold At** option. Turn points designated for holding are marked
with a `h`.

When a flight plan has been paused, for example because the pilot deviated to a
different point using TGT 1, they can be reactivated through the UI again by
using the **Resume Flight Plan** option.

This also offers the possibility to skip turn points by jumping directly to any
turn point in its sequence, as well as returning to previous points or resuming
from a point designated for holding.

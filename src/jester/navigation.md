# Navigation

> 🚧 This section is under construction.
>
> * Wheel UI for Nav
> * TACAN/UHF

![real_life_crew_with_map](../img/map_2.jpg)

Jester can manage two flight plans, each consisting of a series of specified turn points.
Players can modify these flight plans in-game by inserting, editing, or deleting turn points.
Adjustments can be made through the following methods:

* Manually input the turn point coordinates (longitude and latitude) using the format
  "H DD MM H DDD MM", where 'H' represents the hemisphere (N/S for latitude and E/W
  for longitude), 'D' signifies Degrees (00 to 89 for latitude and 000 to 179 for longitude),
  and 'M' stands for Minutes (00 to 59). Example inputs include: “N 45 32 E 047 12”
  and “S 05 55 W 105 00”.
* Use a Map Marker previously placed in the Mission Editor, which can be named for convenience.
* Select an existing turn point from either the first or second flight plan.
* Choose an Asset, such as a ship, tanker, or ground station with radio capabilities.
  Note that for moving assets like tankers, their actual position might vary from the planned
  coordinates. Use TACAN or ADF for more precise alignment.
* Opt for the nearest airfield from a provided list.

When a flight plan is active (indicated by an asterisk next to the current turn point in Jester's
interface), Jester will align its coordinates to TGT2 on the Navigation Computer Panel. Players
can follow this guidance if NAV COMP is selected on the Navigation Function Selector Panel.
As the aircraft approaches a turn point (within 2 nautical miles), Jester automatically updates
to the next turn point, employing a leapfrogging technique.

To maintain position at a current turn point, use the 'Toggle Hold At' option in the menu.
A turn point designated for holding is marked with a (h) in Jester's interface. Players
can also redirect to a different turn point using TGT1, which temporarily deactivates
the flight plan.

The 'Resume Flight Plan' menu offers extensive functionality for managing your flight plan,
allowing for a range of navigational adjustments whether the flight plan is currently
active or has been deactivated:

* Reactivating a Deactivated Flight Plan: Reactivate the flight plan to resume navigation
  guidance based on the flight plan's turn points.
* Skipping to a Future Turn Point: Jump directly to any future turn point in the flight plan,
  skipping over intermediate ones.
* Returning to Previous Turn Points: Select and move back to any previous turn point
  in the flight plan.
* Selecting the Next Turn Point While Holding: If holding at a current turn point,
  you can proceed to the next turn point in the flight plan.

This feature ensures pilots have comprehensive control over their navigation,
allowing for dynamic adjustments to the flight plan in response to changing
conditions or tactical decisions.

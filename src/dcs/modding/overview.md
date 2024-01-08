# Modding

The Phantom encourages modding and allows the community to modify
various parts of the simulation and experience.

Players can enjoy their creations either in Singleplayer or even in Multiplayer
on servers that disabled their file-integrity-check.

> 💡 Let us know if you create a cool mod that you think should make
> its way into the module!

## Jester

Jester is fully open to modding. Please see the [Jester API](jester/overview.md) for details.

## Manual

This manual is open-source at [GitHub](https://github.com/Heatblur-Simulations/f-4e-manual).
If you found a typo or want to improve a section, please let us know or
also feel free to contribute yourself directly at GitHub.

## Integrated Websites

Several features of the aircraft make use of integrated websites, which are
displayed in-game with a built-in web-browser.

The code for the websites can be found in the Mod-Folder, for example:

`G:\DCS World OpenBeta\Mods\aircraft\F-4E\UI`

The browser supports full HTML/CSS/JS and even allows loading external files,
such as visiting YouTube and watching some tutorials.

Feel free to enhance any of the existing sites, such as the Jester Wheel or Grease Pencil UI,
if desired.

## Explain-Me

To quickly find out what a switch does, the embedded manual allows holding a hotkey
(<kbd>M</kbd> by default), then clicking any switch in the cockpit and the manual opens
scrolled right to the spot explaining the corresponding switch.

On the technical side, this feature is setup in the lookup-table located in the Mod-Folder, for example:

`G:\DCS World OpenBeta\Mods\aircraft\F-4E\Input\explain_table.csv`

This file links pointer/connector names of the model to relative URLs of the manual.

```csv
# in explain_table.csv
PNT_Pull_Up_Light;cockpit.html#pull_up_system
PNT_FIRE_TEST_BUTTON;cockpit.html#fire_test_button
PNT_Marker_Beacon;cockpit.html#marker_beacon
PNT_VOR_Light;cockpit.html#vor_light
```

The URL, for example `cockpit.html#fire_test_button`, is then loaded in the Manual-Browser.

## Liveries

> 🚧 This section is under construction.

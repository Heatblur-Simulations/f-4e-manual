# Level Release

Multiple modes can be used to release bombs from level flight. This chapter
focuses on the TL mode. See the other sections for level release from DIRECT,
TGT FIND, OFFSET or L modes.

## Timed Level - TL

Timed Level bombing is the most basic
[ARBCS](../../../../systems/weapon_systems/arbcs.md) mode, utilizing only the
Release Timer.

Once the Bomb Button is pressed and hold down, the timer counts down. As soon as
it reaches zero, weapons are deployed.

Because it is so simple, it can be utilized for attacks from high altitude that
do not require to be accurate, dropping bombs safely from above cloud cover.

### Procedure

The setting for the Release Timer is found based on the bomb range value
determined for the chosen weapon, referencing the desired flight altitude above
the target and airspeed. This range determines the point where the munition(s)
will be released from the aircraft. An IP is chosen relative to the bomb range
distance, and the Release timer value is then calculated using the distance
between the point of release and the IP based on the chosen airspeed.

The pull-up timer should be set to 000, and the High and Low Release settings
can be left at any value.

The attack is performed by entering the necessary Release Timer value, pushing
and holding the bomb release button upon IP flyover, and maintaining straight
and level flight at the planned airspeed and altitude at the target until the
weapons are released from the aircraft. Unlike the other LABS modes, there is no
pull-up audio or
[ADI](../../../../cockpit/pilot/flight_director_group.md#attitude-director-indicator)
needle takeover to illustrate pitch or roll deviation- it is simply dependent on
the pilot to maintain wings level flight.

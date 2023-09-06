.. _cockpitoverview:

Cockpit Overview
################


Pilot Cockpit Layout
********************     

+----+----------------+
| 1. |:ref:`gunsight` |
+----+----------------+
| 2. |:ref:`overaux`  |
+----+----------------+
| 3. |:ref:`mwspanel` | 
+----+----------------+
| 4. |:ref:`flightdg` |
+----+----------------+
| 5. |:ref:`indicator`|
+----+----------------+
| 6. |:ref:`leftsub`  |
+----+----------------+
| 7. |:ref:`leftcons` |
+----+----------------+
| 8. |:ref:`ped`      |
+----+----------------+
| 9. |:ref:`rightsub` |
+----+----------------+
| 10.|:ref:`rightcons`|
+----+----------------+



.. _gunsight:

Gunsight/Radar Repeater Group
=============================

.. image:: images/GunRepeater.png


Reticle Intensity/Scale Knob
----------------------------

.. image:: images/RetIntensity.png

  
+---------+--------------------------------------------------------------+
| RET INT | Controls the brightness of the reticle.                      |
+---------+--------------------------------------------------------------+
| SCALE   | Controls the scale light intensity of the front radar scope. |
+---------+--------------------------------------------------------------+


Sight Shutter Lever
-------------------

.. image:: images/SightShutter.png


Changes the optical sight light source to prevent damage to the optics from high sunlight. 


Reticle Depression Knob
-----------------------

.. image:: images/RetDepress.png
  

Controls manual depression in 1 mil increments.


Sight Mode Knob
---------------

.. image:: images/SightMode.png
  

Selects the mode of operation for the gunsight.

+-------------------------------------------+--------------------------------------------+
| OFF                                       | Turns the system off.                      |
+-------------------------------------------+--------------------------------------------+
| STBY                                      | Warms up the system.  Reticle remains off. |
+-------------------------------------------+--------------------------------------------+
| CAGE                                      | Reticle is displayed and caged at the      |
|                                           |                                            |
|                                           | radar boresight line (RBL).                |  
+-------------------------------------------+--------------------------------------------+
| A/G                                       | Selects air to ground mode. Manual set     |
|                                           |                                            |
|                                           | depression is referenced from the          |
|                                           |                                            |
|                                           | fuselage reference line (FRL).             |
+-------------------------------------------+--------------------------------------------+
| A/A                                       | Selects air to air lead computing mode.    |
|                                           |                                            |
|                                           | Position is set by the gyro, range,        |
|                                           |                                            |
|                                           | and CADC, and can be caged.                |
+-------------------------------------------+--------------------------------------------+
| BIT 1                                     | System self test mode 1.                   |
+-------------------------------------------+--------------------------------------------+
| BIT 2                                     | System self test mode 2.                   |
+-------------------------------------------+--------------------------------------------+
 
OPR ERS/Contrast Knob     
---------------------

.. image:: images/Contr.png
  
  
Two function (pushbutton inside of knob) control of the front scope display.  
  
+---------+----------------------------------------------------------------------------------------+
| OPR/ERS | Button activates or erases display in aircraft with DVST. No function with DSCG scope. |
+---------+----------------------------------------------------------------------------------------+
| CONTR   | Controls the displayed video/background contrast on the front scope.                   |
+---------+----------------------------------------------------------------------------------------+


Brightness Knob/Horizon Line Knob
---------------------------------

.. image:: images/BrtHrz.png
  
 
Dual knob control of the front scope display settings.

+--------+------------------------------------------------------------------------+
| BRT    | Controls relative brightness of the front scope display.               |
+--------+------------------------------------------------------------------------+
| HOR LN | Adjusts relative horizion line shown on radar scopes in both cockpits. |
+--------+------------------------------------------------------------------------+


INT Tab
-------

.. image:: images/Int.png
  
  
The INT tab rotates around the display to alter the relative darkness of the radar display, permitting the pilot to adjust the scope relative to ambient light.  


Red Tab
-------

.. image:: images/Red.png
  
  
The Red tab is rotated to provide a red scope display for night flying.


In Range Light
--------------

.. image:: images/InRng.png
   
  
The IN RANGE light illuminates to alert the pilot that the current locked target is within range parameters.


Hold Altitude Light
-------------------   

.. image:: images/HoldAlt.png
  
  
The HOLD ALT light illuminates as an instruction to the pilot from the fire control system to maintain current altitude to assist in a snap-up intercept situation against a target above the fighter.  The predicates are:

A range greater than the weapon can make,
Altitude in excess than 32,000 feet, and
The locked taret is greater than 8,000 feet above the fighter.

When the HOLD ALT light is on, the fighter should be flown to center the steering dot relative to azimuth of the ASE circle.  When the HOLD ALT light turns off, the fighter should then snap up in pitch to fully center the steering dot in the ASE circle.   


Range Lights
------------

.. image:: images/RngLights.png
  

The Range Lights illuminate relative to range settings selected by the WSO.  Range is provided on the upper right corner of the DSCG scope. 


Wheels Light
------------

.. image:: images/Wheels.png
  
  
The WHEELS lamp illuminates when the aircraft slows below flaps blow-up speed (roughly 230 knots, dependent on altitude) with the gear still raised.



.. _overaux:

Overhead Auxiliary Indicators
=============================

.. image:: images/OvrhdGroup.png
  
  
  
SHOOT Lights
------------

.. image:: images/LftShoot.png
  

Illuminates when missile firing parameters are met.  Do not illuminate when in VI or A-G modes. 


Air Refueling Lights
--------------------

.. image:: images/AARLights.png
  
  
.. image:: images/AARDisng.png
  

Provide status of the Air Refueling System while in use.

+------------+---------------------------------------------------------------------------+
| READY      | Illuminates when air refuel receptacle is fully extended. Turns off when  |
|            |                                                                           |
|            | boom is locked or receptacle retracted.                                   |
+------------+---------------------------------------------------------------------------+
| DISENGAGED | Illuminates when boom disengages during cycle, and remains lit until      |
|            |                                                                           |
|            | refueling system is reset.                                                |
+------------+---------------------------------------------------------------------------+
| L.H. FULL  | Indicates left hand external tank is full.                                |                                       
+------------+---------------------------------------------------------------------------+
| CTR. FULL  | Indicates centerline external tank is full.                               |
+------------+---------------------------------------------------------------------------+
| R.H. FULL  | Indicates right hand external tank is full.                               |
+------------+---------------------------------------------------------------------------+  


Labs Pull Up Light
------------------

.. image:: images/LabsPU.png
   

Illuminates and disengages during Loft and LABS bombing runs to provide timing sequence information to the pilot. 


Standby Magnetic Compass
------------------------

.. image:: images/StbyMagComp.png
   

A standard magnetic compass for backup navigation assistance should the primary flight director systems fail. 
  
  
Angle of Attack Indexer Lights
------------------------------

.. image:: images/AoA.png
   
    
Provides quick confirmation of current aircraft AoA state based on illuminated position and color.  

+--------------+---------------+ 
| "center low" | Very slow     |
+--------------+---------------+
| "low"        | Slightly slow |
+--------------+---------------+
| "all"        | On speed      |
+--------------+---------------+
| "high"       | Slightly fast |
+--------------+---------------+
| "center high | Very fast     |
+--------------+---------------+



.. _mwspanel:

Multiple Weapons Controls/AWRS/Stores Management
================================================

.. image:: images/MwsGroup.png


Head Up Display Indicators
--------------------------

.. image:: images/HUD.png
  


The Head Up Display indicator panel provides weapon status for the Master Arm control as well as the current selected air to air weapon based on the postion of the Guns/Missile switch on the left throttle handle.

+-------+-----------------------------------------------------------------+
| RADAR | Illuminates when a radar-guided air to air missile is selected. | 
+-------+-----------------------------------------------------------------+
| HEAT  | Illuminaes when an IR-guided air to air missile is selected.    |
+-------+-----------------------------------------------------------------+
| GUN   | Illuminates when the nose gun is selected.                      |
+-------+-----------------------------------------------------------------+
| ARM   | Illuminates when the Master Arm switch is selected to ARM.      |
+-------+-----------------------------------------------------------------+


UHF Remote Channel Indicator
----------------------------

.. image:: images/UHFInd.png
  
  
Provides the current selected channel value when the radio is set to PRESET.  Otherwise, the indicator displays M if the radio is set to Manual, G when the COMM function is set as GUARD/ADF, or A when the A-3-2-T switch is in A.


True Airspeed Indicator
-----------------------

.. image:: images/TASInd.png
  
  
Provides the aircraft's True Airspeed in knots, and is calibrated from 150 to 1500 knots; airspeeds below this range are thus not reliable. 


Flight Instrument Brightness Knob
---------------------------------

.. image:: images/InstruBright.png
  
  
Controls brightness of the flight instrument cluster.


Nose/Tail Arming Switch
-----------------------

.. image:: images/NTArm.png
  
  
Controls the arming solenoids of the MER and TER racks, selecting what MER/TER position(s) arming lanyards are pulled from released bomb fuzes upon separation, thus making them live.  This function also controls selective low/high drag capability for retarded bombs.

+-----------+-----------------------------------------------------------------------------------+
| SAFE      | No arming solenoids activate; bombs release without fuzing enabled.               |
+-----------+-----------------------------------------------------------------------------------+
| NOSE      | Forward and center position solenoids activate to hold arming lanyards.           |
+-----------+-----------------------------------------------------------------------------------+
| TAIL      | Aft position solenoids activate to hold arming lanyards.                          |
+-----------+-----------------------------------------------------------------------------------+
| NOSE/TAIL | Forward, center, and aft position solenoids all activate to hold arming lanyards. |
+-----------+-----------------------------------------------------------------------------------+


Station Select Buttons 
----------------------

.. image:: images/SSBs.png
   
  
The Station Select Buttons are used to activate air to ground munition stations and the nose gun.  Upon selection of a station, the upper half denoting the position will illuminate green to confirm the station is active.  The lower half will illuminate amber once the necessary mode is selected, the weapon is compatible with the weapon select knob option, the Master Arm is in the ARM position, and any necessary warm up period for the selected weapon type is completed.  L and R positions are left and right, respectively, with O denoting outboard and I denoting inboard stations.  The centerline weapon position is CL, and the nose gun is armed with the GUN station selector button.  A dimmer knob is also provided to raise or lower the lighting of the station select buttons relative to current cockpit conditions.


Master Arm Switch
-----------------

.. image:: images/MArm.png
  
  
Provides master arming function for all aircraft weapons.  


Delivery Mode Knob
------------------

.. image:: images/DelMode.png
  
  
The Delivery Mode Knob sets the fire control system to the desired air to ground weapon release type.  Split into two halves, the left side of the dial references ARBCS (Altitude Reference and Bombing Computer Set) delivery modes, while the right side provides automated release functions using the WRCS (Weapon Release Computer Set) with possible tie-in to the navigation computer, depending on mode.  At the 11 and 12 o'clock positions are the OFF position, which is utilized for air to air weapons (including the gun) and DIRECT, which is used for video-directed weapons such as the AGM-65. The full series of positions is as follows, clockwise from the left:

+----------+---------------------------------------+
| INST O/S | Instantaneous Over the Shoulder       |
+----------+---------------------------------------+
| LOFT     | Loft                                  |
+----------+---------------------------------------+
| O/S      | (Timed) Over the Shoulder             |
+----------+---------------------------------------+
| T LAD    | Timed LADD (Low Angle Drogue Delivery |
+----------+---------------------------------------+
| TL       | Timed Level                           |
+----------+---------------------------------------+
| OFF      | Off (Air to Air)                      |
+----------+---------------------------------------+
| DIRECT   | Manual Direct                         |
+----------+---------------------------------------+
| TGT FIND | Target Find (Nav mode only)           |
+----------+---------------------------------------+
| DT       | Dive Toss                             |
+----------+---------------------------------------+
| DL       | Dive Laydown                          |
+----------+---------------------------------------+ 
| L        | Laydown                               |
+----------+---------------------------------------+
| OFF SET  | Offset Bomb                           |
+----------+---------------------------------------+
| AGM-45   | AGM-45                                |
+----------+---------------------------------------+


Weapon Selector Knob
--------------------

.. image:: images/WSK.png
  
  
Selected for the type of weapon currently required, providing release signals to the AWRU (Aircraft Weapons Release Unit). ARM and TV positions inhibt air to air weapon firing unless a CAGE signal is active.  ARM and TV positions do not affect tuning status of radar guided weapons.  Positions are as follows:

+-------------+-----------------------------------------------------------------------------------+
| AGM-12      | Not used.                                                                         |
+-------------+-----------------------------------------------------------------------------------+
| BOMBS       | Bombs (all types).                                                                |
+-------------+-----------------------------------------------------------------------------------+
| RKTS & DISP | Rockets and dispensers.                                                           | 
+-------------+-----------------------------------------------------------------------------------+
| ARM         | Anti-Radiation Missile (AGM-45).                                                  |
+-------------+-----------------------------------------------------------------------------------+
| TV          | Electro-optical weapons (AGM-65).                                                 |
+-------------+-----------------------------------------------------------------------------------+
| C           | Not used; may be utilized as an OFF position.                                     |
+-------------+-----------------------------------------------------------------------------------+
| B           | Like AIR TO AIR switch in rear cockpit, cancels CAGE requirement.                 |
+-------------+-----------------------------------------------------------------------------------+
| A           | Simultaneous release mode for CBU, rockets, or dispensers; bombs do not release.  |
+-------------+-----------------------------------------------------------------------------------+
 
     
Aircraft Weapons Release Unit
-----------------------------   
     
.. image:: images/AWRU.png
  
  

Provides timed interval release scheduling of single or multiple bombs or rockets and dispensed munitions based on the selections made between the interval knob, the QTY (quantity) knob and the INTRVL switch.

The interval knob provides release pulse sequences between 0.05 second and 1 second.  

The INTRVL switch provides the option of a 10x multiplier of the set value of the interval knob.  In the NORM position, the interval knob value is the trigger timer. 
The Quantity Knob functions as follows:

Selecting "1" places the AWRU into single manual bombing mode; one push of the bomb release button releases one bomb.  

Selecting a value from "2" to "18" sets the AWRU into single ripple mode; in this mode, the AWRU will release bombs according to the programmed interval until the set number of rounds is dropped, or the bomb button is released.  Upon release, the count is reset, and a subsequent press and hold will drop the programmed number of bombs.

Selecting "C" sets the AWRU into single continuous mode; pressing the bomb release button drops rounds according to the programmed interval until the bomb button is released, or all munitions from the selected pylons are expended.

The "P" setting is for pairs manual mode.  With at least two stations selected, each push of the bomb button will release two bombs; like single manual mode, this does not include an interval function.

Lastly, the "S" setting, for salvo, releases bombs in accordance to the chosen interval from all selected stations simultaneously, until the bomb button is released.  Ergo, if four stations are selected with a 2 second interval (0.2 on the interval dial, X10 INTRVL switch setting), four bombs will be released every two seconds the pickle button is held down.


Missile Status Lights
---------------------

.. image:: images/MSL.png
  
  
The Missile Status Light window provides confirmation of currently installed and configured air to air misiles.

The RDR lights illuminate once AIM-7 missiles are properly tuned with the fire control system; any station that does not carry a Sparrow, does not correctly sync up during tuning, or is launched, will turn off.

The HEAT lights illuminate one at a time, rather than all up upon circuit configuration.  The light of the currently selected station will illuminate beginning at the raising of the gear handle, and remain in that position until the weapon is either cycled using the throttle's Gun/Missile Switch reject option, or is launched.


Radar Missile Power Switch
--------------------------

.. image:: images/RMPS.png
  
  
The Radar Missile Power Switch provides power to the CW tuning drive and monitoring functionality.  

When switched out of the OFF position, power is applied to the circuit 30 seconds after this selction.  

The STBY position maintains warmup power to the missiles and CW tuning drive once the missiles have been tuned.  

The CW ON position allows for constant tuning and missile state monitoring with the radar mode not in TV.  

Tuning can be performed on the ground with the radar in TEST mode to preclude emissions endangering ground crew. 


Centerline Tank Aboard Light
----------------------------

.. image:: images/CTAL.png 
  
  
Illuminates when a stores condition exists that precludes ejection and launch of an AIM-7 missile installed in one of the two forward positions.
  

Interlock Switch
----------------

.. image:: images/Intlk.png
  
A two position switch that determines whether the fire control system launch parameter interlocks can prevent an AIM-7 from being when the trigger is pulled.  

+-------------+------------------------------------------------------------------------------------+
| IN          | Interlocks engaged; range limits, ASE limits, or radar not in VI inhibits launch.  |
+-------------+------------------------------------------------------------------------------------+
| OUT         | Interlocks disengaged; AIM-7 will fire when trigger is pulled.                     |
+-------------+------------------------------------------------------------------------------------+


Selective Jettison Control
--------------------------

.. image:: images/SelJet.png
  
The Selective Jettison Control knob provides the pilot direct access to dump stores in an emergency on a position by position basis, or immediate release of all single carried air to ground, MER/TER stored, or LAU-88 launcher-mounted round at once.  


+-------------+-----------------------------------------------------------------------------------+
| OFF         | Safes PUSH TO JETT button on the Selective Jettison Control Panel.                |
+-------------+-----------------------------------------------------------------------------------+
| STORES      | Releases all MER/TER, single carried, or LAU-88 mounted rounds upon PUSH TO JETT. |
+-------------+-----------------------------------------------------------------------------------+
| L/R FWD     | Jettisons AIM-7 from respective position on PUSH TO JETT.  Inhibited if CL TK ON. |
+-------------+-----------------------------------------------------------------------------------+
| L/R AFT     | Jettisons AIM-7 from respective position on PUSH TO JETT.                         | 
+-------------+-----------------------------------------------------------------------------------+
| L/R WING    | In conjunction with TV or ARM, jettisons single AGM-65 from wing on PUSH TO JETT. |
+-------------+-----------------------------------------------------------------------------------+


.. _flightdg:

Flight Director Group
=====================

.. image:: images/FDG.png

 
Radar Altimeter
---------------

.. image:: images/RadAlt.png
  
  
Terrain relative accurate height information up to 5000', functions to 30 degrees of bank angle or 35 degrees of pitch.  The function control switch on the lower right of the indicator powers the device; continued clockwise rotation sets the low altitude warning pointer to the desired height.   
  

Airspeed and Mach Indicator
---------------------------

.. image:: images/MachInd.png
  
The combination airspeed and mach number indicator shows airspeed readings below 200 knots, and include Mach numbers at high speed.  The indicator uses a single pointer over a fixed airspeed scale, marked from 80 to 850 knots, with a moving Mach scale presenting from Mach 0.4 to 2.5. A pair of movable reference markers is available with the knob on the face of the gauge, with speed reference available between 80 and 195 knots, and the Mach index pointer being able to be set between the 225 knot and 850 knot regions relative to the airspeed gauge.  

Note: Moving these reference markers outside of the respective aforementioned regions can damage them.


Angle of Attack Indicator
-------------------------

.. image:: images/AoAInd.png

Drawing relative wind information from the landing-gear adjacent AoA probe, the AoA indicator offers conditional reference for cruise (7.9 units), approach (19.2 units), and stall (30.00).  Because of the AoA probe to the nose gear door and subsequent airflow disturbance when the gear is lowered, actual aircraft AoA is approxiamtely 1 unit higher than indicated, and ON SPEED AoA is roughly 5 knots slower than the given value.

When indicator power is offline due to electrical system configuration or damage, an OFF flag will appear in the window on the face of the gauge.  Function of the indexer lights and stall warning vibrator is driven by switches in the indicator. 

  

Reference System Selector Switch
--------------------------------

.. image:: images/RefSel.png
  
  
  

Attitude Director Indicator
---------------------------

.. image:: images/ADI.png

Displays command steering data based on current navigation mode and reference settings.  Steering data can include the Bank Steering Bar, Glideslope Indicator, and the Pitch Steering Bar.  Also displayed depending on circumstances are the Course Warning Flag and Glideslope Warning Flag, when calculated glideslope or course information is unreliable based on signal degradation. 
  
  
Horizontal Situation Indicator
------------------------------

.. image:: images/HSI.png
  
Presents a top-down view of the currently programmed navigation.  The Heading Set knob is availble to input desired magnetic heading, and the Course Set knob is used to enter VOR radial or inbound localizer course for accurate deviation display.  


Altimeter
---------

.. image:: images/Altim.png
  
  
A counter-pointer style altitmeter, with thousandths in the counter window and 100 foot increments around the face. The altimeter has an absolute range of 80,000 feet. The altimeter includes a barometric scale for setting local pressure with the knob on the indicator.  The indicator also has a three position switch, with two indicated settings- RESET and STBY.   

Vertical Velocity Indicator
---------------------------

.. image:: images/VVI.png
  
  
Provides rate of climb or descent via the static pressure system referenced in thousands of feet per minute. 

  
Standby Attitude Indicator
--------------------------

.. image:: images/StbyAtt.png
  
The SAI functions independent of the Flight Director Group, providing reasonably accurate (within six degrees) for 9 minutes if power to the system is lost and the OFF flag is in view.  Pitch markings are indicated every 5 degrees, while roll markings are in gradations of 10 degrees. Roll is illustrated through 360 degrees, while pitch is limited by stops at 92 degrees in climb and 78 degrees in dive to prevent gimbal lock.
  

Navigation Function Selector Panel
----------------------------------

.. image:: images/NavFunct.png
  
Controls display presentation on the ADI and HDI based on the selected values on the two knobs; to the left is the Bearing/Distance Knob, and to the right the Mode Selector Knob.  The Bearing/Distance Knob determines the source of navigation information for the HSI and ADI.  The Mode Selector Knob provides control over the presentation of various displayed information on the HSI and ADI.  The Mode Selector Knob includes an inset switch marked FD, for Flight Director.  This switch engages or deactivates the pitch and bank steering bars on the ADI; the OFF position has the switch aligned vertically.

**Bearing/Distance Knob**

+-------------+-----------------------------------------------------------------------------------+
| VOR/TAC     | Magnetic and relative bearing to VOR station and TACAN range displayed on HSI.    |
+-------------+-----------------------------------------------------------------------------------+
| TAC         | Magnetic and relative bearing and range to TACAN station displayed on the HSI.    |
+-------------+-----------------------------------------------------------------------------------+
| ADF/TAC     | Magnetic and relative bearing to ADF station and TACAN range displayed on HSI.    |
+-------------+-----------------------------------------------------------------------------------+
| NAV COMP    | Magnetic and relative bearing and range provided from navigation computer on HSI. | 
+-------------+-----------------------------------------------------------------------------------+

**Mode Selector Knob Display Functions**

.. image:: images/ModeSelectorKnobTable.png


.. _indicator:

Right Main Panel
================

.. image:: images/RMP.png


RWR Azimuth Indicator
---------------------

.. image:: images/RWRAz.png


EO Line of Sight Indicator
--------------------------

.. image:: images/EOLos.png

Master Caution Light
--------------------

.. image:: images/MCLP.png
  

The Master Caution light illuminates to provide the pilot warning of a condition requiring attention, directing them to look at the telelight panel for additional information. The Master Caution lamp is reset by correcting the condition, or pressing the Master Caution Reset button on the generator control panel. 

Fire Test Button
----------------

.. image:: images/FTB.png
  
  
When pressed, this button tests for functionality of the FIRE and OVRHT lamps.  Can also be used in conjunction with the Warning Lights Test switch to confirm detection and continuity performance of the fire and overhead warning systems.  Holding the Warning Lights Test switch in the WARN TEST position, then simultaneously pressing and releasing the Fire Test Button performs the test.  Proper system function is confirmed with the four FIRE and OVRHT lamps off while the Fire Test Button is pressed, then illuminating when it is released.


Fire/Overheat Warning Lamps
---------------------------

.. image:: images/FOWL.png
   
  
The Fire and Overheat Warning Lamps, one for each engine, are a pair of two-position indicators that illuminate when a fire condition is detected in the engine compartment (FIRE), or an overheat condition is detected in the exhaust nozzle section (OVRHT).  
  
  
Fuel Quantity Indicator
--------------------------------

.. image:: images/JPInd.png
  
  
The Fuel Quantity Indicator provides two different indications of total usable internal fuel to confirm proper transfer function between the seven internal fuel cells, as well as any external loaded tanks.  The upper hemisphere's sector display presents fuel quantity detected in fuselage cells 1 through 6, excluding the aft-most cell 7, as well as the internal wing tanks.  The sector display presents 200 lb increments from 0 to 3000 pounds, and 500 pound increments for the rest of the gauge.  The lower tape counter readout includes all internal fuel, including cell 7 and the internal wing tanks, and is presented in 100 lb increments. 


Fuel Flow Gauges
----------------

.. image:: images/FFI.png
  
  
A pair of fuel flow indicators is provided, one for each engine, presenting pounds per hour rate from 0 to 12, in 1000 lb increments.  Flow indications are for basic, non-afterburning thrust.  In afterburner, the flow rate is roughly four times the displayed flow rate. 

Tachometers
-----------

.. image:: images/Tach.png
  
  
A percentage-noting Tachometer is provided for each engine, including an inset wheel for accurate display of single digits. 
  

Exhaust Gas Temperature Gauges
------------------------------
.. image:: images/EGT.png
  
  
Exhuast Gas Temperature gauges are provided for each engine.  The gauges have two needles- a large needle providing increments of 0 to 12 in multiples of 100 degrees centigrade, and a smaller needle presenting increments of 0-10 in multiples of 10 degrees centigrade. Temperatures are measured at the exit of the turbine unit.  
  

Dual Exhaust Nozzle Position Indicators
---------------------------------------

.. image:: images/NPI.png
  

A combined Nozzle Position Indicator is provided with two needles, one for each engine on their respective side, to confirm balanced nozzle position and scheduling relative to throttle position.  The gauge provides four zones relative to the nozzles being in their fully open configuration, or their maximum closed configuration at the bottom.  At idle, the indication will be roughly 7/8ths open, and schedules down as throttle is increased.  Position in the afterburner region will moderate to maintain safe EGT levels. 



.. _leftsub:

Left Subpanel
=============

.. image:: images/LeftSub.png


8-Day Clock
-----------

.. image:: images/PClock.png
  
  
A clock is provided for the pilot, including a stopwatch function.


Emergency Canopy Jettison Handle
--------------------------------

.. image:: images/CanJet.png
  

Used for emergency ground extraction, the Emergency Canopy Jettison Handle releases a compressed oxygen cylinder to open both canopies immediately, shearing them off at their pivots.


Landing Gear Handle
-------------------

.. image:: images/GearHandle.png
  
  
Actuates the landing gear; raised for gear up, down for gear down.
  

Landing Gear Position Indicators
--------------------------------

.. image:: images/GearPos.png
  
  
The Landing Gear Position Indicators provide visual confirmation of current gear state, displaying UP when retracted, showing a barber pole while in transition, or the illustration of a wheel in the respective window when fully down and locked.


Slats/Flaps Indicators
----------------------

.. image:: images/SltFlpInd.png
  
  
Visual indication of the Slat and Flap systems are provided through two window indicators.  Slats will be displayed as IN (retracted) or OUT (extended).  Flaps will display as UP (retracted) or DN (down), and will show a barber pole while in transition. 


Boost Pump Pressure Indicators
------------------------------

.. image:: images/BoostInd.png
  
  
A pair of indicators provide confirmation of fuel boost pump operation.  Indicators are calibrated 0 to 5, which must be multiplied by 10 to read in current PSI.


Stabilator Trim Indicator
-------------------------

.. image:: images/StabTrimInd.png
  
  
Provides current stabilator trim setting in units (trim switch actuations) of trim. 


Landing/Taxi Lights Switch
--------------------------

.. image:: images/LndTxLt.png
  
  
Control the external Landing and Taxi lamps.  Left main gear must be down and locked for the switch to function. 


External Stores Emergency Release
---------------------------------

.. image:: images/EmerRel.png
  
  
Also called the "panic button", the External Stores Emergency Release will immediately perform separation of all jettisonable stores, sans air to air weapons or special weapons.  The actuation of the button will show a yellow ring around the button position, which is the indicator for the pilot that it has been used. 


ARI Fuse
--------

.. image:: images/ARIfuse.png
  
  
When pulled in conjuction with the Yaw ARI Stab Aug Switch disengaged, Yaw ARI will be fully removed.  With the Yaw ARI Stab Aug Switch engaged, 5 degrees of ARI authority will be maintained.


Emergency Brake Handle
----------------------

.. image:: images/EBrake.png
  
  
Pulling this handle activates the Emergency Hydraulic Brake System, which dumps the remainder of the hydraulic accumulator into the brake system for a limited number of brake actuations.  Differential braking will work, however the number of available actuations is limited.  


.. _leftcons:

Left Console Area
=================

.. image:: images/LeftCons.png


Left Utility Panel
------------------

.. image:: images/LUtil.png


Oxygen Control Panel
--------------------

.. image:: images/PilOxy.png


Forward Hand Control
--------------------

.. image:: images/PilAGM.png

Small joystick used to finalize the positioning of a target in the seeker gate of an AGM prior to launch. 


Outboard Engine Control Panel
-----------------------------

.. image:: images/PilOutEng.png



Inboard Engine Control Panel
----------------------------

.. image:: images/PilInbEng.png

The Inboard Engine Control Panel carries the following controls:

**Target Contrast Switch**

Used to select the appropriate contrast conditions for seeker acquisition with the AGM-65A and B. 

+-------------+-----------------------------------------------------------------------------------+
| WHT/BLK     | Programs the missile seeker to track a light target on a dark background.         |
+-------------+-----------------------------------------------------------------------------------+
| AUTO        | Programs the missile to use its automatic tracking mode.                          |
+-------------+-----------------------------------------------------------------------------------+
| BLK/WHT     | Programs the missile seeker to track a dark target on a light background.         |
+-------------+-----------------------------------------------------------------------------------+


**Engine Start Switch**

Three position switch with automatic return to center used to start the respective engine, left or right.


**CADC Static Pressure Compensator Correction Switch**

Three position switch, momentary in the RESET CORR position, used to correct or disengage the Static Pressure Compensation of the altimeter, thus eliminating, or invoking, altimeter lag from rapid altitude changes.

+-------------+---------------------------------------------------------------------------------------------------+
| RESET CORR  | Actuated after engine startup, then in flight if a SPC warning is caused by transient conditions. |
+-------------+---------------------------------------------------------------------------------------------------+
| NORM        | Regular operating position of switch upon release of RESET CORR or actuation out of CORR OFF.     |
+-------------+---------------------------------------------------------------------------------------------------+
| CORR OFF    | Manually disengages SPC altitude lag compensation.                                                |
+-------------+---------------------------------------------------------------------------------------------------+


**Engine Master Switches**

A pair of two position lever lock switches, separated by a guard to alleviate erroneous command of the wrong switch, connects electrical power to the engine boost and transfer pumps for the respective engine when placed in the ON (forward) position.  The connection to electrical power is external if the aircraft is connected to a ground crew provided generator, or the aircraft's battery if no external power available.  Switching them to OFF (aft) position will engage the fuel shutoff valves so long as the aircraft is not solely running on the internal electrical bus; otherwise, the valves will remain open, unless the engine throttle is placed into the cutoff position.

**Rudder Trim Switch**

Used to apply rudder trim adjustment when pressed to the respective side, left or right.


Throttles
---------

.. image:: images/PilThrottles.png


Eject Light/Switch
------------------

.. image:: images/PilEjectLight.png

Pressed by the pilot in an emergency condition requiring ejection from the aircraft, which illuminates the EJECT lamp in the rear cockpit warning the WSO to prepare for immediate ejection.


Slats/Flaps Control Panel
-------------------------

.. image:: images/FlapSlatPan.png

A three position switch (NORM, OUT, OUT AND DOWN) to the rear of the panel provides normal operation functions of the Slats/Flaps System.  These functions are relative to landing gear position, and are noted as follows:

**Nose Gear UP**

+--------------+-----------------------------------------------------------------------------------+
| NORM         | Flaps up, slats operate as function of AOA.                                       |
+--------------+-----------------------------------------------------------------------------------+
| OUT          | Slats extend.                                                                     |
+--------------+-----------------------------------------------------------------------------------+
| OUT AND DOWN | Slats and flaps extend (wheels light flashing until landing gear is down.         |
+--------------+-----------------------------------------------------------------------------------+

**Nose Gear DOWN**

+--------------+-----------------------------------------------------------------------------------+
| NORM         | Flaps up, slats operate as function of AOA.                                       |
+--------------+-----------------------------------------------------------------------------------+
| OUT          | Slats and flaps extend.                                                           |
+--------------+-----------------------------------------------------------------------------------+
| OUT AND DOWN | Slats and flaps extend.                                                           |
+--------------+-----------------------------------------------------------------------------------+

.. image:: images/SlatsRelative.png


Also included is the Emergency Slats/Flaps Extension handle, marked in yellow and black, at the top of the panel.  This is handle is pulled to force high pressure air into the slats/flaps actuation system, causing them to deploy in event of control system failure.


Canopy Control Switch
---------------------

.. image:: images/PilCanSel.png

Used to open (aft) or close (forward) the pilot canopy. 


Extra Picture Switch
--------------------

.. image:: images/ExtraPic.png


Gun Camera Switch
-----------------

.. image:: images/GunCamSwtch.png


Fuel Control Panel
------------------

.. image:: images/FuelCntl.png


VOR/ILS Control Panel
---------------------

.. image:: images/VORILSCntl.png


Drag Chute Handle
-----------------

.. image:: images/DragChute.png

Applied to reduce landing rollout, or as an aid in spin recovery, the drag chute handle is pulled back to deploy the chute, and, once deployed, a button on the handle is pressed while pulling the handle back further to jettison the chute.  Once jettisoned, the handle is released back into its normal position.


AFCS Control Panel
------------------

.. image:: images/AFCSPan.png


Boarding Steps Indicator
------------------------

.. image:: images/BoardSteps.png

Used to visually confirm boarding ladder has been stowed.  With the white post extended up, ladder is stowed, whereas ladder is deployed if post is down and flush with panel recess.


Intercom System Control Panel
-----------------------------

.. image:: images/PilIntercom.png



AN/ALE-40 Programmer
--------------------

.. image:: images/ANALE40Prg.png


Slats Override Switch
---------------------

.. image:: images/SlatsOvrd.png


Armament Safety Override Switch
-------------------------------

.. image:: images/ArmOvrd.png


Anti-G Suit Control Valve
-------------------------

.. image:: images/PilAntiG.png




.. _ped:

Pedestal Group
==============

.. image:: images/PedGrp.png


Accelerometer
-------------

.. image:: images/GGauge.png
  
  
Calibrated from negative 4 to positive 10 in units of G, with three pointers- one for current applied load, the other two show maximum positive and negative G applied during the flight.  Pressing the PUSH TO SET button will reset the maximum position indicators to 1 G.  


Engine Oil Pressure Indicators
------------------------------

.. image:: images/OilPress.png
  
A pair of engine oil pressure indicators are provided, one for each engine, calibrated from 0 to 10, multiplied by 10 to read as units of PSI.


Hydraulic pressure Indicators
-----------------------------

.. image:: images/HydPress.png
  
  
Two hydraulic pressure indicators are installed.  One references the Utility Hydraulic System pressure, while the other references the PC-1 and PC-2 Hydraulic Systems; the latter includes two needles, and are marked accordingly. 


Rounds Remaining Indicator
--------------------------

.. image:: images/Rounds.png

Programs for current available number of rounds prior to takeoff using dial. 


Rudder Pedal Adjustment Crank
-----------------------------

.. image:: images/PedAdjust.png
  
  
Used to adjust ergonomic position of the rudder pedals forward or back from the pilot.  Unused in DCS.


Pneumatic Pressure Indicator
----------------------------

.. image:: images/Pneum.png
  
  
Provides cumulative manifold pressure of the compressed engine bleed air used to drive the aircraft's pneumatic actuated equipment.  


.. _rightsub:

Right Subpanel
==============

.. image:: images/RightSub.png


Generator Indicator Lights
--------------------------

.. image:: images/GenInd.png

Indicating LH GEN OUT (Left), RH GEN OUT (Right), and BUS TIE OPEN, the indicator lights will illuminate when the specified generator is offline, or, in the event of BUS TIE OPEN, when the generators are not functioning in parallel.  Indicators will trigger a Master Caution. In event of dual generator failure, neither will illuminate.


Feed Tank Check Switch
----------------------

.. image:: images/FeedCheck.png

A two-position spring-loaded switch used to confirm nominal quantity in the engine feed tank, the positions being FEED TANK CHECK and NORM (default).  When FEED TANK CHECK is selected and held, the fuel quantity gauge will indicate soley the current fuel quantity in the engine feed tank on both the tape and counter.  When the feed tank is full, the indicated value should read 1400 lbs, plus or minus 200 lbs on the counter, and the tape value should be 1400 lbs, plus or minus 150 lbs.  


Arresting Hook Control Handle
-----------------------------

.. image:: images/HookHandle.png

Utilized for field emergency arrestment.


KY-28 Mode Light Panel
----------------------

.. image:: images/KY28Mode.png

Dependent on mode, the illuminated display shows P for Plain mode, or C for Cipher mode.  Note: UHF communications require the system be in Plain mode, even with system power off, barring usage and monitoring of guard channel. 


Telelight Anunciator Panel
--------------------------

.. image:: images/Telelight.png

Provides the majority of aircraft system warnings that can be rectified by the pilot.  Most warnings on the panel will cause the Master Caution to illuminate; those that do not will be noted.


.. _rightcons:

Right Console Area
==================

.. image:: images/RightConsole.png

Master Caution Reset
--------------------

.. image:: images/MCRst.png

Used to extinguish telelight panel warnings and the Master Caution warning lamp once the necessary action has been taken. In the event a fault has not been effectively corrected, pressing the Master Caution Reset button will not turn the respective warning off.  


TACAN Control Panel
-------------------

.. image:: images/FrontTCN.png

The TACAN Control Panel is used to enter the desired TACAN channel, mode, and audible volume for the monitoring of said channel by the aircrew.  The panel is duplicated in both cockpits, and the panel in command of the TACAN receiver is selected with the NAV CMD button the Communication Control Panel.

On the control panel is found two Navigation Channel Control knobs, with the left controlling the first two digits of the channel value (hundreds and tens), and the right controls the single unit (ones) values.  The right knob also includes an outer ring which sets the X or Y value for the desired TACAN channel. 

Between these two knobs is the TEST button, which performs the ground testing cycle after warmup, and can also be used to perform an in-flight confidence test of the system's performance.

To the upper right, the VOL knob is available to set the desired audio level for the received TACAN station.  

The TACAN Function Selector Knob determines the presentation and type of information provided on the HSI, ADI, and BDHI, respectively.

+-------------+-----------------------------------------------------------------------------------+
| OFF         | The TACAN receiver is deenergized and offline.                                    |
+-------------+-----------------------------------------------------------------------------------+
| REC         | The TACAN receiver is active, providing bearing information on the HSI, BDHI, and |
|             |                                                                                   | 
|             | ADI.                                                                              |
+-------------+-----------------------------------------------------------------------------------+
| T/R         | Both the receive and transmit functions of the TACAN are active, which provide    |
|             |                                                                                   |
|             | bearing and nautical mile range information for the HSI and BDHI.                 | 
+-------------+-----------------------------------------------------------------------------------+
| A/A REC     | The TACAN reciver decodes bearing information from compliant aircraft for the HSI,|
|             |                                                                                   |
|             | BDHI, and ADI steering display.                                                   |
+-------------+-----------------------------------------------------------------------------------+
| A/A TR      | The TACAN receiver receives both bearing and sland range information in nautical  |
|             |                                                                                   |
|             | miles from the transmitting aircraft, providing this on the HSI and BDHI.         |
+-------------+-----------------------------------------------------------------------------------+

Note: Air to Air TACAN functionality requires the channel to be set 63 channels above or below the cooperating aircraft, but on the same range- X or Y. 


Communication Control Panel
---------------------------

.. image:: images/CCP.png

The Communication Control Panel provides selection and mode of the UHF radio in the aircraft.  The panel is duplicated in both cockpits, and control over the radio is determined through pushing the COMM CMD Button in the respective seat; the button will illuminate green in the seat in priority.  In the same fashion, the NAV CMD button dictates which seat has control of the TACAN settings; its button will also illuminate in the seat in command of the system.

Beneath the COMM CMD button is the radio volume for the respective seat.  Adjacent to the NAV CMD button is the Squelch switch, which enables or disables receiver squelch. 

The A-3-2-T Selector knob sets HAVE Quick functionality of the UHF radio (A- auto-jam), the first digit of the manually selected frequency (3 or 2), or enables Time of Day receipt for one minute after selection in a momentary hold position (T).  

The four Frequency Selection Knobs work in concert with the A-3-2-T knob and Preset/Manual switch.  Frequencies are entered beginning with the 3 or 2 selection on the A-3-2-T Selector, and can be entered from 225.00 to 399.975 MHz in increments of 0.025.  With Preset/Manual in the Manual position, the UHF radio is directly set to the displayed channel.  In the Preset position, the set channels can entered into the COMM CHAN memory, with the desired position selected with the Comm Channel Control knob- the smaller knob to the left of the Preset/Manual switch, and displayed in the COMM CHAN window. Channels are stored in the displayed channel preset with the SET pushbutton. Once stored, channels are directly selected using the Comm Channel Control knob with the Preset/Manual switch in the Preset position.  

The Tone Pushbutton is used for transmission of a TOD signal along with a tone to friendly aircraft requiring a Time of Day update for proper HAVE Quick functionality.  It is also used to activate the emergency TOD clock for the radio itself, in conjunction with the T position of the A-3-2-T knob.  Selecting the T position and pushing the Tone button will cause the radio to listen for a TOD signal from another friendly transmitter to synchronize the anti-jam function with the desired network.

Directly underneath the Comm Channel Control Knob is the Aux Channel Knob and Indicator.  This knob is used to access 20 common preset channels that cannot be changed from in the cockpit. 

The Comm Function Selector Knob determines the current configuration of the radio system. 

+-------------+-----------------------------------------------------------------------------------+
| OFF         | All UHF Radios off.                                                               |
+-------------+-----------------------------------------------------------------------------------+
| T/R ADF     | Comm receiver - comm reception.                                                   |
|             |                                                                                   | 
|             | Comm transmitter - comm transmission.                                             |
|             |                                                                                   |
|             | Comm guard receiver - standby.                                                    |
|             |                                                                                   | 
|             | Aux receiver- with antenna select in UPR, comm reception; in LWR, ADF reception.  |
+-------------+-----------------------------------------------------------------------------------+
| T/R+G ADF   | Comm receiver - comm reception.                                                   |
|             |                                                                                   | 
|             | Comm transmitter - comm transmission.                                             |
|             |                                                                                   |
|             | Comm guard receiver - guard reception.                                            |
|             |                                                                                   | 
|             | Aux receiver- with antenna select in UPR, comm reception; in LWR, ADF reception.  |
+-------------+-----------------------------------------------------------------------------------+
| ADF+G CMD   | Comm receiver - ADF reception.                                                    |
|             |                                                                                   | 
|             | Comm transmitter - comm transmission.  ADF interruped during transmission.        |
|             |                                                                                   |
|             | Comm guard receiver - guard reception on ADF antenna.                             |
|             |                                                                                   | 
|             | Aux receiver- comm reception.                                                     |
+-------------+-----------------------------------------------------------------------------------+
| ADF+G       | Comm receiver - ADF reception.                                                    |
|             |                                                                                   | 
|             | Comm transmitter - comm transmission.  ADF interruped during transmission.        |
|             |                                                                                   |
|             | Comm guard receiver - standby.                                                    |
|             |                                                                                   | 
|             | Aux receiver- guard reception.                                                    |
+-------------+-----------------------------------------------------------------------------------+
| Guard ADF   | Comm receiver - guard reception.                                                  |
|             |                                                                                   | 
|             | Comm transmitter - guard transmission.                                            |
|             |                                                                                   |
|             | Comm guard receiver - standby.                                                    |
|             |                                                                                   | 
|             | Aux receiver- with antenna select in UPR, comm reception; in LWR, ADF reception.  |
+-------------+-----------------------------------------------------------------------------------+

The Aux Volume Control knob raises and lowers the volume of the Aux receiver channel. 


Flight Instrument Lights Intensity Panel
----------------------------------------

.. image:: images/InsIntensity.png

The Instrument Lights Intensity Panel has six knobs, which, when the Flight Instrument Light knob on the Cockpit Light Control Panel is in the OFF position, independently changes illumination intensity on the following indicators:

+--------------------------------+
| Airspeed/Mach Indicator        |
+--------------------------------+
| Attitude Director Indicator    |
+--------------------------------+
| Angle of Attack Indicator      |
+--------------------------------+
| Vertical Velocity Indicator    |
+--------------------------------+
| Altimeter                      |
+--------------------------------+
| Horizontal Situation Indicator |
+--------------------------------+

Formation and Indexer Lights Control Panel
------------------------------------------

.. image:: images/FormLights.png

Control of the formation lights, which are found on the wing tips, both sides of the vertical stabilizer, and along the fuselage forward and amidship, is performed using the three position switch and rotary knob on this panel.  The switch has positions for MOM (momentary), OFF, and ON.  The variable control knob provides relative illumination levels at five positions: OFF, DIM, MED (medium), BRT (bright), and JOIN UP. 

Also on this panel is the Indexer Lights brightness knob, which controls relative illumination of the AoA indexers on both sides of the windscreen.  Marked positions are DIM and BRT (bright), with highest level to the right of the knob.


Emergency Floodlights Panel
---------------------------

.. image:: images/PilFlood.png


IFF Control Panel
-----------------

.. image:: images/IFF.png


DCU-94A Stores Control-Monitor Panel
------------------------------------

.. image:: images/DCU94.png


Compass Control Panel
---------------------

.. image:: images/CompassCtl.png


Exterior Lights Control Panel
-----------------------------

.. image:: images/ExtLights.png


Emergency Vent Handle
---------------------

.. image:: images/EmergVent.png


Utility Panel (Right)
---------------------

.. image:: images/PilUtil.png


Defog/Foot Heat Lever
---------------------

.. image:: images/Defog.png

Provides pilot selectable volume of warm air to the windscreen or footwell recesses for comfort or visibility.


Generator Control Switches
--------------------------

.. image:: images/GenCtl.png

Control of each engine's respective electrical generator is provided by an individual switch.

+---------------+------------------------------------------------------------------------------------+
| ON            | Generator is driven by engine accessory power and applied to electrical bus.       |
+---------------+------------------------------------------------------------------------------------+
| OFF           | Generator is offline.                                                              |
+---------------+------------------------------------------------------------------------------------+
| ON (EXTERNAL) | External power is supplied through generator bus connection for pre-startup needs. | 
+---------------+------------------------------------------------------------------------------------+


Temperature Control
-------------------

.. image::  images/PilTemp.png


Cockpit Lighting Control Panel
------------------------------

.. image:: images/PilCockLights.png

The Cockpit Lighting Control Panel provides control of all panel edge lighting, flight instrument panel lighting, the console floodlights, the white floodlights found under the canopy sill over each console, and also includes the Warning Light Test/Standby Compass Light switch.

The White Floodlight switch acts independent of all other controls on the panel, and is either ON or OFF. 

The Flight Instrument Light Knob (marked INSTR PANEL), when moved to the right of the OFF detent, controls illumination of the following six instrument lights in unison: 

Airspeed/Mach Indicator
Attitude Director Indicator
Angle of Attack Indicator
Vertical Velocity Indicator
Altimeter
Horizontal Situation Indicator

When in the OFF position, these indicators are independently controlled for illumation by the knobs on the Flight Instrument Lights Intensity Panel.

The Console Light Control Knob, with range from OFF to BRT, controls illumination level for all panel edge lighting and the console floodlights.  The console floodlights (CONSOLE FLOOD) are triggered independently of the knob when it is placed to the right of the OFF detent position, and offer three settings- DIM, MED, or BRT.  The floodlights will remain on until the Console Light Control knob is returned to the OFF position, and the floodlight switch is placed in DIM. 

The Warning Light Test Switch (Marked WARN LT TEST) is a three-position switch; in the WARN LT TEST position, confirms function of the various emergency indicators in the cockpit.  In the STBY COMP position, it illuminates the light for the Standby Compass.  Both functions are deactivated when the switch is placed in the OFF position. 


WSO Cockpit Layout
******************


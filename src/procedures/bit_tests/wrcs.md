# WRCS BITs

## WRCS BIT

| Step | System                | Action       |
|------|-----------------------|--------------|
| 1.   | INS                   | ALIGN or NAV |
| 2.   | Target alt/range knob | 170          |
| 3.   | ARBCS bombing timers  | SET          |
|      | a. Pullup             | 5.0          |
|      | b. Release            | 10.0         |
| 4.   | (P) BRG/DIST switch   | NAV COMP     |
| 5.   | (WSO) Nav mode switch | NAV COMP     |

### Laydown Mission

| Step | System                       | Action        |
|------|------------------------------|---------------|
| 1.   | WRCS BIT selector            | LAYDOWN       |
| 2.   | BIT button                   | PUSH and HOLD |
| 3.   | After 5 seconds, FRZ button. | PUSH ON       |
|      | a. Range indicator           | ON            |
|      | b. After 15 seconds          | GO/NO GO      |

### Dive Laydown Mission

| Step | System                       | Action        |
|------|------------------------------|---------------|
| 1.   | WRCS BIT selector            | DIVE LAYDOWN  |
| 2.   | BIT button                   | PUSH and HOLD |
| 3.   | After 5 seconds, FRZ button. | PUSH ON       |
|      | a. Alt indicator             | ON            |
|      | b. After 15 seconds          | GO/NO GO      |

### Dive Toss Mission

| Step | System                       | Action        |
|------|------------------------------|---------------|
| 1.   | WRCS BIT selector            | DIVE TOSS     |
| 2.   | BIT button                   | PUSH and HOLD |
| 3.   | After 5 seconds, FRZ button. | PUSH ON       |
|      | a. Alt indicator             | ON            |
|      | b. After 15 seconds          | GO/NO GO      |

### AGM-45 Mission

| Step | System                                  | Action          |
|------|-----------------------------------------|-----------------|
| 1.   | WRCS BIT selector                       | AGM-45          |
| 2.   | BIT button                              | PUSH and HOLD   |
|      | a. BDHI and HSI miles 7.6 ± 1.0 NM      |                 |
|      | b. Alt indicator                        | ON              |
| 3.   | After 5 seconds, FRZ button.            | PUSH ON         |
|      | a. BDHI and HSI miles DECREASE          |                 |
|      | b. AOA lower indexer                    | PULL UP COMMAND |
|      | c. After 10 seconds, AOA center indexer | LEVEL COMMAND   |
|      | d. After 5 seconds                      | GO/NO GO        |
|      | e. After 5 seconds, AOA upper indexer   | DIVE COMMAND    |

### Target Find/Offset Bomb Mission

| Step | System                                       | Action                                           |
|------|----------------------------------------------|--------------------------------------------------|
| 1.   | WRCS BIT selector                            | TGT FIND/OFFSET BOMB                             |
| 2.   | BIT button                                   | PUSH and HOLD                                    |
|      | a. Alt indicator                             | ON                                               |
| 3.   | After 5 seconds, along track cursor control  | MOVE                                             |
| 4.   | Cross track control                          | MOVE                                             |
| 5.   | Cursor intensity                             | ADJUST                                           |
| 6.   | Reset button                                 | PUSH                                             |
|      | a. Cursors return to zero range and azimuth. |                                                  |
| 7.   | Target insert button                         | PUSH ON                                          |
|      | a. Along track cursor                        | 6.5 NM on 00 grid line (±.2000 feet)             |
|      | b. Cross track cursor                        | 30° +1.5° RIGHT                                  |
|      | c. (P) HSI bearing pointer                   | 23° ±.2.5° (right of lubber); HSI TGT light - ON |
|      | d. TGT INS light                             | ON                                               |
|      | e. BDHI #1 needle                            | 23° ±.5° (right of top index)                    |
|      | f. (P-WSO) HSI and BDHI miles                | 4.8±.1.0 NM                                      |
|      | g. (P) Sight roll tabs                       | ROTATED CLOCKWISE                                |
|      | h. (P) ADI vertical pointer                  | DEFLECTS FULL RIGHT                              |
| 8.   | After 5 seconds, FRZ button.                 | PUSH ON                                          |
|      | a. (P-WSO) HSI and BDHI miles                | DECREASE TO ZERO, THEN INCREASE                  |
|      | b. (P) Sight roll tabs                       | ROTATES (as miles passes through zero)           |
|      | c. After 15 seconds                          | GO/NO GO                                         |

## Bomb Range Calibration/Integration Check

| Step | System                                                                                                                              | Action                                                                                      |
|------|-------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| 1.   | INS mode                                                                                                                            | NAV                                                                                         |
| 2.   | WRCS control panel                                                                                                                  | SET                                                                                         |
|      | a. Target distance N/S                                                                                                              | N120                                                                                        |
|      | b. Target distance E/W                                                                                                              | 000                                                                                         |
|      | c. Target altitude                                                                                                                  | SET PRESENT AIRCRAFT HSL (29.92)                                                            |
|      | d. Release advance                                                                                                                  | 000                                                                                         |
|      | e. Release range                                                                                                                    | 000                                                                                         |
| 3.   | Weapons delivery panel                                                                                                              | SET                                                                                         |
|      | a. Activate switch                                                                                                                  | NORM                                                                                        |
|      | b. Target find switch                                                                                                               | HOLD                                                                                        |
|      | c. Range switch                                                                                                                     | X100                                                                                        |
| 4.   | Front cockpit switches                                                                                                              | SET                                                                                         |
|      | a. Delivery mode                                                                                                                    | T LAD                                                                                       |
|      | b. Weapon select                                                                                                                    | BOMBS                                                                                       |
|      | c. Station select buttons                                                                                                           | OFF                                                                                         |
|      | d. Armament override                                                                                                                | PUSH IN                                                                                     |
| 5.   | Timers                                                                                                                              | SET (values for delivery)                                                                   |
|      | a. Pullup timer                                                                                                                     |                                                                                             |
|      | b. Release timer                                                                                                                    |                                                                                             |
| 6.   | Target insert button                                                                                                                | PUSH ON                                                                                     |
|      | a. Along track cursor                                                                                                               | Jumps to second BIT target                                                                  |
| 7.   | WRCS distance counters N/S                                                                                                          | Increase or decrease until near edges of along track cursor and second BIT target coincide. |
|      | a. Note difference between counter and N120.                                                                                        |                                                                                             |
|      | b. For larger counter value, correction is +; for smaller counter value the correction is -.                                        |                                                                                             |
| 8.   | Target distance N/S                                                                                                                 | RESET                                                                                       |
|      | a. Set preflight release range adjusted for calibration error in step 7.                                                            |                                                                                             |
|      | b. Release range switch                                                                                                             | NORM or X100 (as required)                                                                  |
|      | c. Activate switch                                                                                                                  | ON                                                                                          |
| 9.   | Release range counter                                                                                                               | INCREASE (slowly until 1/3 second tone)                                                     |
|      | a. Check timer accuracy.                                                                                                            |                                                                                             |
|      | b. (P) Check LABS indications.                                                                                                      |                                                                                             |
|      | c. Note difference between derived RR counter reading and preflight release/activation range and apply as correction to all ranges. |                                                                                             |   
|      | (1) For larger counter value, correction is+; for smaller counter value, the correction is-.                                        |                                                                                             |

### WRCS turn off

| Step | System                   | Action          |
|------|--------------------------|-----------------|
| 1.   | WRCS BIT selector        | RELEASE and OFF |
| 2.   | Target alt/range counter | 000             |
| 3.   | Weapons delivery panel   |                 |
|      | a. Activate switch       | NORM            |
|      | b. Target find switch    | NORM            |
|      | c. Range switch          | NORM            |
| 4.   | WRCS control panel       | RESET           |

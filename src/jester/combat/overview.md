# Combat

Jesters assistance for combat situations is generally divided into options on
the Jester Wheel, whenever not in a high action environment yet, and a smart
**Context Action** for use during situations that require acting quick, such as
during a fight.

## Context Action

The context command (by default <kbd>V</kbd>) allows for intuitive cooperation
and exchange between Pilot and WSO based on the following contexts:

- Pave Spike - TGT FIND selected on the Delivery Mode Knob
- Dive Toss - DT or DL selected on the Delivery Mode Knob
- Dogfight - CAGE mode
- Beyond Visual Range - other

The context action can change semantics if pressed only momentarily (•),
if hold (▄) or if clicked twice (••, double-click).

| Context    | Duration | Action                              |
| ---------- | :------: | ----------------------------------- |
| BVR - Scan |    •     | Select next target                  |
|            |    ▄     | **Lock** selected target            |
|            |    ••    | Reset target selection              |
| BVR - Lock |   •, ▄   | Drop lock, but keep target in focus |
|            |    ••    | Drop lock and focus                 |
| Dogfight   |   •, ▄   | Lock/Unlock contact ahead           |
|            |    ••    | Exit CAGE mode                      |
| Dive Toss  |          | Lock/Unlock ground return           |
| Pave Spike |          | Lock/Unlock target next to reticle  |

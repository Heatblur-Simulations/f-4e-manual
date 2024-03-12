# ACM 描述

## CAGE 描述

![pilot_cage_button](../../img/pilot_cage_button.jpg)

如果需要在 A/G 模式下使用
[AIM-7](../../stores/air_to_air/aim_7.md)、[AIM-9](../../stores/air_to_air/aim_9.md) 或
[M61A1](../../stores/guns.md) 配合 [瞄准具](../../cockpit/pilot/dscg_controls.md#sight-mode-knob)
攻击空中目标（例如，遭到敌机伏击），可以立即使用位于内侧（右侧）油门握把上的 Cage 按钮，将
[光学瞄准具](../../cockpit/pilot/dscg_controls.md#sight-mode-knob) 的准星快速对准雷达轴线。Cage 模
式会指令雷达进入 BST 模式，设定五英里的锁定距离和短脉冲，并根据小指开关当前选择的空对空武器设置发射
电路。在光学瞄准具中，指令将激活所选武器的相应仰角和方位跟踪、横滚标记和准星距离功能，飞行员无需将
手从油门握把或驾驶杆中一开来操作瞄准具模式或设置武器控制面板功能。

如果在按下 CAGE 按钮并且小指开关在雷达或 HEAT 档位前死定了目标，按下 CAGE 将导致雷达脱锁，并且天线
将在松开按钮时隶属至瞄准轴。如果小指开关在航炮档位，雷达则不会脱锁。

任意驾驶舱都可以退出 Cage 模式，通过飞行员驾驶舱中的
[武器选择旋钮](../../cockpit/pilot/weapon_management.md#weapon-selector-knob) 转至 B 档位，或 WSO
在后座驾驶舱面板上按下空对空按钮即可退出 CAGE 模式。即使飞行员将
[武器选择旋钮](../../cockpit/pilot/weapon_management.md#weapon-selector-knob) 留在 B 档位，也不妨碍
之后再次进入 Cage 模式。

![pilot_weapon_selector_knob](../../img/pilot_weapon_selector_b_pos.jpg)

## 计算机中的截获模式 (CAA)

![CAA](../../img/CAA.jpg)

在进入 Cage 模式后，可以通过
[前轮转向按钮](../../systems/flight_controls_gear/gear_ground_handling.md#nose-gear-steering) 指令
雷达进入计算机自动截获模式。在 CAA 模式下，雷达进入一个垂直方向，高 78 度，宽 15 度的栅状扫描。由于
APQ 软件的限制，实际的雷达锁定能力限定在地平线上方+45 度到地平线下方-9 度的扫描区域内。如果雷达在扫
描区域内发现了合适的目标，将会锁定这一目标。如果机组发现锁定的目标并非预期，可以在任意驾驶杆上按下
[前轮转向按钮](../../systems/flight_controls_gear/gear_ground_handling.md#nose-gear-steering) 使雷
达返回栅状扫描。

在 CAA 模式下，飞行员可使用小指开关将雷达的栅状扫描向左或向右移动。虽然移动扫描区会改变平视显示器上
亮起的武器指示灯，但从进入 Cage 模式时实际选定的武器并不会改变。

| 选择 | 聚焦         |
| ---- | ------------ |
| 航炮 | 雷达向左聚焦 |
| 红外 | 雷达聚焦中央 |
| 雷达 | 雷达向右聚焦 |

飞行员将驾驶舱中的 [武器选择旋钮](../../cockpit/pilot/weapon_management.md#weapon-selector-knob) 转
至 B 档位，或 WSO 在后座驾驶舱面板上按下
[空对空按钮](../../cockpit/wso/left_sub_panel.md#air-to-air-light) 即可退出 CAA 模式。如果在退出模
式时已经建立雷达锁定，那么锁定将会保留。

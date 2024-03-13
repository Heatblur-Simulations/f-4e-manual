# 导航

![real_life_crew_with_map](../img/map_2.jpg)

Jester 的导航功能主要围绕对最多两个飞行计划的转向点进行管理。

## 飞行计划

一个飞行计划由数个转向点组成。玩家可以通过 UI、地图或任务编辑器插入、删除或编辑转向点。

![Edit Turn Points](../img/jester_nav_edit_turn_points.jpg)

如果作者通过任务编辑器为飞机分配了一系列航路点，这些航路点将默认作为第一个飞行计划。

### 地图标记

玩家可以在 <kbd>F10</kbd> 预警机视角中，通过在 UI 顶部菜单栏选择 **标记标签** 并在所需位置点击鼠标
左键来创建标记。

![Create Map Markers](../img/dcs_map_markers.jpg)

接着，玩家可以通过 UI 将这些地图标记作为转向点导入至飞行计划中。

![Select Map Marker](../img/jester_nav_map_markers_ui.jpg)

### 通信调谐

UI 可为玩家提供附近资产列表，如具有电台通信能力的船只、油加油机或地面台。

资产当前的位置可以直接作为转向点导入至飞行计划中。

> 💡 对于像加油机这样的移动资产，它们的实际位置可能与计划坐标有所不同。玩家需要使用 TACAN 或 ADF 进
> 行更精确的导航。

### 塔台调谐

和调谐到附近资产相似，UI 将提供导航至附近机场列表。

![Tune Airfields](../img/jester_nav_tune_airfields.jpg)

### 坐标输入

玩家可以通过 UI 输入对应的 LAT/LON 来添加一个转向点。

输入格式为 `H DD MM H DDD MM`，

- 其中 `H` 代表半球 (纬度为 `N` 或 `S` 以及经度 `E` 或 `W` ); - `D` 表示度 (纬度 `00` 到 `89` 以及
  经度 `000` 到 `179` ); - 以及 `M` 表示分 (`00` 到 `59`)。

比如，有效坐标 `N 45 32 E 047 12` 或 `S 05 55 W 105 00`。

> 💡 空格为可选项，`N4532E04712` 同样为有效坐标。

![Enter Coordinates](../img/jester_nav_enter_latlon.jpg)

## 操作

Jester 将通过一种名为 **跃迁** 的技术来进行导航。飞机仅能提供一个槽位来存储一个航路点（称为 **TGT
2**）。

### 计划航路

在跳跃式导航中， **TGT 2** 始终指示当前飞行计划的下一个转向点。当飞机接近下一转向点（±2 海里）时
，Jester 将自动更新 TGT 2 到序列中的下一个转向点。

这使得飞行员能够通过在导航功能选择面板上选择 NAV COMP 档位并跟随 HSI 上对应的指示，来按照飞行计划的
航路进行飞行。

![HSI](../img/jester_nav_hsi.jpg)

### 改航

除开跟随飞行计划，Jester 还能使用 **TGT 1** 改航至非计划内的转向点。

玩家可以通过 UI 随时在使用 TGT 1（改航）和 TGT 2（飞行计划）之间切换。

![Divert Option](../img/jester_nav_divert_option.jpg)

### 暂停 & 恢复航路

UI 中的当前转向点旁边显示星号 `*` 表示飞行计划已激活。

玩家可以使用 **Toggle Hold At** 选项来暂时禁用各个转向点的自动转向点切换功能。标记为挂起的转向点将
标有 `h` 字样。

![Turn Point Modifiers](../img/jester_nav_turn_point_modifiers.jpg)

已暂停的飞行计划，例如因为飞行员使用 TGT 1 改航到不同点时，玩家可以通过 UI 中的 **Resume Flight
Plan** 选项再次重新激活飞行计划。

玩家可以通过暂停 & 恢复选项直接跳转至序列中的任意一个转向点来跳过转向点，以及返回先前的转向点或从指
定为挂起的转向点继续飞行。

## TACAN

两名机组成员都可以单独控制 TACAN 设备，机组可使用 **指令按钮** 在飞行员和 WSO 之间切换控制权。

此外，Jester 能够直接调谐到任何具备 TACAN 能力的资产或地面台。

![Tune TACAN Ground Station](../img/jester_tacan_ground_station.jpg)

飞行员还可以通过 Jester 来设置次要塔康台，接着只需点击指令按钮来在两个塔康台之间切换。

## UHF

两个驾驶舱中的 UHF 电台相同并且可单独进行操作。使用 **指令按钮** 来在飞行员和 Jester 电台设置之间切
换。飞行员可以通过 Jester 来设置两种电台配置，并通过 **指令按钮** 来不同配置之间快速切换。

Jester 能够直接将无线电台调谐到任何附近的资产或 ATC，以便方便快捷地启用并打开通信频道。飞行员还可以
通过调谐至 ADF 进行导航。

![Tune UHF ATC](../img/jester_uhf_tune_atc.jpg)

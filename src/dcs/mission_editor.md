# 任务编辑器

F-4 在任务编辑器中有数个专用选项。

![Special Options](../img/mission_editor_special_options.jpg)

## 状态和磨损

飞机的所有组件都单独地模拟了磨损，每次部署时都会拥有独特的体验，但磨损也取决于 F-4 的飞行方式。

一般情况下，磨损分为 **状态** 和 **磨损**，两者在部署时都为动态变化且在整个任务过程中会受到各种因素
的影响，如过载、温度和战斗损伤。

飞机上有成千上万的组件都会受到磨损系统的影响。一个具体的例子是 Pave Spike 瞄准吊舱升仰角环架电机的
速度。在完美状态下，它的速度应该是每秒 60 度。然而，工厂一般无法确保始终一致，因此会接受一定的误差
，例如误差必须在 1% 以内。

在数学上，我们用 **正态分布** 模拟误差，由以下参数组成

- μ (Mu, 平均数) - 它在完美状态下的值
- σ (标准差) - 误差值

![Normal Distribution](../img/normal_distribution.jpg)

大约 70% 的情况下，数值会在 σ 的一个标准差以内；95% 的情况下，数值会在 σ 的两个标准差以内。超过 3
个标准差 σ 的极端情况也有可能发生，但非常少见。

例如，上述电机的 σ 值为 3%，约为每秒 60 度，这意味着绝大多数瞄准吊舱将使用能以每秒 58 至 62 度之间
移动仰角环架的电机。

💡 误差是双向的，玩家的鬼怪也可能比它应有的速度更快。

### 飞机状态

飞机的状态一般指其出厂和生产质量。例如，在战争时期，工厂可能会出现供应短缺，并在生产过程中降低验收
标准，这通常会增加单个组件的性能出现。

任务设计者可以通过 **飞机状态** 滑块来控制这方面的情况，该滑块表示的质量从 0%（低质量）到 100% （高
质量）不等。

例如 Pave Spike 电机，当设置为 0% 时，其速度误差 σ 将从 3% 增加到 8%，从而导致大多数吊舱的转动速度
介于每秒 55 至 65 度之间。

飞机状态始终处于制造商可以合理接受的区间内。飞机始终是完全正常工作的。

### 飞机磨损

除生产质量外，飞机上的组件在服役期间也会因上次大修后的时间、温度和天气等外部因素、机身过载较大的激
进飞行以及战斗损伤而退化。

任务设计者可以使用飞机磨损滑块控制这方面的情况，显示从 0%（无磨损）到 100% （大量磨损）甚至更高的磨
损程度。对于一架刚修理好并刚刚退役的飞机来说，0% 是合适的。100% 指的是飞机被送回维修的最晚时间点，
因为在实战中它开始变得不那么有效。超过 100% 的数值，比如 500%——可用来表示飞行员被迫驾驶一架运行性能
远低于预期水平的飞机的情况。这种情况下，飞机在一定程度上仍然可用，没有任何组件直接损坏，只是组件的
性能不再符合可接收的参数。

例如 Pave Spike 电机，磨损设置到 100%，其速度误差 σ 将额外增加 20%。假设初始起动状态良好，此时电机
的工作速度可能在每秒 45 到 75 度之间。

![Crashed Phantom](../img/broken_phantom_crash.jpg)

### 基准飞机

如果需要，任务设计者可以通过该复选框来关闭初始部署时的误差系统。组件将以其平均数 μ 开始，不含任何误
差。

也就是说，勾选选项后，状态设置以及磨损都将被忽略和禁用。飞机启动时的所有属性都将完全按照资料与制造
商的规定进行设置，不会有任何误差。

基准飞机在比赛中尤为重要，为了公平起见，比赛双方应在相同的状态下开始比赛。或者在进行测试和计算性能
曲线时，飞机应始终以完全相同的数值开始。

💡 即使是基准飞机，在飞行过程中也会出现磨损。在比赛中，如果拉大过载，玩家的飞机的组件属性就会与对手
产生差异。

## INS Reference Alignment Stored

This checkbox allows significant reduction of the time needed for a proper INS alignment during
cold-start.

Therefore, the ground crew would previously have started the aircraft and executed a full
alignment, then shut it down again, while memorizing parts of the alignment data.

See the [INS section](../systems/nav_com/ins.md#heading-memory-alignment) for details on how to
execute a stored alignment.

## Allow Night Vision Goggles

Although F-4E crews never actually operated with NVGs, this option allows mission designers to
create modern or fictional scenarios where Phantom crews might have access to such devices.

## TACAN Options

Allows to set the TACAN channel and band set when spawning initially.

## VOR/ILS Options

Allows to set the VOR/ILS frequency when spawning initially.

## KY-28 Encryption Key

Allows to set the encryption key used by the KY-28 communication encryption system.

This setting is especially important when using tools such as ED-VOIP or SRS that simulate
encryption while using the radio equipment.

See the [KY-28 System](../systems/nav_com/encryption.md) for details.

## Chaff Double Dispense

An option available to the ground-crew on the AN/ALE-40 countermeasure dispensers.

When selected, each signal to release chaff instead releases chaff on both sides simultaneously.

See the [AN/ALE-40 system](../systems/defensive_systems/countermeasures.md#chaff-double-cd) for
details.

## IFF Mode 2 Options

Allows to preselect a Mode 2 code for the IFF system.

## Radio Options

The editor allows to preset all 18 COMM and 20 AUX channels of the UHF radio:

![UHF Presets](../img/me_radio_presets.jpg)

It is possible to set up a station in the Mission Editor for use in ADF navigation. To do this, a
unit, such as a ground station, needs to be placed on the map. This unit should then execute a
command to tune into the desired AM frequency (_Perform Command > Set Frequency_). Finally, the
unit must transmit a message continuously throughout the mission, which requires setting the
message to loop (_Perform Command > Transmit Message_).

![ADF Station](../img/me_adf.jpg)

Also, radio frequency parameters to read currently active UHF Radio frequencies are provided for
mission triggers:

| Parameter   | Description           |
| ----------- | --------------------- |
| `COMM_FREQ` | Comm frequency in MHz |
| `AUX_FREQ`  | Aux frequency in MHz  |

![UHF Parameters](../img/me_freq_triggers.jpg)

# 内话系统

使用内话系统来实现飞行员、WSO 和地勤人员之间通信，机组可在接通地面电源后，或在任意一个
[发动机主开关](../../cockpit/pilot/left_console/front_section.md#engine-master-switches) 拨至 ON 档
位时使用飞机电池来启用内话系统。

## 内话控制面板

![intercom_panel](../../img/wso_intercom_panel.jpg)

各驾驶舱中配有内话控制面板，面板包括一个音量控制旋钮、一个放大器选择旋钮和一个功能选择开关。

### 音量控制旋钮

内话音量控制旋钮用来设置特定驾驶舱的内话系统音量；顺时针转动增加音量。内话音量控制不会影响其它驾驶
舱音频信号。

### 功能选择开关

功能选择开关共有三个选项： COLD MIC、HOT MIC（启用自动内话工作）和 RADIO OVERRIDE。RADIO OVERRIDE
的操作类似于 HOT MIC，但也会降低除机组人员通信、ARBCS 的拉起提示音调和“百舌鸟”单音之外的所有音频音
量。如需实现和地勤通信，WSO 必须将开关设置为 HOT MIC。

### 放大器选择旋钮

三档位放大器选择旋钮决定使用哪个放大器通道： B/U 用于备份，NORM 用于正常功放，EMER 用于在当前驾驶舱
的两个放大器同时发生故障时执行并行工作。在 EMER 模式下，只能听到另一驾驶舱中播放的声音，所有声音的
音量控制均由另一驾驶舱管理。

## 内话传声开关

![pilot_intercom_mic_switch](../../img/pilot_mic_switch.jpg)

内话系统的传声开关位于两个驾驶舱的内侧油门握把的后部。使用内话时，除拉起提示音、失速警告和 ECM 外，
所有音频音量都会降低（与 RADIO OVERRIDE 相同）。

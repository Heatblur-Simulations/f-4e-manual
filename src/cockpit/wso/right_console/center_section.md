# 中部

右侧控制台的中部主要为用于武器投放的 [WRCS](../../../systems/weapon_systems/wrcs.md) 面板。更多详细
信息请参阅 [WRCS 章节](../../../systems/weapon_systems/wrcs.md)。

## 武器投放计算机套件 (WRCS) 面板

![wso_weapon_release_computer_set_panel](../../../img/wso_wrcs_panel.jpg)

### 目标距离旋钮

一对四位数滚筒窗口以及相应的机械旋钮。上部窗口为南北方向的基准距离（首位滚筒标记为 N/S），下部窗口
为东西方向的基准距离（首位滚筒标记为 E/W）。

滚筒以 100 英尺为增量显示基准距离，因此向东偏移 4000 英尺的距离将输入为 E0040。

滚筒以机械方式工作，因此可以通过调整最后一位滚筒来实现十位数调节；例如，在最后一位数滚筒中，调整到
2 和 3 值之间的空隙可以实现距离 250 英尺。

### 目标/IP 高度控制

三位数滚筒式窗口以及相应的机械旋钮，用于输入雷达起始点或实际目标自身的高度，基准距离以 100 英尺为增
量。如前所述，可以实现十位数距离调整。在正确确定好雷达起始点 (RIP) 或目视进入点 (VIP)后，WSO 就可以
更改这一数值来提高投放系统的精度。

### 阻力系数控制

根据投弹表中输入所用武器的阻力系数并用于预想的投放模式。

> 🚧 很快就会提供投弹表。不过，[轰炸计算器](../../../dcs/bombing_computer.md) > 提供了所有武器的有
> 效解算数据。

### 投放提前控制

用于设置相对 WRCS 目标点的 [WRCS](../../../systems/weapon_systems/wrcs.md) 投放信号发送提前时间，持
续时间为 0 至 999 毫秒。还可结合 [ARBCS/LABS](../../../systems/weapon_systems/arbcs.md) 编程投放定
时一起使用。

可用于分散对目标区域的轰炸，例如将齐投的 10 枚炸弹中第 3 枚投向目标。

可使用 [投弹计算器](../../../dcs/bombing_computer.md) 来计算投放提前控制。

### 投放距离控制

用于根据投弹表中武器的炸弹投放制度手动设置炸弹投放距离。

可在 [投弹计算器](../../../dcs/bombing_computer.md) 中计算投放距离。

### WRCS BIT 旋钮

六档位旋钮，用于对各种 [WRCS](../../../systems/weapon_systems/wrcs.md) 投放模式进行 BIT 检查。进行
BIT 检查时，需要选择需要测试的模式，按下旋钮 5 秒钟，然后按下光标控制面板上的冻结按钮，同时按住 BIT
旋钮以确认正常工作。

详见 [WRCS BIT](../../../procedures/bit_tests/wrcs.md)。

## 光标控制面板

![wso_cursor_control_panel](../../../img/wso_cursor_control_panel.jpg)

用于输入 [WRCS](../../../systems/weapon_systems/wrcs.md) 雷达轰炸模式目标。仅在选择了
[MAP-PPI](../../../systems/radar/operation.md#map-mode-ppi) 模式并在 [投放模式旋钮] 上选择了适用的
轰炸模式时生效。

### 冻结按钮

在使用 [WRCS](../../../systems/weapon_systems/wrcs.md) 进行空对地轰炸时，使用
[INS](../../../systems/nav_com/ins.md) 取得飞机的速度跟踪，并保持由纵向和横向距离光标门标定的目标位
置，从而确定雷达起始点。在按下重置按钮或选择其他投放模式之前，该按钮一直亮着。

### 目标插入按钮

将 [WRCS](../../../systems/weapon_systems/wrcs.md) 控制面板中输入的南北和东西偏置值插入
[WRCS](../../../systems/weapon_systems/wrcs.md) 计算机，执行相对雷达起始点（由纵向和横向距离光标标
定以及冻结按钮保持的当前跟踪的目标）的偏置。偏置包含移动纵向和横向距离光标来确定
[WRCS](../../../systems/weapon_systems/wrcs.md) 计算出的实际目标在雷达显示器中所处的位置。完成插入
后 [WRCS] 将发送目标转向信息至导航显示器。

[Pave Spike](../../../systems/weapon_systems/pave_spike/overview.md) 系统的记忆模式同样也用到目标插
入功能。

### 复位按钮

按下复位按钮后，[WRCS](../../../systems/weapon_systems/wrcs.md) 计算机内存中当前跟踪的地面目标位置
将被删除，纵向和横向距离光标将恢复到默认位置，速度跟踪系统值将复位归零。

### 纵向距离拨轮

用于确定雷达起始点相对飞机距离，雷达显示器上使用一个可扩展/收缩的半球形光标表示。半球形光标通过半球
形 PPI 投影显示目标的真实距离，使得飞机可以在偏置接近目标时探测到雷达起始点。如需最大化系统精度
，WSO 应在使用横向距离拨轮之前，首先使用纵向距离拨轮来确定好雷达起始点的近似距离，即应将光标置于雷
达显示器上预想雷达起始点回波的下方，然后使用横向距离拨轮转回到起始点回波。

### 横向距离拨轮

用于在 PPI 模式下确定雷达显示器上雷达起始点的航向，以垂线的形式显示。按下冻结按钮时，纵向距离和横向
距离光标的交点即为雷达起始点。

## 核武许可开关

![wso_nuclear_stores_consent_switch](../../../img/wso_nuclear_consent_switch.jpg)

用来解除核武保险。在 SAFE 档位，将禁止投放。REL 允许未解除保险的核武挂载，而 REL/ARM 档位将允许投放
解除保险的核武。

## Skyspot 模式

![Skyspot Mode](../../../img/wso_skyspot_switch.jpg)

这个位于右侧控制台的右侧靠外的开关可以选择用于对地轰炸的 Combat Skyspot 系统的模式。

在这一批次的 F-4E 中从未安装该系统。

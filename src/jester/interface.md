# 界面

Jester 的用户界面允许在飞行中轻松通信以及访问各种设置，即使在高压环境下也很方便。

## 转盘

![Wheel UI](../img/jester_wheel_ui.jpg)

Jester 交互的主界面由一个带有数级子菜单的环形菜单组成。

确认一个选项，比如突出显示的 _UHF 无线电台_ ，点击后将进入子菜单，将访问更多相关选项。

在某些情况下，选项也会在外圈菜单上显示。

![Wheel Outer Menu](../img/jester_wheel_submenu.jpg)

在适用的菜单中，UI 还支持直接文本输入，例如输入新航路点的坐标。玩家在这种情况下可以使用完整的键盘控
制。

> 💡 当聚焦在文本段落时，DCS 的设备输入将被禁用。

![Wheel Text-Entry](../img/jester_wheel_text_entry.jpg)

如需确认并发送数据，再次选择选项（示例中为 LAT/LONG）即可。

### 转盘控制按键

**短按** <kbd>A</kbd> 即可开关 Jester 转盘。

玩家可以通过鼠标左键点击选项来访问 UI 菜单或点击圆圈中心区域来返回上级菜单。

玩家也可以将选项直接绑定到键盘或其它输入设备上。访问选项的默认热键是 <kbd>LCTRL</kbd> +
<kbd>1</kbd> 到 <kbd>LCTRL</kbd> + <kbd>8</kbd> 。

位于外圈的选项可通过以下按键选择：

- <kbd>Q</kbd> - 逆时针转动光标 - <kbd>W</kbd> - 确认选择光标下方的选项 - <kbd>E</kbd> - 顺时针转动
  光标

此外，玩家还可以将光标分配给迷你摇杆的轴来自由移动，或者通过 **长按** <kbd>A</kbd> 键然后移动视角来
用头部跟踪选择。松开 <kbd>A</kbd> 键将确认光标下的选项。

![Head Tracking Cursor](../img/jester_wheel_head_tracking.jpg)

> 💡 如有需要，大多数动作可以单独进行绑定。详见
> [9.1. 控制设备](../dcs/controls.md#jester--chief-commands)。

## 对话

Jester 可以主动向飞行员提问。在这种情况下，一个带有操作选项的弹出菜单将显示在屏幕底部。

对话中的大多数操作是有时限的，如果不即使进行交互，它们将会过期，在这种情况下，Jester 要么忽略这个问
题或自选一个合理的回应。

同时最多出现 3 个操作选项，飞行员可以选择要互动的问题。

![Dialog Selection](../img/jester_dialog_ui.jpg)

选择好问题后，将会出现多个回答选项。选择某些选项可能将引出后续的问题。

![Dialog Selection](../img/jester_dialog_qa.jpg)

### 对话控制按键

玩家可以通过点击鼠标左键来访问对话 UI。

玩家还可以使用键盘 <kbd>Q</kbd>、<kbd>W</kbd> 或 <kbd>E</kbd> 来进行问题对话互动。

回复选项也可以直接绑定到键盘或其它输入设备上。访问选项的默认热键是 <kbd>LCTRL</kbd> + <kbd>1</kbd>
到 <kbd>LCTRL</kbd> + <kbd>4</kbd>。

此外，玩家还可以将光标分配给迷你摇杆的轴来自由移动，或者通过 **长按** <kbd>A</kbd> 键然后移动视角来
用头部跟踪选择。松开 <kbd>A</kbd> 键将确认光标下的选项。

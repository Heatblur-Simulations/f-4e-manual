# 磁带播放机

虽然在现实世界中的鬼怪没有磁带播放机，但我们为 DCS 鬼怪配备了播放机来让玩家可以在飞行中聆听美妙的音
乐！

因此， **机载录像机** 即可作为录像机以及插入特殊音乐磁带，作为音乐播放器使用。

![Music Cassette](../img/tape_player_cassette.jpg)

> 💡 玩家可以在 `<DCS 安装目录>\Mods\aircraft\F-4E\Music\Of Ghosts and Thunder (Meteor F-4 OST)` 文
> 件夹中找到高音质歌曲。

## 控制开关/按钮

AVTR 和大多数控制开关/按钮位于飞行员弹射座椅的右侧，详见
[2.1.10.3 AVTR System 系统](../cockpit/pilot/right_console/aft_section.md#airborne-video-tape-recorder)。
状态灯及其模式开关位于 WSO 驾驶舱主面板中，见
[2.2.2 AVTR 控制](../cockpit/wso/left_sub_panel.md#avtr-control)。

> 💡 玩家可在 UI 中 _"Systems > AVTR Recorder"_ 要求 Jester 设置模式。

如需更换盒式录音带，首先要将模式设置到 OFF 关闭 AVTR。接着，按下 EJECT 按钮来打开打开磁带仓。

取出磁带后，点击磁带即可更换。左键单击磁带仓，将磁带插回到仓内。

装入音乐磁带后，WSO 将模式开关设置到 RECORD（录制）即可播放歌曲。飞行员左膝旁的 RECORDER ON 灯显示
当前的状态，转动指示灯可调节音量。

AVTR 显示屏上的剩余时间显示当前播放的音乐，例如 `M01` 表示第一首曲目。使用倒带按钮或点击 WSO 驾驶舱
内的 RCD/EOT 灯（录制/暂停录制按钮）均可跳过曲目。

![Track Display](../img/tape_player_track_display.jpg)

如果磁带已播放完所有歌曲，EOT 灯会亮起，明确指令下一曲将重新开始播放第一首曲目。

## 定制音乐

磁带播放机会自动提取位于

`<DCS 安装目录>\Mods\aircraft\F-4E\Sounds\TapePlayer`

中的歌曲并按字母顺序播放曲目。

请注意，在 DCS 中，每首歌都必须在以下文件夹中将其设置为 SDEF 文件

`<DCS 安装目录>\Mods\aircraft\F-4E\Sounds\sdef\TapePlayer`

如需添加自己的歌曲，只需将其放入上述文件夹并创建对应的 SDEF 文件即可。请确保重新启动 DCS，因为声音
将在游戏启动时加载。

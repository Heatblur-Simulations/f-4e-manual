# 公用系统

## 供氧系统

![pilot_oxygen_regulator](../img/pilot_oxygen_control_panel.jpg)

机组吸氧需求将由一个 10 升液氧瓶提供。调节面板位于每个驾驶舱的左侧——飞行员驾驶舱的左侧控制台，WSO
驾驶舱的左侧子面板。在各驾驶舱中，使用调节面板上的供氧杆来开始供氧。机组进行呼吸时，指示器将黑白交
替显示来指示氧气流量（白色表示吸入）。通过两个驾驶舱内的氧气压力和氧气量表来确认供应压力和剩余体积
。在每个驾驶舱中使用调节面板上的供氧杆开启供氧气流。通过流量指示器确认氧气流量，每次呼吸流量指示器
会从黑变白（白色表示吸入）。通过两个驾驶舱内的氧气压力和氧气储量表来确认供氧压力和剩余储量。

下图提供了氧气持续时间的详细图表：

![manual_oxygen_chart](../img/manual_oxygen_chart.jpg)

## 座舱盖

![ext_canopy_open](../img/ext_f4_canopies.jpg)

座舱盖由 [气动系统](pneumatics.md) 进行作动。座舱盖由两个驾驶舱单独进行控制；每个驾驶舱的左侧均设有
正常开关手柄及其旁边的黄黑相间的应急抛弃手柄。出在对向处的是手动解锁杆，可在气动系统发生故障时用于
解锁座舱盖。

各个驾驶舱均采用充气式密封件进行座舱盖密封，以实现座舱增压。使用 [引气系统](bleed_air.md) 打开和关
闭座舱盖时，座舱盖密封件会自动充气和放气。

![pilot_canopy_handles](../img/pilot_canopy_handle.jpg)

## 空中加油系统

![f4_ext_air_to_air_refuel](../img/ext_air_to_air_refuel.jpg)

对于空对空加油，F-4E 使用与美国空军硬管兼容的受油口系统。借助该系统，燃油能以高达 3900 磅/分钟的速
度传输到“鬼怪”。加入的燃油首先进入机身 2 油箱，然后通过其它机身油箱、机翼油箱以及副油箱（如果已挂载
并选择使用）进行燃油平衡。

> 💡 油箱加满大约需要一到三分钟。

![pilot_fuel_panel](../img/pilot_fuel_control_panel.jpg)

### 空中加油开关

将空中加油开关拨至 EXTEND 来准备进行空中受油；开关拨至 EXTEND 后受油口将伸出、受油器照明灯亮起、油
箱减压、开启输送泵重新调配接收到的燃油来保持重心，并激活空中受油 READY 灯。RETRACT 档位用于收起受油
口，恢复油箱增压和正常功能。

如果在 AAR 过程中，硬管断开连接且 DISENGAGED 指示灯亮起，则必须将此开关拨到 RETRACT 档位，然后再拨
回到 EXTEND 档位来复位系统并允许硬管再次连接。

### 加油选择开关

两档加油选择开关提供两种加油模式选项：机身油箱和机翼油箱（INT ONLY）或所有油箱（ALL），用来在受油时
向副油箱加油。

### 就绪灯

![pilot_aar_lights](../img/pilot_aar_lights.jpg)

当受油口伸出并且油箱减压后，READY 灯亮起来告知飞行员可以开始受油。当硬管连接到受油口，或者空中加油
开关拨至 RETRACT 指令受油口收起时，灯将熄灭。

### 断开灯

如果硬管与受油口分离，DISENGAGED 灯将会亮起。如果出现 DISENGAGED 信号，系统必须复位才能继续加油。

### 空中受油断开按钮

![pilot_aar_release_button](../img/pilot_stick_aar_button.jpg)

在前座驾驶杆中设有空中受油断开按钮。主要用于加油机操作员无法远程断开硬管连接、根据飞行条件或在应急
情况下断开受油口连接。按下按钮会断开硬管连接，并使 DISENGAGED 灯亮起。

### 受油器断路器

![wso_air_refuel_recpt_cb](../img/wso_cb_air_refuel.jpg)

如果空中加油期间出现硬管断连情况，可通过循环空中加油开关或使用 AIR REFUEL RECPT 断路器（位于 WSO 驾
驶舱右侧 2 号断路器面板，第四列最上方）来复位系统。

### 副油箱满油灯

L.H. FULL、CTR. FULL 和 R.H. FULL 分别对应左手，中，右手三个满油指示灯，用来确认副油箱已满。直到受
油口收起前灯将一直亮起。

## 风挡除雨

![pilot_rain_removal](../img/pilot_rain_removal_switch.jpg)

如需除雨，将除雨开关拨至 ON 档位，空调系统将引气至风挡下方的外部通风口，将雨水分解成较小的水滴并将
其从风挡上吹走。该系统会使风挡温度升高，并可能导致 WINDSHIELD TEMP HI 灯和 MASTER CAUTION 灯一起亮
起。此时已接近光学畸变温度，必须立刻将除雨开关拨至 OFF 档位。

由于风挡在高马赫下会摩擦发热，WINDSHIELD TEMP HI 灯也会在除雨系统关闭时亮起；此时可忽略该警告。

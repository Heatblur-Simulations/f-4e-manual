# F-4E 中文手册

<!-- markdown-link-check-disable-next-line -->

[![license](https://img.shields.io/badge/license-CC_BY--NC--ND_4.0-blue)](https://github.com/Heatblur-Simulations/f-4e-manual/blob/master/LICENSE)

![Phantom from back](src/img/phantom_flying_back.jpg)

F-4E “鬼怪” by Heatblur Simulations 中文手册使用
[mdBook](https://rust-lang.github.io/mdBook/) 进行编写，, 编写语言为
**Markdown** (`.md`)。

<!-- markdown-link-check-disable -->

手册自动导出为 HTML, 网址为 <https://f4.manuals.heatblur.se/>. PDF 版本可在
[发布部分](https://github.com/Heatblur-Simulations/f-4e-manual/releases) 下载。
注：中文版未映射网页，可下载到本地创建网页离线版或在网盘下载
[离线版手册](https://cloud.189.cn/web/share?code=M7JFFr6biuau) 错误和手册报告联
系 [作者](https://space.bilibili.com/12508032) ，感谢玩家们的喜爱和支持。

<!-- markdown-link-check-enable -->

## Setup

Markdown is supported widely by most IDEs and text editors. We recommend
[VSC](https://code.visualstudio.com/) and any JetBrains IDE, such as
[Fleet](https://www.jetbrains.com/fleet/),
[IntelliJ](https://www.jetbrains.com/idea/) or
[CLion](https://www.jetbrains.com/clion/).

You can also simply press `.` (dot) while on GitHub and it will open an instance
of Visual Studio Code right in your browser, allowing you to contribute directly
and conveniently.

<!-- markdown-link-check-disable -->

Please read
[CONTRIBUTING.md](https://github.com/Heatblur-Simulations/f-4e-manual/blob/master/CONTRIBUTING.md)
before your first contribution.

<!-- markdown-link-check-enable -->

### Building locally

To build the website locally, you have to install **mdBook**, see
[here](https://rust-lang.github.io/mdBook/guide/installation.html).

<!-- markdown-link-check-disable -->

Then run the command `mdbook build` from this folder; the website can be found
in the folder `book/html`. Use `mdbook serve` to make the contents available in
your browser at [localhost:3000](http://localhost:3000/), it automatically
updates whenever the contents change.

<!-- markdown-link-check-enable -->

To build the PDF locally, use `cargo install mdbook-pdf` first. Then, when
running `mdbook build`, the PDF will be created in `book/pdf`.

## GH Pages

The project is automatically configured via a CI/CD to build and publish any
change to `master` to a GH-Pages branch called `html`. GitHub will automatically
publish the website on <https://heatblur-simulations.github.io/f-4e-manual/>,
linked to <https://f4.manuals.heatblur.se/> via CNAME.

## PDF Deploy

<!-- markdown-link-check-disable -->

PDF versions are automatically build and published at
<https://github.com/Heatblur-Simulations/f-4e-manual/releases> via CI/CD
whenever a tag is pushed to git.

<!-- markdown-link-check-enable -->

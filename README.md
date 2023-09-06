# F-4E Manual

![Spook - My Other Ride Is Your Mom](https://i.imgur.com/KBOIocl.png)

Manual of the F-4E Phantom by Heatblur Simulations.

This is a [Sphinx](https://www.sphinx-doc.org/en/master/) project, content is written in the markup language **reStructuredText** (`.rst`).

The manual is automatically exported as HTML version, hosted at: https://heatblur-simulations.github.io/f-4e-manual/.

## Building locally

Pre-requisites are:

* [Install Sphinx](https://www.sphinx-doc.org/en/master/usage/installation.html), i.e. `choco install sphinx` (using [Chocolatey](https://chocolatey.org/install)) or `pip install -U sphinx` - at least version `6.x`
* Install the [RTD theme](https://sphinx-rtd-theme.readthedocs.io/en/stable/installing.html), i.e. `pip install sphinx_rtd_theme`

Go into `src` and run `make.bat html` or `make html` (or supply an alternative target). A folder `target` will be generated at the root of the project.

The website can now be found in `target/html/index.html`.

## Codespaces

Alternatively, GitHub Codespaces offers a convenient way to collaborate. It comes with a setup that has all requirements (such as Sphinx, Python and more) already pre-installed, allowing editing the manual straight away **in the browser**, without first installing anything locally.

To get started, create a Codespace on the main page of the repository:

![create codespace](https://i.imgur.com/3Ktij8Z.png)

The first-time setup might take a minute or two, subsequent launches are instant. GitHub will now open a new browser window with an instance of Visual-Studio-Code running on their cloud.
The environment is already fully setup and has useful VSC extensions installed (such as syntax highlighting and preview for `.rst` and `.html`). You can edit the manual straight away, generate it with `make html` and view the resulting HTML files from `target/html`.

Once done, commit your changes using `git add *`, `git commit`, `git push`.

## GH Pages

The project is automatically configured via a CI/CD to build and publish any change to `master` to a GH-Pages branch called `html`. GitHub will automatically publish the website on https://heatblur-simulations.github.io/f-4e-manual/.

## Push To Code Repo

The CI/CD will automatically build and copy the HTML version of the manual to the main code repository https://github.com/Heatblur-Simulations/f-4e into the folder `ext/manual`, on any change to `master`.

# F-4E Manual

![Spook - My Other Ride Is Your Mom](https://i.imgur.com/KBOIocl.png)

Manual of the F-4E Phantom by Heatblur Simulations.

This is a [Sphinx](https://www.sphinx-doc.org/en/master/) project, content is written in the markup language **reStructuredText** (`.rst`).

The manual is automatically exported as HTML version, hosted at: **TODO**. <!--TODO Insert link-->

## Building locally

Pre-requisites are:

* [Install Sphinx](https://www.sphinx-doc.org/en/master/usage/installation.html), i.e. `choco install sphinx` (using [Chocolatey](https://chocolatey.org/install)) or `pip install -U sphinx` - at least version `6.x`
* Install the [RTD theme](https://sphinx-rtd-theme.readthedocs.io/en/stable/installing.html), i.e. `pip install sphinx_rtd_theme`

Go into `src` and run `make.bat html` or `make html` (or supply an alternative target). A folder `target` will be generated at the root of the project.

The website can now be found in `target/html/index.html`.

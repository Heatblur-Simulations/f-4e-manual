# Exportation d'écran

DCS propose d'exporter et d'organiser les écrans de jeu sur des configurations multi-moniteurs. Pour
exemple affichant le contenu de l'écran DSCG sur un deuxième moniteur.

![Configuration avec RWR exporté](../img/screen_export_f4_rwr.jpg) (_Configuration avec RWR
exporté vers un petit moniteur_)

Cela permet de réaliser de superbes configurations, en particulier lorsque l'on possède des
moniteurs supplémentaires plus petits ; et est particulièrement utile pour les constructeurs
SimPit.

![Exemple SimPit](../img/screen_export_simpit.jpg)

L'interface DCS pour cela attend des utilisateurs qu'ils définissent ce qu'on appelle une
**Viewport**.
Le F-4E prend actuellement en charge cette fonctionnalité pour les écrans suivants :

| Écran | Nom du Viewport |
| ------------ | ------------------- |
| DSCG (Pilote) | `F4E_Dscg_Pilot` |
| DSCG (WSO) | `F4E_Dscg_Wso` |
| HUD | `F4E_HeadUpDisplay` |
| RWR | `F4E_Rwr` |

> 💡 L'écran DSCG du cockpit dans lequel le joueur n'est actuellement pas assis
> ne restituera aucun contenu.
>

> Pour fonctionner, les écrans DSCG nécessitent actuellement d'exporter également le
> Viewport `F4E_Dscg_Tv`, une largeur et une hauteur de `1` pixel suffisent cependant.

> 🚧 Le support d'autres écrans est en cours de développement :
>

> - `F4E_Cameras_AvtrTimeIndicatorPilot`
> - `F4E_Cameras_AvtrTimeIndicatorWso`
> - `F4E_EoTgtDesignatorSystem_BitDisplay`
> - `F4E_EoTgtDesignatorSystem_RangeIndicator`
> - `F4E_UhfRadio_FrequencyChannelIndicator`
>

> Selon les écrans exportés, cela peut actuellement provoquer un bug avec des textures qui
> saignent au centre de l'écran (autour du HUD).

Des programmes tels que [Helios](https://github.com/HeliosVirtualCockpit/Helios/wiki) sont
également particulièrement intéressants ; ils simplifient tout le processus et permettent aux
utilisateurs de créer facilement des configurations même complexes.

## Viewport

Afin d'utiliser cette fonctionnalité, les joueurs peuvent définir un fichier spécial dans leur
Dossier Jeux enregistrés `MonitorSetup` pour DCS, par exemple :

> `C:\Users\John Doe\Saved Games\DCS\Config\MonitorSetup\`

Un tel fichier s'appellerait par exemple `MySetup.lua` et ressemblerait à ceci :

```lua
_ = function(p)
  return p
end

name = _("MySetup")
Description = "This is my setup"

Viewports = {
  Center = {
    x = 0,
    y = 0,
    width = 3840,
    height = 2160,
    viewDx = 0,
    viewDy = 0,
    aspect = 3840 / 2160
  }
}

GU_MAIN_VIEWPORT = {
  x = 0,
  y = 0,
  width = 3840,
  height = 2160
}

UIMainView = {
  x = 0,
  y = 0,
  width = 3840,
  height = 2160
}

function reconfigure_for_unit(unit_type)
  if unit_type == "F-14B" or unit_type == "F-14A-135-GR" or unit_type == "F-14A-135-GR-Early" then
    F14_VDI = {
      x = 1016,
      y = 1450,
      width = 525,
      height = 525
    }

    F14_HSD = {
      x = 1016,
      y = 1985,
      width = 525,
      height = 525
    }
  elseif unit_type == "M-2000C" then
    RIGHT_MFCD = {
      x = 879,
      y = 1580,
      width = 800,
      height = 800
    }
  elseif unit_type == "F-4E-45MC" then
    F4E_Dscg_Pilot = {
      x = 3840,
      y = 2160 - 1527,
      width = 300,
      height = 300
    }
    F4E_Dscg_Wso = {
      x = 3840 + 300,
      y = 2160 - 1527,
      width = 300,
      height = 300
    }
    F4E_HeadUpDisplay = {
      x = 3840 + 300 + 300,
      y = 2160 - 1527,
      width = 300,
      height = 300
    }
    F4E_Rwr = {
      x = 3840 + 300 + 300 + 300,
      y = 2160 - 1527,
      width = 300,
      height = 300
    }

    F4E_Dscg_Tv = {
      x = 3840,
      y = 2160 - 1527 + 300,
      width = 1,
      height = 1
    }
  else
    LEFT_MFCD = {
      x = 3840,
      y = 2160 - 1527,
      width = 700,
      height = 700
    }

    RIGHT_MFCD = {
      x = 3840 + 700,
      y = 2160 - 1527,
      width = 700,
      height = 700
    }
  end
end
```

Une fois créée, cette configuration apparaîtra désormais dans DCS pour être sélectionnée dans les
paramètres graphiques :

![DCS Paramètres](../img/screen_export_dcs_settings.jpg)

Le fonctionnement de la configuration consiste à d'abord additionner la résolution de tous les
moniteurs que vous souhaitez utiliser ensemble. Ce sera la résolution cible à laquelle DCS sera
rendu. L'exemple utilise deux moniteurs, l'un avec une résolution de `3840x2160` et l'autre de
`2715x1527` ; combinés, cela donne une résolution de moniteur virtuel de `6555x2160`.

![Configuration multi-moniteurs](../img/screen_export_multi_monitor_resolutions.jpg)

La disposition exacte est définie dans les paramètres d'affichage de Windows :

![Paramètres Windows](../img/screen_export_windows_monitor.jpg)

Dans le fichier de configuration, il faut maintenant définir plusieurs Viewports pour DCS. Cela
indique au jeu où, sur le moniteur virtuel, restituer quelle scène. Le format se présente comme
suit :

```lua
NAME_OF_THE_VIEWPORT = {
  x = ..., -- x-coordinate of top left corner, in pixels
  y = ..., -- y-coordinate of top left corner, in pixels
  width = ..., -- width to use for the scene, in pixels
  height = ... -- height to use for the scene, in pixels
}
```

La scène principale de DCS est définie et placée sur le moniteur virtuel via les
Viewports suivants :

```lua
Viewports = {
  Center = {
    x = 0,
    y = 0,
    width = 3840,
    height = 2160,
    viewDx = 0,
    viewDy = 0,
    aspect = 3840 / 2160
  }
}

GU_MAIN_VIEWPORT = {
  x = 0,
  y = 0,
  width = 3840,
  height = 2160
}

UIMainView = {
  x = 0,
  y = 0,
  width = 3840,
  height = 2160
}
```

Dans l'exemple de configuration, cela restituera la scène principale du jeu sur le
moniteur `3840x2160` disposé à gauche.

La section suivante du fichier vous permet de définir des Viewports personnalisés par type
d'avion :

```lua
function reconfigure_for_unit(unit_type)
  if unit_type == "F-14B" or unit_type == "F-14A-135-GR" or unit_type == "F-14A-135-GR-Early" then
    ...
  elseif unit_type == "M-2000C" then
    ...
  elseif unit_type == "F-4E-45MC" then
    ...
  else
    ... -- any other aircraft
  end
end
```

Dans cette construction, on peut désormais déclarer des Viewports personnalisés, par exemple

```lua
F4E_Dscg_Pilot = {
  x = 3840,
  y = 2160 - 1527,
  width = 300,
  height = 300
}
```

placera l'écran DSCG sur le deuxième moniteur comme suit :

![Placement DSCG](../img/screen_export_multi_dscg_example.jpg)

## Modding

Les Viewports, une fois définis par les utilisateurs dans leurs configurations de moniteurs, sont
ensuite récupérés par le code des modules dans les _Indicator-lua-files_ respectifs, qui peuvent
être trouvés par exemple dans :

> `C:\Programs\DCS\Mods\aircraft\F-4E\Cockpit\Scripts`

A titre d'exemple, le HUD déclare à la fin de
`Scripts\HeadUpDisplay\Indicator\init.lua` les deux lignes suivantes

```lua
dofile(LockOn_Options.common_script_path .. "ViewportHandling.lua")
try_find_assigned_viewport("F4E_HeadUpDisplay")
```

qui essaiera de voir si l'utilisateur a créé un Viewport appelé `F4E_HeadUpDisplay`
et si c'est le cas, y restitue la scène.

Les moddeurs peuvent suivre cette approche pour créer facilement de nouveaux Viewports dans les
modules qui ne les prennent pas encore officiellement en charge.

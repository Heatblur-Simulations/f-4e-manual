# API Lua

Cela donne un aperçu rapide de Lua, dans lequel Jester est principalement codé ; et
explique l'API Jester elle-même, ainsi que comment créer des mods personnalisés.

## Commencez avec Lua

Liens utiles :

- Doc Lua : <https://www.lua.org/docs.html>

### Tableaux

Lua en soi est un langage assez simple avec peu de fonctionnalités. Il
tourne principalement autour de l’utilisation de tableaux. Les tableaux peuvent être comparés à des
tableaux,
des listes et des dictionnaires, ou des cartes.

```lua
-- dictionary
local person = {
  name = "John",
  age = 20,
}

-- array/list
local fruits = { "Orange", "Apple", "Lemon" }
```

Les tableaux se désintègrent également implicitement en dictionnaires avec des clés ascendantes `1`,
`2`, etc.

L'accès peut se faire soit dans un style de recherche `person["age"] = 21`, soit dans des champs
similaires
`person.age = 21`.

En Lua, les indices commencent **à compter à 1 :**

```lua
print(fruits[1]) -- Orange
```

La longueur d'une table est accessible en utilisant `#` :

```lua
-- appending to a table
fruits[#fruits + 1] = "Cherry"
```

Tout ce qui n'est pas explicitement défini reçoit la valeur `nil`.

### Exemple de syntaxe

```lua
function ageCheck(name, age)
  if age < 18 then
    print("Sorry", name)
  else
    print("Okay", name)
  end
end
```

### Classes

Lua lui-même ne propose pas de classes. Cependant, nous avons créé un cadre pour ajouter
structures de type classe pour Lua :

```lua
local Class = require('base.Class')

local Person = Class()
Person.name = nil -- fields
Person.age = nil

function Person:Constructor(name, age)
  self.name = name
  self.age = age
end

Person:Seal() -- Prevent adding/removing more values/functions to it
```

Le framework prend également en charge l'héritage :

```lua
local Class = require('base.Class')
local Behavior = require('base.Behavior')

local AssistAAR = Class(Behavior) -- inherits from Behavior
```

## Débogage

Malheureusement, nous n'avons aucune configuration de débogueur Lua. Il faut se rabattre sur un
débogage rudimentaire à base d'affichages (`print`).

Pour y parvenir, Jester propose une interface utilisateur de console de jeu
(<kbd>RCTRL</kbd>+<kbd>L</kbd>).
Cette console affiche toute chaîne enregistrée via `Log(...)`.

De plus, il propose une invite de console permettant l'exécution de code Lua.

![jester_console_hello_world](../../../img/jester_console_hello_world.jpg)

L'invite peut également être utilisée pour inspecter le code en cours d'exécution, par exemple en
saisissant
une commande telle que

```lua
Log(GetJester().behaviors[require('radar.MoveRadarAntenna')].current_antenna_degrees.value)
```

![jester_console_inspect](../../../img/jester_console_inspect.jpg)

> 🚧 HB UI ne prend pas encore en charge le clavier complet, par exemple `().[]:"'` ne peut pas être saisi.
> Il est donc recommandé de préparer l'invite dans un éditeur de texte externe et simplement
> copiez-collez-le dans l'interface utilisateur à la place.

Nous proposons également un terrain de jeu Lua en `WizardJester.lua`, qui est toujours exécuté
directement au démarrage.

Il est également possible d'éditer des fichiers Lua pendant l'exécution de DCS, sans redémarrer le
jeu. Modifiez simplement un fichier LUA puis rechargez la mission DCS avec
<kbd>CTRL</kbd>+<kbd>R</kbd> et le nouveau fichier Lua sera effectif.

## Mods utilisateur

### Ajouter du contenu

La logique Jester personnalisée est placée dans le dossier **Jeux sauvegardés**, dans le
sous-dossier `jester\mods`.
Le chemin complet pourrait par exemple ressembler à :

`C:\Users\John Doe\Saved Games\DCS_F4E\jester\mods`

Tout fichier Lua placé dans ce dossier sera rendu disponible et pourra être chargé
via par exemple `require 'MyFile'` dans Lua.

Tout fichier Lua placé dans le sous-dossier `jester\mods\init` ne sera pas seulement rendu
disponible,
mais également être exécuté lors de son apparition dans l'avion. Ce mécanisme permet d'annoncer
votre contenu personnalisé et de l'ajouter à Jester via un registre de rappel appelé `mod_init` :

```lua
-- Place this in a LUA file in jester\mods\init
mod_init[#mod_init+1] = function(jester)
  -- Executed at spawn, use 'jester' to register your logic
  Log("Hello World!")
end
```

> 💡 Lorsque le dossier `jester\mods` n'existe pas, il sera automatiquement créé
> dès la première apparition de l'avion. De plus, le dossier sera pré-rempli avec
> un simple `ExampleMod`.

### Remplacer le contenu

Le comportement existant de Jester peut être remplacé en ajoutant simplement un fichier Lua sous
le même nom que le fichier d'origine que vous souhaitez remplacer dans le dossier `jester\mods`.

Par exemple, pour remplacer `MoveRadarAntenna.lua`
(par exemple `G:\DCS World OpenBeta\Mods\aircraft\F-4E\Jester\radar\MoveRadarAntenna.lua`) avec une
logique personnalisée,
placez également un fichier appelé `MoveRadarAntenna.lua` dans le dossier modding
(par exemple `C:\Users\John Doe\Saved Games\DCS_F4E\jester\mods\radar\MoveRadarAntenna.lua`).

Désormais, lorsque la logique existante tente de charger ce fichier en utilisant `require
'radar.MoveRadarAntenna'`,
votre fichier personnalisé sera priorisé et chargé à la place. Pour retrouver le comportement
d'origine,
supprimez simplement votre fichier personnalisé.

> 🟡 ATTENTION : Il n'est pas possible de remplacer les fichiers des dossiers suivants :
>
> - base
> - memory
> - senses
> - stats
>
> Si vous tentez de le faire, un message d'avertissement s'affiche et tous les mods Jester sont désactivés.

## Dépôt de mods Jester

<!-- markdown-link-check-disable -->
Pour partager des mods avec d'autres ou proposer l'intégration de mods dans le jeu de base, le
contenu peut être
téléchargé dans le référentiel public
[Heatblur-Simulations/jester-modding](https://github.com/Heatblur-Simulations/jester-modding).
<!-- markdown-link-check-enable -->

Ce référentiel contient également les fichiers sources de Jester pour aider les moddeurs à apprendre
l'Api,
mais aussi pour permettre la modification de la logique existante.

## API Jester

La logique des Jesters est divisée en 6 couches d'abstraction :

- Intention (_WIP_)
- Plan (_WIP_)
- Situation
- Behavior
- Task
- Action

La logique d'origine se trouve dans le dossier Mod DCS, par exemple :

`G:\DCS World OpenBeta\Mods\aircraft\F-4E\Jester`

### Exemple

À titre d'exemple qui touche la plupart des couches, nous souhaitons créer une fonctionnalité qui
permet à Jester de signaler la vitesse actuelle toutes les quelques secondes pendant le vol.

Nous commençons donc par une situation. Une situation a besoin d'une **Condition**
d'activation et de désactivation :

```lua
-- Airborne.lua
local Class = require 'base.Class'
local Condition = require 'base.Condition'

local Airborne = {}
Airborne.True = Class(Condition)
Airborne.False = Class(Condition)

function IsAirborne()
  -- details on observations later
  return GetJester().awareness:GetObservation("airborne") or false
end

function Airborne.True:Check()
  return IsAirborne() -- activation condition
end

function Airborne.False:Check()
  return not IsAirborne() -- deactivation condition
end

Airborne.True:Seal()
Airborne.False:Seal()
return Airborne
```

Les conditions d’activation et de désactivation ne doivent pas nécessairement être les mêmes.

Maintenant, nous pouvons utiliser cette condition dans notre situation `Flight` et ajouter notre comportement souhaité :

```lua
-- Flight.lua
local Class = require 'base.Class'
local Situation = require 'base.Situation'
local Airborne = require 'conditions.Airborne'
local ReportSpeed = require 'behaviors.ReportSpeed'
-- behavior will be defined in the next step

local Flight = Class(Situation)

-- it simply expects a class with a :Check() method
Flight:AddActivationConditions(Airborne.True:new())
Flight:AddDeactivationConditions(Airborne.False:new())

function Flight:OnActivation()
  self:AddBehavior(ReportSpeed) -- start our behavior
end

function Flight:OnDeactivation()
  self:RemoveBehavior(ReportSpeed) -- stop our behavior
end

Flight:Seal()
return Flight
```

La situation doit également être enregistrée dans `F-4E_WSO.lua` (_WIP_) :

```lua
-- in F-4E_WSO.lua
...
function CreateF4E_WSOJester()
  ...
  wso::AddSituations(Flight:new())
  ...
end
```

Maintenant, nous pouvons définir notre comportement :

```lua
-- ReportSpeed.lua
local Class = require('base.Class')
local Behavior = require('base.Behavior')
local SaySpeed = require('tasks.common.SaySpeed')
-- Task will be defined in the next step

local ReportSpeed = Class(Behavior)

function ReportSpeed:Constructor()
  Behavior.Constructor(self)
end

function ReportSpeed:Tick()
  -- this is called periodically
  local task = SaySpeed:new(...) -- access to speed explained later
  GetJester():AddTask(task)
end

ReportSpeed:Seal()
return ReportSpeed
```

Maintenant, cela permettrait à Jester de dire quelque chose à chaque tick, ce qui est un peu trop
verbeux. Pour améliorer cela, le système Urge a été créé. Nous pouvons envelopper notre tâche dans un
`Urge` et il ne sera appelé qu'à un intervalle défini (qui est automatiquement
appliqué une certaine variance en fonction de la fixation des Jesters et du niveau de stress) :

```lua
-- ReportSpeed.lua
local Class = require('base.Class')
local Behavior = require('base.Behavior')
local Urge = require('base.Urge') -- added
local StressReaction = require('base.StressReaction') -- added
local SaySpeed = require('tasks.common.SaySpeed')

local ReportSpeed = Class(Behavior)

function ReportSpeed:Constructor()
  Behavior.Constructor(self)

  -- logic of the behavior
  local say_speed = function ()
    -- very simple in this case,
    -- but could also trigger multiple tasks based on conditions, if desired
    local task = SaySpeed:new(...)
    GetJester():AddTask(task)
    return {task}
  end

  -- define the urge
  self.urge = Urge:new({
    time_to_release = s(10), -- baseline interval (10s now)
    on_release_function = say_speed, -- what to execute
    stress_reaction = StressReaction.ignorance, -- how important is this to Jester
  })
  self.urge:Restart() -- start it
end

function ReportSpeed:Tick()
  -- we could also modify the urge now, if desired
  -- for example increasing the stress level
  self.urge:Tick() -- tick it
end

ReportSpeed:Seal()
return ReportSpeed
```

L'étape suivante consiste à créer la tâche réelle qui se chargera de signaler les
vitesse donnée :

```lua
-- SaySpeed.lua
local Class = require('base.Class')
local Task = require('base.Task')
local SayAction = require('actions.SayAction')

local SaySpeed = Class(Task)

function SaySpeed:Constructor(speed)
  Task.Constructor(self)

  local on_activation = function()
    if speed < kt(500) then
      -- see PhrasesList.txt for all supported voice lines
      self:AddAction(SayAction('awareness/wereslow'))
    else
      self:AddAction(SayAction('awareness/werefast'))
    end
  end

  self:AddOnActivationCallback(on_activation)
end

SaySpeed:Seal()
return SaySpeed
```

La dernière partie est l'`Action` finale, dans notre cas `SayAction`. Les actions sont
généralement très génériques et basiques. Dans la plupart des cas, le `SayAction` existant sera
tout ce qu'il faut. Reportez-vous à `SayAction.lua` pour savoir comment cela fonctionne.

Si un comportement n'a pas besoin supplémentaire d'une tâche spécifique et veut juste dire une
phrase, on peut aussi utiliser directement `SayTask` :

```lua
-- in a Behaviors logic
...
local task = SayTask:new('misc/outoffuel')
GetJester():AddTask(task)
...
```

### LReal et unités

Un besoin très courant est de travailler avec des valeurs et des unités réelles, telles que la
vitesse ou le temps.
Par conséquent, nous avons des `LReal`, avec des unités définies dans `LUnit`.

```lua
local time = min(15)
local speed = kt(500)
local fuel = lb(12000)

if time > s(10) then
  print("foo")
end

time = time - s(40)
```

Soyez prudent lorsque vous effectuez des opérations scalaires :

```lua
-- correct
time *= 2

-- incorrect
time *= s(2)
```

Ce dernier résultat entraînerait un `LReal` invalide, dont la vérification peut être effectuée à
l'aide de
`time:IsValid()`.

Si nécessaire, les valeurs peuvent être converties dans une autre unité :

```lua
local timeInSeconds = time:ConvertTo(s)
print("Time:", timeInSeconds)
```

`time.value` accéderait au nombre sous-jacent brut.

### Accéder aux propriétés

Lua a un accès complet à tous les `Property` définis dans nos composants et peut accéder
facilement avec `GetProperty` :

```lua
function GetTotalFuelQuantity()
  local gauge_readout = GetProperty(
    "/Pilot Fuel Quantity Indicator/Fuel Meter", -- path
    "Internal Fuel Quantity Indication" -- property name
  ).value

  return gauge_readout or lb(10000)
end
```

`GetProperty` attend le chemin complet du composant dans l'arborescence des composants
(qui sont tous des noms de composants parents), ils doivent commencer par `/` pour
indiquer un chemin absolu.

La valeur renvoyée est un objet wrapper `Property`. Accès au sous-jacent
la valeur (dans ce cas un `LReal` avec l'unité `Pounds`) est donnée par
`GetProperty(...).value`.

<!-- markdown-link-check-disable -->
Voir le fichier `properties_snapshot.json` dans le
[Heatblur-Simulations/jester-modding](https://github.com/Heatblur-Simulations/jester-modding)
référentiel pour une liste complète de toutes les propriétés lisibles.
<!-- markdown-link-check-enable -->

![propriétés_snapshot](../../../img/properties_snapshot.jpg)

> 💡 Ouvrez le fichier avec un navigateur pour le parcourir et le rechercher.

### Observations et sens

En plus de l'accès direct à la propriété, Jester dispose d'un système d'observation. Le
Le système permet de rendre accessibles de manière simple les données fréquemment utilisées, ou
encore de
fournir des données plus complexes, c'est-à-dire provenant du SDK DCS.

Les observations font partie des `Sense`, dont Jester en possède plusieurs (yeux, oreilles, …).
Pour l'instant, la plupart d'entre eux sont des _WIP_.

```lua
local isAirborne = GetJester().awareness:GetObservation("airborne") or false
```

## Interactions

Un aspect clé de Jester est qu'il peut interagir avec le cockpit en cliquant sur
interrupteurs, boutons et boutons tournants.

L’API propose donc deux approches.

### Interactions entre les composants

La manière privilégiée d’interagir avec le cockpit est via le système de composants.

Pour permettre l'interaction, un manipulateur doit être enregistré à `F_4E_WSO_Cockpit.lua` :

```lua
-- ChaffMode : OFF, SGL, MULT, PROG
self:AddManipulator(
  "Chaff Mode",
  {component_path = "/WSO Cockpit/WSO Left Console/AN_ALE-40 CCU/Chaff Mode Knob"}
)
```

Après cela, il peut facilement interagir avec, par exemple :

```lua
task:AddAction(SwitchAction:new("Chaff Mode", "MULT"))
-- or in short
task:Click("Chaff Mode", "MULT")
```

ou en lisant sa valeur actuelle :

```lua
local cockpit = GetJester():GetCockpit()
local chaff_mode = cockpit:GetManipulator("Chaff Mode"):GetState()
```

### Interactions brutes

Si le commutateur souhaité ne prend pas encore en charge l'interface des composants,
on peut plutôt se rabattre sur une interface brute qui invoque directement les commandes DCS,
comme si le joueur avait déclenché une commande manuellement.

```lua
-- sends value 1 via command WSO_EJECT_INSTANT to device EJECTION_SEAT_SYSTEM
ClickRaw(devices.EJECTION_SEAT_SYSTEM, device_commands.WSO_EJECT_INSTANT, 1)

-- sends the value corresponding to position 2 on a 7-position knob
ClickRawKnob(devices.HUD_AN_ASG_26, device_commands.HUD_SelectHUDMode, 2, 7)
```

Voir `devices.lua` pour tous les appareils disponibles et également `command_defs.lua` pour
les commandes.

En général, les boutons et les commutateurs à 2 positions utilisent la plage `[0, 1]` pour les
valeurs, tandis que
Les commutateurs à 3 positions utilisent souvent (mais pas toujours) `[-1, +1]`. Pour les
interrupteurs à 3 positions, `-1` est
généralement utilisé pour déplacer un interrupteur à 3 positions vers le bas, `+1` pour le déplacer
vers le haut - mais certains interrupteurs
avoir une orientation différente. Voir `default.lua` et `clickabledata.lua` pour apprendre
en savoir plus sur un commutateur spécifique et comment il réagit aux valeurs.

## Événements

En plus de cliquer sur les commutateurs, Jester peut réagir aux événements envoyés depuis C++ ou
également de Lua. Le système suit un modèle simple observateur/auditeur :

```lua
ListenTo("go_silent", "Radar", function(task)
  task:Click("Radar Power", "STBY")
end)
```

avec :

```lua
if is_aar then
  DispatchEvent("go_silent")
end
```

## API de tâches

Un aspect essentiel de l'écriture de la logique pour Jester tourne autour de l'utilisation de la
classe `Task`.
Les tâches consistent en une séquence de `Action`. Une tâche peut être suspendue, reprise ou
annulée entièrement par le système si nécessaire.

Les actions sont, par conception, exécutées de manière asynchrone. L'exécution d'un clic prendra un
certain temps et
ne s'exécute pas instantanément. En particulier, ajouter une action de clic à une tâche ne bloquera
pas le code,
il est simplement ajouté à la chaîne d'actions à exécuter éventuellement.

Ce concept est similaire aux Future-API dans d'autres langages, et `Task` propose une API fluide
pour cela.

Prenons l'exemple suivant :

```lua
local task = Task:new()
task:Roger()
  :Click("Radar Power", "OPER")
  :Wait(min(4))
  :Click("Screen Mode", "radar")
  :Say("phrases/radar_ready")
  :Then(function()
    self.scan_for_bandits = true
  end)
```

Entre autres fonctions, l'API propose :

- `AddAction` - n'importe quel `Action`, base de l'API
- `Then` - fonction anonyme
- `Wait` - heure
- `WaitUntil` - prédicat
- `Say` - phrase
- `Roger`
- `CantDo`
- `Click` - nom, état
- `ClickFast` - nom, état
- `ClickShort` - nom, état
- `ClickShortFast` - nom, état

Reportez-vous à `Task.lua` pour plus de détails.

## Interface utilisateur

Jester fournit deux types d'interfaces utilisateur. Une roue avec des options sélectionnables
et une boîte de dialogue avec des questions et des réponses sélectionnables affichées à la demande.
Voir
[Wheel UI](wheel_ui.md) et [Dialog UI](dialog_ui.md) pour en savoir plus.

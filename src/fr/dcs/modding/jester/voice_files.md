# Fichiers vocaux

La bibliothèque complète de phrases de Jesters peut être trouvée dans le dossier Mod, par exemple :

`G:\DCS World OpenBeta\Mods\aircraft\F-4E\Sounds\Jester`

Lors de l'édition des sons, il est nécessaire de redémarrer DCS. Simplement recharger la mission
ne suffit pas pour que les changements prennent effet.

## SDEF

Pour que DCS comprenne les fichiers, les fichiers de définition du son (sdef) se trouvent dans :

`G:\DCS World OpenBeta\Mods\aircraft\F-4E\Sounds\sdef\Jester`

Un fichier sdef est un fichier texte brut qui peut être modifié avec n'importe quel éditeur de
texte. À côté de la localisation du
fichier son réel, il peut définir des propriétés telles que le gain ou les effets de fondu
d'entrée/sortie,
ainsi que le positionnement de l'effet sonore dans le monde lors de la lecture.

```ini
wave = "Jester/Contacts/theresafriend4shipbraHI1"
inner_radius = 10
outer_radius = 100
position = {0.0, 0.0, 0.0}
gain = 2
streaming = false
preload = false
```

## Variantes

![Variations sonores](../../../img/jester_sound_variations.jpg)

Lorsque vous placez plusieurs fichiers son portant le même nom, suffixé par un numéro croissant,
DCS lira automatiquement n'importe quel fichier de manière aléatoire.

De cette façon, des variations peuvent être créées, pour éviter de jouer toujours exactement le même
son.

## Humeur

Les sons Jester peuvent être suffixés par `HI` pour indiquer des variantes qui ne doivent être
jouées que
quand Jester est d'humeur stressée. Les fichiers `HI` peuvent par exemple avoir Jester
crier au lieu de parler calmement.

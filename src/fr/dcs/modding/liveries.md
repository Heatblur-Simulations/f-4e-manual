# Livrées

_"Nous les avons en gris bicolore. Nous les avons en vert bicolore.
Nous pouvons les obtenir en rose fuchsia vif."_

Créer des livrées pour notre F-4E peut être un travail fastidieux.

En règle générale, la plus grande partie du temps est consacrée à la recherche sur le Web et dans
livres pour fournir les livrées les plus précises et les plus réalistes.

Avec la sortie du F-4E Phantom II, nous voulons voir ce que vous avez en réserve
pour le F-4. Pour vous accompagner dans vos façons créatives de recréer votre favori
Livrée, il y a quelques choses à apprendre concernant le jet et comment il est
représenté en DCS.

## Kit de peinture

![dcs_liveries_template](../../img/dcs_liveries_template.jpg)

Le Paintkit a été créé dans un souci de facilité d’utilisation. Il permet de déballer le
Objet 3D sur un espace 2D.

Pour fournir la plus haute qualité disponible, le Paintkit est fourni en **espace colorimétrique
linéaire** et **profondeur de couleur 16 bits**. Gardez à l'esprit que toutes les suites graphiques
ne gèrent pas cela correctement. Le Paintkit a été créé à l'aide d'Adobe Photoshop.
L'enregistrement en profondeur de couleur 16 bits prendra un certain temps, alors soyez patient
lorsque vous appuyez sur _Enregistrer_ dans votre application graphique.

Le kit fournit également une pile de couches _Administrative Tools_, qui contient également
le _Wireframe unwrap_ aidant à aligner votre art.

Le dossier appelé _Partsfinder_ permet d'identifier les pièces qui vont ensemble sur
le _UV Unwrap_ pour certaines pièces. Aucun rembourrage n'est appliqué à cet endroit, donc si vous
les utilisez pour votre sélection, vous souhaiterez peut-être élargir votre sélection de quelques
pixels pour éliminer les artefacts sur les coutures.

> 💡 Vous pouvez lier des fichiers dans Photoshop. Cela signifie que vous pouvez créer de l'art,
> l'enregistrer sous forme de fichier, puis le lier dans votre fichier Paintkit. Cela permet un
> flux de travail non destructif qui vous permet de changer les choses par la suite si vous n'êtes
> pas satisfait de votre résultat.

## Rendu PBR et fichier RoughMet

À côté de votre _Fichier Albedo_ que vous créez en exportant votre livrée personnalisée
du Paintkit, vous aurez besoin du _RoughMet File_ pour tirer le meilleur parti de votre
livrée personnalisée.

Nous vous fournissons les fichiers RoughMet non compressés dans les fichiers Paintkit. DCS
utilise le **Physical Based Rendering** pour créer l'image que vous voyez sur votre moniteur
ou via votre casque VR.

Les fichiers RoughMet utilisent les trois canaux RVB :

- Rouge -> Occlusion ambiante (ombres pré-cuites)
- Bleu -> Métallique (Définit si une surface est métallique ou non)
- Vert -> Rugosité (la surface est-elle super lisse ou vraiment rugueuse)

Étant donné que le fichier Roughmet se trouve dans la **plage de couleurs RVB 8 bits**, par canal,
vous
obtenez 255 valeurs pour définir les attributs nommés. Visuellement, cela est représenté par
canal avec une valeur de 0 pour le Noir et une valeur de 255 pour le Blanc.

![dcs_liveries_material_errors](../../img/dcs_liveries_material_error.jpg)

### Évitez les couleurs vives ou sombres

Avec ce qui est défini dans le RoughMet, le moteur DCS restitue l'image. Vous devez éviter
d'utiliser des couleurs très claires ou sombres et saturées à 100 %, car sinon DCS ne peut pas
créer les effets appropriés lorsque la surface est exposée à la lumière directe du soleil.

Mathématiquement, le moteur ne peut pas restituer une couleur au-delà de l'espace colorimétrique
disponible. Donc si vous souhaitez un marquage jaune vif sur votre jet, réduisez la
saturation d'environ 15 % ainsi que la luminosité.

En fin de compte, vous pouvez vérifier si vos textures sont dans le **spectre PBR** en
chargez votre livrée personnalisée dans le DCS _Modelviewer_ et appuyez sur <kbd>F8</kbd>
qui révèle le problème dans la **Vue des erreurs matérielles**. Si vous voyez une orange ou
couleur magenta ici, cela signifie que le moteur de rendu ne peut pas tirer tous les effets sur
car la couleur de base (**Albedo**) est trop brillante ou saturée.

> 💡 Il existe de nombreuses excellentes sources pour en savoir plus sur le Physical Based
> Rendering, et vous êtes toujours invités à nous demander directement sur notre
> [Discord](https://discord.com/servers/heatblur-simulations-1071433028045377637)
> ou sur le [Forum](https://forum.dcs.world/forum/919-dcs-f-4-phantom/).

## Personnalisation des personnages

Le Phantom comprend [personnalisation des personnages](../character.md#customization).

Jusqu'à ce que la fonctionnalité et son interface utilisateur soient entièrement disponibles
ultérieurement au cours de la période d'Early Access, certaines de ses fonctionnalités sont déjà
accessibles directement en modifiant le fichier `description.lua` de votre Livrée.

Voici un extrait de la zone que vous devez examiner :

```lua
custom_args =
{
  [512] = 0.3, -- 0 is no mirrors, 0 - 0.4 is both mirrors (mickey mouse) and 0.5+ is top mirror only.
  [2008] = 0.95, --WSO Helmet, 0.95 is HGU-55
  [2006] = 0.95, --Pilot Helmet, 0.95 is HGU-55 (expand list of draw args)
}
```

Recherchez la section `custom_args` qui se trouve généralement au bas du fichier.
Les nombres à l'intérieur de `[]` représentent le **Draw Argument** utilisé par DCS pour
indiquer au modèle ce que porte votre pilote (et aussi l'avion lui-même).

Le Draw Argument `[512]` représente les **miroirs sur la verrière WSO**. Il peut être
défini sur une valeur comprise entre 0,0 et 1,0, représentant la plage d'animation du Draw
Argument.

Cette valeur est utilisée pour donner à votre pilote un certain casque, des gants ou similaire. Ou
même pour définir le sexe du modèle pilote.

`[2006]` est le Draw Argument pour le casque de pilote. Réglez-le sur `0.1` et votre
le pilote portera un casque HGU-2 à l’ancienne. Réglez-le sur `0.95` et il sera
portant un HGU-55 plus moderne.

## Application de peintures personnalisées

Pour appliquer une texture personnalisée au jet, copiez une texture existante et remplacez les
fichiers
tout en gardant les noms. Vous pouvez trouver une petite bibliothèque de textures à réduire
la taille globale d'une livrée dans le dossier _commons_ sous
`\CoreMods\aircraft\F-4E\Liveries\F-4E-45MC\commons`.

Essayer de garder la profondeur du dossier peu élevée peut au premier abord sembler compliqué,
mais cela facilite en fait l'application de la texture dans votre `description.lua` et ne le
surcharge pas trop avec de longs chemins de dossiers.

### Exemple

Le dossier _ALQ131_g_ contient une livrée pour le pod ALQ-131 en olive/vert
couleurs. Vous pouvez dire à votre `description.lua` d'utiliser cette texture au lieu de la
couleur blanche par défaut de DCS lors de l'équipement de l'ALQ-131 sur le Phantom dans le jeu
en mettant la ligne de code suivante dans votre fichier `description.lua` pour les deux
l'Albédo et la Texture Roughmet :

```lua
{ "ALQ_131", 0, "../commons/alq131_g/alq_131_diff", false };
{ "ALQ_131", ROUGHNESS_METALLIC, "../commons/alq131_g/alq_131_diff_roughmet", false };
```

La première valeur après le `{` entre parenthèses `""` est le nom du matériau, dans ce
cas le `"ALQ_131"`. Il peut être un peu difficile de trouver ces noms de matériaux
dans DCS. N'hésitez pas à demander dans notre
[Discord](https://discord.com/servers/heatblur-simulations-1071433028045377637)
sur la chaîne **#liveries-lair** pour obtenir de l'aide à ce sujet.

En utilisant le même principe, vous pouvez appliquer des textures Flight Suit personnalisées à votre
Pilote ainsi qu'une texture HGU-2. Voici un exemple d'un F-4F allemand de la Luftwaffe
Pilote et le WSO étant équipés de combinaisons de vol allemandes de la Luftwaffe et de gris
Casques HGU-2 :

```lua
{ "PILOT_HGU-2_Helmet", 0, "../commons/HGU2_g/HGU-2_Helmet", false };
{ "PILOT_HB_Char_RobinOlds_CWU", 0, "../commons/LGFS/hb_char_robinolds_cwu", false };
{ "PILOT_HB_Char_RobinOlds_overall", 0, "../commons/LGFS/hb_char_robinolds_overall", false };
{ "PILOT_HB_Char_RobinOlds_overall", NORMAL_MAP,
  "../commons/LGFS/hb_char_robinolds_overall_nrm", false };
{ "PILOT_HB_Char_RobinOlds_roughmet", ROUGHNESS_METALLIC,
  "../commons/LGFS/hb_char_robinolds_overall_roughmet", false };

{ "WSO_HGU-2_Helmet", 0, "../commons/HGU2_g/HGU-2_Helmet", false };
{ "WSO_HB_Char_RobinOlds_CWU", 0, "../commons/LGFS/hb_char_robinolds_cwu", false };
{ "WSO_HB_Char_RobinOlds_overall", 0, "../commons/LGFS/hb_char_robinolds_overall", false };
{ "WSO_HB_Char_RobinOlds_overall", NORMAL_MAP,
  "../commons/LGFS/hb_char_robinolds_overall_nrm", false };
{ "WSO_HB_Char_RobinOlds_roughmet", ROUGHNESS_METALLIC,
  "../commons/LGFS/hb_char_robinolds_overall_roughmet", false };
```

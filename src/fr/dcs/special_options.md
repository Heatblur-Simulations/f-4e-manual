# Options spéciales

Le Phantom propose plusieurs options qui peuvent être définies dans l'_Option spéciale_
menu dans DCS.

![Menu d'options spéciales](../img/special_options.jpg)

## Menu radio et comportement PTT

![Menu radio](../img/special_options_radio_menu.jpg)

Liste déroulante pour sélectionner le comportement de la liaison Push to Talk pour la radio.

| Options | Fermer le menu | Le menu doit être ouvert | Exporter la voix |
| --------------- | ---------- | ----------------- | ------------ |
| Par défaut | ❌ | ❌ | ✅ |
| Ouvrir le menu | ❌ | ✅ | ✅ |
| Masquer à la sortie | ✅ | ❌ | ✅ |
| Aucune exportation | ❌ | ❌ | ❌ |

Les colonnes ont les effets suivants :

- Fermer le menu - lorsque vous relâchez la touche, le menu de communication DCS
  se ferme automatiquement
- Le menu doit être ouvert - la clé ne fonctionne que lorsque le menu de communication DCS est
  actuellement ouvert
- Exporter la voix : lorsque vous appuyez dessus, la voix est exportée vers des outils tels que SRS

## Limite de déflexion du manche

Limite la force maximale en lbf (Pound-Force), c'est-à-dire la force, que le pilote est capable
d'exercer pour tirer le manche.

Cet effet est principalement visible lors du contrôle de l'avion lors de manœuvres à G élevé,
et peut empêcher de tirer accidentellement des G extrêmes.

> 💡 Par exemple, dans certaines situations, cela nécessiterait une force surhumaine
> pour tirer le manche jusqu'au bout. Avec cette option activée, en tirant le vrai
> joystick au-delà de cette limite, le manche de vol en jeu est limité et n'est pas tiré
> aussi loin vers l'arrière. Cela évite également par exemple de tirer accidentellement 20 G et
> de perdre connaissance instantanément, simplement parce que le vrai joystick n'a pas de
> retour de force, ou un retour de force réduit.

## Mélange de force du manche

Lorsqu'un mouvement maximal du manche entraînerait la génération de forces excessives,
activer cette option réduira la force générée pour améliorer la précision de manipulation,
mais peut également aider à éviter de tirer accidentellement des G extrêmes.

## Période de lissage de la position neutre du manche

Lisse les forces appliquées par les systèmes de l'avion qui déplacent la position neutre du
manche (voir
[Bobweights contre
soufflets](../systems/flight_controls_gear/flight_controls.md#bobweights-vs-bellows)).
Plus la période sélectionnée est longue, moins ces systèmes ont d'impact sur
les mouvements du manche.

Cela permet aux utilisateurs de matériel sans retour de force de réagir plus facilement aux
changements soudains de la position neutre du manche, et d'obtenir généralement un vol plus
stable.

## AFCS Breakout Deadzone

Pourcentage d'action sur le manche (séparé pour le roulis et le tangage) après quoi le AFCS
le système reconnaîtra que le manche pilote a été déplacé de la position de trim neutre
(interrupteurs du capteur de force fermés).

Cela affectera le fonctionnement du canal de roulis et de tangage AFCS et l'empêchera de
combattre votre action. Autrement dit, lorsque vous déplacez le manche au-delà de cette zone
morte, l'AFCS comprend que le pilote veut prendre les commandes et arrêtera d'essayer de
corriger le mouvement. Le breakout de roulis désactivera temporairement le roll stab aug ainsi
que le maintien de l'angle d'inclinaison et le maintien du cap. Le breakout de tangage
désactivera temporairement le maintien de l'attitude en tangage ainsi que le maintien de l'altitude.

> 💡 Cette zone morte s'ajoute _"en plus"_ de la zone morte de l'axe DCS : plus la zone morte de
> base définie sur l'axe est élevée, plus la zone morte de Breakout AFCS doit être réglée petite.
> Gardez à l'esprit que définir des valeurs faibles, telles que 0 %, alors qu'une zone morte de
> base déjà faible peut entraîner le non-engagement de certaines fonctions du pilote automatique
> même en lâchant le manche, car il se peut que le manche ne soit toujours pas parfaitement
> neutre.

Les valeurs par défaut sont 1 % pour le roulis et 2 % pour le tangage.

> 💡 Pour vérifier si le breakout est actuellement activé, vous pouvez utiliser
> l'indicateur de contrôles et rechercher le texte en dessous.

Pour plus d'informations, voir
[Transducteur de force](../systems/flight_controls_gear/flight_controls.md#force-transducer).

## Détente de postcombustion

Deux options pour définir à quel point de l'entrée de la manette des gaz physique (0
à 100 %), l'avion allumera la postcombustion.

Autrement dit, si elle est réglée à 80 %, la plage de puissance MIL de l'avion sera commandée
entre 0 % et 80 % de votre limitation physique, tandis que les 20 % restants seront
contrôler la plage de postcombustion.

L'option zone morte peut être utilisée pour diviser les points dans la plage à laquelle le
la postcombustion sera allumée et éteinte. Par exemple, régler 20‰ pour la zone morte
et 80 % pour la détente entraîne l'activation de la postcombustion à 82 % et la désactivation
à 78 % de l'entrée des gaz.

## Désactiver l'entrée des commandes Multicrew lors de l'adhésion en tant que WSO

Si cette case est cochée, lorsque vous rejoignez en tant que WSO en multijoueur avec un pilote
humain, vos entrées de commandes locales (manche, palonnier et accélérateur) seront ignorées
par défaut. Vous pouvez réactiver votre entrée locale avec la combinaison de touches attribuée.

## Annonces d'atterrissage de Jester

S'il est activé, Jester assistera le pilote pendant l'atterrissage en annonçant l'altitude
de l'avion, comme on le voit dans l'aviation civile.

> 💡 Les vrais Phantom WSO n'ont pas aidé lors de l'atterrissage.

## Avion persistant (par livrée et numéro de queue)

Lorsque cette case est cochée, cela active le système de persistance de l'avion, permettant
de sauvegarder et de charger l'état de l'avion entre plusieurs vols.

La liaison **Initialize Persistent Aircraft State** (<kbd>LCTRL</kbd>+<kbd>P</kbd>)
est utilisée initialement pour commencer à suivre l'avion actuel. Toute mission ultérieure
pilotée avec la même combinaison de livrée et de numéro de queue entraîne le rechargement
de cet avion en particulier.

Voir [9.6. Persistance](persistence.md) pour plus de détails.

> 💡 Les auteurs de mission peuvent ignorer ce paramètre,
> voir [9.12. Éditeur de mission](mission_editor.md#persistent).

## Interface utilisateur HB

### Remplacement de la résolution

Les éléments de l'interface utilisateur, tels que la roue Jester, le manuel, le navigateur virtuel
et d'autres, sont mis à l'échelle et positionnés via une résolution fixe qui doit correspondre à la
résolution de la surface du jeu sur laquelle ils sont rendus.

Lorsque l'option n'est pas cochée, cette résolution est automatiquement déterminée en fonction des
paramètres de l'écran. Cependant, dans certaines situations, notamment lors de l'utilisation de la
VR ou d'une configuration multi-moniteurs, cette détection automatique peut échouer et calculer
une résolution incorrecte.

Si des éléments de l'interface utilisateur sont mal placés, par exemple si la roue Jester n'est pas
centrée ou même coupée, vérifiez ce paramètre et modifiez la résolution manuellement jusqu'à ce que
l'interface utilisateur s'affiche correctement.

### Décalage

Permet de déplacer l'interface utilisateur horizontalement et verticalement. Les valeurs positives
la déplacent vers la droite ou vers le bas, les valeurs négatives vers la gauche ou vers le haut.

Normalement, cela devrait être conservé à la valeur par défaut de 0 px. Cependant, dans certains
cas (par exemple, lorsque vous utilisez la VR et que vous la configurez pour un rendu sur l'œil
GAUCHE ou DROIT, alors que la case _"Utiliser la résolution système DCS"_ n'est pas cochée), il
est possible que l'interface utilisateur soit coupée. Ce paramètre permet alors de ramener
l'interface utilisateur dans le champ de vision, mais au prix d'un alignement correct de
l'interface, par exemple le fait que l'UI Jester soit centrée sur l'écran.

### Accès au domaine

![Types d'accès au domaine](../img/hb_ui_domain_access_option.jpg)

Définit les domaines auxquels l’interface utilisateur HB est autorisée à accéder.

**Full** permet une navigation libre, permettant de visiter n'importe quel site Web avec le
[Navigateur virtuel](virtual_browser.md).

L'option par défaut **Whitelist** définit les sites accessibles à l'aide d'un
fichier de liste blanche. Seuls les domaines transmettant les règles configurées dans le fichier
sont autorisés.
Les règles par défaut sont configurées pour prendre en charge toutes les fonctionnalités de
l'interface utilisateur HB et une poignée de
sites Web utiles pour le navigateur virtuel, tels que _YouTube_.

Ce fichier est automatiquement créé à

`C:\Users\John Doe\Saved Games\DCS_F4E\hbui_whitelist.txt`

lors du premier lancement du Phantom.

> 💡 La suppression du fichier entraînera sa recréation au prochain lancement.
> De cette façon, on peut le mettre à jour avec l'ensemble de règles le plus récent -
> s'il y a eu des changements.

La sélection de **Hors ligne** désactivera le navigateur virtuel ainsi que toute autre
fonctionnalité et élément de l'interface utilisateur HB nécessitant une connexion en ligne active.

### Langue

Liste déroulante pour sélectionner la langue utilisée pour tous les éléments de l'interface
utilisateur HB. Sont disponibles :

- Anglais
- Chinois (_中文_)
- Allemand (_Deutsch_)
- Coréen (_한국어_)

Affecte par exemple l'UI Jester, le Bombing Tool, mais aussi la
version en jeu de ce manuel et plus encore.

> 💡 Si vous souhaitez réaliser des traductions dans d'autres langues,
> veuillez vous rendre à la [section Modding](modding/jester/wheel_ui.md#translations),
> merci ! 👍

### Thème

![Thème de l'interface utilisateur](../img/special_option_hb_ui_theme.jpg)

Permet de sélectionner le thème de couleur utilisé par l'interface utilisateur. Tous les éléments de
l'interface utilisateur prennent en charge un thème clair et un thème sombre.

L'option par défaut **AUTO** choisira le thème de manière dynamique en fonction de l'heure en jeu.
Clair pendant la journée et sombre pour une mission de nuit.

## Interface utilisateur Jester

### Vitesse d'animation

La valeur est appliquée comme facteur à certaines animations dans l'interface utilisateur Jester,
telles que
la fermeture et l'ouverture de la roue ou le clignotement lors de la sélection d'un élément.

La vitesse par défaut est donnée par `1.0`. Les valeurs supérieures accélèrent les animations,
les valeurs inférieures à `1.0` les ralentissent. La plage autorisée est `0.01` à `1000`.

> 💡 L'utilisation d'une valeur telle que `1000` désactive efficacement les animations.
> Même si cela a un impact négatif sur l'expérience visuelle, cela peut aider
> si l'interface utilisateur ne semble pas suffisamment réactive.

### Autoriser les contrôles de la souris

Lorsqu'elle est cochée, l'interface utilisateur Jester permet l'interaction à la souris en
survolant les éléments et en cliquant avec le bouton gauche.

L'option peut être désactivée si, par exemple, seul le suivi de la tête est préféré et
la détection automatique de la souris se déclenche peut-être trop souvent, par ex. quand on a
placé la souris sur le bras de la chaise.

### Autoriser le suivi de la tête

![Menu radio](../img/special_options_jester_ui_head_tracking.jpg)

Lorsqu'elle est cochée, l'interface utilisateur Jester permet de déplacer le curseur simplement en
déplaçant la tête du personnage dans le jeu. Peut être désactivé si aucun équipement de suivi de
tête pratique, tel que TrackIR ou la VR, n'est disponible.

> 💡 Les options de suivi sont choisies dynamiquement en fonction du mouvement. Même si
> le suivi de la tête est activé, d'autres options telles que l'utilisation de la souris ou
> l'attribution du curseur à un axe restent également toujours disponibles.

La liste déroulante permet de sélectionner le comportement de suivi de tête :

- Centre - l'origine de la vue est au centre de l'avion
- Dynamique - l'origine de la vue est l'endroit où l'interface utilisateur a été ouverte

La sélection de _Center_ nécessite de regarder vers l'avant lors de l'utilisation de l'interface
utilisateur, alors que _Dynamic_ permet d'utiliser le suivi de la tête depuis n'importe quelle
position de vue. Cependant, _Dynamic_ peut conduire à devoir poursuivre le curseur lors de la
fermeture et de la réouverture fréquente de l'interface utilisateur. De plus, l'option _Dynamic_
est moins pertinente en VR, car les éléments de l'interface utilisateur y sont alors toujours
rendus de face.

> 💡 Les dialogues de Jester utilisent toujours le type _Center_, nécessitant de regarder vers l'avant.

#### Angle maximum

Définit l'angle (en degrés) dont la tête doit être décentrée pour atteindre les
coins de l'interface utilisateur.

En d'autres termes, réduire cette valeur par rapport à sa valeur par défaut de 10° rend le suivi de
la tête
plus sensible aux mouvements de la tête, tandis que son augmentation réduira le
sensibilité.

> 💡 Les utilisateurs de réalité virtuelle trouveront peut-être un angle inférieur plus confortable,
> puisque la transposition tête-jeu est normalement 1:1 en VR.

#### Zone morte

Définit l'angle (en degrés) dont la tête doit être décentrée pour que l'interface utilisateur
reconnaisse le mouvement de la tête et active le suivi de tête.

Si la tête est déplacée moins que la zone morte (0,5° par défaut), le curseur est
automatiquement réglé au centre et non déplacé.

> 💡 Les utilisateurs jouant avec une transposition tête-jeu élevée et très sensible pourraient
> trouver utile d'augmenter légèrement cette valeur.

#### Décalage Y de l'angle d'origine

Définit le décalage (en degrés) pour déplacer verticalement le point central du suivi de la
tête. Les valeurs positives le font monter, les valeurs négatives le font baisser. Le réglage
par défaut est de 0°.

Ce paramètre peut être utile si le point central n'est pas correctement aligné
avec la vue naturelle vers l'avant. Autrement dit, lorsqu'on ouvre le menu à partir d'une
position de tête naturelle et que le curseur affiche déjà un déplacement au lieu d'être
centré, ajuster ce paramètre atténue le problème.

## Manche radar pour curseur

Lorsque cette case est cochée, les liaisons associées au contrôle de la
[Commande manuelle de l'antenne](../cockpit/wso/right_console/front_section.md#antenna-hand-control)
peuvent également être utilisées pour déplacer le curseur utilisé pour l'Offset Bombing et
d'autres modes similaires, rendant inutile la liaison des deux
[molettes Track](../cockpit/wso/right_console/center_section.md#along-track-wheel).

## Retour de force

### Gain

Pour les utilisateurs équipés de manches à retour de force, ce paramètre peut être utilisé pour
ajuster le gain des forces par axe.

Le paramètre par défaut est 100 % pour les axes Roll et Pitch. Des valeurs plus élevées
augmentez la force utilisée par le manche, tandis que des valeurs plus petites la diminueront.

### Forcer l'arrêt

Lorsque cette case est cochée, le comportement du manche sera celui d'un manche non-FFB.
C'est-à-dire même s'il y a un manche FFB connecté ou que la case "_Utiliser FFB_" dans les
paramètres généraux de DCS est cochée.

## Taux de mise à jour de simulation inférieur

Cette **option expérimentale** permet de réduire le taux de mise à jour de la majorité des
composants de l'avion.

Cela peut réduire la charge sur le processeur, améliorant ainsi les performances du jeu pour
les machines dont le processeur est le goulot d'étranglement.

Cependant, cela peut également entraîner non seulement des coupures visuelles, telles que des
animations s'exécutant plus lentement, mais cela entraînera également une dégradation de certains
systèmes. Par exemple, le Pave Spike, fonctionnant plus lentement, ne peut plus mettre à jour son
algorithme de stabilisation du sol assez rapidement. Cocher cette option peut donc provoquer des
problèmes et entraîner des bugs.

## Taux de rafraîchissement de l’interface utilisateur HB inférieur

Lorsque cette case est cochée, tous les éléments de l'interface utilisateur HB sont rendus à un
rythme nettement inférieur.

Cela peut aider à améliorer les performances tandis que les éléments de l'interface utilisateur HB
sont affichés, en réduisant la charge du processeur. Cependant, cela peut également empêcher les
animations de l'interface utilisateur de paraître fluides.

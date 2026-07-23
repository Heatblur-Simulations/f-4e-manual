# Interface

L'interface utilisateur de Jester permet une communication et un accès faciles à divers
réglages en cours de vol, pratique même dans des situations de stress élevé.

## Roue

![Interface utilisateur de la roue](../img/jester_wheel_ui.jpg)

L'interface principale pour interagir avec Jester consiste en un menu circulaire avec
plusieurs sous-menus.

Confirmer une option, telle que _UHF Radio_ en surbrillance, entrera dans son
sous-menu, donnant accès à des options plus associées.

Dans certains cas, les options sont également présentées dans un menu externe.

![Menu extérieur de la roue](../img/jester_wheel_submenu.jpg)

L'interface utilisateur prend également en charge la saisie directe de texte, le cas échéant, par
exemple pour saisir les
coordonnées d'un nouveau waypoint. Pour cela, un contrôle total du clavier est autorisé.

> 💡 Lorsque vous êtes concentré sur un champ de texte, la saisie est désactivée sur DCS.

![Saisie de texte sur roue](../img/jester_wheel_text_entry.jpg)

Pour confirmer et envoyer les données, sélectionnez à nouveau l'option (LAT/LONG dans ce cas).

### Contrôles de la roue

La roue Jester peut être ouverte en appuyant brièvement sur <kbd>A</kbd> et fermée en appuyant
longuement sur <kbd>A</kbd>.

L'ensemble de l'interface utilisateur est accessible via la souris en cliquant avec le bouton gauche
sur les options ou en cliquant sur
la zone centrale du cercle pour revenir en arrière.

Les options peuvent également être liées directement au clavier ou à d’autres périphériques
d’entrée. Le
les raccourcis clavier par défaut pour accéder aux options sont <kbd>LCTRL</kbd> + <kbd>1</kbd>
à <kbd>LCTRL</kbd> + <kbd>8</kbd>.

Les options sur la bague extérieure sont sélectionnables via :

- <kbd>Q</kbd> - déplacer le curseur dans le sens anti-horaire
- <kbd>W</kbd> - confirmer la sélection sous le curseur
- <kbd>E</kbd> - déplacer le curseur dans le sens horaire

De plus, le curseur peut également être déplacé librement via un axe assignable
pour un mini-stick, ou via head-tracking. Voir
[9.2 Options spéciales](../dcs/special_options.md#jester-ui-allow-head-tracking)
pour configurer le suivi de la tête.

![Curseur de suivi de la tête](../img/jester_wheel_head_tracking.jpg)

Lorsque vous déplacez le curseur sans la souris, appuyer sur <kbd>A</kbd> **court**
confirmera la sélection sous le curseur, tandis que <kbd>A</kbd> **long** peut alors être
utilisé pour fermer l'interface utilisateur.

> 💡 La plupart des actions individuelles offrent également une liaison directe, si vous le souhaitez. Voir
> [9.1. Contrôle](../dcs/controls.md#jester--chief-commands) pour plus de détails.

## Dialogue

Jester peut poser de manière proactive des questions au pilote. Dans ce cas, un menu avec
des actions apparaît en bas de l’écran.

La plupart des actions sont temporaires et expirent si elles ne sont pas engagées, auquel cas Jester
ignorera soit la question, soit il assumera une réponse raisonnable.

Il est possible que jusqu'à 3 actions soient disponibles en même temps, le pilote
peut ensuite sélectionner la question à aborder.

![Sélection de la boîte de dialogue](../img/jester_dialog_ui.jpg)

Une fois sélectionnées, plusieurs réponses sont disponibles. Certains peuvent également donner lieu
à des questions de suivi.

![Sélection de la boîte de dialogue](../img/jester_dialog_qa.jpg)

### Contrôles de boîte de dialogue

L'ensemble de l'interface utilisateur de la boîte de dialogue est accessible via la souris en
cliquant sur les options avec le bouton gauche.

Pour engager un dialogue, il est également possible d'utiliser soit <kbd>Q</kbd>,
<kbd>W</kbd> ou <kbd>E</kbd>, respectivement.

Les réponses peuvent également être liées directement au clavier ou à d’autres périphériques
d’entrée. Le
les raccourcis clavier par défaut pour accéder aux options sont <kbd>LCTRL</kbd> + <kbd>1</kbd>
à <kbd>LCTRL</kbd> + <kbd>4</kbd>.

De plus, le curseur peut également être déplacé librement via un axe assignable
pour un mini-stick, ou via head-tracking. Voir
[9.2 Options spéciales](../dcs/special_options.md#jester-ui-allow-head-tracking)
pour configurer le suivi de la tête.

Lorsque vous déplacez le curseur sans la souris, appuyer sur <kbd>A</kbd> confirmera la
sélection sous le curseur.

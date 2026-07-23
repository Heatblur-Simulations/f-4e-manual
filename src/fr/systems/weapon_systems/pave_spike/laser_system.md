# Système laser

Le laser ne peut être utilisé qu'en mode Track et sert à deux fins :

- Guider des armes à guidage laser sur une cible,
- et une mesure précise de la plage d'inclinaison.

La portée inclinée est, outre les calculs d'impact des armes, utilisée pour la
stabilisation automatique de la cible en mode Track. Si elle n'est pas mesurée avec le laser,
elle est calculée sur la base de données INS et WRCS inexactes, entraînant une dégradation
du système.

Le laser peut être utilisé lorsque le voyant LASER READY est allumé.

![lampe_ready_laser](../../../img/wso_target_designator_laser_button.jpg)

Pour configurer le laser, un code valide doit d'abord être saisi sur le panneau de commande
du codeur laser, puis transféré au pod en appuyant sur le bouton Entrée. Assurez-vous
que le voyant NO GO ne reste pas allumé.

![laser_coder_control](../../../img/wso_laser_code_control.jpg)

Le bouton poussoir LASER READY doit être enfoncé pour que le laser soit armé.

De plus, le laser est protégé par la position du train avant, qui doit être
entièrement rétracté pour éviter toute utilisation accidentelle au sol.

Une fois prêt, le laser est tiré en mode Track en appuyant en action complète sur le
bâton d'antenne. L'état du fonctionnement du laser est indiqué par les indices affichés,
fixes ou clignotants.

> 💡 Il est nécessaire que le déclencheur parcoure la séquence complète de
> _Released_ à _Half Action_, à _Full Action_, de retour à _Half Action_ et
> _Released_ afin d'actionner le laser. En particulier, ne maintenez pas la
> gâchette enfoncée, mais relâchez-la de nouveau.

| Indications | T0 | TTG |
| ------------- | ------------------------------------- | --------------------------------------- |
| non affiché | pas en mode TRACK | pas en mode TRACK |
| fixe | commandé pour tirer le laser (action complète) | tir laser, portée acceptée |
| clignotement rapide | pas commandé pour tirer le laser | ne tire pas le laser, ou cible trop éloignée |
| clignotement lent |                                       | tir laser, mais portée rejetée |

Le signal T0 indique l'intention de tirer le laser, tandis que le signal TTG représente
le résultat de l’utilisation du laser.

La plage inclinée mesurée par le laser est comparée à la plage inclinée calculée
sur la base des données INS et WRCS. Si elle ne se situe pas à ±20 % près de cette valeur,
elle est rejetée. Ceci est indiqué par le clignotement lent de TTG.

Le système peut être forcé à utiliser la portée laser malgré tout, en appuyant sur le
bouton Rejeter/Annuler.

![rejet_override_button](../../../img/wso_target_designator_reject_button.jpg)

En pratique, la plage mesurée au laser est beaucoup plus précise que la plage inclinée
calculée par le système. Par conséquent, les pilotes ont pris l'habitude d'appuyer systématiquement
sur le bouton chaque fois qu'ils tiraient le laser.

> 💡 Cette habitude peut entraîner des problèmes lors d'attaques à faible profondeur, comme en
> vol à basse altitude, où une petite variation peut rapidement rendre la plage inclinée mesurée
> par le laser très imprécise, et donc faire dériver rapidement la stabilisation.

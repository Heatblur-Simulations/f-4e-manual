# Mur droit

Le mur de droite comporte des interrupteurs auxiliaires pour tester et démarrer l'avion.

## Poignée de déverrouillage manuel de la verrière

![Poignée de déverrouillage manuel de la verrière](../../../img/wso_manual_unlock_handle.jpg)

La poignée de déverrouillage manuel est utilisée en cas de panne du
[système pneumatique](../../../systems/pneumatics.md).

La poignée, lorsqu'elle est tirée vers l'arrière, déverrouille la verrière afin qu'elle puisse être
poussée pour s'ouvrir. Avant le déverrouillage manuel de la verrière, le levier de commande
normal doit être placé en position OUVERTE.

Pour un fonctionnement normal, la poignée doit être laissée en position avancée.

Si la verrière n'est pas correctement verrouillée, le voyant d'avertissement
_CANOPY UNLOCKED_ du [panneau télélumineux](../../../systems/emergency.md#telelight-panel)
s'allume.

## Panneau de test au sol

![wso_right_wall](../../../img/wso_ground_test_control_panel.jpg)

### Contournement de la batterie

Lorsqu'il est activé (<num>1</num>), désexcite le relais de batterie, déconnectant la batterie du
bus CC essentiel de 28 volts et arrêtant la charge. Utilisé en particulier dans les
cas suspects d'emballement thermique.

### Test au sol du pilote automatique

L'interrupteur de test au sol du pilote automatique (<num>2</num>), situé sur le panneau de
disjoncteurs n°2, connecte l'alimentation électrique externe aux circuits
[AFCS](../../../systems/flight_controls_gear/flight_controls.md#automatic-flight-control-system-afcs---anasa-32).
Il se désengage en cas de perte d'alimentation externe ou lorsqu'un générateur est mis en
ligne. Lors du fonctionnement sur alimentation externe, le circuit AFCS peut être mis
hors tension en plaçant l'interrupteur en position NORM (bas).

### Alimentation au sol des instruments

En position TEST (<num>3</num>), connecte l'alimentation électrique externe aux bus d'instruments
(115/200 V CA, 28 V CA et 14 V CA), à condition que les commutateurs de générateur
soient réglés sur EXT ON.

Ceci peut être utilisé lors d'un démarrage à froid, après l'application de la puissance au
sol et avant le démarrage des moteurs, pour préconfigurer l'avion et faire fonctionner
certains systèmes nécessitant une alimentation sur ces bus.

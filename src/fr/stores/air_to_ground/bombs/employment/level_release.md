# Libération de niveau

Plusieurs modes peuvent être utilisés pour larguer des bombes depuis un vol en palier. Ce chapitre
se concentre sur le mode TL. Voir les autres sections pour la libération de niveau depuis DIRECT,
TGT FIND, OFFSET ou L.

## Niveau chronométré - TL

Le bombardement de niveau chronométré est le mode
[ARBCS](../../../../systems/weapon_systems/arbcs.md) le plus basique, n'utilisant que la
minuterie de largage.

Une fois que le bouton Bombe est enfoncé et maintenu enfoncé, la minuterie entame le compte à
rebours. Dès qu'elle atteint zéro, les armes sont larguées.

Grâce à sa simplicité, il peut être utilisé pour des attaques à haute altitude qui n'exigent pas
d'être précises, en larguant les bombes en toute sécurité depuis au-dessus de la couverture
nuageuse.

### Procédure

Le réglage de la minuterie de largage est déterminé en fonction de la valeur de portée de la bombe
établie pour l'arme choisie, en faisant référence à l'altitude de vol souhaitée au-dessus de
la cible et à la vitesse. Cette portée détermine le point où la ou les munitions
seront libérées de l'avion. Une IP est choisie par rapport à la distance de portée de la bombe,
et la valeur de la minuterie de largage est ensuite calculée en utilisant la distance
entre le point de largage et l'IP en fonction de la vitesse choisie.

La minuterie de pull-up doit être réglée sur 000 et les paramètres de libération haute et basse
peuvent être laissés à n'importe quelle valeur.

L'attaque est effectuée en entrant la valeur de minuterie de largage nécessaire, en appuyant sur
et en maintenant enfoncé le bouton de largage de la bombe lors du survol de l'IP, et en maintenant
un vol rectiligne et en palier à la vitesse et à l'altitude prévues au-dessus de la cible jusqu'à
ce que les armes soient larguées de l'avion. Contrairement aux autres modes LABS, il n'y a pas de
signal audio de remontée (pull-up), ni de prise de contrôle de l'aiguille de
[l'ADI](../../../../cockpit/pilot/flight_director_group.md#attitude-director-indicator)
pour illustrer l'écart de tangage ou de roulis - cela dépend simplement du pilote, qui doit
maintenir un vol ailes à l'horizontale.

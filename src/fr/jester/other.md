# Autre

Pendant tout le vol, Jester assistera le pilote dans toutes les situations.

Il interpellera les bandits lors d'un combat aérien et donnera des conseils de pilotage au pilote.
Jester pourrait indiquer au pilote dans quelle direction échapper lorsqu'il est attaqué par un
missile, l'avertir de tout trafic ami repéré ou aussi simplement lorsque le
La cassette AVTR est pleine.

Bien qu'il lui manque une jauge à essence dans son cockpit, il observera l'horloge et le
style de vol du pilote pour lui rappeler de vérifier le niveau de carburant ou la consommation
en oubliant de laisser l'interrupteur Fuel Dump activé.

![Jester Contrôle du carburant](../img/jester_fuel_check.jpg)

Jester est capable d'évaluer et de signaler les dégâts de combat dans une certaine mesure, et
bien plus encore.

## Démarrer

Chaque fois que le pilote effectue un démarrage à froid de l'avion, Jester
prépare automatiquement son cockpit pour le vol.

Plus particulièrement, cela inclut l'alignement INS. Au démarrage, Jester demandera
au pilote s'il est prêt pour l'alignement et quelle option d'alignement choisir.

L'alignement ne doit être commencé qu'une fois que le pilote est sûr que l'alimentation restera
stable et l'avion ne devra pas être déplacé tant que la procédure n'est pas terminée.

> 💡 Jester est capable d'interrompre un alignement si le pilote doit vraiment démarrer
> déjà en mouvement. Attendez-vous à des performances INS dégradées dans ce cas.

## Assistance au décollage et à l'atterrissage

Lors du décollage, Jester rapportera les valeurs clés de la vitesse, indiquant à
le pilote quand initier le roulis.

Par défaut, Jester assistera le joueur lors de l'atterrissage en lui donnant l'altitude
des annonces, similaires à celles observées dans l'aviation civile. De cette façon, le pilote peut
mieux
estimer la position actuelle, surtout compte tenu de la visibilité vers l'avant réduite
dans le Phantom.

> 💡 Cette option peut être désactivée, voir
> [9.2. Options spéciales](../dcs/special_options.md#jester-landing-callouts).

## Ravitaillement aérien

Jester fournit une assistance à la direction au pilote pendant l'AAR.

Dans un premier temps, il guidera le pilote vers le bon endroit pour le
pétrolier pour connecter le barrage, par exemple en disant

> "_Avancez de 5 pieds._"

![AAR connecté](../img/aar_connected.jpg)

Une fois connecté, il lèvera les yeux et se concentrera sur les marques colorées de la perche. Jester
signale chaque fois que le pilote dérive trop dans un sens ou dans l'autre, indiqué
par la perche affichant les marques jaunes ou rouges.

La marque parfaite au milieu s'appelle le _donut_.

![Marques de la perche](../img/aar_boom_ingame.jpg)

Voir
[3.2.2. Système de ravitaillement en vol](../systems/engines_and_fuel_systems/fuel_system.md#air-refueling-system)
pour plus de détails sur la façon d’effectuer l’AAR.

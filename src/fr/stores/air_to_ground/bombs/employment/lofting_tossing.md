# Lofting et lancer

Le Phantom prend en charge diverses méthodes pour lofter et lancer des bombes sur des cibles avec
une exposition minimale aux tirs au sol, tout en sacrifiant la précision.

Ces modes sont principalement conçus pour être utilisés avec des armes nucléaires, mais peuvent
également être utilisés efficacement avec des bombes conventionnelles lors de l'emploi d'une
grande quantité de munitions en attaquant une cible de plus grande surface.

Ils sont classés en modes loft ou lancer.

| Catégorie | Modes         | Angle de libération |
| -------- | ------------- | ------------- |
| Loftage | LOFT, T LAD   | en dessous de 90° |
| Lancer | O/S, INST O/S | au-dessus de 90° |

L'avantage du lofting est que le survol de la cible peut être évité, ce qui minimise
considérablement le risque de se faire attaquer. Les armes peuvent être larguées à de grandes
distances, permettant à l'avion de faire demi-tour avant d'entrer dans la zone dangereuse.

Si le survol de la cible est possible, les modes de lancer permettent plus de précision en
désignant visuellement la cible en initiant la manœuvre au-dessus de la zone cible.
L'avantage par rapport aux autres modes de déclenchement visuel est que le temps jusqu'à
l'impact de l'arme est considérablement augmenté, permettant à l'avion de gagner une certaine
distance avant l'impact. Ceci est crucial lors de l'emploi d'armes nucléaires.

## LOFT

Comme son nom l'indique, l'avion passe d'une altitude basse à une altitude plus élevée dans une
remontée (pull-up), lançant ainsi en cloche les munitions larguées vers un point pré-calculé
qui atteint la cible.

Le mode consiste essentiellement à calculer et régler une minuterie de pull-up basée sur les
paramètres de largage souhaités, tels que l'altitude, la vitesse et l'angle de loft.

Le pilote vole vers le point de référence, maintient le bouton de la bombe enfoncé et commence à
initier la manœuvre de traction au moment où l'avion donne le signal de traction.
Les armes se libèrent automatiquement lorsqu'elles atteignent l'angle de configuration du loft.

![loft](../../../../img/loft.jpg)

### Procédure - LOFT

La planification d'une attaque de loft nécessite un emplacement cible connu, de sorte que les
distances pour l'IP et les portées de bombes respectives puissent être calculées. Les tables
balistiques sont des références pour déterminer le modèle de livraison et la portée entre la
remontée et la cible.

Grâce à ces informations, le nombre de bombes peut être décidé, ce qui détermine la dispersion,
et connaissant la portée entre la remontée et la cible - la distance du point de remontée
jusqu'à l'IP peut être choisie.

Comme le chemin allant de l'IP au pull-up se déroule à une vitesse constante, cela peut alors être
utilisé pour déterminer le temps à partir de ladite distance pour l'entrée de la minuterie de
traction. Et avec la référence de la table balistique pour l'angle FAIBLE, le profil est défini.

> 💡 L'[outil de calcul de bombardement](../../../../dcs/bombing_computer.md) peut être
> utilisé pour calculer la valeur appropriée de la minuterie de pull-up.

Dès son entrée dans la zone cible, le pilote suit la trajectoire prévue jusqu'à l'IP, et une fois
le survol terminé, il appuie et maintient enfoncé le bouton de largage de la bombe pour lancer la
passe. En vol direct ou en crabe jusqu'au point de remontée, le pilote maintient le bouton de
largage de la bombe enfoncé, et le garde ainsi jusqu'à ce que les munitions souhaitées aient été
larguées.

En mode LOFT, l'[ARBCS](../../../../systems/weapon_systems/arbcs.md) se programme pour un
**programme de pull-up à 4 G**, et libérera automatiquement les munitions sélectionnées une fois
le bombardement lancé, la minuterie écoulée, et l'angle de tangage FAIBLE (gyroscopique)
prédéfini atteint.

Au début de la passe de bombardement, dès que le bouton de la bombe est pressé, l'ARBCS
remplace tout autre guidage de navigation fourni sur le
[ADI](../../../../cockpit/pilot/flight_director_group.md#attitude-director-indicator)
et prend le commandement des pointeurs pour afficher l'écart par rapport au profil d'attaque
programmé. Le pointeur vertical se décale dans la direction nécessitant une entrée de lacet
pour maintenir l'alignement de la cible. À l'approche du point de loft, l'aiguille horizontale
montre un écart par rapport à une trajectoire de vol de 1,0 G.

Lorsque la minuterie de pull-up termine de signaler la **traction à 4 G**, l'écart de l'aiguille
horizontale est relatif à la traction constante souhaitée de 4 G, avec la dérive initiale
représentant l'atteinte de 4 G de charge en deux secondes. Maintenir l'aiguille horizontale
centrée signifie que le pilote a augmenté et maintenu le G au taux approprié pour une précision
maximale. Le contrôle de l'ADI par l'[AN/AJB-7](../../../../systems/weapon_systems/arbcs.md) est
maintenu jusqu'à ce que le pilote relâche le bouton de la bombe après le largage de la dernière
munition souhaitée.

<iframe width="560" height="315" src="https://www.youtube.com/embed/p3Z4T1n69Rg?si=tG8GbYwbeepg_fU9"
title="Tutoriel de bombardement F-4E - Mode Loft" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Timed Low Angle Drogue Delivery - T LAD(D)

Conçu comme méthode de largage de bombes nucléaires tactiques, Timed Low Angle
Drogue Delivery est une variante de LOFT pour maximiser le temps d'impact en lofant
une bombe avec drogue à distance maximale de la cible.

Le mode effectue une pénétration à basse altitude, passant par une traction de 3,5 G dans un
profil de montée de 45 degrés qui permet un largage en cloche de l'arme au sommet de la montée,
permettant une tentative de fuite pendant que la drogue déployée de la munition ralentit sa
descente vers la cible. Bien que conçu à l'origine dans une optique nucléaire, ce procédé offre
encore une autre option de largage précis de bombes avec une option d'évasion en montée, ou en
montée puis descente, pour les cibles appropriées.

![ladd](../../../../img/ladd.jpg)

### Procédure - T LAD(D)

La planification de l'engagement T LADD commence dans les tables de bombardement, en déterminant
la bonne altitude d'entrée et la vitesse anémométrique pour l'arme sélectionnée, ainsi que le gain
d'altitude qui en résulte et le temps écoulé entre le début de la traction et le largage - qui
sera utilisé comme valeur de minuterie de largage (Release timer) - ainsi que la distance au sol
que cette manœuvre de montée fera parcourir à l'avion.

En utilisant cette distance comme référence, un angle d'approche approprié est déterminé, et
un point IP approprié est choisi. La distance entre l'IP et le point de remontée est évaluée par
rapport à la vitesse de profil prévue, ce qui fournit une autre valeur de temps - ce sera la
valeur de la minuterie de pull-up.

> 💡 Les valeurs de la minuterie peuvent être obtenues en utilisant le
> [Outil de calcul des bombardements](../../../../dcs/bombing_computer.md).

L'attaque est effectuée en survolant l'IP le long du cap d'interception souhaité vers la cible,
à la bonne vitesse et à la bonne altitude, et en actionnant le bouton de largage de la bombe
au survol de ladite IP, en le maintenant enfoncé pendant toute la manœuvre.

Cela démarre la minuterie de pull-up. Le
[ADI](../../../../cockpit/pilot/flight_director_group.md#attitude-director-indicator)
les aiguilles se centreront, puis montreront un écart par rapport au cap initial -
la verticale étant le roulis, l'horizontale étant le niveau pour maintenir l'altitude actuelle.

À l'expiration de la minuterie de pull-up, une tonalité d'avertissement de traction sera émise, et
le voyant de traction s'allumera ; par la suite, la minuterie de largage (Release timer)
commencera son décompte, l'aiguille ADI horizontale passera à afficher l'écart par rapport à
l'angle de tangage prévu de 3,5 G, puis se stabilisera une fois que les **45 degrés** à cabrer
seront atteints. Un timing et un chargement appropriés de la **traction à 3,5 G** maintiendront
l'aiguille centrée.

À l'expiration de la minuterie de largage, les munitions programmées seront larguées, le voyant
de traction s'éteindra et les aiguilles ADI seront rangées. Une fois la dernière munition
éjectée, le bouton de largage de la bombe peut être relâché et la manœuvre d'évasion souhaitée
effectuée.

## Chronométré sur l'épaule - O/S

Semblable à LOFT, ce mode permet de déployer des armes en fonction d'une minuterie de pull-up
qui représente la distance entre l'IP et la cible.

Les armes sont larguées lors d'une manœuvre de traction lorsque l'angle de déclenchement
configuré est atteint. Dans ce mode, les angles de déclenchement sont supérieurs à 90° ; jetant
ainsi efficacement l'arme par-dessus l'épaule, plutôt que de la lancer vers l'avant.

Le mode consiste essentiellement à calculer et régler une minuterie de pull-up basée sur les
paramètres de largage souhaités, tels que l'altitude, la vitesse et l'angle de lancer.

Le pilote vole ensuite vers le point de référence, maintient le bouton de la bombe enfoncé et
commence à initier la manœuvre de traction au moment où l'avion donne le signal de traction.
Les armes se libèrent automatiquement lorsqu'elles atteignent l'angle de lancer configuré.

### Procédure - O/S

La configuration du système LABS nécessite un temps (calculé à l'aide de la distance connue
entre l'IP définie et le point de survol de la cible, et de la vitesse prévue) et un angle de
largage calculé pour la vitesse et la munition résultantes, qui est entré dans le réglage
d'angle élevé (High Angle) ; cette valeur doit être supérieure à 90 degrés, et le réglage
d'angle faible ainsi que la minuterie secondaire peuvent être laissés à n'importe quelle valeur.

> 💡 La valeur de la minuterie de pull-up peut être calculée à l'aide de l'
> [Outil de calcul des bombardements](../../../../dcs/bombing_computer.md).

Voler le cap approprié à la bonne vitesse garantit le survol de la cible, et une fois la
minuterie écoulée, une tonalité audible sera entendue pour déclencher la traction, ainsi qu'avec
l'allumage du voyant de traction. Cette action de synchronisation est initiée en appuyant sur
le bouton de la bombe au survol de l'IP et en le maintenant enfoncé tout au long de la passe
d'attaque.

Comme le mode LOFT, les indications du signal de traction déclencheront également les pointeurs
horizontal et vertical de l'
[ADI](../../../../cockpit/pilot/flight_director_group.md#attitude-director-indicator)
pour afficher les indications de tangage et d'angle appropriées afin de maintenir l'orientation
correcte de l'avion pour une entrée précise au point de largage, et le **taux de traction cible
est de 4 G**. Le guidage conduit l'avion attaquant à travers un Immelmann, et les bombes seront
larguées à la valeur d'angle élevé entrée.

Une précision maximale est obtenue en maintenant l'aiguille horizontale centrée pendant toute
la durée du bombardement, et comme pour LOFT, l'ADI revient à sa fonction précédente une fois
que le bouton de la bombe est relâché après le largage des dernières munitions prévues pour la
passe.

## Instantané sur l'épaule - INST O/S

De plus, dérivé du mode Timed O/S, le bombardement Instantané sur l'épaule offre le même profil
combiné attaque/évasion que celui-ci contre des cibles d'opportunité.

Dans ce mode, la configuration d'une IP et d'une minuterie n'est pas nécessaire. Au lieu de cela,
la cible est désignée en appuyant une fois sur le bouton Bombe au-dessus de la cible, puis en
exécutant la manœuvre de traction peu de temps après.

<iframe width="560" height="315" src="https://www.youtube.com/embed/_cIqwKZs_bQ?si=fI1idwLOKbTxVEw9"
title="DCS F-4E | Le bombardement le plus inutile de DCS | Par-dessus l'épaule" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Procédure - INST O/S

Semblable au Timed O/S, un angle de déclenchement souhaité supérieur à 90° doit être configuré.

Une fois que l'avion est directement au-dessus de la cible, le pilote appuie et maintient enfoncé
le bouton de largage de la bombe et initie la **traction ailes à l'horizontale à 4 G** dans la
manœuvre d'Immelmann.

L'ordinateur LABS effectue les mêmes substitutions d'affichage de l'
[ADI](../../../../cockpit/pilot/flight_director_group.md#attitude-director-indicator) que les
modes Loft et Timed O/S, en plaçant l'aiguille directrice horizontale au tangage approprié pour
une traction à 4 G, et le directeur vertical affiche une déviation permettant de maintenir un
angle d'inclinaison approprié tout au long de la manœuvre.

Une fois l'angle de tangage nécessaire atteint, la séparation des munitions commence, et le
bouton de largage de la bombe peut être relâché une fois que toutes les munitions souhaitées ont
été éjectées de l'avion, réinitialisant ainsi l'affichage de l'ADI.

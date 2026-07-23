# Instruments de vol primaires

Les instruments de vol primaires comprennent tous les instruments nécessaires au vol de base du
F-4E.
Sont inclus l'indicateur de vitesse réelle (TAS), l'indicateur de vitesse au sol, les
accéléromètres,
des indicateurs combinés de vitesse et de Mach, des altimètres radar et barométriques, un compas
magnétique de secours,
indicateurs de vitesse verticale, différents indicateurs de virage et de dérapage ainsi que
l'attitude du cockpit
indicateurs.

## Indicateurs de vitesse réelle

![TASInd](../../img/pilot_true_airspeed_indicator.jpg)

Des indicateurs de vitesse réelle sont fournis dans les deux cockpits et portent une plage calibrée
de 150 à 1 500 nœuds. Le signal de vitesse est calculé dans l'ordinateur de données
aériennes,
en fonction de la température et des pressions saisies. Même si les indicateurs peuvent indiquer
jusqu'à 0 nœud,
le manque d'étalonnage en dessous de la plage indiquée signifie des valeurs inférieures à 150 nœuds
sont inexacts. À des vitesses élevées de changement de vitesse, il peut y avoir un décalage allant
jusqu'à
±10 nœuds en mesure. En fonctionnement normal, une erreur jusqu'à ± 5 nœuds
peut être présent. En cas d'échec, les rouleaux resteront bloqués sur leur position.

L'indicateur de vitesse vraie arrière est retiré pour l'équipement DMAS dans les avions afin
configuré ; cependant, TAS est fourni en tant que fonction DMAS.

## Indicateur de vitesse au sol

![wso_ground_speed_indicator](../../img/wso_ground_speed_indicator.jpg)

Un indicateur de vitesse sol est prévu dans le cockpit arrière, avec une plage de 0 à
1999 nœuds. Le signal de vitesse sol est fourni par l'ordinateur de navigation, avec la source
dépendant de la fonction INS. Si l'INS est en ligne, la valeur de la vitesse sol calculée
est basé sur la vitesse fournie et peut afficher des informations correctes aussi bas que
0 nœuds. Lorsque l'INS est hors ligne, l'ordinateur de données aérodynamiques effectue un calcul
en utilisant les informations sur le vent saisies par l'équipage, ce qui peut provoquer des erreurs
allant jusqu'à 150 nœuds s'affichant lorsque l'avion est au sol avec le frein de stationnement serré.
En cas d'échec, les rouleaux resteront bloqués sur leur position.

Une fois le DMAS installé, l'indicateur de vitesse au sol arrière est supprimé, car GS est un DMAS
fonction.

## Accéléromètres

![GGauge](../../img/pilot_accelerator.jpg)

Les deux cockpits conservent des accéléromètres pour surveiller la charge G ; les accéléromètres
portent 3 aiguilles - une pour le chargement G actuel, et une aiguille de chargement G positive
et négative pour la charge G la plus élevée détectée depuis que l'accéléromètre a été
réinitialisé. Pour réinitialiser la jauge, le bouton PUSH TO SET ramènera les pointeurs
d'enregistrement au positif 1 G.
pointeurs vers le positif 1 G.

## Indicateurs de vitesse/Mach

![MachInd](../../img/pilot_airspeed_mach_indicator.jpg)

Instruments purement mécaniques utilisant la pression totale du système Pitot-Static
et la pression statique de l'Air Data Computer, préalablement corrigées par le Compensateur
de Pression Statique avant de l'afficher dans la jauge.

Le composant anémomètre de cet instrument fonctionne en mesurant la pression d'air dynamique,
qui est la différence entre la pression totale et la pression statique.
Cette pression dynamique est étroitement liée au carré de la vitesse de l'avion.
À l’intérieur de l’indicateur se trouve un diaphragme ou une capsule anéroïde qui réagit aux
changements
dans cette pression dynamique. À mesure que la vitesse de l'avion varie, ce diaphragme se dilate ou
se contracte en conséquence. Ces mouvements mécaniques sont ensuite convertis en une lecture
affiché sur le cadran de vitesse, indiquant la vitesse de l'avion par rapport à l'air
autour d'elle.

Le nombre de Mach est déterminé d'une manière similaire à la mesure de la vitesse, principalement
par
la comparaison des pressions d'air dynamiques et statiques. Cette comparaison révèle la vitesse
de l'avion par rapport à la vitesse du son.

On trouve dans les deux cockpits un indicateur combiné vitesse/Mach. Les indicateurs
prévoir une échelle de vitesse fixe au milieu de l'indicateur (<num>1</num>), lisant les valeurs
de 80 à 850 nœuds, et une échelle de nombre de Mach tournante vers l'extérieur (<num>2</num>),
avec des lectures de 0,4 à 2,5 Mach. Un bouton à deux positions, à pousser et tourner (<num>4</num>)
offre à la fois un index de vitesse avec une plage fonctionnelle comprise entre 80 et 195 nœuds
(<num>3</num>), et un index de Mach avec une plage comprise entre 225 nœuds et 850 nœuds. Une petite erreur de frottement de
l'aiguille,
jusqu'à 5 nœuds peuvent parfois être remarqués.

En cas d'échec, l'aiguille de vitesse et l'échelle de Mach resteront bloquées dans leur position
restante.
Le temps moyen jusqu'à panne est de 1000 heures.

## Altimètre

![Altimètre](../../img/pilot_baro_altitude.jpg)

Un altimètre de type AAU-19 peut fonctionner à la fois en mode électrique - sur la base d'un
signal de pression statique électrique corrigé provenant de l'Altitude Encoder, ou en mode
mécanique (STBY) - à partir du calculateur de données aérodynamiques, préalablement corrigé par
le compensateur de pression statique.
La tolérance aux erreurs de l'instrument est de ±3 pieds en dessous de 80 nœuds et de ±5 pieds
au-dessus de cette vitesse.

En mode STBY, l'altimètre fonctionne sur la base d'un baromètre anéroïde, doté d'un
capsule métallique connue sous le nom de plaquette anéroïde. Cette plaquette se dilate ou se
contracte avec les changements
dans la pression de l'air extérieur. À mesure que l'avion monte, la diminution de la pression
atmosphérique provoque la dilatation de la plaquette. À l’inverse, lors de la descente, l’augmentation de la pression
atmosphérique entraîne
à la contraction de la plaquette. Ces mouvements mécaniques sont traduits via un système
de ressorts et de leviers, entraînant le mouvement de l'aiguille et des rouleaux de l'altimètre.
L'altimètre peut être calibré à la pression actuelle du niveau de la mer pour une altitude précise
lectures.

Dans le mode de fonctionnement principal, l'altimètre utilise un servomécanisme électrique
pour obtenir une indication précise.

Les appareils dans les deux cockpits offrent une plage fonctionnelle de 0 à 80 000 pieds. À
l'extérieur de l'indicateur est une échelle à aiguille (<num>5</num>), gradation en unités de 50
pieds avec
marquages ​​tous les 100 pieds (de 1 à 10). À gauche du centre se trouve le comptoir,
valeur croissante et décroissante par incréments de milliers de pieds sur la paire noire
de rouleaux, par incréments de cent pieds sur le blanc (<num>4</num>). Échelle barométrique
(<num>3</num>)
ajustement
peut être effectué à l’aide d’un cadran (<num>1</num>). Un interrupteur à trois positions
(<num>2</num>) fournit le
RÉINITIALISER
fonction permettant à l'altimètre d'extraire les signaux de l'ordinateur de données aérodynamiques
pour des conditions normales
fonctionnement et l'option STBY (veille) pour utiliser uniquement la pression pneumatique pour
déterminer l'altitude. Le mode veille est signalé par un drapeau rouge sur l'indicateur. Dans
En cas de panne d'un altimètre ou d'un calculateur de données aérodynamiques en fonctionnement
normal, le
L'indicateur STBY apparaîtra et ne pourra pas être réinitialisé. Cela peut également être suivi de
avertissements sur le panneau du télééclairage.

Les pannes courantes de l'appareil incluent :

- Altimeter Stuck : dégâts totaux, toutes les indications sont figées
- Échec du servo électrique : l'appareil est obligé de passer en mode de fonctionnement STBY
  (pression).
- Aiguille coincée : l'aiguille reste dans sa position
- Altitude Rollers Stuck : les rouleaux d'altitude restent dans leur position.
- Rouleaux de pression de référence bloqués : les rouleaux de pression de référence restent dans
  leur position
- Bouton de pression de référence cassé : la rotation du bouton n'a aucun effet sur l'appareil
- Interrupteur à trois positions cassé : la rotation de l'interrupteur n'a aucun effet sur
  l'appareil

## Boussole magnétique

![StbyMagComp](../../img/pilot_standby_magnetic_compass.jpg)

Un compas magnétique est fourni dans chaque cockpit pour être utilisé en cas de
panne de navigation ou du système électrique.

De par sa conception, la boussole est sujette à plusieurs erreurs. Premièrement, il expose
un certain degré d'inertie, qui se traduit souvent par une indication retardée. Par conséquent,
des oscillations de l'aiguille et ses mouvements de balancement peuvent être fréquemment observés.

Pour maintenir son alignement avec le champ de gravité terrestre, il peut pivoter d'environ 10
degrés.
dans les axes de tangage et de roulis. Cependant, comme les lignes du champ magnétique terrestre ne
sont pas
parallèlement à sa surface, l'aiguille a tendance à « plonger » légèrement vers le haut ou le bas
vers le
pôles magnétiques. Cet effet « plongeant » provoque des erreurs, particulièrement visibles lors des
virages
et l'accélération.

Dans l'hémisphère nord, la boussole sera en retard lors des virages depuis le nord et
en avance lors des virages vers le nord. L'inverse est vrai dans l'hémisphère sud.

Lors de l'accélération
sur les caps est ou ouest dans l'hémisphère nord, la boussole se tournera par erreur vers
le nord, et en décélérant, elle se tournera vers le sud. Dans l'hémisphère sud,
les effets opposés se produisent lors de l’accélération et de la décélération.

## Indicateurs de vitesse verticale (VVI)

![VVI](../../img/pilot_vertical_velocity_indicator.jpg)

Des indicateurs VVI sont fournis dans les deux cockpits et indiquent le taux de montée ou
descente (en pieds par minute) de l'avion, calculée via la pression atmosphérique
modifier à l’aide de la pression statique corrigée pneumatiquement provenant de l’ordinateur de
données aérodynamiques.

L'appareil se compose d'un diaphragme logé dans un boîtier scellé. Le diaphragme
et l'espace qui l'entoure sont reliés à la source de pression statique de l'avion.
Cependant, le diaphragme est conçu avec une fuite calibrée, provoquant la pression à l'intérieur
elle évolue plus lentement que celle de la zone environnante. Ce retard intentionnel résulte
dans une différence de pression entre l'intérieur et l'extérieur du diaphragme. Le VVI traduit
cette différence de pression en mouvement mécanique d'une aiguille, qui affiche alors
le taux de montée ou de descente de l'avion.

De par sa conception, le taux de montée ou de descente affiché sur l'indicateur est sujet à une
légère
retard par rapport au mouvement vertical réel de l'avion. Ce décalage dans le F-4 se situe entre
4 et 7 secondes. La jauge, qui mesure entre -6 000 et 6 000 pieds par minute, peut avoir
une erreur de position allant jusqu'à 50 fpm, des erreurs d'échelle jusqu'à 300 fpm pour des débits
proches de 5 000 fpm,
et des erreurs de friction d'un maximum de ± 150 fpm. En cas de panne, l'indicateur peut rester
bloqué,
ou l'une de ses fuites peut se boucher. Si la fuite de pression statique est bloquée, l'aiguille va
progressivement
passer à une indication de 0 fpm à mesure que les pressions s'égalisent et restent constantes. A
l'inverse, si le
La fuite calibrée est bouchée, la pression retardée ne changera pas, ce qui fera bouger l'aiguille
avec
changements d'altitude, semblables à un altimètre, mais atteignant rapidement ses limites
opérationnelles.
Le temps moyen entre pannes pour cet instrument est de 1 000 heures.

## Altimètre radar

![RadAlt](../../img/pilot_radar_altitude.jpg)

Situé dans le cockpit avant, l'altimètre radar a une plage fonctionnelle de 0 à
5 000 pieds au-dessus du niveau du sol. L'altimètre radar fonctionne de 0 à 30 degrés
en angle d'inclinaison, ou un angle de 0 à 35 degrés en tangage. L'échelle du cadran lit de 0 à
5 000 pieds, et le système comprend un voyant rouge d'avertissement de basse altitude (<num>2</num>)
qui
s'allume lorsque l'avion est détecté en dessous d'une altitude définie par le pilote.

L'activation et le réglage de la hauteur d'avertissement de l'altimètre radar se font avec le
même bouton (<num>1</num>); tourner le bouton dans le sens des aiguilles d'une montre active
initialement l'indicateur,
supprimer le drapeau OFF affiché ; continuer à tourner le bouton déplace le
repère de référence qui déterminera l'altitude qui déclenche la dépression
avertissement d'altitude. Un autotest, déclenché en appuyant sur la commande de fonction
interrupteur, affiche 35 ± 15 pieds. Au-dessus de 5 000 pieds ou avec des signaux peu fiables, le
le pointeur se cache derrière un masque, affichant le drapeau OFF. Le OFF apparaît également lorsque
le pouvoir est perdu ; l'indicateur présentera alors la dernière altitude détectée ci-dessus
niveau du sol au moment où cela se produit.

## Indicateurs de virage et de dérapage

| Pilote | WSO |
|---------------------------------------------------------------------|-------------------------------------------------------|
| ![Pilote_turn_and_slip](../../img/pilot_turn_and_slip_indicator.jpg) | ![WSO_turn_and_slip](../../img/wso_4_minute_turn.jpg) |

Dans le cockpit avant, un indicateur de virage et de dérapage est ajouté à l'ADI sur le
tableau de bord; tandis que l'aiguille fournit la bonne direction de virage,
basé sur le signal d'un gyroscope de fréquence dans le système AJB-7, il le fait
ne fournit pas d’informations appropriées sur le taux de virage.

Un indicateur de virage et de dérapage conventionnel de 4 minutes avec son propre indicateur
conventionnel
Le gyroscope monté horizontalement se trouve sur le panneau arrière du cockpit.

Pour exécuter un virage contrôlé (360° en 4 minutes), placez l'aiguille verticale de l'arrière
indicateur de virage sur l'une des marques de chaque côté (taux de virage de 1,5 degrés par seconde)
et assurez-vous que l'indicateur de glissement en bas est centré pour éviter tout retournement ou
sous-tournage.
en raison d'une banque incorrecte.

## Indicateur d'attitude du cockpit arrière

![Wso_rear_cockpit_attitude_indicator](../../img/wso_adi.jpg)

L'AJB-7 fournit des informations d'attitude à l'indicateur d'attitude situé sur le
tableau de bord arrière du cockpit quel que soit le sélecteur du système de référence
position. Un bouton de trim offre la possibilité d'ajuster la sphère d'attitude à
référencer correctement l'avion. Si l’alimentation est coupée du
Indicateur ou AJB-7, le drapeau OFF s'affichera.

L'appareil fonctionne électroniquement et dispose de deux servos : un servo de tangage et un servo
de roulis.
L'indication de tangage est limitée à une plage de ±90 degrés, tandis que l'indication de roulis
permet un mouvement continu sur tout le cercle de 360 ​​degrés. Dans le cas
d'une panne de servo (avec un temps moyen entre pannes de 800 heures), le servo concerné
restera bloqué dans sa dernière position ou direction.

## Système Pitot-Statique

![ext_pitot_tube](../../img/ext_pitot_tube.jpg)

Le système Pitot-Static fournit une pression d'impact et statique au vol
l'instrumentation, l'ordinateur de données aérodynamiques et les commutateurs pilotés par la
vitesse.
Un seul tube de Pitot, monté sur l'avion, fournit la pression totale
lecture, tandis que la pression statique est mesurée par deux ports statiques situés
sur une seule perche sur le nez de l'avion. Le tube de Pitot et les ports statiques
sont sujets aux blocages causés par l’accumulation de glace. Pour atténuer le givrage de la tête de
Pitot,
un interrupteur thermique Pitot se trouve dans la console droite du cockpit avant.

> 🟡 ATTENTION : L'interrupteur Pitot Heat doit toujours être allumé avant le décollage car
> sinon l'admission du soufflet pourrait geler, entraînant des problèmes de commandes de vol,
> ainsi que des problèmes de vitesse ou d'altimètre. Cependant, le Pitot Heat ne devrait pas être autorisé
> courir plus d'une minute au sol sans vitesse suffisante, car cela pourrait
> endommager l'instrument.

## Système informatique de données aérodynamiques

À l'aide d'une variété d'entrées statiques, d'attitude et environnementales, les données aériennes
L'ordinateur (ADC) fournit les entrées pneumatiques et électriques aux principaux instruments de
vol,
AFCS, système de conduite de tir, système d'induction d'air, le INS, le LCOSS, ordinateur de
navigation,
et gère le système de cloche de dérivation variable pour les moteurs. Vol
des conditions météorologiques telles que la glace ou la pluie peuvent entraîner des erreurs dans
l'exécution de
ces systèmes jusqu'à ce que la condition soit résolue, et cela doit être pris en compte
compte.

![Schéma ADC](../../img/air_data_comp_scheme.jpg)

## Compensateur de pression statique

![pilot_cadc_switch](../../img/pilot_static_pressure_switch.jpg)

![pilot_cadc_switch](../../img/pilot_static_corr_off_light.jpg)

Le compensateur de pression statique (SPC) effectue une correction du décalage altimétrique
causée par un changement rapide d’altitude. Le SPC doit être réinitialisé après le démarrage du
moteur sur
chaque vol ; ceci est effectué à l'aide du commutateur CADC près des manettes des gaz en
en sélectionnant RESET CORR, puis en sélectionnant NORM. Si un problème survient pendant le vol
provoquant un avertissement STATIC CORR OFF, une tentative de réinitialisation du SPC peut être
effectuée
avec RESET CORR. Si l'avertissement STATIC CORR OFF ne disparaît pas, il faut faire preuve de
prudence.
prises dans toutes les manœuvres de plongée, car un décalage altimétrique important se produira.

## Voyant SORTIE ENCODEUR ALT

L'unité d'encodeur d'altitude fournit des données d'altitude précises (jusqu'à 100 pieds) au
IFF pour le contrôle du trafic Mode C, ainsi qu'effectue la correction par rapport à
l'entrée pneumatique à l'altimètre. Si le SPC est hors ligne, l'ALT ENCODER
Le voyant OUT s'allumera également pour confirmer les performances de l'altimètre en retard, et
problèmes potentiels liés au mode C.

![pilot_alt_encoder_out](../../img/pilot_alt_encoder_out.jpg)

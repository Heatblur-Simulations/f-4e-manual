# Système de carburant

Le système de carburant du Phantom est dupliqué ; c'est-à-dire leur pompe et leur alimentation
la disposition est la même pour les moteurs gauche et droit, et ils partagent le
même ensemble de cellules de carburant. Carburant interne du fuselage entre les 7 cellules et l'aile
les réservoirs représentent un peu plus de 12 000 livres de JP-4. Avec deux réservoirs d'ailes
externes de 370 gallons,
cette valeur augmente à plus de 16 800 livres. Ajout du réservoir central de 600 gallons
portera l'état total de carburant de l'avion à un peu moins de 20 800 livres de carburant.

<iframe width="560" height="315" src="https://www.youtube.com/embed/2u2yLEM1iHM?si=5a47nAUGCE7PZUip"
title="Guide des systèmes de carburant du F-4E | DCS Monde" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> 💡 L'[EFB](../../dcs/efb.md#fuel-page) fournit une page Carburant, donnant des informations
> détaillées sur le système en cours de vol.

## Séquence de transfert

![f4_fuel_system](../../img/f4_fuel_system.jpg)

Le F-4 transporte deux réservoirs d'aile internes, ainsi que sept cellules de carburant sur la
longueur du fuselage, avec la cellule 1 reposant juste derrière le cockpit arrière, et les
cellules restantes numérotées dans l'ordre à l'arrière de l'avion. La cellule 1 est la
cellule d'alimentation pour les moteurs ; les cellules 4 et 6 disposent chacune d'une pompe de
transfert hydraulique et d'une pompe de transfert électrique pour alimenter en carburant les
cellules 1 et 2. Les cellules restantes du fuselage
effectuent une alimentation par gravité dans les cellules 1, 4 ou 6. La cellule 2 alimente la cellule
1, la cellule 3 alimente
la cellule 4 ; et la cellule 5, ainsi que la cellule 7 alimentent la cellule 6. Avec cette
disposition, l'équilibre du centre de gravité est maintenu le long de la ligne médiane. La cellule 7
est la dernière cellule
pour lancer le transfert dans la séquence, et ne commence que lorsque le carburant total dans
les cellules 1 et 2 pèse moins de 1 800 livres.

Le transfert de carburant de l'aile et des réservoirs externes s'effectue par prélèvement d'air.
pressurisation une fois en vol. Le carburant du réservoir interne de l'aile est transféré dans
cellules du fuselage 1 et 3, tandis que le carburant des réservoirs externes est équilibré entre
cellules 1, 3 et 5.

> 💡 Les réservoirs internes de l'aile et les réservoirs externes ne seront pas transférés lorsqu'ils ne sont pas sous pression.
> C'est le cas soit avec le train sorti, soit avec la porte de l'AAR ouverte.

Lorsque l'avion atteint un état de faible carburant, le transfert automatique de carburant s'active,
forcer les vannes de l'aile interne et des réservoirs externes à s'ouvrir indépendamment de ce qui a
été sélectionnée sur le panneau.

> 💡 Le transfert automatique de carburant, une fois activé, ne peut être à nouveau désactivé qu'en
> faire fonctionner l'interrupteur de ravitaillement en air. Ceci est important, car la plupart des interrupteurs d'alimentation en carburant
> le panneau système sont ignorés lorsqu’ils sont activés. Une indication pour l'automatique
> le transfert est actif, les trois voyants de carburant du réservoir externe sont allumés
> quel que soit leur statut réel.

## Commutateur de transfert d'aile interne

![Transfert d'aile interne](../../img/pilot_internal_wing_transfer.jpg)

Si nécessaire, un interrupteur à deux positions est disponible pour désactiver le transfert
provenant des réservoirs internes de l'aile. Trouvé sur le panneau de commande de carburant, l'aile
interne
Le commutateur de transfert peut être basculé entre NORMAL et STOP TRANS.

## Commutateur de transfert externe

![Commutateur de transfert externe](../../img/pilot_external_transfer_switch.jpg)

Le transfert du réservoir externe est contrôlé par le commutateur de transfert externe ; trouvé sur
le panneau de commande de carburant, l'interrupteur a trois positions : CENTER, OFF et OUTBD
(Hors-bord), avec OUTBD faisant référence aux réservoirs externes de l'aile.

Il n'est pas possible de transférer depuis les réservoirs latéraux et les réservoirs externes en
même temps. Si les deux sont sélectionnés, les réservoirs externes seront prioritaires.

## Système de suralimentation en carburant

![BoostInd](../../img/pilot_boost_pump_indicators.jpg)

Le flux de la cellule 1 vers les moteurs est assuré par une paire de pompes de suralimentation. Les
pompes
sont installées au fond du réservoir pour fournir du carburant en cas de
excursion G négative. Le fonctionnement de ces pompes peut être confirmé sur le Carburant
Indicateurs de pression de la pompe de suralimentation situés dans le cockpit avant. Débit de la
pompe au ralenti du moteur
le taux est de 30 PSI, ± 5 livres. Pour confirmer une vérification au sol, une paire de Boost Pump
Check
Les interrupteurs se trouvent sur le panneau de commande de carburant. En maintenant l'un de ces
interrupteurs
la position CHECK effectuera un arrêt du moteur en raison du robinet d'arrêt
en cours d'ouverture et fournira des informations sur l'indicateur de pression correspondant.

## Système d'indication de la quantité de carburant

## Témoin d'avertissement de niveau de carburant bas

![pilot_fuel_low](../../img/pilot_fuel_level_low.jpg)

Lorsque le capteur de la cellule 2 détecte un poids de carburant inférieur à 1 650 ± 200 lb, le
L’avertissement FUEL LEVEL LOW s’allumera sur le panneau lumineux avant du cockpit.
Cet éclairage est indépendant du système d'indication de la quantité de carburant et peut
être révélateur d’un échec de transfert.

## Voyants de carburant des réservoirs externes

![pilot_external_fuel_tanks](../../img/pilot_external_tanks_fuel_lights.jpg)

Chaque fois qu'il est détecté qu'un réservoir de carburant externe ne coule pas de carburant dans le
fuselage, une lumière correspondante s'allumera sur le panneau télélumineux - L EXT
FUEL, CTR EXT FUEL ou R EXT FUEL. Ces lumières ne s'allumeront que pendant
transfert externe respectif - c'est-à-dire, si OUTBD est sélectionné, CTR EXT FUEL
ne peut pas éclairer, et vice versa. Parce que le transfert peut se produire par intermittence en
raison
s'écoule des réservoirs au-delà de la consommation de carburant du moteur, le témoin s'allume
n'indique pas immédiatement un réservoir externe vide et doit être vérifié
contre le système d’indication de quantité.

> 💡 Une bonne indication générale que les réservoirs sont vides est le total de carburant
> compteur affichant une valeur inférieure à 11.000 livres. Pour confirmer, volez calmement et à niveau et
> regardez si le voyant reste allumé et si la jauge de carburant ne monte pas pendant au moins
> une ou deux minutes.

De plus, les lampes s'allumeront chaque fois que l'interrupteur de ravitaillement en air est réglé
sur
EXTEND, tandis que TOUS LES RÉSERVOIRS sont sélectionnés pour le ravitaillement, provoquant le
réservoir externe
les vannes s'ouvrent sans permettre au carburant de s'écouler.

De plus, les lampes s'allumeront lorsque le carburant sera bas et que l'avion
active le transfert automatique de carburant, forçant les vannes à s'ouvrir.

> 💡 Le système n'a aucune connaissance du chargement réel des réservoirs externes. Le
> les lampes sont simplement liées au fait que le robinet de carburant respectif est ouvert et qu'il n'y a pas de carburant
> le débit est détecté. Autrement dit, même en volant sans réservoir externe, tout
> trois lampes s'allumeront lorsque l'avion ouvrira les vannes correspondantes
> pendant l'AAR ou le transfert automatique de carburant.

Lors d'un ravitaillement en vol, ou lors d'un ravitaillement au sol et que les réservoirs ont
atteint un état complet, les lampes des réservoirs externes pleins, trouvées sous la verrière
arc, s'allumera.

## Système de ravitaillement en vol

![f4_ext_air_to_air_refuel](../../img/ext_air_to_air_refuel.jpg)

Pour le ravitaillement en vol, le F-4E utilise un système de prise compatible avec les hautes
ravitaillement en carburant sous pression de type USAF. Avec ce système, le carburant peut être
livré à
le Phantom à une vitesse allant jusqu'à 3900 livres par minute. Le carburant reçu est livré
dans la cellule 2 du fuselage, puis égalisé à travers le reste des cellules de l'avion,
réservoirs d'aile et, s'ils sont installés et sélectionnés, des réservoirs externes.

> 💡 Bien que le taux de ravitaillement maximal pris en charge soit d'environ 3 900 livres par minute, le
> le taux réel en pratique est très dynamique et dépend des réservoirs qui peuvent
> prends toujours du carburant. Le taux de ravitaillement est limité par la disposition des canalisations et leur
> dimensions. Par exemple, en descendant uniquement vers les réservoirs externes gauche et droit
> entraînera plutôt un taux de ravitaillement de 1 400 livres par minute. Ravitaillement interne
> les réservoirs 1 à 7 prennent environ une à deux minutes. Remplir également les réservoirs des ailes et
> les réservoirs externes prendront quatre à cinq minutes supplémentaires.

| Portée de la perche | Marques de la perche |
| --------------------------------- | ------------------------------------- |
| ![Case AAR](../../img/aar_box.jpg) | ![Marques de la perche](../../img/aar_boom.jpg) |

> 💡 Le ravitaillement complet prend environ entre une et trois minutes.

![pilot_fuel_panel](../../img/pilot_fuel_control_panel.jpg)

<iframe width="560" height="315" src="https://www.youtube.com/embed/nLNVyxVZAiw?si=bEah6gsO2qFGV3eC"
title="DCS F-4E Phantom II Tutoriel de ravitaillement en vol" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Interrupteur de ravitaillement en air

La préparation au ravitaillement en vol s'effectue en basculant l'interrupteur de ravitaillement
en vol (<num>4</num>) sur EXTEND ; cela étend le réceptacle, allume les lampes visuelles du
réceptacle, dépressurise les cellules de carburant, active les pompes de transfert pour
redistribuer le carburant reçu afin de maintenir le CG, et active le voyant READY de
ravitaillement en vol. RETRACT permet d'abaisser le réceptacle et de rétablir la pressurisation
et le fonctionnement normal des réservoirs.

Si, pendant l'AAR, la perche se déconnecte et que le voyant DISENGAGED s'allume, cela
Le commutateur doit être basculé sur RETRACT et de nouveau sur EXTEND pour réinitialiser le système
et
permettre à la perche de se connecter à nouveau.

### Commutateur de sélection de ravitaillement

Le commutateur de sélection de carburant à deux positions (<num>3</num>) offre des options pour deux
modes de ravitaillement : réservoirs internes du fuselage et des ailes (INT UNIQUEMENT), et
TOUS LES RÉSERVOIRS, utilisés pour inclure les réservoirs externes dans l'opération de
ravitaillement.

### Lumière prête

![pilot_aar_lights](../../img/pilot_aar_lights.jpg)

Avec la prise déployée et les réservoirs dépressurisés, le voyant READY s'allume
pour informer le pilote que le ravitaillement peut commencer. La lampe s'éteindra lorsque la
perche sera connectée au réceptacle, ou que le réceptacle sera abaissé par la commande RETRACT
sur l'interrupteur de ravitaillement en air.

### Lumière désengagée

Si la perche se sépare du réceptacle, la lampe DISENGAGED s'allumera. En cas de signal
DISENGAGED, le système doit être réinitialisé pour continuer à faire le plein. Le système doit
être réinitialisé en basculant l'interrupteur de ravitaillement en air.

### Bouton de déverrouillage du ravitaillement en vol

![pilot_aar_release_button](../../img/pilot_stick_aar_button.jpg)

Sur le manche de commande du siège avant se trouve le bouton de déverrouillage du ravitaillement
en vol. Son but principal est de libérer le réceptacle de la perche en cas de cycle de
ravitaillement manuel (celui dans lequel l'opérateur de la perche ne peut pas forcer une
déconnexion à distance), ou d'effectuer un désengagement à la demande en fonction des conditions
de vol ou d'une situation d'urgence. Appuyer sur le bouton désengagera la perche et allumera
le voyant DISENGAGED.

### Disjoncteur AIR REFUEL RECPT

![wso_air_refuel_recpt_cb](../../img/wso_cb_air_refuel.jpg)

En cas de situation DISENGAGED lors du ravitaillement en vol, le système est réinitialisé
soit en actionnant l'interrupteur de ravitaillement en air, soit en utilisant le disjoncteur
AIR REFUEL RECPT, trouvé sur le panneau de disjoncteurs n°2 dans le cockpit arrière - côté
droit, quatrième colonne, disjoncteur supérieur.

### Voyants Pleins des réservoirs externes

Trois indicateurs - L.H. FULL, CTR. FULL et R.H. FULL (main gauche, centre, main droite)
confirment que les réservoirs externes ont été remplis pendant
le processus de ravitaillement en vol. Les lampes resteront allumées jusqu'à ce que le réceptacle
de ravitaillement en vol soit rétracté.

## Système de vidange de carburant

![InternalWingFuelDump](../../img/fuel_dumping.jpg)

Le carburant des ailes peut être largué directement, plutôt que de nécessiter un transfert dans
le fuselage, à l'aide du commutateur de décharge de carburant de l'aile.

![InternalWingFuelDump](../../img/pilot_fuel_dump_switch.jpg)

Ce commutateur, lorsqu'il est sélectionné sur DUMP, libérera le carburant des réservoirs internes
de l'aile à leurs lignes de déchargement au bord de fuite du repli de l'aile. Le débit dépend
du réglage de la puissance et de l'attitude ; un régime moteur plus élevé et une assiette à
cabrer positive augmentent
la vitesse de déversement, tandis qu'un régime plus faible et une assiette à piquer réduisent la
vitesse de déversement.

> 💡 En vol en palier à 85 % RPM, le débit de déversement est d'environ 650 livres par
> minute, ce qui conduit à la vidange totale du carburant après environ 15 minutes.

## Système de ventilation du carburant

Pour éviter les problèmes de surpression, l'avion fournit un système de ventilation.

En cas de surpression, les réservoirs purgeront le carburant jusqu'à ce que la pression
soit corrigée.

Le processus est entièrement automatisé. Les réservoirs d'ailes externes sont évacués par le
système de vidange de carburant, tandis que toutes les autres cellules sont connectées au mât de
ventilation sous le gouvernail.

> 💡 Dans des conditions normales, une surpression ne se produit que momentanément lorsque
> les réservoirs de carburant internes des ailes sont pressurisés et prêts pour le transfert.
> C'est le cas chaque fois que le train est rentré ou que la porte de l'AAR est fermée.

![Purge du carburant](../../img/f4_ext_farting.jpg)

> 💡 Une ventilation de carburant peut également se produire lors d'un vol lent et inversé, en raison
> de fortes forces G négatives. Cela peut souvent être observé lors de voltige.

# Livraison offset - OFFSET

Le bombardement offset offre une capacité de bombardement aveugle, avec des profils de
bombardement à haute et basse altitude, en utilisant l'intégration complète du
[WRCS](../../../../systems/weapon_systems/wrcs.md),
[INS](../../../../systems/nav_com/ins.md), et
[radar](../../../../systems/radar/overview.md). Le bombardement offset
peut être utilisé à la fois dans des conditions visuelles et aux instruments, pour larguer des
bombes ou des munitions distribuées (avec le mode RKTS & DISP).

L'équipage choisit un point de référence (IP) connu et obtient la position de la cible au moyen
d'un décalage par rapport à ce point de référence. Après avoir configuré l'avion avec
les valeurs correspondantes, l'attaque est alors menée en désignant le point de référence
au lieu de la cible réelle. L'avion peut alors larguer automatiquement les armes en fonction
des valeurs de décalage.

## Point d'identification

La configuration d'une attaque à la bombe Offset est basée sur la sélection d'une IP
par rapport à un emplacement cible connu. Pour une attaque visuelle, on l'appelle VIP - le
Point d'identification visuelle, et le déclenchement de l'aide à la navigation est
réalisé avec un survol direct du VIP.

Dans une attaque aux instruments, l'IP est appelée le RIP - le point d'identification
radar, et l'acquisition de ce point à l'aide d'un verrou radar en
mode MAP-PPI génère une solution de navigation vers la cible.

Lorsqu'elle est choisie lors de la planification, la position du VIP ou du RIP par rapport à la
cible détermine une paire de valeurs de décalage (d'où le nom du mode) ; l'une dans l'
axe Nord/Sud, l'autre Est/Ouest. Les deux décalages sont notés en pieds, et le
décalage maximum dans chaque axe est de 99 900 pieds, soit 16,44 milles marins.

L'altitude de l'IP est également déterminée lors de la planification de la mission, et la
sélection est effectuée à l'aide des tables de recherche pour l'arme respective, l'altitude
au-dessus de la cible, et la vitesse, en tenant compte de la portée de la bombe. Lors de la
préparation des entrées WRCS, les décalages sont toujours référencés depuis l'IP vers la cible.
La sélection d'une IP doit être aussi proche que possible de la cible pour minimiser la dérive
du système grâce à un temps et une distance de navigation plus courts, et l'approche de l'IP
doit être effectuée en mettant l'accent sur la minimisation des manœuvres nécessaires pour
mettre le nez sur la cible après l'acquisition de l'IP (RIP) ou son survol (VIP).

> 💡 L'[outil de calcul de bombardement](../../../../dcs/bombing_computer.md) peut être
> utilisé pour convertir les valeurs de décalage de la portée et de la direction directes en
> distances N/S et E/O requises.

![Limites IP décalées](../../../../img/offsetiplimits.jpg)

### Considérations RIP à basse altitude

Il convient de noter, en particulier dans le mode RIP, la nécessité de compenser la différence
d'altitude dans le cas où la pénétration vers la cible se ferait en dessous de l'altitude
du RIP lui-même. Comme les calculs effectués par le
[WRCS](../../../../systems/weapon_systems/wrcs.md) et le système de navigation sont
mécaniques, sélectionner une altitude cible RIP au-dessus de la trajectoire peut provoquer des
dommages dus aux interférences. Pour atténuer ce problème, procédez comme suit :

1. Notez l'altitude d'approche au-dessus du niveau de la mer (MSL).
2. Soustrayez l'altitude d'approche MSL de l'altitude RIP au-dessus de MSL.
3. Soustrayez la valeur résultante trouvée en 2. de l'altitude d'approche.

La valeur résultante est utilisée pour la valeur d'altitude cible, et le pilote vole selon
l'assiette d'approche prévue pendant les opérations de gel et d'insertion de la cible, comme
d'habitude.

## Procédure

### IP visuelle

Avant le survol de l'IP, les décalages N/S et E/W, la portée de largage (x10 selon la
fenêtre, ou en utilisant le modificateur de commutateur x100 sur le
panneau d'initiation du [WRCS](../../../../systems/weapon_systems/wrcs.md)), ainsi que
le réglage d'avance de largage souhaité doivent être saisis. De plus, le moment et le
nombre de largages souhaités doivent être sélectionnés sur le
[AWRU](../../../../systems/weapon_systems/awru.md).

L'attaque Offset Visual IP commence au survol du VIP, l'avion étant à l'altitude et à la vitesse
de largage souhaitées ; lorsque l'avion survole le VIP, le WSO appuie sur le bouton Freeze
Signal, suivi du bouton Target Insert Signal sur le panneau de commande du curseur ; cela
déclenche le suivi de cible de l'[INS](../../../../systems/nav_com/ins.md). _Freeze_ mémorise
la position sous le curseur radar, qui par défaut est la position actuelle de l'avion. _Insert_
applique ensuite les données de décalage saisies sur la position mémorisée pour désigner les
coordonnées de la cible. À ce moment, l'
[ADI](../../../../cockpit/pilot/flight_director_group.md#attitude-director-indicator) vertical,
la vue,
[BDHI](../../../../cockpit/wso/upfront_indicators.md#bearing-distance-heading-indicator-bdhi),
et
[HSI](../../../../cockpit/pilot/flight_director_group.md#horizontal-situation-indicator)
afficheront tous un décalage par rapport au point de largage calculé, ainsi que la portée
jusqu'à la cible sur le HSI et le BDHI.

L'achèvement de l'attaque est effectué par le pilote en manœuvrant l'avion pour aligner sa
trajectoire sur le point de largage, en maintenant la vitesse et l'altitude de largage prévues,
et, avant d'atteindre le point de largage, en appuyant sur le bouton de largage de la bombe et en
le maintenant enfoncé. Si le bouton de largage de la bombe est relâché avant le largage des
munitions, mais à une portée supérieure à la portée de largage programmée, l'attaque peut être
récupérée en appuyant de nouveau sur le bouton de largage de la bombe et en le maintenant enfoncé
jusqu'à ce que le largage se produise. Lorsque cela se produit, le voyant de traction s'allumera
pour confirmer le début du largage. Si le bouton de largage de la bombe n'est pas enfoncé avant
que le point de largage ne soit dépassé, les bombes ne seront larguées qu'une fois la cible
dépassée ; il convient donc de relâcher le bouton de la bombe pour annuler la passe avant un
largage erroné.

Une fois l'attaque terminée, le programme de navigation sur la cible définie est
maintenu. L'avion peut tenter une nouvelle attaque, bien qu'une dérive naturelle de l'INS puisse
réduire la précision de cette deuxième attaque.

![Décalage IP visuel](../../../../img/offsetvip.jpg)

## IP radar

Avant le Freeze RIP et l'insertion de cible, les décalages N/S et E/W, l'altitude RIP,
la portée de largage (x10 selon la fenêtre, ou en utilisant le modificateur de commutateur x100
sur le panneau d'initiation du [WRCS](../../../../systems/weapon_systems/wrcs.md)), ainsi que
le réglage d'avance de largage souhaité doivent être saisis. De plus, le moment et le
nombre de largages souhaités doivent être sélectionnés sur le
[AWRU](../../../../systems/weapon_systems/awru.md). Avant l'initiation, le
pilote doit entrer dans la zone cible à l'altitude de profil et à la vitesse souhaitées.
Le WSO devrait avoir l'APQ-120 préparé pour l'attaque avec une bonne
image [radar](../../../../systems/radar/overview.md) en mode MAP-PPI, mode NOR stab,
balayage LARGE et une portée de 10 ou 25 milles, avec un retour observé du
RIP.

Le lancement de l'attaque commence par le placement du curseur Along Track (présenté
comme un hémisphère croissant sur l'affichage radar définissant la portée du RIP) à
proximité, mais en dessous, du retour RIP prévu. Une fois ceci réglé, le curseur Cross
Track (une ligne verticale) est orienté sur le RIP. Une fois l'intersection
définie, le WSO attend momentanément que la portée du RIP diminue et tombe sur
l'intersection. À ce moment, le WSO appuie sur le bouton Freeze. Cela déclenche le
suivi radar du RIP, et donne au WSO l'occasion d'affiner
le point d'intersection entre les curseurs Along Track et Cross Track. Une fois le
point précis atteint, le WSO appuie sur le bouton Insert Target, qui transfère le
guidage de la cible à l'[INS](../../../../systems/nav_com/ins.md) et
effectue un déplacement immédiat des curseurs Along Track et Cross Track depuis le
RIP vers la cible décalée.

À ce moment, l'INS présente des informations de guidage et de portée sur le
[ADI](../../../../cockpit/pilot/flight_director_group.md#attitude-director-indicator),
la vue, le
[BDHI](../../../../cockpit/wso/upfront_indicators.md#bearing-distance-heading-indicator-bdhi),
et le
[HSI](../../../../cockpit/pilot/flight_director_group.md#horizontal-situation-indicator).
Le WSO devrait continuer à surveiller l'affichage radar - si la cible réelle
apparaît sur l'écran à mesure que la portée diminue, l'altitude réelle connue de
la cible peut être saisie sur le panneau [WRCS](../../../../systems/weapon_systems/wrcs.md)
et les curseurs Along Track et Cross Track peuvent être retouchés à l'aide de leurs
commandes pour augmenter encore la précision du largage.

Avant d'atteindre la portée de largage, le pilote doit appuyer et maintenir enfoncé le bouton de
largage de la bombe. Une fois les bombes larguées, le voyant de traction s'allumera pour
confirmer le largage.

Dans le cas où un profil RIP, en raison de conditions météorologiques défavorables, passerait à
un profil VIP possible, les décalages peuvent être conservés dans le
[WRCS](../../../../systems/weapon_systems/wrcs.md), et le pilote survole simplement
le RIP, le WSO appuyant sur les boutons Freeze et Target Insert
simultanément, tout comme pour une attaque VIP.

![IP du radar décalé](../../../../img/offsetrip.jpg)

## Pratique

Si aucun pod de ciblage [Pave Spike](../../../../systems/weapon_systems/pave_spike/overview.md)
n'est installé, le mode TGT FIND peut être utilisé comme mode d'entraînement pour
OFFSET.

Il fonctionne alors de manière identique au mode OFFSET, à la différence qu'il n'envoie pas de
signal de largage réel aux armes.

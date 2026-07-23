# Missile anti-rayonnement AGM-45 Shrike

![agm45](../../../img/agm45.jpg)

L'AGM-45 Shrike, dérivé du Sparrow, est une des premières tentatives de missile anti-radiation pour
le rôle de suppression des défenses aériennes ennemies (SEAD). En associant un chercheur réglé en
fréquence
au corps de fusée d'un AIM-7, le Shrike a fourni à l'US Navy, puis à l'US Air Force, une
capacité d'engagement à distance de sécurité contre les radars SAM ennemis. Bien que nominalement
efficace, en
pratique, le Shrike était une arme difficile à employer correctement, compte tenu de sa portée
limitée, de sa
faible vitesse, et de son mode d'engagement principal qui laissait l'avion de lancement à
l'intérieur des enveloppes mortelles de la plupart des
systèmes de défense aérienne adverses. Une petite ogive réduisait encore davantage sa puissance, ce
qui signifie que dans la plupart des cas
seule l'antenne émettrice elle-même a été endommagée, plutôt que le véhicule sur lequel elle était
montée.

Bien que limité à bien des égards, le Shrike a reçu un certain nombre d'améliorations au cours de sa
durée de vie, restant
en service depuis le milieu des années 60 au Vietnam, jusqu'à juste après la guerre du Golfe, grâce
à de meilleurs moteurs et
mises à jour supplémentaires du chercheur pour les systèmes SAM ultérieurs. Le Shrike a été mis en
service par deux utilisateurs étrangers -
l'armée de l'air israélienne, qui l'a également modifié pour une version lancée au sol, et par des
moyens clandestins
avec la RAF pendant la guerre des Malouines.

## Variantes

Seule la version A peut être équipée sur cette version du Phantom.

## Emploi

L'AGM-45 dispose de trois modes de lancement distincts : (WRCS) AGM-45, (LABS) LOFT et (WRCS)
DIRECT.

### Configuration de base du cockpit

Avant qu'un AGM-45 Shrike puisse être utilisé, quelques éléments doivent être réglés dans le cockpit
par le pilote :

1. Sélectionnez la station du Shrike que vous souhaitez utiliser via les
[boutons de sélection de station](../../../cockpit/pilot/weapon_management.md#station-select-buttons)
2. Sélectionnez ARM sur le
[bouton de sélection d'arme](../../../cockpit/pilot/weapon_management.md#weapon-selector-knob)
3. Sélectionnez l'un des trois modes disponibles du Shrike via le
[bouton de mode de livraison](../../../cockpit/pilot/weapon_management.md#delivery-mode-knob)
4. (facultatif) Tournez le
[directeur de vol](../../../cockpit/pilot/flight_director_group.md#navigation-function-selector-panel)
allumé pour le guidage de l'aiguille ADI
5. (facultatif) Tournez le LCOSS sur A/G
6. Allumez [MASTER ARM](../../../cockpit/pilot/weapon_management.md#master-arm-switch)

### AGM-45 (mode WRCS)

Utilisé uniquement avec l'AGM-45 en conjonction avec le WRCS, ce mode est le principal moyen
d'emploi
du Shrike. Le mode s'articule autour d'un profil d'emploi en haute altitude et dépend des
enveloppe d'engagement d'arme préprogrammée de l'AGM-45 stockée dans le WRCS. Ce profil, dans
en conjonction avec les informations sur l'état actuel de l'avion provenant de l'INS et un signal
fourni par le
récepteur dans le missile - après avoir détecté un émetteur du type avec lequel il est adapté,
définissez un vol
trajectoire et enveloppe de déclenchement pour une probabilité optimale que le missile atteigne la
cible.

Avec le mode WRCS sélectionné pour AGM-45, l'analyse est initiée en armant un bouton de sélection de
station pour un
point d'attache transportant un missile AGM-45. Cela active le récepteur du missile, et lors de
l'émetteur
l’acquisition fournira le signal d’information susmentionné au WRCS. Le WSO doit saisir un
valeur d'altitude cible dans le panneau de commande de l'ordinateur, si nécessaire, en utilisant une
valeur moyenne pour le
zone cible actuelle, et si plusieurs missiles doivent être lancés, un réglage du temps d'avance de
lancement.
Le WRCS reçoit les deux données du missile concernant l'angle de vue du missile, ainsi que
angle de vue corrigé à partir de l'INS ; la sélection des données à utiliser s'effectue avec le
TGT/MSL
Commutateur Rej, qui doit, dans la plupart des cas, être laissé en position DF REJ.

Angle de visée et portée estimée disponibles, le WRCS fournira des instructions de guidage à l'aide
du
aiguilles sur l'ADI. Une fois orienté dans l'angle de plongée, la plage horizontale jusqu'à la
cible sera fournie
sur le HSI et BDHI, à condition que la position INS soit sélectionnée pour le mode navigation.

Lorsque l'orientation de l'avion est correcte et que les aiguilles ADI sont centrées, une fois
l'avion
À portée du missile, l'un des voyants d'indexation s'allumera en fonction de la portée détectée pour
cible pour indiquer au pilote la manœuvre de largage requise : plongée, mise à niveau ou traction. À
ce
temps, le pilote peut appuyer et maintenir enfoncé le bouton de largage de la bombe pour lancer
l'attaque. Une fois la sortie
la portée est atteinte dans le profil indiqué, le missile sera lancé.

> 💡 Une attention particulière doit être portée à l'importance de maintenir les aiguilles ADI centrées, notamment
> la relation verticale en azimut. Parce que l'orientation du missile lui-même une fois installé sur
> l'aile peut provoquer un décalage de son récepteur lorsque l'avion est incliné, préparation du
> l'attaque peut nécessiter des ajustements répétés avec les ailes mises à niveau toutes les quelques secondes pour faire
> certain que l'avion pointe vers l'émetteur.

![agm_45_commands](../../../img/agm_45_commands.jpg) _Commandes de l'AGM-45 Shrike en mode WRCS_

#### Tirer vers le haut

Le voyant de commande Pull-up indique que l'avion se trouve à une certaine distance où la manœuvre
Pull-up
doit être piloté pour obtenir un signal de largage. Après le pickle et avec le voyant de l'index
indiquant Pull-up,
l'instruction Pull-up est un guide permettant au pilote d'initier une rotation régulière vers
l'horizon,
et, si vous le souhaitez, continuez dans un état de montée stable jusqu'à ce que les exigences de
portée soient satisfaites et que le missile
est lancé. Le pilote peut choisir soit de mettre l'avion presque à niveau et de s'arrêter, soit de
tirer
plus loin dans un profil de montée basse. Lorsque l'avion est à environ 5 secondes du largage,
l'indicateur de niveau s'allumera, indiquant au pilote de maintenir l'orientation actuelle jusqu'à
ce que
le Shrike est absent.

#### Plonger

La commande de plongée en mode WRCS se produit uniquement lorsque l'attaque est lancée très près de
la cible.
La situation et la proximité de l'installation SAM doivent être prises en compte avant de lancer une
attaque.
avec le bouton pickle, car toute réponse de la batterie a une forte probabilité d'arriver avant le
le missile peut potentiellement tuer l'émetteur. La commande de plongée, une fois suivie, sera
ensuite suivie
avec l'indicateur de niveau une fois le lancement du missile imminent.

#### Niveau

L'instruction de niveau est moins une directive qu'une confirmation d'un lancement imminent. Selon
la configuration d'attaque initiale, le signal de niveau peut se produire immédiatement, ou se
produire assez peu de temps après l'un des
les deux autres instructions. À partir de ce moment, il suffit simplement que le pilote maintienne
le
état actuel pour les meilleures chances de succès du missile.

#### WRCS AGM-45 Emploi

Pour utiliser efficacement l'AGM-45 Shrike en mode WRCS, commencez par sélectionner AGM-45 comme
mode de livraison.
à l'aide du bouton du mode de livraison. Une fois le mode de livraison configuré, armez le point dur
transportant le
Missile Shrike en appuyant sur le bouton de sélection de station correspondant. Cette action active
le
récepteur embarqué du missile, qui commence à rechercher les émetteurs qui correspondent à ses
émissions préprogrammées.
paramètres.

Une fois que le récepteur du missile détecte un émetteur correspondant, le WRCS commence à calculer
la valeur optimale.
trajectoire de vol et enveloppe de libération. Ce processus s’appuie sur les données en temps réel
du récepteur du missile
et l'INS de l'avion, assurant un guidage précis. Confirmez que le verrouillage de l'émetteur a été
réalisé en
vérifier les indicateurs pertinents du cockpit avant de procéder à l’attaque.

Suivez attentivement les conseils fournis par WRCS, en utilisant les aiguilles ADI pour ajuster
votre orientation et
le HSI et BDHI pour surveiller la plage horizontale par rapport à la cible. Lorsque l'avion s'aligne
sur le
trajectoire calculée, surveillez l'allumage de l'un des voyants de l'indexeur. Chaque lumière
correspond à
une manœuvre de largage spécifique :

- Si le voyant de traction s'allume, commencez une manœuvre de traction régulière pour respecter les
  paramètres de relâchement.
  Faites pivoter l'avion en douceur vers l'horizon et, si nécessaire, continuez dans une zone peu
  profonde.
  profil de montée.

- Si le voyant de plongée s'allume, lancez une plongée contrôlée vers la cible. Cela se produit
  généralement
  lorsque l'attaque est lancée à proximité de la cible, assurez-vous donc d'être prêt à vous engager
  rapidement, car
  la proximité de l'émetteur augmente le risque de représailles ennemies.

- Le voyant de niveau indique que l'avion est dans la bonne orientation pour le largage du missile.
  Dans
  dans certains cas, ce voyant peut s'allumer immédiatement ou peu après une autre manœuvre,
  confirmant
  que vous êtes prêt pour le lancement.

Lorsque les conditions sont correctes et que le voyant de l'indexeur confirme le profil de
libération approprié,
appuyez et maintenez enfoncé le bouton de largage de la bombe pour lancer la séquence de lancement
du missile. Maintenir le
l'orientation de l'avion comme indiqué jusqu'à ce que le Shrike soit libéré du point d'attache.

Une considération clé lors de l'emploi du Shrike est que son succès dépend du fait que l'émetteur
reste
actif. Si l'émetteur cible cesse de fonctionner, le missile peut perdre son guidage et ne pas
parvenir à atteindre son objectif.
cible. C’est pourquoi le timing et la connaissance de la situation sont essentiels, en particulier
lorsque plusieurs missiles
sont déployés.

### Loft

Le profil d'emploi Loft du Shrike est similaire à une attaque de bombardement en loft, utilisant les
tables de recherche d'armes pour définir un IP approprié pour la distance de déclenchement, l'angle
de déclenchement nécessaire et le temps écoulé entre
l'IP et le pull-up, déterminé par la vitesse de la table de recherche par rapport à
la distance de l'IP au déclenchement.

Une différence clé entre le mode Loft et les modes d'emploi WRCS pour le Shrike est le principal
utilisation du mode NORM plutôt que DF REJ ; cela place le récepteur du missile dans le rôle du
directive de guidage en azimut sur l'ADI plutôt que sur l'INS. L'aiguille verticale de l'ADI
apparaîtra
lorsque la position AGM-45 est sélectionnée sur le commutateur du pédestal qui est la position NORM.

> 🚧 En raison des limitations du moteur, la fonctionnalité du commutateur TGT/MSL REJ pour les Shrikes n'est pas disponible.

L'attaque s'effectue comme un profil de bombardement de loft ; le Phantom est survolé par l'IP au
l'altitude et la vitesse prévues, le bouton de largage de la bombe étant maintenu enfoncé depuis le
point de survol.
Le compte à rebours démarre, la barre horizontale ADI apparaît pour maintenir le vol en palier et le
la lampe de traction s'allume. Lorsque la minuterie de traction est épuisée, la lampe de traction
s'éteint, la vue
Le réticule s'éteindra et la barre horizontale ADI se déplacera pour afficher la charge G comme
d'habitude pour le
manœuvre de traction ; un profil correct maintiendra les deux barres ADI centrées. Lorsque l'avion
atteint le
angle de largage programmé, le missile sera lancé. Une fois le lancement effectué, la lampe pull-up
et
Le réticule de visée s'allumera à nouveau et la barre ADI horizontale se rangera.

![manual_loft_bombing](../../../img/loft.jpg) _Exemple du bombardement Loft, la procédure reste la
idem pour l'AGM-45 Shrike_

#### Emploi Loft LABS

Ce mode fonctionne exactement de la même manière que pour les bombes, une planification préalable
est donc nécessaire. Sélectionnez un IP,
calculez les minuteries et pilotez le même profil d'emploi que pour le bombardement de Loft.

### Mode direct

L'emploi en mode direct de l'AGM-45 dépend de la connaissance par l'équipage de l'emplacement précis
de l'émetteur SAM cible ; bien qu'il puisse être utilisé comme méthode de secours en cas de panne du
système WRCS,
la nécessité d'un angle de plongée d'au moins 10 degrés par rapport à la cible pour une livraison
réussie
accorde une importance particulière à la capacité de planifier l'attaque contre un point précis du
terrain.

Pour utiliser l'arme en mode Direct, l'équipage confirme la réception de l'audio de l'émetteur et
lance une
plongée pour centrer les aiguilles ADI sur la cible. L'équipage doit alors vérifier le tableau de
plongée pour connaître l'angle
et AGL, et le pilote doit manœuvrer dans cette orientation, en maintenant une aiguille ADI verticale
centrée. À partir de ce moment, le bouton de largage de la bombe est enfoncé et maintenu jusqu'à ce
que le Shrike soit tiré.

#### WRCS Emploi Direct

Pour un emploi direct il suffit au pilote de centrer les aiguilles sur l'ADI et d'appuyer sur le
bouton de largage de la bombe. Le Shrike tirera dans la seconde après avoir appuyé sur le bouton de
largage de la bombe. Sachez
que le Shrike aura la plus petite portée en mode direct et doit être tiré très
proche de la cible. Un angle de plongée de 20 degrés ou plus est recommandé.

### Profils d'attaque

Le missile lui-même peut être configuré pour deux profils d'attaque différents appelés _Loft Attack_
et
_Direct Attack_ (à ne pas confondre avec les profils d'emploi disponibles pour les employer).

Ceux-ci contrôlent le moment où le guidage du missile commencera après le lancement.

> 💡 La sélection d'un profil d'attaque inapproprié pourrait faire rater la cible à l'AGM-45 en raison d'un manque de
> d'énergie (ex : le guidage bang-bang s'activant trop tôt) ou de dépassement de la cible (ex :
> le guidage ne s'active pas à temps).

#### Attaque de loft

Avec _Loft Attack_, le guidage démarrera lorsque l'altimètre barométrique du missile détectera que :

- Il y a une augmentation de pression de 1 psi
- Le missile est en dessous de 18 000 pieds MSL.

> 💡 Une augmentation de pression de 1 psi équivaut à environ une diminution d'altitude de 1 000 à 3 000 pieds.

Cela évite une perte d’énergie inutile due à la méthode de guidage bang-bang de l’arme.

La sélection du profil d'attaque _Loft Attack_ est fortement recommandée lors de l'utilisation du
Shrike dans
les modes (WRCS) AGM-45 et (LABS) LOFT.

> 💡 Loft Attack peut souvent être utilisé pour engager des systèmes SAM à courte et moyenne portée en dehors de
> leur plage d’engagement.

#### Attaque directe

Avec _Direct Attack_, le guidage démarrera environ 3 secondes après le lancement, permettant au
missile à manœuvrer vers l'émetteur cible presque immédiatement après le lancement.

La sélection du profil d'attaque _Direct Attack_ n'est privilégiée que lors de l'utilisation du mode
(WRCS) DIRECT.

> 💡 _Direct Attack_ peut être utilisé lors de l'engagement des systèmes SAM lors d'une fenêtre contextuelle rapide de bas niveau
> attaque.

### Têtes de chercheur

L'AGM-45 dispose de 10 têtes chercheuses, qui ciblent chacune une fréquence radio d'émetteur
spécifique, pour sélectionner
depuis. Cela signifie qu'une certaine préparation est nécessaire avant le vol afin d'être
correctement préparé à
affronter efficacement les menaces. Les tables de têtes de chercheur suivantes sont fournies afin
que vos missions puissent
être planifié en conséquence.

<!-- This seeker head data is accurate as of patch 2.9.21 -->

#### Tableau des limites RF du chercheur

| Chercheur | Cibles principales | Limite RF inférieure (GHz) | Limite RF supérieure (GHz) |
| ------------ | ----------------------------------- | :------------------: | :------------------: |
| Mk 22 | Chanson des fans (SA-2 TR) |         4.8 |         5.2 |
| Mk 23 | Chanson de fan, canette de feu, bouclier en étain |          2 |          4 |
| Mk 24 Mod 5 | Boîte à feu, bouclier en étain |         2,65 |         3.15 |
| Mk 24 Mod 34 | Boîte à feu, bouclier en étain |         2.5 |         3.5 |
| Mk 25 | Chanson des fans (SA-2 TR) |          4 |          6 |
| Mk 36 | Coup bas (SA-3 TR) |         7.9 |         9.6 |
| Mk 37 | Visage plat |         0,8 |          1 |
| Mk 49 Mod 0 | Faible soufflage, chasse d'eau droite (SA-6 STR) |          6 |          10 |
| Mk 49 Mod 1 | Faible soufflage, chasse d'eau droite (SA-6 STR) |          6 |          10 |
| Mk 50 | Divers |          2 |          6 |

Clé générale :

- SR : recherche radar
- TR : Radar de suivi
- STR : Radar de recherche et de suivi
- RF : Télémètre

> 💡 Pour les tableaux ci-dessous, les radars qui ne sont pas entre parenthèses signifient qu'ils NE fournissent PAS
> tonalité et aiguilles mais le missile suit toujours le radar spécifié. Si le radar est entre parenthèses,
> ils fournissent des tonalités et des aiguilles ainsi que suivent le radar spécifié.

#### Menaces terrestres

##### Radars terrestres des systèmes SAM et EWR du Pacte de Varsovie

| Chercheur |  SA-2 | SA-3 | SA-5 |   SA-6 | SA-8 |    SA-10 | SA-11 | SA-13 | SA-15 (Tor-M1) | SA-15 (Tor-M2) | SA-19 | SA-22 | EWR |
| ------------ | :-----: | :--: | :--: | :-------: | :--: | :----------: | :---: | :---: | :------------: | :------------: | :---: | :---: | :--: |
| Mk 22 | (TR)/RF |      |      |           |      |              |       | (TR) |       TR |                |       |       | (DE) |
| Mk 23 |   RF |      | (TS) |           |      | (TS)/(BB)/CS |  SR |  TR |      (SR) |      (SR) | (SR) | (SR) |      |
| Mk 24 Mod 5 |   RF |      | (TS) |           |      |     (TS) |       |  TR |                |       SR |  SR |  SR |      |
| Mk 24 Mod 34 |   RF |      | (TS) |           |      | (TS)/(BB)/CS |       |  TR |                |      (SR) |  SR | (SR) |      |
| Mk 25 | (TR)/RF |      |      |           |      |              |       | (TR) |       TR |                |       |       | (DE) |
| Mk 36 |   RF | (TR) |      |  SR/(TR) |      |      TR | (TR) |  TR |                |                |       |  TR |      |
| Mk 37 | (FF)/RF | (FF) | (FF) |           |      |              |       |  TR |                |                |       |       |      |
| Mk 49 Mod 0 |   RF | (TR) | (TR) | (SR)/(TR) | (SR) |     (TR) | (TR) |  TR |                |                |       |  TR |      |
| Mk 49 Mod 1 |   RF | (TR) | (TR) | (SR)/(TR) | (SR) |     (TR) | (TR) |  TR |                |                |       |  TR |      |
| Mk 50 | (TR)/RF |      | (TS) |           |      | (TS)/(BB)/CS |  SR | (TR) |   (SR)/(TR) |      (SR) | (SR) | (SR) | (DE) |

> 💡 Les SA-2/3/5 peuvent tous utiliser le même radar de recherche Flat Face, le SA-5 ayant la possibilité de
> en utilisant également le Tin Shield comme radar de recherche.

- BB : Big Bird (radar de recherche SA-10)
- CS : Clam Shell (radar de recherche SA-10)
- DE : Oreille de chien
- FF : Face plate (radar de recherche SA-2/3/5)
- TS : Bouclier d'étain (Radar de recherche SA-5/10)

##### Menaces SAM terrestres chinoises

| Chercheur | CH-SA-4 (HQ-7) |
| ------------ | :------------: |
| Mk 22 |                |
| Mk 23 |      (SR) |
| Mk 24 Mod 5 |       SR |
| Mk 24 Mod 34 |                |
| Mk 25 |                |
| Mk 36 |                |
| Mk 37 |                |
| Mk 49 Mod 0 |                |
| Mk 49 Mod 1 |                |
| Mk 50 |      (SR) |

##### Radars combinés de l'artillerie antiaérienne (AAA) de l'OTAN et du Pacte de Varsovie

| Chercheur | Shilka | Canette de feu | Gépard | M163 VADS | C-RAM |
| ------------ | :----: | :------: | :----: | :-------: | ----- |
| Mk 22 |        |    TR |        |           |       |
| Mk 23 |        |   (TR) |   SR |           |       |
| Mk 24 Mod 5 |        |   (TR) |   SR |           |       |
| Mk 24 Mod 34 |        |   (TR) |        |           |       |
| Mk 25 |        |    TR |        |           |       |
| Mk 36 |        |    TR |        |           |       |
| Mk 37 |        |    TR |        |           |       |
| Mk 49 Mod 0 |        |    TR |        |           |       |
| Mk 49 Mod 1 |        |    TR |        |           |       |
| Mk 50 |        |   (TR) |   SR |           |       |

##### Radars et EWR du système SAM terrestre de l'OTAN

| Chercheur | Faucon | Patriote | Rapière | Roland | NASAMS | IRIS-T SLM |
| ------------ | :--: | :-----: | :----: | :----: | :----: | :--------: |
| Mk 22 |      |   STR |        |        |        |    STR |
| Mk 23 |      |         |        |        |        |            |
| Mk 24 Mod 5 |      |         |        |        |        |            |
| Mk 24 Mod 34 |      |         |        |        |        |            |
| Mk 25 |      |   STR |        |        |        |   (STR) |
| Mk 36 |  TR |         |        |   TR |  (SR) |            |
| Mk 37 |  SR |         |        |        |        |            |
| Mk 49 Mod 0 |      |         |        |        |        |            |
| Mk 49 Mod 1 |      |         |        |        |        |            |
| Mk 50 |      |   STR |        |        |        |   (STR) |

#### Menaces navales

> 💡 Les classes de navires, et non les navires individuels, sont répertoriées là où les navires sont identiques.

##### Menaces navales soviétiques

| Chercheur |   Kirov |   Slava | Kuznetsov | Molniya |  Grisha |  Krivak | Neustrashimy | Ropucha | Projet 22160 | Projet 22160 avec Tor-M2M |
| ------------ | :-------: | :-------: | :-------: | :-----: | :-------: | :-------: | :----------: | :-----: | :-----------: | :------------------------: |
| Mk 22 |    TR |   (TR) |    TR |         |    TR |    TR |     (TR) |         |               |                            |
| Mk 23 | (SR)/(TR) | (SR)/(TR) | (SR)/(TR) |  SR/TR |   (TR) |   (TR) |  (SR)/(TR) |  (SR) |               |             SR |
| Mk 24 Mod 5 |   SR/TR |    TR |   SR/TR |  SR/TR |    TR |   (TR) |  (SR)/(TR) |         |               |             SR |
| Mk 24 Mod 34 |   (TR) |   (TR) |   (TR) |         |    TR |   (TR) |      TR |         |               |             SR |
| Mk 25 |    TR |    TR |    TR |         |    TR |    TR |      TR |         |               |                            |
| Mk 36 | (SR)/(TR) | (SR)/(TR) | (SR)/(TR) |  SR/TR |    TR |   (TR) |  (SR)/(TR) |   SR |    (SR)/TR |          (SR)/TR |
| Mk 37 |    TR |    TR |    TR |         |    TR |    TR |      TR |         |               |                            |
| Mk 49 Mod 0 |   (TR) |   (TR) |   (TR) |         | (SR)/(TR) | (SR)/(TR) |     (TR) |   SR |   (SR)/(TR) |         (SR)/(TR) |
| Mk 49 Mod 1 |   (TR) |   (TR) |   (TR) |         | (SR)/(TR) | (SR)/(TR) |     (TR) |   SR |   (SR)/(TR) |         (SR)/(TR) |
| Mk 50 | (SR)/(TR) | (SR)/(TR) | (SR)/(TR) |  SR/TR |   (TR) |   (TR) |  (SR)/(TR) |  (SR) |               |             SR |

##### Menaces navales chinoises

| Chercheur | Tapez 052B | Tapez 052C | Tapez 054A | Tapez 071 | Tapez 021-1 |
| ------------ | :-------: | :-------: | :-------: | :------: | :--------: |
| Mk 22 |           |           |           |          |            |
| Mk 23 |   (SR) |   (SR) |   (SR) |          |     SR |
| Mk 24 Mod 5 |           |    SR |           |          |     SR |
| Mk 24 Mod 34 |           |           |           |          |     SR |
| Mk 25 |           |           |           |          |            |
| Mk 36 |    TR |    SR |    TR |          |    (SR) |
| Mk 37 |           |           |           |          |            |
| Mk 49 Mod 0 |   (TR) |           |   (TR) |          |            |
| Mk 49 Mod 1 |   (TR) |           |   (TR) |          |            |
| Mk 50 |   (SR) |   (SR) |   (SR) |          |     SR |

##### Menaces navales américaines

| Chercheur | Ticonderoga | Arleigh Burke | Oliver Hazard Perry | Forrestal | Nimitz | Tarawa |
| ------------ | :---------: | :-----------: | :-----------------: | :-------: | :-----: | :----: |
| Mk 22 |             |               |         TR |           |   TR |        |
| Mk 23 |             |               |         TR |   (SR) | (SR)/TR |        |
| Mk 24 Mod 5 |             |               |         TR |   (SR) | (SR)/TR |        |
| Mk 24 Mod 34 |             |               |         TR |   (SR) | (SR)/TR |        |
| Mk 25 |             |               |         TR |   (SR) |   TR |        |
| Mk 36 |    (TR) |     (TR) |         TR |           |   TR |        |
| Mk 37 |  (SR)/(TR) |     SR/TR |        SR/TR |           |  SR/TR |        |
| Mk 49 Mod 0 |             |               |        (TR) |           |   TR |        |
| Mk 49 Mod 1 |             |               |        (TR) |           |   TR |        |
| Mk 50 |             |               |         TR |   (SR) | (SR)/TR |        |

##### Menaces navales britanniques

| Chercheur | Léandre | Château | Invincibles |
| ------------ | :-----: | ------ | ---------- |
| Mk 22 |   TR |        |            |
| Mk 23 |  (TR) |        |            |
| Mk 24 Mod 5 |   TR |        |            |
| Mk 24 Mod 34 |  (TR) |        |            |
| Mk 25 |   TR |        |            |
| Mk 36 |  (TR) |        |            |
| Mk 37 |   TR |        |            |
| Mk 49 Mod 0 |  (TR) |        |            |
| Mk 49 Mod 1 |  (TR) |        |            |
| Mk 50 |  (TR) |        |            |

##### Autres menaces navales

| Chercheur | Veinticinco de Mayo | Condell | Tigre/La Combattante IIa |
| ------------ | :-----------------: | :-----: | :----------------------: |
| Mk 22 |                     |         |                          |
| Mk 23 |        (SR) |         |                          |
| Mk 24 Mod 5 |                     |         |                          |
| Mk 24 Mod 34 |                     |         |                          |
| Mk 25 |                     |         |            SR |
| Mk 36 |                     |         |            TR |
| Mk 37 |                     |         |                          |
| Mk 49 Mod 0 |                     |         |                          |
| Mk 49 Mod 1 |                     |         |                          |
| Mk 50 |        (SR) |         |           (SR) |

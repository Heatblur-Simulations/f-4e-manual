# Ensemble d'ordinateurs de référence d'attitude et de bombardement (ARBCS)

L'AN/AJB-7 ARBCS est le système automatisé de contrôle de libération pour le bombardement
relatif au temps ou au tangage. Interfacé avec les commandes d'armement multiples, les réglages
d'armement du panneau Piédestal, ainsi que les bombes, à guidage laser, ou l'AGM-45, le système
libère la munition sélectionnée une fois que le Bombing Timer respectif, ou l'objectif
d'angle de tangage (gyroscope) respectif de l'ordinateur d'angle de largage de bombe, a été
atteint.

Le côté gauche du bouton de mode de livraison sélectionne les modes de libération ARBCS. Les deux
Les modes LOFT et T LAD permettent de larguer les armes lors d'une ressource, LOFT sélectionnant un
Programme de traction de 4,0 G et libération de l'arme lors de l'atteinte d'une valeur d'angle
gyroscopique définie,
alors que T LAD suppose un programme de pull-up de 3,5 G et un relâchement à la fin du
Réglage de la minuterie de bombardement. Valeurs nécessaires pour l'angle faible et élevé, ainsi que
le
Les minuteurs de bombardement se trouvent dans les tableaux fournis.

## Ordinateur d'angle de largage de bombe

![wso_bomb_release_angle](../../img/wso_release_angle.jpg)

L'ordinateur d'angle de largage de bombe permet de saisir le pas de cible nécessaire
angles pour les modes de bombardement ARBCS. Les valeurs de HIGH (70 à 179,9 degrés) et LOW
(0 à 89,9 degrés) sont contrôlés à l’aide de leurs boutons d’entrée respectifs.
En interne, l'ordinateur contient les interrupteurs de déclenchement, ainsi que le résolveur
pour transmettre les valeurs d'angle cible aux pointeurs directeurs ADI.

Un calculateur pour les valeurs saisies dans le jeu est fourni par
le [calculateur de bombardement](../../dcs/bombing_computer.md). Vous pouvez l'ouvrir et le fermer
en appuyant sur <kbd>RCTRL</kbd>+<kbd>B</kbd> en jeu.

![manuel_loft_diagram](../../img/loft.jpg)

## Minuteries de bombardement

![wso_bomb_release_timer](../../img/wso_bombing_timer.jpg)

Des minuteries pour les modes de bombardement ARBCS sont disponibles pour PULL-UP (0 à 60 secondes)
et RELEASE (0 à 30 secondes). Les deux peuvent être réglés par incréments de 0,1 seconde, avec 0,1
seconde comme réglage minimum. Les fenêtres de référence ne décomptent pas pendant
le bombardement.

Lorsque la minuterie PULL-UP est terminée, la signalisation PULL-UP requise démarre,
ainsi que toute programmation du directeur ADI pour montrer la trajectoire de vol appropriée.
Le chronométrage RELEASE dépend du mode et se produira une fois le PULL-UP terminé, si nécessaire.

En modes LOFT et O/S, seul le timing PULL-UP est activé et une valeur doit être définie
pour dynamiser le programme de trajectoire de vol de traction ADI.

Dans T LAD et TL, PULL-UP et RELEASE sont tous deux activés, en séquence, et tous deux
nécessitent une saisie de valeur - PULL-UP pour dynamiser la programmation de la trajectoire de vol,
et
RELEASE pour générer le signal de largage de la munition.

Dans le bombardement LABS intégré (ARBCS)/WRCS, les exigences ci-dessus sont les mêmes ;
cependant, c'est le WRCS qui déclenche le chronométrage de la course de bombardement, plutôt que
l'appui sur le bouton de largage. Lorsque le WRCS déclenche le chronométrage, une tonalité audio
est émise pour signaler le démarrage du minuteur.

Un calculateur pour les valeurs saisies dans le jeu est fourni par
le [calculateur de bombardement](../../dcs/bombing_computer.md). Vous pouvez l'ouvrir et le fermer
en appuyant sur <kbd>RCTRL</kbd>+<kbd>B</kbd> en jeu.

## Indicateurs ARBCS

Lors de la livraison d'armes ARBCS, un certain nombre d'indicateurs sont disponibles pour confirmer
lancement de la course et à quelle étape de la course donnée se trouve l'avion :

1. Au lancement de la course (appui sur le bouton de bombe/déclenchement WRCS) et au démarrage
   de la minuterie PULL-UP, le voyant Pull-up s’allume.
   ![pilot_pull_up_timer](../../img/pilot_pull_up_light.jpg)
2. À la fin de la minuterie PULL-UP, la lumière Pull-up s'éteint, la lumière du réticule
  s'éteint et une tonalité de traction constante (s'il est allumé) se produit.
3. Lorsque l'angle de lancement est atteint, la lumière Pull-up s'allume, le réticule
  La lumière s'allume et la tonalité de traction s'arrête.
4. Lorsque le bouton de la bombe est relâché, la lumière Pull-up s'éteint.

Cette séquence d'indication peut se produire avec le bras maître en SAFE, à des fins de formation.

## Gyroscope à montage rapide

![pilot_gyro_fast_erect](../../img/pilot_fast_erect.jpg)

En raison des manœuvres rapides lors d'un bombardement, une déviation du gyroscope peut se produire
en raison de
migration fluide. Bien que cet écart se résolve naturellement à un rythme de 1 à 2
correction de degrés par minute au fil du temps, elle peut être rapidement corrigée en utilisant le
Interrupteur FAST ERECT trouvé dans le cockpit avant du pilote sur la console latérale gauche, à
un taux de 15 degrés par minute. Cet interrupteur ne doit pas être maintenu pendant plus de 60
secondes, sinon le gyroscope pourrait être endommagé.

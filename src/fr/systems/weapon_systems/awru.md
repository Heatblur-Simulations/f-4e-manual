# Unité de largage des armes aériennes (AWRU)

![pilote_awru](../../img/pilot_awru.jpg)

Utilisé dans les modes d'armes BOMBS et RKTS & DISP, l'AWRU fournit des contrôles d'intervalle
et de quantité pour la livraison des munitions. L'AWRU possède à la fois un mode manuel et un
mode automatique, et la fonction correspondante est accessible avec les réglages appropriés.

Le bouton d'intervalle contient 14 valeurs, fournissant la synchronisation de base de l'intervalle
des impulsions de largage pendant que le bouton de largage de la bombe est maintenu enfoncé,
de 1/20e de seconde (0,05) à 1 seconde. Cette valeur peut se voir appliquer un multiplicateur 10x
à l'aide du commutateur INTRVL. En mode NORM du commutateur INTRVL, le déclenchement s'appliquera
comme sur le bouton d'intervalle, alors que lorsqu'il est sélectionné sur x10, le multiplicateur
10x s'appliquera - par exemple, 1 seconde en NORM deviendrait un intervalle de 10 secondes en
mode x10.

Le bouton de quantité définit le nombre total de munitions larguées lors d'un maintien de la
commande de largage, et applique les fonctions de largage manuel ou automatique selon la valeur
sélectionnée.

<iframe width="560" height="315" src="https://www.youtube.com/embed/u9Bk291JiFE?si=nV8ufQ3xSwopXU6p"
title="Régler votre timing d'ondulation dans le monde F-4 | DCS" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Manuel unique : 1

En position 1, l'AWRU est placé en mode manuel. Une munition sera larguée à chaque pression
sur la commande de largage, les largages sur plusieurs stations sélectionnées s'effectuant selon
un modèle gauche-droite-gauche. Le bouton de largage de la bombe doit être relâché, puis pressé
une nouvelle fois, pour larguer un autre engin.

## Ondulation unique : 2-18

Aux positions numériques 2 à 18, jusqu'au nombre total de munitions sélectionnées sera largué
en fonction du réglage Intervalle. A titre d'exemple, avec une QTÉ de 6 et
un intervalle de 0,20, six bombes seront larguées, une tous les 2/10ème de seconde
dès la pression sur le bouton de largage de la bombe. La séquence se réinitialise au relâchement du bouton, permettant de larguer des ondulations
ultérieures de la même quantité.

## Simple-Continu : C

En position C, la quantité d'armes est dictée par la durée pendant laquelle le bouton de largage
de la bombe est maintenu enfoncé. L'ondulation appliquera l'intervalle défini, libérant une munition
chaque impulsion, jusqu'à ce que le bouton de la bombe soit relâché.

## Paires-Manuel : P

La position P place l'AWRU en mode paires. Avec plusieurs stations sélectionnées,
chaque fois que le bouton de la bombe est enfoncé, une arme sera larguée de chaque
station.

## Salve : S

En position S, l'AWRU entre en mode salvo, fonctionnant comme
Paires-Manuel avec des munitions simples larguées depuis chaque station, mais en utilisant
la valeur d'intervalle définie pour larguer plusieurs salves jusqu'à ce que le bouton de la bombe
soit relâché.

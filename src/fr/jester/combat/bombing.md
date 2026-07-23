# Bombardement

Larguer des munitions sur des cibles au sol avec Jester se compose de deux phases.
Dans un premier temps, Jester doit se préparer à l'attaque en saisissant les données correspondantes
dans les panneaux. Pour la plupart des modes, l'attaque elle-même peut être exécutée par le
pilote seul. Cependant, pour les modes Dive Toss et Dive Laydown, Jester doit verrouiller le
retour au sol à l'aide du radar.

## Préparation

Pour préparer un bombardement, le pilote et le WSO doivent saisir plusieurs paramètres
dans tout le cockpit.

Pour Jester, cela inclut le panneau WRCS, tel que **Release Range**,
**Target Altitude** ou **Release Advance**, ainsi que les angles LABS et
minuteries.

Pour préparer Jester à un bombardement, utilisez l'outil
[Bombing Computer](../../dcs/bombing_computer.md) et transférez la solution
en utilisant le bouton **Tell Jester**.

![Dites à Jester UI](../../img/jester_bombing_table.jpg)

Une fois activé, Jester fera sa part dans la préparation de l'avion pour
l'attaque souhaitée.

## Dive Toss

Lors d'une attaque Dive Toss ou Dive Laydown, indiquée par DT ou DL sélectionné sur le
Bouton de mode de livraison, l'**action contextuelle** peut être utilisée pour commander à Jester de
verrouiller
le retour au sol après avoir placé le nez sur la cible. Une pression ultérieure
débloquera à nouveau la cible.

![Pipper sur la cible](../../img/jester_dive_toss_prepare.jpg)

De cette façon, les cibles au sol peuvent être attaquées efficacement lors d'une plongée. Le pilote
place le réticule sur la cible, commande à Jester de verrouiller le retour puis
tire vers le haut tout en maintenant enfoncé le bouton Bombe. Les armes seront libérées
automatiquement peu de temps après.

![Retour au sol verrouillé](../../img/jester_dive_toss_locked.jpg)

# Hydraulique

![schéma_hydraulique_manuel](../img/manual_hydraulics_diagram.jpg)

Le système de puissance hydraulique du F-4E se compose de trois systèmes hydrauliques entièrement
indépendants et fermés :

* Système de contrôle de puissance 1 (PC-1)
* Système de contrôle de puissance 2 (PC-2)
* Système utilitaire

Les systèmes ont une pression de fonctionnement d'environ 3 000 psi
et sont sous pression à chaque fois que les moteurs tournent.

Les ailerons, les spoilers et le stabilisateur ont deux actionneurs hydrauliques.
Les systèmes PC constituent la principale source d'alimentation hydraulique des systèmes de
commandes de vol,
avec PC-1 alimentant le côté gauche de l'avion et PC-2
alimentant le côté droit ; ceux-ci fournissent de la pression à l'un des deux actionneurs sur
chaque gouverne de vol.
Le PC-1 utilise la pompe moteur gauche et le PC-2 utilise la pompe moteur droite.

Le système hydraulique utilitaire est pressurisé par une pompe hydraulique sur chaque moteur. Pour
empêcher le
pompes hydrauliques utilitaires à résonance, clapets anti-retour
avec des pressions de fonctionnement différentes sont installés sur le
conduites de sortie de pompe. En conséquence, la pompe hydraulique utilitaire du moteur droit fournira 2775 ±225 psi au ralenti,
et la pompe hydraulique utilitaire du moteur gauche fournira
environ 3 000 ±250 psi au ralenti.
Le système utilitaire fournit de la pression à tous les systèmes de l'avion (qui ont besoin de pression hydraulique) à l'exception de l'actionneur du stabilisateur.
Il pilote le second actionneur de chaque gouverne de vol (sauf le stabilisateur), agissant à la fois comme assistance de puissance et comme secours.

Le premier actionneur du stabilisateur est alimenté par PC-1 et le second par PC-2.
De plus sur les avions après *TO 1F-4-903*,
une unité de puissance auxiliaire de stabilisation (APU)
est installée pour fournir une pression hydraulique de secours pour
contrôle longitudinal. Une pompe hydraulique à entraînement électrique met le
système APU sous pression à 1 700 ± 100 psi. L'APU fournit de la pression au côté PC-1 du stabilisateur
si la pression du PC-1 chute en dessous de 1 000 psi.

> 💡 Les systèmes hydrauliques PC-1, PC-2 et Utility
> sont indépendants les uns des autres ; donc, chacun
> l'aileron et le spoiler ont deux sources indépendantes
> de pression hydraulique et un système fonctionne comme
> une sauvegarde pour l'autre.

## Indicateurs de pression hydraulique

![HydPress](../img/pilot_hydraulic_pressure.jpg)

Sur le [panneau de socle](../cockpit/pilot/pedestal_group.md) dans le cockpit avant se trouve une
paire de
[Indicateurs de pression
hydraulique](../cockpit/pilot/pedestal_group.md#hydraulic-pressure-indicators).
Un pour les systèmes PC et l’autre pour le système Utility. La jauge du système PC comporte deux
pointeurs, étiquetés PC-1 et PC-2. Puissance nominale de fonctionnement pour les trois systèmes
est de 3 000 ± 250 PSI.

## Témoins lumineux des systèmes hydrauliques

![pilot_hydraulic_system_lights](../img/pilot_hydraulic_systems_indicator_lights.jpg)

En cas de perte de pression sur PC-1 ou PC-2 ou sur le système utilitaire inférieure à 1 500 PSI, ou
d'un
panne définitive de la pompe, CHK HYD GAGES s'allumera sur le panneau telelight avec
l'avertissement Master Caution.

> 💡 En cas de panne du système Utility du côté droit, aucune perte de pression apparente ne sera
> visible pour signaler l'allumage du voyant CHK HYD GAGES, alors qu'une panne du côté gauche
> affichera une perte de 200 PSI ou plus sur l'indicateur de pression du système utilitaire. Dans tous les cas, si
> la pression revient au-dessus de 1 750 PSI, le voyant CHK HYD GAGES s'éteindra. En cas de
> panne du système utilitaire sur le côté droit, aucune perte de pression apparente ne s'affichera
> pour correspondre au voyant CHK HYD GAGES, alors qu'une panne du côté gauche montrera une perte de
> 200 PSI ou plus sur l'indicateur de pression du système utilitaire.

Avec un avertissement CHK HYD GAGES, l'avertissement principal peut être effacé en réinitialisant ;
sachez cependant que
si le voyant CHK HYD GAGES est encore allumé à ce moment précis, une panne ultérieure du système
hydraulique
ne déclenchera pas à nouveau l’avertissement Master Caution, avec pour conséquence de ne pas en
tenir compte.

Par ailleurs, le Master Caution et le voyant CHK HYD GAGES peuvent s'allumer momentanément pendant l'extension du
train d'atterrissage ou lors de manœuvres intenses en raison de la charge du système. Dans de telles
situations, vérifiez les
indicateurs de pression : s'ils reviennent aux valeurs nominales, ignorez les avertissements car ils
se réinitialiseront
momentanément.

![Réparation hydraulique](../img/hydraulics.jpg)
*Le sergent technique (TSGT) Rossell Powell du 347e Escadron de maintenance électronique découvre
une fuite
connexion hydraulique sur un avion F-4 Phantom II lors d'un exercice de réparation des dommages de
combat d'un avion*

# Modes précis

## Dive Toss - DT

L’un des modes de bombardement les plus précis et les plus faciles à utiliser est Dive Toss.

Cela nécessite une ligne de vue directe et le calcul du bon coefficient de traînée
valeur pour le WRCS.

Le pilote effectue une attaque en piqué sur la cible tandis que le WSO obtient une précision
informations sur la portée cible à l’aide du radar. Une fois la cible désignée, le
le pilote maintient simplement le bouton de la bombe enfoncé et commence à sortir doucement de la
plongée. Les armes se libèrent automatiquement au bon moment pendant la manœuvre.

Dive Toss utilise le [WRCS](../../../../systems/weapon_systems/wrcs.md) et le suivi
[radar](../../../../systems/radar/overview.md), en conjonction avec
d'autres capteurs de l'avion, pour calculer la solution de largage en temps réel. Le
la cible peut être approchée depuis n'importe quelle direction, vitesse et angle de plongée, et le
WRCS calcule le point de largage approprié par rapport à la piste acquise, à la munition
réglage du coefficient de traînée et toute entrée de commande d'avance de libération (en conjonction
avec les réglages [AWRU](../../../../systems/weapon_systems/awru.md)).

> 💡 Puisque pour de nombreux profils d'attaque en plongée, la valeur du coefficient de traînée
> change à peine (par exemple, largage de bombes conventionnelles à moyenne altitude, à grande
> vitesse et angles raides), Dive Toss peut être un mode très indulgent qui convient pour être
> utilisé contre des cibles d'opportunité avec peu de configuration ou de planification.
>
> L'[outil de calcul de bombardement](../../../../dcs/bombing_computer.md) peut être utilisé
> pour calculer la valeur appropriée du coefficient de traînée.

![Lancer de plongée 1](../../../../img/divetoss.jpg)

![Lancer de plongée 2](../../../../img/divetoss2.jpg)

### Procédure

Pour effectuer une attaque Dive Toss, le
[radar](../../../../systems/radar/overview.md) doit être réglé en mode AIR-GRD, avec
un réglage de portée de 5 ou 10 milles. Une fois réglé, le pilote lance l'attaque avec le
viseur optique en mode air-sol, et le réticule se cage automatiquement en
élévation le long du RBL. Le pilote sélectionne ensuite DT sur le bouton de mode de livraison,
place le bouton de sélection d'arme sur BOMBS et sélectionne l'intervalle et la
quantité souhaités sur les boutons [AWRU](../../../../systems/weapon_systems/awru.md)
respectifs. À ce stade, le pilote peut lancer l'attaque.

L'attaque est initiée lors d'une plongée. La plongée requise est environ 20 % plus élevée que
celle requise pour une attaque en mode Direct, afin d'obtenir un verrouillage
[radar](../../../../systems/radar/overview.md) au sol efficace ; c'est-à-dire que le radar
doit obtenir un retour radar solide sur le sol, plutôt que de voir la cible réelle bombardée.
Une fois le verrouillage réalisé, le pilote manœuvre ensuite pour placer le pipper au-dessus du
cible prévue, ailes à l'horizontale, puis appuie et maintient le bouton de la bombe pour insérer la
portée radar dans le [WRCS](../../../../systems/weapon_systems/wrcs.md), puis
commence la manœuvre de retrait souhaitée, en maintenant les ailes à l'horizontale. Après que le
pilote appuie sur le bouton de largage de la bombe, le verrouillage au sol du radar n'est plus
nécessaire. La manœuvre de retrait doit maintenir un taux de virage aussi constant que possible
pour une précision maximale.

Au point où la trajectoire calculée de la bombe croisera la cible, le
[WRCS](../../../../systems/weapon_systems/wrcs.md) fournit le signal de largage,
larguant les munitions selon les paramètres choisis pour le nombre et l'intervalle.

<iframe width="560" height="315" src="https://www.youtube.com/embed/-eHZRXwmELY?si=3GDLzXoZRFRXoiR1"
title="Comment (réellement) larguer des bombes dans le F-4E" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ff-874bghek?si=BhGhYx3MM5FW3z59"
title="DCS : F4E WSO Tutoriel de lancer de plongée/pose de plongée" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Target Find - TGT FIND

Target Find n'était à l'origine qu'un mode utilitaire dérivé du mode OFFSET ; où
il ne fournit pas de signal de déclenchement standard au contrôle de tir et
[AWRU](../../../../systems/weapon_systems/awru.md) pour lancer le largage de bombes, mais
a plutôt été utilisé pour confirmer l'emplacement de la cible sans libération, pour la formation
ou, si nécessaire, effectuer une [INS](../../../../systems/nav_com/ins.md)
mise à jour du système.

Cependant, avec le
[Pave Spike](../../../../systems/weapon_systems/pave_spike/overview.md)
pod de ciblage installé, Target Find signalera à la place au WRCS d'utiliser le
cible définie par la ligne de mire des pods pour une livraison Dive Toss, au lieu de
définir la cible par verrouillage radar.

Dans ce cas, le Pave Spike est posé sur la cible (activer le laser pendant un
plage inclinée plus précise) et le bouton de la bombe est enfoncé et maintenu enfoncé. Similaire
à une livraison régulière de Dive Toss, des signaux de direction apparaissent sur le HUD. Le système
larguera automatiquement les bombes lorsque les paramètres de la solution balistique seront
atteints.

> 💡Il n'est pas nécessaire d'effectuer une manœuvre de plongée car la cible est simplement
> désignée par la ligne de visée des pods ainsi que la plage inclinée mesurée
> au lieu du radar.

> 💡 TGT FIND avec le Pave Spike est comparable aux modes CCRP des avions plus récents.
> Désignez la cible avec le pod, maintenez enfoncé le bouton de la bombe et les armes
> se libèrent automatiquement au bon moment.

<iframe width="560" height="315" src="https://www.youtube.com/embed/FZNtAqOZGgA?si=sbQ7nQk2CZcFV6iA"
title="DCS : F-4E Phantom : Pave Spike + Tutoriel sur les bombes à guidage laser" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

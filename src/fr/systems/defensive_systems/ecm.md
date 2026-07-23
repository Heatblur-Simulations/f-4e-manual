# Contre-mesures électroniques

*"Il y a ECM, il y a ECCM, IBM,
les amis, on vous donnera des M&Ms"*

Le Phantom peut être équipé de pods ECM capables de brouiller les signaux radar pour
le protéger contre le suivi par d'autres avions ou des missiles guidés par radar.

<iframe width="560" height="315" src="https://www.youtube.com/embed/CK-gaIUW0Co?si=Mb6up8RG2Us7U1ZD"
title="DCS : Contre-mesures F-4E et didacticiel ECM (Pilote, Jester, WSO)" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Au cours de son service, il a vu un certain nombre de pods dotés de capacités différentes.

Les premiers pods tels que l'AN/ALQ-71 ou l'AN/ALQ-87 ont été utilisés efficacement pendant
la guerre du Vietnam. Au milieu des années 1970, la plupart des AN/ALQ-119 et AN/ALQ-131 ont été
en service.

Le Phantom prend en charge les pods ECM sur les deux pylônes intérieurs (stations 4 et 6) et
les pylônes intérieurs des ailes (stations 2 et 8). Cependant, les signaux ECM sont connectés
en chaîne de chaque côté respectivement, permettant le contrôle d'un seul module de brouillage
par côté. De plus, de nombreux pods ont des restrictions leur permettant uniquement d'être
chargés sur certains pylônes spécifiques. Par exemple, AN/ALQ-119 et AN/ALQ-131 ne peuvent pas
être équipés sur le pylône intérieur droit (station 6).

> 💡 En raison des limitations du moteur, nous ne pouvons pas influencer l'efficacité
> des brouilleurs Phantoms.
> Équiper plusieurs pods n’augmente pas leur résistance ou leur couverture.

## Contrôles

![ecm](../../img/wso_ecm_control_panel.jpg)

Les systèmes électroniques de contre-mesure sont tous contrôlés par
le WSO via les commandes du sous-panneau droit.

Les commandes sont dupliquées pour tout pod transporté sur les stations de gauche (<num>4</num> ou
<num>2</num>)
et pour les stations de droite (<num>6</num> et <num>8</num>) respectivement.

Interprétation des modes, techniques et fonctionnement exact des lumières (<num>3</num>)
dépend du modèle de brouilleur chargé.

Généralement, les brouilleurs font la différence entre deux modes ou techniques pouvant être
utilisés.
Les deux ont généralement une phase de préchauffage indiquée par les voyants de veille sur le
panneau.

Le bouton (<num>1</num> et <num>4</num>) peut être utilisé pour placer l'une ou l'autre technique en
veille ou, une fois prête,
activer la transmission (XMIT 1, XMIT 2, BOTH).

Certains modèles de brouilleurs peuvent également détecter qu'ils brouillent activement un radar
ennemi,
indiqué par le voyant AI.

> 🔴 AVERTISSEMENT : Pour éviter d'exposer le personnel aux radiations, le bouton de mode ne doit pas
> être placé dans XMIT lorsqu'il est au sol.

### Bouton et lampe de réinitialisation

![ecm](../../img/wso_ecm_reset_button.jpg)

Le voyant de réinitialisation (le rouge le plus bas <num>3</num>), s'il est allumé, indique un
défaut dans le système de brouillage.
Le clignotement indique une condition de surchauffe, auquel cas le pod
doit être éteint pour éviter tout dommage.

En cas de défaut, le bouton de réinitialisation (<num>2</num>) peut être enfoncé pour réinitialiser
le
système de brouilleur (semblable à l'éteindre et à le rallumer), auquel cas il
refera la période d'échauffement. Si le défaut peut être résolu, le voyant s'éteindra.

## AN/ALQ-131

![AN/ALQ-131](../../img/f4_ext_ecm_pod.jpg)

En service entre 1970 et 1990 ; peut ne pas être équipé sur la station intérieure droite 6.

Les techniques 1 et 2 sont identiques et nécessitent une période d'échauffement d'environ 3 minutes
avant d'être activées.

> 💡 La logique d'échauffement est câblée : le fait d'éteindre et de rallumer le pod, ou une
> courte perte de puissance, nécessitera à nouveau une période de préchauffage complète avant utilisation.

Les voyants de veille s'allument pour indiquer que la phase de préchauffage est terminée et que la
technique est prête à être activée.

Le pod peut surchauffer, auquel cas le témoin de défaut s'allumera.
Dans ce cas, assurez-vous de régler immédiatement le mode sur Veille et laissez-lui le temps de
refroidir d'abord. Ignorer la lampe fera fondre des parties du pod, ce qui l'endommagera
irrémédiablement.

> 🟡 ATTENTION : En règle générale, ne transmettez pas
> pendant plus de 20 minutes sans laisser refroidir entre les utilisations.
> Limitez la poursuite du vol lent et à basse altitude pendant l’utilisation du brouilleur à 30 minutes.
> Pour les températures extérieures extrêmes, ajustez les limites en conséquence.

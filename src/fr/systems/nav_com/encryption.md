# KY-28 Unité de sécurité vocale

## Unité de sécurité vocale KY-28

Le système de communication UHF est capable de fournir une transmission et une réception vocales,
soit conventionnelles, soit chiffrées. Les systèmes UHF et interphone peuvent être
utilisés en combinaison avec l'unité de sécurité vocale KY-28, si vous le souhaitez dans un
environnement tactique ou hostile. Le KY-28 peut soit chiffrer la voix sortante des
transmissions, soit déchiffrer les transmissions vocales reçues ; cependant, ces fonctions
ne peuvent pas être effectuées simultanément. L'équipage peut choisir entre clair ou chiffré
mode de fonctionnement. En mode chiffrement, le KY-28 convertit les entrées vocales
via le microphone dans les transmissions cryptographiques et déchiffre les réponses cryptographiques
qui sont reçues dans les casques des équipages. En fonctionnement en mode simple, le
UHF fonctionne comme un émetteur-récepteur vocal conventionnel.

## KY-28 Commandes et indicateurs

![KY28Mode](../../img/pilot_ky_28.jpg)

Le KY-28 est contrôlé par la centrale KY-28 et respectivement par les
commandes conventionnelles UHF ou Intercom. Les panneaux d'instruments des cockpits avant et
arrière affichent les voyants de mode pour l’un ou l’autre mode. Si le voyant de mode P est
allumé (<num>1</num>)
les KY-28 et UHF/Intercom fonctionnent en mode simple. Si le voyant de mode C est
allumé (<num>2</num>), les KY-28 et UHF/interphone fonctionnent en mode chiffrement.

## KY-28 Panneau de contrôle

![wso_ky_28](../../img/wso_ky_28_control_panel.jpg)

Le panneau de commande KY-28 se trouve dans le cockpit arrière. Il dispose d'un bouton
d'alimentation, d'un commutateur de mode et d'un code
bouton de remise à zéro. Le bouton d'alimentation (<num>3</num>) alimente le KY-28 et peut être
réglé sur
OFF, ON ou
RLY (relais). Le KY-28 n'est pas alimenté en position OFF. Il est alimenté dans les positions
ON et RLY. Si une communication directe entre les unités KY est souhaitée, la position ON doit être
sélectionnée.

> 💡 RLY offrirait la possibilité d'utiliser le KY-28 comme installation de retransmission,
> qui n'est pas modélisé dans DCS.

Le commutateur de mode (<num>2</num>) peut être réglé sur les modes de fonctionnement P (clair)
ou C (chiffré). Pour changer de mode, l'interrupteur doit être tiré vers l'extérieur. Si le
KY-28 est alimenté et le commutateur de mode est réglé sur la position C, l'émetteur
UHF est automatiquement sélectionné pour les transmissions du cockpit avant. Appuyer sur
le bouton de mise à zéro neutralise le code prédéfini dans le KY-28. Le bouton de remise à zéro
(<num>1</num>)
est gardé et ne doit être utilisé qu'en cas d'urgence ou après l'arrêt de l'avion si
requis. Comme le code ne peut être défini qu'au sol, appuyer sur le bouton de remise à zéro
pendant le vol rend le mode de chiffrement inutilisable pour l'équipage pour le reste du vol.

> 💡 Pour permettre les communications UHF conventionnelles, le mode doit être réglé sur P
> (clair) même si le bouton d'alimentation KY-28 est en position OFF. Si le mode est défini
> à C (chiffré), la communication UHF conventionnelle est inhibée à la fois dans le cockpit avant
> et dans le cockpit arrière. Une exception à cette règle concerne l'émission et la réception en garde ou aux
> récepteurs, car ceux-ci ne sont pas affectés par le mode de chiffrement.

## KY-28 Modes de fonctionnement

Tous les signaux transmis et reçus sont acheminés via l’unité KY-28. Quand le
mode KY-28 est réglé sur P (clair), l'émetteur-récepteur UHF fonctionne de manière vocale
conventionnelle, que le KY-28 soit alimenté ou non.

Pour faire fonctionner l'émetteur-récepteur UHF en mode C (chiffrement) du KY-28, le KY-28 doit
être alimenté. Lorsqu'elle fonctionne en mode chiffrement, l'unité KY-28 est
soit en veille, soit en réception, soit en transmission.

Toutes les unités KY-28 restent en condition STANDBY jusqu'à ce que le bouton du
microphone soit actionné ou qu'un préambule de synchronisation soit reçu. Une fois la transmission
ou la réception du message cryptographique terminée, le KY-28 revient automatiquement à l'état de
veille. Pendant que le KY-28 est en état de veille,
l'équipement radio fonctionne également comme un récepteur traditionnel, car toutes les
transmissions non cryptographiques entrantes sont transmises directement aux casques.

L'unité passe à la condition de chiffrement RECEIVE chaque fois qu'un préambule de synchronisation
est
reçu. Le préambule de synchronisation est généré par d'autres unités KY-8, KY-28 ou KY-38
lorsque l'opérateur de la station émettrice actionne l'interrupteur du microphone. Le préambule
de synchronisation garantit que toutes les unités du réseau sont en condition de
réception chiffrée. Le message chiffré est reçu immédiatement après le
signal de préambule de synchronisation, et le message est décodé par le KY-28 et transmis aux
casques d'écoute du personnel navigant sous forme de langage clair.

Lorsque le commutateur du microphone UHF est réglé sur la position UHF, le KY-28 passe à
la condition de TRANSMISSION. Le signal de préambule de synchronisation est transmis à
toutes les stations KY réceptrices pour les faire passer à la condition de réception chiffrée.
Après avoir actionné l'interrupteur du microphone, une brève tonalité se fait entendre dans
les casques de l'équipage. Cette tonalité indique que le signal de préambule de synchronisation
est terminé et transmis, après quoi le KY-28 est prêt à transmettre l’entrée vocale de l’équipage.
Lorsque le bouton du micro est relâché à nouveau, le KY-28 revient à l'état de veille. Le WSO doit sélectionner les communications UHF avec le sélecteur radio
pour transmettre des messages chiffrés. L'émetteur UHF est automatiquement sélectionné pour
transmissions du cockpit avant si le KY-28 fonctionne en mode C.

> 💡 Avec le mode C (chiffrement) sélectionné, la condition de transmission remplace la
> condition de réception du chiffrement. Par conséquent, pendant l'opération de réception de chiffrement,
> l'interrupteur du microphone UHF ne doit pas être actionné tant que le message entrant n'a pas été
> complété.

Pour la procédure d'exploitation, voir [Chapitre KY-28
Opérations](../../procedures/ky_28_operations.md).

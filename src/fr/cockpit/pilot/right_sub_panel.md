# Sous-panneau droit

![pilot_right_sub_panel](../../img/pilot_right_sub_panel_overview.jpg)

La zone du sous-panneau droit est dominée par un groupe de voyants d'avertissement. Elle
comprend également la poignée de déverrouillage manuel de la verrière (<num>1</num>), les voyants
indicateurs du générateur (<num>2</num>), le panneau annonciateur télélumineux (<num>3</num>),
les disjoncteurs d'éclairage (<num>4</num>) et les voyants de mode KY-28
(<num>5</num>).

## Voyants du générateur

![GenInd](../../img/pilot_generator_lights.jpg)

Indiquant LH GEN OUT (gauche), RH GEN OUT (droite) et BUS TIE OPEN, les voyants
s'allumeront lorsque le générateur spécifié est hors ligne, ou, en cas de BUS TIE OPEN, lorsque
les générateurs ne fonctionnent pas en parallèle.
Les indicateurs déclencheront le Master Caution. En cas de panne du double générateur,
ni l’un ni l’autre ne s’allumera.

Pour plus d'informations, voir [3.8 Électricité, chapitre](../../systems/electrics.md).

## Interrupteur de contrôle du réservoir d'alimentation

![FeedCheck](../../img/pilot_feed_tank_check.jpg)

Un interrupteur à ressort à deux positions est utilisé pour confirmer la quantité nominale dans le
réservoir d'alimentation du moteur (cellule 1), les positions étant FEED TANK CHECK et NORM
(par défaut).

Lorsque FEED TANK CHECK est sélectionné et maintenu enfoncé, la jauge de quantité de carburant
indiquera
uniquement la quantité actuelle de carburant dans le réservoir d'alimentation du moteur sur la bande
et
compteur. Lorsque le réservoir d'alimentation est plein, la valeur indiquée doit indiquer 1400 lbs,
±200 lb sur le compteur, et la valeur du ruban doit être de 1 400 lb, ±150 lb.

## Poignée de commande du crochet d'arrêt

![Poignée à crochet](../../img/pilot_tail_hook_lever.jpg)

Tirer la poignée vers le bas étend le crochet de queue.

> 💡 Le crochet est utilisé pour les arrestations d'urgence sur le terrain. Le F-4E ne
> prend pas en charge les opérations sur porte-avions.

## Panneau lumineux de mode KY-28

![KY28Mode](../../img/pilot_ky_28.jpg)

En fonction du mode, l'écran éclairé affiche P pour le mode Plain
(<num>1</num>), ou C pour le mode Cipher (<num>2</num>).

> 💡 Les communications UHF nécessitent que le système soit en mode Plain, même lorsque le
> système est hors tension, à l'exception de l'utilisation et de la surveillance du canal de garde.

## Panneau annonciateur télélumineux

![Télééclairage](../../img/pilot_telelight_panel.jpg)

Fournit la majorité des avertissements du système de l'avion qui peuvent être rectifiés par le
pilote. La plupart des avertissements sur le panneau entraîneront l'allumage de l'avertissement
principal ;
ceux qui ne le feront pas seront notés.

| Lumière | Explication | Lumière | Explication | Lumière | Explication |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Alt Encoder out | Le voyant s'allumera s'il y a un signal peu fiable ou aucun signal provenant de l'unité de codage d'altitude. Il peut également s'allumer momentanément lors de montées à grande vitesse, de manœuvres de plongée ou pendant un vol transsonique |                     |                                                                                                                                              |                      |                                                                                                                                                         |
| IFF | Le voyant s'allume lorsque le code du mode 4 est remis à zéro ou qu'aucun code n'est inséré | DC Bus | Le voyant s'allumera si les deux générateurs tombent en panne ou si une chute de tension se produit entre le bus CC principal et le bus CC essentiel.                  |                      |                                                                                                                                                         |
| Canopy Unlocked | La lumière s’allumera dans le cockpit avant si une verrière n’est pas verrouillée et abaissée. Le feu arrière ne s'allumera que lorsque la capote arrière n'est pas complètement verrouillée et abaissée.                               | Hook down | La lumière s'allumera si le crochet d'arrêt n'est pas relevé et verrouillé.                                                                        |                      |                                                                                                                                                         |
| Autopilot Pitch Trim | Le voyant s'allumera lorsque le AFCS est engagé et que le suivi automatique du trim de tangage est inopérant ou suffisamment en retard par rapport aux manœuvres de l'avion.                                               | Autopilot Disengage | Le voyant s'allume lorsque le pilote automatique est désengagé après l'engagement initial du AFCS.                                             |                      |                                                                                                                                                         |
| Left Ext Fuel | Le témoin s'allume si le réservoir de carburant externe gauche est sélectionné mais qu'aucun débit de carburant n'est détecté.                                                                                                              | CTR Ext Fuel | Le témoin s'allume si le réservoir de carburant externe central est sélectionné, mais aucun débit de carburant n'est détecté.                                        | Right Ext Fuel | Le témoin s'allumera si le réservoir de carburant externe droit est sélectionné, mais aucun débit de carburant n'est détecté.                                                    |
| Fuel Level Low | Le voyant s'allumera lorsque le niveau de carburant dans les cellules 1 et 2 aura atteint un état de carburant prédéterminé de 1 650 ± 200 livres.                                                                                     | CHK Fuel Filters | Le voyant s'allume lorsque le filtre à carburant est obstrué. Le filtre s'ouvre automatiquement pour contourner, permettant un débit de carburant normal vers le moteur | Radar On Cool Off |                                                                                                                                                         |
| L Anti Ice On | Le témoin s’allume lorsque le système de purge d’air anti-givrage est activé.                                                                                                                                             | R Anti Ice On | Le témoin s’allume lorsque le système de purge d’air anti-givrage est activé.                                                                          | Static Corr Off | Le voyant s'allumera si le SPC échoue ou si le commutateur CADC est placé sur CORR OFF |
| L Aux Air Door | Le témoin s'allume lorsque la porte d'air auxiliaire gauche fonctionne en déphasage avec la poignée du train d'atterrissage.                                                                                                  | R Aux Air Door | Le témoin s'allume lorsque la porte d'air auxiliaire droite fonctionne en déphasage avec la poignée du train d'atterrissage.                              | Speedbrake out | Le témoin s’allumera si le frein rapide est éteint ou s’il n’est pas complètement fermé.                                                                                |
| Windshield Temp High | La lumière s'allumera lorsque le pare-brise approche d'une température qui provoquera une distorsion optique lors de l'utilisation du système d'élimination de la pluie sur le pare-brise. L’élimination de la pluie sur le pare-brise doit être désactivée immédiatement. | Duct Temp High | Le voyant s'allume lorsque la température dans le conduit d'admission du moteur dépasse les limites autorisées.                                     | Check Hyd Gauges | Le voyant s'allumera si la pression d'un système descend en dessous de 1 500 ± 100 psi.                                                                     |
| Slats In | La lumière s'allumera si l'interrupteur de priorité des lattes est placé sur la position IN, forçant les lattes à arrêter de bouger en fonction de l'AOA.                                                                 | Pitch Aug Off | Le voyant s'allumera lorsque l'avion est sous tension et que l'interrupteur d'augmentation du tangage n'est pas engagé.                                        | Cabin Turb Overspeed | Le voyant s'allumera si la turbine de la cabine du groupe frigorifique est soumise à des pressions et des températures supérieures au fonctionnement normal.  |
| Inertial Nav Sys Out | Le voyant s'allumera si le INS (Inertial Navigation System) est en panne ou éteint.                                                                                                                               | Tank 7 Fuel | Le voyant s'allumera si la vanne de transfert de carburant du réservoir 7 ne s'ouvre pas.                                                                   |                      |                                                                                                                                                         |
| Oxygen Low | Le voyant s'allume lorsque la quantité d'oxygène est inférieure à 1 litre.                                                                                                                                              |                     |                                                                                                                                              | Fire Sys | Le voyant s'allume lorsqu'un tube capteur de détecteur d'incendie/surchauffe est brûlé, qu'un fil de détecteur frotte vers la terre ou que le module de commande tombe en panne. |

## Disjoncteurs d'éclairage

![pilot_light_cbs](../../img/pilot_light_cb.jpg)

Cachés derrière un faisceau de câbles à droite du panneau télélumineux se trouvent deux
disjoncteurs contrôlant les lumières.

Celui du haut (<num>1</num>) est responsable de l'alimentation du tableau de bord
et le rétroéclairage de la console, tandis que le disjoncteur inférieur (<num>2</num>) alimente
tous les voyants et voyants d'avertissement.

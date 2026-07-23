# Persistance

Le module dispose d'un système de persistance qui permet de sauvegarder l'état actuel de l'avion,
le rendant disponible pour un vol ultérieur - même à travers plusieurs missions.

> 💡 La persistance des avions peut être une fonctionnalité intéressante pour les **créateurs de campagnes**,
> simulant que le pilote doit réutiliser le même avion sur plusieurs
> missions de la campagne.

![F4 dans le hangar](../img/f4_in_hangar.jpg)

L'état de l'avion comprend toutes ses propriétés, ainsi que ses composants
[usure et état](mission_editor.md#condition-and-wear). Ceci aussi
comprend les positions des interrupteurs et des boutons. Les composants endommagés sont
**automatiquement réparés** entre les vols.

> 💡 En fonction du type d'apparition, l'équipe au sol peut modifier certains interrupteurs et
> boutons tout en préparant l'avion pour le pilote à l'avance. Commutateurs importants
> sont placés dans leurs positions initiales correctes, quelle que soit la façon dont le joueur
> les a quittés auparavant.

Avec la persistance activée, l'état de l'avion sera automatiquement enregistré
lorsque l'avion est laissé au sol **avec succès** (par exemple pas en vol
ou après un crash).

## Clé d'avion

Un avion persistant est enregistré sous forme de fichier situé dans le dossier **Jeux sauvegardés**.
Un
le chemin possible pourrait par exemple ressembler à :

`C:\Users\John Doe\Saved Games\DCS_F4E\cache\persistent_ac`

Le nom du fichier est la _clé de l'avion_ utilisée pour identifier un
avion persistant.

Ces clés sont soit générées automatiquement en fonction de la **Livrée** et du **numéro de
queue** de l'avion, soit fixées explicitement par l'auteur d'une mission via les paramètres
de l'éditeur de mission.

## Activer

Il existe deux manières de permettre au système de persistance de sauvegarder et de charger le
état de l'avion.

### Paramètre spécial

L'utilisateur peut configurer la persistance dans ses paramètres spéciaux en cochant
[Avion persistant (par livrée et numéro de
queue)](special_options.md#persistent-aircraft-by-livery-and-tail-number).

La liaison **Initialize Persistent Aircraft State** (<kbd>LCTRL</kbd>+<kbd>P</kbd>)
doit être appuyée lors de la première utilisation pour commencer à suivre cet avion particulier.

L'avion est suivi par sa livrée et son numéro de queue. Toute mission ultérieure
volé avec la même combinaison de livrée et de numéro de queue, tandis que l'avion
la persistance est activée, chargera cet avion particulier.

### Éditeur de missions

L'auteur d'une mission peut annuler les paramètres spéciaux définis par l'utilisateur pour sa
mission en activant ou désactivant les systèmes de persistance via les paramètres de l'éditeur
de mission.

L'option [Spawn Type : Persistent](mission_editor.md#persistent) active le système, et la
[Clé d'avion persistante](mission_editor.md#persistent-aircraft-key) est utilisée pour
déterminer quel avion suivi particulier est piloté dans cette mission.

> 💡 Si la livrée et/ou le numéro de queue sont modifiés en jeu via le menu Réarmer,
> l'avion ne chargera pas automatiquement l'état persistant pour le nouveau choix.
> Appuyez sur la liaison **Reload Aircraft** (<kbd>LCTRL</kbd>+<kbd>R</kbd>) pour charger l'état
> de la livrée/du numéro de queue nouvellement sélectionné. Le rechargement de l'avion ramènera
> les interrupteurs et les boutons du cockpit à leur état d'initialisation.
> Il est recommandé de changer de livrée/numéro de queue et de recharger au tout début
> du vol.

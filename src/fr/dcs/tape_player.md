# Lecteur de cassettes

Bien que non présent sur le vrai Phantom, notre avion est équipé d'un lecteur de cassettes
pour écouter de superbes morceaux en vol !

Par conséquent, l'**Airborne Video Tape Recorder** fait également office d'enregistreur et, si
une cassette de musique spéciale y est insérée, de lecteur de musique.

![Cassette musicale](../img/tape_player_cassette.jpg)

> 💡 Les chansons peuvent également être trouvées en haute qualité dans
> `<DCS Install Folder>\Mods\aircraft\F-4E\Music\Of Ghosts and Thunder (Meteor F-4 OST)`.

## Contrôles

L'AVTR et la plupart de ses commandes se trouvent à droite du siège du pilote, voir
[2.1.10.3 Système AVTR](../cockpit/pilot/right_console/aft_section.md#airborne-video-tape-recorder)
pour plus de détails. Les voyants d'état et son commutateur de mode se trouvent sur le panneau
principal dans
le cockpit WSO, voir
[2.2.2 Contrôle AVTR](../cockpit/wso/left_sub_panel.md#avtr-control).

> 💡 Jester peut définir le mode depuis son interface utilisateur sous _"Systèmes > AVTR Recorder"_.

Pour échanger les cassettes, l'AVTR doit d'abord être éteint en réglant son mode
sur OFF. Ensuite, vous pouvez appuyer sur le bouton EJECT pour ouvrir le support de cassette.

Une fois la cassette sortie, elle peut être échangée en cliquant dessus. Réinsérez la
cassette en cliquant avec le bouton gauche sur le support.

Une fois la cassette musicale chargée, les chansons peuvent être jouées en réglant le commutateur
de mode sur RECORD. Le voyant RECORDER ON à côté du genou gauche du pilote indique l'état
et le faire tourner ajustera le volume du pilote. Le volume du WSO peut être
ajusté en tournant la lampe à intensité variable KY-28 P-Light.

L'AVTR affiche la bande sonore en cours de lecture sur son écran pour le temps écoulé,
par ex. `M01` pour la première piste. Les pistes peuvent être sautées en utilisant soit le
bouton UNTHREAD, soit en cliquant sur le voyant RCD/EOT dans le cockpit WSO.

![Affichage des pistes](../img/tape_player_track_display.jpg)

Si la cassette a fini de lire toutes les chansons, le voyant EOT s'allume et
commander explicitement la piste suivante fera redémarrer la première piste.

## Chansons personnalisées

Le lecteur de cassette récupère automatiquement toute chanson trouvée dans

`<DCS Install Folder>\Mods\aircraft\F-4E\Sounds\TapePlayer`

et les joue par ordre alphabétique.

Notez qu'il est nécessaire pour DCS que chaque morceau soit également configuré comme un
Fichier [SDEF](modding/jester/voice_files.md#sdef) dans

`<DCS Install Folder>\Mods\aircraft\F-4E\Sounds\sdef\TapePlayer`

Pour ajouter vos propres chansons, placez-les simplement dans le dossier ci-dessus et créez le
fichier SDEF correspondant. Assurez-vous de redémarrer DCS, car les sons sont chargés au
démarrage du jeu.

> 💡 Si vous rencontrez des difficultés pour faire fonctionner une chanson personnalisée, essayez le format de fichier
> **OGG** pour le fichier son. Assurez-vous également que les noms de fichiers ne contiennent aucun
> caractères Unicode spéciaux, tels que `·` ou `你好`, DCS a tendance à planter avec
> ceux-ci.
>
> Pour accélérer les temps de chargement, DCS a introduit un cache de chansons. Malheureusement,
> ce mécanisme désactive la possibilité de charger des chansons personnalisées. Remplacez soit les
> bandes sonores existantes par les vôtres (afin qu'elles partagent le même nom), soit
> supprimez manuellement le fichier de cache audio `sdef.tar`.

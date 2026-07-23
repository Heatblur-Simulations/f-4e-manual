# Combat

L'assistance de Jester pour les situations de combat est généralement divisée en options sur
la roue Jester, lorsque vous n'êtes pas encore dans un environnement d'action intense, et un système
intelligent
**Action contextuelle** à utiliser dans des situations nécessitant une action rapide, telles que
lors d'un combat.

## Action contextuelle

La commande contextuelle (par défaut <kbd>V</kbd>) permet une coopération intuitive
et échange entre Pilote et WSO en fonction des contextes suivants :

- Pave Spike - TGT FIND sélectionné sur le bouton de mode de livraison
- Dive Toss - DT ou DL sélectionné sur le bouton de mode de livraison
- Dogfight - Mode CAGE ou BORESIGHT
- Au-delà de la portée visuelle – autre

L'action contextuelle peut changer de sémantique si elle est enfoncée seulement momentanément (•),
si elle est maintenue enfoncée
(▄) ou si vous cliquez deux fois (••, double-cliquez).

| Contexte | Durée | Actions |
| ---------- | :------: | ----------------------------------- |
| BVR - Balayage |    • | Sélectionnez la cible suivante |
|            |    ▄ | **Verrouiller** la cible sélectionnée |
|            |    •• | Réinitialiser la sélection de cible |
| BVR - Verrouillage |  • ou ▄ | Supprimez le verrouillage, mais gardez la cible au point |
|            |    •• | Déverrouillez et concentrez-vous |
| Combat aérien |    • | Sélectionnez l'aspect cible suivant |
|            |    ▄ | Verrouiller/déverrouiller le contact à l'avance |
|            |    •• | Quitter le mode CAGE ou BORESIGHT |
| Dive Toss |          | Verrouiller/déverrouiller le retour au sol |
| Pave Spike |          | Verrouiller/déverrouiller la cible à côté du réticule |

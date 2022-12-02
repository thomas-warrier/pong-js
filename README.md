# Proposition de projet

Nous voulons réaliser le jeu pong (un des 1er jeux d'arcade), qui implémentera les fonctionnalités suivantes.



![Untitled](https://s2.loli.net/2022/11/14/tljBJPyVvgQwYpo.png)





Fonctionnalité

- écran de menu :

- choix difficulté : 3 niveaux de difficulté (vitesse de la balle)

- démarrer partie

- bouger 2 joueurs indépendamment

- la balle rebondit contre le bord haut et bas et les joueurs.

- comptabilisation et affichage des scores des joueurs

- Toute la mécanique du jeu sera gérée dans une fonction nommer `update`, qui sera appelée à intervalle régulier, grâce à la fonction setInterval.

- faire bouger les joueurs

- faire bouger la balle

- dessiner

- Si un joueur envoi la balle dans le camp de l'adversaire

- augmenter son score

- faire réapparaître la balle

- attendre 0.5 seconde avant de faire partir la balle

- Lors du rebond de la balle contre le joueur

- si elle rebondit au milieu, elle repartira perpendiculaire au joueur.

- Plus elle sera haute par rapport au milieu plus elle ira vers le haut.

- plus elle sera basse par rapport au milieu plus elle ira vers le bas.

- Ne pas re-afficher le message d'explication au rechargement de la page

- sauvgarder les score (uniquement au rechargement de page)

# Ce qu'on a réussi a faire
 - nous avons réussi a implémenter tout ce nous voulions faire

 - nous avons utilisé le pattern state pour la gestion des menus

 - nous avons implémenter des fonctionnalités bonus que nous avions pas prévu au début tel que la trainée de balle ajouté des sons.

 - nous avons importé une font personalisé et crée les design avec drawText()

 - nous avons utilisé des les pseudos classes (class) en javascript
# Aperçu de la version final du jeu

<img src="https://cdn.discordapp.com/attachments/884899575490568292/1048264781397753976/image.png"/>

<img src="https://cdn.discordapp.com/attachments/884899575490568292/1048267181214945330/image.png"/>

<img src="https://cdn.discordapp.com/attachments/884899575490568292/1048262247065067571/image.png"/>

<img src="https://cdn.discordapp.com/attachments/884899575490568292/1048261878012456970/image.png"/>

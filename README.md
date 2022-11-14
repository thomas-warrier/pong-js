Nous allons réaliser le jeu pong (un des 1er jeux d'arcade), qui implémentera les fonctionnalités suivantes.



![Untitled](https://s2.loli.net/2022/11/14/tljBJPyVvgQwYpo.png)





Fonctionnalité



- écran menu :


- choix difficulté : 3 niveaux de difficulté (vitesse de la balle)


- démarré partie



- bougé 2 joueurs indépendamment


- la balle rebondit contre le bord haut et bas et les joueurs.


- comptabilisation et affichage des scores des joueurs


- Toute la mécanique du jeu sera gérée dans une fonction nommée `update`, qui sera appelée à intervalle régulier, grâce à la fonction setInterval.


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

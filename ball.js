function lenght(x, y) {
	return Math.sqrt(x ** 2 + y ** 2);
}


var speedBall = () => 10;//width / 100 + settingsGame.difficulty * 5
const rayonBall = 10;
class Ball {
	/**
	 * 
	 * @param {double} x position x par défaut de la balle
	 * @param {double} y position y par défaut de la balle
	 */
	constructor(x, y) {
		//initialise la position inital de la balle
		this.defaultX = x;
		this.defaultY = y;
		this.spawn();
	}


	/**
	 * fait rappraitre la ball à sa possition inital
	 */
	spawn() {
		this.x = this.defaultX;
		this.y = this.defaultY;
		this.updateRect();//met a jour l'attribut rect (pour correspondre aux nouvelles coordonnée)

		this.vx = this.vy = 0;
		setTimeout(() => {
			do {
				this.vx = (Math.random() * 2 - 1);
				this.vy = Math.random() * 2 - 1;
			} while (Math.abs(this.vx) <= 0.2);// pr que la balle aille sur les coté et pas uniquement vers le haut
			this.x = this.defaultX;
			this.y = this.defaultY;

			let longeurDeplacement = lenght(this.vx, this.vy);

			// //normalise avec la vitesse initale
			// this.vx = (this.vx / longeurDeplacement) * speedBall();
			// this.vy = (this.vy / longeurDeplacement) * speedBall();
		}, 1000);


	}
	draw() {
		setColor("white");
		drawCircle(this.x, this.y, rayonBall);
	}



	update(ar) {
		this.move(ar)
	}

	/**
	 * met a jour le rectangle par rapport au coordonnée, largeur, hauteur
	 */
	updateRect() {
		this.rect = new Rect(this.x - rayonBall, this.y - rayonBall, rayonBall * 2, rayonBall * 2);
	}

	move(players) {
		let longeurDeplacement = lenght(this.vx, this.vy); //calcule la norm du vecteur déplacement pour évité que la balle se déplace plus vite en diagnal
		if (longeurDeplacement != 0) {
			if (this.rect.top() <= 0 || this.rect.bot() >= height) {
				this.vy = -this.vy;
			}
			for (var player of players) {
				if (this.rect.coll(player.rect)) {// détecte une collision avec un joueurs

					let distBallFromCenter = Math.abs(this.x - width / 2); //distance par rapport au centre de la balle
					let distPlayerSideFromCenter = Math.min(Math.abs(player.rect.left() - width / 2), Math.abs(player.rect.right() - width / 2)); //on parle ici du coté le plus proche du centre
					console.log(distPlayerSideFromCenter);
					if (distBallFromCenter > distPlayerSideFromCenter) {//alors rebons sur les coté haut ou bas
						console.log("vertical bcs : ", distBallFromCenter, distPlayerSideFromCenter);
						this.vy = -this.vy; // simule un rebond
						this.vy += player.vy;// si joueur se déplace => pousse la balle
					} else {//alors rebons sur les droit ou gauche
						console.log("horizontal bcs : ", distBallFromCenter, distPlayerSideFromCenter);
						this.vx = -this.vx; // inverse le déplacement horizontal

						//si la balle touch le haut du joueur elle ira vers le haut
						//si elle touche le millieu elle ira perpendiculaire au joueur
						//si elle touche le bas du joueur elle ira vers le bas
						this.vy = (this.y - player.rect.y - player.rect.h / 2) / player.rect.h;
					}
					break;//si touche un joueur => impossible de touché l'autre en même temps
				}
			}

			//normalise les déplacements
			this.x += (this.vx / longeurDeplacement) * speedBall();
			this.y += (this.vy / longeurDeplacement) * speedBall();

			this.updateRect();
		}
	}

}
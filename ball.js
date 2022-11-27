function lenght(x, y) {
	return Math.sqrt(x * x + y * y);
}


var speedBall = () => width / 200 + settingsGame.difficulty * 3;
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
		let additionalSpeedY = 0;
		if (longeurDeplacement != 0) {

			if (this.rect.top() <= 0) {
				this.vy = Math.abs(this.vy);
			} else if (this.rect.bot() >= height) {
				this.vy = -Math.abs(this.vy);
			}
			for (var player of players) {
				if (this.rect.coll(player.rect)) {// détecte une collision avec un joueurs
					let distBallFromCenter = Math.abs(this.x - width / 2); //distance par rapport au centre de la balle
					let distPlayerSideFromCenter = Math.min(Math.abs(player.rect.left() - width / 2), Math.abs(player.rect.right() - width / 2)); //on parle ici du coté le plus proche du centre
					if (distBallFromCenter > distPlayerSideFromCenter) {//alors rebons sur les coté haut ou bas
						let centerYPlayer = player.rect.top() + player.rect.w / 2;
						if (this.y > centerYPlayer) {//ball plus basse
							this.vy = Math.abs(this.vy);
						} else {
							this.vy = -Math.abs(this.vy);
						}
						additionalSpeedY += player.vy;// si joueur se déplace => pousse la balle
					} else {//alors rebons sur les droit ou gauche
						this.vx = -this.vx; // inverse le déplacement horizontal

						//si la balle touch le haut du joueur elle ira vers le haut
						//si elle touche le millieu elle ira perpendiculaire au joueur
						//si elle touche le bas du joueur elle ira vers le bas
						this.vy = (this.y - player.rect.y - player.rect.h / 2) / player.rect.h;
					}
					break;//si touche un joueur => impossible de touché l'autre en même temps
				}
			}
			longeurDeplacement = lenght(this.vx, this.vy);

			//normalise les déplacements
			this.x += this.vx / longeurDeplacement * speedBall();
			this.y += this.vy / longeurDeplacement * speedBall() + additionalSpeedY;

			this.updateRect();
		}
	}

}
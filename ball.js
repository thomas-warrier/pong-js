function normalize(x, y) {
	return Math.sqrt(x ** 2 + y ** 2);
}


const speedBall = 9;
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


		do {
			this.vx = (Math.random() * 2 - 1); 
			this.vy = Math.random() * 2 - 1;
		} while (Math.abs(this.vx) <= 0.2);// pr que la balle aille sur les coté et pas uniquement vers le haut

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
		let norm = normalize(this.vx, this.vy); //calcule la norm du vecteur déplacement pour évité que la balle se déplace plus vite en diagnal
		if (norm != 0) {
			if (this.rect.top() <= 0 || this.rect.bot() >= height) {
				this.vy = -this.vy;
			}
			for (var player of players) {
				if (this.rect.coll(player.rect)) { // détecte une collision avec un joueurs
					this.vx = -this.vx; // inverse le déplacement horizontal

					//si la balle touch le haut du joueur elle ira vers le haut
					//si elle touche le millieu elle ira perpendiculaire au joueur
					//si elle touche le bas du joueur elle ira vers le bas
					this.vy = (this.y - player.rect.y - player.rect.h / 2) / player.rect.h;


					break;//si touche un joueur => impossible de touché l'autre en même temps
				}
			}

			//normalise les déplacements
			this.x += (this.vx / norm) * speedBall;
			this.y += (this.vy / norm) * speedBall;

			this.updateRect();
		}
	}
}
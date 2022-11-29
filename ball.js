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

		this.lenghtTail = 20;
	}


	/**
	 * fait rappraitre la ball à sa possition inital
	 */
	spawn() {
		if (!this.spawningProcess) {
			this.spawningProcess = true;

			this.tail = [];


			this.x = this.defaultX;
			this.y = this.defaultY;
			this.updateRect();//met a jour l'attribut rect (pour correspondre aux nouvelles coordonnée)

			this.multiplicatorSpeed = 1;
			this.vx = this.vy = 0;
			setTimeout(() => {
				do {
					this.vx = (Math.random() * 2 - 1);
					this.vy = Math.random() * 2 - 1;
				} while (Math.abs(this.vx) <= 0.2);// pr que la balle aille sur les coté et pas uniquement vers le haut
				this.x = this.defaultX;
				this.y = this.defaultY;

				this.spawningProcess = false;
			}, 1000);

		}

	}
	draw() {
		if (this.color) {
			setColor(this.color)
		} else {
			setColor("blue");
		}
		for (const i in this.tail) {
			drawCircle(this.tail[i][0], this.tail[i][1], rayonBall * i / this.tail.length);
		}
		setColor("white")

		drawCircle(this.x, this.y, rayonBall);
		
		

	}



	update(ar) {
		this.tail.push([this.x, this.y]);
		if (this.tail.length > this.lenghtTail) this.tail.shift();

		this.move(ar);
	}

	/**
	 * met a jour le rectangle par rapport au coordonnée, largeur, hauteur
	 */
	updateRect() {
		this.rect = new Rect(this.x - rayonBall, this.y - rayonBall, rayonBall * 2, rayonBall * 2);
	}

	move(players) {
		if (this.vx != 0 && this.vy != 0) {
			//collision haut et bas
			if (this.rect.top() <= 0) {
				this.vy = Math.abs(this.vy);
				playBongSound();
			} else if (this.rect.bot() >= height) {
				this.vy = -Math.abs(this.vy);
				playBongSound();
			}

			//collision joueurs
			for (var player of players) {
				let distFromCenterSideExtBall = Math.min(Math.abs(this.rect.left() - width / 2), Math.abs(this.rect.right() - width / 2));
				let distPlayerSideFromCenter = Math.min(Math.abs(player.rect.left() - width / 2), Math.abs(player.rect.right() - width / 2)); //on parle ici du coté le plus proche du centre

				if (this.rect.coll(player.rect)) {// détecte une collision avec un joueurs
					this.color = player.color;
					playTouchSound();

					this.multiplicatorSpeed *= 1.01;

					// inverse le déplacement horizontal
					if (player.cote == coteDuCamp.left) {//on fait comme cella pour évité les bugs de multi détection qui entraine des mauvais changement de directions
						this.vx = Math.abs(this.vx);
					} else {
						this.vx = -Math.abs(this.vx);
					}

					//si la balle touch le haut du joueur elle ira vers le haut
					//si elle touche le millieu elle ira perpendiculaire au joueur
					//si elle touche le bas du joueur elle ira vers le bas
					this.vy = (this.y - player.rect.y - player.rect.h / 2) / player.rect.h;

					break;//si touche un joueur => impossible de touché l'autre en même temps
				} else if (distFromCenterSideExtBall > distPlayerSideFromCenter) {
					for (var pWin of players) { // fait gagner l'autre joueur
						pWin.detectWinRound(this);
					}
					this.spawn();
				}
			}
			let longeurDeplacement = lenght(this.vx, this.vy);

			//normalise les déplacements
			this.x += this.vx / longeurDeplacement * speedBall() * this.multiplicatorSpeed;
			this.y += this.vy / longeurDeplacement * speedBall() * this.multiplicatorSpeed;
		}

		this.updateRect();
	}

}
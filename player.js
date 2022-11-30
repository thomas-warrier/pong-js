
const wp = 5;
const hp = 100;
var speedPlayer = () => height / 75 + settingsGame.difficulty * 6; //la vitesse de la balle
const coteDuCamp = {
	"left": "gauche",
	"right": "right"
}
/**
 * class PLayer
 */
class Player {
	/**
	 * 
	 * @param {double} x position x de joueur
	 * @param {double} y position y de joueur
	 * @param {int} up le nom de la touche pour allez vers le haut
	 * @param {int} down le nom de la touche pour allez vers le bas
	 * 
	 */
	constructor(x, y, up, down, cote, color) {
		this.rect = new Rect(x, y, wp, hp);
		this.score = 0;
		this.up = up;
		this.down = down;
		this.cote = cote;
		this.color = color;

		this.holdingCounter = 0;

		this.vy = 0;
	}
	/**
	 * detecte quand un point est gagné
	 * @param {Ball} ball 
	 */
	detectWinRound(ball) {
		if (!(this.cote == coteDuCamp.left && ball.rect.left() < this.rect.right() ||
			this.cote == coteDuCamp.right && ball.rect.right() > this.rect.left())) { //si le player est a gauche c'est le moment ou le coté droit de la balle franchis la bordure qui nous intéresse
			this.score++;//incr
		}
	}
	/**
	 * detecte si le player est en dehors des bordures de la map
	 */
	playerOutOfScreen() {
		if (this.rect.top() < 0 || this.rect.bot() > height) {
			this.rect.y -= this.vy;
			this.vy = 0;
		}
	}
	/**
	 * draw le player avec une aura de la couleur du player
	 */
	draw() {
		setColor(this.color);
		ctx.shadowBlur = 30;
		ctx.shadowColor = this.color;
		this.rect.draw();
		this.drawScore();
		ctx.shadowBlur = 0;
	}
	/**
	 * draw le score en haut de l'écran
	 */
	drawScore() {
		let x = width / 4;
		if (this.cote == coteDuCamp.right) {
			x = (width / 4) * 3;
		}
		drawText(this.score.toString(), x, 50);
	}
	/**
	 * update si player en dehors des bordures
	 */
	update() {
		if (this.vy != 0) this.holdingCounter += 0.4;
		else this.holdingCounter = 0;


		this.rect.y += this.vy * this.holdingCounter / (this.holdingCounter + 2);

		this.playerOutOfScreen()
	}

	/**
	 * doit être appeler quand une touche est presser
	 * @param {int} key code de la touche presser
	 */
	keyPress(key) {
		switch (key) {
			case this.up:
				this.vy = -speedPlayer();
				break;
			case this.down:
				this.vy = speedPlayer();
				break;
			default:
				break;
		}
	}

	/**
	 * doit être appleer quand une touche est relacher
	 * @param {int} key code de la touche presser
	 */
	keyRelease(key) {
		switch (key) {
			case this.up:
				this.vy = 0;
				break;
			case this.down:
				this.vy = 0;
				break;
			default:
				break;
		}
	}
}

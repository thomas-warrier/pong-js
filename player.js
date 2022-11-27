
const wp = 5;
const hp = 100;
var speedPlayer = () => height / 75 + settingsGame.difficulty * 6;
const coteDuCamp = {
	"left": "gauche",
	"right": "right"
}
class Player {
	/**
	 * 
	 * @param {double} x position x de joueur
	 * @param {double} y position y de joueur
	 * @param {int} up le nom de la touche pour allez vers le haut
	 * @param {int} down le nom de la touche pour allez vers le bas
	 * 
	 */
	constructor(x, y, up, down, cote) {
		this.rect = new Rect(x, y, wp, hp);
		this.score = 0;
		this.up = up;
		this.down = down;
		this.cote = cote;
		this.holdingCounter = 0;

		this.vy = 0;
	}

	detectWinRound(ball) {
		if (!(this.cote == coteDuCamp.left && ball.rect.left() < this.rect.right() ||
			this.cote == coteDuCamp.right && ball.rect.right() > this.rect.left())) { //si le player est a gauche c'est le moment ou le coté droit de la balle franchis la bordure qui nous intéresse
			this.score++;
		}
	}
	playerOutOfScreen() {
		if (this.rect.top() < 0 || this.rect.bot() > height) {
			this.rect.y -= this.vy;
			this.vy = 0;
		}
	}

	draw() {
		setColor("white");
		this.rect.draw();
		this.drawScore();
	}

	drawScore() {
		let x = width / 4;
		if (this.cote == coteDuCamp.right) {
			x = (width / 4) * 3;
		}
		drawText(this.score.toString(), x, 50);
	}

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

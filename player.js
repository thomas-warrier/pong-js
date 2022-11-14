
const wp = 20;
const hp = 80;
const speedPlayer = 5;
class Player {
	constructor(x, y, up, down) {
		this.rect = new Rect(x, y, wp, hp);
		this.score = 0;
		this.up = up;
		this.down = down;

		this.vy = 0;
	}

	draw() {
		setColor("white");
		this.rect.draw();
	}

	update() {
		this.rect.y += this.vy;
		if (this.rect.bot() >= height || this.rect.top() <= 0) {
			this.y -= this.vy;
		}
	}

	keyPress(code) {
		switch (code) {
			case this.up:
				this.vy = -speedPlayer;
				break;
			case this.down:
				this.vy = speedPlayer;
				break;
			default:
				break;
		}
	}
	keyRelease(code) {
		switch (code) {
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

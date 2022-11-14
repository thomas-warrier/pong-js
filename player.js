
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
	}
}

function normalize(x, y) {
	return Math.sqrt(x ** 2 + y ** 2);
}


const speedBall = 9;
const rayonBall = 10;
class Ball {
	constructor(x, y) {
		this.defaultX = x;
		this.defaultY = y;
		this.spawn();
	}
	spawn() {
		this.x = this.defaultX;
		this.y = this.defaultY;
		this.updateRect();

		do {
			this.vx = (Math.random() * 2 - 1); // pr que la ball aille sur les coté avec une forte proba
			this.vy = Math.random() * 2 - 1;
		} while (Math.abs(this.vx) <= 0.2);

	}
	draw() {
		setColor("white");
		drawCircle(this.x, this.y, rayonBalle);
	}



	update(ar) {
		this.move(ar)
	}

	updateRect() {
		this.rect = new Rect(this.x - rayonBalle, this.y - rayonBalle, rayonBalle * 2, rayonBalle * 2);
	}

	move(ar) {
		let norm = normalize(this.vx, this.vy);
		if (norm != 0) {
			if (this.rect.top() <= 0 || this.rect.bot() >= height) {
				this.vy = -this.vy;
			}
			for (var p of ar) {
				if (this.rect.coll(p.rect)) {
					this.vx = -this.vx;
					this.vy = (this.y - p.rect.y - p.rect.h / 2) / p.rect.h;

					break;
				}
			}

			this.x += (this.vx / norm) * speedBall;
			this.y += (this.vy / norm) * speedBall;
			this.updateRect();
		}
	}
}
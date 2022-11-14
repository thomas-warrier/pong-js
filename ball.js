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
		
	}

	updateRect() {
		this.rect = new Rect(this.x - rayonBalle, this.y - rayonBalle, rayonBalle * 2, rayonBalle * 2);
	}

	move(ar) {
		
	}
}
class Rect {
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}
	left() {
		return this.x;
	}
	right() {
		return this.x + this.w;
	}

	top() {
		return this.y;
	}
	bot() {
		return this.y + this.h;
	}

	coll(other) {
		return this.right() >= other.left() &&
			this.left() <= other.right() &&
			this.bot() >= other.top() &&
			this.top() <= other.bot();
	}


	draw() {
		drawRect(this.x, this.y, this.w, this.h);
	}
}
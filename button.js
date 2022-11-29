
class Button {
	constructor(str, x, action) {
		this.txt = str;
		this.x = x;
		this.action = action;
	}

	draw(y) {
		drawText(this.txt(), this.x, y);
	}

	run() {
		this.action();
	}
}
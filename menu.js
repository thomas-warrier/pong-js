
class Button {
	constructor(str, x, y, action) {
		this.txt = str;
		this.x = x;
		this.y = y;
		this.action = action;
	}

	draw() {
		drawText(this.txt, this.x, this.y);
	}

	run() {
		this.action();
	}
}

class Menu {
	constructor() {
		this.centerX = width / 2;
		this.menuLabel = "Menu";
		this.buttons = [
			new Button("Play", this.centerX, 150, () => {
				settingsGame.playing = true;
				settingsGame.inGame = true;
			}),
		];
		this.selected = 0;
	}

	selecteDown() {
		this.selected = (this.selected + 1) % this.buttons.length;
	}
	selecteUp() {
		this.selected = Math.abs((this.selected - 1) % this.buttons.length);
	}


	draw() {
		setColor("white");
		drawText(this.menuLabel, this.centerX, 50);

		for (let i = 0; i < this.buttons.length; i++) {
			let btn = this.buttons[i]
			btn.draw();

			if (this.selected == i) {
				let w = 50;
				drawRect(btn.x - w / 2, btn.y + 10, w, 2);
			}
		}
	}
	update() {
		if (settingsGame.inGame) {
			this.buttons = [
				new Button("Resume", this.centerX, 150, () => {
					settingsGame.playing = true;
					settingsGame.inGame = true;
				}), 
				new Button("New Game", this.centerX, 250, () => {
					settingsGame.playing = true;
					settingsGame.inGame = true;
					resteGame();
				}),
			];
		} else {
			this.buttons = [
				new Button("Play", this.centerX, 150, () => {
					settingsGame.playing = true;
					settingsGame.inGame = true;
				}),
			];
		}
	}

	keyPressed(key) {
		switch (key) {
			case "ArrowUp"://haut
				this.selecteUp();
				break;
			case "ArrowDown"://bas
				this.selecteDown();
				break;
			case "Enter":
				this.buttons[this.selected].run();
				break;
			default:
				break;
		}
	}
}
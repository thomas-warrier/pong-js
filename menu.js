
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

class Menu {
	constructor() {
		this.centerX = width / 2;
		this.menuLabel = "Menu";
		this.buttonsStart = [
			new Button(() => "Play", this.centerX, () => {
				settingsGame.playing = true;
				settingsGame.inGame = true;
				resteGame();
			}),
			new Button(() => `Difficulty : ${settingsGame.difficulty}`, this.centerX, () => {
				settingsGame.difficulty = ++settingsGame.difficulty % 3;
				console.log(settingsGame.difficulty);
			})
		];

		this.buttonsPause = [
			new Button(() => "Resume", this.centerX, () => {
				settingsGame.playing = true;
				settingsGame.inGame = true;
			}),
			new Button(() => "New Game", this.centerX, () => {
				settingsGame.playing = true;
				settingsGame.inGame = true;
				resteGame();
			}),
			new Button(() => "Back To Menu", this.centerX, () => {
				settingsGame.inGame = false;
			}),

		];
		this.selected = 0;
	}

	selecteDown() {
		this.selected = (this.selected + 1) % this.listButton.length;
	}
	selecteUp() {
		this.selected = Math.abs((this.selected - 1) % this.listButton.length);
	}


	draw() {
		setColor("white");
		drawText(this.menuLabel, this.centerX, 50);
		let gapY = 100;
		for (let i = 0; i < this.listButton.length; i++) {
			let btn = this.listButton[i]
			let currentGap = gapY * i + 210
			btn.draw(currentGap);

			if (this.selected == i) {
				let w = 50;
				drawRect(btn.x - w / 2, currentGap + 10, w, 2);
			}
		}
	}
	update() {
		this.listButton = settingsGame.inGame ? this.buttonsPause : this.buttonsStart;
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
				this.listButton[this.selected].run();
				break;
			default:
				break;
		}
	}
}


class GameMenu {

	constructor() {
		this.centerX = width / 2;
		this.menuLabel = "Menu";
		this.selected = 0;
		this.isActive = false;


		this.buttons = [
			new Button(() => "Play", this.centerX, () => {
				this.selected = 0;
				settingsGame.playing = true;
				resteGame();
			}),
			new Button(() => `Difficulty : ${settingsGame.difficulty}`, this.centerX, () => {
				settingsGame.difficulty = ++settingsGame.difficulty % 3;
			})
		];
	}

	draw() {
		setColor("white");

		drawText(this.menuLabel, this.centerX, 50);
		let gapY = 100;
		for (let i = 0; i < this.buttons.length; i++) {
			let btn = this.buttons[i]
			let currentGap = gapY * i + 210
			btn.draw(currentGap);

			if (this.selected == i) {
				let w = 50;
				drawRect(btn.x - w / 2, currentGap + 10, w, 2);
			}
		}
	}

	doAction() {
		this.buttons[this.selected].run();
	}
}
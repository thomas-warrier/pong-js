
class WinMenu{
	constructor(){
		this.centerX = width / 2;
		this.menuLabel = "Win";
		this.selected = 0;
		this.isActive = false;

		//la liste de boutton deviens la liste de boutton du menu
		this.buttons = [
			new Button(() => "New Game", this.centerX, () => {
				settingsGame.playing = true;
				resteGame();
			}),
			new Button(() => "Back To Menu", this.centerX, () => {
				menu.stateMenu.setMenu(new GameMenu());
			}),
		];
	}

	/**
	 * pour draw le menu de victoire
	 */
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
	/**
	 * pour faire quelque chose quand le boutton est pressé
	 */
	doAction() {
		this.buttons[this.selected].run();
	}
}
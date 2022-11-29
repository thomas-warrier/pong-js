

class Menu {
	constructor() {
		this.centerX = width / 2;
		this.menuLabel = "Menu";

		this.stateMenu = new StateMenu();
		this.stateMenu.setMenu(new GameMenu());
	}

	selecteDown() {
		this.stateMenu.getMenu().selected = (this.stateMenu.getMenu().selected + 1) % this.stateMenu.getMenu().buttons.length;
	}
	selecteUp() {
		this.stateMenu.getMenu().selected--;
		if (this.stateMenu.getMenu().selected < 0) this.stateMenu.getMenu().selected = this.stateMenu.getMenu().buttons.length - 1;
	}


	draw() {
		this.stateMenu.getMenu().draw();
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
				this.stateMenu.getMenu().doAction();
				break;
			default:
				break;
		}
	}
}
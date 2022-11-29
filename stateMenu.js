

class StateMenu {
	constructor() {
		this._currentMenu;
	}

	setMenu(menu) {
		if (this._currentMenu && this._currentMenu != null) {
			this._currentMenu.isActive = false;
		}
		this._currentMenu = menu;
		this._currentMenu.isActive = true;
	}

	getMenu() {
		return this._currentMenu;
	}
}
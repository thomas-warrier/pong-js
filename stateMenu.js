
/**
 * classe du pattern state
 */

class StateMenu {
	constructor() {
		this._currentMenu;
	}

	/**
	 * pour affiché le bon menu
	 * @param {*} menu menu que l'ont souhaite affiché (menu principale,menu win...) 
	 */
	setMenu(menu) {
		if (this._currentMenu && this._currentMenu != null) {
			this._currentMenu.isActive = false;
		}
		this._currentMenu = menu;
		this._currentMenu.isActive = true;
	}
	/**
	 * 
	 * @returns le menu courant
	 */
	getMenu() {
		return this._currentMenu;
	}
}
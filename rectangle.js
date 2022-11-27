	class Rect {
	/**
	 * 
	 * @param {double} x position x
	 * @param {double} y position y
	 * @param {double} w largeur
	 * @param {double} h hauteur
	 */
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	/**
	 * 
	 * @returns la postion gauche du rectangle
	 */
	left() {
		return this.x;
	}

	/**
	 * 
	 * @returns la postion droite du rectangle
	 */
	right() {
		return this.x + this.w;
	}

	/**
	 * 
	 * @returns la postion haute du rectangle
	 */
	top() {
		return this.y;
	}

	/**
	 * 
	 * @returns la postion basse du rectangle
	 */
	bot() {
		return this.y + this.h;
	}

	/**
	 * 
	 * @param {Rect} other 
	 * @returns un boolean : true si il y a collision entre l'objet courrant et others
	 */
	coll(other) {
		return this.right() >= other.left() &&
			this.left() <= other.right() &&
			this.bot() >= other.top() &&
			this.top() <= other.bot();
	}


	/**
	 * dessine l'objet courrant
	 */
	draw() {
		drawRect(this.x, this.y, this.w, this.h);
	}
}
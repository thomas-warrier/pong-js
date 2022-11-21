/**
 * 
 * @param {string} color : couleur que l'on souhaite appliquer au context
 * permet de set la couleur du context
 */
function setColor(color) {
	ctx.fillStyle = color;
}
/**
 * 
 * @param {int} x : coordonnées x a laquelle on souhaite commencé le rectangle
 * @param {int} y : coordonnées y a laquelle on souhaite commencé le rectangle
 * @param {int} w : largeur du rectangle
 * @param {int} h : hauteur du rectangle
 * permet de dessiner un rectangle a partir d'un point de départ d'un hauteur et d'une largeur
 */
function drawRect(x, y, w, h) {
	ctx.fillRect(x, y, w, h);
}
/**
 * 
 * @param {int} x : coordonnées x a laquelle on souhaite commencé le cercle
 * @param {int} y : coordonnées y a laquelle on souhaite commencé le cercle
 * @param {int} diametre : diamètre du cercle souhaité
 * permet de dessiner un cercle a partir d'un point de départ (qui sera au centre du cercle) et d'un diamètre
 */
function drawCircle(x, y, diametre) {
	ctx.beginPath()
	ctx.arc(x, y, diametre, 0, 2 * Math.PI, false)
	ctx.fill()
}

function drawText(str, x, y) {
	ctx.fillText(str, x, y);
}
/**
 * permet de clear le canva en dessinant un rectangle tout noir
 */
function clear() {
	setColor("black");
	drawRect(0, 0, width, height);
}


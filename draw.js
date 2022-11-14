function setColor(color) {
	ctx.fillStyle = color;
}
function drawRect(x, y, w, h) {
	ctx.fillRect(x, y, w, h);
}
function drawCircle(x, y, diametre) {
	ctx.beginPath()
	ctx.arc(x, y, diametre, 0, 2 * Math.PI, false)
	ctx.fill()
}

function clear() {
	setColor("black");
	drawRect(0, 0, width, height);
}
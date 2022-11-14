can = document.getElementById("can");
const width = can.width;
const height = can.height;
const FPS = 1 / 60;
ctx = can.getContext("2d");

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
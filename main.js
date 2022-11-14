can = document.getElementById("can");
const width = can.width;
const height = can.height;
const FPS = 1 / 60;
ctx = can.getContext("2d");

var p1 = new Player(20, (height - hp) / 2, 90, 83);
var p2 = new Player(width - wp - 20, (height - hp) / 2, 73, 75);
var ball = new Ball((width/2),(height/2));


function pressKey(ev) {
}
function releaseKey(ev) {
}
function update() {

	p1.update();
	p2.update();

	draw();
}
function draw() {
	clear();

	p1.draw();
	p2.draw();
    ball.draw();
}

setInterval(update, FPS * 1000);
document.addEventListener("keydown", pressKey);
document.addEventListener("keyup", releaseKey);


can = document.getElementById("can");
const width = can.width;
const height = can.height;
const FPS = 1 / 60;
ctx = can.getContext("2d");



function pressKey(ev) {
}
function releaseKey(ev) {
}
function update() {
    draw();
}
function draw() {
    clear();
}

setInterval(update, FPS * 1000);
document.addEventListener("keydown", pressKey);
document.addEventListener("keyup", releaseKey);


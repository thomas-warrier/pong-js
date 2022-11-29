var touchSound = new Audio('assets/pop.mp3');
touchSound.loop = false;

var bongSound = new Audio("assets/bong.mp3");

async function playTouchSound() {
	touchSound.play()
}

async function playBongSound() {
	bongSound.play()
}
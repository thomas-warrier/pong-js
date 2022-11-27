var touchSound = new Audio('assets/pop.mp3');
touchSound.loop = false;

async function playTouchSound() {
	touchSound.play()
}
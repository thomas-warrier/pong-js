var touchSound = new Audio('assets/pop.mp3');
touchSound.loop = false;

var bongSound = new Audio("assets/bong.mp3");

/**
 * joue le son de touche
 */
async function playTouchSound() {
	touchSound.play()
}
/**
 * joue le son bong
 */
async function playBongSound() {
	bongSound.play()
}
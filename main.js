can = document.getElementById("can"); //pour avoir le canva
const width = can.width; //pour avoir la largeur du canva
const height = can.height; //pour avoir la hauteur du canva
const FPS = 1 / 60; //pour avoir 60 images par seconde
ctx = can.getContext("2d"); //récupère le context 2d du canva 

var p1 = new Player(20, (height - hp) / 2, 90, 83); //on place le player un a gauche au milieu
var p2 = new Player(width - wp - 20, (height - hp) / 2, 73, 75); //on place le player deux a droite au milieu
var ball = new Ball((width/2),(height/2)); //on place la ball au milieu du canva


/**
 *  appelé quand la touche est pressée afin de mettre la vitesse du player a speedPlayer
 */
function pressKey(ev) {
    p1.keyPress(ev.keyCode);
    p2.keyPress(ev.keyCode);
}


/**
 * pour draw on efface tout ce qu'il y avait avant pour tout redessiner
 */
function draw() {
	clear();

	p1.draw();
	p2.draw();
    ball.draw();
}

/**
 * appelé quand la touche est relachée afin de remettre la vitesse du player a 0 
 */
function releaseKey(ev) {
    p1.keyRelease(ev.keyCode);
    p2.keyRelease(ev.keyCode);
}
/**
 * pour update la position des players et de la ball (se fait 60 fois toute les secondes)
 */
function update() {
	p1.update();
	p2.update();
    ball.update([p1,p2]);
    p1.ballOutOfScreen(ball); //se charge de faire respawn la ball et augmenter le score
    p2.ballOutOfScreen(ball);
	draw();
}

setInterval(update, FPS * 1000); //on set l'intervalle pour update tout les FPS*1000
document.addEventListener("keydown", pressKey);  //on appelle pressKey quand une touche est pressée
document.addEventListener("keyup", releaseKey);//on appelle releaseKey quand une touche est relachée



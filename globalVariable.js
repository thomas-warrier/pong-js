can = document.getElementById("can"); //pour avoir le canva
const width = can.width; //pour avoir la largeur du canva
const height = can.height; //pour avoir la hauteur du canva
const FPS = 1 / 60; //pour avoir 60 images par seconde
ctx = can.getContext("2d"); //récupère le context 2d du canva 
var myFont = new FontFace('Audiowide', 'url(assets/AudiowideRegular.ttf)'); //crée une nouvelle font face
myFont.load().then(function(font){
    
    document.fonts.add(font);
    ctx.font = "50px Audiowide"; //je set la font
    ctx.textAlign = "center";
});

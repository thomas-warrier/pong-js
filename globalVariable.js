can = document.getElementById("can"); //pour avoir le canva
const width = can.width; //pour avoir la largeur du canva
const height = can.height; //pour avoir la hauteur du canva
const FPS = 1 / 60; //pour avoir 60 images par seconde
ctx = can.getContext("2d"); //récupère le context 2d du canva 
ctx.font = '40px Helvetica';
ctx.textAlign = "center";

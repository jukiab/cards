let musica;

function preload(){
  musica = loadSound("corinthians.mp3")
}

function setup(){
  musica.play();
  musica.loop();
}
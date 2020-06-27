let imageBackground;
let imageCharacter;
let showBackground;
let gameSong;
let character;

function preload() {
  imageBackground = loadImage('images/cenario/floresta.png');
  imageCharacter = loadImage('images/personagem/correndo.png');
  gameSong = loadSound('songs/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  showBackground = new Background(imageBackground, 3);
  character = new Character(imageCharacter);
  frameRate(35);
  gameSong.loop();
}

function draw() {
  showBackground.show()
  showBackground.move();

  character.show();
}
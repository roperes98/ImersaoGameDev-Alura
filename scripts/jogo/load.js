function preload() {
    imagemCenario = loadImage('images/cenario/floresta.png');
    imagemGameOver = loadImage('images/assets/game-over.png');

    imagemPersonagem = loadImage('images/personagem/correndo.png');
    imagemInimigo = loadImage('images/inimigos/gotinha.png');
    imagemInimigoVoador = loadImage('images/inimigos/gotinha-voadora.png');
    imagemInimigoGrande = loadImage('images/inimigos/troll.png');

    imagemTelaInicial = loadImage('images/cenario/telainicial.png');
    imagemVida = loadImage('images/assets/coracao.png');
    fonteTelaInicial = loadFont('images/assets/fonteTelaInicial.otf');

    cartucho = loadJSON('cartucho/fita.json');
    somDoJogo = loadSound('songs/trilha_jogo.mp3');
    somDoPulo = loadSound('songs/somPulo.mp3');
  }
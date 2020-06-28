class TelaInicial {
    constructor(){}

    draw(){
        this._imagemDeFundo();
        this._texto();
        this._botao();
    }

    _imagemDeFundo(){
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _texto(){
        textFont(fonteTelaInicial);
        textSize(130);
        textAlign(CENTER);
        text('As aventuras de', width/2, 120);
        textSize(170);
        text('Hipsta', width/2, 240);
    }

    _botao(){
        botaoGerenciador.draw();
    }
}
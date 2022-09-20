var carta1 = {
    nome: "O Vento", 
    imagem: "https://yohstore.com.br/wp-content/uploads/2018/03/The-Windy-1.jpg",
    atributos: {
        Ataque: 7,
        Defesa: 8,
        Magia: 6
    }
};

var carta2 = {
    nome: "A Sombra",
    imagem: "https://yohstore.com.br/wp-content/uploads/2018/03/The-shadow-2.jpg",
    atributos: { 
        Ataque:  9,
        Defesa: 8,
        Magia:2 
}
};

var carta3 = {
    nome: "A Chuva",
    imagem: "https://yohstore.com.br/wp-content/uploads/2018/03/the-rain-4.jpg",
    atributos: {
        Ataque: 5,
        Defesa: 9,
        Magia: 10
    }
};

var carta4 = {
    nome: "A Luta",
    imagem: "https://yohstore.com.br/wp-content/uploads/2018/03/The_fight-20.jpg",
    atributos:{
        Ataque: 10,
        Defesa: 7,
        Magia: 5
    }
};

var carta5 = {
    nome: "Voar",
    imagem: "https://yohstore.com.br/wp-content/uploads/2018/03/The_fly.jpg",
    atributos :{
        Ataque: 4,
        Defesa: 6,
        Magia: 10

    }

};

var carta6 = {
    nome: "A Ilusão",
    imagem: "https://yohstore.com.br/wp-content/uploads/2018/03/The_ilusion-5-e-6.jpg",
    atributos:{
        Ataque: 10,
        Defesa: 5,
        Magia:10
    }
};

var carta7 ={
    nome: "A luz",
    imagem: "https://yohstore.com.br/wp-content/uploads/2018/03/The_light-42.jpg",
    atributos:{
        Ataque: 8,
        Defesa:7,
        Magia: 6
    }
};

var carta8 ={
    nome: "O escudo",
    imagem: "https://yohstore.com.br/wp-content/uploads/2018/03/The_shield-11.jpg",
    atributos: {
        Ataque: 4,
        Defesa: 10,
        Magia: 6
    }
};

var carta9 = {
    nome: "A música",
    imagem: "https://yohstore.com.br/wp-content/uploads/2018/03/The_song-23.jpg",
    atributos: {
        Ataque: 4,
        Defesa:6,
        Magia: 9
    }
};

var carta10 = {
    nome: "Trovão",
    imagem: "https://yohstore.com.br/wp-content/uploads/2018/03/The_thunder-8.jpg",
    atributos: {
        Ataque: 9,
        Defesa: 6,
        Magia:8
    }
};




var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 10);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 10);
    while (numeroCartaMaquina == numeroCartaJogador){
        numeroCartaJogador = parseInt(Math.random() * 10);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador)

    document.getElementById("btnSortear").disabled = true; 
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
}

function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes")
    var opcoesTexto = "";

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value= '" + atributo + "' > " + atributo; 

    }
    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado(){
    var radioAtributos = document.getElementsByName("atributo");
     for (var i = 0; i < radioAtributos.length; i++){
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }
}

function jogar(){
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = "Você venceu"
    } else if (valorCartaMaquina > valorCartaJogador) {
        elementoResultado.innerHTML = "Você perdeu! A carta da máquina é maior."
    } else {
        elementoResultado.innerHTML = "Empate!"
    }

    document.getElementById('btnJogar').disabled= true
    exibirCartaMaquina()
}

function exibirCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = `<img id="moldura" src=${cartaJogador.imagem}>`;
    var tagHTML = "<div id='opcoes' class'carta-status'>"
    var divOpcoes = document.getElementById("carta-jogador")
   
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<p> <input type='radio' name='atributo' value= '" + atributo + "' > " + atributo + " " + cartaJogador.atributos[atributo] + "</p>"; 

    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p> `

    divCartaJogador.innerHTML = moldura  + tagHTML + nome + opcoesTexto + '</div>';
}

function exibirCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = `<img id="moldura" src=${cartaMaquina.imagem}>`;
    var tagHTML = "<div id='opcoes' class'carta-status'>"
    var divOpcoes = document.getElementById("carta-maquina")
   
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value= '" + atributo + "' > " + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"; 

    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p> `

    divCartaMaquina.innerHTML = moldura +  tagHTML + nome + opcoesTexto + '</div>';
}
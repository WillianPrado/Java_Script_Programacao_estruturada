//Métodos para Arrays em Javascript
//Método POP - remove o último elemento do array
var frutas = ["laranja", "maça", "tomate", "melancia"];
document.getElementById("original").innerHTML = frutas;

frutas.pop();//aplicando o método pop ao array futas
document.getElementById("resultado").innerHTML = frutas;

//Método PUSH - adiciona um elemento  no final do array
var carros = ["monza", " opala", " chevette", " comodoro"];
document.getElementById("original").innerHTML = carros;

carros.push(" corcel");//aplicando o método push
document.getElementById("resultado").innerHTML = carros;




//Métodos shift e unshit
//shift remove o primeiro elemento do array
//unshift adiciona um elemnto no ínicio do array

var marcas = [" nike", " mizuno"," armor", " adididas", " unde"];
document.getElementById("original").innerHTML = marcas;

marcas.shift();//remove o primeiro elemento do array
document.getElementById("resultado").innerHTML = marcas;

var chocolate = ["garoto", "nestle", "lindt"];
document.getElementById("original").innerHTML = chocolate;

chocolate.unshift("parafina");//adicona ao primeiro elemento
document.getElementById("resultado").innerHTML = chocolate +" "+ chocolate.length;


//Propriedade de um array
//chocolate.length --> tamanho do um array

//Método splice 
//1) adicionar novos elementos a um array em qualquer posição
var relogios = ["rolex", "rag", "heuer", "montblanc"];
relogios.splice(1, 0, " vivara"," champion", " timex");
document.getElementById("resultado").innerHTML = relogios;
// Remove um pedaço do array
var letras = ["a","b","c","d","e","f"];
document.getElementById("original").innerHTML = letras;

var removidos = letras.splice(2,2);

//letras.splice(2,2); se não estive comentado removeria mais duas letras
document.getElementById("resultado").innerHTML = letras;
document.getElementById("resultado").innerHTML = "Resultados: " + letras + "<br>Removidos: " + removidos;

//Método para concatenar dois arrays
var coresComA = ["amarelo", " azul", "amber"];

var coresComB = ["  branco", " bege", " bronze"];
document.getElementById("original").innerHTML = coresComA + "<br>" + coresComB;

var todasAsCores = coresComA.concat(coresComB);
document.getElementById("resultado").innerHTML = todasAsCores;

//Método para todas as letras em maiúsculo
var nome = "ituiutaba";
nome.toUpperCase;
for (let i = 0; i < todasAsCores.length; i++){
    todasAsCores[i] = todasAsCores[i].toUpperCase();
}

document.getElementById("resultado").innerHTML = todasAsCores;

//Alterando um prototype
Array.prototype.tudoMaiusculo = function(){
    for(let i = 0; i < this.length; i++){
        this[i] = this[i].toUpperCase();
    }
}

document.getElementById("original").innerHTML = relogios;

relogios.tudoMaiusculo();

document.getElementById("resultado").innerHTML = relogios;
var colors = ["https://images.madeiramadeira.com.br/product/images/42198045-adesivo-paisagem-natureza-papel-parede-floresta-gg597prdpmivhu5iswwgm-179-1-800x729.jpg",
 "https://abrilsuperinteressante.files.wordpress.com/2019/09/fotosvencedora.png",
 "https://http2.mlstatic.com/adesivo-paisagem-3d-natureza-papel-parede-cachoeira-gg348-D_NQ_NP_949247-MLB27348373098_052018-F.jpg",
 "https://images-americanas.b2w.io/produtos/01/00/sku/37954/0/37954062_1GG.jpg",
"data:image/jpeg;base64,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",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6TTrduoiRDiEJoP7RxVA1Lw2groavFBZWaZA2L4Pvare01ufp",
 "https://www.a12.com/source/files/originals/natureza-260802.jpg",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR82JMRMwQL5mRGorpmLJZW94weBUzKAntOiHP5PlWB50wmUi_I"];

function mudaCor (){
    let cor = 0;

    cor = Math.floor(Math.random() * Math.floor(colors.length));//entre 0 e 1
   //document.getElementById("conteiner").appendChild("https://abrilsuperinteressante.files.wordpress.com/2019/09/fotosvencedora.png");
   // document.getElementById("conteiner").style.backgroundImage= "url('https://abrilsuperinteressante.files.wordpress.com/2019/09/fotosvencedora.png')";
    document.getElementById("conteiner").style.backgroundImage = "url('"+ colors[cor] +"')"; 
};
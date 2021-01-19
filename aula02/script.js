var msg = "Javascript - Arrays";
console.log(msg);
var original = "Toxto original  ";

var nova = original + msg;
//document.getElementById("resultado").innerHTML = msg;
//declaração de arrays em Javascript
var novoArray = []; //criando array vazio
var outroArray = [1, 2, 3, 4];//criando um array prenchido

//var anotherArray = new Array();//cria um ponteiro para um array

var vetormulti = [1, 2, "oi", 5];//não é boa pratica de programação

var diasDaSemana = ["Domingo","Segunda","Terça"];
//Acessando os elementos de um array
var msg = "o dia da semana na posição 2 é: ";

//Alterando um elemnto do array
diasDaSemana[1]= "Extensão do domingo"

//Adicionando  elemento do array
diasDaSemana[3] = "quarta";

//verificando o tamanho do array
var msg = "o tamanho do array é: "

document.getElementById("resultado").innerHTML = msg + diasDaSemana.length;

//adicionando um elemento na última posição de um array
diasDaSemana[diasDaSemana.length] = "tô em último";
document.getElementById("resultado").innerHTML = msg + diasDaSemana;

//Iterando sobre os elementos de um array
for(let i = 0 ; i < diasDaSemana.length; i++){
    console.log(i+" "+diasDaSemana[i]);
}

//matrizes ou array de arrays
var matriz = []; //array raiys
matriz[0] = []; //primeira linha
matriz[1] = []; //segunda linha
matriz[2] = []; //terceira linha

matriz[0][0] = 1;
matriz[0][1] = 2;

//outro jeito de fazer
var matriz = []; //array taiz
matriz[0] = [1,2,3];//primeira linha

matriz[1] = [4,5,6];//segunda linha

matriz[2] = [7,8,9];//terceira linha


document.getElementById("resultado").innerHTML = matriz;

for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        console.log(matriz[i][j]);
    }
}
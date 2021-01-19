/*Progamação Estruturada ADS - 2020/1 */

var msg = "Hello world";
console.log(msg);

/*
Tipos de dados do javascript
- String
- number
- boolean-
- function
- undefine
- undefine
- null
*/

var idade = 11;//number
var tempo = "11";//String
var bool = true; //boolean
var nula = null;//null
var curso; //undefined

console.log('A idade é: ' + idade);
console.log('A idade é: ' + idade + 23);
console.log('A idade é: ' + (idade + 23));//tomar cuidade com a contatenação 
console.log(bool);
console.log(nula);
console.log(curso);

/*Escopo de variáveis*/
/*Global ou local*/
/*
var variável
let variável com restrição
const constante
*/
const pi = 3.1415759;
const euler = 2.81818181;
//const pi = 3.15759; se eu tentar mudar embaixo da erro
console.log(pi);

var minhavar = "global";
outraVar = "global";//escopo global sem var

function minhaFuncao(){
    var minhavar = "local";// escopo local
    return minhavar
}

function outraFuncao(){
     outraVar = "local";// escopo local o valor foi alterado
    return outraVar
}

console.log(minhavar);
console.log(minhaFuncao());
console.log(outraVar);
console.log(outraFuncao());

/* Operadores em javascript */

var num = 0;

/*
+ - / * adição,subtração, divisão, multiplicação, potência
% módulo
num++;
num--;
num+=4; num = num + 4;
num-=4;
num/=4;
num%=4;

Operadores de comparação
== igual a
!= diferente
<= igual meno
>= igual maior
> maior
> menor
=== igual em valor em tipo
*/

var num = 15;//number
var txt = "15";//String
if(num == txt){//comparar só o valor
    console.log(true);
}else{
    console.log(false);
}

if(num === txt){//comparar valor E tipo
    console.log(true);
}else{
    console.log("tipo do num: " +  typeof num);
    console.log("tipo do txt: " +  typeof txt);
}

/* Operadores logicos*/
/*
  && E and
  || OU or
  !  NÃO not
*/


// sintase e diferênte de semântica
// sintaqse é  o mais simples
// A semântica que o difícil ela sempre se mantem
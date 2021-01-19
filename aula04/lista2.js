//0) Faça código para gerar um array de números que são o dobro de um array original. Exiba os dois arrays. 

var numbers = [1,2,3,8,19,29,30,31];


var doublenum = numbers.map(dou => dou * 2);
document.getElementById("exercicio0").innerHTML = "Exercicio 0: <BR> Original:" + numbers +
"<br> Dobro :   " + doublenum + "<br>";
//FIM Exercico 0


//1) Faça um código para pegue um array de números e os transforme em um array de strings. Ex. 
var numbers = [1,2,3,8,19,29,30,31];
var stringAray = numbers;
function strin (elemento){
    for(let i = 0; i < elemento.length; i++) {
        elemento[i].toString();
        elemento[i] = '" ' + elemento[i] + '"'; 
    }
   return elemento;
    
}



stringAray = strin(stringAray);

document.getElementById("exercicio1").innerHTML = "Exercicio 1: <BR> Original:" + numbers +
"<br> Dobro :   " + stringAray + "<br>";
//FIM Exercico 1




//2) Faça um código para gerar um vetor aleatório com 10 números entre 0 e 100. Exiba na tela um número em cada linha, sendo os pares em vermelho, e os ímpares em azul.
//função para mudar de cor
function changeColor(elemento) {
   
    var result = [];
        for(let i = 0; i <elemento.length; i++){
           
            if( elemento[i] %2 == 0 ){
               
                result[i] = elemento[i].toString().fontcolor("red");
            }else{
                result[i] = elemento[i].toString().fontcolor("blue");
            }
           
        }
         
      
    return result;
    
  }
  //Fim função

  //função para gerar os dez numeros aleatorios
  function geraNumero(){
    let n = 0;
    n = Math.random();
    n = Math.random() * 10;
    n = Math.floor(n);// ou ceil

    
        return" "+ n ;
    
}

var exe2 = [];

//chamando a função de numeros aleatorios
for (let i = 0; i < 10; i++){  
    this.exe2[i] = geraNumero();

}
//chamando a função de mudar cores
exe2 = changeColor(exe2);

document.getElementById("exercicio2").innerHTML = "Exercicio 3: <BR> " + exe2 + "<BR>";
//FIM Exercico 2

//3) Faça um código para gerar um vetor aleatório com 20 números entre 0 e 100. Gere outro vetor somente com os números pares gerados. Gere outro vetor somente com os números ímpares gerados. Exiba os três vetores na tela. 

  //função para gerar os dez numeros aleatorios
  function geraNumero(){
    let n = 0;
    n = Math.random();
    n = Math.random() * 10;
    n = Math.floor(n);// ou ceil   

        return" "+ n ;    
}

var exe3 = [];

for (let i = 0; i < 20; i++){  
    this.exe3[i] = geraNumero();

}

var impar = exe3.filter(im => im % 2 != 0); //função para filtra somente os números impares
var pares = exe3.filter(pa => pa % 2 == 0); //função para filtra somente os números pares
document.getElementById("exercicio3").innerHTML = "Exercicio 3: <BR> Original: " + exe3 + "<BR> Imapar:"
+ impar+ "<BR> Par: "+ pares;
  //FIM Exercico 3

//4) Faça um código que pegue um array de strings com os meses do ano. Gere um outro vetor com todos os meses que contém menos de 6 caracteres. Gere outro vetor com todos os meses que contém 6 ou mais caracteres.
//função para filtra palavras maiores de 6 caracteres
function maior6(elemento) {   
   let maior = elemento.filter(ma => ma.length > 6);
   return maior;    
}
//FIM Função

//função para filtra palavras menores de 6 caracteres
function menor6(elemento) { 
    let menor = elemento.filter(me => me.length <= 6);
    return menor;      
} 
//FIM Função

//vetor com todos os meses  
var meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
var exe4_0 = menor6(meses);//chamando a função maior 
var exe4_1 = maior6(meses);//chamando a função menor
//imprimindo exercicio
document.getElementById("exercicio4").innerHTML = "Exercicio 4: <BR> meses: <BR>" + meses + 
"<BR> Menor que seis caracteres: <BR>" + exe4_0 +
"<BR><BR> Maior que seis caracteres: <BR>" + exe4_1 + "<BR>";
//FIM Exercico 4

//5) Faça um código que pegue array de nomes próprios, um array de sobrenomes, e gere outro array com a junção nome + " " + sobrenome. Ex.:
//vetores
var nomes = ["andre", "felipe", "maria", "daniel", "naiara"];
var sobrenomes = ["batista", "silva", "carolina", "pimentel", "silva"];
//função para juntar os vetores
function juncoa(nome, sobrenome){
    let nomeJuntos = [];
    for(let i = 0; i < nome.length; i++){
        //essa parte junta os vetores
        nomeJuntos[i] =" "+ nome[i].concat(" "+sobrenome[i]);   
       // nomeJuntos[i] = " " + nome[i];
    }
    return nomeJuntos;
}
var exe5 = juncoa(nomes,sobrenomes);//chamando a função
//imprimindo o vetor
document.getElementById("exercicio5").innerHTML = "Exercicio 5: <BR> nomes e sobrenomes: <BR>" + exe5 ;
//FIM Exercico 5




//6) Faça uma função shiftLetters que pega uma string e usa .map para retornar uma string codificada com cada letra deslocada uma vez para baixo no alfabeto. Dica: Procure sobre as funções JS String.fromCharCode() e String.CharCodeAt() e veja se você pode usar o código ASCII para conseguir isso.
  //função para deixar uma string abaixo  
  function shiftLetters(elemento){
      resul = '';// variavel para receber resultado
      //for para modificar a quantidade de elementos  
      for(let i = 0; i < elemento.length; i++){
        let n = 0;//variável para receber o numero do caracter
        
        n = elemento.charCodeAt(i);//extraindo o número em caractere  
        resul = resul + String.fromCharCode(n - 1);//transformando o numero -1 em caractere
      }
      //Fim for
      return resul;
     
  }
  //fim função
  var teste = "kkbbccdd";

  exe6 = shiftLetters(teste);//chamando a função
  // imprimindo o resultado
  document.getElementById("exercicio6").innerHTML = "Exercicio 6: <BR> Original: " + teste + 
  "<br> Resultado: " + exe6;
//FIM Exercico 6

//7) Escreva uma função que pegue uma string e um alvo e retorna true ou false se o alvo estiver presente na string. Use .reduce para realizar isso.
// ex. isPresent ('abcd', 'b') // => true
// ex. isPresent ('efghi', 'a') // => false
var isPresent = function(string, alvo) {
    let result = false
  /*  for(let i = 0; i < string.length; i++){
        if(string[i] === alvo){
            result = true;
        }
        
    }*/
  //  let isFound = false;
    result = string.indexOf(alvo) !=-1? true: false; //verificando com a função indexof

    return result;
    
}
 
var exe7 = isPresent('abcd', 'f');//chamando a função
//imprimindo o resultado
document.getElementById("exercicio7").innerHTML = "Exercicio 7: <BR> Original: " + exe7 ;
//FIM Exercico 7

//8) Faça um código com dois arrays de 10 elementos aleatórios (entre 1 e 50). 
//Gere um terceiro array somente com os elementos em comum entre os dois arrays originais.
var isVetPresent = function(vet1, vet2) {
    let result = [];
    let n = 0;
    for(let i = 0; i < vet1.length; i++){
        for(let j = 0; j < vet2.length; j++){
            //if para verificar se contem nos dois vetores
            if(vet1[i] == vet2[j]){
                result[n] = vet1[i];
                n++;
            }//fim if
            
        }//Fim for
        
    }//fim for
  
    return result; //enviando o resultado   
}
//fim função
var veter1 = [1,2,3,4,5,28,8];
var veter2 = [1,2,18,5,28,8];
var exe8 = isVetPresent(veter1,veter2);

//imprimindo o resultado
document.getElementById("exercicio8").innerHTML = "Exercicio 8: <BR> vetor 1: " + veter1 +
"<br >vetor 2: "+ veter2 + "<br> origina: "+ exe8 + "<br>";
//FIM Exercico 

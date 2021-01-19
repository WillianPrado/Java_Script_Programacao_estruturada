//FILAS
//Primeiro a entrar, primeiro a sair.

//PILHAS
//Primeiro a entrar, Último a sair
/*
1 - Adicionar elemento a fila
2 - Remover o primeiro elemento da fila 
3  - Esta vazia?
4 - Tamanho da fila.
5 - Retorna o primeiro o elemento da fila, sem remove lo.
6 - Limpar a fila
*/

class Fila{
    constructor(){
        this.items = {};//array para armazenar os elementos da fila.
        this.cont = 0; //contador para saber qual é o índice do pròximo elemento
        this.menorCont = 0; //contador para saber qual é o primeiro elemento da fila.
    }

    add(elemento){
        this.items[this.cont] = elemento;
        this.cont++;
    }

    remover(){
        //verifica se a fila está vazia
        if(this.estaVazia()){
            return undefined;
        }
        const result = this.items[this.menorCont];
        delete this.items[this.menorCont];
        this.menorCont++;
        return result; 
    } 

    estaVazia(){
        return this.cont - this.menorCont === 0;
    }

    tamanho(){
        return this.cont - this.menorCont;
    }

    primeiro(){
        if(this.estaVazia()){
            return undefined;
        }
        return this.items[this.menorCont];
    }

    limpar(){
        this.items = {};//array para armazenar os elementos da fila.
        this.cont = 0; //contador para saber qual é o índice do pròximo elemento
        this.menorCont = 0; //contador para saber qual é o primeiro elemento da fila.
    }

    mostraUltimo(){
        let feedback = '';
        if( this.items.length  != 0){
            feedback = "O último elemento é: " + this.items[this.cont - 1] ;
        }else{
            feedback = "Pilha vazia, não foi possivel reconhecer o último elemento";
        }
        
        
        return  console.log(feedback);//imprenção do último número
        
    } 

}

   
    


//Usando a fila
const fila = new Fila();
fila.add(15);
fila.add(25);
fila.add(30);
console.log(fila);
fila.remover();
console.log(fila);

fila.mostraUltimo();
console.log(fila);




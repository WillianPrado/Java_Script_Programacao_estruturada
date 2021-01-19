class Node{
    constructor(element){
        this.value = element;
        this.next = undefined;
    }
}

class Lista{
    constructor(){
        this.head = undefined;
        this.count = 0;
    }
    //Outros métodos da classe Lista
    //push() adicionar um elemento no fim da lista
    push(element){
        const node = new Node(element); 
        let corrent;

        if(this.head == null){
            this.head = node;
            this.count++;
            console.log('O elemento: "' + this.head.value + '" Foi adicionado com sucesso!');
        }else if(this.noRepeat(element) == true){
            console.log('O elemento: "' + element + '" já existe não pode ser adicionado!');
        }else{   
            corrent = this.head;
            while(corrent.next != null){
               
                corrent = corrent.next;                    
                
            }            
            corrent.next = node;   
            console.log('O elemento: "' + element + '" Foi adicionado com sucesso!');     
            this.count++          
                        
        }


        
    }
    //insertAt(element, position) adiciona um elemento em qualquer posição da lista
    getElementAt(position){
        if(position >= 0 && position <= this.count){
            let node = this.head;
            for(let i = 0; i < position && node != null; i++){
                node = node.next;
            }
            return node;
        }
        return undefined;
    }
    //getElementAt(position) retorna um elemento de um posição especifica da lista
    insertAt(element, position){
        if(position >= 0 && position <= this.count && this.noRepeat(element) == false){
            const node = new Node(element);
            if(position === 0 ){
                const current = this.head;
                node.next = current;
                this.head = node;
            }else{
                const previous = this.getElementAt(position - 1);
                //console.log("A previous: " + previous.value);
                const current = previous.next;
                //console.log("O current: "+ current.value);
                node.next = current;
                previous.next = node;
               // console.log("A previous nest: " + previous.next.value);
            }
            console.log('O elemento: "' + element + '" Foi adicionado com sucesso!')
            this.count++;
            return true;
        }
        if(this.noRepeat(element) != false){
            console.log("elemento já existe não pode ser Adicionado");
        }
        return false;
    }
    //noRepeat(element) seu tentar adicionar um elemento não vai deixar
    noRepeat(element){
       // const node = new Node(element); 
        let result = false;
        for(let i = 0; i< this.count; i++){
            let valor = this.getElementAt(i).value;
            if(element == valor ){
                result = true ;
            }           
               //  console.log( this.getElementAt(i).value);            
        }
        return result;
    }
    //indexOf(element)retorna a posição de um elemento da lista
    indexOf(element){
        let current = this.head;
        for(let i = 0; i< this.count && current != null; i++){
            if(current.value == element){
                return i;
            }else{
                current = current.next;
            }
        }
        return -1;
    }
    //removeAt(position)remove um elemento de uma posição específica da lista
    removeAt(position){
        if(position >= 0 && position <= this.count){
          let element = this.getElementAt(position -1).value;
            const current = this.head; 
            if(position === 0){
                this.head = current.next;
            }else{
                
                const previous = this.getElementAt(position -1);
                const current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return console.log("Elemento: '" + element + "'na posição:'"  +position+ "' removido com sucesso");
        }
    }
    //isEmpty checar se alista está vazia
    isEmpty(){
        if(this.count === 0){
            return true;
        }else{
            return false;
        }
    }
    //size()retorna o tamanho da lista
    size(){
        return this.count;
    }
    //peek retorna o último valor
    peek(){
       
        let feedback = "";
        if( this.count  != 0){
            let lastValue = this.getElementAt(this.count -1 ).value ; // armazenando o último valor em uma variavel
            feedback = 'O último elemento é: "' + lastValue + '"';
        }else{
            feedback = "Fila vazia, não foi possivel reconhecer o último elemento";
        }
        
       // document.getElementById("entrada").focus();//para manter o focus na entrada
       // return document.getElementById("feedback").innerHTML = feedback;//imprenção do último número
       return console.log(feedback);
    }
  //03) Escreva um método para sua classe Lista para remover um elemento da lista passando como parâmetro o elemento a ser removido. Se o elemento não existir, retorna false. Se o elemento existir, e for removido, retorna o próprio elemento removido.
    //deleByName(name) deleta o elemento por nome
    deleByName(name){
        if(this.noRepeat(name) == true){//verifica se existe esté nome na lista
            let posicao = this.indexOf(name);//Pega a posição do nome
            this.removeAt(posicao + 1);//deleta o elemento           
        }else{
            // imprime o resultado que não existe o nome do elemento que deseja exlcluir
            console.log('Elemento: "'+ name + '" não existe!');
        }
    }
//fim exercicio3
    //clear() limpa a lista/reiniciaa
    clear(){        
            this.head = undefined;
            this.count = 0;
    }
    //fim exercicio 4
    inverte(){
       // let valueHead = this.head;
       // let valueLast = this.getElementAt(this.count -1);
        
      //  this.head = valueLast;
       // this.head.next = this.getElementAt(1);
       
        //console.log("A previous nest: " + previous.next.value);
        const current = this.head;
        this.head.next = current;
         this.head = node;
        
    }

}

const lista = new Lista();
lista.push(15);
lista.push(23);
lista.push(354);
lista.push("dinosalro");

lista.insertAt(7, 2);





const lista2 = new Lista();

console.log("tamanho da lista: " + lista.size());

lista.push(354);


lista.push(54);

lista.peek();




//ista.inverte();
//console.log(lista);
console.log(JSON.stringify(lista, null, 2));
lista.deleByName(7);
lista.clear();

console.log(JSON.stringify(lista, null, 2));
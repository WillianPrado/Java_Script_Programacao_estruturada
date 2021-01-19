class Set {
  constructor(){
    this.items = {}
  }
  
  has(element){
    return element in this.items;
  }
  
  add(element){
    var valores = this.values();
    if(!this.has(element)){// O elemento não existir fasa isso
      
      if(this.size() == 0 ){// se o elemento for menor que zero adicione
        this.items[element]= element;
        return true;
      }else if(typeof valores[0] == typeof element){
        this.items[element]= element;
        return true;
        
      }else{
        const values = this.values();
        console.log("O elemento '"+element+"' é do tipo "+ typeof element + " não são permitodos");
      }     
    }else{//se o elemento já existir retorine isso
      const values = this.values();
      console.log("Elemento "+element+ " já existe");
      return false;
    }
  }
  
  remove(element){
    if(this.has(element)){
      delete this.items[element];
      return true;
    }else{
      console.log("Elemento " + element + " não existe");
      return false;
    }
  }

  clear(){
    this.items = {};
  }

  size(){
    return Object.keys(this.items).length;
  }

  values(){
    return Object.values(this.items);
  }

  /*Operações em conjunto
  -- União
  -- Diferença
  -- Sub-conjunto 
  */
  uniao(outroConjunto){
    const novoConjunto = new Set();
    this.values().forEach(value => novoConjunto.add(value));
    outroConjunto.values().forEach(value => novoConjunto.add(value));
    return novoConjunto;
  }

  intersecao(outroConjunto){
    const novoConjunto = new Set();
    
    const values = this.values();
    for(let i = 0; i< values.length; i++){
      if(outroConjunto.has(values[i])){
        novoConjunto.add(values[i])
      }
    }
    return novoConjunto;
  }



  diferenca(outroConjunto){
    const novoConjunto = new Set();
    
    this.values().forEach(value =>{
      if(!outroConjunto.has(value)){
        novoConjunto.add(value);
      }
    });
    return novoConjunto;
  }

  ehSubConjunto(outroConjunto){
    if(this.size() > outroConjunto.size()){
      return false;
    }
    let subConjunto = true;
    this.values().forEach(value =>{
      if(!outroConjunto.has(value)){
        subConjunto = false;
        return false;
      }
      return true;
    });
    return subConjunto;
  }
}
//Fim classe conjunto
function tipoConj(conjunto){
   let valores = conjunto.values();
  
    let n = valores.length;
        var tipo = '';
        var contN = 0;
        var contS = 0;

        

        // console.log(tamanho());
        // console.log(this.items.length); = undefined
        for(let i = 0; i < n; i++){

           
            if(typeof valores[0]  === "number"){
                tipo = "numéricos";
                contN++;
            } else if(typeof valores[0] === "string"){
                tipo = "String";
                contS++; 
            }
            //se o contador de estring e de numeros forem maior que um 
            if(contN >= 1 && contS >= 1) {  
                tipo = "Vários Tipo";
            }
        }
       // console.log(typeof valores[0]);

        return tipo;
        
}

//03) Crie um método que faça união entre três conjuntos.
function uniaoTres(conjunto_1,conjunto_2,conjunto_3){
  let resultado = conjunto_1.uniao(conjunto_2.uniao(conjunto_3));
  //console.log("União entre os três conjuntos");
  console.log(resultado);
  return resultado;
}
//fim atividade 3

//04) Crie um método que faça interseção entre três conjuntos.
function intersecaoTres(conjunto_1,conjunto_2,conjunto_3){  
  let conj1 = conjunto_1.intersecao(conjunto_2);
  let conj2 = conjunto_1.intersecao(conjunto_3);
  let conj3 = conjunto_2.intersecao(conjunto_3);
  //let conj4 = conjunto_2.intersecao(conjunto_1);
  uniaoTres(conj1,conj2,conj3);

 // console.log( result = conj4.uniao(resultado));

}
//Fim atividade 4
function contem(conjunto_1, conjunto_2){
  valores = conjunto_1.values();
  let count = 0;
  for(let i = 0; i< valores.length; i++){
    if(conjunto_2.has(valores[i])){
      count++;
    }
  }
  console.log(count);
  if(count == valores.length){
    return true;
  }else{
    return false;
  }
  
}
let conjunto = new Set();
conjunto.add(50);
conjunto.add(60);
conjunto.add(70);
console.log("Conjunto 0: ");
console.log(conjunto);

let conjunto1 = new Set();
conjunto1.add(50);
conjunto1.add(6);
conjunto1.add(7);
console.log("Conjunto 1: ");
console.log(conjunto1);

let conjunto2 = new Set();
conjunto2.add(18);
conjunto2.add(60);
conjunto2.add(70);
console.log("Conjunto 2: ");
console.log(conjunto2);
console.log("interseção entre os três conjuntos");
intersecaoTres(conjunto, conjunto1,conjunto2);
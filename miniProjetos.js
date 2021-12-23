//Mini projeto para inverter a ordem das cores acrescentando a variável "c"; 
let a = "vermelho";
let b = "azul";

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

//Escreva uma função que usa 2 números e retorna o maior entre eles

let valorMaior = max(18.6, 18.7);
console.log(valorMaior);

function max(numero1, numero2){
    //forma não simplificada:
    // if(numero1 > numero2)
    // return numero1;
    // return numero2;

    //forma simplificada usando operador ternário:

    return numero1 > numero2 ? numero1 : numero2;
}
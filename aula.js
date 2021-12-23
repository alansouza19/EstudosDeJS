// Arrays

// let familia = [26,45,50,17];

// console.log(familia[2]);
// -----------------------------------------------------


// Function = Verbo + Substantivo


// let corSite = "azul";
// function resetaCor(cor, tonalidade){
//     corSite = cor + tonalidade;

// };
// console.log(corSite);
// resetaCor("verde", " claro");
// console.log(corSite);
// -------------------------------------------------


// Função que realiza tarefa, mas não devolve nada

// function dizerNome(){
//     console.log('Alan');
// }
// dizerNome();
// --------------------------------------------------

// Faz um cálcula ou operação e retorna algo
// function multiplicarPorDois(valor){
//     return valor * 2;
// }

// console.log(multiplicarPorDois(5));
// -----------------------------------------------------


// Operadores Aritméticos (+, -, *, /, **)

// let salario = 100;
// console.log(salario + salario);
// console.log(salario - salario);
// console.log(salario * salario);
// console.log(salario / salario);
// console.log(5 ** 5);
// ----------------------------------------------------

// ++; -- (Incremento e decremento)

// let idade = 18;
// console.log(idade++);
// console.log(idade);

// let idade = 18;
// console.log(idade--);
// console.log(idade);
// ----------------------------------------------------

// Operadores de Atribuição += ou -=

// let valorTecladoGamer = 100;
// valorTecladoGamer += valorTecladoGamer;
// console.log(valorTecladoGamer);
// ----------------------------------------------------

// Operadores de igualdade (Igualdade estrita "1 === 1" compara os valores e o tipo)

// console.log(1 === 1);
// console.log('1' === 1); //valores iguais, porém o tipo é diferente

// Igualdade Solta
// console.log(1 ==1);
// console.log('1' == 1); (Valores iguais, porém tipos diferentes e o console retorna "true")
// --------------------------------------------------------


// Operador Ternário
// Tem um cliente, 100 premium, comum

// let pontos = 200;
// let tipo = pontos > 100 ? 'premium' : 'comum';
// console.log(tipo);
// ----------------------------------------------------------------

// Operadores Lógicos "E" (&&)
// Retorna TRUE se os dois operandos forem TRUE

// console.log(true && false);

// let maiorDeIdade = true;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

// console.log(podeAplicar);
//--------------------------------------------------------------------


// Operador lógico "OU" (||)
// Retorna true se um dos operandos forem true

// let maiorDeIdade = false;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

// console.log(podeAplicar);
//-----------------------------------------------------------------------


// Operador lógico NOT (!)
// let maiorDeIdade = false;
// let possuiCarteiraDeTrabalho = false;
// let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

// console.log('pode aplicar: ', podeAplicar);

// let candidatoRecusado = !podeAplicar;

// console.log('Candidato Recusado', candidatoRecusado);
// --------------------------------------------------------------

// //Falsy:
// undefined
// null
// 0
// false
// ''
// NaN - not a Number

// Truthy

// let corPersonalizada = '';
// let corPadrao = 'Azul';
// let corPerfil = corPersonalizada || corPadrao;

// console.log(corPerfil);
//----------------------------------------------------------------

//Uso do If e Else
//Se a hora estiver entre 06:00 até 12:00 : Bom dia!
//Se estiver entre 12:00 até 18:00 : Boa tarde!
//Caso contrário : Boa noite!

// let hora = 18;

// if(hora > 6 && hora <= 12){
//     console.log("Bom dia!")
// }
// else if(hora > 12 && hora < 18){
//     console.log("Boa tarde!")
// }
// else{
//     console.log("Boa noite!")
// }
//------------------------------------------------------------------

//Switch/Case(Forma de fazer comparações dentro do JS)

// let permissao; //comum, gerente, diretor
// permissao = 'diretor';
// switch(permissao){
//     case 'comum':
//     console.log('usuário comum');
//     break;

//     case 'gerente':
//     console.log('usuário gerente');
//     break;
    
//     case 'diretor':
//     console.log('usuário diretor');
//     break;

//     default:
//     console.log('usuário não reconhecido!');
// }
//-------------------------------------------------------------------

//Laço/Loop/For (1-For; 2-While; 3-Do..while; 4-For..in; 5-For..of)

// for(let i = 1; i <= 5; i++){
//     if(i % 2 != 0){
//         console.log(i);
//     }
// }

// for(let i = 5; i >= 1; i--){
//     if(i % 2 != 0){
//         console.log(i);
//     }
// }
//------------------------------------------------------------------------

//While loop

// let i = 5;

// while( i >= 1){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
//  i--;
// }
//---------------------------------------------------------------------------

//Do..while

// let i = 0;
// do{
//     console.log("Digitando...", i);
//     i++;
// } while (i < 10)
//---------------------------------------------------------------------------

//For..in

// const pessoa = {
//     nome: 'Alan',
//     idade: 24
// };
// //key-value
// for(let chave in pessoa){
//     console.log(chave, pessoa['nome']);
// }

//const cores = ['Vermelho', 'Azul', 'Verde'];

// for(let indice in cores){
//     console.log(indice, cores[indice]);    
//}
//--------------------------------------------------------------------------------

//For..of
const cores = ['Vermelho', 'Azul', 'Verde', 'Roxo'];
for(let cor of cores){
    console.log(cor);
}
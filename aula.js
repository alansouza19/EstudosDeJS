//Arrays

// let familia = [26,45,50,17];

// console.log(familia[2]);
//-----------------------------------------------------


//Function = Verbo + Substantivo


// let corSite = "azul";
// function resetaCor(cor, tonalidade){
//     corSite = cor + tonalidade;

// };
// console.log(corSite);
// resetaCor("verde", " claro");
// console.log(corSite);
//-------------------------------------------------


//Função que realiza tarefa, mas não devolve nada

// function dizerNome(){
//     console.log('Alan');
// }
// dizerNome();
//--------------------------------------------------

//Faz um cálcula ou operação e retorna algo
// function multiplicarPorDois(valor){
//     return valor * 2;
// }

// console.log(multiplicarPorDois(5));
//-----------------------------------------------------


//Operadores Aritméticos (+, -, *, /, **)

// let salario = 100;
// console.log(salario + salario);
// console.log(salario - salario);
// console.log(salario * salario);
// console.log(salario / salario);
// console.log(5 ** 5);
//----------------------------------------------------

// ++; -- (Incremento e decremento)

// let idade = 18;
// console.log(idade++);
// console.log(idade);

// let idade = 18;
// console.log(idade--);
// console.log(idade);
//----------------------------------------------------

//Operadores de Atribuição += ou -=

// let valorTecladoGamer = 100;
// valorTecladoGamer += valorTecladoGamer;
// console.log(valorTecladoGamer);
//----------------------------------------------------

//Operadores de igualdade (Igualdade estrita "1 === 1" compara os valores e o tipo)

// console.log(1 === 1);
// console.log('1' === 1); //valores iguais, porém o tipo é diferente

//Igualdade Solta
// console.log(1 ==1);
// console.log('1' == 1); (Valores iguais, porém tipos diferentes e o console retorna "true")
//--------------------------------------------------------


//Operador Ternário
//Tem um cliente, 100 premium, comum

// let pontos = 200;
// let tipo = pontos > 100 ? 'premium' : 'comum';
// console.log(tipo);
//----------------------------------------------------

//Operadores Lógicos "E" (&&)
//Retorna TRUE se os dois operandos forem TRUE

//console.log(true && false);

// let maiorDeIdade = true;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

// console.log(podeAplicar);

//Operador lógico "OU" (||)
//Retorna true se um dos operandos forem true

// let maiorDeIdade = false;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

// console.log(podeAplicar);

//Operador lógico NOT (!)
// let maiorDeIdade = false;
// let possuiCarteiraDeTrabalho = false;
// let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

// console.log('pode aplicar: ', podeAplicar);

// let candidatoRecusado = !podeAplicar;

// console.log('Candidato Recusado', candidatoRecusado);
//--------------------------------------------------------------

// //Falsy:
// undefined
// null
// 0
// false
// ''
// NaN - not a Number

//Truthy

// let corPersonalizada = '';
// let corPadrao = 'Azul';
// let corPerfil = corPersonalizada || corPadrao;

// console.log(corPerfil);
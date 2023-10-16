// var nomeDaVariavel = "valorDaVariavel"
var minhaVariavel = "Olá mundo!";
console.log(minhaVariavel);

// Variaveis e tipos de dados
var meuNumero = 10;
console.log(meuNumero);
console.log(meuNumero + 15);

// Uso de "" em valor numerico é interpretado como texto
console.log("10" + 5);

// Faz a checagem sobre qual tipo de dado esta armazenado
console.log(typeof meuNumero);

var booleano1 = true;
var booleano2 = false;

console.log(booleano1);
console.log(typeof booleano2);

var meuObjeto = {}; // Objeto

var meuArray = []; // Array

var meuNull = null; // Null

var meuUndefined = undefined; // Undefined

console.log(typeof meuObjeto);
console.log(typeof meuArray);
console.log(typeof meuNull);
console.log(typeof meuUndefined);

// Novas formas de declarar variaveis => "var" e "const"
let x = 10;

console.log(typeof x);

// Use "const" para garantir que não sejam alterados, valores que não devem ser alterados
const y = 15;

console.log(x, y);

// Operadores aritiméticos
console.log(x + y); // Soma
console.log(x - y); // Subtração
console.log(x * y); // Multiplicação
console.log(x / y); // Divisão

//Operadores de comparação
console.log(x == y); // Verifica se valores são iguais
console.log(x != y); // Verifica se valores são diferentes
console.log(x === y); // Leva em consideração o tipo do dado analisado
console.log(x !== y); // Verifica apenas se o tipo dos dados são diferentes

// Operadores logicos => "and = &&" "or = ||"
console.log(10 > 5 && 5 > 10); // Verifica ambos os lados da operação
console.log(10 > 5 || 5 > 10); // Verifica apenas um lado da operação

// Conversão de tipos de dados
const meuNumero2 = "123";

const meuNumeroConvertido = Number(meuNumero2);

console.log(meuNumeroConvertido);
console.log(typeof meuNumeroConvertido);

// Estrutura de condição => "if", "else", "else if"
const idade = 20;

// Se a idade for menor que 13, será criança, se for menor que 20, adolescente e se for igual/maior a 20, será adulto
if (idade < 13) {
  console.log("Criança");
} else if (idade < 20) {
  console.log("Adolescente");
} else {
  console.log("Adulto");
}

// Switch
const fruta = "mamão";

switch (fruta) {
  case "banana":
    console.log("Banana é a fruta!");
    break;
  case "maçã":
    console.log("Maça é a fruta!");
    break;
  default:
    console.log("Fruta não encontrada!");
}

// Estruturas de repetição => Repete varias vezes dependendo de alguma condição / Contador - Condição de limite - Incremento
// For
for (let f = 0; f < 10; f++) {
  console.log("O valor de f é:" + f); // Concatenação = Unir variaveis ao meu texto
}

// While
let w = 0;

while (w < 10) {
  w++;
  console.log("O valor de w é:" + w);
}

// Do while
let d = 0;

do {
  d++;
  console.log("O valor de d é:" + d);
} while (d < 10);

// Funções => function nomeDaFunção(arg1, arg2) {codigo a ser reutilizado}
function cumprimentar(nome) {
  console.log("Olá! " + nome);
}

cumprimentar("João"); // Invocando a função

// Escopo de variaveis
let cor = "azul";

console.log(cor); // Imprime o valor do escopo global

function mostrarCor() {
    let cor = "verde";
    console.log(cor); // Imprime o valor do escopo local
}

mostrarCor()

// Hoisting => Invorcar uma função antes da sua declaração
testandoHoisting();

function testandoHoisting() {
    console.log("Deu Certo!");
}
// var nomeDaVariável = "valorDaVariável"
var nomeDaVariável = "Olá mundo!";
console.log(nomeDaVariável); // Imprime um valor no console

// Variáveis e tipos de dados
// Number
var meuNumero = 10;
console.log(meuNumero);
console.log(meuNumero + 15); // Concatenação
console.log(typeof meuNumero); // "typeof" => Faz a checagem sobre qual tipo de dado esta armazenado
console.log("10" + 5); // Uso de "" em valor numérico(number) é interpretado como texto(string)

// Boolean
var booleano1 = true;
console.log(booleano1);

var booleano2 = false;
console.log(typeof booleano2);

// Objeto
var meuObjeto = {};
console.log(typeof meuObjeto);

// Array
var meuArray = [];
console.log(typeof meuArray);

// Null
var meuNull = null;
console.log(typeof meuNull);

// Undefined
var meuUndefined = undefined;
console.log(typeof meuUndefined);

// Tipagem fraca => Uma variável pode ter o seu tipo alterado ao logo do código
var numero2 = 10; // "Number"
console.log(typeof numero2);

numero2 = "10" // String
console.log(typeof numero2);

// Novas formas de declarar variáveis => "let" e "const"
let x = 10;
console.log(typeof x);

// Use "const" para garantir que os valores não serão alterados
const y = 15;
console.log(x, y);

// Operadores aritméticos
console.log(x + y); // Soma
console.log(x - y); // Subtração
console.log(x * y); // Multiplicação
console.log(x / y); // Divisão

//Operadores de comparação
console.log(x == y); // Verifica se valores são iguais
console.log(x != y); // Verifica se valores são diferentes
console.log(x === y); // Leva em consideração o tipo do dado analisado
console.log(x !== y); // Verifica apenas se o tipo dos dados são diferentes

// Operadores lógicos => "&& = and" "|| = or"
console.log(10 > 5 && 5 > 10); // Verifica ambos os lados da operação
console.log(10 > 5 || 5 > 10); // Caso o primeiro lado for verdadeiro, verifica apenas um lado da operação

// Conversão de tipos de dados
const meuNumero2 = "123"; // String
const meuNumeroConvertido = Number(meuNumero2); // Number() => Convertido para "number"
console.log(meuNumeroConvertido);
console.log(typeof meuNumeroConvertido);

// Estrutura de condição => "if", "else", "else if"
const idade = 20;

// Se a idade for menor que 13, será criança, se for menor que 20, adolescente e se for igual/maior que 20, será adulto
if (idade < 13) {
  console.log("Criança");
} else if (idade < 20) {
  console.log("Adolescente");
} else {
  console.log("Adulto");
}

// Switch => Alternativa ao "if", "else" ideal para quando se tem varias opções de condição
const fruta = "mamão";

// Caso nenhuma das opções forem verdadeiras, sera executado o "default"
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

// Estruturas de repetição => Repete varias vezes dependendo de alguma condição => Contador - Condição de limite - Incremento
// For
for (let f = 0; f < 10; f++) {
  console.log("O valor de f é:" + f); // Concatenação = Unir variáveis ao meu texto
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

// Funções => function nomeDaFunção(arg1, arg2) {código a ser reutilizado}
function cumprimentar(nome) {
  console.log("Olá! " + nome);
}

cumprimentar("João"); // Invocando a função

// Arrow function => Forma de declarar função mais moderna
const cumprimentar2 = (nome) => {
  console.log("Olá! " + nome);
};

cumprimentar2("Pedro");

// Escopo de variáveis
let cor = "azul";
console.log(cor); // Imprime o valor do escopo global

const mostrarCor = () => {
  let cor = "Verde";
  console.log(cor); // Imprime o valor do escopo local
};

mostrarCor();

// Hoisting => Invocar uma função antes da sua declaração
testandoHoisting();

function testandoHoisting() {
  console.log("Deu Certo!");
}

// Truthy e Falsy => Reconhece alguns valores como "true" ou "false" mesmo que não seja um boolean
const minhaVariável1 = ""; // Falsy

if (minhaVariável1) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

const minhaVariável2 = "Algum texto"; // Truthy

if (minhaVariável2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// Array / Listas => Caracterizado pela abertura e fechamento de colchetes "[]"
const números = [1, 2, 3, 4, 5];
console.log(números);
console.log(números[0]); // Imprime o primeiro valor do array, que tem o índice "0"

números.push(6); // Adicionando valores ao final no array
console.log(números);

números.pop(); // Remove o ultimo valor do array
console.log(números);

// Strings
const minhaStringNova = "Olá, Mundo! ";
const minhaString2 = minhaStringNova + "Tudo bem?"; // Concatenação
console.log(minhaString2);

const minhaString3 = `${minhaStringNova}Fazendo interpolação`; // Interpolação => Concatenação mais moderna
console.log(minhaString3);
console.log(minhaString3.length); // Exibe o comprimento (quantidade de caracteres) da string
console.log(minhaString3[5]); // Exibe um carácter específico
console.log(minhaString3.toUpperCase()); // Exibe a string em caixa alta

// Objeto "Date"
const agora = new Date(); // Exibe a data completa atual
console.log(agora);

const natal = new Date(2023, 11, 25); // "Ano", "Mês (Iniciasse no zero)", "Dia"
console.log(natal);

// Objeto "Math"
console.log(Math.PI); // Exibe o valor do PI
console.log(Math.round(3.5)); // Arredonda valores
console.log(Math.sqrt(4)); // Exibe o valor de uma raiz quadrada
console.log(Math.pow(2, 3)); // Exibe o valor de um numero elevado a uma potencia

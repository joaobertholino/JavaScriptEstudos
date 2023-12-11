console.warn(`Estruturas de Programação`);

// Salvando valores na memoria por meio de variáveis
const nameOne = `Lucas`;
const ageOne = 25;
console.log(nameOne, ageOne); // Exibindo os valores das variáveis no console

// Concatenando valores de variáveis
const nameTwo = `Maria`;
const ageTwo = 28;
const personTwo = "Meu nome é " + nameTwo + " e tenho " + ageTwo + " anos."; // Concatenação de valores de variáveis da maneira antiga
console.log(personTwo);

// Interpolando valores de variáveis
const nameThree = `João`;
const ageThree = 21;
const personThree = `Meu nome é ${nameThree} e tenho ${ageThree} anos.`; // Interpolação de valores de variáveis com o método template literals
console.log(personTwo);

// Executando operações matemáticas com variáveis
const numberOne = 10;
const numberTwo = 5;
const result = numberOne * numberTwo;
console.log(result);

// Reatribuindo valores de variáveis e alterando seus tipos de dados
let numberThree = 10;
console.log(numberThree);
console.log(typeof numberThree);

numberThree = `10`; // Reatribuindo o valor da variável numberThree alterando o tipo de dado de number para string
console.log(numberThree);
console.log(typeof numberThree);

// A variável declarada com 'var' tem escopo de função, ou seja, ela é acessível dentro da função onde foi declarada e também por todas as funções e blocos de código que estão dentro dessa função.
var nameFour = `Lucas`; // Ao declarar uma variável com o método var, ela pode ser redeclarada sem que o JavaScript retorne um erro
console.log(nameFour);

var nameFour = `João`; // Redeclarando a variável nameFour
console.log(nameFour);

// A variável declarada com 'let' tem escopo de bloco, ou seja, ela só é acessível dentro do bloco de código onde foi declarada e por qualquer bloco de código que esteja dentro desse bloco.
let nameFive = `Maria`; // Ao declarar uma variável com o método let, ela não pode ser redeclarada, caso isso aconteça, o JavaScript retornará um erro
console.log(nameFive);

// Palavras reservadas do JavaScript não podem ser usadas como nomes de variáveis pelo fato de que elas já possuem uma função pré-definida na linguagem
// Exemplos de palavras reservadas: break, case, catch, class, const, continue, debugger, default, delete, do, else, export, extends, finally, for, function, if, import, in, instanceof, new, return, super, switch, this, throw, try, typeof, var, void, while, with, yield

// Estruturas de uma função => Uma função é um bloco de código que executa uma ação e/ou retorna algum valor e pode ser reutilizado em qualquer parte do código
// Parâmetros são valores que a função recebe para executar uma ação
// Declarando uma função utilizando a sintaxe arrow function
const myFunctionOne = (x, y) => {
  const result = x + y; // Executando uma operação matemática com os parâmetros da função
  console.log(result); // Exibindo o resultado da operação no console
};
myFunctionOne(2, 2); // Executando a função e passando os valores dos parâmetros

// Declarando uma função utilizando a sintaxe convencional de função
function myFunctionTwo(x, y) {
  const result = x + y;
  console.log(result);
}
myFunctionTwo(4, 4);

// Funções Built-in são funções que já vem pré-definidas no JavaScript
// prompt() é uma função que exibe uma caixa de diálogo para o usuário inserir algum valor
const nameSix = prompt(`Digite sua idade:`);
console.log(nameSix); // Valores numéricos inseridos no prompt são retornados como string

// alert() é uma função que exibe uma caixa de diálogo para o usuário
alert(`Olá, mundo!`);

// confirm() é uma função que exibe uma caixa de diálogo para o usuário com as opções de cancelar ou confirmar
const confirmation = confirm(`Deseja confirmar?`);
console.log(confirmation); // É retornado true caso o usuário confirme e false caso o usuário cancele

// Math() é um objeto que possui propriedades e métodos matemáticos
// Métodos Trigonométricos
Math.acos(0.5); // Retorna o arco cosseno de um número
Math.acosh(2); // Retorna o arco cosseno hiperbólico de um número
Math.asin(0.7); // Retorna o arco seno de um número
Math.asinh(1); // Retorna o arco seno hiperbólico de um número
Math.atan(1); // Retorna o arco tangente de um número
Math.atanh(0.5); // Retorna o arco tangente hiperbólico de um número
Math.atan2(8, 6); // Retorna o arco tangente do quociente de seus argumentos
Math.cos(Math.PI); // Retorna o cosseno de um número
Math.cosh(0); // Retorna o cosseno hiperbólico de um número
Math.sin(Math.PI / 2); // Retorna o seno de um número
Math.sinh(0); // Retorna o seno hiperbólico de um número
Math.tan(Math.PI / 4); // Retorna a tangente de um número
Math.tanh(0); // Retorna a tangente hiperbólica de um número

// Métodos Exponenciais e Logarítmicos
Math.exp(1); // Retorna o exponencial de um número
Math.log(1); // Retorna o logaritmo natural de um número
Math.pow(4, 2); // Retorna a base elevada ao expoente
Math.sqrt(9); // Retorna a raiz quadrada de um número

// Métodos aritméticos
Math.abs(-5); // Retorna o valor absoluto de um número
Math.ceil(4.3); // Retorna o menor inteiro maior ou igual a um número
Math.cbrt(8); // Retorna a raiz cúbica de um número
Math.floor(4.9); // Retorna o maior inteiro menor ou igual a um número
Math.round(4.7); // Retorna o valor arredondado de um número
Math.sign(-5); // Retorna o sinal de um número
Math.trunc(4.9); // Retorna a parte inteira de um número

// Métodos Mínimos e Máximos
Math.max(1, 2, 3, 4, 5); // Retorna o maior valor entre os números passados como argumento
Math.min(1, 2, 3, 4, 5); // Retorna o menor valor entre os números passados como argumento

// Métodos de Geração de Números Aleatórios
Math.random(); // Retorna um número pseudo-aleatório entre 0 e 1

// Constantes
Math.E; // Retorna a constante de Euler
Math.LN10; // Retorna o logaritmo natural de 10
Math.LN2; // Retorna o logaritmo natural de 2
Math.LOG10E; // Retorna o logaritmo de E na base 10
Math.LOG2E; // Retorna o logaritmo de E na base 2
Math.PI; // Retorna o valor de PI
Math.SQRT1_2; // Retorna a raiz quadrada de 1/2
Math.SQRT2; // Retorna a raiz quadrada de 2

// Métodos para exibir mensagens no console
console.log(`Olá, mundo!`); // Exibe uma mensagem no console
console.error(`Erro!`); // Exibe uma mensagem de erro no console

// Estruturas de controle => São estruturas que controlam o fluxo de execução do código
// Estrutura condicional ifElse => Executa um bloco de código caso a condição seja verdadeira e outro bloco de código caso a condição seja falsa
if (true) {
  console.log(`Verdadeiro`); // Código a ser executado caso a condição seja verdadeira
} else {
  console.log(`Falso`); // Código a ser executado caso a condição seja falsa
}

const idadeOne = 18;
// Verificando com base na idade se a pessoa é criança, adolescente, adulta ou idosa e retornando uma mensagem no console
if (idadeOne <= 13 && idadeOne >= 0) {
  console.log(`Criança`); // Código a ser executado caso a condição seja verdadeira
} else if (idadeOne <= 18) {
  console.log(`Adolescente`);
} else if (idadeOne <= 60) {
  console.log(`Adulto`);
} else if (idadeOne <= 120) {
  console.log(`Idoso`);
} else {
  console.log(`Invalido!`);
}

const nameSeven = `Lucas`;
// Verificando com base no nome se ele tem 5 caracteres e retornando uma mensagem no console
// O método length retorna a quantidade de caracteres de uma string ou a quantidade de itens de um array
if (nameSeven.length === 5) {
  console.log(`${nameSeven} tem 5 caracteres`); // Código a ser executado caso a condição seja verdadeira
} else {
  console.log(`${nameSeven} não tem 5 caracteres`);
}

// Estrutura de controle switchCase => Executa um bloco de código caso a condição seja verdadeira
switch (true) {
  case true:
    console.log(`Verdadeiro`); // Código a ser executado caso a condição seja verdadeira
    break;
  default:
    console.log(`Falso`); // Código a ser executado caso a condição seja falsa
    break;
}

const grade = `B`; // Verificando com base na nota do aluno se ele foi aprovado, reprovado ou se está de recuperação e retornando uma mensagem no console
switch (grade) {
  case `A`:
    console.log(`Parabéns, você foi aprovado!`); // Código a ser executado caso a condição seja verdadeira
    break; // O break é utilizado para que o código não execute os outros cases
  case `B`:
    console.log(`Você está de recuperação!`);
    break;
  case `C`:
    console.log(`Você foi reprovado!`);
    break;
  default:
    console.log(`Nota inválida!`);
    break;
}

// Estruturas de repetição => São estruturas que executam um bloco de código repetidas vezes até que a condição seja falsa
// Estrutura de repetição "for"
// for (contador; condição de parada; incremento/decremento) { Bloco de código a ser executado! }
for (let i = 0; i <= 5; i++) {
  console.log(`Repetindo ${i} vezes`); // Código a ser executado caso a condição seja verdadeira
}

// Imprimindo a sequência de Fibonacci no console
let fiboNumberOne = 0;
console.log(fiboNumberOne);

let fiboNumberTwo = 1;
console.log(fiboNumberTwo);

for (let i = 0; i <= 10; i++) {
  let fiboNextOne = fiboNumberOne + fiboNumberTwo;
  fiboNumberOne = fiboNumberTwo;
  fiboNumberTwo = fiboNextOne;
  console.log(fiboNextOne);
}

// Estrutura de repetição "while" => Também executa um bloco de código repetidas vezes até que a condição seja falsa
// while (condição) { Bloco de código a ser executado! / Incremento/decremento }
let i = 0;
while (i <= 5) {
  console.log(`Repetindo ${i} vezes`); // Código a ser executado caso a condição seja verdadeira
  i++; // Incremento
}

// Imprimindo a sequência de Fibonacci no console
let fiboNumberThree = 0;
console.log(fiboNumberThree);

let fiboNumberFour = 1;
console.log(fiboNumberFour);

let j = 0;
while (j <= 10) {
  let fiboNextTwo = fiboNumberThree + fiboNumberFour;
  fiboNumberThree = fiboNumberFour;
  fiboNumberFour = fiboNextTwo;
  console.log(fiboNextTwo);
  j++;
}

// Estrutura de repetição "doWhile" => Também executa um bloco de código repetidas vezes até que a condição seja falsa
// do { Bloco de código a ser executado! / Incremento/decremento } while (condição)
let k = 0;
do {
  console.log(`Repetindo ${k} vezes`); // Código a ser executado caso a condição seja verdadeira
  k++; // Incremento
} while (k <= 5);

// Imprimindo a sequência de Fibonacci no console
let fiboNumberFive = 0;
console.log(fiboNumberFive);

let fiboNumberSix = 1;
console.log(fiboNumberSix);

let l = 0;
do {
  let fiboNextThree = fiboNumberFive + fiboNumberSix;
  fiboNumberFive = fiboNumberSix;
  fiboNumberSix = fiboNextThree;
  console.log(fiboNextThree);
  l++;
} while (l <= 10);

// Diferença entre "for", "while" e "doWhile"
// O "for" é utilizado quando se sabe a quantidade de vezes que o bloco de código será executado
// O "while" é utilizado quando não se sabe a quantidade de vezes que o bloco de código será executado
// O "doWhile" é utilizado quando se deseja que o bloco de código seja executado pelo menos uma vez

// Utilizando o brake para interromper a execução de um bloco de código
let nameEight = `João`;

for (let i = 0; i <= 10; i++) {
  if (i === 3) {
    nameEight = `Ellen`;
    console.log(`${nameEight} está na posição ${i} do loop`);
  }

  if (i === 5) {
    break;
  }
}

// Utilizando o continue para pular a execução de um bloco de código
for (let i = 10; i > 0; i--) {
  if (i % 2 === 0) {
    console.log(`Caiu no continue!`);
    continue;
  }
  console.log(i);
}

// Incrementação resumida => É uma forma de incrementar o valor de uma variável de forma mais simples
// i++ => i = i + 1
// i-- => i = i - 1
console.warn(`Estruturas de Programação!`);
console.warn(`Exercícios de estruturas de programação!`);

// Exercício 1 => Armazene em variáveis cada um dos tipos de dados vistos
const typeNumber = 23;
console.log(typeof typeNumber);

const typeString = "Ellen";
console.log(typeof typeString);

const typeBoolean = true;
console.log(typeof typeBoolean);

// Exercício 2 => Crie uma estrutura if que verifica a entrada em uma balada com base na idade
let idade = 17;
if (idade < 18) {
  console.log(`Menor de idade - Entrada proibida!`);
} else {
  console.log(`Maior de idade - Entrada permitida!`);
}

// Exercício 3 => Declare uma contante com seu nome e depois execute uma condicional para verificar se o valor da variável corresponde ao seu nome
const myName = `João`;
if (myName === `João`) {
  console.log(`Olá ${myName}, tudo bom?`);
} else {
  console.log(`${myName} não corresponde ao meu nome!`);
}

// Exercício 4 => Declare uma função onde ira retornar uma exponenciação de 2 com as seguintes bases: 2, 3 e 18
const exponential = (x, y) => {
  return Math.pow(x, y); // O return é utilizado para retornar o resultado da operação ou o valor de uma variável
};
console.log(exponential(2, 2));
console.log(exponential(3, 2));
console.log(exponential(18, 2));

// Exercício 5 => Armazene a velocidade de um carro em uma variável e execute uma condicional que verifica a velocidade e retorna no console se este carro está ou não acima da velocidade de 80km permitida
const speed = 56;
if (speed <= 80) {
  console.log(`Esta na velocidade permitida!`);
} else {
  console.log(`Não esta na velocidade permitida!`);
}

// Exercício 6 => Escreva uma lógica onde irá verificar se uma pessoa pode ou não dirigir, se possui CNH ou não e se é maior ou menor que 18 anos
const myAge = 17;
const carteiraDeHabilitação = true;

const detranVerified = (x, y) => {
  if (x < 18) {
    console.log(`Não tem permissão para dirigir!`);
  } else if (x >= 18 && y === false) {
    console.log(`Maior de 18 anos porem não possui CNH!`);
  } else {
    console.log(`Maior de 18 anos e possuí CNH!`);
  }
};
detranVerified(myAge, carteiraDeHabilitação);

// Exercício 7 => Escreva um loop que exiba números de 0 a 10 no console
let ex7 = 0;
while (ex7 <= 10) {
  console.log(ex7);
  ex7++;
}

// Exercício 8 => Escreva um loop for que exibe números de 100 a 50 no console
for (let i = 100; i >= 50; i--) {
  console.log(i);
}

// Exercício 9 => Escreva um loop for ou while que exiba qual numero entre 0 e 50 é par e qual é impar
for (let j = 0; j <= 50; j++) {
  if (j % 2 === 0) {
    console.log(`${j}: É par!`);
  } else {
    console.log(`${j}: É impar!`);
  }
}

let x = 0;
while (x <= 50) {
  if (x % 2 === 0) {
    console.log(`${x}: É par!`);
  } else {
    console.log(`${x}: É impar!`);
  }
  x++;
}

// Exercício 10 => Crie uma função onde irá verificar se o numero é primo
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};
console.log(isPrime(2));

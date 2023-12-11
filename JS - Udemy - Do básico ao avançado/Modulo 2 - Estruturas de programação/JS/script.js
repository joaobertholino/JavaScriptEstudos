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

// Métodos do console...
// Callbacks
// Declarando uma função chamada "greeting" que recebe um parâmetro chamado "name"
const greeting = (name) => {
  // Imprimindo no console o valor do parâmetro "name"
  console.log(`Olá ${name}`);
};

// Declarando uma função chamada "processUserInput" que recebe um parâmetro chamado "callback"
const processUserInput = (callback) => {
  // Exibe um prompt onde sera inserido o nome que sera atribuído a variável chamada "name"
  const name = prompt("Digite seu nome");
  // Chamando a função de retorno "callback" passando o valor de "name" como argumento
  callback(name);
};
// Chamando a função "processUserInput" e passando a função "greeting" como argumento. Fazendo com que quando o nome for inserido no prompt, será executado a função "greeting"
processUserInput(greeting);

// Callback com eventos
// Declarando uma função chamada "callbackEvent" com o parâmetro "event"
const callbackEvent = (event) => {
  console.log(`Aconteceu um evento de ${event.type}`);
};
// Adicionando um evento que ao clicar em qualquer lugar da tela, executa a função "callbackEvent"
window.addEventListener("click", callbackEvent);

// Callback de calculo
// Declarando uma função chamada "calculate" que recebe os parâmetros "x", "y", "compute"
const calculate = (x, y, compute) => {
  // Retornando o valor atribuído aos parâmetros
  return compute(x, y);
};

// Declarando uma função chamada "sum" que recebe dois parâmetros "x" e "y"
const sum = (x, y) => {
  // Retornando o valor da soma de "x" e "y"
  return x + y;
};

// Atribuindo o valor de soma a variável chamada "result" onde por meio de uma callback executa atribui a função "sum" ao parâmetro "compute"
const result = calculate(20, 30, sum);
console.log(result);

// Callback de soma de elementos de um array
// Declarando array chamado "myArray"
const myArray = [1, 2, 3, 4, 5];

// Utilizando o método "map" onde para cada elemento do meu array, representado pela letra "x" será retornando um array com a soma de cada
const newArray = myArray.map((x) => x + x);
console.log(newArray);

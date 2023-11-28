// "IIFE" => Immediately Invoked Function Expression
// Sintaxe de "Sel-Executing Anonymous Function" => Não compatível com arrow function
(function selExecutingOne() {
  console.log("Sel-Executing Anonymous Function");
  // Variáveis declaradas dentro do IIFE não podem ser acessadas fora do mesmo
  const escopoLocal = 10;
})();

// Ao atribuir o IIFE á uma variável, é possível acessar o seu valor fora de seu escopo
const iifeReturn = (function selExecutingTwo() {
  console.log("Sel-Executing Anonymous Function");
  const escopoLocal = 20;
  return escopoLocal;
})();
console.log(iifeReturn);

// Loop For/Of
// Array com estado brasileiros
const listaDeEstados = ["RJ", "SP", "MG"];
// Iniciando um loop "for" que itera sobre a lista "listaDeEstados"
for (let estado of listaDeEstados) {
  // A cada iteração do loop, a variável "estado" recebe um dos estados da lista
  console.log(`${estado} é um estado brasileiro`);
}

// Declarando um variável do tipo string chamada "myName"
const myName = "João Bertholino";
// Iniciando um loop "for" para iterar sobre a string "myName"
for (let name of myName) {
  // A cada iteração do loop, a variável "name" recebe um dos caracteres da string
  console.log(name.toUpperCase());
}

// Classes
// Criando uma classe com o nome "Car"
class Car {
  // Recebendo um constructor com dois parâmetros de nome "name" e "year"
  constructor(name, year) {
    // Assinalando os parâmetros
    this.name = name;
    this.year = year;
  }
}

// Instanciando a classe atribuindo valores aos parâmetros
const carOne = new Car("Audi", 2020);
console.log(carOne);

const carTwo = new Car("Spin", 2010);
console.log(carTwo);

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
  alert(`Aconteceu um evento de ${event.type}`);
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
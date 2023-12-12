console.warn(`Modulo 3 - Funções!`);
// Funções são blocos de código que podem ser executados e reutilizados. Elas podem ou não receber entradas de dados e retornar uma saída de dados
// Declarando uma função atribuindo os parâmetros x e y
function myFunctionOne(x, y) {
  return (x + y) ** x;
}
myFunctionOne(4, 8); // Chamando a função e passando os valores dos parâmetros
console.log(myFunctionOne(4, 5));

// Armazenando uma função em uma variável
const myFunctionTwo = function (x, y) {
  let randomNum = Math.random();
  return x ** y / randomNum;
};
myFunctionTwo(8, 3);
console.log(myFunctionTwo(4, 6));

// Criando uma função que executa um bloco condicional
function nameVerified(name) {
  if (name === "João") {
    console.log(`Olá ${name}`);
  } else {
    console.log(`Olá ${name}`);
  }
}
nameVerified("João");

// Escopo de uma função => Variáveis declaradas dentro de uma função não são acessadas fora do escopo da função
let escopeTest = 10; // Declarando uma variável de escopo global
console.log(escopeTest);

function escopeLocalOne() {
  let escopeTest = 20; // Declarando uma variável de escopo local com o mesmo nome da variável de escopo global
  console.log(escopeTest);
}
escopeLocalOne(); // Chamando a função que imprime a variável de escopo local

// Aula 99 => Mais sobre escopo
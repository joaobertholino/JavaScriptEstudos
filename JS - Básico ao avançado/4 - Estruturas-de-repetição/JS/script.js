// Estruturas de repetição => "for", "while"
// Servem para repetir N° vezes uma operação, por exemplo: repetir uma determinada lógica em cada elemento de um array
// "loop infinito" => Condição que nunca é atendida => CUIDADO

// "for" => Utiliza-se da sintaxe "oneline" => Contador; Condição de limite; Incremento
let meuFor = 0;
for (meuFor; meuFor <= 10; meuFor++) {
  console.log(`Repetição usando "for": ${meuFor}`);
}

let meuArray2 = [1, 2, 3, 4, 5, 6];
for (let z = 0; z <= meuArray2.length; z++) {
  console.log(`Repetindo meu segundo array: ${z}`);
}

let meuArray3 = [1, 2, 3, 4, 5, 6];
let y = 0; // Pode-se declarar a variável de contador fora ou dentro do "for"
for (y; y <= meuArray3.length; y++) {
  console.log(`Repetindo meu terceiro array: ${y}`); // "length" => "Comprimento" => Percorre todos os elementos de um array
}

// "while" => Forma mais antiga de se codificar uma estrutura de condição
let x = 0;
while (x <= 5) {
  console.log(`Testando repetição: ${x}`);
  x++; // Adicionando um incremento para que a cada repetição seja somado mais 1 ao "x", evitando o loop infinito
}

let meuArray = ["teste1", "teste2", "teste3", "teste4"]; // Percorrendo cada elemento do array pelo índice
let i = 0;
while (i <= 3) {
  console.log(meuArray[i]);
  i++;
}

let nome = "Matheus"; // Percorrendo cada carácter de uma palavra
let j = 0;
while (j <= 6) {
  console.log(nome[j]);
  j++;
}

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
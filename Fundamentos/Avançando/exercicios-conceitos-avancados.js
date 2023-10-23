// Exercício 1: Manipulação de Array
// Crie uma lista de compras que é inicialmente vazia.
// Adicione 5 itens á lista usando push().
// Agora, remova o primeiro item da lista usando shift().
// Imprima a lista final no console.

const listaCompras = [];

listaCompras.push("Camiseta", "Calça", "Blusa", "Cueca", "Meia");
console.log(listaCompras);

listaCompras.shift();
console.log(listaCompras);

// Exercício 2: Manipulação de Array com find()
// Você tem um array de números: [3, 7, 14, 21, 29, 36, 42].
// Use a função find() para encontrar o primeiro número divisível por 7 e maior que 10.

const números = [3, 7, 11, 14, 21, 29, 36, 42];

const divisívelPor7 = números.find((num) => num > 10 && num % 7 === 0);
console.log(divisívelPor7);

// Exercício 3: Manipulação de Array com filter()
// Dado o array de números: [5, 10, 15, 20, 25, 30, 35, 40].
// Use a função filter() para criar um novo array que contenha apenas os números que são maiores que 20.

const números2 = [5, 10, 15, 20, 25, 30, 35, 40];

const maiorQue20 = números2.filter((num2) => num2 > 20);
console.log(maiorQue20);

// Exercício 4: Manipulação de String com split(), trim()
// Dada a string: " Bom dia, mundo! ".
// Remova os espaços em branco no início e no final da string e, em seguida, divida a string em palavras.

const string = " Bom dia, mundo! ";

const semEspaços = string.trim().split(" ");
console.log(semEspaços);

// Exercício 5: Manipulação de String com startsWith(), endsWith()
// Dada a string: "O rato roeu a roupa do rei de Roma".
// Verifique se a string começa com a palavra "O" e termina com a palavra "Roma".

const minhaString = "O rato roeu a roupa do rei de Roma";

const inicio = minhaString.startsWith("O");
const final = minhaString.endsWith("Roma");

console.log(inicio);
console.log(final);

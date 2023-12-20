// Exercício 45 => Escreva uma função sem argumentos que imprime a frase "Olá Mundo!" no console
const helloWorld = () => {
  console.log(`Olá Mundo!`);
};
helloWorld();

// Exercício 46 => Escreva uma função que aceite dois números como argumentos e retorne sua soma
const sum = (x, y) => {
  return x + y;
};
console.log(sum(3, 4));

// Exercício 47 => Escreva uma função que recebe um numero como argumento e retorne o seu quadrado
const powOne = (x) => {
  return x ** 2;
};
console.log(powOne(4));

const powTwo = (x) => {
  return Math.pow(x, 2);
};
console.log(powTwo(4));

// Exercício 48 => Escreva uma função que recebe um numero como argumento e retorna se ele é par ou ímpar
const parOuInpar = (x) => {
  let result;

  if (x % 2 === 0) {
    result = `${x} é par!`;
    console.log(result);
  } else {
    result = `${x} é ímpar!`;
    console.log(result);
  }
};
parOuInpar(8);

// Exercício 49 => Escreva uma função que aceita 3 números como argumentos e retorne o maior deles
const maxNum = (x, y, z) => {
  return Math.max(x, y, z);
};
console.log(maxNum(5, 43, 87));

// Exercício 50 => Escreva uma função que aceita uma string como argumento e retorne essa string invertida
const stringInverted = (x) => {
  let stringInverted = x.split("").reverse().join("");
  return stringInverted;
};
console.log(stringInverted("abc"));

// Exercício 51 => Escreva uma função que aceita um numero como argumento e retorna o fatorial desse numero
const fatorialNum = (x) => {
  let result = 1;
  for (let i = 2; i <= x; i++) {
    console.log(`Valor de i: ${i} - Valor de result: ${result}`);
    result *= i;
  }
  return result;
};
console.log(fatorialNum(5));

// Exercício 52 => Escreva uma função que calcule o enésimo numero da sequencia de Fibonacci
const enesimoFibo = (x) => {
  let a = 0;
  let b = 1;

  for (let i = 2; i <= x; i++) {
    let time = a;
    a = b;
    b = time + b;
  }
  return b;
};
console.log(enesimoFibo(7));

// Exercício 53 => Escreva uma função que aceita um numero como argumento e retorna se ele é primo ou não
const isPrime = (x) => {
  for (let i = 2; i <= x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};
console.log(isPrime(7));

// Exercício 54 => Escreva uma função que ordene um array de números em ordem decrescente
const ex54 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const invertedOrder = (array) => {
  return array.reverse();
};
console.log(invertedOrder(ex54));

// Exercício 55 => Escreva uma função que retorne o menor números em um array de números
const ex55 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const lowerItem = (array) => {
  return Math.min(...array); // Spread Operator - Espalha os itens do array como argumentos para a função Math.min
};
console.log(lowerItem(ex55));

// Exercício 56 => Escreva uma função que retorne o maior número de um array de números
const ex56 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const upperItem = (array) => {
  return Math.max(...array);
};
console.log(upperItem(ex56));

// Exercício 57 => Escreva uma função que retorne a soma de todos os números impares de um array de números
const ex57 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumArray = (array) => {
  return array.reduce((soma, num) => (num % 2 !== 0 ? soma + num : soma), 0);
};
console.log(sumArray(ex57));

// Exercício 58 => Escreva uma função que retorne a soma de todos os números pares em um array de números
const ex58 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumArrayTwo = (array) => {
  return array.reduce((soma, num) => (num % 2 === 0 ? soma + num : soma), 0);
};
console.log(sumArrayTwo(ex58));

// Exercício 59 => Escreva uma função que receba um array de números e retorne um novo array com todos os números duplicados
const ex59 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const duplicateArray = (array) => {
  return array.map((num) => num * 2);
};
console.log(duplicateArray(ex59));

// Exercício 60 => Escreva uma função que recebe um array de números como argumento e retorne um novo array com cada numero ao seu quadrado
const ex60 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squareArray = (array) => {
  return array.map((x) => x ** 2);
};
console.log(squareArray(ex60));

// Exercício 61 => Escreva uma função que recebe um array de números como argumento e retorne um novo array com a raiz quadrada de todos os números
const ex61 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sqrtArray = (array) => {
  return array.map((x) => Math.sqrt(x, 2));
};
console.log(sqrtArray(ex61));

// Exercício 62 => Escreva uma função que recebe um número e retorne um uma string repetida aquele número de vezes
const ex62 = "Oi!";

const stringRepeat = (x) => {
  return ex62.repeat(x);
};
console.log(stringRepeat(10));

// Exercício 63 => Escreva uma função que recebe um número e retorne um array com todos os números primos até aquele número.
const primeN = (num) => {
  let prime = [];
  for (let i = 2; i <= num; i++) {
    if (isPrimeTwo(i)) {
      prime.push(i);
    }
  }
  return prime;
};

const isPrimeTwo = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

console.log(primeN(10));

// Exercício 64 => Escreva uma função que recebe uma string como argumentos e retorne o número de palavras na string
const ex64 = `Olá meu nome é João Bertholino`;
console.log(ex64.split(" "));

const stringCount = (string) => {
  return string.split(" ").length;
};
console.log(stringCount(ex64));

// Exercício 65 => Escreva uma função que aceite um array de números e uma função de callback e retorne a soma de todos os números do array após a aplicação da função de callback
const ex65 = [1, 2, 3, 4, 5];

const callbackArray = (array, callback) => {
  return array.map(callback).reduce((x, y) => x + y, 0);
};

const callbackFunction = (z) => {
  return z * 2;
};
console.log(callbackArray(ex65, callbackFunction));

// Exercício 66 => Escreva uma função que aceite uma função de callback que retorne verdadeiro ou falso e um array, e retorne um novo array que contém apenas os elementos para os quais a função de callback retornou verdadeiro
const ex66 = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
const callback = (arr) => arr.reduce((x, y) => x + y, 0);

const arrayMap = (array, callback) => {
  return array.map(callback);
};
console.log(arrayMap(ex66, callback));

// Exercício 67 => Escreva uma função que aceite uma função de callback e um array de arrays, e retorne um novo array que contém os resultados de aplicar a função callback a cada array
const arrays = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
const callbackFunc = (arr) => arr.reduce((x, y) => x + y, 0);

function arrayMapper(array, callback) {
  return array.map(callback);
}
console.log(arrayMapper(arrays, callbackFunc));

// Exercício 68 => Escreva uma função de alta ordem que aceite um array de números e uma função de callback, e retorne um novo array que contém apenas os números do array original que satisfazem a condição da função de callback
const ex68 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const callbackEx68 = (num) => num > 5;

const ex68Func = (array, callback) => {
  return array.filter(callback);
};
console.log(ex68Func(ex68, callbackEx68));

// Exercício 69 => Escreva uma função que aceite um número e uma função de callback, e execute a função de callback o número de vezes especificado
function ex69(x, callback) {
  for (let i = 0; i < x; i++) {
    callback(i);
  }
}
const callbackEx69 = i => console.log(`Execução: ${i + 1}`);
ex69(10, callbackEx69);

// Exercício 70 => Escreva uma função de alta ordem que aceite um array de funções de callback e um valor, e retorne um array de resultados de aplicar cada função de callback ao valor

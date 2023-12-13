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
}
console.log(isPrime(7));

// Exercício 54 => Escreva uma função que ordene um array de números em ordem decrescente
const ex54 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const invertedOrder = (array) => {
  return array.reverse();
}
console.log(invertedOrder(ex54));

// Exercício 55 => Escreva uma função que retorne o menor números em um array de números
const ex55 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const lowerItem = (array) => {
  return Math.min(...array); // Spread Operator - Espalha os itens do array como argumentos para a função Math.min
}
console.log(lowerItem(ex55));

// Exercício 56 => Escreva uma função que retorne o maior número de um array de números
const ex56 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const upperItem = (array) => {
  return Math.max(...array);
}
console.log(upperItem(ex56));

// Exercício 57 => Escreva uma função que retorne a soma de todos os números impares de um array de números
const ex57 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumArray = (array) => {
  return array.reduce((soma, num) => num % 2 !== 0 ? soma + num : soma, 0);
}
console.log(sumArray(ex57));
// Exercício 24 => Programe um loop onde será percorrido os números de 1 a 10 e imprimira cada um no console
let ex24 = 1;

for (ex24; ex24 <= 10; ex24++) {
  console.log(`Percorrendo de 1 a 10 usando 'for': ${ex24}`);
}

// Exercício 25 => Utilizando um laço while, imprima no console os números de 1 a 10 e ordem decrescente
let ex25 = 10;

while (ex25 >= 1) {
  console.log(`Percorrendo em ordem decrescente de 1 a 10 usando 'while': ${ex25}`);
  ex25--;
}

// Exercício 26 => Utilizando um laço do-while, imprima todos os números ímpares de 1 a 20
let ex26 = 1;

do {
  if (ex26 % 2 != 0) {
    console.log(`Números impares de 1 a 20: ${ex26}`);
  }
  ex26++;
} while (ex26 <= 20);

// Exercício 27 => Utilizando um laço for, imprima a tabuada do 5
let ex27 = 1;

for (ex27; ex27 <= 10; ex27++) {
  console.log(`5 x ${ex27} = ${5 * ex27}`);
}

// Exercício 28 => Utilizando um laço while, calcule e imprima a soma de todos os números de 1 a 100
let addition = 1;
let sum = 0;

while (addition <= 100) {
  sum += addition;
  addition++;
}
console.log(`A soma de todos os números de 1 a 100 é: ${sum}`);

// Exercício 29 => Usando um laço do-while, imprima a soma de todos os números pares de 1 a 100
let ex29 = 1;
let sum1 = 0;

do {
  if (ex29 % 2 === 0) {
    sum1 += ex29;
  }
  ex29++;
} while (ex29 <= 100);
console.log(`Imprimindo todos os números pares de 1 a 100: ${sum1}`);

// Exercício 30 => Utilizando um laço for, imprima todos os números primos de 1 a 100
let num = 2;

for (num; num <= 100; num++) {
  let isCousin = true;
  let divide = 2;
  let squareRoot = Math.sqrt(num);

  for (divide, squareRoot; divide <= squareRoot; divide++) {
    if (num % divide === 0) {
      isCousin = false;
      break;
    }
  }
  if (isCousin) {
    console.log(`Imprimindo todos os números primos de 1 a 100: ${num}`);
  }
}

// Exercício 31 => Utilizando um laço while, crie um programa que advinha qual número entre 1 e 800 o usuário pensou usando busca binaria(dividir para conquistar)
let min = 1;
let max = 800;
let search = Math.floor((max + min) / 2);
let numberUser = 258;

while (search !== numberUser) {
  if (search > numberUser) {
    max = search;
    console.log(`"Search" > "numberSystem": ${min} - ${max}`);
  } else {
    min = search;
    console.log(`"Search" < "numberSystem": ${min} - ${max}`);
  }
  search = Math.floor((max + min) / 2);
}
console.log(`O numero pensado foi: ${search}`);

// Exercício 32 => Utilizando um laço do-while, crie um jogo de "Pedra, Papel e Tesoura" contra o computador
let escolhaUsuário = "Pedra";
let escolhaComputador;
let resultado;

do {
  let aleatório = Math.floor(Math.random() * 3);
  switch (aleatório) {
    case 0:
      escolhaComputador = "Pedra";
      break;
    case 1:
      escolhaComputador = "Papel";
      break;
    default:
      escolhaComputador = "Tesoura";
      break;
  }

  if ((escolhaUsuário === "Pedra" && escolhaComputador === "Tesoura") || (escolhaUsuário === "Papel" && escolhaComputador === "Pedra") || (escolhaUsuário === "Tesoura" && escolhaComputador === "Papel")) {
    resultado = "Usuário ganhou!";
  } else if (escolhaUsuário === escolhaComputador) {
    resultado = "Empate!";
  } else {
    resultado = "Computador ganhou!";
  }
  console.log(`Usuário ${escolhaUsuário} - Computador ${escolhaComputador} - Resultado ${resultado}`);
} while (resultado === "Empate!");

// Exercício 33 => Usando um laço for, imprima os primeiros 10 números da sequencia de Fibonacci
let num1 = 0;
let num2 = 1;
console.log(num1);
console.log(num2);

for (let i = 0; i < 10; i++) {
  let nextNum = num1 + num2;
  console.log(nextNum);

  num1 = num2;
  num2 = nextNum;
}

// Exercício 34 => Usando um laço while, imprima os números de 1 a 100, mas para múltiplos de 3 imprima "Fizz" e para múltiplos de 5 imprima "Buzz". Para números que são múltiplos de ambos, imprima "FizzBuzz"
let i = 1;

while (i <= 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`FizzBuzz: ${i}`);
  } else if (i % 3 === 0) {
    console.log(`Fizz: ${i}`);
  } else if (i % 5 === 0) {
    console.log(`Buzz: ${i}`);
  } else {
    console.log(`Não é múltiplo nem de 3 e nem de 5: ${i}`);
  }
  i++;
}

// Exercício 35 => Usando um laço for, imprima os primeiros 10 números triangulares (n * (n + 1) / 2)
for (let n = 0; n <= 10; n++) {
  let triangular = (n * (n + 1)) / 2;
  console.log(`O número ${triangular} é triangular!`);
}

// Exercício 36 => Utilizando um laço for, imprima todos os números perfeitos de 1 a 100
for (let l = 1; l <= 100; l++) {
  let soma = 0;

  for (let k = 1; k < l; k++) {
    if (l % k === 0) {
      soma += k;
    }
  }
  if (soma === l) {
    console.log(`Números perfeitos de 1 a 100: ${l}`);
  }
}

// Exercício 37 => Usando um laço while, imprima a soma dos quadrados dos primeiros 10 números naturais
let squad = 0;
let numSqrt = 1;

while (numSqrt <= 10) {
  squad += numSqrt * numSqrt;
  numSqrt++;
}
console.log(`A soma dos quadrados dos 10 primeiros números naturais é: ${squad}`);

// Exercício 38 => Utilizando um laço do-while, imprima a soma dos cubos dos 10 primeiros números naturais e arredonde o valor final
let cube = 0;
let q = 1;

do {
  cube += Math.pow(q, 3);
  q++;
} while (q <= 10);
console.log(`A soma dos cubos dos 10 primeiros números naturais é: ${cube}`);

// Exercício 39 => Utilizando um laço for, crie um programa onde irá calcular e imprimir o fatorial de um numero
let ex39 = 5;
let fat = 1;

for (let i = 1; i <= ex39; i++) {
  fat *= i;
}
console.log(`O fatorial de ${ex39} é: ${fat}`);

// Exercício 40 => Utilizando um laço while, crie um programa que inverta um string
let original = "Hello";
let inverted = "";
let operation = original.length - 1;

while (operation >= 0) {
  inverted += original[operation];
  operation--;
}
console.log(`A string "${original}" invertida é: "${inverted}"`);

// Exercício 41 => Usando um laço do-while, crie um programa que transforme um numero decimal em binário
let number = 10;
let bin = "";

do {
  bin = (number % 2) + bin;
  number = Math.floor(number / 2);
} while (number > 0);
console.log(`O numero convertido em binário é: ${bin}`);

// Exercício 42 => Usando um laço for, crie um programa que transforme um numero binário em decimal
let binário = "1010";
let decimal = 0;

for (let i = binário.length - 1, j = 0; i >= 0; i--, j++) {
  decimal += parseInt(binário[i]) * Math.pow(2, j);  
}
console.log(`O numero em decimal é ${decimal}`);

// Exercício 43 => Usando um laço while, crie um programa que retorna se um numero é palíndromo ou não

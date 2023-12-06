// Exercício 1 => Declare duas variáveis "nome" e "idade" e atribua valores a elas, em seguida, imprima os valores no console
const myName = "João";
const myAge = 21;
console.log(`Meu nome: ${myName}`);
console.log(`Minha idade é: ${myAge}`);

// Exercício 2 => Declare um constante chamada "pi", atribua o valor de PI e imprima no console
const pi = Math.PI;
console.log(`O valor de PI é: ${pi}`);

// Exercício 3 => Declare um variável e atribua o maior numero que o JavaScript suporta e imprima no console
const maxValue = Number.MAX_VALUE;
console.log(`O maior numero suportado no JS é: ${maxValue}`);

// Exercício 4 => Declare sue nome e sobrenome em duas variáveis, após isso declare um terceira variável que recebera a concatenação do valor das duas primeiras variáveis e imprima
const firstName = "João";
const lastName = "Bertholino";
const fullName = `${firstName} ${lastName}`;
console.log(`Meu nome completo é: ${fullName}`);

// Execício 5 => Declare duas variáveis de tipo "number" e utilize o operador de adição para realizar operações entre elas e imprima
const fistNumber = 10;
const lastNumber = 20;
const addiction = fistNumber + lastNumber;
console.log(`A soma dos valores da variáveis é: ${addiction}`);

// Exercício 6 => Declare duas variáveis booleanas e use os operadores lógicos como "&&"(AND), "||"(OR), "!"(NOT) para realizar operações entre elas e imprima o retorno
const myTruffy = true;
const myFalsy = false;

console.log(`Operador AND: ${myTruffy && myFalsy}`);
console.log(`Operador NOT: ${myTruffy || myFalsy}`);
console.log(`Operador NOT: ${(myTruffy, !myFalsy)}`);

// Exercício 7 => Declare duas variáveis numéricas e use operadores de comparação como "=="(igual), "==="(igual estrito), "!="(deferente), "!=="(diferente estrito), "<"(menor que), ">"(maior que), "<="(menor ou igual que), ">="(maior ou igual que)
const numberOne = 17;
const numberTwo = 21;

console.log(numberOne == numberTwo);
console.log(numberOne === numberTwo);
console.log(numberOne != numberTwo);
console.log(numberOne !== numberTwo);
console.log(numberOne < numberTwo);
console.log(numberOne > numberTwo);
console.log(numberOne <= numberTwo);
console.log(numberOne >= numberTwo);

// Exercício 8 => Declare uma variável numérica e utilize os operadores de "++"(incremento) para aumentar o valor da variável e "--"(decremento) para diminuir o valor da variável e imprima no console
let myNumberIncremental = 10;
console.log(`Utilizando o operador de incremento: ${++myNumberIncremental}`);

let myNumberDecremental = 10;
console.log(`Utilizando o operador de incremento: ${--myNumberDecremental}`);

// Exercício 9 => Escreva um programa que recebe um numero e verifica se é negativo, positivo ou igual a zero
const verificationIfElse = (num) => {
  if (num > 0) {
    console.log(`Positivo!`);
  } else if (num < 0) {
    console.log(`Negativo!`);
  } else {
    console.log(`Igual a zero!`);
  }
};
verificationIfElse(17);

const verificationSwitchCase = (num) => {
  switch (true) {
    case num > 0:
      console.log(`Positivo!`);
      break;
    case num < 0:
      console.log(`Negativo!`);
      break;
    default:
      console.log(`Igual a zero!`);
      break;
  }
};
verificationSwitchCase(-21);

// Execício 10 => Escreva um programa que recebe duas notas de um aluno, calcula a média e retorna se foi aprovado ou não
const calcMediaOne = (notaOne, notaTwo) => {
  const notaMedia = (notaOne + notaTwo) / 2;

  switch (true) {
    case notaMedia >= 7:
      console.log(`Aprovado!`);
      break;
    case notaMedia < 7 && notaMedia >= 5:
      console.log(`Recuperação!`);
      break;
    default:
      console.log(`Reprovado!`);
      break;
  }
};
calcMediaOne(10, 10);

const calcMediaTwo = (notaOne, notaTwo) => {
  const notaMedia = (notaOne + notaTwo) / 2;

  if (notaMedia >= 7) {
    console.log(`Aprovado!`);
  } else if (notaMedia < 7 && notaMedia >= 5) {
    console.log(`Recuperação!`);
  } else {
    console.log(`Reprovado!`);
  }
};
calcMediaTwo(4.9, 5);

// Exercício 11 => Escreva um programa que verifica se a pessoa tem idade para votar ou não
const votoOne = (num) => {
  if (num < 16) {
    console.log(`Não é permitido votar!`);
  } else if (num >= 16 && num < 18) {
    console.log(`Voto facultativo!`);
  } else if (num >= 18 && num < 70) {
    console.log(`Voto obrigatório!`);
  } else {
    console.log(`Voto facultativo!`);
  }
};
votoOne(21);

const votoTwo = (num) => {
  switch (true) {
    case num < 16:
      console.log(`Não é permitido votar!`);
      break;
    case num >= 16 && num < 18:
      console.log(`Voto facultativo!`);
      break;
    case num >= 18 && num < 70:
      console.log(`Voto obrigatório!`);
      break;
    default:
      console.log(`Voto facultativo!`);
      break;
  }
};
votoTwo(17);

// Exercício 12 => Escreva um programa onde verifica a situação de um aluno com base na sua média final
const mediaOne = (media) => {
  if (media >= 7) {
    console.log(`Passou!`);
  } else if (media >= 5 && media <= 6.9) {
    console.log(`Recuperação!`);
  } else {
    console.log(`Reprovado!`);
  }
};
mediaOne(10);

const mediaTwo = (media) => {
  switch (true) {
    case media >= 7:
      console.log(`Passou!`);
      break;
    case media >= 5 && media <= 6.9:
      console.log(`Recuperação!`);
      break;
    default:
      console.log(`Reprovado!`);
      break;
  }
};
mediaTwo(5);

// Exercício 13 => Escreva um programa que calcula o IMC (Índice de Massa Corporal) de uma pessoa e imprima uma mensagem indicando se a pessoa esta abaixo, no peso ideal ou acima do peso
const calcImcOne = (peso, altura) => {
  const imcResult = peso / altura ** 2;

  if (imcResult < 18.5) {
    console.log(`${imcResult}: Abaixo do peso!`);
  } else if (imcResult >= 18.5 && imcResult < 25) {
    console.log(`${imcResult}: Normal!`);
  } else if (imcResult >= 25 && imcResult < 30) {
    console.log(`${imcResult}: Sobrepeso!`);
  } else {
    console.log(`${imcResult}: Obesidade!`);
  }
};
calcImcOne(95, 2);

const calcImcTwo = (peso, altura) => {
  const imcResult = peso / altura ** 2;

  switch (true) {
    case imcResult < 18.5:
      console.log(`${imcResult}: Abaixo do peso!`);
      break;
    case imcResult >= 18.5 && imcResult < 25:
      console.log(`${imcResult}: Normal!`);
      break;
    case imcResult >= 25 && imcResult < 30:
      console.log(`${imcResult}: Sobrepeso!`);
      break;
    default:
      console.log(`${imcResult}: Obesidade!`);
      break;
  }
};
calcImcTwo(115, 2);

// Exercício 14 => Escreva um programa que retorne se um ano é bissexto
const leapYearOne = (year) => {
  const validation = year % 2;

  if (validation === 0) {
    console.log(`${year}: Bissexto!`);
  } else {
    console.log(`${year}: Não é bissexto!`);
  }
};
leapYearOne(2023);

const leapYearTwo = (year) => {
  const validation = year % 2;

  switch (true) {
    case validation === 0:
      console.log(`${year}: Bissexto!`);
      break;
    default:
      console.log(`${year}: Não é bissexto!`);
      break;
  }
};
leapYearTwo(2022);

// Exercício 15 => Escreva um programa que retorna se uma palavra é ou não um palíndromo
const políndromoOne = (word) => {
  let invertedWord = word.split("").reverse().join("");

  if (word === invertedWord) {
    console.log(`${word} é um políndromo`);
  } else {
    console.log(`${word} não é um políndromo`);
  }
};
políndromoOne("Ellen");

const políndromoTwo = (word) => {
  let invertedWord = word.split("").reverse().join("");

  switch (true) {
    case word === invertedWord:
      console.log(`${word} é um políndromo`);
      break;
    default:
      console.log(`${word} não é um políndromo`);
      break;
  }
};
políndromoTwo("arara");

// Exercício 16 => Escreva um programa onde receberá três números como argumentos e retornara o maior entre eles
const highNumberOne = (x, y, z) => {
  if (x > y && x > z) {
    console.log(`${x}: Maior número!`);
  } else if (y > x && y > z) {
    console.log(`${y}: Maior número!`);
  } else {
    console.log(`${z}: Maior número!`);
  }
};
highNumberOne(5.23242, 5.243424, 5.23982);

const highNumberTwo = (x, y, z) => {
  switch (true) {
    case x > y && x > z:
      console.log(`${x}: Maior número!`);
      break;
    case y > x && y > z:
      console.log(`${y}: Maior número!`);
      break;
    default:
      console.log(`${z}: Maior número!`);
      break;
  }
};
highNumberTwo(5.23242, 5.23244, 5.23243);

// Exercício 17 => Escreva um programa de retorna se um numero é par ou ímpar
const parOuImparOne = (x) => {
  const result = x % 2;

  if (result === 0) {
    console.log(`${x} é par!`);
  } else {
    console.log(`${x} é ímpar!`);
  }
};
parOuImparOne(13);

const parOuImparTwo = (x) => {
  const result = x % 2;

  switch (true) {
    case result === 0:
      console.log(`${x} é par!`);
      break;
    default:
      console.log(`${x} é ímpar!`);
      break;
  }
};
parOuImparTwo(18);

// Exercício 18 => Escreva um programa que retorne se um pessoa pode dirigir com base na idade
const permissionToDriveOne = (x) => {
  if (x >= 18) {
    console.log(`Pode dirigir!`);
  } else {
    console.log(`Não pode dirigir!`);
  }
};
permissionToDriveOne(17);

const permissionToDriveTwo = (x) => {
  switch (true) {
    case x >= 18:
      console.log(`Pode dirigir!`);
      break;
    default:
      console.log(`Não pode dirigir!`);
  }
};
permissionToDriveTwo(21);

// Execício 19 => Escreva um programa que retorne se um numero esta dentro de um intervalo, essa função receberá três números como argumentos onde o primeiro será o limite mínimo, o segundo será o numero a ser verificado e o terceiro será o limite máximo
const intervalOne = (x, y, z) => {
  if (y >= x && y <= z) {
    console.log(`${y} está dentro do limite de intervalo!`);
  } else {
    console.log(`${y} não esta dentro do intervalo!`);
  }
};
intervalOne(0, 5, 10);

const intervalTwo = (x, y, z) => {
  switch (true) {
    case y >= x && y <= z:
      console.log(`${y} está dentro do limite de intervalo!`);
      break;
    default:
      console.log(`${y} não esta dentro do intervalo!`);
      break;
  }
};
intervalTwo(50, 110, 100);

// Exercício 20 => Escreva um programa onde ao receber como argumento um nota de um aluno, retornara uma classificação para nota
const classificationNoteOne = (x) => {
  if (x <= 10 && x >= 8) {
    console.log(`Ótima nota!`);
  } else if (x <= 7 && x >= 6) {
    console.log(`Nota mediana!`);
  } else {
    console.log(`Nota ruim!`);
  }
};
classificationNoteOne(1);

const classificationNoteTwo = (x) => {
  switch (true) {
    case x <= 10 && x >= 8:
      console.log(`Ótima nota!`);
      break;
    case x <= 7 && x >= 6:
      console.log(`Nota mediana!`);
      break;
    default:
      console.log(`Nota ruim!`);
  }
};
classificationNoteTwo(9);

// Exercício 21 => Escreva um programa que retornara a estação climática com base no mês
const stationOne = (x) => {
  if (x < 3 || x === 12) {
    console.log(`O mês ${x} é verão!`);
  } else if (x < 6) {
    console.log(`O mês ${x} é outono!`);
  } else if (x < 9) {
    console.log(`O mês ${x} é inverno!`);
  } else {
    console.log(`O mês ${x} é primavera!`);
  }
};
stationOne(9);

const stationTwo = (x) => {
  switch (true) {
    case x < 3 || x === 12:
      console.log(`O mês ${x} é verão!`);
      break;
    case x < 6:
      console.log(`O mês ${x} é outono!`);
      break;
    case x < 9:
      console.log(`O mês ${x} é inverno!`);
      break;
    default:
      console.log(`O mês ${x} é primavera!`);
      break;
  }
};
stationTwo(7);

// Exercício 22 => Escreva um programa onde será retornado o numero de dias de um mês
const daysOfMonth = (x) => {
  switch (x) {
    case 2:
      console.log(`28 ou 29 dias!`);
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      console.log(`30 dias!`);
      break;
    default:
      console.log(`31 dias!`);
  }
};
daysOfMonth(12);

// Exercício 23 => Escreva um programa onde receberá um cor do semáforo "Red", "Green", "Yellow" e retornara uma mensagem do significado desse cor
const semáforoOne = (x) => {
  if (x === "Red") {
    console.log(`${x}: Pare!`);
  } else if (x === "Green") {
    console.log(`${x}: Avance!`);
  } else if (x === "Yellow") {
    console.log(`${x}: Atenção!`);
  } else {
    console.log(`${x}: Essa cor não pertence a um semáforo!`);
  }
};
semáforoOne("Red");
semáforoOne("Yellow");
semáforoOne("Green");

const semáforoTwo = (x) => {
  switch (x) {
    case "Red":
      console.log(`${x}: Pare!`);
      break;
    case "Green":
      console.log(`${x}: Avance!`);
      break;
    case "Yellow":
      console.log(`${x}: Atenção!`);
      break;
    default:
      console.log(`${x}: Essa cor não pertence a um semáforo!`);
      break;
  }
};
semáforoTwo("Red");
semáforoTwo("Yellow");
semáforoTwo("Green");

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

// Exercício 29 => Usando um laço do-while, imprima todos os números pares de 1 a 100
let j = 1;

do {
  if (j % 2 == 0) {
    console.log(`Imprimindo todos os números pares de 1 a 100: ${j}`);
  }
  j++;
} while (j <= 100);

// Exercício 30 => Utilizando um laço for, imprima todos os números primos de 1 a 100
let num = 2;

for (num; num <= 100; num++) {
  let isPrime = true;
  let div = 2;
  let sqrt = Math.sqrt(num);

  for (div, sqrt; div <= sqrt; div++) {
    if (num % div === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
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
    console.log(l);
  }
}

// Exercício 37 => Usando um laço while, imprima a soma dos quadrados dos primeiros 10 números naturais
let squad = 0;
let r = 1;

while (r <= 10) {
  squad += r * r;
  r++;
}
console.log(`A soma dos quadrados dos 10 primeiros números naturais é: ${squad}`);

// Exercício 38 => Utilizando um laço do-while, imprima a soma dos cubos dos 10 primeiros números naturais
let cube = 0;
let q = 1;

do {
  cube += q * q * q;
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
let a = original.length - 1;

while (a >= 0) {
  inverted += original[a];
  a--;
}
console.log(`A string "${original}" invertida é: "${inverted}"`);

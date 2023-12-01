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

console.clear(); // Limpando console

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
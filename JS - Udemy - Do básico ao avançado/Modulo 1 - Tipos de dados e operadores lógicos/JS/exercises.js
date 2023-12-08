console.warn(`Exercícios modulo 1 - Tipos de dados e operadores lógicos`);

// Exercício 1 => Escreva três valores em string com aspas simples, aspas duplas e template literals e imprima no console.
const stringOne = "Aspas simples!";
console.log(stringOne);

const stringTwo = "Aspas duplas!";
console.log(stringTwo);

const stringThree = `Template Literals!`;
console.log(stringThree);

// Exercício 2 => Escreva três valores em number e imprima no console.
const numberOne = (3 * (12 + 4)) / 4.8;
console.log(numberOne);

const numberTwo = 10.5;
console.log(numberTwo);

const numberThree = -10.5;
console.log(numberThree);

// Exercício 3 => Escreva três comparações em boolean, uma com operador maior, uma com operador menor igual e outra com operador de diferença
const booleanOne = 10;
const booleanTwo = 20;

const comparisonOne = booleanOne > booleanTwo;
console.log(comparisonOne);

const comparisonTwo = booleanOne <= booleanTwo;
console.log(comparisonTwo);

const comparisonThree = booleanOne !== booleanTwo;
console.log(comparisonThree);

// Exercício 4 => Escreva três comparações com operadores lógicos, uma com AND, uma com OR e outra com NOT
const logicComparisonOne = 5 >= 10 && 12 < 10;
console.log(logicComparisonOne);

const logicComparisonTwo = 10 <= 50 || 12 < 5;
console.log(logicComparisonTwo);

const logicComparisonThree = !(23 <= 20) && !("João" !== "João");
console.log(logicComparisonThree);

// Exercício 5 => Escreva uma operação que retorne NaN no console
const notNumberOne = 0 / 0;
console.log(notNumberOne);

const notNumberTwo = 0 / `João`;
console.log(notNumberTwo);

console.warn(`Exercícios modulo 1 - Tipos de dados e operadores lógicos`);
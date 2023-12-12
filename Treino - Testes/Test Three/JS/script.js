// Sequencia de Fibonacci
let firstFiboNumber = 0;
let secondFiboNumber = 1;
let fibonacciSequence = [];

fibonacciSequence.push(firstFiboNumber);
fibonacciSequence.push(secondFiboNumber);

for (let i = 0; i <= 7; i++) {
  let nextNumber = firstFiboNumber + secondFiboNumber;
  firstFiboNumber = secondFiboNumber;
  secondFiboNumber = nextNumber;
  fibonacciSequence.push(nextNumber);
}
console.log(fibonacciSequence);

// Algoritmo de busca binaria
let firstBinNumber = 1;
let lastBinNumber = 400;
let algCalc = Math.floor((firstBinNumber + lastBinNumber) / 2);
const searchNumber = parseFloat(prompt("Digite um numero entre 1 e 400:"));

while (searchNumber !== algCalc) {
  if (searchNumber < algCalc) {
    lastBinNumber = algCalc;
    console.log(`if => ${firstBinNumber} ${lastBinNumber}`);
  } else {
    firstBinNumber = algCalc;
    console.log(`else => ${firstBinNumber} ${lastBinNumber}`);
  }
  algCalc = Math.floor((firstBinNumber + lastBinNumber) / 2);
  console.log(`${algCalc}`);
}

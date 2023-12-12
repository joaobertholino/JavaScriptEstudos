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
const searchNumber = 256;

while (searchNumber !== algCalc) {
  if (searchNumber < algCalc) {
    lastBinNumber = algCalc;
    // console.log(`if => ${firstBinNumber} ${lastBinNumber}`);
  } else {
    firstBinNumber = algCalc;
    // console.log(`else => ${firstBinNumber} ${lastBinNumber}`);
  }
  algCalc = Math.floor((firstBinNumber + lastBinNumber) / 2);
  console.log(`${algCalc}`);
}

// Função de calculo de nota media
console.clear();

let nota1 = parseFloat(window.prompt("Nota 1"));
let nota2 = parseFloat(window.prompt("Nota 2"));
let nota3 = parseFloat(window.prompt("Nota 3"));

const media = (x, y, z) => {
  let mediaNotas = (x + y + z) / 3;

  if (mediaNotas < 6 && mediaNotas !== NaN) {
    console.log(`Nota: ${Math.floor(mediaNotas)} - Reprovado!`);
  } else if (mediaNotas >= 6 && mediaNotas !== NaN) {
    console.log(`Nota ${Math.floor(mediaNotas)} - Aprovado`);
  } else {
    console.log(`Nota invalida!`);
  }
};
media(nota1, nota2, nota3);
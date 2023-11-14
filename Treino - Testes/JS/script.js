let idade = 21;
let peso = 71.4;
console.log(`Idade: ${idade}`);
console.log(`Peso: ${peso}`);

const Pi = Math.PI;
console.log(`Valor de PI: ${Pi}`);

let numMáximo = Number.MAX_VALUE;
console.log(`Valor máximo do JavaScript: ${numMáximo}`);

const nome = "João";
const sobrenome = "Bertholino";
const nomeCompleto = `${nome} ${sobrenome}`;
console.log(nomeCompleto);

const valuePrimary = 10;
const valueSecondary = 20;
const valuesSoma = valuePrimary + valueSecondary;
console.log(valuesSoma);

const soma = (a, b) => {
  return a + b;
};
const resultadoSoma = soma(5, 5);
console.log(resultadoSoma);

const verdadeiro = true;
const falso = false;
console.log(verdadeiro && falso);
console.log(verdadeiro && verdadeiro);
console.log(verdadeiro || falso);
console.log(verdadeiro || verdadeiro);
console.log(!verdadeiro);
console.log(!falso);

const num1 = 10;
const num2 = 20;
const num3 = 30;
if (num1 >= num2) {
  console.log("Passou no teste 1");
} else if (num1 >= num3) {
  console.log("Passou no teste 2");
} else if (num1 <= num2) {
  console.log("Passou no teste 3");
} else if (num1 <= num3) {
  console.log("Passou no teste 4");
} else {
  console.log("Não passou nos testes");
}

let num4 = 10;
num4++
console.log(num4);

const num5 = 0;
if (num5 > 0) {
  console.log("Positivo");
} else if(num5 < 0) {
  console.log("Negativo");
} else {
  console.log("Igual a zero");
}

const verificarNumero = (num6) => {
  if (num6 > 0) {
    console.log("Positivo");
  } else if (num6 < 0) {
    console.log("Negativo");
  } else {
    console.log("Igual a zero");
  }
}
verificarNumero(-5);
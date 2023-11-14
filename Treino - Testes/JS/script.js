// Exercício 1
let idade = 21;
let peso = 71.4;
console.log(`Idade: ${idade}`);
console.log(`Peso: ${peso}`);

// Exercício 2
const Pi = Math.PI;
console.log(`Valor de PI: ${Pi}`);

// Exercício 3
let numMáximo = Number.MAX_VALUE;
console.log(`Valor máximo do JavaScript: ${numMáximo}`);

// Exercício 4
const nome = "João";
const sobrenome = "Bertholino";
const nomeCompleto = `${nome} ${sobrenome}`;
console.log(nomeCompleto);

// Exercício 5
const valuePrimary = 10;
const valueSecondary = 20;
const valuesSoma = valuePrimary + valueSecondary;
console.log(valuesSoma);

// Exercício 6
const soma = (a, b) => {
  return a + b;
};
const resultadoSoma = soma(5, 5);
console.log(resultadoSoma);

// Exercício 7
const verdadeiro = true;
const falso = false;
console.log(verdadeiro && falso);
console.log(verdadeiro && verdadeiro);
console.log(verdadeiro || falso);
console.log(verdadeiro || verdadeiro);
console.log(!verdadeiro);
console.log(!falso);

// Exercício 8
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

// Exercício 9
let num4 = 10;
num4++;
console.log(num4);

// Exercício 10
const num5 = 0;
if (num5 > 0) {
  console.log("Positivo");
} else if (num5 < 0) {
  console.log("Negativo");
} else {
  console.log("Igual a zero");
}

// Exercício 11
const verificarNumero = (num6) => {
  if (num6 > 0) {
    console.log("Positivo");
  } else if (num6 < 0) {
    console.log("Negativo");
  } else {
    console.log("Igual a zero");
  }
};
verificarNumero(-5);

// Exercício 12
const notas = (nota1, nota2) => {
  let media = (nota1 + nota2) / 2;
  if (media >= 7) {
    console.log(`Aprovado com media: ${media}`);
  } else {
    console.log(`Reprovado com media: ${media}`);
  }
};
notas(5, 7);

// Exercício 13
const permissãoVoto = (idade) => {
  if (idade >= 18 && idade < 70) {
    console.log("Voto obrigatório");
  } else if (idade >= 16 && idade < 18) {
    console.log("Voto facultativo");
  } else {
    console.log("Não poderá voltar");
  }
};
permissãoVoto(21);
permissãoVoto(17);
permissãoVoto(12);

const permissãoVoto2 = (idade) => {
  switch (idade) {
    case idade >= 18 && idade < 70:
      console.log("Voto obrigatório");
      break;
    case idade >= 16 && idade < 18:
      console.log("Voto facultativo");
      break;
    default:
      console.log("Não poderá votar");
  }
}
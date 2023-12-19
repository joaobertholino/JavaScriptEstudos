console.warn(`Modulo 6 - Debugs e erros no JavaScript`);

// Strict mode => Quando ativado, o interpretador JavaScript impõe regras mais rigorosas e gera mensagens de erro para práticas que podem ser propensas a erros
("use strict");

// Tratamento de input por função => Tratamento de dados enviados pelo usuário
function numberCheck(num) {
  let number = Number(num);

  if (Number.isNaN(number)) {
    console.log(`Insira apenas números!`);
  } else {
    return number;
  }
}
numberCheck(5);
numberCheck("teste");

// Exceptions => Permite criar erros no programa
function saudação(name) {
  if (typeof name != "string") {
    throw new Error("Insira uma string");
  } else {
    console.log(`Olá ${name}`);
  }
}
saudação("João");

// tryCatch => Executa um bloco de código em try e captura o erro em catch, sem parar a execução do programa
try {
  let a = 2 + b;
} catch (error) {
  console.log(`${error}`); // Capturando o erro e imprimindo no console
}

// Finally => Um bloco de código que sera executado independente do resultado do tryCatch, podendo existir com try e catch ou apenas try
try {
  let x = 2 + y;
} catch (error) {
  console.log(`${error}`); // Capturando o erro e imprimindo no console
} finally {
  console.log(`Executando o finally!`);
}

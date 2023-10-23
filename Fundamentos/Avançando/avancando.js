// Manipulação de arrays
const frutas = ["Maça", "Melancia"];

frutas.unshift("Uva"); // Adiciona um elemento no inicio do array
frutas.push("Laranja"); // Adiciona um elemento no final do array
frutas.shift(); // Remove o primeiro elemento do array
frutas.pop(); // Remove o ultimo elemento do array

console.log(frutas);
console.log(frutas);

// Map, Filter, Reduce => Arrow function
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeroPar = numeros.find((num) => num % 2 === 0); // O metodo "find" retorna apenas o primeiro elemento do critério
const numerosPares = numeros.filter((numP) => numP % 2 === 0); // O metodo "Filter" retorna todos os elementos de acordo com o critério

console.log(numeroPar);
console.log(numerosPares);

// Manipulação de strings
const frase = "Olá, mundo!     ";
const palavras = frase.trim(); // O metodo "trim" retorna o valor da string sem espaçamentos no inicio e no final

console.log(palavras);

const frase2 = "JavaScript é incrivel!";

console.log(frase2.startsWith("Java")); // Retorna "true" caso haja correspondencia exata, mesmo que incompleta, no inicio da string
console.log(frase2.startsWith("java")); // Retorna "false" caso haja alguma não-correspondencia, tambem no inicio da string

console.log(frase2.endsWith("!")); // Retorna "true" caso haja correspondencia exata, porem, no final da string
console.log(frase2.endsWith("?")); // Retorna "false" caso haja alguma não-correspondencia, tambem no final da string

//Exceções e tratamento de erros
const idade = 15;

// Executa um codigo em "try" e exibe erros em "catch"
try {
  if (idade < 18) {
    throw new Error("Voçe deve ter pelo menos 18 anos!"); // Criando um objeto "Error" apartir de uma classe "new", onde "throw" executa esse erro, quando temos um erro, o JavaScript encerra por completo a execução do programa
  }
} catch (error) {
  console.log(error.message); // O ".message" retorna apenas o conteúdo da mensagem
}

console.log("Continuando o programa..."); // Usando "tryCatch", mesmo com error, o programa continua sendo executado

// Callback => Uma função que será executada em outra função
const cumprimentar = (nome, saudação) => {
  console.log("Olá, " + nome);
  saudação();
};

const mostrarSaudação = () => {
  console.log("como você está");
};

cumprimentar("Matheus", mostrarSaudação);

// setTimeout => Executa algo após um tempo pré-definido
const mostrarMensagem = () => {
  console.log("Essa mensagem será exibida após 3 segundos.");
};

setTimeout(mostrarMensagem, 300000); // 1000ms = 1s
setTimeout(() => {
  console.log("Oi!"); // Não recebe uma função nomeada ou anônima, e sim, recebe uma callback
}, 500000);

// Promises => Promete que irá executar um codigo após uma condição
const promessa = new Promise((resolve, reject) => {
  const condição = true;

  if (condição) {
    resolve("A condição é verdadeira!");
  } else {
    reject("A condição é falsa!");
  }
});

promessa
  .then((mensagem) => {
    console.log(mensagem); // Executa a promessa => codigo prometido
  })
  .catch((erro) => {
    console.log(erro);
  });

// Bibliotecas "Promise based"
const promise1 = Promise.resolve("Promessa instantânea"); // Uma "Promise" tem acesso direto ao metodo "resolve" e "Reject" sem passar por uma função
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 250000, "Promessa não instantânea");
});

Promise.all([promise1, promise2]).then((valores) => console.log(valores)); // Fazendo com que tanto a promessa com setTimeout, quanto a promessa instantânea sejam exibidas simultaneamente

// Async Await
// Sem uso de "tryCatch"
const obterValor = async () => {
  const promessa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Valor obtido"), 200000);
  });

  const valor = await promessa;
  console.log(valor);
};

obterValor();

// Com uso de "tryCatch"
const obterValorComErro = async () => {
  try {
    const promessa = new Promise((resolve, reject) => {
      setTimeout(() => reject("Valor com erro"), 300000);
    });

    const valorComErro = await promessa;
    console.log(valorComErro);
  } catch (error) {
    console.log(error);
  }
};

obterValorComErro();

// JSON => JavaScript Object Notation
// Padroniza a cominicação entre font-end e back-end em apenas uma linguagem
const objeto = { nome: "João", idade: 21 };
const jsonString = JSON.stringify(objeto); // Converte objeto para JSON

console.log(jsonString);
console.log(typeof jsonString);

const json = '{ "nome": "João", "idade": 21 }';
const objeto2 = JSON.parse(json); // Converte JSON para objeto

console.log(objeto2);
console.log(typeof objeto2);

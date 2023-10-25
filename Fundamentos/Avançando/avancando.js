// Manipulação de arrays
const frutas = ["Maça", "Melancia"];
console.log(frutas);

frutas.unshift("Uva"); // Adiciona um elemento no inicio do array
console.log(frutas);

frutas.push("Laranja"); // Adiciona um elemento no final do array
console.log(frutas);

frutas.shift(); // Remove o primeiro elemento do array
console.log(frutas);

frutas.pop(); // Remove o ultimo elemento do array
console.log(frutas);

// Map, Filter, Reduce => Arrow function
const números = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numeroPar = números.find((num) => num % 2 === 0); // O método "find" retorna apenas o primeiro elemento do critério
console.log(numeroPar);

const númerosPares = números.filter((numP) => numP % 2 === 0); // O método "Filter" retorna todos os elementos do critério
console.log(númerosPares);

// Manipulação de strings
const frase = "Olá, mundo!     ";
const palavras = frase.trim(); // O método "trim" remove espaços no inicio e no final
console.log(palavras);

const frase2 = "JavaScript é incrível!";
console.log(frase2.startsWith("Java")); // "startsWith" => Retorna "true" caso haja correspondência exata, mesmo que incompleta, no inicio da string
console.log(frase2.startsWith("java")); // "startsWith" => Retorna "false" caso não haja correspondência exata, também no inicio da string
console.log(frase2.endsWith("!")); // "endsWith" => Retorna "true" caso haja correspondência exata, porem, no final da string
console.log(frase2.endsWith("?")); // "endsWith" => Retorna "false" caso não haja correspondência exata, também no final da string

// Exceções e tratamento de erros => Quando temos um erro, o JavaScript encerra por completo a execução do programa
const idade = 15;

// Executa um código em "try" e exibe erros em "catch"
try {
  if (idade < 18) {
    throw new Error("Voce deve ter pelo menos 18 anos!"); // Criando um objeto "Error" a partir de uma classe "new", onde "throw" executa esse erro
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

setTimeout(mostrarMensagem, 10000); // 1000ms = 1s

setTimeout(() => {
  console.log("Oi!"); // Não recebe uma função nomeada ou anônima, e sim, recebe uma callback
}, 15000);

// Promises => Promete que irá executar um código após uma condição
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
    console.log(mensagem); // ".then" => Executa o "resolve"
  })
  .catch((erro) => {
    console.log(erro); // ".catch" => Executa o "reject"
  });

// Bibliotecas "Promise based"
const promise1 = Promise.resolve("Promessa instantânea"); // Uma "Promise" tem acesso direto ao método "resolve" e "Reject" sem passar por uma função
console.log(promise1);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 150000, "Promessa não instantânea");
});
console.log(promise2);

Promise.all([promise1, promise2]).then((valores) => console.log(valores)); // Fazendo com que tanto a promessa com setTimeout, quanto a promessa instantânea sejam exibidas simultaneamente

// Async Await
// Sem uso de "tryCatch"
const obterValor = async () => {
  const promessa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Valor obtido"), 200000);
  });

  const valor = await promessa; // "await" => Pausa a execução da função até que a promessa seja resolvida, após sua resolução, o valor obtido será armazenado na variável "valor"
  console.log(valor);
};

obterValor();

// Com uso de "tryCatch"
const obterValorComErro = async () => {
  try {
    const promessa = new Promise((resolve, reject) => {
      setTimeout(() => reject("Valor com erro"), 1000);
    });
    const valorComErro = await promessa;
    console.log(valorComErro); // A tentativa de imprimir "valorComErro" será ignorada devido à rejeição da Promise, passando a execução para o bloco "catch"
  } catch (error) {
    console.log(error);
  }
};

obterValorComErro();

// JSON(JavaScript Object Notation) => Padroniza a comunicação entre font-end e back-end em apenas uma linguagem
const objeto = { nome: "João", idade: 21 };
const jsonString = JSON.stringify(objeto); // "stringify" => Converte objeto para JSON
console.log(jsonString);
console.log(typeof jsonString);

const json = '{ "nome": "João", "idade": 21 }';
const objeto2 = JSON.parse(json); // "parse" => Converte JSON para objeto
console.log(objeto2);
console.log(typeof objeto2);

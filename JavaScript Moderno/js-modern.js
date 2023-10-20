// ES6+ => ECMAScript 6 (ES2015)
// "let" e "const"
let n = 10;
n = 20;

const x = 15; // "const" => Não pode ser alterado, caso seja, computara um erro

const testeVar = () => {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x); // "var" => Independente do escopo, sempre usara a mesma variavel e não da erro ao criar variavel com o mesmo nome
  }
  console.log(x);
};

testeVar();

const testeLet = () => {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x); // "let" => Pertence apenas ao seu proprio escopo, não sendo visiveis em outros escopos
  }
  console.log(x);
};

testeVar();
testeLet();

// Arrow function => Sem uso de chaves(oneLine)
const soma = (a, b) => a + b; // Declara os argumentos entre os parenteses(), após a arrow declara-se oque seja executado
console.log(soma(3, 5)); // Resume operações como "math", "reduce", "filter" e etc

const quadrado = (numero) => numero * numero; // Retorna o valor ao quadrado de um numero
console.log(quadrado(5));

// Arrow function => Metodo convencional, usando chaves para criar um bloco
const cumprimento = (nome) => {
  const mensagem = `Olá, ${nome}!`; // Interpolação
  return mensagem; // Quando tem uma função de bloco em arrow function, tem que retornar
};

console.log(cumprimento("Matheus"));

// Template literals => Recurso que permite inserir variaveis dentro de uma string
const nome = "Maria";
const idade = 22;
console.log(`Meu nome é ${nome} e eu tenho ${2 + 8 + 12} anos.`); // Permite, alem de variaveis, expreções numericas e textuais

// Destructuring => Desestruturação
// Objeto => Pode renomear uma variavel e selecionar propriedades específicas
const pessoa = { nome: "João", idade: 40, profissão: "Programador" };

const { nome2, idade2, profissão } = pessoa; // A converção automatica só ocorre quando o nome da chave é igual ao nome da variavel
console.log(nome2, idade2, profissão);

const { nome: nome3, idade: idade3 } = pessoa; // Convertendo o nome da chave para o nome da variavel => nomeDaVariavel: nomeDaChave
console.log(nome3, idade3);

// Array => Depende da ordem dos elementos
const numeros = [1, 2, 3, 4];
const [primeiro, segundo, terceiro] = numeros; // Funciona na ordem dos índices pelo fato do array não ser possivel chamar o seu nome assim como o objeto tem 
console.log(primeiro, segundo, terceiro);

// 3:34:40 - Tempo da aula
// ES6+ => ECMAScript 6 (ES2015)
// "let" e "const"
let n = 10;
n = 20;

const x = 15; // "const" => Não pode ser alterado, caso seja, computara um erro

const testeVar = () => {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x); // "var" => Independente do escopo, sempre usara a mesma variável e não da erro ao criar variável com o mesmo nome
  }
  console.log(x);
};

testeVar();

const testeLet = () => {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x); // "let" => Pertence apenas ao seu próprio escopo, não sendo visíveis em outros escopos
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

// Arrow function => Método convencional, usando chaves para criar um bloco
const cumprimento = (nome) => {
  const mensagem = `Olá, ${nome}!`; // Interpolação
  return mensagem; // Quando tem uma função de bloco em arrow function, tem que retornar
};

console.log(cumprimento("Matheus"));

// Template literals => Recurso que permite inserir variáveis dentro de uma string
const nome = "Maria";
const idade = 22;
console.log(`Meu nome é ${nome} e eu tenho ${2 + 8 + 12} anos.`); // Permite, além de variáveis, expressões numéricas e textuais

// Destructuring => Desestruturação
// Objeto => Pode renomear uma variável e selecionar propriedades específicas
const pessoa = { nome: "João", idade: 40, profissão: "Programador" };

const { nome2, idade2, profissão } = pessoa; // A conversão automática só ocorre quando o nome da chave é igual ao nome da variável
console.log(nome2, idade2, profissão);

const { nome: nome3, idade: idade3 } = pessoa; // Convertendo o nome da chave para o nome da variável => nomeDaVariável: nomeDaChave
console.log(nome3, idade3);

// Array => Depende da ordem dos elementos
const números = [1, 2, 3, 4];
const [primeiro, segundo, terceiro] = números; // Funciona na ordem dos índices pelo fato do array não ser possível chamar o seu nome assim como o objeto tem
console.log(primeiro, segundo, terceiro);

// spread operator => Espalhamento
const array1 = [1, 2, 3, 4];
const array2 = [...array1, 4, 5, 6]; // Insere todos os elementos do array1 dentro do array2
console.log(array2);

const soma2 = (...args) => args.reduce((total, numero) => total + numero, 0); // Uma variável que recebe um valor variável usando o operador "...args" e, em seguida, usa o método "reduce" para somar todos os valores
console.log(soma2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Default parameters
const saudação = (nome = "Visitante") => {
  console.log(`Olá, ${nome}!`);
};

saudação(); // Caso passe nenhum valor, nome sera igual a "Visitante"
saudação("Matheus"); // nome = "Matheus"

// Object literals enhancements
const nomeNovo = "Felipe";
const idadeNova = 24;
const pessoaNova1 = { nomeNovo, idadeNova }; // Fluxo inverso do "destructuring", porem, para criar objeto e não desestruturar
const pessoaNova2 = { nome: nomeNovo, idade: idadeNova }; // Renomeando a chaves
console.log(pessoaNova1);
console.log(pessoaNova2);

const saudaçãoObject = {
  dizerOi() {
    console.log("Oi!"); // Sem utilizar de orientação a objetos e sem nomear a função, executar uma função por meio de object literal
  },
};
saudaçãoObject.dizerOi();

// Classes e Heranças
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    console.log(`Olá pessoal, meu nome é ${this.nome}`);
  }
}

const João = new Pessoa("João", 34);
console.log(João);

João.falar();

// 3:42:51 - Tempo da aula

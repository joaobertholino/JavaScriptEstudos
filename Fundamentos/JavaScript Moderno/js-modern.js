// ES6+ => ECMAScript 6 (ES2015)
// "let" e "const"
let n = 10;
n = 20; // Exemplo de tipagem fraca

const x = 15; // "const" => Não pode ser alterado, caso seja, computara um erro

// "var" => Escopo de função => Visível em toda a função
const testeVar = () => {
  var x = 1;

  if (true) {
    var x = 2; // "var" => Não computa erro ao criar variável com o mesmo nome
    console.log(x);
  }
  console.log(x);
};

testeVar();

// "let" => Escopo de bloco => Visível apenas dentro do próprio bloco de código
const testeLet = () => {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x); // "let" => Não computa erro ao criar variável com o mesmo nome
  }
  console.log(x);
};

testeLet();

// Arrow function => Sem uso de chaves(oneLine)
const soma = (a, b) => a + b; // Declara os argumentos entre os parenteses(), após a arrow, declara-se oque será executado
console.log(soma(3, 5)); // Resume operações como "math", "reduce", "filter" e etc

const quadrado = (numero) => numero * numero; // Retorna o valor ao quadrado de um numero
console.log(quadrado(5));

// Arrow function => Método convencional, usando chaves para criar um bloco
const cumprimento = (nome) => {
  const mensagem = `Olá, ${nome}!`; // Interpolação
  return mensagem; // Quando tem uma função de bloco em arrow function, tem que declarar "return"
};
console.log(cumprimento("Matheus"));

// Template literals => Recurso que permite inserir variáveis dentro de uma string
const nome = "Maria";
const idade = 22;
console.log(`Meu nome é ${nome} e eu tenho ${idade} anos.`);
console.log(`Meu nome é ${nome} e eu tenho ${2 + 8 + 12} anos.`); // Permite, além de variáveis, expressões numéricas

// Destructuring => Desestruturação
// Objeto => Pode renomear uma variável e selecionar propriedades específicas
const pessoa = { nome: "João", idade: 40, profissão: "Programador" };

const { nome2, idade2, profissão } = pessoa; // A conversão automática só ocorre quando o nome da chave é igual ao nome da variável
console.log(nome2, idade2, profissão);

const { nome: nome3, idade: idade3 } = pessoa; // Convertendo o nome da chave para o nome da variável => nomeDaVariável: nomeDaChave
console.log(nome3, idade3);

// Array => Funciona na ordem dos índices
const números = [1, 2, 3, 4];
const [primeiro, segundo, terceiro] = números; // Usando o "Destructuring" para extrair os valores do array "números" e atribuí-los a três variáveis: "primeiro", "segundo" e "terceiro".
console.log(primeiro, segundo, terceiro);

// Spread operator => Espalhamento
const array1 = [1, 2, 3, 4];
const array2 = [...array1, 5, 6, 7]; // Insere todos os elementos do "array1" dentro do "array2"
console.log(array1);
console.log(array2);

const soma2 = (...args) => args.reduce((total, numero) => total + numero, 0); // Uma variável que recebe um valor variável usando o operador "...args" e, em seguida, usa o método "reduce" para somar todos os valores
console.log(soma2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Default parameters => Parâmetro padrão
const saudação = (nome = "Visitante") => {
  console.log(`Olá, ${nome}!`);
};

saudação(); // O "nome" será igual ao parâmetro padrão "Visitante"
saudação("Matheus"); // Alterando o parâmetro padrão de "Visitante" para "Matheus"

// Object literals enhancements
const nomeNovo = "Felipe";
const idadeNova = 24;

const pessoaNova1 = { nomeNovo, idadeNova }; // Fluxo inverso do "destructuring", porem, para criar um objeto e não desestruturar
console.log(pessoaNova1);

const pessoaNova2 = { nome: nomeNovo, idade: idadeNova }; // Convertendo o nome da chave para o nome da variável => nomeDaVariável: nomeDaChave
console.log(pessoaNova2);

const saudaçãoObject = {
  dizerOi() {
    console.log("Oi!"); // Forma concisa e moderna de definir métodos em objetos em JavaScript usando a sintaxe de método abreviado do ES6
  },
};
saudaçãoObject.dizerOi(); // Chamando o método "dizerOi" do objeto "saudaçãoObject", que executa o código dentro dele

// Classes e Heranças
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome; // "this" => Atribui o valor de "nome" enviado para a propriedade "nome" do objeto
    this.idade = idade; // "this" => Atribui o valor de "idade" enviado para a propriedade "idade" do objeto
  }

  falar() {
    console.log(`Olá pessoal, meu nome é ${this.nome}`); // Sempre ao se referir ao objeto, usa-se o "this"
  }
}

const dev = new Pessoa("João", 21); // "dev" agora é um objeto que recebeu as propriedades "nome" e "idade"
console.log(dev);
dev.falar();

const dev2 = new Pessoa("Ellen", 17); // "dev2" agora é um objeto que recebeu as propriedades "nome" e "idade"
console.log(dev2);
dev2.falar();

// https://youtu.be/OYPbr6ZG3pc?t=13398 - Tempo da aula
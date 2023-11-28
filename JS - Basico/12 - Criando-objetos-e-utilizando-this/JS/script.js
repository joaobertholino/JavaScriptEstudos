// Criando objetos
// "pessoa" => Nome do objeto
let pessoa = {
  nome: "João",
  idade: 21,
  falar: () => {
    console.log("Olá, tudo bem?");
  },
  soma: (a, b) => {
    return a + b;
  },
};
console.log(pessoa.nome); // Acessando propriedades do objeto
pessoa.falar(); // Executando um método no objeto

let somaPessoa = pessoa.soma(2, 2); // Armazenando o retorno do método "soma" do objeto "pessoa" em uma variável
console.log(somaPessoa);

// Utilizando o "this"
// Fora de escopos locais o "this" sempre se refere ao objeto global "Window"
// Em objetos, o "this" vai se referir a instancia e pode acessar suas propriedades
console.log(this); // Retorna tudo que esta atrelado ao objeto global "Window"

let pessoa2 = {
  nome: "Ellen",
  idade: 17,
  dizerNome: function () {
    console.log(`O meu nome é ${this.nome}`); // O método é uma função anônima que imprime uma mensagem usando o valor da propriedade "nome" do objeto usando "this"
  },
  aniversario: function () {
    this.idade += 1; // Função que incrementa a propriedade "idade" do objeto "pessoa2" em um "1"
  },
  saudação: function () {
    return `Sr. ${this.nome}`; // Método retorna uma saudação que inclui o valor da propriedade "nome" do objeto com o prefixo "Sr."
  },
};
pessoa2.dizerNome(); // Executando o método "dizerNome" do objeto "pessoa2", que imprimirá a mensagem "O meu nome é Ellen" no console

console.log(pessoa2.idade); // Imprime a propriedade "idade" do objeto "pessoa2"
pessoa2.aniversario(); // Executando o método "aniversario", que incrementa a "idade" em um "1"
console.log(pessoa2.idade); // Executando a propriedade "idade" novamente, porem, agora incrementada, retornando "18"

let minhaSaudação = pessoa2.saudação();
console.log(`Olá ${minhaSaudação}`);

// Curso JavaScript #34 - O que é DOM? (Document Object Model) - https://youtu.be/snaMsZuYoFo?list=PLnDvRpP8BneysKU8KivhnrVaKpILD3gZ6
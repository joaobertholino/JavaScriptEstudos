// Funções => Blocos de código reutilizáveis
// Forma antiga de declarar funções
function nomeDaFunção1(x, y) {
  console.log("Executando função da forma antiga");
  console.log(x * y);
}
nomeDaFunção1(5, 10); // Invocando a função

// Forma moderna de declarar funções => "Arrow function"
const nomeDaFunção2 = (a, b) => {
  console.log("Executando função da forma moderna");
  console.log(a + b);
};
nomeDaFunção2(5, 10);

// Arrow Function multiLine
const myArrowMultiLine = () => {
  return "Testando arrow function em sintaxe de varias linhas!";
};
console.log(myArrowMultiLine());

// Arrow Functions oneLine
const myArrowOneLine = () => "Testando arrow function em sintaxe de um linha!";
console.log(myArrowOneLine());

// Argumentos
const dizerNome = (nome, idade) => {
  console.log(`O nome é: ${nome} e a idade é: ${idade}`);
};
dizerNome("Ellen", 17);
dizerNome("João", 21);

const databaseName = "Pedro";
const ageOfDatabase = 13;
dizerNome(databaseName, ageOfDatabase); // Possível usar funções em conjunto com variáveis

// "Return"
const soma = (a, b) => {
  const letSoma = a + b; // Dentro da função, os parâmetros "a" e "b" são somados, e o resultado é armazenado em uma variável local chamada "letSoma"
  return letSoma; // A função retorna o valor contido na variável "letSoma". Isso significa que quando a função é chamada, o resultado da soma será retornado como resultado da função
};
const somaUm = soma(3, 3); // Fora da função, uma variável chamada "somaUm" é declarada. Ela chama a função "soma" com os argumentos "3" e "3". Isso significa que "a" recebe "3" e "b" recebe "3" quando a função é chamada
console.log(somaUm);

console.log(soma(12, 12)); // Executa a função "soma" e retorna o valor no console

// Atribuindo uma função anônima a uma variável
const myFunction = function () {
  return "Função atribuída a variável!";
};
console.log(myFunction()); // Executando a função por meio da variável e imprimindo no console

// "IIFE" => Immediately Invoked Function Expression
// Sintaxe de "Sel-Executing Anonymous Function" => Não compatível com arrow function
// Variáveis declaradas dentro do escopo de uma IIFE não poderão ser acessadas de fora do escopo da mesma, a não ser que essa IIFE seja atribuída a uma variável
(function selExecutingOne(x, y) {
  console.log("Sel-Executing Anonymous Function One");
  console.log(x * y);
})(2, 4); // Passando os valores dos parâmetros de "x" e "y"

// Atribuindo uma IIFE a uma variável chamada "iifeReturn"
const iifeReturn = (function selExecutingTwo(x, y) {
  console.log("Sel-Executing Anonymous Function Two");
  return x + y;
})(2, 2); // Passando os valores dos parâmetros "x" e "y"
console.log(iifeReturn);

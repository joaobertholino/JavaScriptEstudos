// Funções => Blocos de código reutilizáveis
// Forma antiga de declarar funções
function formaAntiga() {
  console.log("Executando função da forma antiga");
}
formaAntiga(); // Invocando a função

// Forma moderna de declarar funções => "Arrow function"
const formaModerna = () => {
  console.log("Executando função da forma moderna");
};
formaModerna();

// Argumentos
const dizerNome = (nome, idade) => {
  console.log(`O nome é: ${nome} e a idade é: ${idade}`);
}
dizerNome("Ellen", 17);
dizerNome("Nicolas", 19);
dizerNome("João", 21);

let nomeDoBancoDeDados = "Pedro";
let idadeDoBancoDeDados = 13;
dizerNome(nomeDoBancoDeDados, idadeDoBancoDeDados); // Possível usar funções em conjunto com variáveis

// "Return"
const soma = (a, b) => {
  let letSoma = a + b; // Dentro da função, os parâmetros "a" e "b" são somados, e o resultado é armazenado em uma variável local chamada "letSoma"
  return letSoma; // A função retorna o valor contido na variável "letSoma". Isso significa que quando a função é chamada, o resultado da soma será retornado como resultado da função
}
let somaUm = soma(3, 3); // Fora da função, uma variável chamada "somaUm" é declarada. Ela chama a função "soma" com os argumentos "3" e "3". Isso significa que "a" recebe "3" e "b" recebe "3" quando a função é chamada
console.log(somaUm);

let somaDois = soma(5, 5);
console.log(somaDois);

console.log(soma(12, 12)); // Executa a função "soma" e retorna o valor no console

// Aula 3 => Operadores de condição, comparação, logica e de atribuição
// Operadores condicionais => "if", "else if", "else"
if (true) {
  console.log("Testando o 'if'"); // "if" => Executa um bloco de código se a condição retornar "true"
}

if (false) {
  console.log("Testando o 'if'"); // Se a condição retornar "false", não será executado o bloco de código e continuara a execução do programa
}

let idade = 13;
if (idade >= 50) {
  console.log("Senior"); // Usando "if" para conferir se a idade é >=(maior ou igual) de 50
} else if (idade > 18 && idade < 50) {
  console.log("Adulto"); // "else if" => Usado para criar outro bloco de código a ser executado caso "if" dê "false", ignorando o "else"
} else if (idade < 18 && idade >= 14) {
  console.log("Adolescente"); // Pode-se adicionar quanto "else if" forem necessários
} else {
  console.log("Criança"); // "else" => Executado caso nenhuma da condições acima tenha retornado "true"
}

// Operadores de comparação
// "=="(Igualdade) => Verifica se dois valores são iguais, sem levar em consideração o seu tipo
// "==="(Igualdade estrita) => Compara se dois valores são estritamente iguais, levando em consideração o seu tipo
// "!="(Diferença) => Testa se dois valores não são iguais, sem levar em consideração o seu tipo
// "!=="(Diferença estrita) => Verifica se dois valores não são estritamente iguais, levando em consideração o seu tipo
// ">"(Maior que) => Compara se o valor à esquerda é maior que o valor à direita
// "<"(Menor que) => Testa se o valor à esquerda é menor que o valor à direita
// ">="(Maior ou igual a) => Verifica se o valor à esquerda é maior ou igual ao valor à direita
// "<="(Menor ou igual a) => Compara se o valor à esquerda é menor ou igual ao valor à direita
let idade2 = 13;
if (idade2 >= 50) {
  console.log("Senior");
} else if (idade2 > 18 && idade2 < 50) {
  console.log("Adulto");
} else if (idade2 < 18 && idade2 >= 14) {
  console.log("Adolescente");
} else {
  console.log("Criança");
}

let igualdadeNaoEstrita1 = "5"; // "=" => Operador de atribuição, altera ou atribui um valor a uma variável
let igualdadeNaoEstrita2 = 5;
console.log(igualdadeNaoEstrita1 == igualdadeNaoEstrita2); // "==" => Comparação sem levar em consideração o tipo do dado comparado

let igualdadeEstrita1 = "10";
let igualdadeEstrita2 = 10;
console.log(igualdadeEstrita1 === igualdadeEstrita2); // "===" => Comparação levando em conta o tipo do dado comparado => Garante mais confiabilidade ao código

// Operadores lógicos
// "&&"(AND) => Retorna "true" se ambas as operações retornarem "true"
let idade3 = 13;
if (idade3 >= 50) {
  console.log("Senior");
} else if (idade3 > 18 && idade3 < 50) {
  console.log("Adulto"); // "&&" => Comparando se "idade3" é maior que "18" e menor que "50"
} else if (idade3 < 18 && idade3 >= 14) {
  console.log("Adolescente"); // "&&" => Comparando se "idade3" é menor que "18" e maior ou igual a "14"
} else {
  console.log("Criança");
}

// "||"(OR) => Retorna "true" se pelo menos uma das operações retornarem "true"
let idade4 = 13;
if (idade4 >= 50) {
  console.log("Senior");
} else if (idade4 > 18 || idade4 < 50) {
  console.log("Adulto"); // "||" => Comparando qual operação retorna "true", se "idade4" é maior que "18" ou se "idade4" é menor que "50"
} else if (idade4 < 18 || idade4 >= 14) {
  console.log("Adolescente"); // "||" => Nesse exemplo esta comparando qual retorna "true", se "idade4" é menor que "18" ou se "idade4" é maior ou igual a "14"
} else {
  console.log("Criança");
}

if ((idade4 == 13 && 15 > 20) || 10 === "10") {
  console.log("Isolamento de operações feita com sucesso"); // Para isolar operações é usado "()"
} else {
  console.log("Isolamento de operações feita sem sucesso");
}

// "!"(NOT) => Inverte o valor lógico de um operando, ou seja, se for "true", torna-se "false", e vice-versa
if (!true) {
  console.log("Passou");
} else {
  console.log("Não passou");
}

if (!false) {
  console.log("Passou");
} else {
  console.log("Não passou");
}

let nome = "João"; // É necessário isolar a operação com (parenteses) para atribuir o operador "NOT"
if (!(nome === "João")) {
  console.log("Passou");
} else {
  console.log("Não passou");
}

// Operadores de atribuição
// "=" => Usado para atribuir um valor a uma variável
// "+=" => Adiciona o valor à direita ao valor da variável à esquerda e atribui o resultado à variável à esquerda
// "-=" => Subtrai o valor à direita do valor da variável à esquerda e atribui o resultado à variável à esquerda
// "*=" => Multiplica o valor à direita pelo valor da variável à esquerda e atribui o resultado à variável à esquerda
// "/=" => Divide o valor da variável à esquerda pelo valor à direita e atribui o resultado à variável à esquerda
// "%=" => Calcula o resto da divisão do valor da variável à esquerda pelo valor à direita e atribui o resultado à variável à esquerda
// "**=" => Eleva o valor da variável à esquerda à potência do valor à direita e atribui o resultado à variável à esquerda
let x = 1;
let y = 2;

// Adição
console.log((x = x + y));
console.log((x += y));

// Subtração
console.log((x -= y));

// Multiplicação
console.log((x *= y));

// Divisão
console.log((x /= y));

// Resto da divisão
console.log((x %= y));

// Expoente
console.log((x **= y));
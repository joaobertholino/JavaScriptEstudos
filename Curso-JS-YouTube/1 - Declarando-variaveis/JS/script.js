// Aula 1 => Declarando variáveis
var meuTeste = 1; // Declarando variável de tipo "number" usando a sintaxe de "camelCase"
console.log(meuTeste); // "console.log()" => Exibe um valor no console

meuTeste = "João"; // Mudando o valor e o tipo da mesma variável para "string" (Tipagem fraca)
console.log(meuTeste);

meuNome = "André"; // Forma não adequada de declarar variável, podendo sobrescrever uma variável com o mesmo nome preexistente
console.log(meuNome);

var meuPrimeiroNome = "Victor"; // "var" => Possui escopo de função, sendo visíveis em toda a função que foram declaradas
console.log(meuPrimeiroNome);

// Declarando variáveis de forma moderna "let", "const"
let testandoLet = "Declaração usando 'let'"; // "let" => Possui escopo de bloco, sendo visíveis apenas dentro do bloco que foram declaradas
console.log(testandoLet);

const testandoConst = "Declaração usando 'const'"; // "const" => Possui escopo de bloco, porém, não podendo ter ser valor alterado
console.log(testandoConst);

// Declarando variável sem valor => "undefined"
let umUndefined;
console.log(umUndefined);

umUndefined = "Valor novo"; // Atribuindo um valor a variável sem valor 
console.log(umUndefined);
var meuTeste = 1; // Declarando variável de tipo "number" usando a sintaxe de "camelCase"
console.log(meuTeste); // "console.log()" => Exibe um valor no console

meuTeste = "João"; // Mudando o valor e o tipo da mesma variável para "string" (Tipagem fraca)
console.log(meuTeste);

meuNome = "André"; // Forma não adequada de declarar variável, podendo sobrescrever uma variável com o mesmo nome preexistente
console.log(meuNome);

var meuPrimeiroNome = "Victor"; // "var" => Possui escopo de função, sendo visíveis em toda a função que foram declaradas
console.log(meuPrimeiroNome);

// Declarando variáveis de forma moderna "let", "const"
let testandoLet = "Declaração de variável usando 'let'"; // "let" => Possui escopo de bloco, sendo visíveis apenas dentro do bloco que foram declaradas
console.log(testandoLet);

const testandoConst = "Declaração de variável usando 'const'"; // "const" => Possui escopo de bloco, porém, não permite ter seu valor alterado
console.log(testandoConst);

// Declarando variável sem valor => "undefined"
let testandoUndefined;
console.log(testandoUndefined);

testandoUndefined = "Valor novo"; // Atribuindo um valor ao "undefined" 
console.log(testandoUndefined);
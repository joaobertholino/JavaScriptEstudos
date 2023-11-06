// "number" => Tipo numérico
let meuNumber = 10;
console.log(typeof meuNumber); // "typeof" => Retorna o tipo do dado declarado

let float = 5.32; // Em JavaScript não existe diferenciação de tipo entre números inteiros e quebrados
console.log(typeof float);

let stringNumber = "523"; // Ao colocar um "number" entre aspas, se torna uma "string"
console.log(typeof stringNumber);

console.log(typeof NaN); // Valores simbólicos também são considerados como "numbers"
console.log(typeof +Infinity);
console.log(typeof -Infinity);

// "string" => Tipo textual
let minhaString = "João"; // Pode ser escrita usando tanto 'aspas simples' quanto "aspas duplas"
console.log(typeof minhaString);

let primeiroNome = "João";
let sobrenome = " Victor";
let nomeCompleto = primeiroNome + sobrenome; // É possível concatenar(juntar) os valores de varias "strings"
console.log(`Meu nome é ${nomeCompleto}`); // "Interpolação" => Forma de concatenação mais moderna
console.log(typeof nomeCompleto);

let aspas = "Texto com 'aspas simples' interna"; // Para por algo entre aspas dentro da string, use as aspas de tipo diferente da ja usada
console.log(aspas);
console.log(typeof aspas);

let string2 = "Meu número: ";
let number2 = 432;
let stringAndNumber = `${string2}${number2}`; // É possível concatenar "string" com "number"
console.log(stringAndNumber);

// "boolean" => Pode retornar dois valores "true" ou "false"
let meuBoolean1 = true;
console.log(meuBoolean1);
console.log(typeof meuBoolean1);

let meuBoolean2 = false;
console.log(meuBoolean2);
console.log(typeof meuBoolean2);

let comparação = 10 < 5; // Comparações retornam um "boolean"
console.log(comparação);

// "null" => Inicialmente possui um valor nulo, podendo ser atribuído mais tarde
let meuNull = null;
console.log(meuNull);

let nome = null;
nome = "João"; // Atribuindo valores para "null"
console.log(nome);

// "undefined" => Tipo de dado de uma variável com valor não atribuído
let meuUndefined;
console.log(meuUndefined);

let sobrenome2;
sobrenome2 = "Victor"; // Atribuindo valores para a variável "undefined"
console.log(sobrenome2);

// "Hoisting" => Apenas inicializa a execução de uma variável antes da sua criação retornando "undefined" => Funciona apenas com "var"
console.log(exHoisting); 
var exHoisting = "Exemplo de Hoisting";

// "object" => Guarda um conjunto de valores que são chamados de "propriedades" organizado por "chave: valor" podendo ser utilizado posteriormente
let meuObjeto = {
  nome: "Pedro",
  idade: 21,
  profissão: "Programador",
};

console.log(meuObjeto);
console.log(typeof meuObjeto);

console.log(meuObjeto.nome); // Retorna uma propriedade especifica do objeto
console.log(`O meu nome é ${meuObjeto.nome}`); // Concatenando uma "string" com propriedades do objeto

meuObjeto.nome = "João"; // Alterando o valor de uma propriedade do objeto
console.log(meuObjeto.nome);

meuObjeto.graduação = "Analise e desenvolvimento de sistemas"; // Atribuindo outras propriedades ao mesmo objeto
meuObjeto.statusGraduação = "Concluída"
console.log(meuObjeto);

console.log(`Meu nome é ${meuObjeto.nome}, tenho ${meuObjeto.idade} anos e sou ${meuObjeto.profissão} com formação em ${meuObjeto.graduação} já ${meuObjeto.statusGraduação}`); // Concatenando as propriedades do objeto "meuObjeto" formando uma frase

// "array" => São considerados como objetos em JavaScript, porém servem como listas, ordenado por índice que se inicia em zero "0"
let meuArray = ["joão", 21, "Estudante"]; // "array" => Sintaxe de [colchetes] || "object" => Sintaxe de {chaves}
console.log(meuArray); // Um array aceita vários tipos de dados simultaneamente
console.log(typeof meuArray);

let meuArray2 = [1, 2, 3, 4, 5]; // O ideal é sempre usar apenas um tipo de dado dentro do mesmo array
console.log(meuArray2);
console.log(meuArray2[0]); // Retornando o primeiro elemento do array com índice zero "0"

meuArray2[5] = 6; // Atribuindo mais elementos ao array => "nomeDoArray[índiceDoNovoElemento] = elementoSendoAdicionado;"
console.log(meuArray2);

meuArray2[1] = 3; // Modificando um elemento já existente no array => "nomeDoArray[índiceDoElementoExistente] = novoElemento;"
console.log(meuArray2);

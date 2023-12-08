// Number => Tipo de números podem ser reais, inteiros etc
let typeNumberOne = 10;
console.log(typeof typeNumberOne); // typeof => Retorna o tipo do dado no console

let typeNumberTwo = 10.5;
console.log(typeof typeNumberTwo);

let typeNumberThree = -10.5;
console.log(typeof typeNumberThree);

// Operações aritméticas e operadores => O retorno de valores sempre será do tipo number
// A ordem de precedência dos operadores aritméticos em JavaScript é a seguinte:
// 1° => Unários(prefixados e pós-fixados)
// 2° => Módulos
// 3° => Multiplicação, divisão e divisão por inteiro
// 4° => Adição e subtração
// + => Adição
let addictionOne = 10;
let addictionTwo = 15;
let resultOne = addictionOne + addictionTwo; // Armazenando na variável "resultOne" a soma dos valores de "addictionOne" e "addictionTwo"
console.log(resultOne);

// - => Subtração
let subtractionOne = 15;
let subtractionTwo = 10;
let resultTwo = subtractionOne - subtractionTwo;
console.log(resultTwo);

// * => Multiplicação
let multiOne = 10;
let multiTwo = 5;
let resultThree = multiOne * multiTwo;
console.log(resultThree);

// / => Divisão
let divideOne = 30;
let divideTwo = 2;
let resultFour = divideOne / divideTwo;
console.log(resultFour);

// % => Resto da divisão(Módulo)
let restDivisionOne = 10;
let restDivisionTwo = 3;
let resultFive = restDivisionOne % restDivisionTwo;
console.log(resultFive);

// ** => Exponenciação
let exponentOne = 10;
let exponentTwo = 2;
let resultSix = exponentOne ** exponentTwo;
console.log(resultSix);

// Operadores incremental e decremental => Incrementam em +1 ou decrementam em -1 o valor da variável
// ++ => Incremento
let increment = 10;
let resultSeven = ++increment; // Incrementa o valor da variável antes de retornar o valor
console.log(resultSeven);

let resultEight = increment++; // Incrementa o valor da variável depois de retornar o valor
console.log(resultEight);

// -- => Decremento
let decrement = 10;
let resultNine = --decrement;
console.log(resultNine);

let resultTen = decrement--;
console.log(resultTen);

// Operadores aritméticos de atribuição => Executam a operação entre o valor da esquerda com o valor da direita e atribui esse resultado a variável da esquerda
// += => Adição atribuída
let assignedAdditionOne = 10;
let assignedAdditionTwo = 10;
assignedAdditionOne += assignedAdditionTwo;
console.log(assignedAdditionOne);

// -= => Subtração atribuída
let assignedSubtractionOne = 10;
let assignedSubtractionTwo = 6;
assignedSubtractionOne -= assignedSubtractionTwo;
console.log(assignedSubtractionOne);

// /= => Divisão atribuída
let assignedDivisionOne = 10;
let assignedDivisionTwo = 3;
assignedDivisionOne /= assignedDivisionTwo;
console.log(assignedDivisionOne);

// %= => Módulo atribuído
let assignedModuleOne = 10;
let assignedModuleTwo = 3;
assignedModuleOne %= assignedModuleTwo;
console.log(assignedModuleOne);

// Special Numbers => São valores que não se comportam como números normais, sendo úteis para lidar com casos extremos e situações em que as operações matemáticas não podem ser realizadas
// NaN => Not a Number => Representa um valor que não é um número válido
let notNumber = 0 / 0;
console.log(notNumber);
console.log(typeof notNumber);

// Infinity => Infinito positivo => Representa o valor positivo infinito
let infinity = 1 / 0;
console.log(infinity);
console.log(typeof infinity);

// -Infinity => Infinito negativo => Representa o valor negativo infinito
let infinityNegative = 10 - infinity;
console.log(infinityNegative);
console.log(typeof infinityNegative);

// String => Tipo de texto podem ser escrito entre aspas duplas, simples ou utilizando as templates literals, tudo que for colocado entre aspas se tornara uma string
let typeStringOne = `Victor`;
let typeStringTwo = `João ${typeStringOne} Bertholino`; // Interpolação => Maneira moderna de se concatenar valores de outras variáveis na string.
console.log(typeStringTwo);
console.log(typeof typeStringTwo);

// Detalhes técnicos sobre o tipo string:
// Escape sequences => As escape sequences são usadas para inserir caracteres especiais em uma string. Por exemplo, a sequência \n representa uma quebra de linha
let escapeSequencesOne = `Quebrando a linha \ncom Escape sequences`; // \n => Quebra de linha
console.log(escapeSequencesOne);

let escapeSequencesTwo = `Tabulação\tHorizontal`; // \t => Tabulação horizontal
console.log(escapeSequencesTwo);

let escapeSequencesThree = `Quebra de linha\r\ne retorno de carro`; // \r => Quebra de linha e retorno de carro
console.log(escapeSequencesThree);

let escapeSequencesFour = `Essa \'string\' possui aspas simples`; // \' => Aspas simples
console.log(escapeSequencesFour);

let escapeSequencesFive = `Essa \"string\" possui aspas duplas`; // " => Aspas duplas
console.log(escapeSequencesFive);

let escapeSequencesSix = `Essa é uma \\string\\ com barras invertidas`; // \\ => Barra invertida
console.log(escapeSequencesSix);

let escapeSequencesSeven = `Essa é uma\0string\0com caractere nulo`; // \0 => Caractere nulo
console.log(escapeSequencesSeven);

let escapeSequencesEight = `Essa é uma \x48 string \x48 com um caractere hexadecimal`; // \xNN => Caractere hexadecimal
console.log(escapeSequencesEight);

let escapeSequencesNine = `Essa é uma \u0048 string \u0048 com um caractere unicode`; // \uNNNN => Caractere Unicode
console.log(escapeSequencesNine);

// Para inserir algo entre aspas em uma string é necessário inserir aspas inversas ao tipo utilizado na declaração da string
let quotationMarks = "Como inserir 'aspas' em uma string!";
console.log(quotationMarks);

// Com template literals é possível realizar operações como:
let tlNumber = 2;
let tlOperation = `A soma de 2 + 2 é: ${tlNumber + tlNumber}`;
console.log(tlOperation);

// Concatenar é um processo de incorporar strings:
let concatOne = `Salada`;
let concatTwo = `frutas`;
let concatTrue = concatOne + " de " + concatTwo;
console.log(concatTrue);

// Boolean => Tipo que retorna um "True" ou "False"
// Empty Values => "null", "undefined"

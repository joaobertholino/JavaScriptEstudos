// Number => Tipo de números podem ser reais, inteiros etc
const typeNumberOne = 10;
console.log(typeof typeNumberOne); // typeof => Retorna o tipo de dado no console

const typeNumberTwo = 10.5;
console.log(typeof typeNumberTwo);

const typeNumberThree = -10.5;
console.log(typeof typeNumberThree);

// Operações aritméticas e operadores => O retorno de valores sempre será do tipo number
// A ordem de precedência dos operadores aritméticos em JavaScript é a seguinte:
// 1° => Unários(prefixados e pós-fixados)
// 2° => Módulos
// 3° => Multiplicação, divisão e divisão por inteiro
// 4° => Adição e subtração
// + => Adição
const addictionOne = 10;
const addictionTwo = 15;
const resultOne = addictionOne + addictionTwo; // Armazenando na variável "resultOne" a soma dos valores de "addictionOne" e "addictionTwo"
console.log(resultOne);

// - => Subtração
const subtractionOne = 15;
const subtractionTwo = 10;
const resultTwo = subtractionOne - subtractionTwo;
console.log(resultTwo);

// * => Multiplicação
const multiOne = 10;
const multiTwo = 5;
const resultThree = multiOne * multiTwo;
console.log(resultThree);

// / => Divisão
const divideOne = 30;
const divideTwo = 2;
const resultFour = divideOne / divideTwo;
console.log(resultFour);

// % => Resto da divisão(Módulo)
const restDivisionOne = 10;
const restDivisionTwo = 3;
const resultFive = restDivisionOne % restDivisionTwo;
console.log(resultFive);

// ** => Exponenciação
const exponentOne = 10;
const exponentTwo = 2;
const resultSix = exponentOne ** exponentTwo;
console.log(resultSix);

// Operadores incremental e decremental => Incrementam em +1 ou decrementam em -1 o valor da variável
// ++ => Incremento
let increment = 10;
let resultSeven = ++increment; // Incrementa o valor da variável antes de retornar o valor
console.log(resultSeven);

const resultEight = increment++; // Incrementa o valor da variável depois de retornar o valor
console.log(resultEight);

// -- => Decremento
let decrement = 10;
let resultNine = --decrement;
console.log(resultNine);

const resultTen = decrement--;
console.log(resultTen);

// Operadores aritméticos de atribuição => Executam a operação entre o valor da esquerda com o valor da direita e atribui esse resultado a variável da esquerda
// += => Adição atribuída
let assignedAdditionOne = 10;
const assignedAdditionTwo = 10;
assignedAdditionOne += assignedAdditionTwo;
console.log(assignedAdditionOne);

// -= => Subtração atribuída
let assignedSubtractionOne = 10;
const assignedSubtractionTwo = 6;
assignedSubtractionOne -= assignedSubtractionTwo;
console.log(assignedSubtractionOne);

// /= => Divisão atribuída
let assignedDivisionOne = 10;
const assignedDivisionTwo = 3;
assignedDivisionOne /= assignedDivisionTwo;
console.log(assignedDivisionOne);

// %= => Módulo atribuído
let assignedModuleOne = 10;
const assignedModuconstwo = 3;
assignedModuleOne %= assignedModuconstwo;
console.log(assignedModuleOne);

// Special Numbers => São valores que não se comportam como números normais, sendo úteis para lidar com casos extremos e situações em que as operações matemáticas não podem ser realizadas
// NaN => Not a Number => Representa um valor que não é um número válido
const notNumber = 0 / 0;
console.log(notNumber);
console.log(typeof notNumber);

// Infinity => Infinito positivo => Representa o valor positivo infinito
const infinity = 1 / 0;
console.log(infinity);
console.log(typeof infinity);

// -Infinity => Infinito negativo => Representa o valor negativo infinito
const infinityNegative = 10 - infinity;
console.log(infinityNegative);
console.log(typeof infinityNegative);

// String => Tipo de texto podem ser escrito entre aspas duplas, simples ou utilizando as templates literals, tudo que for colocado entre aspas se tornara uma string
const typeStringOne = `Victor`;
const typeStringTwo = `João ${typeStringOne} Bertholino`; // Interpolação => Maneira moderna de se concatenar valores de outras variáveis na string.
console.log(typeStringTwo);
console.log(typeof typeStringTwo);

// Detalhes técnicos sobre o tipo string:
// Escape sequences => As escape sequences são usadas para inserir caracteres especiais em uma string. Por exemplo, a sequência \n representa uma quebra de linha
const escapeSequencesOne = `Quebrando a linha \ncom Escape sequences`; // \n => Quebra de linha
console.log(escapeSequencesOne);

const escapeSequencesTwo = `Tabulação\tHorizontal`; // \t => Tabulação horizontal
console.log(escapeSequencesTwo);

const escapeSequencesThree = `Quebra de linha\r\ne retorno de carro`; // \r => Quebra de linha e retorno de carro
console.log(escapeSequencesThree);

const escapeSequencesFour = `Essa \'string\' possui aspas simples`; // \' => Aspas simples
console.log(escapeSequencesFour);

const escapeSequencesFive = `Essa \"string\" possui aspas duplas`; // " => Aspas duplas
console.log(escapeSequencesFive);

const escapeSequencesSix = `Essa é uma \\string\\ com barras invertidas`; // \\ => Barra invertida
console.log(escapeSequencesSix);

const escapeSequencesSeven = `Essa é uma\0string\0com caractere nulo`; // \0 => Caractere nulo
console.log(escapeSequencesSeven);

const escapeSequencesEight = `Essa é uma \x48 string \x48 com um caractere hexadecimal`; // \xNN => Caractere hexadecimal
console.log(escapeSequencesEight);

const escapeSequencesNine = `Essa é uma \u0048 string \u0048 com um caractere unicode`; // \uNNNN => Caractere Unicode
console.log(escapeSequencesNine);

// Para inserir algo entre aspas em uma string é necessário inserir aspas inversas ao tipo utilizado na declaração da string
const quotationMarks = "Como inserir 'aspas' em uma string!";
console.log(quotationMarks);

// Com template literals é possível realizar operações como:
const tlNumber = 2;
const tlOperation = `A soma de 2 + 2 é: ${tlNumber + tlNumber}`;
console.log(tlOperation);

// Concatenar é um processo de incorporar strings:
const concatOne = `Salada`;
const concatTwo = `frutas`;
const concatTrue = concatOne + " de " + concatTwo;
console.log(concatTrue);

// Boolean => Retorna um "True" ou "False", utilizando operadores de comparação e lógicos
// Operadores de comparação:
// == => (Igualdade) => Verifica se dois valores são iguais, convertendo os tipos se necessário
const equalityOne = 10;
const equalityTwo = "10";
const equalityVerified = equalityOne == equalityTwo; // Comparação sem levar em conta o tipo de dado comparado
console.log(equalityVerified);

// === => (Igualdade Estrita) => Verifica se dois valores são iguais, sem converter os tipos
const strictEqualityOne = 10;
const strictEqualityTwo = "10";
const strictEqualityVerified = strictEqualityOne === strictEqualityTwo; // Comparação levando em conta o tipo de dado comparado
console.log(strictEqualityVerified);

// != => (Desigualdade) => Verifica se dois valores são diferentes, convertendo os tipos se necessário
const inequalityOne = 10;
const inequalityTwo = "20";
const inequalityVerified = inequalityOne != inequalityTwo;
console.log(inequalityVerified);

// !== => (Desigualdade Estrita) => Verifica se dois valores são diferentes, sem converter os tipos
const inequalityStrictOne = 10;
const inequalityStrictTwo = 10;
const inequalityStrictVerified = inequalityStrictOne !== inequalityStrictTwo;
console.log(inequalityStrictVerified);

// > => (Maior que) => Verifica se o valor da esquerda é maior que o valor da direita
const biggerThenOne = 20;
const biggerThenTwo = 10;
const biggerThenVerified = biggerThenOne > biggerThenTwo;
console.log(biggerThenVerified);

// < => (Menor que) => Verifica se o valor da esquerda é menor que o valor da direita
const lessThenOne = 20;
const lessThenTwo = 10;
const lessThenVerified = lessThenOne < lessThenTwo;
console.log(lessThenVerified);

// >= => (Maior ou igual a) => Verifica se o valor da esquerda é maior ou igual ao valor da direita
const biggerEqualOne = 20;
const biggerEqualTwo = 10;
const biggerEqualVerified = biggerEqualOne >= biggerEqualTwo;
console.log(biggerEqualVerified);

// <= => (Menor ou igual a) => Verifica se o valor da esquerda é menor ou igual ao valor da direita
const smallerEqualOne = 20;
const smallerEqualTwo = 10;
const smallerEqualVerified = smallerEqualOne <= smallerEqualTwo;
console.log(smallerEqualVerified);

// Operadores Lógicos:
// && => (AND) => Retorna true se ambos os operandos forem true
const andOperatorOne = 10;
const andOperatorTwo = 20;
const andOperatorVerified = andOperatorOne < andOperatorTwo && andOperatorTwo > andOperatorOne;
console.log(andOperatorVerified);

// || => (OR) => Retorna true se pelo menos um dos operandos for true
const orOperatorOne = 10;
const orOperatorTwo = 20;
const orOperatorVerified = orOperatorOne > orOperatorTwo || orOperatorTwo < orOperatorOne;
console.log(orOperatorVerified);

// ! => (NOT) => Inverte o valor do operando, se for true retorna false e vice-versa
const notOperatorOne = !false;
console.log(notOperatorOne);

const notOperatorTwo = !true;
console.log(notOperatorTwo);

// Operador Ternário => Executa uma comparação, semelhante ao que o ifElse faz, em apenas um linha de código
// condição ? valorSeVerdadeiro : valorSeFalso
const ternaryOperator = 10;
const ternaryOperatorVerified = ternaryOperator % 2 === 0 ? true : false;
console.log(ternaryOperatorVerified);

// Empty Values
// null => Representa a ausência intencional de qualquer objeto ou valor
const emptyValueOne = null;
console.log(emptyValueOne);

// undefined => Representa uma variável que foi declarada, mas ainda não foi atribuída com um valor
let emptyValueTwo;
console.log(emptyValueTwo);

// NaN => Representa um valor que não é um número válido
const emptyValueThree = 0 / 0;
console.log(emptyValueThree);
console.log(typeof emptyValueThree);

// Conversão de tipo automática => JavaScript é uma linguagem fracamente tipada, isso significa que o tipo de dado de uma variável pode ser alterado a qualquer momento
// Conversão de string para number
const conversionOne = "10";
const conversionTwo = 10;
const conversionThree = conversionOne * conversionTwo;
console.log(conversionThree);

// Conversão de number para string
const conversionFour = 10;
const conversionFive = "10";
const conversionSix = conversionFour + conversionFive;
console.log(conversionSix);

// Conversão de boolean para number
const conversionSeven = true;
const conversionEight = 10;
const conversionNine = conversionSeven + conversionEight;
console.log(conversionNine);

// Conversão de number para boolean
const conversionTen = 10;
const conversionEleven = true;
const conversionTwelve = conversionTen + conversionEleven;
console.log(conversionTwelve);

// Conversão de string para boolean
const conversionThirteen = "10";
const conversionFourteen = true;
const conversionFifteen = conversionThirteen + conversionFourteen;
console.log(conversionFifteen);

// Conversão de boolean para string
const conversionSixteen = true;
const conversionSeventeen = "10";
const conversionEighteen = conversionSixteen + conversionSeventeen;
console.log(conversionEighteen);

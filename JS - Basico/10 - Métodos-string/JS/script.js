// Métodos de String
// "length" => Esta não é uma função, mas uma propriedade que retorna o número de caracteres em uma string.
const nome = " João ";
console.log(nome.length); // Incluí caracteres de espaço

// "indexOf(substring)" => Retorna o índice da primeira ocorrência da substring especificada na string. Se não encontrar, retorna -1.
const frase = "O rato roeu a roupa do rei de Roma";
console.log(frase[0]); // Sempre inicia-se o índice pelo zero "0"
console.log(frase.indexOf("roeu")); // Retorna o índice de inicio

// "lastIndexOf(substring)" => Retorna o índice da última ocorrência da substring especificada na string. Se não encontrar, retorna -1.
console.log(frase.lastIndexOf("r")); // Retorna o ultimo índice

// "slice(start, end)" => Extrai uma parte da string, especificando os índices de início e fim. O resultado é uma nova string.
const roeu = frase.slice(7, 11); // Extraiu a palavra "roeu" da frase
console.log(roeu);

// "replace(search, replace)" => Substitui a primeira ocorrência de uma substring pela outra na string.
const novaFrase = frase.replace("roeu", "não roeu");
console.log(novaFrase);

// "replaceAll(search, replace)" => Substitui todas as ocorrências de uma substring pela outra na string. Disponível a partir do ECMAScript 2021.
const novaFrase2 = frase.replaceAll("r", "g");
console.log(novaFrase2);

// "toUpperCase()" => Converte todos os caracteres em maiúsculas.
const caixaAlta = frase.toUpperCase();
console.log(caixaAlta);

// "toLowerCase()" => Converte todos os caracteres em minúsculas.
const caixaBaixa = frase.toLowerCase();
console.log(caixaBaixa);

// "trim()" => Remove espaços em branco do início e do final da string.
const noSpace = nome.trim();
console.log(noSpace);

// "split(separator)" => Divide a string em um array de substrings com base no separador especificado.
const mySplit1 = frase.split(""); // "split("")" => Separa por caractere
console.log(mySplit1);

const mySplit2 = frase.split(" "); // "split(" ")" => Separa por espaços
console.log(mySplit2);

// OUTROS MÉTODOS DE STRING
// "concat()" => Este método combina duas ou mais strings e retorna uma nova string.
// "charAt(index)" => Retorna o caractere na posição especificada pelo índice.
// "startsWith(searchString)" => Verifica se a string começa com a substring especificada e retorna true ou false.
// "endsWith(searchString)" => Verifica se a string termina com a substring especificada e retorna true ou false.
// "substring(start, end)" => Semelhante a slice, mas não aceita índices negativos. Extrai uma parte da string com base nos índices de início e fim.
// "substr(start, length)" => Extrai uma parte da string começando pelo índice especificado e com o comprimento especificado.
// "padStart(length, padString)" => Completa a string com o caractere de preenchimento (ou espaços) no início até atingir o comprimento especificado.
// "padEnd(length, padString)" => Completa a string com o caractere de preenchimento (ou espaços) no final até atingir o comprimento especificado.
// "match(regexp)" => Procura a string por uma expressão regular e retorna um array de correspondências.
// "search(regexp)" => Procura a string por uma expressão regular e retorna o índice da primeira correspondência encontrada.
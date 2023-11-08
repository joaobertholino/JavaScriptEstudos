// Metacharacters e Quantificadores:
// "."(ponto) => Corresponde a qualquer caractere, exceto quebras de linha
// "*" => Corresponde a zero ou mais ocorrências do caractere anterior
// "+" => Corresponde a uma ou mais ocorrências do caractere anterior
// "?" => Corresponde a zero ou uma ocorrência do caractere anterior
// "|"(pipe) => Funciona como um operador "OR"
// "()" => Agrupa expressões e captura grupos
// "[]" => Define um conjunto de caracteres. Por exemplo, "[aeiou]" corresponde a qualquer vogal
// "[^]" => Define um conjunto negado de caracteres. Por exemplo, "[^0-9]" corresponde a qualquer caractere que não seja um dígito
// "^" => No início de uma regex, indica o início da linha
// "$" => No final de uma regex, indica o final da linha

// Notação Literal => "const regexLiteralNotation = /pattern/;"
// Removendo caracteres
const minhaRegex = (string) => {
  return string.replace(/[^a-zA-Z0-9]/g, ""); // "replace" => Aceita substituir algo em uma string por meio da REGEX
};
console.log(minhaRegex("Olá mundo!"));
console.log(minhaRegex("J@#o$%a*&o"));

// Removendo caracteres específicos
const minhaRegex2 = (string) => {
  return string.replace(/[,!]/g, "");
};
console.log(minhaRegex2("Olá, mundo!"));

// "RegExp" => Cria uma REGEX utilizando um construtor "RegExp"
// Removendo caracteres com "RegExp"
const minhaRegex3 = (string) => {
  const pattern = new RegExp("[^a-zA-Z0-9]", "g"); // Criando a expressão regular usando o construtor RegExp
  return string.replace(pattern, ""); // Substituindo os caracteres correspondentes pela string vazia
};
console.log(minhaRegex3("Olá mundo!"));
console.log(minhaRegex3("J@#o$%a*&o"));

// Removendo caracteres específicos com "RegExp"
const minhaRegex4 = (string) => {
  const pattern = new RegExp("[,!]", "g");
  return string.replace(pattern, "");
};
console.log(minhaRegex4("Olá, mundo!"));
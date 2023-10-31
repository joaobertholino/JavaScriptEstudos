// Métodos Numéricos
// "parseFloat"(Ponto Flutuante) => Analisa a string até encontrar um caractere que não seja um dígito ou um ponto decimal e retorna o número encontrado até esse ponto
console.log(parseFloat("12.999")); // Transformou a string em number sem a presença do objeto
console.log(Number.parseFloat("12.999")); // Transformou a string em number com a presença do objeto "Number"

// "parseInt"(Inteiro) => Analisa a string até encontrar um caractere que não seja um dígito e retorna o número encontrado até esse ponto, ignorando quaisquer casas decimais
console.log(parseInt("20")); // Transformou a string em number
console.log(parseInt("10.50")); // Transformou a string float em inteiro

// "toFixed" => É um método que define quantas casas decimais um número terá. Por exemplo, "toFixed(2)" em "3.14159" resultaria em "3.14", com duas casas decimais
console.log(23.83092.toFixed(1)); // Definiu uma casa decimal
console.log(23.83092.toFixed(2)); // Definiu duas casas decimais

// "isNaN" =>  Verifica se um valor não é um número "NaN". Retorna "true" se o valor não for um número e "false" se for um número ou puder ser convertido em um número
console.log(isNaN("teste")); // Não é um número => "true"
console.log(isNaN(50)); // É um número => "false"
console.log(isNaN("30")); // Não leva em consideração se o tipo de dado é uma "string" ou "number" => "false"

// "MAX_VALUE" - "MIN_VALUE" => Representam os valores máximos positivos e positivos mais próximos de zero que podem ser representados com precisão na linguagem
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


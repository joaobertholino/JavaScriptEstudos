console.warn(`Modulo 4 - Arrays e Objetos`);

// Array => São listas de dados, que podem ser acessados por meio de um índice numérico (começando em 0)
// Devem ser declarados entre colchetes [] e os itens separados por vírgula
const stringArray = ["João", "Ellen", "Maria", "José", "Pedro", "Paulo", "Lucas"];
console.log(stringArray);

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numberArray);

const booleanArray = [true, false, true, false, false, true];
console.log(booleanArray);

const mixedArray = ["João", 1, true, "Maria", 2, false, "Pedro", 3, true]; // Não é uma boa prática
console.log(mixedArray);

// Acessando itens do array por meio do índice usando a sintaxe nomeDoArray[índice]
const arrayOne = ["João", "Ellen", "Maria", "José", "Pedro", "Paulo", "Lucas"];
console.log(arrayOne[0]); // Acessando o primeiro item do array
console.log(arrayOne[1]); // Acessando o segundo item do array
console.log(arrayOne[arrayOne.length - 1]); // Acessando o último item do array pelo método length - 1 (pois o índice começa em 0)

// Propriedades são informações que podem ser verificadas de um valor, quase todos os tipos de dados possuem propriedades com exceção de null e undefined, usam a sintaxe nomeDoArray.nomeDaPropriedade
const arrayTwo = ["João", "Ellen", "Maria", "José", "Pedro", "Paulo", "Lucas"];
console.log(arrayTwo.length); // length => Retorna o tamanho do array (quantidade de elementos)
console.log(arrayTwo["length"]); // Também é possível acessar a propriedade length usando a sintaxe de colchetes

// Métodos são ações que funcionam como funções, mas que são executadas por meio de um objeto, usam a sintaxe nomeDoArray.nomeDoMétodo()
// Métodos de array
const arrayMethods = ["JavaScript", "TypeScript", "NodeJs", "ReactJs", "Angular", "HTML", "CSS"];

// pop(); => Remove o ultimo elemento do array e retorna o elemento removido
const removedLastElement = arrayMethods.pop();
console.log(arrayMethods);

// push(); => Adiciona um ou mais novos elementos ao final do array
const addElement = arrayMethods.push(removedLastElement); // Adicionando o elemento do qual foi removido e armazenado em uma variável
console.log(arrayMethods);

// shift(); => Remove o primeiro elemento do array e retorna esse elemento
const removedFirstElement = arrayMethods.shift();
console.log(arrayMethods);

// unshift(); => Adiciona um ou mais elementos no inicio do array e retorna o novo comprimento do array
const newlength = arrayMethods.unshift(removedFirstElement);
console.log(`Novo comprimento(length) do array: ${newlength}`);
console.log(arrayMethods);

// indexOf(); => Encontra o índice de um determinado elemento, caso encontre, retorna o índice da primeira ocorrência, caso não encontre, retorna -1
const indiceElement = arrayMethods.indexOf("TypeScript");
console.log(indiceElement);

// lastIndexOf(); => Encontra o ultimo índice de um elemento, caso encontre, retorna o índice da ultima ocorrência, caso não encontre, retorna -1
const lastIndiceElement = arrayMethods.lastIndexOf("Angular");
console.log(lastIndiceElement);

// slice(); => Retorna um array a partir de outro array, o array retornado é determinado pelos parâmetros que são os índices de início e fim do novo array
const sliceMethodsOne = arrayMethods.slice(1, 5); // Retornando um novo array com os elementos do índice 1 ao 3, índice 4 é exclusivo
console.log(sliceMethodsOne);

const sliceMethodsTwo = arrayMethods.slice(-2); // Retornando um novo array com os 2 últimos elementos do array original
console.log(sliceMethodsTwo);

const sliceMethodsThree = arrayMethods.slice(1, -2); // Retornando um novo array com os elementos a partir do índice 1 com exceção dos dois últimos
console.log(sliceMethodsThree);

// forEach((params) => {}); => Itera por cada elemento do array executando uma função para cada um
arrayMethods.forEach((language) => {
  console.log(`Linguagem: ${language}`); // Cada elemento do array passa a ser argumento para o parâmetro passado
});

// includes(); => Verifica se um array tem um determinado elemento
const arrayIncludes = arrayMethods.includes("Java"); // Retorna um boolean
console.log(arrayIncludes);

// reverse(); => Retorna um novo array sendo ele em ordem invertida em relação ao original
const arrayReverse = arrayMethods.reverse();
console.log(arrayReverse);

// Métodos de String
// trim(); => Remove espaços em branco do inicio e do final de uma string
const trimMethodOne = `      João     `;
const methodTrim = trimMethodOne.trim();
console.log(methodTrim);

// padStart(); => Inserir caracteres antes da string
const valueMoney = "300";
const padStartMoney = valueMoney.padStart(5, "R$"); // padStart(comprimentoDesejado, valorAdicionado)
console.log(padStartMoney);

// split(""); => Divide uma string por um separador e retorna um novo array
const phrase = `Testando método split do JS`;

const splitPhraseLether = phrase.split(""); // Retorna cada caractere da string como um elemento do array
console.log(splitPhraseLether);

const splitPhaseWords = phrase.split(" "); // Retorna cada palavra separada por espaços da string
console.log(splitPhaseWords);

// join(""); => Insere um separado para transformar um array em uma string, sendo ao contrario do método split
const joinMethodOne = arrayMethods.join(" "); // Inserindo um espaço entre cada elemento do array para formar uma string
console.log(joinMethodOne);

const joinMethodTwo = arrayMethods.join("-"); // Inserindo um traço
console.log(joinMethodTwo);

// repeat(); => Repete uma string n vezes, sendo n o numero passado como parâmetro
const repeatMethod = `Testando método repeat.`;
const repeatMethodApply = repeatMethod.repeat(5); // Para separar cada uma das repetições a string precisar ter um espaço no final
console.log(repeatMethodApply);

// Rest operator => Forma de uma função receber indefinidos parâmetros
const restOperator = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const restOperatorApply = (...args) => {
  for (let i = 0; i < args.length; i++) {
    console.log(`Imprimindo elementos do array pelo método Rest: ${args[i]}`);
  }
};
restOperatorApply(restOperator);

// Objetos => São estruturas que permitem armazenar diversos valores em uma mesma variável, permitindo acessá-los por meio de um nome
// Devem ser declarados entre chaves {} e os itens separados por vírgula
const Dog = {
  color: "Silver",
  name: "Shark",

  // Criando métodos para o objeto
  bark: () => {
    return `Au Au`;
  },
};
// Acessando o objeto por completo
console.log(Dog);

// Acessando propriedades do objeto
console.log(Dog.name);

// Acessando métodos do objeto
console.log(Dog.bark());

// Deletando a adicionando propriedades ao objeto
const PersonOne = {
  name: `João`,
  age: `21`,
  profession: `Programador`,

  sayHi: () => {
    return `Olá, meu nome é ${PersonOne.name}, tenho ${PersonOne.age} anos`;
  },

  sayBye: () => {
    return `Tchau, tenha uma boa viajem!`;
  },
};
console.log(PersonOne);

// Deletando propriedades => Não muito usado tendo em vista que pode-se apenas ignorar uma propriedade
delete PersonOne.profession;
console.log(PersonOne);

// Adicionando propriedades
PersonOne.birthday = `03/07/2002`;
console.log(PersonOne);

// Herança de propriedades entre um objeto e outro
const Car = {
  doors: 4,
  color: "Red",
  brand: "Ford",
};

const Additional = {
  sunroof: true,
  airConditioning: true,
};
console.log(Car);

// Utilizando o objeto "Object" junto ao método "assign" onde o objeto "Car" herda as propriedades do objeto "Additional"
Object.assign(Car, Additional);
console.log(Car);

// Verificando quais chaves cada objeto possui utilizando a sintaxe => Object.keys(nomeDoObjeto)
console.log(Object.keys(Car)); // Retorna um array indexado com cada chave do objeto, inclusive as chaves herdadas de outro objeto

// Verificando quais valores atribuídos as propriedades cada objeto possuí => Object.values(nomeDoObjeto)
console.log(Object.values(Car)); // Retorna um array assim como o método keys

// Mutabilidade => Um objeto pode herdar todas as características do outro, virando uma referencia ao mesmo
const CatOne = {
  name: "Boris",
};

// Referencia a objetos
const CatTwo = CatOne;
console.log(CatOne === CatTwo); // Comparando para ver se o objeto CatOne é estritamente igual a CatTwo

CatTwo.name = `Romeo`;
console.log(CatOne.name); // Ao modificar um objeto, a modificação refletira em todos os objetos a qual ele se referencia

CatOne.name = "Sindy";
console.log(CatTwo.name); // Esse conceito se aplica a todos os objetos que possuem referentes

// Criando um objeto idêntico porem não referente
const CatThree = {
  name: "Boris",
};
console.log(CatOne === CatThree); // Mesmo o objeto CatThree sendo idêntico ao objeto CatOne, eles não se referenciam

// Utilizando loop para iterar sobre cada elemento do array
const namesLoop = ["João", "Ellen", "Nicolas", "Adriano", "Lucas", "Marcos"];

for (let i = 0; i < namesLoop.length; i++) {
  console.log(`Names of array with loop: ${namesLoop[i]}`); // Imprimindo cada elemento do array por meio do loop
}

const numbersLoop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i <= numbersLoop.length; i++) {
  if (i % 2 === 0 && i !== 0) {
    console.log(`Número par: ${i}`);
  } else if (i % 2 !== 0) {
    console.log(`Número ímpar: ${i}`);
  } else {
    console.log(`Igual a zero: ${i}`);
  }
}

// Destructuring em objetos => Definir variáveis com os valores das propriedades de um objeto com uma sintaxe oneLine
const PersonTwo = {
  name: `Ellen`,
  age: 17,
};

const { name: vName, age: vAge } = PersonTwo; // Atribuindo o valor das propriedades do objeto a variáveis
console.log(vName, vAge); // As variáveis são criadas como constantes, não podendo ser reatribuídas

// Destructuring em array => Mesmo conceito do destructuring em objetos porem em arrays
const destructuringArray = ["João", "Ellen", "Nicolas"];

const [nameOne, nameTwo, nameThree] = destructuringArray;
console.log(nameOne, nameTwo, nameThree);

// JSON => JavaScript Object Notation => Utilizado para comunicação entre back-end e front-end de uma aplicação sendo muito semelhante a um objeto JavaScript
// Aceita apenas aspas duplas e não permite comentário
const JsonObject = {
  name: "João",
  age: 21,
  position: "Developer student",
  languages: ["HTML", "CSS", "JavaScript"],
};
// Acessando uma propriedade do JSON
console.log(JsonObject.chaveOne);
console.log(JsonObject.chaveThree);

// Converter JSON <=> String
const convertOne = JSON.stringify(JsonObject); // JSON.stringify => Converte de JSON para string, não permitindo mais acessar propriedades por não ser mais um objeto
console.log(convertOne);
console.log(typeof convertOne);

const convertTwo = JSON.parse(convertOne); // JSON.parse => Convertendo de string para JSON, permitindo novamente o acesso de propriedades especificas
console.log(convertTwo);
console.log(typeof convertTwo);

console.warn(`Modulo 4 - Arrays e Objetos`);
console.warn(`Modulo 4 - Arrays e Objetos - Exercícios`);

// Exercício 1 => Crie um array com 5 itens e acesse os itens 1, 3, 4;
const ex1 = ["João", "Adriano", "Ellen", "Nicolas", "Lucas"];
console.log(ex1[0], ex1[2], ex1[3]);

// Exercício 2 => Crie um array com 2 elementos e outro array com 4 elementos e imprima a quantidade de elementos em cada array no console
const ex2ArrayOne = ["Ellen", "Sthefani"];
console.log(ex2ArrayOne["length"]);

const ex2ArrayTwo = ["João", "Victor", "Bertholino", "Cestari"];
console.log(ex2ArrayTwo.length);

// Exercício 3 => Crie um objeto ônibus com 8 rodas, limite de passageiros de 40 e 2 portas, e imprima todas as propriedades no console
const Ônibus = {
  rodas: 8,
  passageiros: 40,
  portas: 2,
};
console.log(`Valor da primeira propriedade: ${Ônibus.rodas}`);
console.log(`Valor da segunda propriedade: ${Ônibus.passageiros}`);
console.log(`Valor da terceira propriedade: ${Ônibus.portas}`);

// Exercício 4 => Adicione a propriedade janelas no ônibus, com o valor de 20 e imprima a propriedade janelas no console, após isso delete a propriedade rodas
Ônibus.janelas = 20;
console.log(Ônibus.janelas);

delete Ônibus.rodas;

// Exercício 5 => Crie um array com 5 nomes, incluindo o seu, verifique se o seu nome exite no array e se existir, imprima um mensagem no console
const ex5 = ["João", "Ellen", "Nicolas", "Adriano", "Lucas"];

ex5.forEach((names) => {
  if (names === "João") {
    console.log(`Este é meu nome: ${names}`);
  } else {
    console.log(`Este NÂO é meu nome: ${names}`);
  }
});

if (ex5.includes("João")) {
  console.log(`Meu nome foi encontrado`);
} else {
  console.log(`Meu nome não foi encontrado`);
}

// Exercício 6 => Crie dois arrays, um com mais de 5 elementos e outro com menos, faça uma função que verifica o número de elementos, se caso possuir menos que 5, imprima no console "Poucos elementos" e se possuir igual ou mais que 5 elementos, imprima "Muitos elementos" no console
const ex6ArrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ex6ArrayTwo = [1, 2, 3, 4];

const arrayLengthOne = (array) => {
  if (array.length >= 5) {
    console.log(`Muitos elementos: ${array.length}`);
  } else {
    console.log(`Poucos elementos: ${array.length}`);
  }
};
arrayLengthOne(ex6ArrayOne);
arrayLengthOne(ex6ArrayTwo);

// Exercício 7 => Crie um array com 5 elementos e faça uma iteração entre todos eles e imprima no console o valor
const ex7 = ["SENAI", "SESI", "SENAC", "CIESP", "FIESP"];

ex7.forEach((elements) => {
  console.log(`forEach: ${elements}`);
});

for (let i = 0; i <= ex7.length; i++) {
  console.log(`loop for: ${ex7[i]}`);
}

// Exercício 8 => Crie um JSON com 3 propriedades, atribua ele a uma variável e acesse as propriedades imprimindo no console
const ex8 = {
  name: "João",
  age: 21,
  position: "Developer student",
};
const jsonEx8 = ex8;

console.log(jsonEx8.name);
console.log(jsonEx8.age);
console.log(jsonEx8.position);

// Exercício 9 => Crie um array a partir de uma string e imprima cada palavra do array no console por meio de um loop for
const ex9 = `O rato roeu a roupa do Rei de Roma.`;
const stringToArray = ex9.split(" ");

for (let i = 0; i < stringToArray.length; i++) {
  console.log(stringToArray[i]);
}

stringToArray.forEach((elements) => {
  console.log(elements);
});

// Exercício 10 => Desafio calculadora => Crie um objeto calculadora que tem os seguintes métodos: somar, subtrair, multiplicar e dividir, onde cada método deve aceitar apenas dois parâmetros, utilize cada um dos métodos e imprima os valores no console
const calculate = {
  sum: (x, y) => {
    return x + y;
  },

  subtract: (x, y) => {
    return x - y;
  },

  multiplication: (x, y) => {
    return x * y;
  },

  divide: (x, y) => {
    return x / y;
  },
};
console.log(calculate.sum(2, 2));
console.log(calculate.subtract(4, 2));
console.log(calculate.multiplication(2, 2));
console.log(calculate.divide(2, 2));

console.warn(`Modulo 4 - Arrays e Objetos - Exercícios`);

//! Praticar mais sobre os métodos de array filter e indexOf para remover e adicionar elementos em um array

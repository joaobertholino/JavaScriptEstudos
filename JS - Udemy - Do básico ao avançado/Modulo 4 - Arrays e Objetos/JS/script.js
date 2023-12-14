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

// Acessando itens do array por meio do índice usando a sintaxe nomeDoArray[indice]
const arrayOne = ["João", "Ellen", "Maria", "José", "Pedro", "Paulo", "Lucas"];
console.log(arrayOne[0]); // Acessando o primeiro item do array
console.log(arrayOne[1]); // Acessando o segundo item do array
console.log(arrayOne[arrayOne.length - 1]); // Acessando o último item do array pelo método length - 1 (pois o índice começa em 0)

// Propriedades são informações que podem ser verificadas de um valor, quase todos os tipos de dados possuem propriedades com exceção de null e undefined, usam a sintaxe nomeDoArray.nomeDaPropriedade
const arrayTwo = ["João", "Ellen", "Maria", "José", "Pedro", "Paulo", "Lucas"];
console.log(arrayTwo.length); // length => Retorna o tamanho do array (quantidade de itens)
console.log(arrayTwo["length"]); // Também é possível acessar a propriedade length usando a sintaxe de colchetes

// Métodos são ações que funcionam como funções, mas que são executadas por meio de um objeto, usam a sintaxe nomeDoArray.nomeDoMétodo()
// Métodos de Modificação (Alteram o Array Original):
// push: Adiciona elementos ao final do array.
const arrayPush = [1, 2];
arrayPush.push(3);

// pop: Remove o último elemento do array.
const arrayPop = [1, 2, 3];
const removedElement = arrayPop.pop();

// shift: Remove o primeiro elemento do array.
const arrayShift = [1, 2, 3];
const shiftedElement = arrayShift.shift();

// unshift: Adiciona elementos ao início do array.
const arrayUnshift = [2, 3];
arrayUnshift.unshift(1);

// splice: Modifica o conteúdo do array removendo ou substituindo elementos.
const arraySplice = [1, 2, 3, 4, 5];
arraySplice.splice(2, 1);

// reverse: Inverte a ordem dos elementos no array.
const arrayReverse = [1, 2, 3];
arrayReverse.reverse();

// sort: Ordena os elementos do array.
const arraySort = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
arraySort.sort();

// Métodos de Acesso (Não Modificam o Array Original):
// concat: Combina dois ou mais arrays, criando um novo array.
const arrayConcat1 = [1, 2];
const arrayConcat2 = [3, 4];
const newArrayConcat = arrayConcat1.concat(arrayConcat2);
console.log(newArrayConcat);

// slice: Retorna uma parte do array.
const arraySlice = [1, 2, 3, 4, 5];
const slicedArray = arraySlice.slice(1, 4);
console.log(slicedArray);

// indexOf: Retorna o índice da primeira ocorrência de um elemento.
const arrayIndexOf = [1, 2, 3, 4, 5];
const index = arrayIndexOf.indexOf(3);
console.log(index);

// lastIndexOf: Retorna o índice da última ocorrência de um elemento.
const arrayLastIndexOf = [1, 2, 3, 4, 3, 5];
const lastIndex = arrayLastIndexOf.lastIndexOf(3);
console.log(lastIndex);

// Métodos de Iteração (Não Modificam o Array Original):
// forEach: Executa uma função para cada elemento do array.
const arrayForEach = [1, 2, 3];
arrayForEach.forEach((element) => console.log(element));
console.log(arrayForEach);

// map: Cria um novo array com os resultados de uma função aplicada a cada elemento.
const arrayMap = [1, 2, 3];
const newArrayMap = arrayMap.map((element) => element * 2);
console.log(newArrayMap);

// filter: Cria um novo array com os elementos que passam em um teste especificado.
const arrayFilter = [1, 2, 3, 4, 5];
const filteredArray = arrayFilter.filter((element) => element > 2);
console.log(filteredArray);

// every: Verifica se todos os elementos satisfazem uma condição.
const arrayEvery = [1, 2, 3, 4, 5];
const allGreaterThanZero = arrayEvery.every((element) => element > 0);
console.log(allGreaterThanZero);

// some: Verifica se pelo menos um elemento satisfaz uma condição.
const arraySome = [1, 2, 3, 4, 5];
const hasEvenNumber = arraySome.some((element) => element % 2 === 0);
console.log(hasEvenNumber);

// reduce: Aplica uma função acumuladora a cada elemento para reduzir o array a um único valor.
const arrayReduce = [1, 2, 3, 4, 5];
const sum = arrayReduce.reduce((accumulator, element) => accumulator + element, 0);
console.log(sum);

// reduceRight: Semelhante ao reduce, mas começa a partir do último elemento.
const arrayReduceRight = [1, 2, 3, 4, 5];
const reversedSum = arrayReduceRight.reduceRight((accumulator, element) => accumulator + element, 0);
console.log(reversedSum);

// Métodos de Busca (Não Modificam o Array Original):
// find: Retorna o primeiro elemento que satisfaz uma condição.
const arrayFind = [1, 2, 3, 4, 5];
const foundElement = arrayFind.find((element) => element > 2);
console.log(foundElement);

// findIndex: Retorna o índice do primeiro elemento que satisfaz uma condição.
const arrayFindIndex = [1, 2, 3, 4, 5];
const foundIndex = arrayFindIndex.findIndex((element) => element > 2);
console.log(foundIndex);

// Métodos de Manipulação (Modificam o Array Original):
// fill: Preenche todos os elementos do array com um valor específico.
const arrayFill = [1, 2, 3, 4, 5];
arrayFill.fill(0);
console.log(arrayFill);

// copyWithin: Copia uma sequência de elementos dentro do array.
const arrayCopyWithin = [1, 2, 3, 4, 5];
arrayCopyWithin.copyWithin(0, 3);
console.log(arrayCopyWithin);

// Objetos => São estruturas que permitem armazenar diversos valores em uma mesma variável, permitindo acessá-los por meio de um nome
// Devem ser declarados entre chaves {} e os itens separados por vírgula
const person = {
  name: "João",
  age: 20,
  isStudent: true,
  // Também é possível declarar funções dentro de objetos
  greeting: function () {
    return "Olá!";
  },
  // Também é possível declarar funções de forma resumida
  farewell() {
    return "Tchau!";
  },
};
console.log(person); // Acessando o objeto inteiro
console.log(person.name); // Acessando uma propriedade específica do objeto
console.log(person.greeting()); // Acessando um método específico do objeto
console.log(person["farewell"]()); // Também é possível acessar um método específico do objeto usando a sintaxe de colchetes

// Deletando e criando propriedades de um objeto apos a sua criação
const person2 = {
  name: "Ellen",
  age: 17,
  isStudent: true,
};

// Deletando uma propriedade
console.log(person2.age); // Acessando a propriedade age do objeto person2
delete person2.age; // Deletando a propriedade age do objeto person2 usando a palavra-chave delete
console.log(person2.age); // Após deletar a propriedade age do objeto person2, o valor dela passa a ser undefined

// Adicionando uma propriedade
person2.isWorking = true; // Adicionando a propriedade isWorking ao objeto person2
console.log(person2);

// Copiando propriedades de um objeto => Aula 137 Ûdemy

console.warn(`Modulo 4 - Arrays e Objetos`);

// "length" => Esta não é uma função, mas uma propriedade que retorna o número de elementos em um array.
let myArray1 = [1, 2, 3, 4, 5];
console.log(myArray1.length);

// "push(element1, element2, ...)" => Adiciona um ou mais elementos ao final do array e retorna o novo comprimento do array.
myArray1.push(6, 7, 8, 9);
console.log(myArray1);

myArray1.push("Texto adicionado ao fim");
console.log(myArray1);

// "pop()" => Remove o último elemento do array e o retorna.
myArray1.pop();
console.log(myArray1);

// "unshift(element1, element2, ...)" => Adiciona um ou mais elementos ao início do array e retorna o novo comprimento do array.
myArray1.unshift(0);
console.log(myArray1);

myArray1.unshift("Texto adicionado ao inicio");
console.log(myArray1);

// "shift()" => Remove o primeiro elemento do array e o retorna.
myArray1.shift();
console.log(myArray1);

// Acessar o ultimo elemento
let lastArray = myArray1[myArray1.length - 1];
console.log(lastArray);

// "Array.isArray(value)" => Este é um método que verifica se o valor passado como argumento é um array. Ele retorna true se o valor for um array e false se não for.
console.log(Array.isArray(myArray1));

// "splice(start, deleteCount, item1, item2, ...)" => Altera o conteúdo de um array, removendo, substituindo ou adicionando elementos.
myArray1.splice(2, 0, "Elemento adicionado entre outros elementos");
console.log(myArray1);

myArray1.splice(2, 1); // Removendo elemento
console.log(myArray1);

// "indexOf(element)" => Retorna o primeiro índice em que um elemento específico é encontrado no array. Se não for encontrado, retorna -1.
console.log(myArray1.indexOf(3));

// "lastIndexOf(element)" => Retorna o último índice em que um elemento específico é encontrado no array. Se não for encontrado, retorna -1.
console.log(myArray1.lastIndexOf(3));

// "join(separator)" => Converte os elementos de um array em uma string, separados pelo caractere especificado.
let myArray2 = ["O", "rato", "roeu", "a", "roupa", "do", "rei", "de", "Roma"];
console.log(myArray2.join(" "));

// "reverse()" => Inverte a ordem dos elementos no array.
myArray1.reverse();
console.log(myArray1);

// OUTROS MÉTODOS DE ARRAY
// "concat(array2, array3, ...)" => Combina dois ou mais arrays, criando um novo array que contém todos os elementos dos arrays de origem.
// "slice(start, end)" => Retorna uma cópia superficial de uma porção do array, definida pelos índices de início e fim.
// "find(callback)" => Retorna o primeiro elemento no array que satisfaça a função de callback.
// "filter(callback)" => Cria um novo array com todos os elementos que satisfaçam a função de callback.
// "map(callback)" => Cria um novo array com os resultados da aplicação da função de callback a cada elemento do array.
// "reduce(callback)" => Aplica uma função callback em um acumulador e cada elemento do array (da esquerda para a direita) para reduzir o array a um único valor.
// "sort(compareFunction)" => Classifica os elementos do array em ordem alfabética ou de acordo com a função de comparação especificada.
// "includes(element)" => Verifica se o array contém um elemento específico e retorna true ou false.
// "every(callback)" => Verifica se todos os elementos do array satisfazem a função de callback e retorna true ou false.
// "some(callback)" => Verifica se pelo menos um elemento do array satisfaz a função de callback e retorna true ou false.
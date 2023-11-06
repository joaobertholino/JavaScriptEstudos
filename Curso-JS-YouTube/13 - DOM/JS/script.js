// DOM => Document Object Model => Manipular elementos HTML por meio do JavaScript

// Forma antiga de selecionar elementos
// "getElementsByTagName" => Retorna uma "HTML Collection" de acordo com a "tag" definida
let tituloTag = document.getElementsByTagName("h1");
console.log(tituloTag[0]); // Imprimindo no console apenas o primeiro elemento HTML com índice zero "0"

// "getElementById" => Retorna apenas o primeiro elemento de acordo com o "id" definido
let tituloId = document.getElementById("tituloId1");
console.log(tituloId);

// "getElementsByClassName" => Retorna todos os elementos que possuem a mesma "classe"
let tituloClass = document.getElementsByClassName("tituloClass");
console.log(tituloClass[0]);

// Forma moderna de selecionar elementos
// "querySelector" => Retorna apenas o primeiro elemento com base em um seletor CSS, podendo ser por "tag", "id" ou "class"
let querySelectorTag = document.querySelector("h1");
console.log(querySelectorTag);

let querySelectorId = document.querySelector("#tituloId1");
console.log(querySelectorId);

let querySelectorClass = document.querySelector(".tituloClass");
console.log(querySelectorClass);

// "querySelectorAll" => Retorna todos os elementos que corresponderem ao seletor definido
let querySelectorTagAll = document.querySelectorAll("li");
console.log(querySelectorTagAll);

let querySelectorClassAll = document.querySelectorAll(".tituloClass");
console.log(querySelectorClassAll);

// Alterar conteúdo do elemento
let titleTextContent = document.querySelector("#tituloId2");
titleTextContent.textContent = "Alterando o conteúdo textual do titulo utilizando 'textContent'"; // "textContent" => Modifica o conteúdo textual do elemento sem retornar as tags do mesmos, sendo o método mais recomendado

let titleInner = document.querySelector("#tituloId1");
titleInner.innerHTML = "Alterando o conteúdo textual do titulo utilizando 'innerHTML'"; // "innerHTML" => Modifica o conteúdo HTML. Use com cuidado para evitar problemas de segurança "Cross-Site Scripting"(XSS)

// Criar elementos
let novoParagrafo = document.createElement("p"); // "createElement" => Cria uma instância do elemento para a tag especificada
console.log(novoParagrafo);

let textContent = document.createTextNode("Conteúdo textual criado utilizando 'createTextNode' e inserido no HTML utilizando 'appendChild'"); // "createTextNode" => Cria uma string de texto a partir do valor especificado
novoParagrafo.appendChild(textContent); // "appendChild" => Método JavaScript que adiciona um nó (como um elemento HTML) como filho de outro nó, especificando onde ele deve ser inserido no DOM

let meuBody = document.querySelector("body"); // Inserindo elemento no "body"
meuBody.appendChild(novoParagrafo);

let meuContainer = document.querySelector("#container"); // Criando elemento e inserindo em uma "div"
let novoElemento = document.createElement("span");

novoElemento.appendChild(document.createTextNode("Meu 'span' inserido na 'div'"));
meuContainer.appendChild(novoElemento);

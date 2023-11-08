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

// Removendo elementos
let removeTitle = document.querySelector("#tituloId4"); // Elemento a ser removido
removeTitle.remove(); // "remove" => Remove um elemento

let meuContainer2 = document.querySelector("#container"); // Elemento pai
let meuParagrafo = document.querySelector("#container p"); // Elemento filho
meuContainer2.removeChild(meuParagrafo); // "removeChild" => Remove o elemento filho

// Adicionando elementos
let meuElemento = document.createElement("div"); // "createElement" => Criando elemento
meuElemento.classList = "div-criada"; // "classList" => Atribui uma classe para o elemento

let meuElemento3 = document.querySelector("#container");
meuElemento3.appendChild(meuElemento); // "appendChild" => Adicionando elemento filho

let meuElemento4 = document.createElement("div");
meuElemento4.classList = "div-before";

let elementInsertBefore = document.querySelector("#container .div-criada");
meuContainer.insertBefore(meuElemento4, elementInsertBefore); // "insertBefore" => Insere um elemento antes de outro

// Trocando elementos
let elemento1 = document.createElement("h3");
elemento1.classList = "class-test"; // "classList" => Propriedade de objetos que fornece métodos para manipular as classes de um elemento HTML de maneira flexível e segura

let texto = document.createTextNode("Texto inserido via DOM JavaScript");
elemento1.appendChild(texto);
console.log(elemento1);

let title = document.querySelector("#tituloId1"); // Selecionando o elemento a ser trocado
console.log(title);

let father = title.parentNode; // "parentNode" => Selecionando o pai do elemento
father.replaceChild(elemento1, title); // "replaceChild(novoElemento, antigoElemento)" => Substituindo elemento

// Alterando atributos
let title2 = document.querySelector("#tituloId2");
title2.setAttribute("class", "classTest"); // "setAttribute" => Usado para definir o valor de um atributo de um elemento DOM. Se o atributo não existir, ele será criado
console.log(title2);

let btnTest = document.querySelector(".idTest");
btnTest.setAttribute("disabled", "disabled"); // Desabilitando a função de "click" no botão

let minhaLista = document.querySelector("#lista");
minhaLista.removeAttribute("id"); // "removeAttribute" => Usado para remover um atributo de um elemento DOM

// Alterando CSS com JavaScript
let title3 = document.querySelector(".class-test"); // Selecionando elemento
title3.style.color = "red"; // Atribuindo a cor "red" ao elemento, toda estilização feita via DOM será "inline", sendo priorizada na estilização
title3.style.backgroundColor = "yellow"; // "background-color: ;" => "backgroundColor =" => Em JavaScript sempre se utiliza a notação de "camelCase"

let title4 = document.querySelector("#tituloId3");
title4.style.cssText = "color: blue; background-color: pink;"; // "cssText" => Permite adicionar vários estilos diferentes ao mesmo elemento, sem a necessidade de utilizar a notação de "camelCase"

// Curso JavaScript #44 - Propriedades do document => https://youtu.be/peEiczr8LSI?list=PLnDvRpP8BneysKU8KivhnrVaKpILD3gZ6
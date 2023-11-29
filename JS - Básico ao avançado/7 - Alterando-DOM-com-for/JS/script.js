let lista = ["Laranja", "Maçã", "Pera", "Jaca", "Limão"]; // É criada uma variável chamada "lista" que armazena um array contendo cinco frutas

let listaUl = document.createElement("ul"); // É criada uma variável "listaUl" que contém um elemento HTML "ul"
let body = document.getElementsByTagName("body");

body[0].appendChild(listaUl); // Esta linha anexa a lista não ordenada "ul" criada anteriormente à primeira tag "body" no documento HTML
let listaNoBody = document.getElementsByTagName("ul"); // A variável "listaNoBody" armazena uma lista de elementos HTML com a tag "ul". Neste caso, deve haver apenas um elemento na lista, que é a lista que acabamos de adicionar ao corpo
console.log(listaNoBody[0]);

// Este trecho do código é um loop "for" que percorre o array "lista". Para cada item no array, ele cria um elemento de lista "li", adiciona o texto da fruta a esse elemento e, em seguida, anexa o elemento de lista à lista não ordenada no corpo da página. Isso resulta na exibição de cada fruta da lista como um item de lista na página
for (let i = 0; i < lista.length; i++) {
  let liFor = document.createElement("li");
  let textoLi = document.createTextNode(lista[i]);
  liFor.appendChild(textoLi);
  listaNoBody[0].appendChild(liFor);
}

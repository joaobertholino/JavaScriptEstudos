// fetch API
// Meio nativo de realizar requisições a APIs com JavaScript
// Se a requisição for "GET" é preciso passar apenas a URL do recurso que esta sendo resgatado da API
// Caso seja outro verbo, podemos configurar a requisição com: "method", "body", "headers"

// Declaração de uma constante chamada url que armazena a URL base para a API que será consumida.
const url = "https://jsonplaceholder.typicode.com/posts";

// Seleção de elementos HTML usando o método document.querySelector. Cada uma dessas constantes representa um elemento do DOM associado a um determinado ID.
const loadingElement = document.querySelector("#loading"); 
const postsContainer = document.querySelector("#posts-container");
const postPage = document.querySelector("#post");
const postContainer = document.querySelector("#post-container");
const commentsContainer = document.querySelector("#comments-container");
const commentForm = document.querySelector("#comment-form");
const emailInput = document.querySelector("#email");
const bodyInput = document.querySelector("#body");

// Utilização da API "URLSearchParams" para obter parâmetros da URL. O código procura por um parâmetro chamado "id" na URL atual e armazena seu valor em "postId".
const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get("id");

// Declaração de uma função assíncrona chamada "getAllPosts", que realiza uma requisição à URL definida em "url" para obter todos os posts. O resultado é processado, a classe "hide" é adicionada ao elemento de carregamento "loadingElement", e os posts são iterados e adicionados ao DOM.
const getAllPosts = async () => {
  const response = await fetch(url);
  const data = await response.json();
  loadingElement.classList.add("hide");

  data.map((post) => {
    const div = document.createElement("div");
    const title = document.createElement("h2");
    const body = document.createElement("p");
    const link = document.createElement("a");

    title.textContent = post.title;
    body.textContent = post.body;

    link.textContent = "Ler";
    link.setAttribute("href", `post.html?id=${post.id}`);

    div.appendChild(title);
    div.appendChild(body);
    div.appendChild(link);

    postsContainer.appendChild(div);
  });
};

// Declaração de uma função assíncrona chamada "getPost", que recebe um ID como parâmetro, realiza duas requisições assíncronas para obter os detalhes do post e os comentários associados. Os resultados são processados, a classe "hide" é adicionada ao elemento de carregamento "loadingElement", a classe "hide" é removida do elemento de página de post "postPage", e os detalhes do post e os comentários são adicionados ao DOM.
const getPost = async (id) => {
  const [responsePost, responseComments] = await Promise.all([
    fetch(`${url}/${id}`),
    fetch(`${url}/${id}/comments`),
  ]);

  const dataPost = await responsePost.json();
  const dataComments = await responseComments.json();

  loadingElement.classList.add("hide");
  postPage.classList.remove("hide");

  const title = document.createElement("h1");
  const body = document.createElement("p");

  title.textContent = dataPost.title;
  body.textContent = dataPost.body;

  postContainer.appendChild(title);
  postContainer.appendChild(body);

  dataComments.map((comment) => {
    createComment(comment);
  });
};

// Declaração de uma função chamada "createComment", que recebe um comentário como parâmetro e cria elementos HTML para exibi-lo no DOM.
const createComment = (comment) => {
  const div = document.createElement("div");
  const email = document.createElement("h3");
  const commentBody = document.createElement("p");

  email.textContent = comment.email;
  commentBody.textContent = comment.body;

  div.appendChild(email);
  div.appendChild(commentBody);
  commentsContainer.appendChild(div);
};

// Declaração de uma função assíncrona chamada "postComment", que realiza uma requisição "POST" para adicionar um novo comentário ao post atual.
const postComment = async (comment) => {
  const response = await fetch(`${url}/${postId}/comments`, {
    method: "POST",
    body: comment,
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();
  createComment(data);
};

// Estrutura condicional que verifica se há um ID de post na URL. Se não houver, a função "getAllPosts" é chamada para exibir todos os posts. Se houver um ID, a função "getPost" é chamada para exibir detalhes do post, e um ouvinte de evento é adicionado ao formulário de comentários para lidar com o envio de novos comentários.
if (!postId) {
  getAllPosts();
} else {
  getPost(postId);
  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let comment = {
      email: emailInput.value,
      body: bodyInput.value,
    };
    comment = JSON.stringify(comment);
    postComment(comment);
  });
}

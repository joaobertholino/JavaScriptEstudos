// fetch API
// Meio nativo de realizar requisições a APIs com JavaScript
// Se a requisição for "GET" é preciso passar apenas a URL do recurso que esta sendo resgatado da API
// Caso seja outro verbo, podemos configurar a requisição com: "method", "body", "headers"

const url = "https://jsonplaceholder.typicode.com/posts";
const loadingElement = document.querySelector("#loading");
const postsContainer = document.querySelector("#posts-container");

const postPage = document.querySelector("#post");
const postContainer = document.querySelector("#comments-container");
const commentsContainer = document.querySelector("#comments-container");

const commentForm = document.querySelector("#comment-form");
const emailInput = document.querySelector("#email");
const bodyInput = document.querySelector("#body");

const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get("id");

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

const postComment = async (comment) => {
  const response = await fetch(`${url}/${postId}/comments`, {
    method: "POST",
    body: comment,
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();
};

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

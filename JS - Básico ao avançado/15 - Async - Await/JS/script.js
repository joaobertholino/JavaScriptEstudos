// "async" => Uma palavra-chave usada para declarar uma função que retorna uma Promise, permitindo a execução de código assíncrono de forma síncrona.
// "await" => Uma palavra-chave usada dentro de funções assíncronas para pausar a execução até que uma Promise seja resolvida, simplificando a escrita de código assíncrono.

// Sintaxe
const primeiraFunção = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Esperou isso aqui!");
      resolve();
    }, 2000);
  });
};

const segundaFunção = async () => {
  console.log("Iniciou");
  await primeiraFunção();
  console.log("Terminou");
};
segundaFunção();

// Contexto real
const getUser = (id) => {
  return fetch(`https://reqres.in/api/users?id=${id}`) // Utilizando a função "fetch" para fazer uma solicitação HTTP à URL "https://reqres.in/api/users?id=" com o "id" especificado. O "fetch" retorna uma promessa que representa a resposta da solicitação
    .then((data) => data.json()) // Tratando a resposta da promessa anterior. Ele utiliza o método "then()" para processar os dados da resposta da solicitação. O "data" neste contexto é a resposta bruta da solicitação, e "data.json()" é chamado para analisar os dados JSON da resposta. Isso também retorna uma promessa
    .catch((error) => console.log(error)); // "catch()" => Utilizado para lidar com erros que podem ocorrer durante a solicitação ou análise da resposta. Se ocorrer um erro, ele é registrado no console
};

const showUserName = async (id) => {
  // Tratando erros com "tryCatch"
  try {
    // Função responsável por exibir o nome do usuário com base no "id" fornecido
    const user = await getUser(id); // "await" => Usado para aguardar a resolução da promessa retornada por "getUser". Isso permite que você obtenha os dados do usuário de forma assíncrona
    console.log(`O nome do usuário é: ${user.data.first_name}`); // Depois de obter os dados do usuário, você usa "console.log" para exibir o nome do usuário. Os dados do usuário estão aninhados dentro de "user.data", e você acessa a propriedade "first_name" para obter o primeiro nome
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
};
showUserName(3);

// "Funções assíncronas" funcionam como "Promises", porém com uma sintaxe mais simples
// "async" => Utilizado ao declarar a função
// "await" => Utilizado quando é necessário aguardar por algo
// Pode ser aplicado em funções anônimas e métodos de classe
// Ao utilizar o "await" sem o "async" gera um erro
// Exemplo de uso => Inserção de dados no banco

// JSON => JavaScript Object Notation
// Utiliza a seguinte notação => "chave": valor,

// Tipos de dados que o JSON aceita
// "strings" => "Olá Mundo!"
// "numbers" => 10
// "numbersFloat" => 13.59
// "arrays" => [1, 2, 3]
// "objects" => {"nome": "João"}
// "null" => null

const objectsJson = [
  {
    nome: "João",
    idade: 21,
    empregado: true,
    detalhes_profissão: {
      profissão: "Programador",
      empresa: "Empresa X",
    },
    hobbies: ["Estudar", "Programar"],
  },
  {
    nome: "Ellen",
    idade: 17,
    empregado: true,
    detalhes_profissão: {
      profissão: "Medica Socorrista",
      empresa: "Empresa X",
    },
    hobbies: ["Estudar", "Ouvir musica"],
  },
];

// Convertendo "object" para "JSON"
const jsonData = JSON.stringify(objectsJson); // "JSON.stringify()" => Converte um valor JavaScript em uma string JavaScript Object Notation "JSON"
console.log(jsonData);
console.log(typeof jsonData); // Mesmo sendo considerado uma "string" é um JSON valido

// Converter "JSON" para "object"
const jsonObject = JSON.parse(jsonData); // "JSON.parse()" => Converte uma string JavaScript Object Notation "JSON" em um objeto
console.log(jsonObject);
console.log(typeof jsonObject); // Retornou "object" novamente

// "map" => Método utilizado para percorrer arrays de objetos
jsonObject.map((pessoa) => {
  console.log(pessoa.nome);
});

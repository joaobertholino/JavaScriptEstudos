// "Callback" => É uma função que é passada como argumento para outra função e é executada após a conclusão da função principal
const exibir = (num) => {
  console.log(`A operação resultou em: ${num}`);
};

// "adição" => Função principal
const adição = (a, b, callback) => {
  let operação = a + b;
  callback(operação);
};
adição(2, 2, exibir);

const multiplicação = (a, b, cb) => {
  let operação = a * b;
  cb(operação); // "cb" => "callback"
};
multiplicação(2, 4, exibir);

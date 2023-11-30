const primaryFunction = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Simulando retorno de API!");
      resolve();
    }, 2000);
  });
};

const secondaryFunction = async () => {
  console.log("Iniciou a execução!");
  await primaryFunction();
  console.log("Terminou a execução ao receber os dados da API!");
};
secondaryFunction();

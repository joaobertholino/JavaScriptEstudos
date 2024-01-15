console.time('Tempo de execução');
function fib(n) {
  let x = 0, y = 1, temp;

  for (let i = 0; i < BigInt(n); i++) {
    temp = BigInt(x) + BigInt(y);
    [x, y] = [y, temp];
  }
  console.log(temp);
}
fib(10);
console.timeEnd('Tempo de execução');

// console.time('Tempo de execução');
// function fib(n) {
//   let x = 0;
//   let y = 1;
//   let temp;

//   for (let i = 0; i < n; i++) {
//     temp = x + y;
//     x = y;
//     y = temp;
//   }
//   console.log(temp);
// }
// fib(10000);
// console.timeEnd('Tempo de execução');

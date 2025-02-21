/*
 Implement a Fibonacci sequence generator using a generator function in JavaScript.
*/

function* fibonacciSeries() {
    let f1 = 0;
    let f2 = 1;
    while (true) {
      yield f1;
      const temp = f1 + f2;
      f1 = f2;
      f2 = temp;
    }
}

const fibo = fibonacciSeries();

console.log(fibo.next().value);
console.log(fibo.next().value);
console.log(fibo.next().value);
console.log(fibo.next().value);
console.log(fibo.next().value);
console.log(fibo.next().value);
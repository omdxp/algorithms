function addUpTo(n: number) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function addUpTo2(n: number) {
  return (n * (n + 1)) / 2;
}

console.time("addUpTo");
console.log(addUpTo(1000000));
console.timeEnd("addUpTo");
console.time("addUpTo2");
console.log(addUpTo2(1000000));
console.timeEnd("addUpTo2");

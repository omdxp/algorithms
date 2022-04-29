function fibonacci(n: number) {
  // T = 1 + 1 + 1 + 1 + n - 2 = n + 2 = n
  // O(n)
  let sequence: number[] = []; // 1
  sequence[0] = 1; // 1
  sequence[1] = 1; // 1
  for (let i = 2; i <= n; i++) {
    // 1
    sequence[i] = sequence[i - 1] + sequence[i - 2]; // n - 2
  }
  return sequence[n]; // 1
}

console.log(fibonacci(4));

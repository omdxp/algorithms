function factorial(n: number) {
  // T = 1 + 1 + n - 1 + 1 = n + 2 = n
  // T(n) = O(n)
  let result = 1; // 1
  for (let i = 2; i <= n; i++) {
    // 1
    result *= i; // n - 1
  }
  return result; // 1
}

console.log(factorial(5));

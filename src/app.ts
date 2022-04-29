function isPrime(n: number) {
  // T = 1 + n - 3 + 1 + 1 = n
  // T(n) = O(n)
  for (let i = 2; i < n; i++) {
    // 1
    if (n % i === 0) {
      // n - 3
      return false; // 1
    }
  }
  return true; // 1
}

console.log(isPrime(9));
console.log(isPrime(5));

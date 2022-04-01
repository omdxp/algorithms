function fib(n: number, memo: number[] = []): number {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}
// O(2^n) well to be more precise O(1.6^n) for normal fibonacci function
console.log(fib(100)); // O(n)

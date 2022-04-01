function fib(n: number, memo: number[] = []): number {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}
// O(2^n) well to be more precise O(1.6^n) for normal fibonacci function
console.time("memo");
console.log(fib(1000)); // O(n); possible of stackoverflow (space complexity is worse)
console.timeEnd("memo");

// tabulation version
function fibTab(n: number) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
console.time("table");
console.log(fibTab(1000)); // O(n) but better for space complexity
console.timeEnd("table");

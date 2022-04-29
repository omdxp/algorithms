function min(numbers: number[]) {
  // T = 1 + 1 + n + 1 = n + 3 = n
  // T(n) = O(n)
  let result = numbers[0]; // 1
  for (let i = 1; i < numbers.length; i++) {
    // 1
    if (numbers[i] <= result) {
      // n
      result = numbers[i];
    }
  }
  return result; // 1
}

function isEven(n: number) {
  // T = 1
  // T(n) = O(n)
  return n % 2 === 0; // 1
}

console.log(min([4, 3, 2, 7, 8]));
console.log(isEven(4));

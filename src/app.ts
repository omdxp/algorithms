function isPowerOfTwo(n: number) {
  if (n < 1) {
    return false;
  }
  let devidedNumber = n;
  while (devidedNumber !== 1) {
    if (devidedNumber % 2 !== 0) {
      return false;
    }
    devidedNumber /= 2;
  }
  return true;
}

// Best Case: O(1) (n = 13)
// Worst Case: O(log(n))

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(13));

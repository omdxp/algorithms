function isPowerOfTwo(n: number) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0; // O(1)
}

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(13));

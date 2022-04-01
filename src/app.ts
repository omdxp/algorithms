function radixSort(array: number[]) {
  if (array.length < 2) return array;
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  const iterationCount = max.toString().length;
  for (let digit = 0; digit < iterationCount; digit++) {
    const bucket: number[][] = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < array.length; i++) {
      const digitValue = Math.floor(array[i] / Math.pow(10, digit)) % 10;
      bucket[digitValue].push(array[i]);
    }
    array = [].concat(...bucket);
  }
  return array;
}

console.log(radixSort([745, 34, 24, 36, 98]));

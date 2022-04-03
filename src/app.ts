// O(n + k) where n is the array length, k is 10 (0 - 9)
function countSort(array: number[], pos: number) {
  let countArr = Array.from({ length: 10 }, () => 0);
  let result: number[] = Array.from({ length: array.length });
  for (let i = 0; i < array.length; i++) {
    const digit = Math.floor((array[i] / pos) % 10);
    countArr[digit]++;
  }
  for (let i = 1; i < countArr.length; i++) {
    countArr[i] = countArr[i - 1] + countArr[i];
  }
  for (let i = array.length - 1; i >= 0; i--) {
    const digit = Math.floor((array[i] / pos) % 10);
    result[--countArr[digit]] = array[i];
  }
  for (let i = 0; i < result.length; i++) {
    array[i] = result[i];
  }
}

// O(d * (n + k)) where d is the number of digits for the max value
function radixSort(array: number[]) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) if (array[i] > max) max = array[i];
  for (let pos = 1; Math.floor(max / pos) > 0; pos *= 10) {
    countSort(array, pos);
  }
}

const unsortedArray = [432, 8, 530, 90, 88, 231, 11, 45, 677, 199];
radixSort(unsortedArray);
console.log(unsortedArray);

function countingSort(array: number[]) {
  let min = array[0];
  if (array.some((value) => value < 0)) {
    for (let i = 1; i < array.length; i++) if (array[i] < min) min = array[i];
  }
  if (min < 0) {
    for (let i = 0; i < array.length; i++) array[i] += Math.abs(min);
  }
  let max = array[0];
  for (let i = 1; i < array.length; i++) if (array[i] > max) max = array[i];
  let countArray = Array.from({ length: max + 1 }, () => 0);
  for (let i = 0; i < array.length; i++) {
    countArray[array[i]]++;
  }
  for (let i = 1; i < countArray.length; i++) {
    countArray[i] = countArray[i - 1] + countArray[i];
  }
  let result: number[] = Array.from({ length: array.length });
  for (let i = array.length - 1; i >= 0; i--) {
    result[--countArray[array[i]]] = array[i];
  }
  if (min < 0) {
    for (let i = 0; i < result.length; i++) result[i] -= Math.abs(min);
  }
  return result;
}

const unsortedArray = [1, 5, 3, -9, 0, 11, 2, 2, 0, 4, 7, 3, 9, 0, 11, 2];
const sortedArray = countingSort(unsortedArray);
console.log(sortedArray);

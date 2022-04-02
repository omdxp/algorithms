function countingSort(array: number[]): number[] {
  let result: number[] = [];
  if (array.some((value) => value < 0)) return result;
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) max = array[i];
  }
  const countingArray = new Array(max + 1);
  for (let value of array) {
    if (!countingArray[value]) {
      countingArray[value] = 0;
    }
    countingArray[value]++;
  }
  for (let i = 0; i < countingArray.length; i++) {
    while (countingArray[i] > 0) {
      result.push(i);
      countingArray[i]--;
    }
  }
  return result;
}

const unsortedArray = [1, 0, 3, 1, 3, 1];
const sortedArray = countingSort(unsortedArray);
console.log(sortedArray);

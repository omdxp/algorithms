// Time complexity depends on the gap, at worst case O(n^2)
function shellSort(array: number[]) {
  for (
    let gap = Math.floor(array.length / 2);
    gap >= 1;
    gap = Math.floor(gap / 2)
  ) {
    for (let j = gap; j < array.length; j++) {
      for (let i = j - gap; i >= 0; i -= gap) {
        if (array[i + gap] > array[i]) break;
        else {
          const tmp = array[i + gap];
          array[i + gap] = array[i];
          array[i] = tmp;
        }
      }
    }
  }
}

const unsortedArray = [23, 29, 15, 19, 31, 7, 9, 5, 2];
shellSort(unsortedArray);

console.log(unsortedArray);

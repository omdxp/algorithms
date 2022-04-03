function merge(left: number[], right: number[]) {
  let arr: number[] = [];
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    if (left[0] < right[0]) {
      arr.push(left.shift()!);
    } else {
      arr.push(right.shift()!);
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right];
}

// O(n log(n))
function mergeSort(array: number[]): number[] {
  const half = array.length / 2;

  // Base case or terminating case
  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
}

const unsortedArray = [15, 5, 24, 8, 1, 3, 16, 10, 20];
const sortedArray = mergeSort(unsortedArray);

console.log(sortedArray);

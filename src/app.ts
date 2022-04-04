// T(n) = O(logn)
function binarySearch(arr: number[], target: number) {
  let lower = 0;
  let upper = arr.length - 1;

  while (lower <= upper) {
    const mid = lower + Math.floor((upper - lower) / 2);

    if (target === arr[mid]) return mid;

    if (target < arr[mid]) upper = mid - 1;
    else lower = mid + 1;
  }

  return -1;
}

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(values, 4));

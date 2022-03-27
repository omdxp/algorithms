function sum(arr: number[]) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

sum([1, 2, 3]); // O(1) space!

function double(arr: number[]) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

double([1, 2, 3]); // O(n) space!

// auxiliary space: only the space taken by the algorithm not including inputs

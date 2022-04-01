let rows = 5;
let count = 0;
let count1 = 0;
let k = 0;
let str = "";
for (let i = 1; i <= rows; ++i) {
  for (let space = 1; space <= rows - i; ++space) {
    str += "  ";
    ++count;
  }

  while (k !== 2 * i - 1) {
    if (count <= rows - 1) {
      str += `${i + k} `;
      ++count;
    } else {
      ++count1;
      str += `${i + k - 2 * count1} `;
    }
    ++k;
  }
  count1 = count = k = 0;
  str += "\n";
}

console.log(str);

function logAtLeast5(n: number) {
  for (let i = 1; i <= Math.max(n, 5); i++) {
    console.log(i);
  }
}

logAtLeast5(1); // O(n)

function logAtMost5(n: number) {
  for (let i = 1; i <= Math.min(n, 5); i++) {
    console.log(i);
  }
}

logAtMost5(30); // O(1)

function hash(key: string, arrLength: number) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrLength;
  }
  return total;
}

console.log(hash("pink", 13));
console.log(hash("blue", 13));
console.log(hash("red", 13));

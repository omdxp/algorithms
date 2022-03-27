let names = ["Omar", "Michael", "Melissa"];
let values = [true, {}, [], 2, "awesome"];

console.log(names[0]); // O(1) (access element)
console.log(names.find((value) => value === "Omar")); // O(n) (search element)
console.log(names.push("Raj")); // O(1) (add last element)
console.log(names.unshift("Yasser")); // O(n) replace all next indices (add first element)
console.log(names.pop()); // O(1) (remove last element)
console.log(names.shift()); // O(n) replace all next indices (remove first element)

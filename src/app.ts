let names = ["Omar", "Michael", "Melissa"];
let values = [true, {}, [], 2, "awesome"];

console.log(names[0]); // O(1) (access element)
console.log(names.find((value) => value === "Omar")); // O(n) (search element)
console.log(names.push("Raj")); // O(1) (add last element)
console.log(names.unshift("Yasser")); // O(n) replace all next indices (add first element)
console.log(names.pop()); // O(1) (remove last element)
console.log(names.shift()); // O(n) replace all next indices (remove first element)
console.log(names.concat(["Hi", "There"])); // O(n) (concat other elements)
console.log(names.slice(1, 3)); // O(n) (take a copy slice from array)
console.log(names.splice(0, 1)); // O(n) (removes element from start index to delete count and return the deleted elements)
console.log(names.sort((a, b) => a.localeCompare(b))); // O(n log(n)) (sort an array on a given condition)

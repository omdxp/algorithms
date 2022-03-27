let instructor = {
  firstName: "Omar",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

console.table(instructor);

console.log(Object.keys(instructor)); // O(n)
console.log(Object.values(instructor)); // O(n)
console.log(Object.entries(instructor)); // O(n)
console.log(instructor.hasOwnProperty("firstName")); // O(1)

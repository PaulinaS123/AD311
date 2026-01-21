// ===========================
// Task 1: Function Argument Expansion
// ===========================
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [5, 10, 15];
const result = sum(...numbers);

console.log("Task 1 result:", result);

// ===========================
// Task 2: Merging Arrays
// ===========================
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = [...array1, ...array2];

console.log("Task 2 mergedArray:", mergedArray);

// ===========================
// Task 3: Array Element Insertion
// ===========================
const colors = ["red", "green", "blue"];

const extendedColors = ["yellow", ...colors, "purple"];

console.log("Task 3 extendedColors:", extendedColors);

// ===========================
// Task 4: Cloning and Modifying an Object
// ===========================
const person = { name: "John", age: 30 };

// Clone person with spread
const newPerson = { ...person };

// Modify clone
newPerson.name = "Jane";
newPerson.gender = "female";

console.log("Task 4 person:", person);

console.log("Task 4 newPerson:", newPerson);

// ===========================
// Task 5: Combining Objects
// ===========================
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };

const combinedObject = { ...object1, ...object2 };

console.log("Task 5 combinedObject:", combinedObject);

// Assignment: const vs let
// Victoria Salomon

// 1. Variable reassignment example
// fullName changes its value → must use let
let fullName = "John Doe";
fullName = "Jane Doe";
console.log("fullName:", fullName);

// Keyword used: let

// Why this is correct: fullName changes value, and let allows reassignment.

// Why not const: Would throw TypeError: Assignment to constant variable

// 2. Conditional block scope example
// age never changes → const is appropriate
const age = 30;

if (age > 18) {
  // adult is only assigned once → const works
  const adult = true;
  console.log("adult:", adult);
}

// Keywords used: const

// Reasoning: Neither age nor adult are reassigned.

// Why not var: var ignores block scope and could leak outside the if.

// let could work, but const communicates immutability more clearly.

// 3. Loop + array mutation example
// loopArray is mutated (push) but not reassigned → const works
const loopArray = [];

for (let i = 0; i < 5; i++) {
  // i changes each iteration → must use let
  loopArray.push(i);
}

console.log("loopArray:", loopArray);

// loopArray uses const: valid because mutation (push) is allowed.

// i uses let: required because its value updates.

// Why not const for i: Would cause an error (i++ not allowed).

// Why not var: Avoid function/global scope leakage.

// 4. Constant value example
// MAXIMUM is conceptually a constant value → const
const MAXIMUM = 100;
// MAXIMUM = 200; //  would throw TypeError: Assignment to constant variable

// Keyword used: const

// Reasoning: Semantically a constant value.

// If let used: Would allow accidental reassignment.

// If var used: Allows reassignment + no block scope (undesirable).

// 5. Array reassignment example
// colors is reassigned to a new array → must use let
let colors = ["Red", "Green", "Blue"];
colors = ["Yellow", "Pink", "Purple"];
console.log("colors:", colors);

// Keyword used: let

// Reasoning: Reassignment occurs when new array is created.

// Why not const: Would throw TypeError when reassigning.

// Note: const would be OK only if modifying in place (push/splice/etc.).

// Use const by default.
// Use let when the value needs to change.
// Avoid var due to scope and hoisting issues.

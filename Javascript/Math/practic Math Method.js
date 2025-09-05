// Math() Object Methods

// 1. Common Math Methods Rounding Numbers

// a. Math.round() - Rounds to nearest integer
console.log(Math.round(4.7));  // 5
console.log(Math.round(4.4));  // 4

// b. Math.ceil() - Rounds up to next integer
console.log(Math.ceil(4.1));   // 5
console.log(Math.ceil(4.9));   // 5

// c. Math.floor() - Rounds down to previous integer
console.log(Math.floor(4.1));  // 4
console.log(Math.floor(4.9));  // 4


// 1. Common Math Methods
// Rounding Numbers
console.log(Math.round(4.7));  // 5 (round to nearest integer)
console.log(Math.floor(4.7));  // 4 (always round down)
console.log(Math.ceil(4.1));   // 5 (always round up)

// Power and Square Root
console.log(Math.pow(2, 3));   // 8  (2³)
console.log(Math.sqrt(16));    // 4  (square root)

// Absolute Value
console.log(Math.abs(-9));   // 9 (makes number positive)

// Min and Max
console.log(Math.min(1, 5, 10, -3));  // -3
console.log(Math.max(1, 5, 10, -3));  // 10

// Random Numbers
console.log(Math.random());       // random number between 0 and 1
console.log(Math.floor(Math.random() * 10)); // 0 to 9
console.log(Math.floor(Math.random() * 100) + 1); // 1 to 100

// Trigonometry
console.log(Math.sin(Math.PI / 2));  // 1
console.log(Math.cos(0));            // 1

// 2. Useful Math Properties
console.log(Math.PI);    // 3.141592653589793
console.log(Math.E);     // 2.718281828459045

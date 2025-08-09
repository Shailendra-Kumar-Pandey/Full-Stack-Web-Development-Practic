// Operators in JavaScript

// 1 - Arithmetic Operators
// +, -, *, /, %, **
console.log(5 + 10); // 15
console.log(10 - 5); // 5
console.log(5 * 10); // 50
console.log(10 / 5); // 2
console.log(5 % 2); // 1
console.log(2 ** 3); // 8

// 2 - Assignment Operators
// =, +=, -=, *=, /=, %=, <<=, >>=, &=, |=, ^=, **=

let a = 10;
let b = a; // Assignment

console.log(a); // 10
console.log(b); // 10

console.log(a += 5); // 15 (a = a + 5)
console.log(a -= 3); // 12 (a = a - 3)
console.log(a *= 2); // 24 (a = a * 2)
console.log(a /= 4); // 6 (a = a / 4)
console.log(a %= 5); // 1 (a = a % 5)
console.log(b **= 2); // 100 (b = b ** 2)
console.log(b != a); // true
// console.log(b &= a); // 0 (b = b & a)
// console.log(b |= a); // 1 (b = b | a)
// console.log(b <= a); // true (b = b <= a)



// 3 . Logical Operators
// &&, ||, !

console.log(true && false); // false
console.log(a && b); //
console.log(true || false); // true
console.log(a || b); // 1 (truthy value)
console.log(!true); // false
console.log(a, b); // 1, 100
console.log(b != a); // true

// 4. ternary operator
//  ? <condition> : <expression>


console.log(a > b ? "a is greater" : "b is greater"); // "b is greater"

console.log(a > b ? a : b); // 100 (returns the greater value)


// 5. Comparison Operators
// ==, ===, !=, !==, >, <, >=, <=

console.log(a == b); // false
console.log(a === b); // false
console.log(a != b); // true
console.log(a !== b); // true
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false
console.log(a <= b); // true
console.log(null == undefined); // true - loose equality
console.log(null === undefined); // false - strict equality

// 6. Bitwise Operators
// ~, &, |, ^, <<, >>

console.log(~a); // -2 (bitwise NOT)
console.log(a & b); // 0 (bitwise AND)
console.log(a | b); // 101 (bitwise OR)
console.log(a ^ b); // 101 (bitwise XOR)
console.log(a << 1); // 2 (left shift)
console.log(a >> 1); // 0 (right shift)
// data types in JavaScript

// 1 primitives datatypes

let age = 30; // number
console.log(typeof age + " : " + age); // number


let name = "John"; // string
console.log(typeof name +" : "+ name); // string

let isStudent = true; // boolean
console.log(typeof isStudent + " : " + isStudent); // boolean

let height = null; // null
console.log(typeof height + " : " + height); // object (null is a special case in JavaScript)

let weight; // undefined
console.log(typeof weight + " : " + weight); // undefined

let symbol = Symbol("121"); // symbol
console.log(typeof symbol ); // symbol

let bigIntValue = BigInt(123456789012345678901234567890); // bigint
console.log(typeof bigIntValue + " : " + bigIntValue); // bigint

/* Output -

number : 30
string : John
boolean : true
object : null
undefined : undefined
symbol
bigint : 123456789012345677877719597056890n  */


// 2 non-primitive datatypes

let students = ["shailendra", "sachin", "sanjay"]; // array

let data = students; // reference to the array

students.push("ramesh"); // modifying the array

students.push("Gayatri"); // modifying the array

console.log(students == data) // true, both refer to the same array
console.log(students === data) // true, both refer to the same array
console.log(students); // ["shailendra", "sachin", "sanjay", "ramesh", "Gayatri"]
console.log(data); // ["shailendra", "sachin", "sanjay", "ramesh", "Gayatri"]

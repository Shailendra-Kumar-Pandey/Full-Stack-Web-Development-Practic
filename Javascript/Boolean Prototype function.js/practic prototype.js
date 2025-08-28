/* Boolean Prototype function */

let data = new Boolean(true);

// 1. toString()

console.log(data.toString());  // "true"


// 2. valueOf()

console.log(data.valueOf());  // true

// 3. hasOwnProperty()

console.log(data.hasOwnProperty("valueOf"));  // false       // return boolean

data.name = 1234;

console.log(data.name);  // "John"

console.log(data.hasOwnProperty("name"));  // true       // return boolean
console.log(data.hasOwnProperty("toString"));  // false       // return boolean
console.log(data.hasOwnProperty("toFixed"));  // false       // return boolean
console.log(data.hasOwnProperty("valueOf"));  // true       // return boolean

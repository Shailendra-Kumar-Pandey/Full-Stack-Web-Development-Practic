/* Number Prototype function */

let data = new Number(42);

console.log(data);  // [Number: 42]
// 1. toString()

console.log(data.toString());  // "42"          // return string


// 2. valueOf()

console.log(data.valueOf());  // 42             // return number

// 3. toFixed()

console.log(data.toFixed(2));  // "42.00"           // return string
console.log(data.toFixed(0));  // "42"
console.log(data.toFixed(5));  // "42.00000"

// 4. toExponential()

console.log(data.toExponential(2));  // "4.20e+1"           // return string
console.log(data.toExponential(0));  // "4e+1"
console.log(data.toExponential(5));  // "4.20000e+1"

// 5. toPrecision()

console.log(data.toPrecision(5));  // "42.00000"


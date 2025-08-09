// Implisit type conversion

// string to number conversion
console.log("5" + 5); // "55" - string concatenation
console.log("5" - 5); // 0 - string to number conversion
console.log("5" * 5); // 25 - string to number conversion
console.log("5" / 5); // 1 - string to number conversion
console.log(5 + "5"); // "55" - number to string conversion
console.log(5 - "5"); // 0 - number to string conversion

// boolean type conversion
console.log(true + 1); // 2 - boolean to number conversion
console.log(false + 1); // 1 - boolean to number conversion
console.log(true + "1"); // "true1" - boolean to string conversion
console.log(true - 1); // 0 - boolean to number conversion
console.log(false - 1); // -1 - boolean to number conversion

// Null type conversion
console.log(null + 1); // 1 - null to number conversion
console.log(null - 1); // -1 - null to number conversion
console.log(null + "1"); // "null1" - null to string conversion
console.log(null - "1"); // -1 - null to number conversion


// undefined type conversion
console.log(undefined + 1); // NaN - undefined to number conversion
console.log(undefined - 1); // NaN - undefined to number conversion
console.log(undefined + "1"); // "undefined1" - undefined to string conversion
console.log(undefined - "1"); // NaN - undefined to number conversion


// explicit type conversion

// Number type conversion examples explicit
console.log(Number("5")); // 5 - string to number conversion
console.log(Number("21eg")); // NaN - invalid string to number conversion
console.log(Number("")); // 0 - empty string to number conversion
console.log(Number(" ")); // 0 - whitespace string to number conversion
console.log(Number(null)); // 0 - null to number conversion
console.log(Number(undefined)); // NaN - undefined to number conversion
console.log(Number([])); // 0 - empty array to number conversion
console.log(Number([1, 2, 3])); // NaN - non-empty array to number conversion


// String type conversion examples explicit
console.log(String(5)); // "5" - number to string conversion
console.log(String(50e1)); // "500" - scientific notation to string conversion
console.log(String(0)); // "0" - number to string conversion
console.log(String(null)); // "null" - null to string conversion
console.log(String(undefined)); // "undefined" - undefined to string conversion
console.log(String([])); // "" - empty array to string conversion
console.log(String([1, 2, 3])); // "1,2,3" - non-empty array to string conversion


// Boolean type conversion examples explicit
console.log(Boolean(20)); // true - number to boolean conversion
console.log(Boolean(1)); // true - number to boolean conversion
console.log(Boolean(0)); // false - number to boolean conversion
console.log(Boolean("")); // false - empty string to boolean conversion
console.log(Boolean(" ")); // true - non-empty string to boolean conversion
console.log(Boolean(null)); // false - null to boolean conversion
console.log(Boolean(undefined)); // false - undefined to boolean conversion
console.log(Boolean([])); // true - empty array to boolean conversion
console.log(Boolean([1, 2, 3])); // true - non-empty array to boolean conversion
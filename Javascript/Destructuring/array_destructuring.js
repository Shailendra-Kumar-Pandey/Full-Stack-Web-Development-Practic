// Array destructuring

const students = ["Shailendra", "Pandey", "Gayatri", "Sharma"]

console.log(students)   // print full array

//syntex:- array destructuring

let [name1, name2] = students;

// [index-number, index-number]


console.log(name1)      // "Shailendra"

console.log(name2)      // "Pandey"

// console.log(name3)   // error:- name3 is not defined


// what is destructuring
// destructuring is a way to unpack values from arrays or properties from objects into distinct variables

// Example of destructuring with default values
let [name3 = "Default Name", name4 = "Another Default"] = students;
console.log(name3)      // "Gayatri"
console.log(name4)      // "Sharma"
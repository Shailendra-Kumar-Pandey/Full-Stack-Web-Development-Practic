// Object

/*
let student ={
    key : value,            //  Default value for null
}
*/

/*

// Practicing Objects in JavaScript

let student = {
    firstName : "Shailendra",
    lastName : "Pandey",
    age : 30,
    city : "Satna"
}

//  console.log(student);   //   {firstName: 'Shailendra', lastName : 'Pandey', age : 30, city : 'Satna' }


// 1. Dot Notation 

// console.log(student.firstName);   //    Shailendra

// add and Update object Key and Value

student.contary = "India";      // add new element in Student Object [contary : "India"]
console.log(student);       // Print full Object

student.lastName = "Singh";  // update new value in student object element [lastName : "Singh"]
console.log(student);       // Print full Object


// Delete Key and Value

delete student.contary;         // Delete object  key(element)

console.log(student);           // Print Object

// 2. Array Notation 

console.log(student["city"]);   // Satna

// Add and Update Key and Value

student["age"] = 35;        // update new value
console.log(student);       // print object

student["mobile"] = 9806638963;  // add new key and value
console.log(student);       // print full object

// Delete 

delete student["mobile"];       // delete key and value also
console.log(student);       // print object

*/


/*
let student = {
    first Name : "Shailendra",          // not using this sentect out is not define name error
    lastName : "Pandey",
    age : 30,
    city : "Satna"
}
*/


let student = {
    "first Name" : "Shailendra",
    lastName : "Pandey",
    age : 30,
    city : "Satna"
}

console.log(student);       //  print full object

let property  = "first Name";       
let value = "Gayatri";

student[property] = value;      // update value in first name

console.log(student);           // print full object

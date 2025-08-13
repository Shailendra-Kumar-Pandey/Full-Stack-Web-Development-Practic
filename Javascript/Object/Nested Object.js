//  Nested Objects

const Student = {
    firstName : "Shailendra",
    lastName : "Pandey",
    age : 29,
    address : {
        pinCode : 485001,
        city : "Satna",
        state : "Madhya Pradesh"
    },
    mobile : 9806638963    
}

console.log(Student);       //  Print full Object 

console.log(Student.address);   // Print nested object

console.log(Student.address.pinCode);   // 485001

console.log(Student.firstName);     // Shailendra

console.log(Student.address.state);     // Madhya Pradesh

console.log(typeof Student.mobile);    // type of -  Number

console.log(typeof Student.address);    // type of - object

console.log(Student.mobile);    // 9806638963
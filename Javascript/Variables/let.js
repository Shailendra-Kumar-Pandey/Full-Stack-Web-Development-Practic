let a = 20;
let name = "shailendra kumar pandey";
let float = 10.5;

console.log("A -", a);
console.log("Name -", name);
console.log("Float -", float);
console.table([a, name, float]);

if (true) {
    let a = 30;
    console.log("A -", a);
}

console.log("A -", a);

if (true){
console.log(username);   // undefined
}
var username = "John Doe";
/*
if (true){
console.log(username1);   // Error: username1 is not defined
}
let username1 = "John Doe";
*/
var username2 = "John Doe";
if (true){
    console.log(username2);   // John Doe
    username2 = "John";
}
console.log(username2);   // John



// let abc =20;
if (true) {
    // console.log(abc);   // 20
    let abc = 30;  // Error: Identifier 'abc' has already been declared
    console.log(abc);   // 30
}


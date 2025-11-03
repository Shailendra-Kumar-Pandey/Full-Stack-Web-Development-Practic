const fs = require("fs")

//  file system module is a enbuild Javascript modules
// readFileSync function :- this function is a synchronus task, this function is a execute code line by line

console.log("1")

let result = fs.readFileSync("./hello.txt", {encoding : "utf-8"});

console.log("2", result)

console.log("3")

// output :-
// 1
// 2 (Print .txt file data)
// 3
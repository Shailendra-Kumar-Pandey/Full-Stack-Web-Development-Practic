//      There are many types of Write a Function 

// 1. Function Declaration 


function someThing() {
    // code
}

// Return: The return keyword sends back a value from the function


addFunction(5, 10); // Invoking the function        // output - 15      // using hosting
function addFunction(a, b){
    console.log(a + b);
}
addFunction(15, 20);        // 15

// 2. Function Expression


/*  using const
// someFunction();         // before call the function define // Invoking the function  // Error
//console.log(someFunction); // Logging the function itself return undefined    // error not initialized 
*/

const someFunction = function() {
    console.log("This is a function expression");
}

someFunction(); // Invoking the function
console.log(someFunction()); // Logging the function itself return undifine
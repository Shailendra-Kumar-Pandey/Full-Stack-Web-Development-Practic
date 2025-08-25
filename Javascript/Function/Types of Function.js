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


// 3. Arrow Function
 
const doSomething = () => {
    console.log("This is an Arrow Function");
}

doSomething();  // Invoking the function

console.log(doSomething()); // Logging the function itself return undifine

const add = (num1, num2) => {
    return num1 + num2;
}

console.log(add(5, 10)); // 15

const add1 = (num1, num2) => num1 + num2;  // Single line arrow function

console.log(add1(15, 10)); // 25

// 4. imidiately Invoked Function Expression (IIFE)

(function(){
    console.log("This is an IIFE Function");
})();


(()=>{
    console.log("This is an Arrow (IIFE Function) Function")
})();



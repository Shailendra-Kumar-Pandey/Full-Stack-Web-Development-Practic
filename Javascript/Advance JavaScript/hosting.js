// Hosting in JavaScript
// what is Hosting?
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase before the code is executed. This means that you can use variables and functions before they are declared in the code.
// Hoisting applies to both variable declarations (using var, let, and const) and function declarations. However, the behavior differs based on how the variables are declared.

// Example 1: Hoisting with var
console.log("Value of a before declaration:", a); // Output: undefined
var a = 10;
console.log("Value of a after declaration:", a); // Output: 10

// Explanation:
// In this example, the variable 'a' is declared using 'var'. Due to hoisting, the declaration of 'a' is moved to the top of its scope, but its initialization (assignment of value 10) remains in place. Therefore, when we log 'a' before its declaration, it outputs 'undefined'.    


// Example 2: Hoisting with let and const
// console.log("Value of b before declaration:", b); // Throws ReferenceError
let b = 20;
console.log("Value of b after declaration:", b); // Output: 20  

// Explanation:
// In this example, the variable 'b' is declared using 'let'. Unlike 'var', 'let' and 'const' do not allow access to the variable before its declaration, resulting in a ReferenceError. This is because 'let' and 'const' are not hoisted in the same way as 'var'.

// Example 3: Hoisting with Function Declarations
greet(); // Output: "Hello, World!"

function greet() {
    console.log("Hello, World!");
}
// Explanation:
// In this example, the function 'greet' is called before its declaration. Function declarations are hoisted entirely, meaning both the declaration and the definition are moved to the top of their scope. Therefore, calling 'greet' before its declaration works as expected.

// Example 4: Hoisting with Function Expressions
// sayHello(); // Throws TypeError: sayHello is not a function
var sayHello = function() {
    console.log("Hello!");
}
sayHello(); // Output: "Hello!"
// Explanation:
// In this example, 'sayHello' is defined as a function expression assigned to a variable declared with 'var'. While the variable declaration is hoisted, the assignment of the function expression is not. Therefore, calling 'sayHello' before its assignment results in a TypeError, as 'sayHello' is undefined at that point.
// Summary:
// Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during compilation.
// Variables declared with 'var' are hoisted and initialized with 'undefined', while 'let' and 'const' are hoisted but not initialized, leading to a temporal dead zone.
// Function declarations are fully hoisted, allowing them to be called before their declaration, while function expressions assigned to variables behave like variable hoisting.
// Understanding hoisting is crucial for writing predictable and bug-free JavaScript code.

// Note: Uncomment the lines that throw errors to see the hoisting behavior in action.
// Example of Closure with setTimeout

function delayedGreeting(name) {
    setTimeout(function() {
        console.log("Hello, " + name + "!");
    }, 2000);
}

delayedGreeting("Alice"); // After 2 seconds, outputs: Hello, Alice!
// Explanation:
// In this example, the function delayedGreeting takes a name as an argument and sets a timeout to log a greeting after 2 seconds. The inner function passed to setTimeout forms a closure over the name parameter, allowing it to access the name variable even after delayedGreeting has finished executing. After 2 seconds, it correctly logs "Hello, Alice!".
// Explanation:
// Closures are a fundamental concept in JavaScript that allow functions to retain access to their lexical scope, even when executed outside that scope. This is particularly useful in asynchronous programming, such as with setTimeout, where the inner function needs to access variables from its outer function's scope after a delay.
// Understanding closures is essential for effective JavaScript programming, especially when dealing with callbacks, event handlers, and asynchronous operations.   
// Closures enable data encapsulation and help create private variables, making them a powerful tool for developers.
// They are widely used in various programming patterns and are a key feature of JavaScript's functional programming capabilities.

// Note: You can run this code in a JavaScript environment to see the hoisting behavior and closure in action.


// Closure in JavaScript

        function outerFunction() {
            console.log("Outer function executed");
            let outerVariable = "Hello from outer function";
            return function innerFunction() {
                console.log("Inner function executed");
                console.log(outerVariable);
            }
            
        }
        const result = outerFunction();

        result(); // Calling the inner function

        //output:
        // Outer function executed
        // Inner function executed
        // Hello from outer function
        // Explanation:
        // In this example, outerFunction is called first, which logs "Outer function executed" and defines a variable outerVariable. It then returns the innerFunction.
        // When result() is called, it executes innerFunction, which logs "Inner function executed" and accesses the outerVariable from its parent scope, demonstrating closure.
        // This shows how innerFunction retains access to the variables of outerFunction even after outerFunction has finished executing.
        // Closures are useful for data encapsulation and creating private variables in JavaScript.
        // Another Example of Closure

        function makeCounter() {
            let count = 0;
            return {
                increment: function() {
                    count++;
                    console.log("Count:", count);
                },
                decrement: function() {
                    count--;
                    console.log("Count:", count);
                },
                getCount: function() {
                    return count;
                }
            };
        }

        const counter = makeCounter();
        counter.increment(); // Count: 1
        counter.increment(); // Count: 2
        counter.decrement(); // Count: 1
        console.log("Current Count:", counter.getCount()); // Current Count: 1
        // In this example, makeCounter creates a private variable count and returns an object with methods to manipulate and access that variable. The methods form closures over the count variable, allowing controlled access to it.
        // This pattern is often used to create modules and encapsulate state in JavaScript.
        // Closures are a powerful feature in JavaScript that enable functions to retain access to their lexical scope, even when executed outside that scope.
        // They are widely used in various programming patterns, including callbacks, event handlers, and functional programming techniques.
        // Understanding closures is essential for mastering JavaScript and writing efficient, maintainable code.
        // Example of Closure with setTimeout
        
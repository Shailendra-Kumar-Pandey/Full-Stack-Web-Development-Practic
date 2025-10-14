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

//      Function

/*
function <functionName>(){
    //  code
}
*/

/*      //Without return (void function) 
function print(){
    console.log("Hello Bro...");
}

print();            // calling function (execute function inside statement)     // hello bro....

console.log(print());       // print function inside with return *undefined // hello bro.... undefined

*/

/*      // return something function 
function sumPrint(){
    console.log(10 + 50);
    return "sum";
}

sumPrint();         // print - 60

console.log(sumPrint());        // print - 60   sum

*/



function sothing (num1, num2){          // num1 and num2 are parameters
    return num1 + num2;             // return the sum of num1 and num2
}

sothing(10, 20);       // calling function with (10, 20 are arguments) arguments           // print nothing

let result = sothing(10, 20);       // calling function with arguments and storing the result

console.log(result);       // print the result

console.log(sothing(10, 20));       // PRINT 30

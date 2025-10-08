/*  callBack:- this function using and  handle asynchronous task  */ 

// if understand for using this example

// write the function follow the step 1:- Addition, 2:- Subtraction; 3:- Multiplication; 4:- Divition

// function doSomething (){
//     console.log("Hello")
// }

// doSomething()

// //exmple callback and understand callback
// function server(name, callBack) {
//     console.log(name);
//     callBack(2, 5);
// }

// server("Shailendra",function(num1, num2){
//     console.log("Addition: ", num1 + num2)
// });


// 2nd type of callback function

function testing(information, callBackFunction){
    console.log(information);
    callBackFunction("shailendra")
    console.log(callBackFunction(5))
}

function data(num1){
    console.log( "This is a callBack....", num1)
    return num1 + " return";
}

testing("Gayatri", data)

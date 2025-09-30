/*  callBack:- this function using and  handle asynchronous task  */ 

// if understand for using this example

// write the function follow the step 1:- Addition, 2:- Subtraction; 3:- Multiplication; 4:- Divition

function doSomething (){
    console.log("Hello")
}

// doSomething(

//exmple callback and understand callback
function server(name, data) {
    console.log(name);
    data(2, 5);
}

server("Shailendra", function(num1, num2) {
    console.log(num1 + num2);
});
// What is a Module :- Collection of function is called module.
// What is Pakeage :- Collection of modues is called Pakeage Manager.

// Create a Calculater function

function addition(num1, num2){
    return num1 + num2;
}


function subtraction(num1, num2){
    return num1 - num2;
}


function multiplication(num1, num2){
    return num1 * num2;
}


function divition(num1, num2){
    return num1 / num2;
}



module.exports = {addition, subtraction, multiplication, divition} 
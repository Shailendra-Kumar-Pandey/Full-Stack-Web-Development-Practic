// Create a funtion to calculate factorial of a number

function factorial(num){
    if(num===0 || num ===1){
        return
    }
    let result = 1;

    function findResult(num){
        if(num === 2){
            return;
        }
        result = result * num;
        findResult(num - 1);
    }

    findResult(num);

    return result;
}

factorial(7);

console.log(factorial(7))
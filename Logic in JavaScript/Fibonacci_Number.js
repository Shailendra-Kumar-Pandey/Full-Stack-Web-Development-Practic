/*   Write a program create a function any number Enter Fibonacci Number serige
    for Example:- 

    input = 2    output = 1;
    input = 4    output = 2;
*/ 

function fibbonacciFind(numberOfValue){

    let a = 0, b = 1;

    if(numberOfValue === 1){
        return a
    }else if(numberOfValue === 2){
        return b
    }else{
        for(let i = 2; i < numberOfValue; i++){
            let c = a + b;
            a = b;
            b = c
            // console.log(c)
        }
    }

    return b;
}


console.log(fibbonacciFind(10))

//      Multiple statements

function multipleStatements(num){
    if(num % 2 === 0){
        console.log(1);
        return "Even Number";
    }
    console.log(2);
    if(num % 2 !== 0){
        console.log(3);
        return "Odd Number";
    }
}

multipleStatements(4);          // print 1

console.log(multipleStatements(4));          // print 1 and Even Number
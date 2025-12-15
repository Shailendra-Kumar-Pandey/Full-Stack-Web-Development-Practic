function isPrimeORnotPrime(num){
    if(num == 0 || num == 1){
        console.log(num," is not a Prime Number");
        return;
    }
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            console.log(num, " is Not a Prime Number...")
            return
        }
    }

    console.log(num, " is a Prime Number");
}

isPrimeORnotPrime(2)
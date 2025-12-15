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

let count = 0;
let num = 0
for(let i = 2; count < 10000; i++ ){
    let isPrime = true;
    for(let j=2; j < i; j++){
        if(i%j == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(i);
        count++
        console.log(num++)
    }
}
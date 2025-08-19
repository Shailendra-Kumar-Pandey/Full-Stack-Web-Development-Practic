/* Write a program to print the first 10 prime numbers  */

for (let i = 0; i < 100; i++) {
    for (let j = 0; j < i; j++) {
            if(j % i == 0)
                break;        
    }
    if(i==j){
        console.log(i);
    }
}
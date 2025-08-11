/* Write a program to find the biggest of 3 numbers  */

const a = 40;
const b = 20;
const c = 30;

let big;

if(a>b){
    big = a;
}else{
    big = b;
}

if(c>big){
    big = c;
}

console.log("The biggest number is: ",  big);
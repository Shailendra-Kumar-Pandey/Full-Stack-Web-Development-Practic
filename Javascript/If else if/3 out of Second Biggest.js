/* Write a program to find the second largest number among three numbers using if-else statements */

const a = 50;
const b = 45;
const c = 40;

let secondBiggest;

if ((a>b && a<c) || (a<b && a>c)){
    secondBiggest = a;
    console.log("Second  Biggest number is A : ",secondBiggest);
}else if ((b>a && b<c) || (b<a && b>c)){
    secondBiggest = b;
    console.log("Second  Biggest number is B : ",secondBiggest);
}else{
    secondBiggest = c;
    console.log("Second  Biggest number is C : ",secondBiggest);
}

console.log ("Second Biggest Number is :- ",secondBiggest);
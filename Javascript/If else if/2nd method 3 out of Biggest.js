/* Write a program to find of 3 number out of Largest (Biggest) Number */

const a = 30;
const b = 70;
const c = 50;
let big = a;

if(a < b){
    big = b;
}
if (big < c) {
    big = c;
}

console.log("Biggest Number is :- ",big);
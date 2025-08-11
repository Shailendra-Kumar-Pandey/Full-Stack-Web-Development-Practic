/* Write a Program to find of 3 Number out of Biggest  */

const a = 40;
const b = 20;
const c = 30;

let big;

big = (a>b) ? a : b;
big = (big>c) ? big : c;

console.log("The biggest number is: ",  big);
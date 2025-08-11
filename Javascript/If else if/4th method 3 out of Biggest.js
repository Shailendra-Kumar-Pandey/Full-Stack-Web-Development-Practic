/* Write a Program to find of 3 Number out of Biggest  */

const a = 30;
const b = 70;
const c = 50;
let big;

big = (a>b) ? (a>c ? a : c) : (b>c ? b : c);

console.log("Biggeat Number is :- ",big);
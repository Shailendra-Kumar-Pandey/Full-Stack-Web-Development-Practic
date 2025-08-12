/* Write a program to print and find 7 number out of find Biggest Number */

const num1 = 33;
const num2 = 44;
const num3 = 11;
const num4 = 77;
const num5 = 99;
const num6 = 88;
const num7 = 14;

let i = 1;
let biggest = num1;

console.log("Numbers:");
do {
    let currentNum;
    switch(i) {
        case 1: currentNum = num1; break;
        case 2: currentNum = num2; break;
        case 3: currentNum = num3; break;
        case 4: currentNum = num4; break;
        case 5: currentNum = num5; break;
        case 6: currentNum = num6; break;
        case 7: currentNum = num7; break;
    }
    console.log(currentNum);
    if (currentNum > biggest) {
        biggest = currentNum;
    }
    i++;
} while (i <= 7);

console.log("Biggest Number is:", biggest);

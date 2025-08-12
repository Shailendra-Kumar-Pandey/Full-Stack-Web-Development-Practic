/* Write a Program to calculate and print the volume of 5 boxes */

const box1 = { length: 2, width: 3, height: 4 };
const box2 = { length: 5, width: 6, height: 7 };
const box3 = { length: 8, width: 9, height: 10 };
const box4 = { length: 11, width: 12, height: 13 };
const box5 = { length: 14, width: 15, height: 16 };

let i = 1;

do {
    let currentBox;
    switch(i) {
        case 1: currentBox = box1; break;
        case 2: currentBox = box2; break;
        case 3: currentBox = box3; break;
        case 4: currentBox = box4; break;
        case 5: currentBox = box5; break;
    }

    const volume = currentBox.length * currentBox.width * currentBox.height;
    console.log(`Volume of Box ${i} is: ${volume}`);

    i++;
} while (i <= 5);
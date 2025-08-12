/* Write a Program to generate and print the first 15 odd numbers */

// let i = -1;

// while (i< 15)
// { 
//     i += 2
//     console.log(i);
// }

let count = 0;
let i = 0;
while (count < 15) {
    i++;
    if(i%2 === 1)
    {
        console.log(i);
        count++;
    }
}
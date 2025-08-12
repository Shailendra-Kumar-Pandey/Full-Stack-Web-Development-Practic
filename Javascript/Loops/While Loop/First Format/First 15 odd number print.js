/* Write a program to generate and print the first 15 odd numbers */

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
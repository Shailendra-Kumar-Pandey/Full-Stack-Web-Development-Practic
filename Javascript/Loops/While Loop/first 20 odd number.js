/* Write a program to genrate and print the first 20 odd numbers */

let i = 1;
let count = 0;

while (count < 20) {
    if(i%2 != 0){
        console.log(i);
        count++;
    }
    i++;
}

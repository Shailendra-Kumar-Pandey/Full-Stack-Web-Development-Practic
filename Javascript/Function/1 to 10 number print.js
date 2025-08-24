/* Write a program to print numbers from 1 to 10 print  */

let num = 0;

function printSomething(){
    if(num<10){
        num++;
        console.log(num);
        printSomething();
    }
}

printSomething();
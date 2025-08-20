/* Write a program to check the Student Marks whether-
0 - 34 : Fail
35 - 60 : Grade C
61 - 80 : Grade B
Above 80 : Grade A
*/

let marks = 99;

if(marks >= 0 && marks <=34){
    console.log("Bro..You are Fail...");
}else if(marks >= 35 && marks <= 60){
    console.log("Grade - C")
}else if(marks >= 61 && marks <= 80){
    console.log("Grade - B")
}else{
    console.log("Grade - A")
}
/*
✅ 10 Basic JavaScript Coding Questions (No Answers)

1️⃣ Print numbers from 1 to 100 using a loop.

2️⃣ Check if a number is even or odd.

3️⃣ Find the largest of two numbers.

4️⃣ Print the multiplication table of any number.

5️⃣ Find the sum of all numbers in an array.

6️⃣ Find how many vowels are in a string.

7️⃣ Reverse a string without using built-in functions.

8️⃣ Check if a string is a palindrome.

9️⃣ Find maximum and minimum number in an array.

🔟 Count how many times a value appears in an array.
*/


// 1️⃣ Print numbers from 1 to 100 using a loop.

for(let i = 1; i <= 100; i++){
    console.log(i);
}

//2️⃣ Check if a number is even or odd.

function evenORodd(num){
    if(num%2 === 0){
        console.log(num ," is a Even Number")
    }else{
        console.log(num ," is a Odd Number")
    }
}

evenORodd(576)
evenORodd(55)

//3️⃣ Find the largest of two numbers.

function bigNumber(num1, num2){
    if(num1 > num2){
        console.log(num1 , ' is Largest Number')
    }else{
        console.log(num2 , ' is Largest Number')
    }
}

bigNumber(12, 19)

//4️⃣ Print the multiplication table of any number.

function table(num){
    let count = 0
    for(let i = 1; count < 10; i ++ ){
        console.log(num * i)
        count++
    }
}

table(10)


// 5️⃣ Find the sum of all numbers in an array.

let arr = [1, 2, 3, 4, 5, 6, 10]

let sum = 0;

for(let i = 0; i < arr.length; i ++){
    sum += arr[i];
}

console.log(sum)

// 6️⃣ Find how many vowels are in a string.

let fullname = "SHAILENDRA KUMAR PANDEY";

let vowel = 'AEIOU'

let count = 0

for(let i = 0; i < fullname.length; i ++){
    for(j=0; j < vowel.length; j++){
        if(fullname[i] === vowel[j]){
            count++
        }
    }
}
console.log("This String Total Vowels are ",count)


// 7️⃣ Reverse a string without using built-in functions.

let reversFullName = "";

for(let i = fullname.length-1; i >=0; i--){
    reversFullName += fullname[i]
}

console.log(reversFullName)

// 8️⃣ Check if a string is a palindrome.

// MADAM, LEVEL, 


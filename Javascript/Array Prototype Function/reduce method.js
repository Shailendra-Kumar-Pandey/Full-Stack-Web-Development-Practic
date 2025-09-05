// reduce(callback(accumulator, currentValue, currentIndex, array), initialValue) in array
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// reduce()        // Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

/*
Syntex:-
    array.reduce(function(accumulator, currentValue) {
   // logic
}, initialValue);

accumulator → पिछला result (संग्रह)

currentValue → अभी का element

initialValue → शुरू में accumulator की value

*/

let numbers = [10, 20, 30, 40];

let sum = numbers.reduce(function(total, num) {
  return total + num;
}, 0);

console.log("Sum = " + sum);    //  100



let number = [2, 3, 4];

let product = numbers.reduce((total, num) => total * num, 1);

console.log("Product = " + product);    // 240000



let number2 = [5, 17, 9, 21, 11];

let max = number2.reduce((a, b) => (a > b ? a : b));

console.log("Max = " + max);


let cart = [
  { item: "Book", price: 200 },
  { item: "Pen", price: 50 },
  { item: "Bag", price: 500 }
];

let totalPrice = cart.reduce((total, product) => total + product.price, 0);     // Total Price = 750  // 0 is initial value of total  

console.log("Total Price = " + totalPrice);         // Total Price = 750


let number1 = [1, 2, 3, 4, 5];
let sum1 = number1.reduce((a, b) => a + b, 0);
console.log(sum1); // 15


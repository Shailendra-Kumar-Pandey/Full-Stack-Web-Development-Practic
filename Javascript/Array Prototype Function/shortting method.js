// sort() method is used to sort the elements of an array in place and returns the sorted array.

let fruits = ["Banana", "Apple", "Mango", "Orange"];

fruits.sort();   // Ascending (A → Z)
console.log(fruits);

fruits.reverse(); // Descending (Z → A)
console.log(fruits);



let numbers = [40, 100, 1, 5, 25, 10];

// Ascending (छोटे से बड़े)
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);   // Output: [1, 5, 10, 25, 40, 100]

// Descending (बड़े से छोटे)
numbers.sort(function(a, b) {
  return b - a;
});
console.log(numbers);           //  Output: [100, 40, 25, 10, 5, 1]



let students = [
  {name: "Ravi", age: 20},
  {name: "Amit", age: 18},
  {name: "Pooja", age: 22}
];

// Age के अनुसार ascending
students.sort(function(a, b) {
  return a.age - b.age;
});

console.log(students);


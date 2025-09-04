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
students.sort(function(a, b) {      //  a: first element, b: second element
  return a.age - b.age;         // according to Age- sorting
});

console.log(students);

// sort() normally arranges elements in alphabetical order (A → Z).

// But here, we pass a compare function so it sorts by age.

// 👉 Inside function:

// a and b are two student objects being compared.

// a.age - b.age gives the difference in ages:

// If result is negative → a comes before b.

// If result is positive → b comes before a.

// If result is 0 → order doesn’t change.

// So, the array is sorted by age in ascending order (smallest to largest).

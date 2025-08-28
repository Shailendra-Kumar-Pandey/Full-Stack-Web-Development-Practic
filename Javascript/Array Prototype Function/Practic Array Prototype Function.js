/* Array Prototype function */

const users = [
    {id: 1, name: "Shailendra", email: "shailendrakr2010@gmail.com", age: 30},
    {id: 2, name: "John", email: "john@example.com", age: 25},
    {id: 3, name: "Jane", email: "jane@example.com", age: 28},
    {id: 4, name: "Doe", email: "doe@example.com", age: 22},
    {id: 5, name: "Alice", email: "alice@example.com", age: 26}
]

console.log(users);

// 1. push()        // Adds a new user to the end of the array

users.push({id: 6, name: "Bob", email: "bob@example.com", age: 27});

console.log(users);

// 2. pop()        // Removes the last user from the array

users.pop();
console.log(users);

// 3. shift()        // Removes the first user from the array

users.shift();
console.log(users);

// 4. unshift()        // Adds a new user to the beginning of the array

users.unshift({id: 1, name: "Charlie", email: "charlie@example.com", age: 32});
console.log(users);

// 5. forEach() method       // forEach() method executes a provided function once for each array element.
                // forEach() method does not return a value only prints the elements and values.
users.forEach(function(ele, i, arr){
    console.log(ele, i, arr);      //
});
// console.log(result);  // undefined



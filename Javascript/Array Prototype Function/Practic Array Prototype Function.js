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

// 7.slice()        // Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

console.log(users.slice(0, 3));     // [{id: 1, name: "Shailendra", email: "shailendrakr2010@gmail.com", age: 30}, {id: 2, name: "John", email: "john@example.com", age: 25}, {id: 3, name: "Jane", email: "jane@example.com", age: 28}]

// 8. splice()        // Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

users.splice(2, 1); // removes the user at index 2

console.log(users);      // [{id: 4, name: "Doe", email: "doe@example.com", age: 22}, {id: 5, name: "Alice", email: "alice@example.com", age: 26}]


// 9. filter()        // Creates a new array with all elements that pass the test implemented by the provided function.

const adultUsers = users.filter(function(ele){
    return ele.age > 28;
});

console.log(adultUsers);  // [{id: 1, name: "Shailendra", email: "shailendrakr2010@gmail.com", age: 30}]

// 10. map()        // Creates a new array populated with the results of calling a provided function on every element in the calling array.

const userNames = users.map(function(ele){
    return ele.age > 28;
});

console.log(userNames);  // ["Shailendra", "John", "Jane", "Doe", "Alice"]


// 11. find()        // Returns the value of the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const user = users.find(function(ele){
    return ele.id === 2;
});

console.log(user);  // {id: 2, name: "John", email: "john@example.com", age: 25}

// 12. findIndex()        // Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

const userIndex = users.findIndex(function(ele){
    return ele.id === 3;
});

console.log(userIndex);  // 2

// 13. some()        // Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

const hasAdultUsers = users.some(function(ele){
    return ele.age > 30;
});

console.log(hasAdultUsers);  // false

// 14. every()        // Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

const allAdultUsers = users.every(function(ele){
    return ele.age > 18;
});

console.log(allAdultUsers);  // true


//  Callback Function   //  A function that is passed as an argument to another function 

function doSomething(fun){
    fun(30,50)
}


function addTwoNumbers(num1, num2){
    console.log(num1 + num2)
}

doSomething(addTwoNumbers)      //  Callback Function 


// 15 . reduce()        // Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const totalAge = users.reduce(function(acc, ele){       // acc = accumulator, ele = current element
    return acc + ele.age;       // acc = accumulator 
}, 0);

console.log(totalAge);  //  130
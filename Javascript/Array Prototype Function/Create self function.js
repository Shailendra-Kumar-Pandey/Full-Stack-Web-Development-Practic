let users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Jim', age: 35 }
]

console.log(users)

// 1.forEach() Method:- this function is used to iterate over each element of the array and execute a provided function once for each array element.
// users.forEach(function(user) {
//     console.log(user);
//     console.log(user.name);
//     console.log(user.age);
// });


// function myForEach(callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }
// }

// Array.prototype.myForEach = myForEach;

// users.myForEach(function(user, index, arr) {
//     console.log(user);
//     console.log(user.name);
//     console.log(user.age);
//     console.log(index);
//     console.log(arr);
// });


// 2. reverse() method :- This function will be execute then whole data reverse order.

// users.reverse()

// console.log(users)

function myReverse(callback) {
    for (let i = this.length-1; i >= 0 ; i--) {
        callback(this[i])
    }
}

Array.prototype.myReverse = myReverse

users.myReverse((user)=>{
    console.log(user)
})

console.log(users)

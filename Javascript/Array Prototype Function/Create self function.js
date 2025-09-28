let users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Jim', age: 35 }
]

// 1.forEach() Method:- this function is used to iterate over each element of the array and execute a provided function once for each array element.
users.forEach(function(user) {
    console.log(user);
    console.log(user.name);
    console.log(user.age);
});


function myForEach(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

Array.prototype.myForEach = myForEach;
users.myForEach(function(user, index, arr) {
    console.log(user);
    console.log(user.name);
    console.log(user.age);
    console.log(index);
    console.log(arr);
});

// reduce(callback(accumulator, currentValue, currentIndex, array), initialValue) in array
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// reduce()        // Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function(acc, curr) {        // acc = accumulator, curr = currentValue
    return acc + curr;      // returns the sum of all elements
}, 0);      //  initial value of accumulator is 0

console.log(sum);  // 15

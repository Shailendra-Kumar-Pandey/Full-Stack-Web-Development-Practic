let arr = [1, 2, 3, 4, 5];

//  this loop are all array value itrabale

for (let value of arr) {
    console.log(value)
}

// modifying the array value

for (let value of arr) {
    value += 10;
    console.log(value)
}
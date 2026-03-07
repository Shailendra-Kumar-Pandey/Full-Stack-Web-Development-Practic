// What is the Climbing Stairs in how to solve the problem , write a program
// example : -
//  input = 1       output = 1   // 1
//  input = 2       output = 2  // 1+1; 2
//  input = 3       output = 3  // 1+1+1; 2+1; 1+2
//  input = 4       output = 5  // 1+1+1+1; 2+1+1; 1+2+1; 1+1+2; 2+2
//  input = 5       output = 8  // 1+1+1+1+1; 2+1+2; 2+2+1; 1+2+2; 2+1+1+1; 1+2+1+1; 1+1+2+1; 1+1+1+2

function climbingStairs(numberOfStairs) {
    if (numberOfStairs <= 2) {
        return numberOfStairs;
    }

    let a = 1;
    let b = 2;
    for (let i = 3; i <= numberOfStairs; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(climbingStairs(20));

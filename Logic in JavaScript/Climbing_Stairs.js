// What is the Climbing Stairs in how to solve the problem , write a program
// example : -
//  input = 1       output = 1   // 1
//  input = 2       output = 2  // 1+1; 2
//  input = 3       output = 3  // 1+1+1; 2+1; 1+2
//  input = 4       output = 5  // 1+1+1+1; 2+1+1; 1+2+1; 1+1+2; 2+2
//  input = 5       output = 8  // 1+1+1+1+1; 2+1+2; 2+2+1; 1+2+2; 2+1+1+1; 1+2+1+1; 1+1+2+1; 1+1+1+2

function climbingStairs(numberOfStairs) {   // If the number of stairs is 1 or 2, return the number of stairs as there are that many ways to climb them
    if (numberOfStairs <= 2) {      // If the number of stairs is 1 or 2, return the number of stairs as there are that many ways to climb them
        return numberOfStairs;      // If the number of stairs is 1, there is only one way to climb it (taking one step). If the number of stairs is 2, there are two ways to climb it (taking two steps or taking one step twice).
    }

    let a = 1;      // Initialize a variable 'a' to 1, which represents the number of ways to climb 1 stair
    let b = 2;      // Initialize a variable 'b' to 2, which represents the number of ways to climb 2 stairs
    for (let i = 3; i <= numberOfStairs; i++) {     // Loop from 3 to the number of stairs, calculating the number of ways to climb each stair
        let c = a + b;          // Calculate the number of ways to climb the current stair (i) by adding the number of ways to climb the previous two stairs (a and b)
        a = b;                  // Update 'a' to the value of 'b' for the next iteration, as we will need it to calculate the number of ways to climb the next stair
        b = c;          // Update 'b' to the value of 'c' for the next iteration, as we will need it to calculate the number of ways to climb the next stair       
    }
    return b;       // After the loop, 'b' will contain the number of ways to climb the specified number of stairs, so we return it
}

console.log(climbingStairs(20));

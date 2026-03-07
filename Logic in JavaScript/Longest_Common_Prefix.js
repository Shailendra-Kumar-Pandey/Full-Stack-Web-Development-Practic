/*
    Problem Statement
Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string.

Input Format
Array of strings

Output Format
String representing longest common prefix

Constraints

Sample Test Cases
Test Case 1
Input:
["flower","flow","flight"]
Expected Output:
"fl"
Explanation:
Common prefix is 'fl'

Test Case 2
Input:
["dog","racecar","car"]
Expected Output:
""
Explanation:
No common prefix
*/ 


//Sollution:-
function commonStringFind(arr) {
    if (arr.length === 0) return "";        // If the input array is empty, return an empty string as there are no strings to compare
    
    let prefix = "";            // Initialize an empty string to store the longest common prefix
    
    for (let i = 0; i < arr[0].length; i++) {       // Loop through each character of the first string in the array
        const char = arr[0][i];     // Get the character at position i from the first string in the array
        
        if (arr.every(str => str.length > i && str[i] === char)) {    //every() method checks if all elements in the array satisfy the provided testing function. It returns a Boolean value.
            prefix += char;         // If the character at position i is the same in all strings, add it to the prefix
        } else {            // If the character at position i is not the same in all strings, we have found the longest common prefix up to this point
            break;      // If a mismatch is found, break the loop as we have found the longest common prefix up to this point
        }
    }
    
    return prefix;          // Return the longest common prefix found
}

// function commonStringFind(arr){
//     let result = "";
//     arr.forEach(element => {
//         element.includes()
//     });
// }

const data = ['shailendra', 'shaligram', 'shandeep']

console.log(commonStringFind(data))
/* Local Storage and Session Storage Example */

// Local-Storage:  this allows you to store data in the browser with no expiration time. The data will persist even after the browser is closed and reopened. 

// Storing data in local storage

// 1. method Storing a string
localStorage.setItem("username", "vikas");  //key, value

// 2. method Retrieving data from local storage
const username = localStorage.getItem("username");  //key
console.log(username);

// 3. method Removing data from local storage
localStorage.removeItem("username");    //key

// 4. method Clearing all data from local storage
localStorage.clear();       //no key needed

// 5. method Storing an array or object in local storage    
const user = {
    name: "vikas",
    age: 22,
    city: "jaipur"
};
localStorage.setItem("user", JSON.stringify(user));   //converting object to string

// 6. method Retrieving an array or object from local storage
const storedUser = JSON.parse(localStorage.getItem("user"));        //converting string back to object
console.log(storedUser);    //{name: "vikas", age: 22, city: "jaipur"}

// session-storage :- this is same as local storage but data is cleared when the page session ends (i.e., when the browser is closed). 


// 7. method Storing data in session storage
sessionStorage.setItem("sessionUsername", "jeetu");  //key, value

// 8. method Retrieving data from session storage
const sessionUsername = sessionStorage.getItem("sessionUsername");  //key
console.log(sessionUsername);   //jeetu

// 9. method Removing data from session storage
sessionStorage.removeItem("sessionUsername");   //key

// 10. method Clearing all data from session storage
sessionStorage.clear();     //no key needed
/*---------------------------------End----------------------------------*/

/*Write a Program to  Shuffle array Logic  */

const array = [1, 2, 3, 4, 5];
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
const shuffledArray = shuffleArray(array);
console.log(shuffledArray);
/*---------------------------------End----------------------------------*/

/*Write a Program to  Suffer array Logic  */    
const arr = [12, 31, 61, 71, 81, 99, 41, 53, 52, 74, 83, 94, 8, 5];

let suffer = [];    // load numbers into suffer array
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 50) {
        suffer.push(arr[i]);
    }
}
console.log(suffer);    // [61, 71, 81, 99, 53, 52, 74, 83, 94]
/*---------------------------------End----------------------------------*/

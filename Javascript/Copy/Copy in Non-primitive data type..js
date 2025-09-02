// Copy in Non-primitive data type.


// let users = ["Anisha", "Payal", "Shailendra", "Uzaif", "Suhani"];


// let copyUsers = users;

// // console.log(copyUsers[1])

// copyUsers[1] = "Pratiksha"

// console.log("users", users)
// console.log("copyUsers", copyUsers)




// shallow copy(spread copy)

/*
let users = ["Anisha", "Payal", "Shailendra", "Uzaif", "Suhani"];

let shallowCopy = [...users]

shallowCopy[2] = "Sumedh"

console.log("Original Users", users)
console.log("Shallow Copy Users", shallowCopy)

*/



/*
let user = {
    name:"Samir",
    age:26,
    address: {
        PIN: 440011,
        LandMark:"Near Bajaj Nagar",
        city:"Nagpur"
    }
}

const shallowCopy = {...user}

shallowCopy.age = 20;
shallowCopy.address.city = "Pune"

console.log(user)
console.log(shallowCopy)

*/


// Deep Copy

let user = {
    name:"Samir",
    age:26,
    address: {
        PIN: 440011,
        LandMark:"Near Bajaj Nagar",
        city:"Nagpur"
    }
}



const deepCopy = JSON.parse(JSON.stringify(user));

deepCopy.age = 20;
deepCopy.address.city = "Pune"
console.log("ORIGINAL", user)
console.log("COPY", deepCopy) // to convert into json

// const deepCopy = 
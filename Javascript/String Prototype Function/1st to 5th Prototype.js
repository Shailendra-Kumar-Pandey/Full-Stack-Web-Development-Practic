//      Prototype

let data = "Shailendra Kumar Pandey";

let data_1 = new String(data);

console.log(data_1);    
console.log(data);    

// 1. charAt()

console.log(data.charAt(2));        //   a

console.log("Gayatri".charAt(4));   //   t

// 2. toLowerCase()

console.log(data.toLowerCase());  // shailendra kumar pandey

console.log(data.toLocaleLowerCase());  // shailendra kumar pandey


// 3. toUpperCase()

console.log(data.toUpperCase());  // SHAILENDRA KUMAR PANDEY


// 4. concat()

console.log(data.concat(" ", "is", " ", "a", " ", "developer"));  // Shailendra Kumar Pandey is a developer


console.log(data.concat(` is a developer`))     // Shailendra Kumar Pandey is a developer

console.log(`${data} is a Software Engineer`)     // Shailendra Kumar Pandey is a Software Engineer

console.log(data + " is a Software Developer")     // Shailendra Kumar Pandey is a Software Developer

// 5. endsWith()        // return boolean value 

console.log(data.endsWith("y"));      // true
console.log(data.endsWith("Pandey"));  // true
console.log(data.endsWith("dey"));   // true
console.log(data.endsWith("Kumar"));  // false


// 6. startsWith()    // return boolean value

console.log(data.startsWith("Shailendra"));  // true
console.log(data.startsWith("Kumar"));        // false


// 7. repeat()

console.log(data.repeat(2));  // Shailendra Kumar PandeyShailendra Kumar Pandey
console.log(data.repeat(1000));  // Shailendra Kumar PandeyShailendra Kumar Pandey

// 8. replace()

console.log(data.replace("Shailendra", "John"));  // John Kumar Pandey

// 9. slice()

console.log(data.slice(0, 10));  // Shailendra  // 0 to 9
console.log(data.slice(10));      // Kumar Pandey   // 10 to end

console.log("Gayatri".slice(0, 4));  // Gaya
console.log("Gayatri".slice(4));      // tri

// 10. split()

console.log(data.split(" "));  // ["Shailendra", "Kumar", "Pandey"] 
const [firstName, lastName] = data.split(" ");
console.log(firstName);  // Shailendra
console.log(lastName);   // Kumar Pandey
console.log(typeof firstName);  // string

const [fName, mName, lName] = data.split(" ");  // Shailendra, Kumar, Pandey

const fullName = data.split(" ");  // ["Shailendra", "Kumar", "Pandey"]
console.log(fullName);  // ["Shailendra", "Kumar", "Pandey"]

console.log(fullName[0]);  // Shailendra


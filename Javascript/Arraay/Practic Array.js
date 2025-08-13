//          Array

const students = ["Shailendra", "Gayatri", "Jeetu", "Pandey"];

console.log(students);          // Print full array

console.table(students);        // Print Table format array

console.log(students.length);       //  4

console.log(students[0]);       //  Shailendra

console.log(students[0]+" "+students[2]);       // Shailendra Jeetu

students.push("Shalig Ram Pandey");             //  students array to last add new member "Shalig Ram Pandey"

console.log(students);      // Print full array

console.log(typeof students);       // type of - object

console.log(typeof students[0]);    // type of - string

for (let i = 0; i < students.length; i++) {
        console.log(students[i]);               // Print one by one all element in array
}
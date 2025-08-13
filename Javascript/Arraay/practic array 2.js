// Practic Array

const student = [
    {name : "Shailendra", age : 29, city : "Satna"},
    {name : "Gayatri", age : 26, city : "Satna"},
    {name : "Aarti", age : 25, city : "Nagpur"},
    {name : "Navam", age : 12, city : "Satna"},
]

console.log(student);   // Print student array

console.log(student[0]); // Print first student object

console.log(student[0].name); // Print name of first student    

// Condition is Age >= 18  && city = Satna

let newResultArr = [];


for (let i = 0; i < student.length; i ++){
    if(student[i].age >= 18 && student[i].city == "Satna"){
        newResultArr.push(student[i].name, student[i].age);
    }
}

// console.log(newResultArr);  //  only print age >= 18 

// console.log(newResultArr);      // Only print age >= 18 && city = "Satna"

// console.log(newResultArr);      // Only print [ 'Shailendra', 29, 'Gayatri', 26 ]


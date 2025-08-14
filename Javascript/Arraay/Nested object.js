//   Nested multiple objects

const data = [
    { name: "Shailendar Kumar Pandey", age: 30, location: "India", address: {pinCode: 485001, city: "Satna", state: "Madhya Pradesh"} },
    { name : "Gayatri Shailendra Pandey", age: 27, location: "India", data1 : [fatherName= "Gomti Prashad Sharma",age= 48, address = "Saleha, Panna (M.P)"]}
]


console.log(data);          // Print full array

console.log(data[1]);           // print array in 1st index

console.log(data[1].data1);     // Print for nested array

console.table(data[1].data1);       // Print for nested array in table format

console.log(data[1].data1[0]);      //  Gomti Prashad Sharma

console.log(data[1].data1[2]);      // Saleha, Panna (M.P.)
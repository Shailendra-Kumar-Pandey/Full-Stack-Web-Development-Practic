//   Nested multiple objects

const data = [
    { name: "Shailendar Kumar Pandey", age: 30, location: "India", {pinCode: 485001, city: "Satna", state: "Madhya Pradesh"} },
    { name : "Gayatri Shailendra Pandey", age: 27, location: "India", data1 : ["Gomti Prashad Sharma", 48, "Saleha, Panna (M.P)"]}
]


console.log(data);          // Print full array

console.log(data[1]);           // print array in 1st index

console.log(data[1].data1);     // Print for nested array

console.table(data[1].data1);       // Print for nested array in table format

console.log(data[1].data1[0]);      //  Gomti Prashad Sharma

console.log(data[1].data1[2]);      // Saleha, Panna (M.P.)

console.log(data[0].address);       // Print for nested object
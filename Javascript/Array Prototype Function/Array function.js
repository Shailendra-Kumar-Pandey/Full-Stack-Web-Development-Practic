/* Array Prototype method  */

const data = [
    {id: 1, name: "Shailendra", age: 27},
    {id: 2, name: "Sandeep", age: 21},
    {id: 3, name: "Jeetu", age: 25},
    {id: 4, name: "Gayatri", age: 22},
]

// 01. forEach() method         - this function only itration  and not a return value

data.forEach(function(ele, i, arr){
    console.log(ele);
    console.log(ele.name);
    console.log(ele.age);
    console.log(i);
    console.log(arr);
})

data.forEach((ele)=>{
    console.log(ele.id, ele.name, ele.age);
})


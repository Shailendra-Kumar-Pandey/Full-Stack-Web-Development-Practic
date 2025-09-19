//

const users =[
    {id : 1, name : "Jeetu", city: "Satna" },
    {id : 2, name : "Gayatri", city: "Satna" },
    {id : 3, name : "Ramakant", city: "Panna" },
    {id : 4, name : "Kawade", city: "pune" },
    {id : 5, name : "Sanjay", city: "Nagpur" }
]


// 1.  push() method

users.push({id:6, name: "Manisha", city: "mumbai"})     //  add element last position in this array 

// console.log(users)       // whole object print in cansole

// 2. pop() method

users.pop()     // delete element last position in this array 

// console.log(users)

// 3. unshift() method

users.unshift({id:0, name: "Manisha", city: "mumbai"})  //add element in array is start first element

// console.log(users)

// 4. shift() method

users.shift()           // delete first element in array

// console.log(users)


//      Loop function Prototype

// 1. forEach()  function (method) 
// forEach() function not return value 
users.forEach(function (e,i, arr){
    // console.log(e)           // ilterate all element in this array iltarate every object
    // console.log(e.id)        // hold only element id print
    // console.log(e.name)      // hold only element name print 
    // console.log(e.city)      // hold only elemrnt city name
    // console.log(e.id + i)    //  print only result = element.id + index
    // console.log(e.id + i + arr)  // print sum and array
    // console.log(i)       // print only index
    // console.log(arr)     // print only array
    // console.log(e.id + 10)   // print only result = element.id + 10
     e.id += i          // this statment to store data elemeent.id = element.id + index will be change also
    // console.log(e)  // print element one by one
})
// console.log(users)


// 2. find() function :-  this function only on return fist match then stop 

let result = users.find((e)=>{
    return e.city === "Satna" 
})
// console.log(result)     //   find the first match then not find any one but  Satna city also two users avilable  
// console.log(users)      // see this {print all array and object}

// 3. findIndex() function :-  This function only return element index not return any thing

result = users.findIndex((e)=>{
    return e.id === 3;
})

// console.log(result)         // 1 :- is the index only this element  

// 4. reduce() function :- this function only on return single value 
/* syntex :-    reduce(callback(accumulator, currentValue, currentIndex, array), initialValue) in array
                
                let <variable_name> = array.reduce(function(accumulator , currentValue){
                        // Logic code
                },initialValue)
*/


result = users.reduce(function (total, id){     // accumulator :- holt last result; currentValue :- current element; initialValue :- starting value
    return total + id.id;
},0)

// console.log(result)
// console.log(users)


// 5. map() function :-


// 6. filter() function :-   this function is


// 7. sort() function :-


//  8. 
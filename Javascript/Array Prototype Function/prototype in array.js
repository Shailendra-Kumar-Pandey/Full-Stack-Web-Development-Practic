//

const users =[
    {id : 1, name : "Jeetu", city: "Satna", age: 29},
    {id : 2, name : "Gayatri", city: "Satna", age: 27},
    {id : 3, name : "Ramakant", city: "Panna", age: 30 },
    {id : 4, name : "Kawade", city: "pune", age: 62 },
    {id : 5, name : "Sanjay", city: "Nagpur" , age: 49}
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

// console.log(result)      // print hold single value
// console.log(users)       // print full array


// 5. map() function :-         this method used to create a new array not modifie in orignal array

result = users.map((e)=>{
    return e.id === 9
})
// console.log(result)

// 6. filter() function :-   this method used to create a new array not modifie in orignal array, function will be return to condition true to store new array but condition false then skill this element.

result = users.filter((e)=>{
    return e.age > 30;          // condition chack to find element age grater then 30 and return and store result will be store result
})
// console.log(result);        // print finally result

// 7. sort() function :-  this function change the orignal array using or very pawer method 

users.sort((a,b)=>{
    return b.name - a.name;
})

// console.log(users)

//  8. reverse() function :-       this array change in orignal array this function will be whole array in reserse order

users.reverse();        // change whole array will be change order to reverse order

// console.log(users)      // print full array and reverse order


// 9. toreversed() function :- this functio will be return new array but not be change orginal array

result = users.toReversed()         // this is reverse order return new array but not be change orignal array

// console.log(result)         // this is print reverse order
// console.log(users)          // not change orignal array

// 10 join() function :- this function will be return only string

result = ["Shailendra", "Gayatri", "Jeetu", "Ramakant"]

// console.log(result)
let data =result.join();        // not change orignal array but return string value
// console.log(data)
// console.log(result)


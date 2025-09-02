// Object

const user = {
    name:"Sumedh",
    age:18,
    address: {
        pin:441100,
        houseNo: 12,
        landmark: "Near Bajaj Nagar",
        city:"Nagpur"
    },
    hobby: ["Playing cricket", "Swimming"],
    printMyName: function(){
        console.log(this)
    }
}

// console.log(user.address.houseNo)
// console.log(user["address"]["houseNo"])

// console.log(user.hobby)

// user.hobby.forEach((ele)=>console.log(ele))

// user.printMyName()




function doSomething(...argument){
    console.log(argument)
}

doSomething(10, 30)
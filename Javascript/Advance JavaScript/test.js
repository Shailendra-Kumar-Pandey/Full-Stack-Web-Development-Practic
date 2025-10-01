function doSomething(name, callback){
    console.log(name)
    callback(5, 2)
}

doSomething("ADDITION", function(num1, num2){
    console.log(num1 + num2)
})

  doSomething("MULTIPLICATION: ", function(num1, num2){
        console.log(num1 * num2)
    })

    doSomething("SUBTRACTION: ", function(num1, num2){
        console.log(num1 - num2)
    })

    doSomething("DIVITION: ", function(num1, num2){
        console.log(num1/num2)
    })
function doSomething(name, callback){
    console.log(name)
    callback(3, 5)
}

doSomething("ADDITION", function(num1, num2){
    console.log(num1 + num2)


})

  doSomething("MULTIPLICATION: ", function(num1, num2){
        console.log(num1 * num2)
    })
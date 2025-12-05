

function print(num, data){
    console.log(num);
    data();
}

/*
function print(100, (){console.log("This is a fuuction")}){
    console.log(100);
    ();
}
*/

print(100 , doSomething);

function doSomething(){
    console.log("This is a function");
}
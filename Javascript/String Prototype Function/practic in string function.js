//  Self Genrated Function only use String 

let fullName = "Shailendra Shaligram Pandey"

// 1. includes() method :- this function only return boolean value


let result = fullName.includes('h')
// console.log(result)


function myIncludes(str, a ){
    let inputData = false;
    if(a.length === 1){
        for (let i = 0; i < str.length-1; i++) {
            if(inputData === false){
            inputData = str[i] === a;
            }
        }
    }else{
        for (let i = 0; i < str.length-a.length+1; i++) {
            if(inputData === false){
            // inputData = str.slice(i, i+a.length) === a;
            inputData = mySlice(str, i , i+a.length) === a;
            }
        }
    }
    return inputData
}

console.log(myIncludes(fullName, 'hai'))


// 2. slice() method :- this function 

// console.log(fullName.slice(0, 5))   
//  result = fullName.slice(0, 5)
 
//  console.log(result)

function mySlice(string, startNumber, endNUmber ){
    let receveData = "";
    for (let i = startNumber; i < endNUmber; i++) {
               receveData += string[i];
    }
    return receveData;
}

// console.log(mySlice(fullName, 4, 15))
// console.log(mySlice('Shailendra', 0, 5))

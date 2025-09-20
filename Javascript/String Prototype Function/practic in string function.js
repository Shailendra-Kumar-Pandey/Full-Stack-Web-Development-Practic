let fullName = "Shailendra Shaligram Pandey"

// 1. includes() method :- this function only return boolean value


let result = fullName.includes('h')
console.log(result)


function myIncludes(str, a ){
    let inputData = false;
    if(a.length === 1){
        for (let i = 0; i < str.length-1; i++) {
            if(inputData === false){
            inputData = str[i] === a;
            }
        }
    }else{
        for(let i=0; i< str.length-1; i++){
            for (let j = i; j < a.length-1; j++) {
                
                
            }
        }
    }
    return inputData
}

console.log(myIncludes(fullName, 'hai'))
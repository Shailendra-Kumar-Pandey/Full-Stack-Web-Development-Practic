//  Self Genrated Function only use String 

let fullName = "Shailendra Shaligram Pandey"

// 1. includes() method :- this function only return boolean value


let result = fullName.includes('h')
// console.log(result)


function myIncludes(str, a ){
    let inputData = false;
    if(a.length === 1){
        for (let i = 0; i < str.length; i++) {
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

// console.log(myIncludes(fullName, 'hai'))


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



// 3.charAt() method :- this function enter index no. return avilable string

result = fullName.charAt(1)

// console.log(result)

function myCharAt(str, index){
    let indexStr = ""
    for (let i = 0; i < str.length; i++) {
            if(str[index] === str[i]){
                indexStr += str[i]
                break;
            }
    }
    return indexStr
}

// console.log(myCharAt(fullName, 0))


// 4.toLowerCase() method :- this function will be return whole string are lower case convert

result = fullName.toLowerCase();

// console.log(result);

function myToLowerCase(str) {
    let lowerCase = ""
    let holdLowerChar = " abcdefghijklmnopqrstuvwxyz";
    let holdUpperChar = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let holdIndex;
    for (let i = 0; i < str.length; i++) {
        for(let j = 0; j < holdLowerChar.length; j++){
            
            if(str[i]===holdLowerChar[j]){
                lowerCase += str[i]
                break
            }else{
                for (let c = 0; c < holdUpperChar.length; c++) {
                    if(str[i] === holdUpperChar[c]){
                        holdIndex = c;
                        break
                    }
                }
                if (holdIndex === j) {
                    lowerCase += holdLowerChar[j];
                    holdIndex = null
                    break
                }
            }
        }
    }    
    return lowerCase;
}

console.log(myToLowerCase(fullName));

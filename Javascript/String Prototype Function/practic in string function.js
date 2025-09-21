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

// console.log(myToLowerCase(fullName));


// 5. toUpperCase() method :- this function will be string convert to upper case 

result = fullName.toUpperCase()

// console.log(result)


function myToUpperCase(str) {
    let upperCase = ""
    let holdLowerChar = " abcdefghijklmnopqrstuvwxyz";
    let holdUpperChar = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let holdIndex;
    for (let i = 0; i < str.length; i++) {
        for(let j = 0; j < holdUpperChar.length; j++){
            
            if(str[i]===holdUpperChar[j]){
                upperCase += str[i]
                break
            }else{
                for (let c = 0; c < holdLowerChar.length; c++) {
                    if(str[i] === holdLowerChar[c]){
                        holdIndex = c;
                        break
                    }
                }
                if (holdIndex === j) {
                    upperCase += holdUpperChar[j];
                    holdIndex = null
                    break
                }
            }
        }
    }    
    return upperCase;    
}

// console.log(myToUpperCase(fullName))
// console.log(myToUpperCase("kya haal h raja"))


// 6. concat() method :- This function will be add to two string

let firstName = "Shailendra"

let lastName = " Pandey"

result = firstName.concat(lastName)

// console.log(result);


function myConcat(startStr, addStr){
    let fullStr = "";
    for(let i = 0; i < startStr.length; i++){
        fullStr += startStr[i]
    }
    for (let j = 0; j < addStr.length; j++) {
        fullStr += addStr[j];
    }
    return fullStr;
}

// console.log(myConcat(firstName, lastName))
// console.log(myConcat("Jeetu ", "Bhai"))


// 7. repeat() method:- this function will be repeat string return 

result = fullName.repeat(3);

// console.log(result)

function myRepeat(str, time){
    let finalResult = ""
    count = time;
    let j = 0;
    while(j<time){
        for (let i = 0; i < str.length; i++) {
            finalResult += str[i]
        }
        j++
    }
    return finalResult;
}

// console.log(myRepeat(fullName, 3))


// 8.replace() method :- this function will be change string using selected string

result = fullName.replace("Shailendra", "Sandeep")

// console.log(result)

function myReplace(str, changeStr, updateStr){
    let updateString = ""
    for(let i = 0; i < str.length; i++){
        if (str[i]===changeStr[i]) {
            if(updateStr.length > i){
                updateString += updateStr[i]
            }
        }else{
            updateString += str[i]
        }
    }
    return updateString
}
// console.log(myReplace(fullName,"Shailendra","Sandeep"))

// console.log(myReplace("Jeetu Bhai","Jeetu","Vi"))

// 9. split() method :- this function will be return string to array 

result = fullName.split(" ")

// console.log(result)      // result = fullName.split()   // ['Shailendra Shaligram Padney']

// console.log(result)  // result = fullName.split("")  // ['S','h','a','i','l','e','n','d','r','a',' ','S','h','a','l','i','g','r','a','m',' ','P','a','d','n','e','y']

// console.log(result)    // result = fullName.split(" ")  // [ 'Shailendra', 'Shaligram', 'Pandey' ]

// console.log(result)

function mySplit(str){
    let splitArr = [];
    
    for(let i= 0; i< str.length; i++){
        splitArr.push(str[i])
    }
     return splitArr;
}
console.log(mySplit(fullName))
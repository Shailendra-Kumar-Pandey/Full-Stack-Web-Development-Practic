//Practic in  Object

const bankCustmarData = {
    accountNumber : 39478969921,
    accountHolder : "Shailendra Kumar Pandey",
    mobileNumber : 9806638963,
    custmarId : undefined
}

console.log(bankCustmarData);       // Print full Object

console.log(bankCustmarData.accountHolder);     // Shailendra Kumar Pandey

bankCustmarData.Address = "Maa Sharda Bhawan in front of Samritan Hospital IP Nagar Pateri Satna (Madhya Pradesh)";     // Add new element key and Value

bankCustmarData.balence = 100000;       // Add new element Property and Value

console.log(bankCustmarData.balence);       //  100000

console.log(bankCustmarData);        // Print full Object

let property = "locker in holder";

let value = "Dimand, Gold, Silver, Cash";

bankCustmarData[property] = value;          // add new element property and value

console.log(bankCustmarData);           // Print full Object

property = "pinCode";

bankCustmarData[property] = ""

console.log(bankCustmarData);

bankCustmarData.custmarId = 1234567890

console.log(bankCustmarData);



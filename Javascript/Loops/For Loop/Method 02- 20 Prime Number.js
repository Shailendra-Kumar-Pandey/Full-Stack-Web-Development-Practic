/* Write a program to print the first 20 prime numbers */

let count = 0;    // कितने prime मिल चुके हैं
let number = 2;   // 2 से शुरू करेंगे

for (; count < 20; number++) {      // जब तक 20 prime नहीं मिल जाते, number बढ़ाते रहेंगे
    let isPrime = true;         // मान लेते हैं कि number prime है

    // दूसरा for loop: check करना कि number prime है या नहीं
    for (let i = 2; i < number; i++) {  // 2 से लेकर number-1 तक
        if (number % i === 0) {     // अगर number को i से भाग देने पर remainder 0 आता है
            isPrime = false;        // तो number prime नहीं है
            break;              // loop से बाहर निकल जाओ
        }
    }

    if (isPrime) {          // अगर number prime है 
        console.log(number); // prime print करो
        count++;             // prime मिल गया
    }
}

   // Object Destructuring

   const users = {
        firstName : "Shailendra",
        age : 30,
        lastName : "Pandey",
        mobileName : 9806638963
   }

   console.log(users);      // Print full object

   // syntex object destructuring
   const {firstName, lastName} = users;

   console.log(firstName)   // Shailendra

   console.log(lastName)    // Pandey

//    console.log(age)      // error :- age is not define
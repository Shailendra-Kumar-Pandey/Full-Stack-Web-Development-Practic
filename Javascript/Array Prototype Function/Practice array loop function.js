
        // let arr = ["Banana", "Grapes", "Apple", "Mango","Kiwi"];

        //forEach - it will just iterate the array- will not return anything- if you try to return then you will get the undefined

        /*
        arr.forEach((ele)=>{
           
            if(ele.includes("p")){
                console.log(ele)
            }
           
        })
        */


        //  let arr = ["Banana", "Grapes", "Apple", "Mango","Kiwi"];

/*
        let arr = [
            {name:"Sumedh", age:20, city:"Pune"},
            {name:"Samir", age:20, city:"Nagpur"},
            {name:"Heram", age:18, city:"Delhi"},
            {name:"Aditya", age:21, city:"Pune"},
            {name:"Harshal", age:21, city:"Nashik"},
            {name:"Mohit", age:19, city:"Nagpur"},
            {name:"Panda", age:17, city:"Nagpur"},
        ]
        /// filter

        let result = arr.filter((ele)=>{

            if(ele.age >= 20 && ele.city.startsWith("N")){
                return ele
            }

        })

        console.log(result)
        */



        /*
          let arr = [
            {name:"Sumedh", age:20, city:"Pune"},
            {name:"Samir", age:20, city:"Nagpur"},
            {name:"Heram", age:18, city:"Delhi"},
            {name:"Aditya", age:21, city:"Pune"},
            {name:"Harshal", age:21, city:"Nashik"},
            {name:"Mohit", age:19, city:"Nagpur"},
            {name:"Panda", age:17, city:"Nagpur"},
        ]
        // map

        let result = arr.map((ele)=>{
           return ele.city
        })

        console.log(result)
        */




        /*
        let arr = [
            {name:"Sumedh", age:20, city:"Pune"},
            {name:"Samir", age:20, city:"Nagpur"},
            {name:"Heram", age:18, city:"Delhi"},
            {name:"Aditya", age:21, city:"Pune"},
            {name:"Harshal", age:21, city:"Nashik"},
            {name:"Mohit", age:19, city:"Nagpur"},
            {name:"Panda", age:17, city:"Nagpur"},
        ]
        // find
        let result = arr.find((ele)=>{
            if(ele.age >=18 && ele.city.startsWith("N")){
                return ele
            }
        })
        console.log(result)
        */



        /*
        let arr  = [
            {name:"Sumedh", age:20, city:"Pune"},
            {name:"Samir", age:20, city:"Nagpur"},
            {name:"Heram", age:18, city:"Delhi"},
            {name:"Aditya", age:21, city:"Pune"},
            {name:"Harshal", age:21, city:"Nashik"},
            {name:"Mohit", age:19, city:"Nagpur"},
            {name:"Panda", age:17, city:"Nagpur"},
        ]
        // findIndex 

        let result = arr.findIndex((ele)=>{
            if(ele.age >=18 && ele.city.startsWith("N")){
                return ele
            }
        })
        console.log(result)
        */

        /*
        let arr = [
            {name:"Sumedh", age:20, city:"Pune"},
            {name:"Samir", age:20, city:"Nagpur"},
            {name:"Heram", age:18, city:"Delhi"},
            {name:"Aditya", age:21, city:"Pune"},
            {name:"Harshal", age:21, city:"Nashik"},
            {name:"Mohit", age:19, city:"Nagpur"},
            {name:"Panda", age:17, city:"Nagpur"},
        ]

        function getArrIndex(arr){

            let result= [];

            arr.forEach((ele, index)=>{
                if(ele.age >= 20 && ele.city.startsWith("N")){
                    result.push(index)
                }
            })

            return result
        }

        let result = getArrIndex(arr);
        console.log(result)*/

        // every - and - return boolean
        // some - or - return boolean
  
    


        // let arr = ["Banana", "Grapes", "Apple", "Mango","Kiwi"];

        //forEach - it will just iterate the array- will not return anything- if you try to return then you will get the undefined

        
        // arr.forEach((ele)=>{
           
        //     if(ele.includes("p")){
        //         console.log(ele)
        //     }
           
        // })



        let arr = [
            {name:"Sumedh", age:20, city:"Pune"},
            {name:"Samir", age:20, city:"Nagpur"},
            {name:"Heram", age:18, city:"Delhi"},
            {name:"Aditya", age:21, city:"Pune"},
            {name:"Harshal", age:21, city:"Nashik"},
            {name:"Mohit", age:19, city:"Nagpur"},
            {name:"Panda", age:17, city:"Nagpur"},
        ]



        /// filter

        let result = arr.filter((ele)=>{

            if(ele.age >= 20 && ele.city.startsWith("N")){
                return ele
            }

        })

        console.log(result)

            // map

        result = arr.map((ele)=>{
           return ele.city + " - " + ele.name
        })

        console.log(result)
        
        // find

        result = arr.find((ele)=>{
            if(ele.age >=18 && ele.city.startsWith("N")){
                return ele
            }
        })
        console.log(result)


        // findIndex

         result = arr.findIndex((ele)=>{
            if(ele.age >=18 && ele.city.startsWith("N")){
                return ele
            }
        })
        console.log(result)
import { useState } from "react";

const Password = ()=>{

    let [color, setColor] = useState("black");
    let [word, setWord] = useState("")

    function changeValue(data){
        console.log(data)
        setWord(data)
        if(word.length <= 2){
            setColor("red")
        }else if(word.length > 2 && word.length <= 5){
            setColor("yellow")
        }else{
            setColor("green")
        }
    }

    return(
        <>
            <h1>Change Text Color</h1>
            <input type="text" style={{color:color}} value={word}  onChange={(e)=> {changeValue(e.target.value)}}/>
        </>
    )
}

export default Password;
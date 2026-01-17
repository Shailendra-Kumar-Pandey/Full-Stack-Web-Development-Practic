import { useContext } from "react";
import { StudentContext } from "./contextData";

const Subject = ()=>{
    const subject = useContext(StudentContext)
    return (
        <div style={{backgroundColor:'lightsteelblue', padding:'10px', borderRadius:'5px'}}>
            <h1>Subject  Component</h1>
            <h3>Subject Name : {subject}</h3>
        </div>
    );
};

export default Subject;
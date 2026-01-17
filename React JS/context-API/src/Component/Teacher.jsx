import Student from "./Student";

const Teacher = ()=>{
    return (
        <div style={{backgroundColor:"lightpink", padding:'10px', borderRadius:'5px'}}>
            <h1>Teacher Component</h1>
            <Student />
        </div>
    );
};

export default Teacher;
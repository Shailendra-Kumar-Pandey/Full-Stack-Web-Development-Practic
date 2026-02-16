import Second_Props from "./Second_Props";

function Prop(props){
    return (
        <>
            <h1>User Full Name = {props.name}</h1>
            <h2>User Age = {props.age}</h2>

            <Second_Props data = "Maa Sharda Bhawan IP Nagar Pateri Satna (M.P.)"/>
        </>
    );
}

export default Prop;


import { Link, Outlet } from "react-router";

export default function Contect(){
    return(
        <div style={{textAlign:'center', color: "darkcyan"}}>
            <h1>This is a Contect Page</h1>
                <Link to='name'><p>Name</p></Link>
                <Link to='Address'><p>Address</p></Link>
                <Link to='Phone'><p>Phone</p></Link>
                <Outlet />                 {/* // this tag is very importent show nested routing data */}
        </div>
    )
}
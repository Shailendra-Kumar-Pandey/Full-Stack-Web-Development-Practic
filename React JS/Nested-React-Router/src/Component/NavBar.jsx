import { Link,} from 'react-router';



function NavBar() {
    return (
        <>
            <div className="header">
                <h1>Logo</h1>
                    <ul>

                        <Link to='/'> <li>Home</li></Link>
                        <Link to='/About'> <li>About</li></Link>
                        <Link to='/Contect'> <li>Contect</li></Link>
                        
                    </ul>
            </div>
        </>
    );
    
}

export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
        <div className="main">
          <h2>LOGO</h2>
          <ul>
            <li>
              <Link to= "/"> Home</Link>
            </li>
            <li>
              <Link to="/About"> About</Link>
            </li>
            <li>
              <Link to="/Product"> Product</Link>
            </li>
            <li>
              <Link to="/Contact"> Contact</Link>
            </li>          
          </ul>
        </div>
    </>
  )
}

export default Header;

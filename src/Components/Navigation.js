import React from 'react';
import { Link } from 'gatsby';

function Navigation(){
    return  (
        <nav id="menu">
            <ul className="flex">
                <li className='pr-3 menu-item'>
                    <Link  to="/">Home</Link>
                </li>
                <li  className='pr-3 menu-item'>
                    <Link to="/search">Search</Link>
                </li>   
            </ul>
        </nav>
    )
}

export default Navigation;

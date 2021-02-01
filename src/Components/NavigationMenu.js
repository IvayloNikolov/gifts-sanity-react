import React from "react";
import { Link } from 'react-router-dom';
import '../styles/header.css';
import '../styles/all.css';

function NavigationMenu(props){
    return (
        <ul className="flex">
            <li className='pr-3 menu-item'>
                <Link to="/">Home</Link>
            </li>
            <li  className='pr-3 menu-item'>
                <Link to="/blog">Blog</Link>
            </li>
        </ul>
    )
}

export default NavigationMenu;
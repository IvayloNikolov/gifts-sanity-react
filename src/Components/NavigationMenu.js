import React from "react";
import { NavLink } from 'react-router-dom';
import '../styles/header.css';
import '../styles/all.css';

function NavigationMenu(props){
    return (
        <ul className="flex">
            <li className='pr-3 menu-item'>
                <NavLink  to="/">Home</NavLink>
            </li>
            <li  className='pr-3 menu-item'>
                <NavLink to="/search">Search</NavLink>
            </li>
        </ul>
    )
}

export default NavigationMenu;
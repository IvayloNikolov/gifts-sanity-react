import React from "react";
import { Link } from 'react-router-dom';
import '../styles/header.css';
import '../styles/all.css';

function NavigationMenu(props){
    return (
        <ul className="flex">
            <li className='pr-3 menu-item'>
                <Link to="/" onClick={()=>props.showMenuFn(false)}>Home</Link>
            </li>
            <li className='pr-3 menu-item'>
                <Link to="/best-gift-for-test" onClick={()=>props.showMenuFn(false)}>FAQ</Link>
            </li>
            <li  className='pr-3 menu-item'>
                <Link to="/blog" onClick={()=>props.showMenuFn(false)}>Blog</Link>
            </li>
            <li className='pr-3 menu-item'>
                <Link to="/contacts" onClick={()=>props.showMenuFn(false)}>Contacts</Link>
            </li>
        </ul>
    )
}

export default NavigationMenu;
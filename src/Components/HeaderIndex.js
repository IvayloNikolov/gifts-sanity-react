import React from 'react';
import {NavLink} from 'react-router-dom'

function HeaderIndex(){
    return <>
        <ul className="flex">
            <li className='pr-3 menu-item'>
                <NavLink to="/">Home</NavLink>
            </li>
            <li  className='pr-3 menu-item'>
                <NavLink to="/search">Search</NavLink>
            </li>
        </ul>
    </>
}

export default HeaderIndex
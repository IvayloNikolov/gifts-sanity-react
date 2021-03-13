import React from 'react';
import Navigation from './Navigation';
import GiftLogo from '../images/gift_icon.svg';
import { NavLink } from 'react-router-dom';

function Header(){
    return  (
        <header className="text-black flex justify-between items-centered">
            <div id="header" className="flex">
                <NavLink to='/'>
                    <img src={GiftLogo} width="50px" height="50px" className="gift-animate"/>
                    <span id="logo">pickgiftfor.com</span>
                </NavLink>
                
            </div>
            
            <Navigation />
        </header>
        
    )
    
}

export default Header;

import React from 'react';
import Navigation from './Navigation'
import GiftLogo from '../images/gift_icon.svg'

function Header(){
    return  (
        <header className="text-black flex justify-between items-centered">
            <div id="header" className="flex">
                <img src={GiftLogo} width="50px" height="50px" className="gift-animate"/>
                <div id="logo">pickgiftfor.com</div>
                
            </div>
            
            <Navigation />
        </header>
        
    )
    
}

export default Header;

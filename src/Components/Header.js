import React from 'react';
import Navigation from './Navigation'

function Header(){
    return  (
        <header className="text-black flex justify-between items-centered">
            <div id="logo">pickgiftfor.com</div>
            <Navigation />
        </header>
        
    )
    
}

export default Header;

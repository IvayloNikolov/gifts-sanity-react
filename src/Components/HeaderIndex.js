import React from 'react';


function HeaderIndex(){
    return  (
        <header className="text-black flex justify-between items-centered index-navigation">
            <div id="header" className="flex">
                <Link to='/'>
                    <img src={GiftLogo} width="50px" height="50px" className="gift-animate"/>
                    <span id="logo">pickgiftfor.com</span>
                </Link>
                
            </div>
            
            <Navigation className="blog-index" />
        </header>
        
    )
}

export default HeaderIndex
import React from 'react';
import Navigation from './Navigation';
import GiftLogo from '../images/gift_icon.svg';
import { Link } from 'gatsby';

function HeaderBlog(){
    return  (
        <header className="text-black flex justify-between items-centered blog-navigation">
            <div id="header" className="flex">
                <Link to='/'>
                    <img src={GiftLogo} width="50px" height="50px" className="gift-animate"/>
                    <span id="logo">pickgiftfor.com</span>
                </Link>
                
            </div>
            
            <Navigation/>
        </header>
        
    )
    
}

export default HeaderBlog;

import React, { useState } from 'react';
import NavigationMenu from './NavigationMenu'

function Navigation(){
    const [showMenu, setShowMenu] = useState(false);
    return  (
        <nav id="menu">
            <NavigationMenu showMenuFn = {setShowMenu} >
                
            </NavigationMenu>
        </nav>
    )
}

export default Navigation;

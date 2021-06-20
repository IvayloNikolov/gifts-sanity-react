import React from 'react';
import Zodiacs from './Zodiacs';
import '../styles/wheel.css'
function Slider(){
    return <>
        
        <div id="wheel">
            <Zodiacs />
        </div>
        <div id="name-of-sign">Click the giftee's zodiac sign</div> 
    </>
}

export default Slider;
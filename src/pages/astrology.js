import React from 'react';
import '../styles/astrology.css';
import Stars from '../Components/Stars';
import Slider from '../Components/Slider';

function astrology(){
    return (
    <div id="astrology" style={{paddingTop: '50px'}}>
        <div id="moon"></div>
        <Stars />
        <Slider />
    </div>)
}

export default astrology;
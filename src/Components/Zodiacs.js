import React, { useEffect } from 'react';
import Virgo from '../svg/astrology/virgo.inline.svg';
import Aquarius from '../svg/astrology/aquarius.inline.svg';
import Aries from '../svg/astrology/aries.inline.svg';
import Cancer from '../svg/astrology/cancer.inline.svg';
import Capricorn from '../svg/astrology/capricorn.inline.svg';
import Gemini from '../svg/astrology/gemini.inline.svg';
import Leo from '../svg/astrology/leo.inline.svg';
import Libra from '../svg/astrology/libra.inline.svg';
import Pisces from '../svg/astrology/pisces.inline.svg';
import Sagittarius from '../svg/astrology/sagittarius.inline.svg';
import Scorpio from '../svg/astrology/scorpio.inline.svg';
import Taurus from '../svg/astrology/taurus.inline.svg';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}

function Zodiacs(){

    const ZodiacComponentsSVG = [Virgo, Aquarius,Aries, Cancer, Capricorn, Gemini, Leo, Libra, Pisces, Sagittarius, Scorpio, Taurus];
    let ZodiacComponents = [];
    
    ZodiacComponentsSVG.map((ZodiacComponent, index)=>{
        let radius = 0;
        let signSize = 0;
        
        if(getWindowDimensions().width <= 500){
            radius = 125;
            signSize = 15;
        }
        else{
            radius = 250;
            signSize = 25;
        }
        ZodiacComponents.push(<ZodiacComponent 
            onMouseEnter={pauseState} 
            onMouseLeave = {keepState}
            id = {ZodiacComponent.name}
            key = {ZodiacComponent.name}
            fill="white"
            width={`${signSize}px`}
            height={`${signSize}px`}
            style = {{
                position: 'absolute',
                left: radius + Math.cos(Math.PI/6*index)*radius,
                top: radius + Math.sin(Math.PI/6*index)*radius,
            }}
        />)
    })
    
    function pauseState(){
        let signsDOM = document.querySelector('#wheel');
        signsDOM.style.animationPlayState = 'paused';
    }
    function keepState(){
        let signsDOM = document.querySelector('#wheel');
        signsDOM.style.animationPlayState = 'running';
    }
    return <>
        <div id="signs">
            {ZodiacComponents}
        </div>
    </>
}

export default Zodiacs;
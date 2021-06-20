import React from 'react';
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


function Zodiacs(){
    let zodiacsPositionsXY = [];
    for(let i=0; i<12; i++){
        let zodiacXY = {
            x:  200 + Math.cos(Math.PI/6*i)*200,
            y:  200 + Math.sin(Math.PI/6*i)*200,
        }
        zodiacsPositionsXY.push(zodiacXY);
    }
    return <>
        <div id="signs">
        <Virgo onMouseEnter={()=>{
            console.log('yo');
        }} fill="white" id="virgo" width="30px" height="30px" style={{
            position: 'absolute',
            left: zodiacsPositionsXY[0].x + 'px',
            top: zodiacsPositionsXY[0].y + 'px'
        }}/>
        <Aquarius id="aquarius" fill="white" width="30px" height="30px" style={{
            position: 'absolute',
            left: zodiacsPositionsXY[1].x + 'px',
            top: zodiacsPositionsXY[1].y + 'px'
        }}/>
        <Aries id="aries" fill="white" width="30px" height="30px" style={{
            position: 'absolute',
            left: zodiacsPositionsXY[2].x + 'px',
            top: zodiacsPositionsXY[2].y + 'px'
        }}/>
        <Cancer id="cancer" fill="white" width="30px" height="30px" style={{
            position: 'absolute',
            left: zodiacsPositionsXY[3].x + 'px',
            top: zodiacsPositionsXY[3].y + 'px'
        }}/>
        <Capricorn id="capricorn" fill="white" width="30px" height="30px" style={{
            position: 'absolute',
            left: zodiacsPositionsXY[4].x + 'px',
            top: zodiacsPositionsXY[4].y + 'px'
        }}/>
        <Gemini id="gemini" fill="white" width="30px" height="30px" style={{
            position: 'absolute',
            left: zodiacsPositionsXY[5].x + 'px',
            top: zodiacsPositionsXY[5].y + 'px'
        }}/>
        <Leo id="leo" fill="white" width="30px" height="30px" style={{
            position: 'absolute',
            left: zodiacsPositionsXY[6].x + 'px',
            top: zodiacsPositionsXY[6].y + 'px'
        }}/>
        <Libra id="libra" fill="white" width="30px" height="30px" style={{
            position: 'absolute',
            left: zodiacsPositionsXY[7].x + 'px',
            top: zodiacsPositionsXY[7].y + 'px'
        }}/>
        <Pisces id="pisces" fill="white" width="30px" height="30px" style={{
            position: 'absolute',
            left: zodiacsPositionsXY[8].x + 'px',
            top: zodiacsPositionsXY[8].y + 'px'
        }}/>
        <Sagittarius id="sagittarius" fill="white" width="30px" height="30px" style={{
            position: 'absolute',
            left: zodiacsPositionsXY[9].x + 'px',
            top: zodiacsPositionsXY[9].y + 'px'
        }}/>
        <Scorpio id="scorpio" fill="white" width="30px" height="30px" style={{
            position: 'absolute',
            left: zodiacsPositionsXY[10].x + 'px',
            top: zodiacsPositionsXY[10].y + 'px'
        }}/>
        <Taurus id="taurus" fill="white" width="30px" height="30px" style={{
            position: 'absolute',
            left: zodiacsPositionsXY[11].x + 'px',
            top: zodiacsPositionsXY[11].y + 'px'
        }}/>
        </div>
    </>
}

export default Zodiacs;
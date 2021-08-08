import React from 'react';
import '../styles/astrology.css';
import Stars from '../Components/Stars';
import Slider from '../Components/Slider';
import Navigation from '../Components/Navigation';
import {Helmet} from 'react-helmet';

function astrology(){
    return (
        <>
            <Helmet>
                <style>{`
                    body{
                        background: linear-gradient(180deg, rgba(29,43,75,1) 0%, rgba(25,69,159,1) 100%) no-repeat;
                        background-size: cover;
                        background-attachment: fixed;
                    }
                    html{
                        height: 100%;
                    }`}
                </style>
            </Helmet>
            <div id="astrology" style={{paddingTop: '50px'}}>
                <Navigation></Navigation>
                <div id="moon"></div>
                <Stars />
                <Slider />
                <div id="sign">Hover over a zodiac sign to pick the recipient of the gifts.</div>
            </div>
        </>)
}

export default astrology;
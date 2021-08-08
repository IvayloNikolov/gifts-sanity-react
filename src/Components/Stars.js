import React,{useState, useEffect} from 'react';

function Stars(){
    let stars = addStars();
    return <>
        <div id="stars">
            {stars}
        </div>
    </>

    function addStars(){
        let stars = [];
        
        for(let i=0; i<20; i++){
            let starDOM = <div className="star" style={
                {
                    position: 'absolute',
                    top: 80*Math.random() + '%',
                    left: 100*Math.random() + '%',
                    animationDelay: 3*Math.random() + 's'
                }}></div>
            stars.push(starDOM);
        }
        return stars;
    }
}

 export default Stars;
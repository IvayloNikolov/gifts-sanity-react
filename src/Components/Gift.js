import React from 'react';
import sanityClient from '../client.js';    

function Gift(props){
 return (
     <div class = {`gift ${props.classList}`} >
        <img src={props.imageUrl} alt="grow"/>
        <div class="floated-text">
            <div class="gift-title">
                {props.name}
            </div>
            <div class="gift-price">
                $ {props.price}
            </div>
            <hr className="w-40 mr-5 bg-black mt-0 pt-0 mb-0"/>
            <p class="description">
                {props.description}
            </p>
            <button> 
                $ {props.price} at {props.at}
            </button>
            <div class="clear"></div>
        </div>
        <hr class="dotted intro" />
     </div>)
}

export default Gift
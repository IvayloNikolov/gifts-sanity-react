import React from 'react';
import BlockContent from "@sanity/block-content-to-react"

const serializers = {
    types: {
      code: props => (
        <span>
          {props.node.code}
        </span>
      )
    }
  }

function Gift(props){
    return (
     <div className = {`gift ${props.classList}`} >
        <img src={props.imageUrl} alt="grow"/>
        <div className="floated-text">
            <div className="gift-title">
                {props.name}
            </div>  
            <div className="gift-price">
                $ {props.price}
            </div>
            <hr className="w-40 mr-5 bg-black mt-0 pt-0 mb-0" />
            <div className="description">
                <BlockContent blocks={props.description} serializers={serializers} className="description"></BlockContent>    
            </div>
            <a href={props.link} className="shop-link" rel="nofollow"> 
                $ {props.price} at {props.at}
            </a>
            <div className="clear"></div>
        </div>
        <hr className="dotted intro" />
     </div>)
}

export default Gift
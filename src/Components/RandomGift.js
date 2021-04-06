import React, {useState, useEffect} from 'react'
import client from '../client.js';
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
 
function urlFor(source) {
  return builder.image(source)
}

function RandomGift(props){
    let [onHover, setOnHover] = useState(false);
    let [randomGift, setRandomGift] = useState(null);
    let priceClasses = "book-now p1"

    useEffect(()=>{
        client.fetch('*[_type=="gift"]', {}).then((gifts)=>{
            setRandomGift(gifts[Math.floor(7 * Math.random((gifts.length)))]);
        })
    }, [])
    if(onHover){
        priceClasses = "book-now-hover p1";
    }
    return <div className = {`gift ${props.classList}`} >
                <div className="border-black border text-xs p-3 font-thin">
                    Every product is independently selected by (obsessive) editors. Things you buy through our links may earn us a commission.
                </div>
                <div className="relative">
                    <img src={randomGift && urlFor(randomGift.Image).format('webp')} alt="grow"/>
                    <div className={priceClasses} 
                        onMouseEnter={()=>{
                            setOnHover(true);
                        }} 
                        onMouseLeave={()=>{
                            setOnHover(false)
                        }}>$ {randomGift && randomGift.Price}</div>
                </div>                
                <div className="font-light mt-5 text-xs text-center">DEAL OF THE DAY</div>
                <div className="font-extra-bold text-s text-center mt-1">
                    {randomGift && randomGift.Name}
                </div>
            </div>
}

export default RandomGift;
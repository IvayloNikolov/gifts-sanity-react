import React, {useState} from 'react'

function RandomGift(props){
    const [onHover, setOnHover] = useState(false);
    let priceClasses = "book-now p1"

    if(onHover){
        priceClasses = "book-now-hover p1";
    }
    return <div className = {`gift ${props.classList}`} >
                <div className="border-black border text-xs p-3 font-thin">
                    Every product is independently selected by (obsessive) editors. Things you buy through our links may earn us a commission.
                </div>
                <div className="relative">
                    <img src={props.imageUrl} alt="grow"/>
                    <div className={priceClasses} 
                        onMouseEnter={()=>{
                            setOnHover(true);
                        }}
                        onMouseLeave={()=>{
                            setOnHover(false)
                        }}>$59 NOW $29</div>
                </div>                
                <div className="font-light mt-5 text-xs text-center">DEAL OF THE DAY</div>
                <div className="font-extra-bold text-s text-center mt-1">
                    {props.description}
                </div>
            </div>
}

export default RandomGift;
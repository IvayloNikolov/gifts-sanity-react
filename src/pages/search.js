import React, { useState } from 'react';
import client from '../client';
import '../styles/index.css'
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client)
 
function urlFor(source) {
  return builder.image(source)
}


function addHobbiesInput(inputValue,setInputValue,setGiftsByHobby,e){
    setInputValue(e.target.value)
    let writtenSymbol = e.nativeEvent.data;
    if(writtenSymbol===" "){
        client.fetch(`*[_type=="post" && Tags[].value == "${inputValue}"]{"gifts": *[_type == "gift" && references(^._id)][0...3]}[0]`)
            .then((post)=>{ 
                let gifts = post.gifts;
                let giftsDiv = gifts.map(gift=>{
                    let overprice =  Math.floor(gift.Price * 1.2);

                    return <div key={gift.Name} className="gift-by-hobby mt-12">
                        <div style={{
                            backgroundImage: `url(${urlFor(gift.Image)})`,
                            width: '100%',
                            height: '250px',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}></div>
                        <div className="gift-name">
                            {gift.Name}
                        </div>
                        <div class="flex flex-wrap justify-between pr-2 mt-4">
                            <div class="flex">
                                <div className="index-gift-price">
                                    $ {overprice}
                                </div>
                                <div className="index-sale-price">
                                    $ {gift.Price}
                                </div>
                            </div>
                            <div class="text-xs border-black border-2 border-solid p-2">
                                10% OFF
                            </div>
                        </div>
                    </div>
                })
                setGiftsByHobby(giftsDiv)
            })
        setInputValue('');
    };
}

function Search(){
    let [inputValue, setInputValue] = useState('');
    let [giftsByHobby, setGiftsByHobby] = useState(null);
    return (<div className="index">
        <h1> Pick The Best Gift</h1>
        <div className="hobbies-input">
            <input type="text" value = {inputValue} placeholder="Enter your hobbies..." onChange={(e)=>{
                addHobbiesInput(inputValue,setInputValue,setGiftsByHobby,e)
            }} />
        </div>
        <div className="flex flex-wrap mt-4">
            {giftsByHobby}
        </div>
    </div>)
}

export default Search;

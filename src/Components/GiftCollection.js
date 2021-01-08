import React from 'react';
import Gift from './Gift';
import RandomGift from './RandomGift';

function GiftCollection(props){
    return <article>
        <h1>10 Gifts for {props.name}</h1>
        <img id="header" src="/images/blog-image.png" width="100%" alt="design"/>
        <hr class="dotted intro" />
        <RandomGift classList="absolute"
                imageUrl = "https://dummyimage.com/150x150.jpg"
                description = "These Nicer-Than-Regular-Sweatpants Sweatpants Are 50 Percent Off"
                ></RandomGift>
        <Gift
                classList="floated"
                name="Lorem Ipsum"
                price="4.00"
                description="Ipsum" 
                at="amazon"
                imageUrl = "https://dummyimage.com/300x300.jpg"
        >
        </Gift>
        <Gift
                classList="non-floated"
                name="Lorem Ipsum"
                price="4.00"
                description="Ipsum" 
                at="amazon"
                imageUrl = "https://dummyimage.com/600x300.jpg"
        >
        </Gift>
        <Gift
                classList="floated"
                name="Lorem Ipsum"
                price="4.00"
                description="Ipsum" 
                at="amazon"
                imageUrl = "https://dummyimage.com/300x300.jpg"
        >
        </Gift>
        <Gift
                classList="non-floated"
                name="Lorem Ipsum"
                price="4.00"
                description="Ipsum" 
                at="amazon"
                imageUrl = "https://dummyimage.com/600x300.jpg"
        >
        </Gift>
        <Gift
                classList="floated"
                name="Lorem Ipsum"
                price="4.00"
                description="Ipsum" 
                at="amazon"
                imageUrl = "https://dummyimage.com/300x300.jpg"
        >
        </Gift> 
        
    </article>
}

export default GiftCollection;
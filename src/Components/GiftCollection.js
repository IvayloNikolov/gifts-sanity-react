import React, {useState, useEffect} from 'react';
import Gift from './Gift';
import RandomGift from './RandomGift';
import client from '../client.js';
import imageUrlBuilder from '@sanity/image-url'
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


const builder = imageUrlBuilder(client)
 
function urlFor(source) {
  return builder.image(source)
}

function GiftCollection(props){
    let slug = props.slug; 
    const [gifts, setGifts] = useState(null); 
    const [post, setPost] = useState(null)
    useEffect(()=>{
        client.fetch(`*[_type=="gift" && GiftPost->slug.current=="best-gifts-for-${slug}"]`,{})
        .then((gifts) =>{
            setGifts(gifts.map((gift)=>{
                return (            
                <Gift
                key = {gift.Name}
                classList="floated"
                name={gift.Name}
                price={gift.Price}
                description={gift.Description} 
                at={gift.Shop}
                imageUrl = {urlFor(gift.Image).width(200)}
            >
                 </Gift>)
            }))
        })
        client.fetch(`*[_type=="post" && slug.current=="best-gifts-for-${slug}"]`, {}).then((post)=>{
            setPost(
            <> 
                <h1>8 Gifts for {props.slug}</h1>
                <img id="header" src={urlFor(post[0].Image)} width="100%" alt="design"/>
                <div className="subtitle">
                    <BlockContent blocks={post[0].Introduction} serializers={serializers} className="description"></BlockContent>    
                </div>
                <hr className="dotted intro" />
                
            </>)
        })
    },[])
    return <article >
        {post}
        <RandomGift classList="absolute"
        ></RandomGift>
        {gifts}
        
        
    </article>
}

export default GiftCollection;
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

    return <article >
        {getPostCallback(props.data.page)}
         <RandomGift classList="absolute"></RandomGift> 
        {getGiftsCallback(props.data.gifts)}
        
    </article>

  function getPostCallback(props) {
	return <>
			<h1>{props.title}</h1>
			<img id="header" src={urlFor(props.Image)} width="100%" alt="design" />
			<div className="subtitle">
				<BlockContent blocks={props._rawIntroduction} serializers={serializers} className="description"></BlockContent>
			</div>
			<hr className="dotted intro" />
		</>;
  }

  function getGiftsCallback(giftsBackend) {
		return giftsBackend.map((giftBackend) => {
			return <>
				<Gift
					key={giftBackend.node.Name}
					classList="floated"
					link={giftBackend.node.Link}
					name={giftBackend.node.Name}
					price={giftBackend.node.Price}
					description={giftBackend.node._rawDescription}
					at={giftBackend.node.Shop}
					imageUrl={urlFor(giftBackend.node.Image).width(200)}
				>
				</Gift>
			</>;
		});
  }
}

export default GiftCollection;
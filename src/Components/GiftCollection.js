import React, {useState, useEffect} from 'react';
import Gift from './Gift';
import RandomGift from './RandomGift';
import client from '../client.js';
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from "@sanity/block-content-to-react"
import Helmet from 'react-helmet';

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
    
    const [gifts, setGifts] = useState(null); 
    const [post, setPost] = useState(null)
    useEffect(()=>{
        let slug = props.slug; 
        getGifts(slug);
        getPost(slug);
    }, [])
    return <article >
        {post}
        <RandomGift classList="absolute"
        ></RandomGift>
        {gifts}
        
        
    </article>

  function getPost(slug) {
    client.fetch(`*[_type=="post" && slug.current=="best-gifts-for-${slug}"]`, {}).then((post) => {
      setPost(
        <>
          <Helmet>
            <title>{post[0].title}</title>
            <meta name="description" content={post[0].title} />
          </Helmet>
          <h1>{post[0].title}</h1>
          <img id="header" src={urlFor(post[0].Image)} width="100%" alt="design" />
          <div className="subtitle">
            <BlockContent blocks={post[0].Introduction} serializers={serializers} className="description"></BlockContent>
          </div>
          <hr className="dotted intro" />

        </>);
    });
  }

  function getGifts(slug) {
    client.fetch(`*[_type=="gift" && GiftPost->slug.current=="best-gifts-for-${slug}"]`, {})
      .then((gifts) => {
        setGifts(gifts.map((gift) => {
          return (
            <Gift
              key={gift.Name}
              classList="floated"
              name={gift.Name}
              price={gift.Price}
              description={gift.Description}
              at={gift.Shop}
              imageUrl={urlFor(gift.Image).width(200)}
            >
            </Gift>);
        }));
      });
  }
}

export default GiftCollection;
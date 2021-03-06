import React, {useEffect, useState} from 'react';
import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from "@sanity/block-content-to-react"
import { Link, useStaticQuery, graphql } from 'gatsby';

function readMore(input){
    if(input.length<250){
        return input;
    }
    else{
        return input.slice(0,250) + `...` ;
    }
}

const serializers = {
    types: {block: props=>{
        return <>
            <div className="px-6 pb-4 mt-2 text-s">
                {readMore(props.children[0])}
                <span className="text-red-500"> Read more &gt;</span> 
            </div>
        </>

}}}


const builder = imageUrlBuilder(client)

function urlFor(source) {
    return builder.image(source)
  }

function RecentPosts(){

    let query = graphql`query MyQuery {
        allSanityPost {
          nodes {
            id
            title
            _rawIntroduction
            Image {
              _key
              _type
              _rawAsset
              _rawHotspot
              _rawCrop
            }
            slug {
              _key
              current
              _type
            }
            _rawImage
          }
        }
      }
      `
    let recentPosts = useStaticQuery(query);

    let recentpostsDiv = recentPosts.allSanityPost.nodes.map((post)=>{
        return <>
        <div key={post.slug.current}
            className="post">
            <Link to = {`/blog/${post.slug.current}/`}>
                <img src={urlFor(post._rawImage).height(230).quality(60).format('webp').url()} alt = "art"/>
                <div className="author">Author: Ivaylo Nikolov</div>
                <BlockContent 
                    blocks={post._rawIntroduction} 
                    serializers={serializers}
                    className="posts">
                </BlockContent>    
            </Link>
        </div>                    
        </>
    });

    return <div className="recent-posts mb-20">{recentpostsDiv}</div>
}

export default RecentPosts;
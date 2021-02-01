import React, {useEffect, useState} from 'react';
import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from "@sanity/block-content-to-react"
import { Link } from 'react-router-dom';

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
        console.log(props);
        return <>
            <div class="px-6 pb-4 mt-1 text-s">
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
    const [postsDiv, setPostsDiv] = useState(null);
    
    useEffect(()=>{
        client.fetch(`*[_type=="post"]`, {}).then((posts)=>{
            
            let tempPosts = posts.map((post)=>{
                console.log(<BlockContent 
                    blocks={post.Introduction} 
                    serializers={serializers} 
                    className="posts"></BlockContent>)
                return (
                <div key={post.slug.current}
                    className="post">
                    <Link to = {`${post.slug.current}`}>
                        <img src={urlFor(post.Image)} alt = "art"/>
                        <div className="author">Ivaylo Nikolov</div>
                        <BlockContent 
                            blocks={post.Introduction} 
                            serializers={serializers}
                            className="posts"></BlockContent>    
                    </Link>
                </div>                    
                )
            })
            setPostsDiv(tempPosts)
        })
    }, [])
    return <div className="recent-posts mb-20">{postsDiv}</div>
}

export default RecentPosts;
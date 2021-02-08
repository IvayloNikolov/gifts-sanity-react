import React from 'react';
import GiftCollection from '../Components/GiftCollection'
import "../styles/blog.css";

function BlogPost(props){
  let url_slug = props.match.params.url_slug;

    return <>
        <div id="wrap">
            <hr className="intro" />
            <div className="relative">
                <GiftCollection slug={url_slug} />
            </div>
        </div>
    </>
}

export default BlogPost;
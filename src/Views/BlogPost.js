import React from 'react';
import GiftCollection from '../Components/GiftCollection'
import "../styles/blog.css";

function BlogPost(props){
  let url_slug = props.match.params.url_slug;
    
  console.log(url_slug)
     return <div id="wrap">
        <hr class="intro"/>
        <div className="relative">
            <GiftCollection name={url_slug} />
        </div>
    </div>
}

export default BlogPost;
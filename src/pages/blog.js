import React from 'react';
import GiftCollection from '../Components/GiftCollection'
import "../styles/blogPost.css";
import HeaderBlog from '../Components/HeaderBlog'

function blog(context){
	let passedData = context.pageContext;
    return <>
        <HeaderBlog />
        <div id="wrap">
            <hr className="intro" />
            <div className="relative">
                <GiftCollection data={passedData} />
            </div>
        </div>
    </>
}

export default blog;
import React from 'react';
import GiftCollection from '../Components/GiftCollection'
import "../styles/blogPost.css";
import HeaderBlog from '../Components/HeaderBlog';
import SEO from '../Components/SEO';

function blog(context){
    let passedData = context.pageContext;
    let title = context.pageContext.page.title;
    let description = context.pageContext.page.DescriptionGoogle;
    return <>
        <SEO title={`${title} - pickthebes.gifts`} image="" description={description} />
        <link rel="cannonical" href="https://www.pickthebest.gifts/blog/best-gifts-for-movie-lovers/"></link>
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
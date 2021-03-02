import React from 'react';
import "../styles/blogs.css";
import AllPosts from '../Components/AllPosts.js';
import HeaderIndex from '../Components/HeaderIndex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as GiftSvg} from '../images/g10.svg';


function Blog(){
     return <>
        
        <section id="gift-header">
            <HeaderIndex></HeaderIndex>
            <GiftSvg style={{margin: '0 auto'}} />
            <h1>Hey, you've come across the <em>best</em> place <br />
            to pick the perfect <em>gift</em> </h1>
        </section>


            <AllPosts></AllPosts>
        </>
}

export default Blog;
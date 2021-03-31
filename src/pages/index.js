import React, {Component} from 'react';
import "../styles/blog.css";
import "../styles/header.css";
import AllPosts from '../Components/AllPosts.js';
import GiftSvg from '../svg/gift-box.inline.svg';
import Navigation from '../Components/Navigation';
import SEO from '../Components/SEO';

function index(){
      return <>            
      <SEO title="Pick the best gifts - pickthebest.gifts" image="" description="Picking the perfect present might be a hard task but not with our help. We have awesome articles that can help you with that." />
        <section id="gift-header" className="pt-6">
            <Navigation></Navigation>
            <h1>The <em>best</em> gift you can pick <br />
            is waiting <em>for you</em> </h1>
            <GiftSvg width="300px" height="308px" style={{
              margin: '0 auto',
              display: 'block',
              position: 'absolute',
              top: '300px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}/>
            </section>
          <AllPosts></AllPosts>
      </> 
}

export default index;
import React, {Component} from 'react';
import "../styles/blog.css";
import "../styles/header.css";
import AllPosts from '../Components/AllPosts.js';
import GiftSvg from '../svg/gift-box.inline.svg';
import anime from 'animejs/lib/anime.es.js';
import Navigation from '../Components/Navigation';

function Index(){
    React.useEffect(()=>{
        shakeGift();
    })
    
     return <>            
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

  function shakeGift() {
    const xMax = 16;
    anime({
      targets: [document.querySelectorAll('.hat')],
      easing: 'easeInOutSine',
      duration: 550,
      translateX: [
        {
          value: xMax * -1,
        },
        {
          value: xMax,
        },
        {
          value: xMax / -2,
        },
        {
          value: xMax / 2,
        },
        {
          value: 0,
        }
      ],
      autoplay: true,
      complete: (anim) => {
        setTimeout(() => {
          anim.restart();
        }, 5000);

      }
    });
  }
}

export default Index;
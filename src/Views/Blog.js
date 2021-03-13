import React from 'react';
import "../styles/blogs.css";
import AllPosts from '../Components/AllPosts.js';
import HeaderIndex from '../Components/HeaderIndex';
import { ReactComponent as GiftSvg} from '../images/g10.svg';
import anime from 'animejs/lib/anime.es.js';
function Blog(){
    React.useEffect(()=>{
        shakeGift();
    })
    
     return <>
            <section id="gift-header" className="pt-20">
                <HeaderIndex></HeaderIndex>
                <GiftSvg style={{margin: '0 auto'}} />
                <h1>The <em>best</em> gift you can pick <br />
                is waiting <em>for you</em> </h1>
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

export default Blog;
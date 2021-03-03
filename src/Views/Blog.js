import React from 'react';
import "../styles/blogs.css";
import AllPosts from '../Components/AllPosts.js';
import HeaderIndex from '../Components/HeaderIndex';
import { ReactComponent as GiftSvg} from '../images/g10.svg';
import anime from 'animejs/lib/anime.es.js';
function Blog(){
    React.useEffect(()=>{
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
                value: xMax/-2,
              },
              {
                value: xMax/2,
              },
              {
                value: 0,
              }
            ],
            autoplay: true,
            complete: (anim)=>{
                setTimeout(() => {
                    anim.restart();    
                }, 2000);
                
            }
          });
    })
    
     return <>
            <section id="gift-header">
                <HeaderIndex></HeaderIndex>
                <GiftSvg style={{margin: '0 auto'}} />
                <h1>you've come across the <em>best</em> place <br />
                to pick the perfect <em>gift</em> </h1>
            </section>
            <AllPosts></AllPosts>
        </>
}

export default Blog;
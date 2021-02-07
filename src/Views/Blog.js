import React from 'react';
import "../styles/blogs.css";
import AllPosts from '../Components/AllPosts.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Blog(){
     return (<div className="blog-wrap">
                <section id="header">
                    <h1 className="our-blogs">Our Blog Articles</h1>
                    <p className="blogs-description">
                        We've carefully written down some articles with the perfect gift for different kind of people after days of deep research. We hope we could help you find what you were looking for but didnt know it yet.  We work with the most trusted brands like Amazon, Etsy, Displated so we can be sur that our customers are satisfied with what they purchased.
                    </p>
                    <small className="text-xs">
                        *We may or may not get a small commission fee from what you purchased from this website.
                    </small>
                    <div></div>
                    <a href="#posts" className="button relative top-10">Read more</a>
                    <div className="text-center pt-40">
                        <div>
                            <FontAwesomeIcon icon={faChevronDown} className="text-red-200"></FontAwesomeIcon>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faChevronDown} className="text-red-300"></FontAwesomeIcon>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faChevronDown} className="text-red-400"></FontAwesomeIcon>
                        </div>
                    </div> 
                </section>
                <AllPosts></AllPosts>
            </div>)
}

export default Blog;
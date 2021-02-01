import React from 'react';
import "../styles/blogs.css";
import Helmet from 'react-helmet'
import AllPosts from '../Components/AllPosts.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Blog(){
     return (<div className="blog-wrap">
                <section id="header">
                    <h1 className="our-blogs">Our Blogs</h1>
                    <p className="blogs-description">Laborum aliquip proident irure adipisicing ullamco quis aute deserunt sunt ad incididunt eiusmod qui exercitation. Veniam aliquip consectetur labore Lorem adipisicing adipisicing commodo voluptate eu fugiat nostrud laboris. Do laboris do laborum commodo in irure ad consequat amet. Qui reprehenderit elit ea amet.</p>
                    <button>Read more</button>
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
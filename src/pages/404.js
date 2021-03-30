import React from 'react';
import "../styles/404.css";
import { Link } from 'gatsby';
import NotFoundSVG from '../svg/error-404.inline.svg'

function NotFound(){
    return <>
        <div className="svg-not-found">
            <NotFoundSVG width="250px" height="250px"/>
        </div>
        <h1 className="oops">OOPS!</h1>
        <p class="not-found-404">404 - PAGE NOT FOUND!</p>
        <p class="not-found-description">The page you are looking for might have been removed, had its name changed or is temporarily unavilable</p>
        <div className = 'parent'>
            <Link to="/" className="homepage-button">GO TO HOMEPAGE</Link>
        </div>
    </>
}

export default NotFound;
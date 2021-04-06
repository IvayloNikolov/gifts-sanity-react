import React from 'react'
import '../styles/contacts.css'
import PlaceholderSVG from '../images/placeholder.inline.svg'
import PhoneSVG from '../images/phone.inline.svg'
import Navigation from '../Components/Navigation'
function contacts(){
    return <div className="background-contacts">
        <SEO title="Contact us - pickthebest.gifts" image="" description="You are always welcome to ask us questions or ask for help." />
        <Navigation></Navigation>
        <h1>
            Get in touch
        </h1>
        <p id="contact-description">
            Contact us if you have a product that would fit
            <br />
            our gift recommendations, if you need help, you have a suggestion or anything else.
        </p>
        <div id="contact-ways">
            <div id="location" class="contact-way">
                <PlaceholderSVG  width="25px" height="25px"/>
                <div class="contact-value">Bulgaria</div>
            </div>
            <div id="phone" class="contact-way">
                <PhoneSVG width="25px" height="25px" />
                <div class="contact-value">+359 876 471 437</div>
            </div>
        </div>
        <div className="contact-us-popup">
            <label for="your-name" id="your-name-label"> 
                Your name:
                <input type="text" id="your-name"/>
            </label>
            <label for="your-email" id="your-email-label"> 
                Your email:
                <input type="email" id="your-email"/>
            </label>
            <label for="your-message" id="your-message-label">
                Message:
                <textarea id="your-message">
                </textarea>
            </label>
            <button>
                Submit
            </button>
        </div>
    </div>
}

export default contacts;
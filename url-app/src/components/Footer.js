import React from "react";
import Facebook from '../images/icon-facebook.svg'
import Twitter from '../images/icon-twitter.svg'
import Pinterest from '../images/icon-pinterest.svg'
import Instagram from '../images/icon-instagram.svg'

export default function Footer() {
    return (
        <div>
            <div>
                <h1>Boost your links today</h1>
                <button>Get Started</button>
            </div>
            <div>
                <span>Shortly</span>
                <div>
                    <span>Features</span>
                    <ul>
                        <li>Link Shortening</li>
                        <li>Branded Links</li>
                        <li>Analytics</li>
                    </ul>
                </div>
                <div>
                <span>Resources</span>
                    <ul>
                        <li>Blog</li>
                        <li>Developers</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div>
                <span>Company</span>
                    <ul>
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                 <img src={Facebook} alt='facebook logo' />  
                 <img src={Twitter} alt='twitter logo' />  
                 <img src={Pinterest} alt='pinterest logo' />  
                 <img src={Instagram} alt='instagram logo' />  
                </div>
            </div>
        </div>
    )
}
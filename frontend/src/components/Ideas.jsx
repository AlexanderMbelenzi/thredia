import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaReddit, FaDiscord } from 'react-icons/fa';
import pizza6 from "/public/profile.jpg";
import { Image } from '@chakra-ui/react';
const Ideas = () => {
    return (
        <div className="about-us-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1> Share Your Ideas</h1>
                    <p> Billion Dollar Ideas </p>
                </div>
            </section>
         
            <section className="our-team-section">
                <div className="content-wrapper">
                    <h2 className='team2' >Coming soon</h2>
                    <p> Share your ideas with others, connect and innovate. Explore and find likeminded individuals.Draw inspiration from  other peoples ideas and build the next big thing. 
                        
                      <br />
               
                       <br /> <br />
                       You wanna become a billionaire ansd all you need is a big idea      </p>
                
                </div>
            </section>
        
         
        </div>
    );
}

export default Ideas;
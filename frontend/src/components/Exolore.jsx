
import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaReddit, FaDiscord } from 'react-icons/fa';
import pizza6 from "/public/profile.jpg";
import { Image } from '@chakra-ui/react';
const Explore = () => {
    return (
        <div className="about-us-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Explore</h1>
                    <p>Posts Gallery  Reels</p>
                </div>
            </section>
         
            <section className="our-team-section">
                <div className="content-wrapper">
                    <h2 className='team2' >Coming soon</h2>
                    <p>
                        this page will be an explore page where users can explore and discover new content that they haven't interacted with b4 
                    </p>
                   
                </div>
            </section>
        
         
        </div>
    );
}

export default Explore;




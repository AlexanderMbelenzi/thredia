import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaReddit, FaDiscord } from 'react-icons/fa';
import pizza6 from "/public/profile.jpg";
import { Image } from '@chakra-ui/react';
const Podcast = () => {
    return (
        <div className="about-us-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1> Podcast</h1>
                    <p>  Bluesky AI generated podcast </p>
                </div>
            </section>
         
            <section className="our-team-section">
                <div className="content-wrapper">
                    <h2 className='team2' >Coming soon</h2>
                    <p>
                Listen to our Ai generated podcast, streaming the latest trends from our discover daily page                   </p>
                   
                </div>
            </section>
        
         
        </div>
    );
}

export default Podcast;


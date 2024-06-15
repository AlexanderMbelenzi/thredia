import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaReddit, FaDiscord } from 'react-icons/fa';
import pizza6 from "/public/profile.jpg";
import { Image } from '@chakra-ui/react';
const Support = () => {
    return (
        <div className="about-us-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Support</h1>
                    <p> Reddit Support & Help </p>
                </div>
            </section>
         
            <section className="our-team-section">
                <div className="content-wrapper">
                    <h2 className='team2' >FAQ</h2>
                    <p> Share the problems 
                      
                      <br />
               
                       <br /> <br />
                       Your problem is my solution      </p>
                
                </div>
            </section>
        
         
        </div>
    );
}

export default Support;

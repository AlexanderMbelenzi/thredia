import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaReddit, FaDiscord } from 'react-icons/fa';
import pizza6 from "/public/profile.jpg";
import { Image } from '@chakra-ui/react';
const Topics = () => {
    return (
        <div className="about-us-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Topics</h1>
                    <p>Top most trending topics</p>
                </div>
            </section>
         
            <section className="our-team-section">
                <div className="content-wrapper">
                    <h2 className='team2' >Coming soon</h2>
                    <p>
                        this feature will allow a series of topic selector buttons across the top. each  will allow users to explore  topics in depth and find new exciting content
                        the default topic or the first topic will have its posts displayed on the home layout
                    </p>
                   
                </div>
            </section>
        
         
        </div>
    );
}

export default Topics;




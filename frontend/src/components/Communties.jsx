import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaReddit, FaDiscord } from 'react-icons/fa';
import pizza6 from "/public/profile.jpg";
import { Image } from '@chakra-ui/react';
const Communities = () => {
    return (
        <div className="about-us-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Communities</h1>
                    <p>A place for high growth individuals</p>
                </div>
            </section>
         
            <section className="our-team-section">
                <div className="content-wrapper">
                    <h2 className='team2' >Coming soon</h2>
                    <p>
                      <br />
               
                      Join the private network for high-growth founders and get to interact with the most succesfull founders,
                       CEOs and enterprenuerrs and learn from the them  <br />
                       This feature wil also allow users to create their own standalone communities  which will come as an independed website.       </p>
                     
                </div>
            </section>
        
         
        </div>
    );
}

export default Communities;


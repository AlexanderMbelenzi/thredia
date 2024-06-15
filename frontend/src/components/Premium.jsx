import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaReddit, FaDiscord } from 'react-icons/fa';
import pizza6 from "/public/profile.jpg";
import { Image } from '@chakra-ui/react';
const Premium = () => {
    return (
        <div className="about-us-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Premium</h1>
                    <p>Premium Features</p>
                </div>
            </section>
         
            <section className="our-team-section">
                <div className="content-wrapper">
                    <h2 className='team2' >Coming soon</h2>
                    <p>
                     Access to communities <br />
                     No advertisement <br />
                     Data structured and semantic search <br />
                     Data analytics and performance tracking <br />
                     Accesciblity and customization   <br />
                     Visualization map <br />
                     Edit Post <br />
                     Longer videos and posts   <br />
                     Verification <br />
                                   </p>
                     
                </div>
            </section>
        
         
        </div>
    );
}

export default Premium;




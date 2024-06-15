import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaReddit, FaDiscord } from 'react-icons/fa';
import pizza6 from "/public/profile.jpg";
import { Image } from '@chakra-ui/react';
const Discoverdaily = () => {
    return (
        <div className="about-us-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Disover Daily</h1>
                    <p> Tech news Busines news </p>
                </div>
            </section>
         
            <section className="our-team-section">
                <div className="content-wrapper">
                    <h2 className='team2' >Coming soon</h2>
                    <p>
                    Top most trending news from the world of tech and business
                    </p>
                   
                </div>
            </section>
        
         
        </div>
    );
}

export default Discoverdaily;




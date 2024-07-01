import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaReddit, FaDiscord } from 'react-icons/fa';
import pizza6 from "/public/profile.jpg";
import { Image } from '@chakra-ui/react';
const Contactus = () => {
    return (
        <div className="about-us-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Contact us</h1>
                    <p>Let's change the world together </p>
                </div>
            </section>
        
            <section className="our-values-section">
                <div className="content-wrapper">
                   
                    <ul>
                        <h3>Telephone</h3>
                        <li><strong>+254 703394794</strong> </li>
                        <h3>Email</h3>
                        <li><strong>bluesky.info@gmail.com</strong></li>
                        <h3>Offices</h3>
                        <li><strong>Westend towers. 3rd floor. Waiyaki way/ Westlands NRB KNY</strong></li>
                        <li><strong></strong>Opposite safaricom house</li>
                        <li><strong>Open hours</strong> 8:00 AM - 5:00 PM</li>
                      
                    </ul>
                </div>
            </section>
     
            <section className="join-us-section">
                <div className="content-wrapper">
                    <h2  className='team' >Join Us</h2>
                    <p>
                    Become a part of bluesky, where your voice matters! Connect with diverse individuals, 
                    share your stories, and help shape a better world. Be a part of the conversation!                         <a href="/careers">Explore Careers</a>
                    </p>
                </div>
            </section>
            <section className="social-links-section">
                <div className="content-wrapper">
                    <h2 className='team'>join our community</h2>
                    <div className="social-icons">

                        <a href="https://instagram.com" aria-label="Instagram" className="social-icon">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com" aria-label="Twitter" className="social-icon">
                            <FaTwitter />
                        </a>
                        <a href="https://tiktok.com" aria-label="TikTok" className="social-icon">
                            <FaTiktok />
                        </a>
                        <a href="https://reddit.com" aria-label="Reddit" className="social-icon">
                            <FaReddit />
                        </a>
                        <a href="https://youtube.com" aria-label="Reddit" className="social-icon">
                            <FaYoutube />
                        </a>
                        <a href="https://facebook.com" aria-label="Facebook" className="social-icon">
                            <FaFacebook />
                        </a>
                        <a href="https://discord.com" aria-label="Discord" className="social-icon">
                            <FaDiscord />
                        </a>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="content-wrapper">
                    <p>&copy; 2024@bluesky. All rights reserved.</p>
                    <nav>
                        <ul>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/terms">Terms of Service</a></li>
                            <li><a href="/contactus">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    );
}

export default Contactus;

import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaReddit, FaDiscord } from 'react-icons/fa';
import pizza6 from "/public/profile.jpg";
import { Image } from '@chakra-ui/react';
const Comingsoon = () => {
    return (
        <div className="about-us-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Coming soon</h1>
                    <p>Realising new features every week </p>
                </div>
            </section>
        
            <section className="our-values-section">
                <div className="content-wrapper">
                    <h2>more features</h2>
                    <ul>
                        <li><strong>Topics:</strong> This feature wil allow users to expore each topic of interest  in depth and find new exciting content.</li>
                        <li><strong>Explore:</strong> This feature wil allow  users to dicscover and explore new content that haven't interacted with before.
                        To ensure personalized news experience, we shall rollout an AI assistant that will understant your needs 
                        and catter only to your preference while  maintaing your privacy </li>
                        <li><strong>Thw wall of shame:</strong> This page will publish the most classified news from all corners of the globe by anonymous users</li>
                        <li><strong>Goanonymous:</strong> Users wil have the option to go anonymous and hide their true identity.
                         they wil still have the ability to post and comment on posts and share anonymous wall of shame's classified news
                       </li>
                        <li><strong>Podacst:</strong> The podacst feature will allow users to stream the latest news from our discover page in a soothing AI generated audio.
                       </li>
                        <li><strong>Communities:</strong>Users will also be able to create indepedent and self moderated communities 
                         and also join communities of interest.</li>
                        <li><strong>Premium:</strong>                               Access to; <br />
communities <br />
No advertisement  <br />
Data structured and semantic search <br />
Data analytics and performance tracking <br />
Accesciblity and customization <br />
Wall of shame <br />
Go anonymous <br />
Longer videos and posts <br />
Verification badge .</li>
                      
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

export default Comingsoon;




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
                    <p>Realising new featutre every week </p>
                </div>
            </section>
        
            <section className="our-values-section">
                <div className="content-wrapper">
                    <h2>more features</h2>
                    <ul>
                        <li><strong>Topics:</strong> This feature wil alow users to expore each topic of interest  in depth and find new exciting content.</li>
                        <li><strong>Explore:</strong> This feature wil allow  users to dicscover and explore new content that haven't interacted with before.</li>
                        <li><strong>Discover Daily:</strong> Discovery page will be the front page of tech and businesss news on the internent.
                         A palace where people can get to know at first hand what is happenning in the businesss and tech world.</li>
                        <li><strong>Reddit500:</strong> Reddit500 will a be a list of the top 500 most promising companies and startups in the world.
                         it help both investors and interested parties to dicover the big fat pitch they would be mising on.
                          both startups and companies and users wil be allowed to create their own company profiles for others to be able to  discover them</li>
                        <li><strong>Podacst:</strong> The podacst feature will allow users to stream the latest news from our discover page in a soothing AI generated audio.
                         big time enterprenuer interviews will also be offered in the package</li>
                        <li><strong>Communities:</strong>Thehe private network for high-growth founders  will allow intrested users to interact with the most 
                        succesfull founders, CEOs and enterprenuerrs and learn from the them. This feature wil also allow users to create their own standalone
                         communities which will come as an independed website.</li>
                        <li><strong>Premium:</strong>            Access to communities <br />
No advertisement  <br />
Data structured and semantic search <br />
Data analytics and performance tracking <br />
Accesciblity and customization <br />
Visualization map <br />
Edit Post <br />
Longer videos and posts <br />
Verification badge .</li>
                      
                    </ul>
                </div>
            </section>
     
            <section className="join-us-section">
                <div className="content-wrapper">
                    <h2  className='team' >Join Us</h2>
                    <p>
                        Whether you're a content creator, a developer, or simply passionate about building communities, there's a place for you here.
                         <a href="/careers">Explore Careers</a>
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
                    <p>&copy; 2024@reddit. All rights reserved.</p>
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




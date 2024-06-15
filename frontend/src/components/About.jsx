import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaReddit, FaDiscord } from 'react-icons/fa';
import pizza6 from "/public/profile.jpg";
import { Image } from '@chakra-ui/react';
const About = () => {
    return (
        <div className="about-us-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Reddit</h1>
                    <p>Connecting Communities, Sharing Knowledge</p>
                </div>
            </section>
            <section className="our-story-section">
                <div className="content-wrapper">
                    <h2>Our Story</h2>
                    <p>
                        Founded with the vision to bring people together, our platform serves as a hub for diverse communities to connect, share ideas, and grow together. Our mission is to empower individuals through shared experiences and collective knowledge.
                    </p>
                </div>
            </section>
            <section className="our-values-section">
                <div className="content-wrapper">
                    <h2>Our Values</h2>
                    <ul>
                        <li><strong>Community:</strong> We believe in the power of community and strive to foster a supportive and inclusive environment for all.</li>
                        <li><strong>Empowerment:</strong> We empower our users by providing a platform for free expression and the exchange of ideas.</li>
                        <li><strong>Innovation:</strong> We are committed to constantly evolving and improving our platform to meet the needs of our users.</li>
                        <li><strong>Integrity:</strong> We operate with transparency and integrity, ensuring a trustworthy experience for everyone.</li>
                    </ul>
                </div>
            </section>
            <section className="our-team-section">
                <div className="content-wrapper">
                    <h2 className='team2' >Meet the Team</h2>
                    <p>
                        Our dedicated team of professionals works tirelessly to maintain and enhance the platform. We are passionate about creating a space where everyone can feel safe and valued.
                    </p>
                    <div className="team-grid">
                        <div className="team-member">
                        <Image src={pizza6} alt="Pizza 4"  />

                            <h3>Mbelenzi Alexander</h3>
                            <p>Founder & CEO</p>
                        </div>
                        <div className="team-member">
                        <Image src={pizza6} alt="Pizza 4"  />
                            <h3>Kyalo Musyoka</h3>
                            <p>Chief Technology OfFicer</p>
                        </div>
                        {/* Add more team members as needed */}
                    </div>
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

export default About;




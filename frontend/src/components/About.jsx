import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaReddit, FaDiscord } from 'react-icons/fa';
import pizza6 from "/public/profile.jpg";
import { Image } from '@chakra-ui/react';
const About = () => {
    return (
        <div className="about-us-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Bluesky</h1>
                    <p> Your Voice, Our Worlds</p>
                </div>
            </section>
            <section className="our-story-section">
                <div className="content-wrapper">
                    <h2>Our Story</h2>
                    <p>
                    At bluesky, we’re not just about trends & news; we’re about connecting people, sparking conversations, 
                    and empowering voices from every corner of the globe.

                    Our mission? To Inform, Engage, and Empower. We believe in the power of free speech and expression,
                     creating a space where your opinions matter and your stories can shine.

                   join the bluesky community where diverse voices come together to share, inspire, and make a difference. 
                   Let’s shape the world together, one story at a time!
                    </p>
                </div>
            </section>
            <section className="our-values-section">
                <div className="content-wrapper">
                    <h2>Our Values</h2>
                    <ul>
  <li><strong>Integrity:</strong> We are committed to creating a space where everyone can feel safe and valued. Trust is the cornerstone of our relationship with our audience.</li>
  <li><strong>Empowerment:</strong> We believe in the power of every individual’s voice. We provide a platform where everyone can express their opinions freely and confidently.</li>
  <li><strong>Community:</strong> We foster a sense of belonging by connecting diverse communities. We encourage respectful dialogue and mutual understanding.</li>
  <li><strong>Innovation:</strong> We are always evolving, embracing new technologies and ideas to enhance how we share news and information.</li>
  <li><strong>Respect:</strong> We value every perspective and treat all individuals with dignity and respect. We strive to create an inclusive environment for all.</li>
  <li><strong>Transparency:</strong> We operate with openness, ensuring our processes and decisions are clear to our audience.</li>
  </ul>
                </div>
            </section>
            <section className="our-team-section">
                <div className="content-wrapper">
                    <h2 className='team2' >Meet the Team</h2>
                
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
                    Become a part of bluesky, where your voice matters! Connect with diverse individuals, 
                    share your stories, and help shape a better world. Be a part of the conversation!
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

export default About;




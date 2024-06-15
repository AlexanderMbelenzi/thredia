import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaReddit, FaDiscord } from 'react-icons/fa';
import pizza6 from "/public/profile.jpg";
import { Image } from '@chakra-ui/react';
const Solve = () => {
    return (
        <div className="about-us-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Solve this</h1>
                    <p> Billion Dollar Problems </p>
                </div>
            </section>
         
            <section className="our-team-section">
                <div className="content-wrapper">
                    <h2 className='team2' >Coming soon</h2>
                    <p> Share the problems and challenges you face and let others draw inspiration and  solve it for you. 
                        You want to become a billionaire, solve a billion dolar problem and help a billion people
                      <br />
               
                       <br /> <br />
                       Your problem is my solution      </p>
                
                </div>
            </section>
        
         
        </div>
    );
}

export default Solve;


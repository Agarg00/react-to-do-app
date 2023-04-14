import React from "react";
import Navbar from "../Nav/Nav";
import './ContactUs.css';
import { SocialIcon } from "react-social-icons";
import icon from './icons8-contact-80.png'
import ParticlesBg from "particles-bg";

const ContactUs = () => {
    return (
        <div>
            <ParticlesBg type="cobweb" bg={true} />
            <div className="App">
                <img 
                    className="ma2 bg-white" 
                    alt="icon" 
                    src={icon} 
                    height="50px"
                />

                <h1>Contact Page</h1>

            </div>
            <ul className="nav">
                <Navbar />
            </ul>
            <div className="algin f6">
                <h3>If you like the work, you can drop a star on my github:</h3>
                <SocialIcon 
                    style={{'height':'30px', 'width':'50px','marginTop':'10px'}} 
                    url="https://github.com/Agarg00/react-to-do-app" 
                />
            </div>
        </div>
    );
}

export default ContactUs;
import React from "react";
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram, FiFacebook } from 'react-icons/fi';

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.facebook.com/arjun.gautam30/" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiFacebook />
            </a>
            <a href="https://instagram.com/arjun.gtm/" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiInstagram />
            </a>
            <a href="https://www.github.com/arjun-gtm/" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiGithub />
            </a>
        </div>
    );
}

export default Social;
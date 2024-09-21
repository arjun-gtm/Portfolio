import React from 'react';
import "./footer.css";
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram, FiFacebook } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Arjun Gautam</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>
            <div className="footer__social">
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
            <span className="footer__copy"></span>
        </div>
    </footer>
  );
}

export default Footer;
import React from 'react';
import '../App.css';
import { DownloadButton } from './DownloadButton';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>FOR HIRE</h1>
            <p>Computer Science Graduate</p>
            <div className="hero-btns">
                <DownloadButton 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    RESUME
                </DownloadButton>
            </div>
            <div className="social-media">
            <a className="social-icon-link github"
                href='https://github.com/alexmgonzalez'
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
            >
                <i className="fab fa-github"></i>
            </a>
            <a className="social-icon-link linkedin"
                href='https://www.linkedin.com/in/alexander-gonzalez99/'
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
            >
                <i className="fab fa-linkedin"></i>
            </a>
            </div>
        </div>
    );
}

export default HeroSection

import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="./videos/video.mp4" autoPlay loop muted />
            <h1>HIRE ME PLEASE</h1>
            <p>You won't regret it!</p>
            <div className="hero-btns">
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    ABOUT ME
                </Button>
            </div>
        </div>
    );
}

export default HeroSection

import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--blackoutline'];

const SIZES = ['btn--medium', 'btn--large', 'btn--large--download'];

export const DownloadButton = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
        ? buttonStyle 
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <a href={'../resume.pdf'} download="resume.pdf">
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </a>
    );
};

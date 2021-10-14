import React from 'react'
import '../../App.css'
import { DownloadButton } from '../DownloadButton';

export default function Resume(){
    return (
        <>
            <div className='resume'>
                <h1 className='resume-header'> RESUME </h1>
                <div className="resume-btn">
                    <DownloadButton 
                        className='btns' 
                        buttonStyle='btn--blackoutline'
                        buttonSize='btn--large--download'
                    >
                        CLICK TO DOWNLOAD RESUME
                    </DownloadButton>
                </div>
            </div>
        </>
    );

}
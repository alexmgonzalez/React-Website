import React from 'react'
import ProjectCardItem from './ProjectCardItem'
import './Cards.css';

function ProjectCards() {
    return (
        <div className='cards'>
            <h1>Look at Some of My Past Projects!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <ProjectCardItem 
                            src = "./images/kmeans.jpg"
                            text="Take a look at my resume to see how I could fit on your team"
                            label='K-Means'
                            download='../kmeans.zip'
                            downloadLabel='kmeans.zip'
                        />
                        <ProjectCardItem 
                            src = "./images/DVP.jpg"
                            text="Check out some of my past Projects and see what I have done"
                            label='Simulator for Distance Vector Routing'
                            download='../dvr.zip'
                            downloadLabel='dvr.zip'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <ProjectCardItem 
                            src = "./images/mips.png"
                            text="Take a look at my resume to see how I could fit on your team"
                            label='MIPS Simulator'
                            download='../MIPS_Simulator.zip'
                            downloadLabel='MIPS_Simulator.zip'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProjectCards

import React from 'react'
import ProjectCardItem from './ProjectCardItem'
import './Cards.css';
import kmeans from '../images/kmeans.jpg';
import dvp from '../images/DVP.jpg';
import mips from '../images/mips.png';

function ProjectCards() {
    return (
        <div className='cards'>
            <h1>Look at Some of My Past Projects!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <ProjectCardItem 
                            src = {kmeans}
                            text="Simulation of the K-Means Algorithm for clustering"
                            label='K-Means'
                            path = 'https://github.com/alexmgonzalez/kmeans-algorithm'
                        />
                        <ProjectCardItem 
                            src = {dvp}
                            text="Simulation of Distance Vector Routing for a network"
                            label='Distance Vector Routing'
                            path='https://github.com/alexmgonzalez/distance-vector-routing'
                        />
                    </ul>
                    <ul className='cards__items2'>
                        <ProjectCardItem 
                            src = {mips}
                            text="Instruction-by-instruction simulator for a MIPS Processor"
                            label='MIPS Simulator'
                            path = 'https://github.com/alexmgonzalez/mips-simulator'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProjectCards

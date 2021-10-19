import React from 'react'
import ProjectCardItem from './ProjectCardItem'
import './Cards.css';
import kmeans from '../images/kmeans.jpg';
import dvp from '../images/DVP.jpg';
import mips from '../images/mips.png';
import kmeansdownload from '../kmeans.zip'
import dvrdownload from '../dvr.zip'
import mipsdownload from '../MIPS_Simulator.zip'

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
                            download={kmeansdownload}
                            downloadLabel='kmeans.zip'
                        />
                        <ProjectCardItem 
                            src = {dvp}
                            text="Simulation of Distance Vector Routing"
                            label='Distance Vector Routing'
                            download={dvrdownload}
                            downloadLabel='dvr.zip'
                        />
                    </ul>
                    <ul className='cards__items2'>
                        <ProjectCardItem 
                            src = {mips}
                            text="Instruction-by-instruction simulator for a MIPS Processo"
                            label='MIPS Simulator'
                            download={mipsdownload}
                            downloadLabel='MIPS_Simulator.zip'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProjectCards

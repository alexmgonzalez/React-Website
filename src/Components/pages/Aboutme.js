import React from 'react'
import '../../App.css'
import '../../AboutMe.css'

export default function AboutMe(){
    return(
        <>
            <h1 className='about-me'>ABOUT ME</h1>
            <div className='about-me-content'>
                <h1>Here Are Some Things About Me!</h1>
                <p className='about-me-p'>
                    My passion for computers started long before I could walk,
                    so it only made sense for me to pursue a career in which I
                    could utilize this passion. In high school, I made sure to take
                    the first programming class offered, as I became anxious to
                    learn everything I could, and doing so only made my
                    keenness for computers grow. After high school, I knew I
                    wanted to expand on the knowledge I had acquired, so I
                    decided to study Computer Science at Texas State
                    University, in which I graduated in the Spring of 2021.
                </p>
                <p>
                    At Texas State University, I have learned the skills necessary
                    to become a knowledgeable and effective software engineer.
                    Learning how to code in C++, Java, and Python, has given
                    me the opportunity to expand not only my understanding of
                    specific concepts such as data structures and parallel
                    computing, but my understanding of the field as a whole.
                </p>
                <p>
                    If given the opportunity to work for your company, I am confident that I
                    can support your team and bring the same enthusiasm I
                    have for computers to your company. I look forward to
                    speaking to you about this opportunity.
                </p>
                <img className ='image-about' src='images/me.jpg' alt='Me' />
            </div>
        </>
    )
}
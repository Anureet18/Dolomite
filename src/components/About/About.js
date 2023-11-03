import React from 'react'
import './About.css'

const About = () => {
    return (

        <div className='main_about'>
            <div className='about-us'>
                <div className='about'>
                    <img src='/images/home.png' alt='' />
                    <h1>80</h1>
                    <p>Properties available</p>
                </div>

                <div className='about'>
                    < img src='/images/man.png' alt=''/>
                    <h1>3</h1>
                    <p>Professional agents</p>
                </div>

                <div className='about'>
                    <img src='/images/hand.png' alt='' />
                    <h1>235</h1>
                    <p>Apartments viewed</p>
                </div>

                <div className='about'>
                    <img src='/images/smile.png' alt='' />
                    <h1>496</h1>
                    <p>Satisfied guests</p>
                </div>
            </div>
        </div>
    )
}

export default About
